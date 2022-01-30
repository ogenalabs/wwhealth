import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./Copyright";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="container.lg"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack>
      <SocialMediaLinks px={"3em"} />
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
  </Box>
);
