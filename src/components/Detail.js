import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/bodybuilder_icon.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      label: "Body Part:",
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      label: "Target:",
      icon: TargetImage,
      name: target,
    },
    {
      label: "Equipment:",
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row-reverse' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          {' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best <br /> exercises to target your {target}. 
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ 
              background: '#FFF2DB', 
              borderRadius: '50%', 
              width: '120px', 
              height: '120px', 
              opacity: 0.7 // Slightly faded effect
            }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '60px', height: '60px' }} />
            </Button>
            <Stack direction="column">
              <Typography 
                sx={{ 
                  fontSize: { lg: '22px', xs: '18px' }, 
                  color: '#000', 
                  fontWeight: 700 
                }}
              >
                {item.label}
              </Typography>
              <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                {item.name}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
