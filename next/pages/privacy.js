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
  UnorderedList,
  Link
} from "@chakra-ui/react";
import Footer from '../comps/Footer.jsx'
import { FaChevronRight } from 'react-icons/fa';

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>Your Privacy - Templationary.com</title>
        <meta name="description" content={"On our website, we put our users first. To keep you in the know, here is our privacy policy."}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://templationary.com/privacy"}/>
        <meta property="og:title" content={`Your Privacy - Templationary.com`}/>
        <meta property="og:description" content={"On our website, we put our users first. To keep you in the know, here is our privacy policy."}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://templationary.com/privacy"}/>
        <meta property="twitter:title" content={`Your Privacy - Templationary.com`}/>
        <meta property="twitter:description" content={"On our website, we put our users first. To keep you in the know, here is our privacy policy."}/>
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
        <link rel="canonical" href="https://templationary.com/privacy"/>

        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content={"black-translucent"} />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5682997250624118"
        crossOrigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
      
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
                  Your Privacy
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                    On our website, we put our users first. To keep you in the know, here is our privacy policy.
                    Thank you in advance 💙
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
          <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>At Templationary, accessible from templationary.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Templationary and how we use it.</Text><br />

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</Text><br />

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Templationary. This policy is not applicable to any information collected offline or via channels other than this website.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Consent</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Information we collect</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>How we use your information</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>We use the information we collect in various ways, including to:</Text><br />

<UnorderedList style={{ paddingLeft:"30px" }}>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Provide, operate, and maintain our website</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Improve, personalize, and expand our website</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Understand and analyze how you use our website</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Develop new products, services, features, and functionality</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Send you emails</ListItem>
<ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Find and prevent fraud</ListItem>
</UnorderedList><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Log Files</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Templationary follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Cookies and Web Beacons</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Like any other website, Templationary uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</Text><br />

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>For more general information on cookies, please read <Link href="https://www.allaboutcookies.org/cookies/">&quot;What Are Cookies&quot;</Link>.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Google DoubleClick DART Cookie</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <Link href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</Link></Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Our Advertising Partners</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</Text><br />

<UnorderedList style={{ paddingLeft:"30px" }}>
    <ListItem fontSize={"lg"} display={'flex'} alignItems="center" listStyleType={'none'}>
                    <ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />
        <Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Google: <Link href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</Link></Text>
    </ListItem>
</UnorderedList><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Advertising Partners Privacy Policies</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>You may consult this list to find the Privacy Policy for each of the advertising partners of Templationary.</Text><br />

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Templationary, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Text><br />

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Note that Templationary has no access to or control over these cookies that are used by third-party advertisers.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Third Party Privacy Policies</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Templationary&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </Text><br />

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>CCPA Privacy Rights (Do Not Sell My Personal Information)</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Under the CCPA, among other rights, California consumers have the right to:</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Request that a business delete any personal data about the consumer that a business has collected.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>GDPR Data Protection Rights</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Text><br />
<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text><br />

<Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              pb={'0.8rem'}
              textAlign={'left'}
              mb={4}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Children&apos;s Information</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Text><br />

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>Templationary does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Text>
        <br />
<Heading
  color={useColorModeValue('gray.700', 'white')}
  fontSize={'xl'}
  pb={'0.8rem'}
  textAlign={'left'}
  mb={4}
  fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
  borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}>Your Emails</Heading>

<Text color={useColorModeValue('gray.700', 'white')} fontSize={"lg"}>By using our templates and widgets, your email will be used by Templationary for marketing and outreach purposes. We will never sell your email address to third-parties.</Text><br />
        
        </Container>
        </Box>
      <Footer />
      </>
    </div>
  )
}