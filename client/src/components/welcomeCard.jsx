import { useState, useEffect } from 'react'
import Typewriter from './typewriter';
import '../index.css'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';

const WelcomeCard = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true)
        }, 2250)
        return () => clearTimeout(timer)
    }, []);
    const [showText2, setShowText2] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText2(true)
        }, 4050)
        return () => clearTimeout(timer)
    }, []);

    return (
        <Container>
            <Typography variant="h1" align="center">
                <h1 className={"blinking-cursor2s pacifico"}>
                    <Typewriter text="Debate Cafe" speed={180} />
                </h1>
            </Typography>
            <Typography variant='h2' align='center'>
                {showText && (
                    <p className={'blinking-cursor2s yanone'}>
                        <Typewriter text="Welcome to Debate Cafe! " speed={70} />
                    </p>
                )}
                </Typography>
                <Typography variant='h2' align='center'>
                {showText2 && (
                    <p className = {'blinking-cursor yanone'}>
                        <Typewriter text="Here you will find a new and intuitive way of participating in debates!" speed={70} />
                    </p>
                )}


            </Typography>

        </Container>
    )
}

export default WelcomeCard