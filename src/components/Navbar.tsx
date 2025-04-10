import { Image, HStack, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SeachInput from "./SeachInput";

const Navbar = () => {
  

  return (
    <HStack spacing={5} padding="10px">
      <Image src={Logo} boxSize="60px" />
      <SeachInput  />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
