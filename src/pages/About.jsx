import { Box, VStack, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";

const About = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Box as="header" bg="white" py={4} boxShadow="md">
        <Heading as="h1" size="xl" textAlign="center" color="gray.700">
          About Chester A. Arthur
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
          <Heading as="h2" size="xl" mb={4}>Early Life</Heading>
          <Text fontSize="lg" mb={4}>
            Chester Alan Arthur was born on October 5, 1829, in Fairfield, Vermont. His father was a Baptist minister who immigrated to the United States from Ireland. Arthur spent much of his childhood in New York and attended local schools. He graduated from Union College in Schenectady, New York in 1848.
          </Text>
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Union_College_Seal.svg/1200px-Union_College_Seal.svg.png" alt="Union College Seal" />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Family</Heading>
          <Text fontSize="lg" mb={4}>
            In 1859, Arthur married Ellen Lewis Herndon, the daughter of a naval officer. The couple had three children: William, Chester, and Ellen. Sadly, Ellen passed away from pneumonia in 1880, just months before Arthur became President. Arthur never remarried and raised his children as a single father while in the White House.
          </Text>
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ellen_Lewis_Herndon_Arthur.jpg/800px-Ellen_Lewis_Herndon_Arthur.jpg" alt="Ellen Lewis Herndon Arthur" />  
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Pre-Presidency Career</Heading>
          <Text fontSize="lg" mb={4}>
            After graduating from college, Arthur practiced law in New York City. He gained prominence as a member of the Republican Party and served as Quartermaster General of New York during the Civil War. In 1871, President Ulysses S. Grant appointed Arthur as Collector of the Port of New York, a lucrative and powerful position at the New York Customs House.
          </Text>
          <Image borderRadius="lg" boxSize="sm" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/NYCustomsHouse.jpg/1280px-NYCustomsHouse.jpg" alt="New York Customs House" />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>Personality and Interests</Heading>
          <Text fontSize="lg">
            Chester Arthur was known for his impeccable attire and was sometimes referred to as "Elegant Arthur". He enjoyed entertaining guests and threw lavish parties at the White House. Arthur was also an avid fisherman and often retreated to the Thousand Islands on the St. Lawrence River for leisure. Despite his refined tastes, he was known to be a humble and kind person who remained dedicated to public service throughout his life.
          </Text>
        </Box>
      </VStack>

      <Box as="footer" bg="gray.700" color="white" py={4} textAlign="center">
        <Text>Chester A. Arthur (1829-1886)</Text>
      </Box>
    </Box>
  );
};

export default About;