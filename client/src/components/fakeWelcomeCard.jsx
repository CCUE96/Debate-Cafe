import {useState, useEffect} from 'react'
import Typewriter from './typewriter';
import '../index.css'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';
const FakeWelcomeCard = () => {
    const [showText, setShowText] = useState(false);

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
        <Typewriter text = "this site is currently being built ...." speed = {80}/>
    </p>
    )}
    </Typography>
    </Container>
)
}

export default FakeWelcomeCard