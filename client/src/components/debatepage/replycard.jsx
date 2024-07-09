import Grid from '@mui/material/Grid';

import { Typography } from '@mui/material';


function ReplyCard({ reply }) {
  console.log(reply)

  return (
    <>
      <hr />
      <Grid className="yanone" justifyContent="left" item xs zeroMinWidth>
        <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>{reply.fullName}</div></Typography>
        <Typography style={{ textAlign: "left" }}>
          {reply.message}
        </Typography>
        <Typography style={{ textAlign: "left", color: "gray" }}>
          {reply.relativeTime}    </Typography>
      </Grid>
    </>
  )
}

export default ReplyCard