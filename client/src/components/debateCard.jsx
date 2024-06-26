import React from 'react';
import Container from '@mui/material/Container';
import {Typography } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material/';

export default function DebateCard() {
    const [selectedValue, setSelectedValue] = React.useState('');
    const [showResults, setShowResults] = React.useState(false); // Step 1


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        
    };

    const handleSubmit = () => {
        console.log(`User selected: ${selectedValue}`);
        setShowResults(true);
        // Here you can handle the submission, e.g., updating a backend or state
    };

    return (
        <Container maxWidth="sm" sx={{mt: 8}}>
            <Typography variant="h5" component="h2" gutterBottom>
                Trump V Biden
            </Typography>
            <RadioGroup row name="debatePoll" value={selectedValue} onChange={handleChange}>
                <FormControlLabel value="Trump" control={<Radio />} label="Trump" />
                <FormControlLabel value="Biden" control={<Radio />} label="Biden" />
            </RadioGroup>
           
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit Vote
            </Button>
            {showResults && (
                <Typography variant="body1" sx={{ mt: 2 }}>
                    {/* Display results here. For example: */}
                    Results: {selectedValue}
                </Typography>
            )}
        </Container>
    );

}