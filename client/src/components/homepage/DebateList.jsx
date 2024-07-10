
// import '../index.css'
import { Grid, Typography, Box } from '@mui/material';
import HotDebate from './hotDebate';
import NewDebate from './newDebate';
const DebateList = ({debates}) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography align='center' variant='h4'>
          <Box className="yanone" sx={{ mb: 2 }}>Hot Debates</Box>
          {
            debates?.map(debate => {
              return <HotDebate key ={debate._id} debate = {debate}/>
            })
          }
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align='center' variant='h4'>
          <Box className="yanone" sx={{ mb: 2 }}>New Debates</Box>
          {
            debates?.map(debate => {
              return <NewDebate key ={debate._id} debate = {debate}/>
            })
          }
        </Typography>
      </Grid>
    </Grid>

  );
}

export default DebateList