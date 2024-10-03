import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const [isHovering, setHovering] = useState(false);
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      style={{
        position: "relative",
        top: isHovering ? "-10px" : "0px",
        transform: isHovering ? "scale(1.05)" : "scale(1)",
        transition: "all 0.5s ease",
        transformOrigin: "center",
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
