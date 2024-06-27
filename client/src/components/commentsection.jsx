

import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import  Paper   from '@mui/material/Paper';
import { Typography } from '@mui/material';
// import '../index.css'



const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function CommentSection() {
  return (
    <div style={{ padding: 14, marginLeft: '200px', marginRight: '200px' }} className="App">
    <Typography variant="h4" gutterBottom><div className='pacifico'>Comments</div></Typography>
    <Paper style={{ padding: "40px 20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid className = "yanone" justifyContent="left" item xs zeroMinWidth>
          <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>Michael Michael</div></Typography>
          <Typography  style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
            Suspendisse congue vulputate lobortis. Pellentesque at interdum
            tortor. Quisque arcu quam, malesuada vel mauris et, posuere
            sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
            metus, efficitur lobortis nisi quis, molestie porttitor metus.
            Pellentesque et neque risus. Aliquam vulputate, mauris vitae
            tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
            lectus vitae ex.{" "}
          </Typography>
          <Typography style={{ textAlign: "left", color: "gray" }}>
            posted 1 minute ago
          </Typography>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={imgLink} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>Michael Michael</div></Typography>
          <Typography style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
              Suspendisse congue vulputate lobortis. Pellentesque at interdum
              tortor. Quisque arcu quam, malesuada vel mauris et, posuere
              sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit
              metus, efficitur lobortis nisi quis, molestie porttitor metus.
              Pellentesque et neque risus. Aliquam vulputate, mauris vitae
              tincidunt interdum, mauris mi vehicula urna, nec feugiat quam
              lectus vitae ex.{" "}
              </Typography>
              <Typography style={{ textAlign: "left", color: "gray" }}>
            posted 1 minute ago
          </Typography>
          </Grid>
        </Grid>
      </Paper>
      </div>
      )
      }

      export default CommentSection