const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
const { typeDefs, resolvers } = require("./schema");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(cors({
    origin: ['http://localhost:3000', 'https://your-render-url.com'],
  }));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware,
  }));

  // GeminiAPI route
  app.get('/api/gemini', async (req, res) => {
    try {
      const response = await axios.get('https://api.gemini.com/v1/symbols');
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

  app.post('/api/proxy', async (req, res) => {
    try {
      console.log('Proxy request body:', req.body); 
      const response = await axios.post('https://api.openai.com/v1/completions', req.body, {
        headers: {
          'Authorization': `Bearer ${process.env.VITE_GEMINI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Response from OpenAI:', response.data); 
      res.json(response.data);
    } catch (error) {
      console.error('Error in proxy:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
  

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
