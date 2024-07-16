
import Container from '@mui/material/Container';
import {Typography } from '@mui/material';


import Paper from '@mui/material/Paper'


import { useQuery } from '@apollo/client'
import { QUERY_DEBATE } from '../../utils/queries';
import { useParams } from 'react-router-dom';


export default function VotingSection() {
 
   
    
    const {id} = useParams();
    console.log(id, "useparams")
    const {data, loading} = useQuery(QUERY_DEBATE, {
        variables: {
            debateId: id
        }
    })
    const singleDebate = data?.debate || {}
    console.log(singleDebate, 'singledebates')
   
    
        // Here you can handle the submission, e.g., updating a backend or state
   

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 8, maxWidth: "sm", mx: "auto" }}>
          <Container maxWidth="sm" sx={{
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            
        }}>
            <Typography variant="h5" component="h2" gutterBottom>
                <div className='yanone'>{!loading?singleDebate.team1.name : ""} vs {!loading? singleDebate.team2.name: ""}</div>
            </Typography>

           
           
           
        </Container>
        </Paper>
    );

}