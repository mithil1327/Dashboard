import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../styles/home.css"; // Ensure styles are included

export default function BasicButtons({ name, click }) {
    return (
        <Stack spacing={2} direction="row">  
            <Button className="nav-button" onClick={click}>{name}</Button>
        </Stack>
    );
}
