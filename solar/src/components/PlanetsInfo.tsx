import { Box, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import PlanetSpecs from './PlanetSpecs';

const PlanetsInfo: React.FC = () => {
  const selectedPlanet = useSelector((state: RootState) => state.solarSystem.selectedPlanet);

  return (
    <Box>
      <PlanetSpecs />
      <Text>Images carousel</Text>
      <Text>Basic info</Text>
      <Text>Short description</Text>
      <Text>Articles carousel</Text>
    </Box>
  )
}
  
export default PlanetsInfo;