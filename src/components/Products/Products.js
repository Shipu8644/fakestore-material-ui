import { Box, Input, TextField } from '@mui/material';
import React from 'react';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products, setProducts] = useProducts();
    console.log(products);

    return (
        <div>
            <Box sx={{

                display: 'flex',
                justifyContent: 'center',
                mt: 2
            }}>

                <TextField
                    id="outlined-uncontrolled"
                    label="Search your product"
                    defaultValue=""
                />
            </Box>

        </div>
    );
};

export default Products;