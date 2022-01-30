import { Center, Text, VStack } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Center height="full">
      <VStack>
        <Text>WWHEALTH</Text>
        <Text>Coming Soon!</Text>
      </VStack>
    </Center>
    <Footer />
  </Container>
);

export default Index;
