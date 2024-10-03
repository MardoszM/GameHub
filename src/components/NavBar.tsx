import { HStack, Image, Switch, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack marginLeft={4} justifyContent={"space-between"}>
      <>
        <Link to="/">
          <Image src={logo} boxSize={"60px"} cursor="pointer" />
        </Link>
        <SearchInput />
      </>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
        whiteSpace={"nowrap"}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Switch>
    </HStack>
  );
};

export default NavBar;
