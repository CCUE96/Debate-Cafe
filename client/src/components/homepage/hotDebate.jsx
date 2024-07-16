import { Link, Box } from '@mui/material';

const HotDebate = ({debate}) => {

  return (
         <>
          {/* <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}> */}
              <Link href= {'/debates/'+ debate._id }underline="hover"><span className='yanone'>{debate.team1.name}</span>
              &nbsp;vs&nbsp;
              <span className='yanone'>{debate.team2.name}</span></Link>
            {/* </Box>
          </Box> */}
        </>
  );
}


export default HotDebate