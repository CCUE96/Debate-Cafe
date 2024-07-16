

import { Modal, Box, TextField, Button } from '@mui/material';


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
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission

    
    console.log("Form submitted");
    handleClose(); // Close the modal after submission
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle} textAlign={'center'}>
        <h2 className='yanone'>Create Debate</h2>
        <form onSubmit={handleSubmit}>
              <TextField 
          label="Team 1"
           fullWidth margin="normal"
            required />
                <TextField 
          label="Team 2"
           fullWidth margin="normal"
            required />
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
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
