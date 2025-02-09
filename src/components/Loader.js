import React from 'react';
import { Stack } from '@mui/material';
import { BeatLoader } from 'react-spinners';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <BeatLoader color="grey" />
  </Stack>
);

export default Loader;
