import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Icon,
  Progress,
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
      <Td minWidth={0} pl="0px">
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
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {price}
        </Text>
      </Td>

      <Td>
        <StatHelpText>
          <StatArrow type={roi.type} />
          {roi.value}
        </StatHelpText>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {purchased}
        </Text>
      </Td>
      <Td minWidth={0} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Button rightIcon={<FiArrowRight />}>Bond</Button>
        </Flex>
      </Td>
    </Tr>
  );
}

export default BondTableRow;
