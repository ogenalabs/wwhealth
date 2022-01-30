import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" spacing="auto" {...props}>
    <IconButton
      as="a"
      href="https://discord.gg/5hQcppUazs"
      target="_blank"
      aria-label="Discord"
      icon={<FaDiscord fontSize="2em" />}
    />
    <IconButton
      as="a"
      href="https://github.com/davidparseen/wwhealth"
      target="_blank"
      aria-label="GitHub"
      icon={<FaGithub fontSize="2em" />}
    />
    <IconButton
      as="a"
      href="https://twitter.com/simplydapp"
      target="_blank"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="2em" />}
    />
  </ButtonGroup>
);
