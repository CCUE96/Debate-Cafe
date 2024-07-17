import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField, Modal, List, ListItem, ListItemText } from '@mui/material';
import { fetchGeminiData } from '../services/geminiService';
import ChatIcon from '@mui/icons-material/Chat';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AIChatModal = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [symbols, setSymbols] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (open) {
      const fetchSymbols = async () => {
        try {
          const response = await axios.get('/api/gemini');
          console.log('API response:', response.data);
          if (Array.isArray(response.data)) {
            setSymbols(response.data);
          } else {
            console.error('Unexpected response format:', response.data);
          }
        } catch (error) {
          console.error('Error fetching symbols:', error);
        }
      };
      fetchSymbols();
    }
  }, [open]);

  const handleGenerateContent = async () => {
    if (input.trim() === '') return;

    const result = await fetchGeminiData('generate-content', { contents: [{ parts: [{ text: input }] }] });
    console.log('API result:', result); // Add this line to log the API result

    if (result && result.candidates && result.candidates[0] && result.candidates[0].content) {
      setConversation(prev => [...prev, { user: input, ai: result.candidates[0].content.parts[0].text }]);
      setInput('');
    } else {
      console.error('Unexpected response structure:', result);
    }
  };

  return (
    <div>
      <ChatIcon onClick={handleOpen} sx={{ cursor: 'pointer', fontSize: 40, color: 'blue' }} />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            AI Debate Buddy
          </Typography>
          <List sx={{ mt: 2 }}>
            {conversation.map((conv, index) => (
              <ListItem key={index}>
                <ListItemText primary={`You: ${conv.user}`} secondary={`AI: ${conv.ai}`} />
              </ListItem>
            ))}
          </List>
          <TextField
            label="Enter your input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
            size="small"
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateContent}
            sx={{ mt: 2 }}
          >
            Ask
          </Button>
          <Typography id="modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
            Gemini Symbols
          </Typography>
          <List sx={{ mt: 2 }}>
            {symbols.map((symbol, index) => (
              <ListItem key={index}>
                <ListItemText primary={symbol} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </div>
  );
};

export default AIChatModal;
