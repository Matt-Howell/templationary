import Head from 'next/head'
import Header from '../comps/Header.jsx'
import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input, 
  Textarea,
  Button
} from "@chakra-ui/react";
import Footer from '../comps/Footer.jsx'
import { FaArrowRight } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - Templationary.com</title>
        <meta name="description" content={"Have a question, need some help, or are interested in advertising with us? Reach out to us here!"}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://templationary.com/contact"}/>
        <meta property="og:title" content={`Contact Us - Templationary.com`}/>
        <meta property="og:description" content={"Have a question, need some help, or are interested in advertising with us? Reach out to us here!"}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://templationary.com/contact"}/>
        <meta property="twitter:title" content={`Contact Us - Templationary.com`}/>
        <meta property="twitter:description" content={"Have a question, need some help, or are interested in advertising with us? Reach out to us here!"}/>
        <meta property="twitter:image" content={"https://templationary.com/social-icon.png"}/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="robots" content="index, follow"/>
        <meta name="googlebot" content="index, follow"/>

        <meta property="og:locale" content="en_US"/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="canonical" href="https://templationary.com/contact"/>

        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content={"black-translucent"} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5682997250624118"
        crossOrigin="anonymous"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DPLWXNCZTQ"></script>
        <script dangerouslySetInnerHTML={{
            __html:`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-DPLWXNCZTQ');`
        }} />
        </Head>
      <>
        <Header />
        <Box as='main'>
          <Box width="100%" padding="1rem 0" bg={useColorModeValue('#f0f5f9', 'gray.700')}>
            <Container maxW={'5xl'}>
              <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 2, md: 3 }}
                py={{ base: 10, md: 14 }}>
                <Heading
                  fontWeight={600}
                  as="h1"
                  mb={3}
                  fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                  lineHeight={'110%'}
                  color={useColorModeValue('gray.800', 'white')}>
                  Contact Us
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                    Have a question, need some help, or are interested in advertising with us? Reach out to us here.
                    We will get back to you within 24 hours!
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
            <form action="/sendMessage.php" method="POST">
                <FormControl mb={4} id="first-name" isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input name="uName" className="customBack" type="text" placeholder="Full name" />
                </FormControl>
                <FormControl mb={4} id="first-name" isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input name="uEmail" className="customBack" type="email" placeholder="Email Address" />
                </FormControl>
                <FormControl mb={4} id="first-name" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea name="uMessage" className="customBack" placeholder="Your message..." />
                </FormControl>
                <Input name="uVerif" type="hidden" value="true" />
                <Button mt={2} type="submit" rightIcon={<FaArrowRight />} colorScheme="green" variant="solid">
                    Send
                </Button>
            </form>
        </Container>
        </Box>
      <Footer />
      </>
    </div>
  )
}