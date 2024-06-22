import { useState, useEffect } from 'react'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Container from '@mui/material/Container'

const GetStarted = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true)
        }, 10500)
        return() => clearTimeout(timer)
    }, [])
    return (
        
        <Container>
                {showButton && (
                <Typography align='center' variant='h4' >
                <Button> <p className={'yanone welcomeBtn'}>Click Here to Get Started</p></Button>
            </Typography>
              )}
        </Container>
      
    )
}

export default GetStarted