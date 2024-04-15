import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Box as="header" bg="white" py={4} boxShadow="md">
        <Heading as="h1" size="xl" textAlign="center" color="gray.700">
          Chester A. Arthur
        </Heading>
      </Box>

      <Box as="nav" bg="gray.700" color="white" py={2}>
        <HStack spacing={8} justifyContent="center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/presidency">Presidency</Link>
          <Link href="/legacy">Legacy</Link>
        </HStack>
      </Box>

      <VStack spacing={8} my={12} mx="auto" maxW="4xl" px={4} align="left">
        <HStack spacing={8} align="flex-start">
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://images.unsplash.com/photo-1580129924992-02eaa9a5509b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwY2hlc3RlciUyMGFydGh1cnxlbnwwfHx8fDE3MTMxNzA1MjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Portrait of Chester A. Arthur" />
          <Text fontSize="lg">Chester Alan Arthur (October 5, 1829 – November 18, 1886) was an American lawyer and politician who served as the 21st president of the United States from 1881 to 1885. Previously the 20th vice president, he succeeded to the presidency upon the death of President James A. Garfield in September 1881, two months after Garfield was shot by an assassin.</Text>
        </HStack>
      </VStack>

      <Box as="footer" bg="gray.700" color="white" py={4} textAlign="center">
        <Text>Chester A. Arthur (1829-1886)</Text>
      </Box>
    </Box>
  );
};

export default Index;
