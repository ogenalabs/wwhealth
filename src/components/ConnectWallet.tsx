import {
  Text,
  Button,
  Menu,
  MenuButton,
  HStack,
  MenuList,
  MenuItem,
  VStack,
  Box,
  MenuDivider,
  Link,
  useClipboard,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown, FiCopy, FiLogOut, FiUser } from "react-icons/fi";
import { useMoralis } from "react-moralis";
import truncateEthAddress from "truncate-eth-address";
import { DiceAvatar } from "../lib/avatar";

import { MetaMaskIcon } from "../lib/svg";

export const ConnectWallet = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const { hasCopied, onCopy } = useClipboard(user?.get("ethAddress"));

  return (
    <>
      {!isAuthenticated ? (
        <Button
          onClick={() =>
            authenticate({
              signingMessage: "Signing into WWhealth.site",
            })
          }
          variantcolor="green"
          size="md"
          mr={4}
          leftIcon={<MetaMaskIcon />}
        >
          {isAuthenticated ? "Authenticate" : "Connect Wallet"}
        </Button>
      ) : (
        <Menu autoSelect={false} flip={false} matchWidth={true}>
          <MenuButton
            as={Button}
            p={2}
            _focus={{ boxShadow: "none" }}
            rightIcon={<FiChevronDown />}
          >
            <HStack>
              <DiceAvatar seed={user.get("username")} />
              <Text>{truncateEthAddress(user.get("ethAddress"))}</Text>
            </HStack>
          </MenuButton>
          <Button
            colorScheme={"green"}
            bg={"green.500"}
            rounded={"full"}
            rightIcon={<FiCopy />}
            onClick={onCopy}
            size={"xs"}
          >
            {hasCopied ? "Copied" : "Copy"}
          </Button>
          <MenuList>
            <MenuItem icon={<FiUser />} as={"a"} href={"/profile"}>
              Manage Profile
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<FiLogOut />} onClick={logout}>
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};
