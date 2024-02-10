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

export default function Tags({ jsonData, query }) {
  const [filteredData, setFilteredData] = useState([])
  const handleSearch = (e, jsonData) => {
    const filteredData = jsonData.filter(element => String(element.name).toLowerCase().includes(e.toLowerCase()))
    setFilteredData(filteredData)
  }
  return (
    <div>
      <Head>
        <title>{`${query.replace(/^./, str => str.toUpperCase())} Notion Templates and Widgets - Templationary.com`}</title>
        <meta name="description" content={`Looking for ${query} Notion templates and widgets? Here are all of our templates and widgets with the tag ${query}!`}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://templationary.com/tags/${query}`}/>
        <meta property="og:title" content={`${query.replace(/^./, str => str.toUpperCase())} Notion Templates and Widgets - Templationary.com`}/>
        <meta property="og:description" content={`Looking for ${query} Notion templates and widgets? Here are all of our templates and widgets with the tag ${query}!`}/>
        <meta property="og:image" content={"https://templationary.com/social-icon.png"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={`https://templationary.com/tags/${query}`}/>
        <meta property="twitter:title" content={`${query.replace(/^./, str => str.toUpperCase())} Notion Templates and Widgets - Templationary.com`}/>
        <meta property="twitter:description" content={`Looking for ${query} Notion templates and widgets? Here are all of our templates and widgets with the tag ${query}!`}/>
        <meta property="twitter:image" content={"https://templationary.com/social-icon.png"}/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="robots" content="noindex, follow"/>
        <meta name="googlebot" content="noindex, follow"/>

        <meta property="og:locale" content="en_US"/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="canonical" href={`https://templationary.com/tags/${query}`}/>

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
                  {query} {" "}
                  <Text as={'span'} textTransform={"capitalize"} color={'orange.400'}>
                    Templates and Widgets
                  </Text>
                </Heading>
                <Text lineHeight={1.5} color={useColorModeValue('gray.500', 'gray.100')} fontSize="1.25rem" maxW={'3xl'}>
                    Looking for Notion templates and widgets that are tagged with <Text as={'span'} color={'orange.400'}>
                    {query}</Text>?
                    Find all of our Notion <Text as={'span'} color={'orange.400'}>
                    {query}</Text> templates and widgets here and use them for free!
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
            <Flex mb={6} maxWidth={"90%"} mx="auto">
              <InputGroup>
                <InputLeftElement pointerEvents='none'><FaSearch /></InputLeftElement>
                <Input onChange={(e) => handleSearch(e.target.value, jsonData)} placeholder='Search for a template/widget...' />
              </InputGroup>
            </Flex>
            <Flex px={{ base:"0.5rem!important", md:"0!important" }} marginLeft={"0!important"} alignItems="stretch" justifyContent="center" width={'100%'} display="flex" flexDirection={{ base:"column", md:"row" }} className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rowReflexive">
              {filteredData.length > 0 ? 
                  filteredData.map((item,i) => <Flex key={i} width={{ base:"100%", md:"50%", lg:"auto" }} mb={6} paddingLeft={'0!important'} justifyContent="center" mx={{ md:"0" }} ml={0} mr={{ base:"0.5rem!important" }} className="col"><Card tId={item.id} tName={item.title} tType={item.url.includes("https://templationary.com/widgets") ? "Widgets" : "Templates"} tDesc={item.preview} tTags={item.tags} tImage={item.image}/></Flex>)
                :
                  jsonData.map((item,i) => <Flex key={i} width={{ base:"100%", md:"50%", lg:"auto" }} mb={6} paddingLeft={'0!important'} justifyContent="center" mx={{ md:"0" }} ml={0} mr={{ base:"0.5rem!important" }} className="col"><Card tId={item.id} tName={item.title} tType={item.url.includes("https://templationary.com/widgets") ? "Widgets" : "Templates"} tDesc={item.preview} tTags={item.tags} tImage={item.image}/></Flex>)
                }
            </Flex>
          </Container>
        </Box>
        <Footer />
      </>
    </div>
  )
}

export async function getStaticPaths() {

    const fetchData = async (type) => {
      const response = await fetch(`https://templationary.com/data/${type}.json`, {});
      const json = await response.json();
    
      return json;
    }
    
    let jsonDataTemplates = await fetchData("templates")
    let jsonDataWidgets = await fetchData("widgets")

    let jsonData = jsonDataTemplates.concat(jsonDataWidgets)

    let tags = []
    jsonData.map((item)=>item.tags.map((item) => tags.push(item)))
    tags = [...new Set(tags)]
      
    const paths = tags.map((item) => ({ 
        params: { tag: String(item).toLowerCase() }
    }))
  
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  const fetchData = async (type) => {
    const response = await fetch(`https://templationary.com/data/${type}.json`, {});
    const json = await response.json();
  
    return json;
  }
  
  let jsonDataTemplates = await fetchData("templates")
  let jsonDataWidgets = await fetchData("widgets")

  let jsonData2 = jsonDataTemplates.concat(jsonDataWidgets)

  const jsonData = jsonData2.filter(item => item.tags.includes(String(params.tag).replace(/^./, str => str.toUpperCase())))
  const query = params.tag

  return { props: { jsonData, query } }
}