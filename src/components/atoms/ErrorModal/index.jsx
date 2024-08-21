import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './ErrorModal.css';

const ErrorModal = ({ open, onClose }) => {
  
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="Modal">
                <Button 
                    sx={{justifyContent:"flex-end"}} 
                    className="CloseButton" 
                    onClick={onClose}
                >
                    X
                </Button>
                <h2>Sorry!</h2>
                <h3>We couldn't process the reservation. Please, try again later</h3>
              
            </Box>
        </Modal>
    )
}

export default ErrorModal

