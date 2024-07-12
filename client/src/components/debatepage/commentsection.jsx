
// import Divider from '@mui/material/Divider';

import { Typography } from '@mui/material';
import CommentCard from './commentcard';
// import '../index.css'



function CommentSection({ comments }) {

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '25px'}}>
        <Typography variant="h4" gutterBottom><div className='pacifico'>Comments</div>
        </Typography>
      </div>

      <div style={{ width: '90vw', margin: 'auto' }}> {/* Add this wrapper with style */}
        {
          comments?.map(comment => {
            return <CommentCard key={comment._id} comment={comment} />
          })
        }
      </div> 
    </>

  )

}

export default CommentSection