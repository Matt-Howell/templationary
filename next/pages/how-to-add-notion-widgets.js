import Head from 'next/head'
import Header from '../comps/Header.jsx'
import {
  Box, useColorModeValue, Text, Heading,
  Flex, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Image, UnorderedList,
  ListItem, ListIcon, Link
} from '@chakra-ui/react'
import { FaChevronRight, FaClock } from 'react-icons/fa'
import Footer from '../comps/Footer.jsx'

export default function Post() {
  return (
    <div>
      <Head>
        <title>A Guide to Using Widgets in Notion - Templationary.com</title>
        <meta name="description" content="In this guide, we'll explore the advanced features of Notion's widgets and how they can be used to streamline your workflow and enhance your productivity."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={`https://templationary.com/how-to-add-notion-widgets`}/>
        <meta property="og:title" content={`A Guide to Using Widgets in Notion - Templationary.com`}/>
        <meta property="og:description" content="In this guide, we'll explore the advanced features of Notion's widgets and how they can be used to streamline your workflow and enhance your productivity."/>
        <meta property="og:image" content={`https://cdn.templationary.com/images/social-icon.png`}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={`https://templationary.com/how-to-add-notion-widgets`}/>
        <meta property="twitter:title" content={`A Guide to Using Widgets in Notion - Templationary.com`}/>
        <meta property="twitter:description" content="In this guide, we'll explore the advanced features of Notion's widgets and how they can be used to streamline your workflow and enhance your productivity."/>
        <meta property="twitter:image" content={`https://cdn.templationary.com/images/social-icon.png`}/>

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
        <link rel="canonical" href={`https://templationary.com/how-to-add-notion-widgets`}/>

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
            <Flex pb={12} px={{ base:4, md:0 }} width="100%" pt={10} justifyContent={"center"}>
                <Flex justifyContent={"start"} width="100%" flexDirection={{ base:"column", md:"row" }} maxWidth={"1392px"}>
                    <Flex flexDirection={"column"} justifyContent={"start"} width={{ base:"100%", md:"70%" }} px={{ base:"none", md:4 }}>
                        <Breadcrumb spacing='8px' separator={<FaChevronRight size={12} opacity='0.8' color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/' _hover={{ textDecoration:"none", opacity:0.9 }} opacity={0.8}>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink textOverflow={'ellipsis'} href='#' _hover={{ textDecoration:"none" }}>How to Add Templates in Notion...</BreadcrumbLink>
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
                            A Guide to Using Widgets in Notion
                        </Heading>
                        <Image alt='A Guide to Using Widgets in Notion' src="https://cdn.templationary.com/images/posts/Add-Widgets.webp" mt={5} borderRadius='6px' border={useColorModeValue("1px solid rgba(0, 0, 0, 0.1)","1px solid rgb(255, 255, 255, 0.5)")} />
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        pb={3}
                        boxShadow={useColorModeValue("rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset","rgb(255 255 255 / 5%) 0px -1px 0px 0px inset")}
                        >
                            How to Use Notion Widgets
                        </Heading>
                        <Text whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        In Notion, widgets are strong tools that can speed up your process, boost productivity, and keep you organised. They can be used for a range of activities, including time monitoring, job management, and the display of stock prices and weather predictions. We&apos;ll show you how to use Notion&apos;s widgets in this tutorial so you can increase your output and benefit from this potent efficiency aid.
                        </Text>
                        <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        <ListItem display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />To add a widget to a Notion page, select the &quot;Embed&quot; option from the page menu.</ListItem>
                        <ListItem display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Head to our&nbsp;<Link href="/widgets/" color={"blue.300"} _hover={{ textDecoration:"none", opacity:0.6 }}>widgets</Link>&nbsp;page and find a widget.</ListItem>
                        <ListItem display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Paste the widget&apos; link into the embed block.</ListItem>
                        <ListItem display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />To use a widget, simply interact with it as you would with any other app or tool.</ListItem>
                        <ListItem display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />To remove a widget from a Notion page, simply delete the embed block that contains the widget&apos; code.</ListItem>
                        </UnorderedList>
                        <Text whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        Once you have added the embed code, the widget will appear on your page and you can start using it right away.
                        </Text>
                        <Text whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        One of the most popular widgets in Notion is the <Link href="/widgets/2523" color={"blue.300"} _hover={{ textDecoration:"none", opacity:0.6 }}>Pomodoro timer</Link>, which is a productivity technique that involves breaking work down into 25-minute intervals.<br /> <br /> To use the Pomodoro timer widget in Notion, simply add it to a page and set the length of your work and break intervals. The widget will then start counting down your work interval, and sound an alarm when it&apos;s time to take a break. This can be a great way to stay focused and avoid distractions while working.
                        </Text>
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
                                Post Summary
                            </Heading>
                            <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} mx={0} lineHeight={1.65}>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    A Guide to Using Widgets in Notion
                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                In this guide, we&apos;ll explore the advanced features of Notion&apos;s widgets and how they can be used to streamline your workflow and enhance your productivity.</ListItem>
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