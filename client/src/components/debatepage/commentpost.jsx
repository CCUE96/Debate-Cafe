import { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_COMMENT } from '../../utils/mutations'
import {  Box, Button, TextField, Paper, Typography} from '@mui/material';
import {  useParams } from 'react-router-dom'
import Auth from '../../utils/auth'
import { QUERY_DEBATE } from '../../utils/queries';


function PostSection() {
    const [comment, setComment] = useState('');

    const [createComment] = useMutation(ADD_COMMENT, {
      refetchQueries: [QUERY_DEBATE, "getDebate"]

    })
    const {id} = useParams()
    

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };


    const handleSubmit = async () => {
        console.log(comment); 
        console.log(Auth.getProfile())
        const { data } = await createComment({ 
          variables: {
            debateId: id, userId: Auth.getProfile().data._id, commentText: comment
          }
        })
        setComment('');
      };


    return(
      <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
    {/* <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' , width: '80vw',maxWidth: '1200px', bgcolor: '#6F5B40', color: 'white'}}> */}
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35vw' },
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
        sx={{
          backgroundColor: '#fff', // Set background color to white
          '& .MuiOutlinedInput-root': {
            
            '&.Mui-focused fieldset': {
              borderColor: 'white', // Optional: change border color when focused
            },
          },
        }}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary" sx={{marginBottom: '20px', marginTop: '10px'}} disabled={comment.length < 50}>
        Post Comment
      </Button>
    </Box>
    {/* </Paper> */}
    </div>
    )
}

export default PostSection