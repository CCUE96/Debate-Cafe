
// import Divider from '@mui/material/Divider';

import { Typography } from '@mui/material';
import CommentCard from './commentcard';
import { useQuery } from '@apollo/client';
import { QUERY_DEBATE } from '../../utils/queries';
import { useParams } from 'react-router-dom';



function CommentSection() {
  const {id} = useParams();
    const {data, loading} = useQuery(QUERY_DEBATE, {
        variables: {
          debateId: id
        }
    });

    const comments = data?.debate.comments || []
   

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '25px'}}>
        <Typography variant="h4" gutterBottom><div className='pacifico'>Comments</div>
        </Typography>
      </div>

      <div style={{ width: '90vw', margin: 'auto' }}> 
        {
          comments?.map(comment => {
            return <CommentCard key={comment.id} comment={comment} />
          })
        }
      </div> 
    </>

  )

}

export default CommentSection