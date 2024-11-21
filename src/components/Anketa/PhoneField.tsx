import { FormControl, FormHelperText, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function PhoneField({value, onChange}) {

    const [phonError, setPhonError] = useState<string>('');

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        const value = e.target.value.trim()
        if (value.length < 10) {
            setPhonError('Phone must be at least 9 characters long');
        } else if (value.length > 12) {
            setPhonError("Phone must be less than 12 characters long");
        } else 
        if (!/^\+[0-9]+[0-9]+$/.test(value)) {
            setPhonError("Phone must contain only numbers");
        } else {
            setPhonError("");
        }
    };

    return (
        <FormControl error={!!phonError} sx={{ width: '50%' }}>
            <TextField
                required
                id='outlined-required'
                label='Телефон'
                value={value}
                onChange={handlePhoneChange}
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
            <FormHelperText sx={{ color: 'red' }}>{phonError}</FormHelperText>
        </FormControl>
    )
}
