const { AuthenticationError } = require('@apollo/server');
const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhh';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQlError(`You ain't verified`, {
        extensions: {
            code: 'UNAUTHENTICATED'
        }
    }),
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration});
        } catch {
            console.log('Your token is invalid bro')
        }

        return req;
    },
    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id};
        return jwt.sign({ data: payload}, secret, {expiresIn: expiration})
    }
};