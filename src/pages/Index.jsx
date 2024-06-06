import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image, Spacer } from "@chakra-ui/react";
import { FaHome, FaSearch, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.900" color="white" p={4} align="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="lg" fontWeight="bold">
            MusicStream
          </Link>
          <HStack spacing={4}>
            <Link href="#"><FaHome /> Home</Link>
            <Link href="#"><FaSearch /> Browse</Link>
            <Link href="#"><FaBook /> Library</Link>
            <Link href="#"><FaUser /> Profile</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Box as="main" p={4}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          Featured Playlists
        </Heading>
        <Flex wrap="wrap" justify="center" spacing={4}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="https://via.placeholder.com/150" alt="Playlist 1" />
            <Box p={4}>
              <Heading as="h2" size="md">Playlist 1</Heading>
              <Text mt={2}>Description of Playlist 1</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="https://via.placeholder.com/150" alt="Playlist 2" />
            <Box p={4}>
              <Heading as="h2" size="md">Playlist 2</Heading>
              <Text mt={2}>Description of Playlist 2</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="https://via.placeholder.com/150" alt="Playlist 3" />
            <Box p={4}>
              <Heading as="h2" size="md">Playlist 3</Heading>
              <Text mt={2}>Description of Playlist 3</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 MusicStream</Text>
          <HStack spacing={4}>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;