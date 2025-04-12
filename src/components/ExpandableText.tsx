import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  maxLength?: number;
  children: string;
}

const ExpandableText = ({ children, maxLength = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length < maxLength) return <Text>{children}</Text>;

  return (
    <Text>
      {expanded ? children.slice(0, maxLength) + "..." : children}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft={3}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read More" : "Show Less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
