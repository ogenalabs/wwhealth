import React from "react";
import {
  Box,
  Center,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import BondTableRow from "./BondTableRow";
import {
  FaJira,
  FaSlackHash,
  FaSpotify,
  FaYinYang,
  FaYoast,
  FaYoutube,
} from "react-icons/fa";

function Card(props) {
  const { variant, children, ...rest } = props;
  return <Box {...rest}>{children}</Box>;
}
function CardHeader(props) {
  const { variant, children, ...rest } = props;
  return <Box {...rest}>{children}</Box>;
}

export const Bond = () => {
  const [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6] = [
    "https://avatars.dicebear.com/api/adventurer-neutral/1.svg",
    "https://avatars.dicebear.com/api/adventurer-neutral/2.svg",
    "https://avatars.dicebear.com/api/adventurer-neutral/3.svg",
    "https://avatars.dicebear.com/api/adventurer-neutral/4.svg",
    "https://avatars.dicebear.com/api/adventurer-neutral/5.svg",
    "https://avatars.dicebear.com/api/adventurer-neutral/6.svg",
  ];
  const dashboardTableData = [
    {
      logo: FaYinYang,
      name: "WWH-AVAX LP",
      roi: {
        type: "increase",
        value: "30.3%",
      },
      price: "$400",
      purchased: "$40,000",
    },
    {
      logo: FaJira,
      name: "gWWH",
      roi: {
        type: "increase",
        value: "30.3%",
      },
      price: "$1,000",
      purchased: "$10,000",
    },
    {
      logo: FaSlackHash,
      name: "AVAX",
      roi: {
        type: "decrease",
        value: "10.3%",
      },
      price: "$69",
      purchased: "$42,000",
    },
    {
      logo: FaSpotify,
      name: "MIM",
      roi: {
        type: "decrease",
        value: "0.3%",
      },
      price: "$1",
      purchased: "$69,000",
    },
  ];
  return (
    <Center>
      <Card p={4} overflowX={{ sm: "scroll", xl: "hidden" }} minWidth={"60vw"}>
        <CardHeader p="12px 0px 28px 0px">
          <Flex direction="column">
            <Text fontSize="lg" fontWeight="bold">
              Bond
            </Text>
          </Flex>
        </CardHeader>
        <Table variant="simple">
          <Thead>
            <Tr my=".8rem" ps="0px">
              <Th ps="0px" color="gray.400"></Th>
              <Th ps="0px" color="gray.400">
                Bond
              </Th>
              <Th color="gray.400">Price</Th>
              <Th color="gray.400">ROI</Th>
              <Th color="gray.400">Purchased</Th>
              <Th color="gray.400"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {dashboardTableData.map((row) => {
              return (
                <BondTableRow
                  key={row.name}
                  name={row.name}
                  logo={row.logo}
                  roi={row.roi}
                  price={row.price}
                  purchased={row.purchased}
                />
              );
            })}
          </Tbody>
        </Table>
      </Card>
    </Center>
  );
};
