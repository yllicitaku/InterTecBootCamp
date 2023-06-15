import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { cars1, getCarAsync } from '../../redux-toolkit/CarSlice';
import { useAppDispatch, useAppSelector } from '../../redux-toolkit/hooks';
import EachVehicle from '../Vehicles/EachVehicle';

export default function PricingList() {
    const location = useLocation();

    const dispatch = useAppDispatch();
    const allCars = useAppSelector(cars1);

    
    useEffect(() => {
        dispatch(getCarAsync());
         
    }, []);
    
  return (
    <div>
        <Typography align='center' variant='h3'>
            Cars for this offer <span style={{color:'orange'}}>{location.state.priceT.toFixed(2)}$/d</span>
        </Typography>
     {allCars.map((item)=>(
        <>
        {item.price <= location.state.priceT?<EachVehicle {...item}/> :''}
        </>
     ))}
  </div>
  )
}
