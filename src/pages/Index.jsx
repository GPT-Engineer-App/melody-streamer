import { Box, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaSearch, FaBook, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation Bar */}
        <Flex as="nav" bg="gray.900" color="white" p={4} justify="space-between" align="center">
          <HStack spacing={8}>
            <Heading size="md">MusicStream</Heading>
            <HStack spacing={4}>
              <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" />
              <IconButton aria-label="Browse" icon={<FaSearch />} variant="ghost" />
              <IconButton aria-label="Library" icon={<FaBook />} variant="ghost" />
              <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" />
            </HStack>
          </HStack>
        </Flex>

        {/* Main Section */}
        <Flex flex="1" direction="column" p={8} bg="gray.800" color="white">
          <Heading mb={4}>Featured Playlists</Heading>
          <Stack direction={["column", "row"]} spacing={4}>
            <Box bg="gray.700" p={4} borderRadius="md" flex="1">
              <Image src="https://via.placeholder.com/150" alt="Playlist 1" borderRadius="md" mb={2} />
              <Text>Playlist 1</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md" flex="1">
              <Image src="https://via.placeholder.com/150" alt="Playlist 2" borderRadius="md" mb={2} />
              <Text>Playlist 2</Text>
            </Box>
            <Box bg="gray.700" p={4} borderRadius="md" flex="1">
              <Image src="https://via.placeholder.com/150" alt="Playlist 3" borderRadius="md" mb={2} />
              <Text>Playlist 3</Text>
            </Box>
          </Stack>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg="gray.900" color="white" p={4}>
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 MusicStream</Text>
            <HStack spacing={4}>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Terms of Service</Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;