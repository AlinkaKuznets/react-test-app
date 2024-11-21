import { FormControl, FormHelperText, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function EmailField({ value, onChange }) {


    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        if (!/^[a-zA-Z0-9_]+@+[a-zA-Z0-9_]+\.+[a-zA-Z]+$/.test(e.target.value)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError('');
        }
    };

    return (<FormControl error={!!emailError} sx={{ width: '50%' }}>
        <TextField
            required
            id='outlined-required'
            label='Email'
            value={value}
            onChange={handleEmailChange}
            InputLabelProps={{
                style: { color: 'white' },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '& input': {
                        color: 'white',
                    },
                },
            }}
        />
        <FormHelperText sx={{ color: 'red' }}>{emailError}</FormHelperText>
    </FormControl>

    )
}
