import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading className="">Opss! An error occured</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page does not exist."
            : "Unexpected error."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
