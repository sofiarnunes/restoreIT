// Name: Sofia Nunes 
// Date: August (?)
// Motive: snack bar dynamic component to show alerts

import React, {useState, useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';


const SnackBar = ({txt, alert}) => {

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    useEffect(() => {
        if(alert) {
            setState({ open: true, vertical: 'bottom', horizontal: 'center', });
        } 
    }, [alert]);
    
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <>
            <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} key={vertical + horizontal}  message={txt} sx={{ width: '100%', textAlign: 'center'}} autoHideDuration={6000}>
            </Snackbar>
        </>
    );
};

export default SnackBar;