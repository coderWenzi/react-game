import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SeachInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current?.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="请输入要搜索的内容"
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SeachInput;
