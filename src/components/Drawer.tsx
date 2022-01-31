import React, { ReactNode } from "react";
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
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiMenu,
  FiLogOut,
  FiUser,
  FiCopy,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { ConnectWallet } from "./ConnectWallet";
import { useMoralis } from "react-moralis";
import { DiceAvatar } from "../lib/avatar";
import truncateEthAddress from "truncate-eth-address";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trends", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Manage Profile", icon: FiUser },
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
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl">WWHEALTH</Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
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
              <DiceAvatar />
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
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
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
          bg: "cyan.400",
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
  const { user, logout } = useMoralis();

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

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        WWHEALTH
      </Text>

      <DarkModeSwitch />
      <HStack
        spacing={{ base: "0", md: "6" }}
        display={{ base: "none", md: "flex" }}
      >
        <ConnectWallet />
      </HStack>
    </Flex>
  );
};
