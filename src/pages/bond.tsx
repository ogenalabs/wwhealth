import { Center } from "@chakra-ui/react";
import React from "react";
import { Bond } from "../components/Bond";
import { Container } from "../components/Container";

const BondPage = () => {
  return (
    <Container>
      <Center minHeight={"70vh"}>
        <Bond />
      </Center>
    </Container>
  );
};

export default BondPage;
