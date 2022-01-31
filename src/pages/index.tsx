import { Center, Text, VStack } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import HomePage from "../components/HomePage";

const Index = () => (
  <Container>
    <Center width={"full"} maxWidth={"container.lg"} height="full">
      <VStack width={"full"} height="full" minHeight={"70vh"}>
        <HomePage />
      </VStack>
    </Center>
    <Footer />
  </Container>
);

export default Index;
