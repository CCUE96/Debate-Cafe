import { useState, useEffect } from 'react'
import Typewriter from '../typewriter';
// import '../index.css'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material';

const WelcomeCard = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true)
        }, 1500)
        return () => clearTimeout(timer)
    }, []);
   

    return (
        <Container >
            <Typography variant="h1" align="center">
                <h1 className={"blinking-cursor2s pacifico cafe"}>
                    <Typewriter className='cafe' text="Debate Cafe" speed={100} />
                </h1>
            </Typography>
            <Typography variant='h2' align='center'>
                {showText && (
                    <p className={'blinking-cursor2s yanone welcome'}>
                        <Typewriter text="Welcome to Debate Cafe! " speed={40} />
                    </p>
                )}
                </Typography>
        </Container>
    )
}

export default WelcomeCard