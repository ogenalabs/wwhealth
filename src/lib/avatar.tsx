import { Avatar } from "@chakra-ui/react";

export const DiceAvatar = ({seed, ...rest}) => {
  const seedNumber = parseInt(seed, 16);
  return (
    <Avatar
      size="xs"
      src={`https://avatars.dicebear.com/api/adventurer-neutral/${seedNumber}.svg`}
      {...rest}
    />
  );
};
