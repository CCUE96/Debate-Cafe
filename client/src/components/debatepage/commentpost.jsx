import { useState } from 'react';

import {  Box, Button, TextField, Paper, Typography} from '@mui/material';


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
      <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
    <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', width: '60vw'}}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50vw' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >

<Typography variant="h6" component="h2" sx={{ marginTop: '20px' }}> 
 <div className='yanone'>Lets see your take!</div> 
  </Typography>
      <TextField
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        variant="outlined"
        value={comment}
        onChange={handleCommentChange}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary" sx={{marginBottom: '20px', marginTop: '10px'}} disabled={comment.length < 50}>
        Post Comment
      </Button>
    </Box>
    </Paper>
    </div>
    )
}

export default PostSection