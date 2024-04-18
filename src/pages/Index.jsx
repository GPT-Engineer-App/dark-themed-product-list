import React from "react";
import { Box, Heading, SimpleGrid, Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTM0ODQ3MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTM0ODQ3MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTM0ODQ3MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh" py={10}>
      <Heading as="h1" size="2xl" textAlign="center" color="white" mb={10}>
        Our Products
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} maxW="1200px" margin="auto">
        {products.map((product) => (
          <Card key={product.id} bg="gray.800" color="white">
            <CardBody>
              <Image src={product.image} alt={product.name} borderRadius="lg" />
              <Stack mt={6} spacing={3}>
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text color="blue.400" fontSize="2xl">
                  {product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button variant="solid" colorScheme="blue" width="100%">
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
