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

export default function Templates({ jsonData }) {
  const [filteredData, setFilteredData] = useState([])
  const handleSearch = (e, jsonData) => {
    let filteredDataA = jsonData.filter(element => String(element.title).toLowerCase().includes(e.toLowerCase()))
    setFilteredData(filteredDataA)
    console.log(filteredDataA)
  }
  return (
    <div>
      <Head>
        <title>Notion Templates - Templationary.com</title>
        <meta name="description" content={"Looking for Notion templates to help with productivity, studying, and more? Here you can find all of our Notion templates and use them for free!"}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://templationary.com/templates/"}/>
        <meta property="og:title" content={`Notion Templates - Templationary.com`}/>
        <meta property="og:description" content={"Looking for Notion templates to help with productivity, studying, and more? Here you can find all of our Notion templates and use them for free!"}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://templationary.com/templates/"}/>
        <meta property="twitter:title" content={`Notion Templates - Templationary.com`}/>
        <meta property="twitter:description" content={"Looking for Notion templates to help with productivity, studying, and more? Here you can find all of our Notion templates and use them for free!"}/>
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
        <link rel="canonical" href="https://templationary.com/templates/"/>

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
              "name": "Notion Templates",
              "item": "https://templationary.com/templates/"  
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
                    Templates
                  </Text>
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                    Looking for Notion templates to help with productivity, studying, and more? Here you can find all of 
                    our Notion templates and use them for free!
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
            <Flex mb={6} maxWidth={"90%"} mx="auto">
              <InputGroup>
                <InputLeftElement pointerEvents='none'><FaSearch /></InputLeftElement>
                <Input onChange={(e) => handleSearch(e.target.value, jsonData)} placeholder='Search for a template...' />
              </InputGroup>
            </Flex>
            <Flex px={{ base:"0.5rem!important", md:"0!important" }} marginLeft={"0!important"} alignItems="stretch" justifyContent="center" width={'100%'} flexDirection={{ base:"column", md:"row" }} className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rowReflexive">
              {filteredData.length > 0 ? 
                filteredData.map((item,i) => <Flex key={i} width={{ base:"100%", md:"50%", lg:"auto" }} mb={6} paddingLeft={'0!important'} justifyContent="center" mx={{ md:"0" }} ml={0} mr={{ base:"0.5rem!important" }} className="col"><Card tId={item.id} tName={item.title} tType={"Templates"} tDesc={item.preview} tTags={item.tags} tImage={item.image}/></Flex>)
              :
                jsonData.map((item,i) => <Flex key={i} width={{ base:"100%", md:"50%", lg:"auto" }} mb={6} paddingLeft={'0!important'} justifyContent="center" mx={{ md:"0" }} ml={0} mr={{ base:"0.5rem!important" }} className="col"><Card tId={item.id} tName={item.title} tType={"Templates"} tDesc={item.preview} tTags={item.tags} tImage={item.image}/></Flex>)
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
                Notion{" "}<Text as={'span'} color={'orange.400'}>Templates</Text>
            </Heading>
            <Text mt={4} fontSize={'1.1rem'} lineHeight={1.65}>
            Notion templates are pre-designed pages, databases, or workspaces that you can use as a starting point for your own work in Notion. They are created by other Notion users and shared in the Notion community, and they can help you save time and get organized by providing a structure and layout that you can customize and use for your own purposes.
            <br /><br />
            We have made high quality, easy-to-use Notion templates for you to use free of charge! We have templates available for a wide range of use cases, including project management, personal productivity, event planning, content creation, and more. You can browse and search for templates in our Notion templates page (which you are on), or you can create your own templates by saving a page, database, or workspace as a template.
            <br /><br />
            To use a template in Notion, you can follow the 4 quick steps we send over to you when you get one of our templates, copy of the template in your own Notion workspace, and voila! The template can be used right away. You can then customize the template to fit your needs by adding or deleting content, changing the layout, or formatting, and modifying the settings.             
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
    const response = await fetch('https://templationary.com/data/templates.json', {});
    const json = await response.json();

    return json;
  }

  let jsonData = await fetchData()
  
  return { props: { jsonData } }
}