'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import { Box, Button, Flex} from "@chakra-ui/react";
import PlanetTimeline from "./Timeline";
import PlanetsInfo from "./PlanetsInfo";
import { useDispatch } from "react-redux";
import { updateSelectedPlanet } from '@/app/store/solarSystemSlice';
import PlanetSpecs from './PlanetSpecs';
import ShortDescPlanet from './ShortDescPlanet';

const OverlayPlanets: React.FC = () => {
  const planetState = useSelector((state: RootState) => state.solarSystem.selectedPlanet);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateSelectedPlanet(''));
  }

  return (
    (planetState && (
      <Box position='fixed' top='0' right='0' bottom='0' width='50%' zIndex={10} m={5} p={10} bgGradient='linear(to-t, blue.700, black)' color='white' opacity={0.9}>
        <Flex flexDirection='column' overflow='auto' height='100%'>
          <Button onClick={handleClick} variant='unstyled' mb={10}>BACK TO SPACE</Button>
          
          <Box >
            <PlanetSpecs />
          </Box>

          <Box >
            <PlanetTimeline />
          </Box>

          <Box >
            <ShortDescPlanet />
          </Box>

        </Flex>
      </Box>
    ))
  )
}

export default OverlayPlanets;