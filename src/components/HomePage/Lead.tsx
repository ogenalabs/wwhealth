import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsCurrencyDollar, BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
  type: "increase" | "decrease";
  delta: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, type, delta } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
          <StatHelpText>
            <StatArrow type={type} />
            {delta}
          </StatHelpText>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Lead() {
  return (
    <Box width={"full"} mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid
        width={"full"}
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <StatsCard
          title={"Market Cap"}
          stat={"582,989"}
          icon={<BsCurrencyDollar size={"2em"} />}
          type={"increase"}
          delta={"+1.2%"}
        />
        <StatsCard
          title={"WWH Price"}
          stat={"10"}
          icon={<BsCurrencyDollar size={"2em"} />}
          type={"decrease"}
          delta={"-0.2%"}
        />
        <StatsCard
          title={"gWWH"}
          stat={"1,000"}
          icon={<BsCurrencyDollar size={"2em"} />}
          type={"increase"}
          delta={"+0.2%"}
        />
      </SimpleGrid>
    </Box>
  );
}
