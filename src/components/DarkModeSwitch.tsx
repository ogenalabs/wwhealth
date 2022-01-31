import { useColorMode, Switch, Icon, HStack } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <HStack mr={4}>
      <Icon
        as={!isDark ? FiMoon : FiSun}
        boxSize={"2ch"}
        onClick={toggleColorMode}
      />
    </HStack>
  );
};
