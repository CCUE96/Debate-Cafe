import { Link, Box } from '@mui/material';

const NewDebate = ({debate}) => {

  return (
         <>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Link href='/debates' underline="hover"><span className='yanone'>{debate.debateName}</span></Link>
            </Box>
          </Box>
        </>
  );
}

export default NewDebate