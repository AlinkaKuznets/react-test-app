import { FormControl, FormHelperText, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function MessageField({ value, onChange }) {

    const [messageError, setMessagError] = useState('');

    const handleMessageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        const value = e.target.value.trim()

        if (value.length < 25) {
            setMessagError('Message must be at least 25 characters long');
        } else {
            setMessagError("");
        }
    };

    return (
        <FormControl error={!!messageError} sx={{ width: '100%' }}>
            <TextField
                required
                id="outlined-multiline-static"
                multiline
                label="Cообщение"
                value={value}
                onChange ={handleMessageChange}
                rows={4}
                fullWidth
                margin="normal"
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
                        '& textarea': {
                            color: 'white',
                        },
                        '& input': {
                            color: 'white',
                        },
                    },
                    '& .MuiInputLabel-outlined-root': {
                        '&label': {
                            color: 'white',
                        },
                    }
                }}
            />
            <FormHelperText sx={{ color: 'red' }}>{messageError}</FormHelperText>
        </FormControl>
    )
}
