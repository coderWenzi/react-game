import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error);

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>ErrorPage </Heading>
        <Text>{isNotFound ? "没有找到该页面" : "页面出错了"}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
