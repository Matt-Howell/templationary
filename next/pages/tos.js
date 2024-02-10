import Head from 'next/head'
import Header from '../comps/Header.jsx'
import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  useColorModeValue,
  ListItem,
  ListIcon,
  UnorderedList
} from "@chakra-ui/react";
import Footer from '../comps/Footer.jsx'
import { FaChevronRight } from 'react-icons/fa';

export default function Terms() {
  return (
    <div>
      <Head>
        <title>Terms of Service - Templationary.com</title>
        <meta name="description" content={"While using our services, we kindly request you to follow these terms to help keep everyone safe!"}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://templationary.com/tos"}/>
        <meta property="og:title" content={`Terms of Service - Templationary.com`}/>
        <meta property="og:description" content={"While using our services, we kindly request you to follow these terms to help keep everyone safe!"}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://templationary.com/tos"}/>
        <meta property="twitter:title" content={`Terms of Service - Templationary.com`}/>
        <meta property="twitter:description" content={"While using our services, we kindly request you to follow these terms to help keep everyone safe!"}/>
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
        <link rel="canonical" href="https://templationary.com/tos"/>

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
                  Terms of Service
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                    While using our services, we kindly request you to follow these terms to help keep everyone safe!
                    Thank you in advance 💙
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>1. Terms</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>By accessing this website, accessible from Templationary.com, you are agreeing to be bound by these website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this website are protected by copyright and trade mark law.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>2. Use License</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Permission is granted to temporarily download one copy of the materials on Templationary website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</Text>
            <br />
            <UnorderedList style={{ paddingLeft:"30px" }}>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />modify or copy the materials;</ListItem>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />use the materials for any commercial purpose or for any public display;</ListItem>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />attempt to reverse engineer any software contained on Templationary website;</ListItem>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />remove any copyright or other proprietary notations from the materials; or</ListItem>
                <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />transferring the materials to another person or &quot;mirror&quot; the materials on any other server.</ListItem>
            </UnorderedList>
            <br />
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>This will let Templationary to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>3. Disclaimer</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>All the materials on Templationary&apos;s website are provided &quot;as is&quot;. Templationary makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Templationary does not make any representations concerning the accuracy or reliability of the use of the materials on its website or otherwise relating to such materials or any sites linked to this website.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>4. Limitations</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Templationary or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Templationary&apos;s website, even if Templationary or an authorize representative of this website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>5. Revisions and Errata</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The materials appearing on Templationary&apos;s website may include technical, typographical, or photographic errors. Templationary will not promise that any of the materials in this website are accurate, complete, or current. Templationary may change the materials contained on its website at any time without notice. Templationary does not make any commitment to update the materials.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>6. Links</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Templationary has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Templationary of the site. The use of any linked website is at the user&apos;s own risk.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>7. Site Terms of Use Modifications</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Templationary may revise these Terms of Use for its website at any time without prior notice. By using this website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>8. Your Privacy</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Please read our Privacy Policy.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>9. Governing Law</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Any claim related to Templationary website shall be governed by the laws of GB without regards to its conflict of law provisions.</Text>
            <br />
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>10. Our Content</Heading>
            <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>By downloading our templates, widgets, or any other content on our website, you are agreeing that you will not sell this content or use it for profit in the future.</Text>
        </Container>
        </Box>
      <Footer />
      </>
    </div>
  )
}