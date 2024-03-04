import React from 'react'
import Alert from '@mui/material/Alert';

function FormError() {
  return (
    <Alert severity="error" className='alert'>
      Please Fill all inputs
    </Alert>
  )
}

export default FormError
