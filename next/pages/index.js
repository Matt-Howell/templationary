import Head from 'next/head'
import Header from '../comps/Header.jsx'
import {
  Box, useColorModeValue, Container, Stack, Text, Heading,
  Flex, Link
} from '@chakra-ui/react'
import Card from '../comps/Card.jsx'
import Footer from '../comps/Footer.jsx'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Templationary.com</title>
        <meta name="description" content={"Find unique, ready to use custom Notion templates and widgets. You can find loads of awesome Notion templates and widgets right here!"}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://templationary.com/"}/>
        <meta property="og:title" content={`Templationary.com`}/>
        <meta property="og:description" content={"Find unique, ready to use custom Notion templates and widgets. You can find loads of awesome Notion templates and widgets right here!"}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://templationary.com/"}/>
        <meta property="twitter:title" content={`Templationary.com`}/>
        <meta property="twitter:description" content={"Find unique, ready to use custom Notion templates and widgets. You can find loads of awesome Notion templates and widgets right here!"}/>
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
        <link rel="canonical" href="https://templationary.com/"/>

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Templationary",
          "url": "https://templationary.com/"
        }`
        }} 
      />
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
                  Templationary
                  <Text as={'span'} color={'orange.400'}>
                    .com
                  </Text>
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                Find unique, ready to use custom Notion templates and widgets. From finance trackers to study dashboards, meal planners to prayer times,
                you can find loads of Notion templates and widgets right here!
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={4} maxW={'1500px'}>
          <Flex px={{ base:"0.5rem!important", md:"0!important" }} marginLeft={"0!important"} alignItems="stretch" justifyContent="center" width={'100%'} flexDirection={{ base:"column", md:"row" }} className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rowReflexive">
            {data.map((val, ind, arr) => <Flex key={ind} width={{ base:"100%", md:"50%", lg:"auto" }} mb={6} paddingLeft={'0!important'} justifyContent="center" mx={{ md:"0" }} ml={0} mr={{ base:"0.5rem!important" }} className="col"><Card
                tId={val.id} 
                tName={val.title} 
                tType={val.url.includes("https://templationary.com/widgets") ? "Widgets" : "Templates"} 
                tDesc={val.preview} 
                tTags={val.tags} 
                tImage={val.image}/>
            </Flex>)}
            </Flex>
            <Heading
              fontWeight={400}
              display={'flex'}
              mt={8}
              fontSize={{ base: '2xl', sm: '3xl' }}
              fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
              lineHeight={'110%'}
              w="full"
              pb={'1rem'}
              mb={4}
              borderBottom={'1px solid '+useColorModeValue('#00000025', '#ffffff25')}
              color={useColorModeValue('gray.800', 'white')}>
              What Are You Looking For?
            </Heading>
            <Flex direction={{ base:"column", md:"row" }}>
              <Flex width={{ base:"100%", md:"50%" }} bg={useColorModeValue('#fffff', 'gray.800')} display={'flex'} mr={{ base:0,md:4 }} mb={{ base:4,md:0 }} boxShadow={'2xl'} rounded={'md'} w="full" p='1rem 0'> 
                <Box p={{ base: 4, md: 4 }}>
                  <Link href={"/templates/"} style={{ textDecoration:"none!important" }}>
                    <Heading fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'} fontSize="2xl" _hover={{ opacity:'0.8!important' }} fontWeight="bold" textTransform="capitalize"> 
                      Notion Templates
                    </Heading>
                  </Link>
                  <Text fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'} mt={2} fontSize="sm">Find all of our custom, helpful Notion templates designed to help boost your productivity!</Text>
                </Box>
              </Flex>
              <Flex  width={{ base:"100%", md:"50%" }} bg={useColorModeValue('#fffff', 'gray.800')} display={'flex'} boxShadow={'2xl'} rounded={'md'} w="full" p='1rem 0'> 
                <Box p={{ base: 4, md: 4 }}>
                  <Link href={"/widgets/"} style={{ textDecoration:"none!important" }}>
                    <Heading fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'} fontSize="2xl" _hover={{ opacity:'0.8!important' }} fontWeight="bold" textTransform="capitalize"> 
                      Notion Widgets
                    </Heading>
                  </Link>
                  <Text fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'} mt={2} fontSize="sm">Check out our range of custom, useful Notion widgets to lighten up your pages!</Text>
                </Box>
              </Flex>
            </Flex>
          </Container>
        </Box>
        <Footer />
      </>
    </div>
  )
}

export async function getStaticProps() {

  const fetchData = async (type) => {
    const response = await fetch(`https://templationary.com/data/${type}.json`, {});
    const json = await response.json();
  
    return json;
  }

  let jsonData = await fetchData("templates")
  let jsonData2 = await fetchData("widgets")

  const a = jsonData.slice(-3)
  const data = a.concat(jsonData2.slice(-3))

  return { props: { data } }
}