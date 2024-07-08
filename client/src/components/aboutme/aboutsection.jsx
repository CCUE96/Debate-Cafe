
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function AboutMe() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px'}}>
    <Grid container spacing={2} justifyContent={'center'} style={{width: '50%'}}>

      <Grid item xs={6}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Paper style={{ padding: 20, height: '300px', width: '400px' }}>
          <Typography variant="h5">Chris Cuellar</Typography>
          <img src="" alt="Name 1" style={{ width: '100%', height: 'auto', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>Back End Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ padding: 20 , height: '300px', width: '400px' }}>
          <Typography variant="h5">Michael Freeman</Typography>
          <img src="" alt="Name 1" style={{ width: '100%', height: 'auto', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>React Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
      <Paper style={{ padding: 20, height: '300px', width: '400px'  }}>
          <Typography variant="h5">Spencer Klinkowize</Typography>
          <img src="" alt="Name 1" style={{ width: '100%', height: 'auto', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>Team Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
      <Paper style={{ padding: 20, height: '300px' , width: '400px' }}>
          <Typography variant="h5">Wayne Perry</Typography>
          <img src="" alt="Name 1" style={{ width: '100%', height: 'auto', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>goat of all things</Typography>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}

export default AboutMe;