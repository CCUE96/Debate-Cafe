import { Link, Box } from '@mui/material';

const HotDebate = ({debate}) => {

  return (
         <>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href= '/debates' underline="hover">{debate.debateName}</Link>
            </Box>
          </Box>
        </>
  );
}


export default HotDebate