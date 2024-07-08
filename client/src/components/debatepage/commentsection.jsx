
import { useState } from 'react';
// import Divider from '@mui/material/Divider';

import { Typography } from '@mui/material';
import CommentCard from './commentcard';
// import '../index.css'




const mockProps = {imgLink: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" , fullName: 'Michael Michael', comment: "hello"}

function CommentSection() {
  // const [showReplyBox, setShowReplyBox] = useState(false);
  // const [comment, setComment] = useState("");
  // const [replies, setReplies] = useState(false)

  // const toggleReplyBox = () => {
  //   setShowReplyBox(!showReplyBox);
  // };

  // const toggleReplies = () => {
  //   setReplies(!replies)
  // }

  // const handleSubmit = async () => {

  //   if (!comment.trim()) {
  //     alert("Please enter a comment.");
  //     return;
  //   }
  //   setComment("");
  //   toggleReplyBox();
  // };
  return (
    <>
     <Typography variant="h4" gutterBottom><div className='pacifico'>Comments</div>
     </Typography>
     <CommentCard comment={mockProps}/>
     </>
      
  )
}

export default CommentSection