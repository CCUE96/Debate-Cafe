import Container from '@mui/material/Container'
import '../index.css'
import { Typography } from '@mui/material'
import DebateList from './DebateList'



const Introduction = () => {


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
        <Container sx ={{ 
            bgcolor: 'grey.300',
            borderRadius: '30px'}}>
            <Typography align='center' variant='h4'> <h1 className='pacifico'>Debate Cafe</h1></Typography>
            <Typography align='center' variant='h5'> <h1 className='yanone'>On Debate Cafe you will find a list of hot debates, and new debates. You can interact with these debates by choosing a side, posting an opinion, or comment on someone else's post. Here are a few debates to check out! </h1></Typography>
            <DebateList/>
        </Container>
        </div>
    )
}

export default Introduction