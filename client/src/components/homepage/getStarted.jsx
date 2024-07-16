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
        setShowButton(false)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])
    
    useEffect(() => {
        if (showIntroduction && introductionRef.current) {
            introductionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showIntroduction]);


    return (

        <Container style={{ maxWidth: '4000px',}}>
            {showButton && (
                <Typography align='center' variant='h4' >
                    <Button onClick={handleGetStartedClick}> <p className={'yanone welcomeBtn'}>Click Here to Get Started</p></Button>
                </Typography>
            )}
            {showIntroduction &&<div style={{ paddingTop: '20px', paddingBottom: '20px' }}>  <div ref={introductionRef} style={{ backgroundColor: '#0158A9', borderRadius: '30px'}}><Introduction /></div> </div>}
        </Container>

    )
}

export default GetStarted