import React,  { useContext, useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './BookingReservation.css'
import { HotelDetails } from '../../../atoms/HotelDetails';
import ConfirmationModal from '../../../atoms/ConfirmationModal';
import { SearchContext } from '../../../../contexts/SearchContext/SearchContext';

const BookingReservation = ({hotel}) => {
  
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        passportNumber: '',
        email: '',
        confirmEmail: '',
        checked: ''
      });
    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        passportNumber: false,
        email: false,
        confirmEmail: false,
        checked: '',
      });
    const [openModal, setOpenModal] = useState(false);
    const { setIsBooking } = useContext(SearchContext);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setErrors(errors.checked);
        setFormData({
            ...formData,
            checked: event.target.checked,
        });
    };

    const handleSubmit = () => {
        let formIsValid = true;
        const newErrors = { ...errors };

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                formIsValid = false;
                newErrors[key] = true;
            } else {
                newErrors[key] = false;
            }
        });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            formIsValid = false;
            newErrors.email = true;
        }
        if (!emailRegex.test(formData.confirmEmail)) {
            formIsValid = false;
            newErrors.confirmEmail = true;
        }

        if (formData.email !== formData.confirmEmail) {
            formIsValid = false;
        }

        if (!formData.checked) {
            formIsValid = false;
            newErrors.checked = true;
        } else {
            newErrors.checked = false;
        }
    
        setErrors(newErrors);

        if (formIsValid) {
            setOpenModal(true);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false); 
    };

    const handleGoBack = () =>{
        setIsBooking(false);
    }

    return (
        <div className="BookingReservation"> 
            <div className='ReservationForm'>
                <h2>Reservation Form</h2>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    >
                    <div className='OwnerOfReservationData'>
                        <p>Who is the owner of the reservation?</p>
                        <div className="NameAndSurname">
                            <TextField 
                                sx={{ margin: '10px', width:'100%'}} 
                                required 
                                id="outlined-required" 
                                label="Name" 
                                error={errors.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                helperText={errors.name ? "Your name cannot be empty": ""}
                            />
                            <TextField 
                                sx={{ margin: '10px', width:'100%'}} 
                                required 
                                id="outlined-required" 
                                label="Surname"
                                error={errors.surname} 
                                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                                helperText={errors.surname ? "Your surname cannot be empty": ""}
                            />
                        </div>
                        <TextField 
                            sx={{margin:'10px', width: '40%'}} 
                            required 
                            id="outlined-required" 
                            label="Passport Number"
                            error={errors.passportNumber}
                            onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                            helperText={errors.passportNumber ? "Your passport number cannot be empty": ""}
                            className='Passport'
                        />
                    </div>
                    <div className='Vouchers'>
                        <p>Where do we send your vouchers?</p>
                        <TextField 
                            sx={{margin:'10px', width: '40%'}} 
                            required 
                            id="outlined-required" 
                            label="Email"
                            error={errors.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            helperText={errors.email ? "Invalid email": ""}
                            type="email"
                            className='EmailVoucher'
                        />
                        <TextField 
                            sx={{margin:'10px',width: '60%'}}
                            required 
                            id="outlined-required" 
                            label="Confirm your email" 
                            type="email"
                            error={errors.confirmEmail}
                            onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                            helperText={errors.confirmEmail ? "Your email should be the same as the one entered above" : ""}
                            className='EmailVoucher'
                       />
                    </div>
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChange}/>}
                        label="I accept the purchase conditions, privacy policies change and cancellation policies."
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={errors.checked.toString()}
                        required
                    />
                    <div className='Buttons'>
                        <Button 
                                variant="outlined" 
                                className='GoBack' 
                                onClick={handleGoBack}
                            >
                            <ArrowBackIcon></ArrowBackIcon>
                        </Button>
                        <Button 
                            variant="contained" 
                            className='FinishBookingButton' 
                            onClick={handleSubmit}
                        >
                            Finish booking
                        </Button>   
                    </div>
                
                </Box>
            </div>
            <div className="ReservationDetails">
                <HotelDetails hotel={hotel}/>
            </div>
            <ConfirmationModal email={formData.email} open={openModal} onClose={handleCloseModal} />
        </div>
    )
}

export default BookingReservation