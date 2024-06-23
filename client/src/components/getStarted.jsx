import { useState, useEffect, useRef } from 'react'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Container from '@mui/material/Container'
import Introduction from './introduction';

const GetStarted = () => {

    const [showButton, setShowButton] = useState(false);
    const [showIntroduction, setShowIntroduction] = useState(false);
    const introductionRef = useRef(null);

    const handleGetStartedClick = () => {
        setShowIntroduction(true);
        if (introductionRef.current) {
            introductionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])
    
    useEffect(() => {
        if (showIntroduction && introductionRef.current) {
            introductionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showIntroduction]);


    return (

        <Container>
            {showButton && (
                <Typography align='center' variant='h4' >
                    <Button onClick={handleGetStartedClick}> <p className={'yanone welcomeBtn'}>Click Here to Get Started</p></Button>
                </Typography>
            )}
            {showIntroduction && <div ref={introductionRef}><Introduction /></div>}
        </Container>

    )
}

export default GetStarted