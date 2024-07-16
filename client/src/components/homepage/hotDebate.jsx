import { Link, Box } from '@mui/material';

const HotDebate = ({debate}) => {

  return (
         <>
          {/* <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}> */}
              <Link href= {'/debates/'+ debate._id }underline="hover"><span style={{color: 'white'}}className='yanone'>{debate.team1.name}</span>
              <span className='yanone'style={{color: 'white'}}>&nbsp;vs&nbsp;</span>
              <span className='yanone'style={{color: 'white'}}>{debate.team2.name}</span></Link>
            {/* </Box>
          </Box> */}
        </>
  );
}


export default HotDebate