

import { Modal, Box, TextField, Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_DEBATE } from '../../utils/mutations';
import { useState } from 'react'
import { QUERY_DEBATES } from '../../utils/queries';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
};

const CreateModal = ({ open, handleClose }) => {
  const [createDebate] = useMutation(CREATE_DEBATE, {
    refetchQueries: [QUERY_DEBATES, "getDebates" ]
  })
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission
    console.log(team1, team2)
    const {data} = await createDebate({
      variables: {
          team1Name: team1,
          team2Name: team2
      }
    })

      console.log("Form submitted");
    handleClose(); // Close the modal after submission
  };

  const handleTeam1Change = (e) => {
    const team1Input = e.target.value;
    setTeam1(team1Input);
  }
  const handleTeam2Change = (e) => {
    const team2Input = e.target.value;
    setTeam2(team2Input);
  }


  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle} textAlign={'center'}>
        <h2 className='yanone'>Create Debate</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Team 1"
            fullWidth margin="normal"
            required
            onChange={handleTeam1Change}
            value={team1}
          />


          <TextField
            label="Team 2"
            fullWidth margin="normal"
            required
            onChange={handleTeam2Change}
            value={team2}
            />


          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button type="submit" variant="contained" color="primary">
              <span className='yanone'>Submit</span>
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateModal;
