import { Image, ImgProps } from "@chakra-ui/react";
import eye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbUp from "../assets/thumbs-up.webp";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  const emojiMap: { [key: number]: ImgProps } = {
    3: { src: eye, alt: "eye", boxSize: "35px" },
    4: { src: meh, alt: "meh", boxSize: "26px" },
    5: { src: thumbUp, alt: "thumbUp", boxSize: "26px" },
  };

  return <Image {...emojiMap[rating_top]}></Image>;
};

export default Emoji;
