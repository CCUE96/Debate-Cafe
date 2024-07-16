import Container from '@mui/material/Container'
// import '../index.css'
import { Typography, Paper} from '@mui/material'
import DebateList from './DebateList'
import { useQuery } from '@apollo/client'
import { QUERY_DEBATES } from '../../utils/queries'




const Introduction = () => {
    const {data, loading} = useQuery(QUERY_DEBATES)
    const debates = data?.debates || []
    console.log(debates)
    return (
    
        <div className='intro' style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '96vh'
        }}>
        <Container sx ={{ 
            bgcolor: '#6F5B40',
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column'}}>
            <Typography align='center' variant='h4'> <h1 style={{color:'white'}}className='pacifico cafe'>Debate Cafe</h1></Typography>
            <Typography align='center' variant='h5'> <h1 style={{color: 'black'}}className='yanone intro'>On Debate Cafe you will find a list of hot debates, and new debates. You can interact with these debates by choosing a side, posting an opinion, or comment on someone else&apos;s post. Here are a few debates to check out!</h1></Typography>
            
            <DebateList className='intro-list' debates={debates}/>
        </Container>
        </div>
      
    )
}

export default Introduction