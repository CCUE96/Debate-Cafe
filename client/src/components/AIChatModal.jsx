import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Modal, List, ListItem, ListItemText } from '@mui/material';
import { fetchGeminiData } from '../services/geminiService';
import ChatIcon from '@mui/icons-material/Chat';

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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleGenerateContent = async () => {
    if (input.trim() === '') return;

    const params = {
      model: '', 
      prompt: input,
      max_tokens: 100 
    };

    console.log('Input:', input);
    try {
      const result = await fetchGeminiData(params);
      console.log('Result:', result);
      if (result) {
        setConversation(prev => [...prev, { user: input, ai: result.choices[0].text.trim() }]);
        setInput('');
      }
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <div>
      <ChatIcon onClick={handleOpen} sx={{ cursor: 'pointer', fontSize: 40, color: 'blue' }} />
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            AI Content Generator
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
        </Box>
      </Modal>
    </div>
  );
};

export default AIChatModal;