import {useState, useEffect} from 'react'
import Typewriter from './typewriter';
import '../index.css'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';


const FakeWelcomeCard = () => {
    const [showText, setShowText] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true)
        }, 6000)
        return () => clearTimeout(timer)
    }, [])
    useEffect(() => {
        const timer = setTimeout (() => {
            setShowText(true)
        }, 2250)
        return () => clearTimeout(timer)
    }, []);
return (
    <Container>
    <Typography  variant="h1" align="center">
    <h1 className={"blinking-cursor2s pacifico"}>
    <Typewriter text = "Debate Cafe" speed = {180}/>
    </h1>
    </Typography>
    <Typography variant='h2' align='center'>
    {showText && (
    <p className={'blinking-cursor yanone'}>
        <Typewriter text = "We Have Encountered an Error....." speed = {80}/>
    </p>
    )}
    </Typography>
    {showButton && (
       < Typography align='center'>
    <Button  onClick={() => navigate('/')} > <p className={'yanone welcomeBtn'}>Click Here to Head Back home</p></Button>
    </Typography>
    )}
    </Container>
)
}

export default FakeWelcomeCard