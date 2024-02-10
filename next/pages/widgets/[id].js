import Head from 'next/head'
import Header from '../../comps/Header.jsx'
import {
  Box, useColorModeValue, Text, Heading,
  Flex, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Image, UnorderedList,
  ListItem, ListIcon, Button, Link
} from '@chakra-ui/react'
import { FaArrowRight, FaChevronRight, FaClock, FaDownload, FaPencilAlt, FaStar } from 'react-icons/fa'
import Footer from '../../comps/Footer.jsx'

export default function WidgetPage({ data, widgetID }) {
  return (
    <div>
      <Head>
        <title>{`${data.title} - Templationary.com`}</title>
        <meta name="description" content={data.preview}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://templationary.com/widgets/${widgetID}`}/>
        <meta property="og:title" content={`${data.title} - Templationary.com`}/>
        <meta property="og:description" content={data.preview}/>
        <meta property="og:image" content={`https://cdn.templationary.com${data.image}`}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={`https://templationary.com/widgets/${widgetID}`}/>
        <meta property="twitter:title" content={`${data.title} - Templationary.com`}/>
        <meta property="twitter:description" content={data.preview}/>
        <meta property="twitter:image" content={`https://cdn.templationary.com${data.image}`}/>

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
        <link rel="canonical" href={`https://templationary.com/widgets/${widgetID}`}/>

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
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://templationary.com/widgets/${widgetID}"
          },
          "headline": "${data.title}",
          "description": "${data.preview}",
          "image": "https://cdn.templationary.com${data.image}",  
          "author": {
            "@type": "Person",
            "name": "Templationary"
          },  
          "publisher": {
            "@type": "Organization",
            "name": "Templationary",
            "logo": {
              "@type": "ImageObject",
              "url": "https://templationary.com/social-icon.png"
            }
          },
          "datePublished": "${new Date().toISOString().split('T')[0]}",
          "dateModified": "${new Date().toISOString().split('T')[0]}"
        }`
      }}/>
      </Head>
      <>
        <Header />
        <Box as='main'>
            <Flex pb={12} px={{ base:4, md:0 }} width="100%" pt={10} justifyContent={"center"}>
                <Flex justifyContent={"start"} width="100%" flexDirection={{ base:"column", md:"row" }} maxWidth={"1392px"}>
                    <Flex flexDirection={"column"} justifyContent={"start"} width={{ base:"100%", md:"70%" }} px={{ base:"none", md:4 }}>
                        <Breadcrumb spacing='8px' separator={<FaChevronRight size={12} opacity='0.8' color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/widgets/' _hover={{ textDecoration:"none", opacity:0.9 }} opacity={0.8}>Widgets</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink textOverflow={'ellipsis'} href='#' _hover={{ textDecoration:"none" }}>{data.title.split(" ")[0] + " " + data.title.split(" ")[1]}...</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Heading 
                        as="h1"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={5}
                        fontWeight={500}
                        pb={5}
                        boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
                        >
                            {data.title}
                        </Heading>
                        <Image alt={data.title} src={"https://cdn.templationary.com"+data.image} mt={5} borderRadius='6px' border={useColorModeValue("1px solid rgba(0, 0, 0, 0.1)","1px solid rgb(255, 255, 255, 0.5)")} />
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        pb={3}
                        boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
                        >
                            Overview
                        </Heading>
                        <Text whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                            {data.overview}             
                        </Text>
                        <Link _hover={{ textDecoration:"none" }} href={`/get/widgets/${widgetID}`}><Button width={"100%"} mt={5} mb={2} size="lg" colorScheme={'blue'} rightIcon={<FaArrowRight />}>
                            Get This Widget
                        </Button></Link>
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={5}
                        fontWeight={500}
                        fontSize={'2xl'}
                        pb={3}
                        boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
                        >
                            Features
                        </Heading>
                        <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                            {data.features.map((item, i) => <ListItem key={i} display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />{item}</ListItem>)}
                        </UnorderedList>
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        pb={3}
                        boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
                        >
                            FAQ
                        </Heading>
                        {data.faq.map((item, i) => <Flex key={i} mt={4} flexDirection="column"><Text mb={2} fontSize={'1.075rem'} fontWeight={600} lineHeight={1.65}>{item[0]}</Text><Text fontSize={'1.075rem'} lineHeight={1.65}>{item[1]}</Text></Flex>)}
                    </Flex>
                    <Box px={4} mt={{ base:6, md:0 }} justifyContent={"start"} width={{ base:"100%", md:"30%" }}>
                        <Flex direction={"column"} p={6} borderRadius='6px' border={useColorModeValue("1px solid rgba(0, 0, 0, 0.1)","1px solid rgb(255, 255, 255, 0.5)")}>
                            <Heading 
                            as="h3"
                            fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                            fontWeight={500}
                            fontSize={'xl'}
                            width="100%"
                            pb={3}
                            boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
                            >
                                Widget Summary
                            </Heading>
                            <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} mx={0} lineHeight={1.65}>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    <ListIcon as={FaPencilAlt} fontSize="md" opacity={0.8} />
                                    <strong>Name:&nbsp;</strong>{data.title.split(" ")[0] + " " + data.title.split(" ")[1]}...
                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    <ListIcon as={FaDownload} fontSize="md" opacity={0.8} />
                                    <strong>Downloads:&nbsp;</strong>100+
                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    <ListIcon as={FaStar} fontSize="md" opacity={0.8} />
                                    <strong>Rating:&nbsp;</strong>{data.rating}
                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    <ListIcon as={FaClock} fontSize="md" opacity={0.8} />
                                    <strong>Last Updated:&nbsp;</strong>{String(new Date().getDate())}{new Date().getDate() == 1 ? "st" : new Date().getDate() == 2 ? "nd" : new Date().getDate() == 3 ? "rd" : "th"} {new Date().toDateString().substring(4, 7)}, {new Date().getFullYear()}
                                </ListItem>
                            </UnorderedList>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
        <Footer />
      </>
    </div>
  )
}

export async function getStaticPaths() {

    const fetchData = async () => {
      const response = await fetch('https://templationary.com/data/widgets.json', {});
      const json = await response.json();
    
      return json;
    }
    
    let jsonData = await fetchData()
      
    const paths = jsonData.map((item) => ({ 
        params: { id: item.id }
    }))
  
    return { paths, fallback: false }
}
  
export async function getStaticProps({ params }) {
    
  let widgetID = params.id

  const fetchData = async () => {
    const response = await fetch('https://templationary.com/data/widgets.json', {});
    const json = await response.json();
  
    return json;
  }

  let jsonData = await fetchData()
  const data = jsonData.find(item => item.id == params.id)

  return { props: { data, widgetID } }
}