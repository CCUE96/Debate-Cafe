
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function AboutMe() {
  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '100px' }}> {/* Adjusted for centering and spacing */}
<
      <h1 className='pacifico'>About the Team</h1>

    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'50vh'}}>
    <Grid container spacing={2} justifyContent={'center'} style={{width: '50%'}}>
     
    <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Paper style={{ padding: 20 , height: '300px', width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Chris</div>Cuellar</div></Typography>
          <img src="https://media.discordapp.net/attachments/1253520612459282453/1260364800983171162/chris_about_me_1.jpg?ex=668f0db1&is=668dbc31&hm=5bf7a2221aacd4201066318a6eefe5c2a841f250a3f94a20b19393237d6f921a&=&format=webp&width=904&height=904" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />

          <Typography style={{ marginTop: 10 }}>Back End Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ padding: 20 , height: '300px', width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Michael</div>Freeman</div></Typography>

          <img src="https://media.discordapp.net/attachments/1253520612459282453/1260039164062208040/mike_about_me_1.jpg?ex=668dde6b&is=668c8ceb&hm=8fc0f5e6b0cf50fa8df3078188d8944c547b20a989d9959dba43abf4c0cedeec&=&format=webp&width=904&height=904" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>React Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ padding: 20 , height: '300px', width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Spencer</div>Klinkowize</div></Typography>

          <img src="https://media.discordapp.net/attachments/1253520612459282453/1260038531305443378/spencer_about_me_1.png?ex=668dddd4&is=668c8c54&hm=6e133011241a3239968dc1bc1f3bc2cae7a65b3cec8f38a8e3526d19a506f875&=&format=webp&quality=lossless&width=899&height=899" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>Team Lead</Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper style={{ padding: 20, height: '300px' , width: '200px' }}>

          <Typography variant="h5"><div className='yanone'><div>Wayne</div>Perry</div></Typography>

          <img src="https://media.discordapp.net/attachments/1253520612459282453/1260038934805872671/wayne_1.png?ex=668dde34&is=668c8cb4&hm=f2b7d77ae7c5d24ccf59b033f4ff5ffc4d89897cc36bd8d329e90912997af3fd&=&format=webp&quality=lossless&width=674&height=674" alt="Name 1" style={{ width: '100%', height: 'auto', maxWidth: '200px', maxHeight: '200px', objectFit: 'contain', marginTop: 10 }} />
          <Typography style={{ marginTop: 10 }}>goat of all things</Typography>
        </Paper>
      </Grid>
    </Grid>
    </div>
    </>
  );
}

export default AboutMe;