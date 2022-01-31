import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Lead from "./Lead";

export default function HomePage() {
  return (
    <Box width={"full"}>
      <Lead />
      <Flex
        direction={{ base: "column", md: "row" }}
        m={{ base: 8, md: 12 }}
      ></Flex>
    </Box>
  );
}
