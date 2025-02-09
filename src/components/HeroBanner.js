import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '50px' }, position: 'relative', p: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <Typography color="#7738c7" fontWeight="600" fontSize="32px">
      Welcome to FitLife
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '48px', xs: '40px' }, lineHeight: { lg: '56px', xs: '46px' } }} mb="24px" mt="20px">
      Your Journey to Fitness <br /> Starts Here
    </Typography>
    <Typography fontSize="24px" fontFamily="Alegreya" lineHeight="36px" mb="30px">
      Discover exercises tailored for every muscle group!
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '35px', textDecoration: 'none', width: '240px', textAlign: 'center', background: '#7738c7', padding: '16px', fontSize: '24px', textTransform: 'none', color: 'white', borderRadius: '8px' }}>
        Explore Exercises
      </a>
    </Stack>
    <Typography fontWeight={600} color="#7738c7" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px', position: 'absolute', bottom: '0', left: '0', zIndex: '-1' }}>
      FitLife
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ position: 'absolute', right: '0', top: '0', maxWidth: '100%', height: 'auto' }} />
  </Box>
);

export default HeroBanner;
