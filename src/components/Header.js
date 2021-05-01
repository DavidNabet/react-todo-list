import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Heading mt={4} mb={4} as="h1" size="2xl" isTruncated>
        Todo List
      </Heading>
    </header>
  );
};

export default Header;
