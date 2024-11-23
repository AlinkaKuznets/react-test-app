import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";

export default function NameField({ value, onChange }) {
    const [nameError, setNameError] = useState('');

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        if (e.target.value.length < 3) {
            setNameError('Message must be at least 3 characters long');
        } else {
            setNameError("");
        }
    };

    return (
        <FormControl error={!!nameError} sx={{ width: {xs: '100%', sm: '50%'}}}>
            <TextField
                required
                id='outlined-required'
                label='Ваше имя'
                value={value}
                onChange={handleNameChange}
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
            <FormHelperText sx={{ color: 'red' }}>{nameError}</FormHelperText>
        </FormControl>
    );
}