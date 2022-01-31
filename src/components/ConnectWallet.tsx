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
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";
import { useMoralis } from "react-moralis";
import truncateEthAddress from "truncate-eth-address";
import { DiceAvatar } from "../lib/avatar";

import { MetaMaskIcon } from "../lib/svg";

export const ConnectWallet = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  console.log({ user: user?.get("role") });

  return (
    <>
      {!isAuthenticated ? (
        <Button
          onClick={() => authenticate()}
          variantcolor="green"
          size="md"
          mr={4}
          leftIcon={<MetaMaskIcon />}
        >
          Connect Wallet
        </Button>
      ) : (
        <Menu autoSelect={false} flip={false} matchWidth={true}>
          <MenuButton
            as={Button}
            p={2}
            transition={"all 0.2s"}
            _focus={{ boxShadow: "none" }}
            rightIcon={<FiChevronDown />}
          >
            <HStack>
              <DiceAvatar seed={user.get("username")} />
              <Text>{truncateEthAddress(user.get("ethAddress"))}</Text>
            </HStack>
          </MenuButton>
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
