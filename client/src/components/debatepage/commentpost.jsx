import { useState } from 'react';

import {  Box, Button, TextField, Paper} from '@mui/material';


function PostSection() {
    const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };


    const handleSubmit = () => {
        console.log(comment); 
        setComment('');
      };


    return(
    <Paper>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        variant="outlined"
        value={comment}
        onChange={handleCommentChange}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Post Comment
      </Button>
    </Box>
    </Paper>
    )
}

export default PostSection