import { Link, Box } from '@mui/material';

const HotDebate = ({debate}) => {

  return (
         <>
          {/* <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}> */}
              <Link href= {'/debates/'+ debate._id }underline="hover"><span style={{color: 'white'}}className='yanone topic'>{debate.team1.name}</span>
              <span className='yanone topic'style={{color: 'white'}}>&nbsp;vs&nbsp;</span>
              <span className='yanone topic'style={{color: 'white'}}>{debate.team2.name}</span></Link>
            {/* </Box>
          </Box> */}
        </>
  );
}


export default HotDebate