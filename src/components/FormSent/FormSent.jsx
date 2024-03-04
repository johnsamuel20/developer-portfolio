import React from 'react'
import './FormSent.css'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function FormSent() {

  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" className='alert'>
      Message Sent Successfully , Thank you
    </Alert>


  )
}

export default FormSent
