import Head from 'next/head'
import Header from '../../comps/Header.jsx'
import {
  Box, useColorModeValue, Container, Stack, Text, Heading,
  Flex, Input, InputLeftElement, InputGroup
} from '@chakra-ui/react'
import Card from '../../comps/Card.jsx'
import Footer from '../../comps/Footer.jsx'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export default function Widgets({ jsonData }) {
  const [filteredData, setFilteredData] = useState([])
  const handleSearch = (e, jsonData) => {
    const filteredData = jsonData.filter(element => String(element.title).toLowerCase().includes(e.toLowerCase()))
    setFilteredData(filteredData)
  }
  return (
    <div>
      <Head>
        <title>Notion Widgets - Templationary.com</title>
        <meta name="description" content={"Need some helpful, free Notion widgets? Find productivity boosting, easy to use Notion widgets right here!"}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://templationary.com/widgets/"}/>
        <meta property="og:title" content={`Notion Widgets - Templationary.com`}/>
        <meta property="og:description" content={"Need some helpful, free Notion widgets? Find productivity boosting, easy to use Notion widgets right here!"}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://templationary.com/widgets/"}/>
        <meta property="twitter:title" content={`Notion Widgets - Templationary.com`}/>
        <meta property="twitter:description" content={"Need some helpful, free Notion widgets? Find productivity boosting, easy to use Notion widgets right here!"}/>
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
        <link rel="canonical" href="https://templationary.com/widgets/"/>

        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content={"black-translucent"} />

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

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5682997250624118"
        crossOrigin="anonymous"></script>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/", 
              "@type": "BreadcrumbList", 
              "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "Templationary",
                "item": "https://templationary.com/"  
              },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "Notion Widgets",
                "item": "https://templationary.com/widgets/"  
              }]
          }`}}/>
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
                  All Notion {" "}
                  <Text as={'span'} color={'orange.400'}>
                    Widgets
                  </Text>
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                  Need some helpful, free Notion widgets? 
                  Find our entire range of productivity boosting, easy to use Notion widgets right here!
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
            <Flex mb={6} maxWidth={"90%"} mx="auto">
              <InputGroup>
                <InputLeftElement pointerEvents='none'><FaSearch /></InputLeftElement>
                <Input onChange={(e) => handleSearch(e.target.value, jsonData)} placeholder='Search for a widget...' />
              </InputGroup>
            </Flex>
            <Flex px={{ base:"0.5rem!important", md:"0!important" }} marginLeft={"0!important"} alignItems="stretch" justifyContent="center" width={'100%'} flexDirection={{ base:"column", md:"row" }} className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rowReflexive">
            {filteredData.length > 0 ? 
                filteredData.map((item,i) => <Flex key={i} width={{ base:"100%", md:"50%", lg:"auto" }} mb={6} paddingLeft={'0!important'} justifyContent="center" mx={{ md:"0" }} ml={0} mr={{ base:"0.5rem!important" }} className="col"><Card tId={item.id} tName={item.title} tType={"Widgets"} tDesc={item.preview} tTags={item.tags} tImage={item.image}/></Flex>)
              :
                jsonData.map((item,i) => <Flex key={i} width={{ base:"100%", md:"50%", lg:"auto" }} mb={6} paddingLeft={'0!important'} justifyContent="center" mx={{ md:"0" }} ml={0} mr={{ base:"0.5rem!important" }} className="col"><Card tId={item.id} tName={item.title} tType={"Widgets"} tDesc={item.preview} tTags={item.tags} tImage={item.image}/></Flex>)
              }
            </Flex>
          </Container>
          <Container maxW={'1380px'}>
          <Heading 
            as="h2"
            fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
            mt={7}
            fontWeight={500}
            fontSize={'3xl'}
            pb={3}
            boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
            >
                Notion{" "}<Text as={'span'} color={'orange.400'}>Widgets</Text>
            </Heading>
            <Text mt={4} fontSize={'1.1rem'} lineHeight={1.65}>
            Notion widgets are small, interactive elements that can be added to a page in Notion to enhance its functionality and user experience. They are similar to widgets in other applications, such as dashboard widgets or widget-like features in websites and mobile apps.
            <br /><br />
            We have made a wide range of Notion widgets that can be embedded into your dashboards and pages in seconds! From prayer time trackers to weather widgets, and progress bars to calculators, you can find everything you need to increase your productivity and improve how aesthetic your Notion pages are right here, all free of charge!
            <br /><br />
            To use our widgets in Notion, you can simply follow the 4 steps given when you get one of our widgets and implement it in seconds, no skills required! You can then customize the widget by setting its options and configuring its appearance too.
            </Text>
          </Container>
        </Box>
        <Footer />
      </>
    </div>
  )
}

export async function getStaticProps() {

  const fetchData = async () => {
    const response = await fetch('https://templationary.com/data/widgets.json', {});
    const json = await response.json();

    return json;
  }

  let jsonData = await fetchData()
  
  return { props: { jsonData } }
}