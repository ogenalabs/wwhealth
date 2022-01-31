import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  VStack,
  Divider,
  Button,
  useClipboard,
  Stack,
  List,
  ListIcon,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import {
  FiTrendingUp,
  FiCompass,
  FiMenu,
  FiLogOut,
  FiUser,
  FiCopy,
  FiLayout,
  FiPercent,
  FiArrowDown,
  FiArrowUp,
} from "react-icons/fi";
import { RiCurrencyLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { ConnectWallet } from "./ConnectWallet";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import truncateEthAddress from "truncate-eth-address";
import Moralis from "moralis";

import { DiceAvatar } from "../lib/avatar";
import WWhealthLogo from "../public/img/logo.png";
import { useRouter } from "next/router";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiLayout, href: "/" },
  { name: "Bond", icon: RiCurrencyLine, href: "/bond" },
  { name: "Stake", icon: FiPercent, href: "/stake" },
  { name: "Trends", icon: FiTrendingUp, href: "/trends" },
  { name: "Explore", icon: FiCompass, href: "/explore" },
  { name: "Manage Profile", icon: FiUser, href: "/profile" },
];

export default function DrawerMenu({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { user, logout, isAuthenticated } = useMoralis();
  const { hasCopied, onCopy } = useClipboard(user?.get("ethAddress"));

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        direction={{ base: "row", md: "column" }}
        gap={{ base: 4, md: 0 }}
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Box mt={{ base: 2, md: 4 }}>
          <Image
            src={WWhealthLogo}
            alt="WWhealth Logo"
            width={20}
            height={20}
          />
        </Box>
        <Text fontSize="lg">WWHEALTH</Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Divider mb={12} />
      {LinkItems.map((link) =>
        link.name === "Bond" ? (
          <Stack maxWidth={"90%"}>
            <NavItem key={link.name} icon={link.icon} href={link.href}>
              {link.name}
            </NavItem>
            <VStack pl={8} fontSize={"xs"} fontFamily={"monospace"}>
              <List spacing={2}>
                <ListItem overflowX={"visible"}>
                  <HStack>
                    <p>WWH-AVAX LP</p>
                    <Spacer />
                    <p>30.3%</p>
                    <ListIcon as={FiArrowUp} color="green.500" />
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack>
                    <p>gWWH</p>
                    <Spacer />
                    <p> 30.3%</p>
                    <ListIcon as={FiArrowUp} color="green.500" />
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack>
                    <p>AVAX</p>
                    <Spacer />
                    <p> 10.3%</p>
                    <ListIcon as={FiArrowDown} color="red.500" />
                  </HStack>
                </ListItem>
                <ListItem>
                  <HStack>
                    <p>MIM</p>
                    <Spacer />
                    <p> 0.3%</p>
                    <ListIcon as={FiArrowDown} color="red.500" />
                  </HStack>
                </ListItem>
              </List>
            </VStack>
          </Stack>
        ) : (
          <HStack>
            <NavItem
              width={"full"}
              key={link.name}
              icon={link.icon}
              href={link.href}
            >
              {link.name}
            </NavItem>
          </HStack>
        )
      )}
      <VStack
        spacing={{ base: "0", md: "6" }}
        display={{ base: "flex", md: "none" }}
      >
        <Divider my={8} />
        {!isAuthenticated ? (
          <ConnectWallet />
        ) : (
          <VStack>
            <HStack spacing={6}>
              <DiceAvatar seed={user.get("ethAddress")} />
              <Text>{truncateEthAddress(user.get("ethAddress"))}</Text>
              <Button
                colorScheme={"green"}
                bg={"green.500"}
                rounded={"full"}
                rightIcon={<FiCopy />}
                onClick={onCopy}
                ml={2}
                size={"sm"}
              >
                {hasCopied ? "Copied" : "Copy"}
              </Button>
            </HStack>
            <NavItem
              as={Button}
              py={2}
              px={20}
              icon={FiLogOut}
              onClick={logout}
              mt={8}
            >
              Sign Out
            </NavItem>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  href?: string;
}
const NavItem = ({ href, icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "green.300",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { user } = useMoralis();
  const { account } = useMoralisWeb3Api();
  const [balance, setBalance] = useState<string>("");

  useEffect(() => {
    async function updateBalance() {
      if (account && user) {
        const nativeBalance = await account.getNativeBalance({
          chain: "0xa869",
          address: user.get("ethAddress"),
        });
        setBalance(`${Moralis.Units.FromWei(nativeBalance.balance)} AVAX`);
      }
      console.log({ balance });
    }
    updateBalance();
  }, [account, balance, user]);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack>
        <Box display={{ base: "flex", md: "none" }}>
          <Image
            src={WWhealthLogo}
            alt="WWhealth Logo"
            width={20}
            height={20}
          />
        </Box>
        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="lg"
          fontWeight="bold"
        >
          WWHEALTH
        </Text>
      </HStack>

      <DarkModeSwitch />
      <HStack
        spacing={{ base: "0", md: "6" }}
        display={{ base: "none", md: "flex" }}
      >
        <Text>{balance}</Text>
        <ConnectWallet />
      </HStack>
    </Flex>
  );
};
