import Head from 'next/head'
import Header from '../comps/Header.jsx'
import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Footer from '../comps/Footer.jsx'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Templationary - Templationary.com</title>
        <meta name="description" content={"Want to learn more about us and our website? Feel free to read our little summary below!"}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://templationary.com/about"}/>
        <meta property="og:title" content={`About Templationary - Templationary.com`}/>
        <meta property="og:description" content={"Want to learn more about us and our website? Feel free to read our little summary below!"}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://templationary.com/about"}/>
        <meta property="twitter:title" content={`About Templationary - Templationary.com`}/>
        <meta property="twitter:description" content={"Want to learn more about us and our website? Feel free to read our little summary below!"}/>
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
        <link rel="canonical" href="https://templationary.com/about"/>

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
                  About Templationary
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                  Want to learn more about us and our website? Feel free to read our little summary below.
                  Still curious? Reach out to us and ask as many questions as you like!
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={'0.5rem'}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>
                About Us 
              </Heading>
              <Text color={useColorModeValue('gray.700', 'white')} style={{ fontSize:"1.25rem" }}>
                I believe that Notion can be incredibly helpful for unlocking your productivity and can make work so much easier, that is why I built Templationary! A one-man team aiming to build as many helpful, easy-to-use Notion templates and widgets free of charge!
              </Text>
              <Text mt={'1rem'} color={useColorModeValue('gray.700', 'white')} style={{ fontSize:"1.25rem" }}>
                Being a student myself, I work on Templationary in my free time and try to make the highest quality Notion templates and widgets I can. Our hosting and operating costs are covered by us as I do not run advertisements on our site, nor do I charge for our templates/widgets.
              </Text>
              <Text mt={'1rem'} color={useColorModeValue('gray.700', 'white')} style={{ fontSize:"1.25rem" }}>
                Tweet to me at <Link color={"blue.300"} _hover={{ opacity:0.8, textDecoration:"none" }} href="https://twitter.com/templationary">@Templationary</Link> to suggest any templates/widgets I should make ⚒️. Feel free to <Link color={"blue.300"} _hover={{ opacity:0.8, textDecoration:"none" }} href={"/contact"}>contact me</Link> too if you have any concerns, or just general questions, I will be quick to reply!
              </Text>
              <Text mt={'1rem'} color={useColorModeValue('gray.700', 'white')} style={{ fontSize:"1.25rem" }}>
                Thank you for using the site!<br />- <Link color={"blue.300"} _hover={{ opacity:0.8, textDecoration:"none" }} href="https://mjh.codes/">Matt</Link>
              </Text>
        </Container>
        </Box>
      <Footer />
      </>
    </div>
  )
}