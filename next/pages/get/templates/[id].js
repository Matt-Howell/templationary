import Head from 'next/head'
import Header from '../../../comps/Header.jsx'
import {
  Box, useColorModeValue, Text, Heading,
  Flex, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Image, UnorderedList,
  ListItem, ListIcon, Button, InputGroup, InputRightAddon, Input, useToast
} from '@chakra-ui/react'
import { FaArrowRight, FaChevronRight, FaClock, FaDownload, FaPencilAlt, FaStar } from 'react-icons/fa'
import Footer from '../../../comps/Footer.jsx'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import { useRef } from 'react'

export default function GetPage({ data, templateID }) {
  const userEmail = useRef()
  const toast = useToast()
  
  return (
    <div>
      <Head>
        <title>{`Get ${data.title} - Templationary.com`}</title>
        <meta name="description" content={data.preview}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://templationary.com/get/templates/${templateID}`}/>
        <meta property="og:title" content={`Get ${data.title} - Templationary.com`}/>
        <meta property="og:description" content={data.preview}/>
        <meta property="og:image" content={`https://cdn.templationary.com${data.image}`}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={`https://templationary.com/get/templates/${templateID}`}/>
        <meta property="twitter:title" content={`Get ${data.title} - Templationary.com`}/>
        <meta property="twitter:description" content={data.preview}/>
        <meta property="twitter:image" content={`https://cdn.templationary.com${data.image}`}/>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="robots" content="noindex, nofollow"/>
        <meta name="googlebot" content="noindex, nofollow"/>

        <meta property="og:locale" content="en_US"/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="canonical" href={`https://templationary.com/get/templates/${templateID}`}/>

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
            <Flex pb={12} px={{ base:4, md:0 }} width="100%" pt={10} justifyContent={"center"}>
                <Flex justifyContent={"start"} width="100%" flexDirection={{ base:"column", md:"row" }} maxWidth={"1392px"}>
                    <Flex flexDirection={"column"} justifyContent={"start"} width={{ base:"100%", md:"70%" }}>
                        <Breadcrumb spacing='8px' separator={<FaChevronRight size={12} opacity='0.8' color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/templates/${templateID}`} _hover={{ textDecoration:"none", opacity:0.9 }} opacity={0.8}>{data.title.split(" ")[0] + " " + data.title.split(" ")[1]}...</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink textOverflow={'ellipsis'} href='#' _hover={{ textDecoration:"none" }}>Get {data.title.split(" ")[0] + " " + data.title.split(" ")[1]}...</BreadcrumbLink>
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
                            Get The {data.title}
                        </Heading>
                        <Image src={"https://cdn.templationary.com"+data.image} mt={5} borderRadius='6px' border={useColorModeValue("1px solid rgba(0, 0, 0, 0.1)","1px solid rgb(255, 255, 255, 0.5)")} />
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        pb={3}
                        boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
                        >
                            How to Get This Template
                        </Heading>
                        <Text mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                            This template is entirely free of charge! We want to make all of our Notion templates available to everyone, so we made it very simple to get them. Follow these 4 steps to start using your new Notion template in seconds:             
                        </Text>
                        <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                            <ListItem display={'flex'} alignItems="center" listStyleType={'none'}>
                                <ListIcon as={RiNumber1} fontSize="md" opacity={0.8} />
                                Enter your email address below and press the button next to it.
                            </ListItem>
                            <ListItem display={'flex'} alignItems="center" listStyleType={'none'}>
                                <ListIcon as={RiNumber2} fontSize="md" opacity={0.8} />
                                Check your email inbox and copy the link we sent to you.
                            </ListItem>
                            <ListItem display={'flex'} alignItems="center" listStyleType={'none'}>
                                <ListIcon as={RiNumber3} fontSize="md" opacity={0.8} />
                                Open the link sent inside the email.
                            </ListItem>
                            <ListItem display={'flex'} alignItems="center" listStyleType={'none'}>
                                <ListIcon as={RiNumber4} fontSize="md" opacity={0.8} />
                                Press duplicate in the top right of the Notion template.
                            </ListItem>
                        </UnorderedList>
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const response = await fetch(`https://templationary.com/send?type=templates&email=${userEmail.current.value}&id=${templateID}`)
                            if (response.status == 200) {
                                toast({
                                    title: "📨 Template Sent!",
                                    description: `Check your emails - your template link should be in there!`,
                                    status: "success",
                                    position: "top-end",
                                    duration: 7500,
                                    isClosable: true,
                                })
                            }
                        }}><InputGroup minHeight={65} mt={6}>
                            <Input minHeight={65} type="email" ref={userEmail} placeholder='Your Email Address' />
                            <InputRightAddon minHeight={65} p={0}><><Button type="submit" height={"100%"} width={"100%"} colorScheme={'blue'} rightIcon={<FaArrowRight />}  borderRadius={"0 0.375rem 0.375rem 0!important"}>Get This Template</Button></></InputRightAddon>
                        </InputGroup></form>
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
                                Template Summary
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
      const response = await fetch('https://templationary.com/data/templates.json', {});
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
    
  let templateID = params.id

  const fetchData = async () => {
    const response = await fetch('https://templationary.com/data/templates.json', {});
    const json = await response.json();
  
    return json;
  }

  let jsonData = await fetchData()
  const data = jsonData.find(item => item.id == params.id)

  return { props: { data, templateID } }
}