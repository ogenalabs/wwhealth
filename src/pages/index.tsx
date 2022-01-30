import { Center, Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Center height="full">
      <Text>WWHEALTH</Text>
    </Center>
  </Container>
);

export default Index;
