
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
     <div style={{ textAlign: 'center', marginTop: '100px' }}> {/* Adjusted for centering and spacing */}

      <h1 className='pacifico about-title'>About the Team</h1>

    </div>
    <div className='aboutMe' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'50vh'}}>
    <Grid container spacing={2} justifyContent={'center'} style={{width: '50%'}}>
     
    <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Paper style={{ padding: 20 , height: '300px', width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Chris</div>Cuellar</div></Typography>
          <img src="images/chris.jpg" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />

          <Typography style={{ marginTop: 10 }}>Back End Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ padding: 20 , height: '300px', width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Michael</div>Freeman</div></Typography>

          <img src="images/mike.jpg" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>React Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ padding: 20 , height: '300px', width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Spencer</div>Klinkowize</div></Typography>

          <img src="images/spencer.jpg" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>Team Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ padding: 20, height: '300px' , width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Wayne</div>Perry</div></Typography>

          <img src="images/wayne.jpg" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
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