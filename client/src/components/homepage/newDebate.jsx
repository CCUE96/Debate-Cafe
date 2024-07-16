import { Link, Box } from '@mui/material';

const NewDebate = ({debate}) => {

  return (
         <>
          {/* <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ mb: 2 }}> */}
            {console.log(debate._id)}
              <Link href={'/debates/' + debate._id} underline="hover"><span className='yanone' style={{color: 'white'}}>{debate.team1.name}</span>
              <span className='yanone'  style={{color: 'white'}}>&nbsp;vs&nbsp;</span>
             <span className='yanone'  style={{color: 'white'}}>{debate.team2.name}</span></Link>
            {/* </Box>
          </Box> */}
        </>
  );
}

export default NewDebate