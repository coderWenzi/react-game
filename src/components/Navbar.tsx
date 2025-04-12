import { Image, HStack, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SeachInput from "./SeachInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack spacing={5} padding="10px">
      <Link to="/">
        <Image src={Logo} boxSize="60px" objectFit={"cover"} />
      </Link>
      <SeachInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
