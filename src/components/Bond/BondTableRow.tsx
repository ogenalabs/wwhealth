import {
  Button,
  Flex,
  Icon,
  StatArrow,
  StatHelpText,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { type } from "os";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

function BondTableRow(props) {
  const { logo, name, roi, price, purchased } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={logo} h={"24px"} w={"24px"} pe="5px" />
        </Flex>
      </Td>
      <Td minWidth={0} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td display={{ base: "none", md: "revert" }}>
        <Text
          display={{ base: "none", md: "flex" }}
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          pb=".5rem"
        >
          {price}
        </Text>
      </Td>

      <Td>
        <StatHelpText>
          <StatArrow type={roi.type} />
          {roi.value}
        </StatHelpText>
      </Td>

      <Td display={{ base: "none", md: "revert" }}>
        <Text
          display={{ base: "none", md: "flex" }}
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          pb=".5rem"
        >
          {purchased}
        </Text>
      </Td>
      <Td minWidth={0} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Button bg={useColorModeValue("gray.200", "gray.700")} color={"green.400"} rightIcon={<FiArrowRight />}>Bond</Button>
        </Flex>
      </Td>
    </Tr>
  );
}

export default BondTableRow;
