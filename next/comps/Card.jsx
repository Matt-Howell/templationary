import {
    Box,
    Heading,
    Text,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
    Link,
    useColorModeValue,
    Wrap,
    WrapItem,
    Image,
    Flex
  } from '@chakra-ui/react';
  import { FaTag } from 'react-icons/fa'
  
  export default function PostCard(props) {
    return (
      <Flex flexDirection='column' position="relative"
      justifyContent={{ base:"center", md:"start" }}
      alignItems={{ base:"center", md:"start" }}>
        <Flex
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('#fffff', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          position="relative"
          height={"100%!important"}
          flexDirection="column">
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={"https://cdn.templationary.com"+props.tImage}
              alt={props.tName}
              loading="lazy"
              objectFit='fill!important'
              height="100%"
              width="100%"
            />
          </Box>
          <Stack>
            <Link href={"/"+props.tType.toLowerCase()+"/"+props.tId} 
            textDecoration="none!important"
            _hover={{ opacity:0.8 }}>
            <Heading
              color={useColorModeValue('gray.700', '#fffff')}
              fontSize={'2xl'}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}>
              {props.tName}
            </Heading></Link>
            <Text color={'gray.500'}>
              {props.tDesc}
            </Text>
          </Stack>
          <Stack mt={4} direction={'row'} spacing={4} align={'center'}>
            <Wrap w="full" fontSize="sm" direction="row">
              {props.tTags.map((item,i) => <WrapItem key={i}>
                <Link textDecoration="none!important" _hover={{ opacity:0.8 }} href={"/tags/"+String(props.tTags[i]).toLowerCase().replace(/ /g, "-")}>
                    <Tag size={"lg"} variant="subtle" colorScheme="cyan">
                        <TagLeftIcon boxSize="12px" as={FaTag} />
                        <TagLabel textTransform={'capitalize'}>
                            {props.tTags[i]}
                        </TagLabel>
                    </Tag>
                </Link>
            </WrapItem>)}
            </Wrap>
          </Stack>
        </Flex>
        </Flex>
    );
  }