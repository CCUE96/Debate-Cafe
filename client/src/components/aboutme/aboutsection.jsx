
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

// function About({ aboutme }) {
//   return (
//     <>
//       <li>
//           <div>
//             <a className='about' href={aboutme.portfolio}><img src={aboutme.img} alt=''></img></a>
//           </div>
//       </li>
//     </>
//   )
// }

function AboutMe() {
  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Adjusted for centering and spacing */}

      <h1 className='pacifico about-title'>About the Team</h1>

    </div>
    <div className='aboutMe'style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'50vh', marginTop:'200px', marginBottom:'500px'}}>
    <Grid container spacing={2} justifyContent={'center'} style={{ width: '75%' }}>
  <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Paper style={{ padding: 20, height: '300px', width: '200px' }}>
      <Typography variant="h5">
        <div className='yanone'>
          <div>Chris</div>Cuellar
        </div>
      </Typography>
      <a href='https://github.com/CCUE96?tab=repositories' target='_blank' rel='noopener noreferrer'>
      <img src="images/chris.jpg" alt="Chris Cuellar" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
      </a>
      <Typography style={{ marginTop: 10 }}>Back End Lead</Typography>
    </Paper>
  </Grid>
  <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Paper style={{ padding: 20, height: '300px', width: '200px' }}>
      <Typography variant="h5">
        <div className='yanone'>
          <div>Michael</div>Freeman
        </div>
      </Typography>
      <a href='https://github.com/mikef13x?tab=repositories' target='_blank' rel='noopener noreferrer'>
      <img src="images/mike.jpg" alt="Michael Freeman" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
      </a>
      <Typography style={{ marginTop: 10 }}>React Lead</Typography>
    </Paper>
  </Grid>
  <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Paper style={{ padding: 20, height: '300px', width: '200px', marginBottom:'50px' }}>
      <Typography variant="h5">
        <div className='yanone'>
          <div>Spencer</div>Klinkowize
        </div>
      </Typography>
      <a href='https://github.com/SpencerKlink?tab=repositories' target='_blank' rel='noopener noreferrer'>
      <img src="images/spencer.jpg" alt="Spencer Klinkowize" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
      </a>
      <Typography style={{ marginTop: 10 }}>Team Lead</Typography>
    </Paper>
  </Grid>
  <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Paper style={{ padding: 20, height: '300px', width: '200px', marginBottom:'50px' }}>
      <Typography variant="h5">
        <div className='yanone'>
          <div>Wayne</div>Perry
        </div>
      </Typography>
      <a href='https://github.com/TheQuestioningCake?tab=repositoriess' target='_blank' rel='noopener noreferrer'>
      <img src="images/wayne.jpg" alt="Wayne Perry" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
      </a>
      <Typography style={{ marginTop: 10 }}>goat of all things</Typography>
    </Paper>
  </Grid>
</Grid>
    </div>
    </>
  );
}

export default AboutMe;
// export default About;