
import { useState } from 'react';
// import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography, TextField } from '@mui/material';
import { Button } from '@mui/material/'
// import '../index.css'



const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function CommentSection() {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [comment, setComment] = useState("");

  const toggleReplyBox = () => {
    setShowReplyBox(!showReplyBox);
  };

  const handleSubmit = async () => {
    // 1. Validate the input
    if (!comment.trim()) {
      alert("Please enter a comment.");
      return;
    }
  
    // 2 & 3. Here you would typically send the comment to your backend server
    // This is a placeholder for an API call
    // const response = await fetch('YOUR_BACKEND_ENDPOINT', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ comment }),
    // });
  
    // Assuming the API call is successful and you get the updated list of comments back
    // Update your state here to include the new comment
    // This is a simplified example, assuming you have a state variable for comments
    // setComments(prevComments => [...prevComments, comment]);
  
    // 4. Clear the input field after submission
    setComment("");
  
    // 5. Optionally, update the UI to show the new comment
    // This step depends on how you're managing state and rendering comments
    toggleReplyBox();
  };
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    < div style={{ padding: 14, marginLeft: '200px', marginRight: '200px', width: '60vw'}} className="App">
      <Typography variant="h4" gutterBottom><div className='pacifico'>Comments</div></Typography>
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid className="yanone" justifyContent="left" item xs zeroMinWidth>
            <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>Michael Michael</div></Typography>
            <Typography style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
            </Typography>
            <Typography style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </Typography>
            <Button variant="outlined" style={{ marginTop: "10px" }} onClick={toggleReplyBox}>Reply</Button>
          {showReplyBox && (
            <>
            <TextField
              label="Your Reply"
              variant="outlined"
              fullWidth
              multiline
              value={comment}
              onChange={(e)=> setComment(e.target.value)}
              rows={4}
              style={{ marginTop: "10px" }}
              
            />
            <Button onClick={handleSubmit} variant="contained" color="primary" sx={{marginBottom: '20px', marginTop: '10px'}} disabled={comment.length < 20}>
        Post Reply
      </Button>
            </>
          )}
          </Grid>
        </Grid>
    </Paper>
      </div >
      </div>
       {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       < div style={{ padding: 14, marginLeft: '200px', marginRight: '200px', width: '60vw'}} className="App">
         <Paper style={{ padding: "40px 20px" }}>
           <Grid container wrap="nowrap" spacing={2}>
             <Grid item>
               <Avatar alt="Remy Sharp" src={imgLink} />
             </Grid>
             <Grid className="yanone" justifyContent="left" item xs zeroMinWidth>
               <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>Michael Michael</div></Typography>
               <Typography style={{ textAlign: "left" }}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                 luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
                 Suspendisse congue vulputate lobortis. Pellentesque at interdum
                 tortor. Quisque arcu quam, malesuada vel mauris et, posuere
                 sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
                 metus, efficitur lobortis nisi quis, molestie porttitor metus.
                 Pellentesque et neque risus. Aliquam vulputate, mauris vitae
                 tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
                 lectus vitae ex.{" "}
               </Typography>
               <Typography style={{ textAlign: "left", color: "gray" }}>
                 posted 1 minute ago
               </Typography>
               <Button variant="outlined" style={{ marginTop: "10px" }} onClick={toggleReplyBox}>Reply</Button>
             {showReplyBox && (
               <>
               <TextField
                 label="Your Reply"
                 variant="outlined"
                 fullWidth
                 multiline
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
                 rows={4}
                 style={{ marginTop: "10px" }}
                 
               />
               <Button onClick={handleSubmit} variant="contained" color="primary" sx={{marginBottom: '20px', marginTop: '10px'}} disabled={comment.length < 20}>
           Post Reply
         </Button>
               </>
             )}
             </Grid>
           </Grid>
       </Paper>
         </div >
         </div> */}
      </>
      )
}

export default CommentSection