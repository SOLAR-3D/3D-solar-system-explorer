import OverlayLanding from "@/components/OverlayLandingComponent";
import SpaceExplorer from "@/components/SpaceExplorer/SpaceExplorer";
import { Box } from "@chakra-ui/react";

import OverlayPlanets from "@/components/OverlayPlanets";
import OverlaySign from "@/components/OverleySign";
import OverlayLog from "@/components/OverlayLog";

export default function App() {
  return (
    <>
      <SpaceExplorer />
      <OverlayLanding />
    </>
  );
}
