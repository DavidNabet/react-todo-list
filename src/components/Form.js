import React from "react";
import { Input, Button, Box, HStack } from "@chakra-ui/react";

const Form = ({ onSubmitForm, todoInput, setTodoInput }) => {
  return (
    <form onSubmit={onSubmitForm}>
      <Box w="100%" p={4}>
        <HStack spacing="24px">
          <Input
            ml={2}
            placeholder="Ecrire une tâche"
            type="text"
            variant="outline"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button pl={10} pr={10} colorScheme="messenger" variant="solid">
            Ajouter une tâche
          </Button>
        </HStack>
      </Box>
    </form>
  );
};

export default Form;
