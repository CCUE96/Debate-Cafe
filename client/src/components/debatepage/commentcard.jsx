import { useState } from 'react'
// import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography, TextField } from '@mui/material';
import { Button } from '@mui/material/'
import ReplyCard from './replycard';


function CommentCard({ comment }) {
  console.log(comment)
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyComment, setReplyComment] = useState("");
  const [showReplies, setShowReplies] = useState(false)


  const toggleReplyBox = () => {
    setShowReplyBox(!showReplyBox);
  };

  const toggleShowReplies = () => {
    setShowReplies(!showReplies)
  }
  const handleSubmit = async () => {
    if (!replyComment.trim()) {
      alert("Please enter a comment.");
      return;
    }
    setReplyComment("");
    toggleReplyBox();
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        < div style={{ padding: 14, marginLeft: '200px', marginRight: '200px', width: '60vw' }} className="App">
          <Paper style={{ padding: "40px 20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt={comment.fullName} src={comment.imgLink} />
              </Grid>
              <Grid className="yanone" justifyContent="left" item xs zeroMinWidth>
                <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>{comment.fullName}</div></Typography>
                <Typography style={{ textAlign: "left" }}>
                  {comment.comment}

                </Typography>
                <Typography style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </Typography>
                <Button variant="outlined" style={{ marginTop: "10px" }} onClick={toggleReplyBox}>Reply</Button>
                <Button variant="outlined" style={{ marginTop: "10px" }} onClick={toggleShowReplies}>Show Replies</Button>
                {showReplyBox && (
                  <>
                    <TextField
                      label="Your Reply"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={replyComment}
                      onChange={(e) => setReplyComment(e.target.value)}
                      rows={4}
                      style={{ marginTop: "10px" }}

                    />
                    <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ marginBottom: '20px', marginTop: '10px' }} disabled={replyComment.length < 20}>
                      Post Reply
                    </Button>
                  </>
                )}

                {showReplies &&
                  comment?.replies?.map(reply => {
                    return <ReplyCard key={reply._id} reply={reply} />
                  })

                }
              </Grid>
            </Grid>
          </Paper>
        </div >
      </div>
    </>
  )
}

export default CommentCard