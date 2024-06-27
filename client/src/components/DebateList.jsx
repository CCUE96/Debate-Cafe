
// import '../index.css'
import { Grid, Typography, Link, Box } from '@mui/material';

const DebateList = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography align='center' variant='h4'>
          <Box className="yanone" sx={{ mb: 2 }}>Hot Debates</Box>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">Trump v Biden</Link>
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">Trump v Biden</Link>
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">Trump v Biden</Link>
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">Trump v Biden</Link>
            </Box>
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align='center' variant='h4'>
          <Box className="yanone" sx={{ mb: 2 }}>New Debates</Box>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">AI: Good or Bad</Link>
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">AI: Good or Bad</Link>
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">AI: Good or Bad</Link>
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover">AI: Good or Bad</Link>
            </Box>

          </Box>
        </Typography>
      </Grid>
    </Grid>

  );
}

export default DebateList