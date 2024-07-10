import Container from '@mui/material/Container'
// import '../index.css'
import { Typography, Paper} from '@mui/material'
import DebateList from './DebateList'

const debateProps = [
    {
        _id: '312322',
        debateName: 'good vs evil'
    },
    {
        _id: '312sdf2',
        debateName: 'Trump v Biden'
    },
    {
        _id: '31aaa2322',
        debateName: 'even or odd'
    },
    {
        _id: '3123ggg22',
        debateName: 'ai good or bad'
    },
]


const Introduction = () => {


    return (
    
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '96vh'
        }}>
        <Container sx ={{ 
            bgcolor: '#EEF7FF',
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column'}}>
            <Typography align='center' variant='h4'> <h1 className='pacifico'>Debate Cafe</h1></Typography>
            <Typography align='center' variant='h5'> <h1 className='yanone'>On Debate Cafe you will find a list of hot debates, and new debates. You can interact with these debates by choosing a side, posting an opinion, or comment on someone else&apos;s post. Here are a few debates to check out!</h1></Typography>
            
            <DebateList debates={debateProps}/>
        </Container>
        </div>
      
    )
}

export default Introduction