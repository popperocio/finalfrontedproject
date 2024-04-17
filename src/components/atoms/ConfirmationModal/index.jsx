import React,  { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './ConfirmationModal.css';

const ConfirmationModal = ({ email, open, onClose }) => {
  
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="Modal">
                <Button className="CloseButton" onClick={onClose}>X</Button>
               
                    <h2>Congrats!</h2>
                    <h3>We sent your vouchers to {email} </h3>
              
            </Box>
        </Modal>
    )
}

export default ConfirmationModal

