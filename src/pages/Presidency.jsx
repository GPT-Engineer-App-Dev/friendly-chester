import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";

const Presidency = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Box as="header" bg="white" py={4} boxShadow="md">
        <Heading as="h1" size="xl" textAlign="center" color="gray.700">
          Presidency of Chester A. Arthur
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
        <Box>
          <Heading as="h2" size="xl" mb={4}>Becoming President</Heading>
          <Text fontSize="lg" mb={4}>
            Chester A. Arthur became the 21st President of the United States on September 19, 1881, following the assassination of President James A. Garfield. Garfield had been shot by Charles J. Guiteau, a disgruntled office seeker, on July 2, 1881, and died from complications of the wound and subsequent infection on September 19. As vice president, Arthur was sworn in as president that same day.
          </Text>
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/James_Abram_Garfield%2C_photo_portrait_seated.jpg/800px-James_Abram_Garfield%2C_photo_portrait_seated.jpg" alt="President James A. Garfield" />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Significant Events</Heading>
          <Text fontSize="lg" mb={4}>
            One of the most significant events during Arthur's presidency was the passage of the Pendleton Civil Service Reform Act in 1883. The act established the United States Civil Service Commission and mandated that certain federal jobs be filled based on merit rather than political patronage. Arthur also signed the Chinese Exclusion Act in 1882, which suspended Chinese immigration for ten years and prohibited Chinese immigrants from becoming U.S. citizens.
          </Text>
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Pendleton_Act_1883.jpg/800px-Pendleton_Act_1883.jpg" alt="Pendleton Civil Service Reform Act" />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Policies and Accomplishments</Heading>
          <Text fontSize="lg" mb={4}>
            Chester A. Arthur is best known for his efforts to reform the civil service system. He supported the Pendleton Act and worked to reduce corruption and patronage in federal hiring. Arthur also modernized the U.S. Navy, investing in new ships and technology. He vetoed the Chinese Exclusion Act but eventually signed a revised version due to congressional pressure. Arthur also signed the Edmunds Act to combat polygamy in Utah Territory.
          </Text>
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Portrait_of_Chester_A._Arthur.jpg/800px-Portrait_of_Chester_A._Arthur.jpg" alt="President Chester A. Arthur" />  
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Challenges</Heading>
          <Text fontSize="lg">
            During his presidency, Chester A. Arthur faced challenges from within the Republican Party. The party was divided into two factions: the Stalwarts, who supported the spoils system and political patronage, and the Half-Breeds, who advocated for civil service reform. As a former Stalwart, Arthur's support for the Pendleton Act put him at odds with his former allies. He also faced criticism for his lavish lifestyle and was not nominated to run for a second term in 1884.
          </Text>
        </Box>
      </VStack>

      <Box as="footer" bg="gray.700" color="white" py={4} textAlign="center">
        <Text>Chester A. Arthur (1829-1886)</Text>
      </Box>
    </Box>
  );
};

export default Presidency;