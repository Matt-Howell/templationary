import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const Logo = () => {
    return (
        <svg width="193" height="23" viewBox="0 0 193 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.79572 18V2.304H0.747718V1.2H14.0677V2.304H8.01972V18H6.79572ZM19.7747 18.096C18.5107 18.096 17.3907 17.824 16.4147 17.28C15.4547 16.736 14.6947 15.984 14.1347 15.024C13.5907 14.064 13.3187 12.968 13.3187 11.736C13.3187 10.488 13.5747 9.392 14.0867 8.448C14.6147 7.488 15.3347 6.736 16.2467 6.192C17.1587 5.648 18.1827 5.376 19.3187 5.376C20.4547 5.376 21.4707 5.64 22.3667 6.168C23.2787 6.696 23.9907 7.44 24.5027 8.4C25.0307 9.344 25.2947 10.44 25.2947 11.688C25.2947 11.736 25.2867 11.792 25.2707 11.856C25.2707 11.904 25.2707 11.96 25.2707 12.024H14.2067V11.088H24.6227L24.1427 11.544C24.1587 10.568 23.9507 9.696 23.5187 8.928C23.1027 8.144 22.5347 7.536 21.8147 7.104C21.0947 6.656 20.2627 6.432 19.3187 6.432C18.3907 6.432 17.5587 6.656 16.8227 7.104C16.1027 7.536 15.5347 8.144 15.1187 8.928C14.7027 9.696 14.4947 10.576 14.4947 11.568V11.784C14.4947 12.808 14.7187 13.72 15.1667 14.52C15.6307 15.304 16.2627 15.92 17.0627 16.368C17.8627 16.8 18.7747 17.016 19.7987 17.016C20.5987 17.016 21.3427 16.872 22.0307 16.584C22.7347 16.296 23.3267 15.856 23.8067 15.264L24.5027 16.056C23.9587 16.728 23.2707 17.24 22.4387 17.592C21.6227 17.928 20.7347 18.096 19.7747 18.096ZM43.887 5.376C44.895 5.376 45.767 5.576 46.503 5.976C47.255 6.36 47.839 6.952 48.255 7.752C48.671 8.536 48.879 9.512 48.879 10.68V18H47.679V10.776C47.679 9.368 47.335 8.296 46.647 7.56C45.959 6.824 44.999 6.456 43.767 6.456C42.823 6.456 42.007 6.656 41.319 7.056C40.631 7.456 40.103 8.016 39.735 8.736C39.367 9.456 39.183 10.32 39.183 11.328V18H37.983V10.776C37.983 9.368 37.639 8.296 36.951 7.56C36.263 6.824 35.303 6.456 34.071 6.456C33.127 6.456 32.311 6.656 31.623 7.056C30.935 7.456 30.407 8.016 30.039 8.736C29.671 9.456 29.487 10.32 29.487 11.328V18H28.287V5.472H29.439V8.928L29.271 8.544C29.639 7.568 30.255 6.8 31.119 6.24C31.983 5.664 33.023 5.376 34.239 5.376C35.487 5.376 36.535 5.696 37.383 6.336C38.247 6.96 38.791 7.896 39.015 9.144L38.607 8.976C38.943 7.904 39.575 7.04 40.503 6.384C41.431 5.712 42.559 5.376 43.887 5.376ZM59.4018 18.096C58.2978 18.096 57.2978 17.84 56.4018 17.328C55.5218 16.816 54.8178 16.088 54.2898 15.144C53.7778 14.184 53.5218 13.048 53.5218 11.736C53.5218 10.424 53.7778 9.296 54.2898 8.352C54.8178 7.392 55.5218 6.656 56.4018 6.144C57.2978 5.632 58.2978 5.376 59.4018 5.376C60.5858 5.376 61.6418 5.648 62.5698 6.192C63.5138 6.72 64.2498 7.464 64.7778 8.424C65.3218 9.384 65.5938 10.488 65.5938 11.736C65.5938 12.984 65.3218 14.088 64.7778 15.048C64.2498 16.008 63.5138 16.76 62.5698 17.304C61.6418 17.832 60.5858 18.096 59.4018 18.096ZM53.1138 22.656V5.472H54.2658V9.576L54.0738 11.76L54.3138 13.944V22.656H53.1138ZM59.3298 17.016C60.2898 17.016 61.1538 16.8 61.9218 16.368C62.6898 15.92 63.2898 15.296 63.7218 14.496C64.1698 13.696 64.3938 12.776 64.3938 11.736C64.3938 10.68 64.1698 9.76 63.7218 8.976C63.2898 8.176 62.6898 7.56 61.9218 7.128C61.1538 6.68 60.2898 6.456 59.3298 6.456C58.3698 6.456 57.5058 6.68 56.7378 7.128C55.9858 7.56 55.3858 8.176 54.9378 8.976C54.5058 9.76 54.2898 10.68 54.2898 11.736C54.2898 12.776 54.5058 13.696 54.9378 14.496C55.3858 15.296 55.9858 15.92 56.7378 16.368C57.5058 16.8 58.3698 17.016 59.3298 17.016ZM68.5892 18V0.191999H69.7892V18H68.5892ZM82.023 18V15.144L81.975 14.712V10.008C81.975 8.84 81.655 7.952 81.015 7.344C80.391 6.736 79.471 6.432 78.255 6.432C77.391 6.432 76.583 6.584 75.831 6.888C75.095 7.176 74.463 7.552 73.935 8.016L73.335 7.152C73.959 6.592 74.711 6.16 75.591 5.856C76.471 5.536 77.391 5.376 78.351 5.376C79.903 5.376 81.095 5.768 81.927 6.552C82.759 7.336 83.175 8.504 83.175 10.056V18H82.023ZM77.511 18.096C76.583 18.096 75.775 17.952 75.087 17.664C74.415 17.36 73.895 16.936 73.527 16.392C73.175 15.848 72.999 15.224 72.999 14.52C72.999 13.88 73.143 13.304 73.431 12.792C73.735 12.264 74.231 11.84 74.919 11.52C75.607 11.184 76.527 11.016 77.679 11.016H82.287V11.952H77.703C76.407 11.952 75.495 12.192 74.967 12.672C74.455 13.152 74.199 13.752 74.199 14.472C74.199 15.272 74.503 15.912 75.111 16.392C75.719 16.872 76.575 17.112 77.679 17.112C78.735 17.112 79.623 16.872 80.343 16.392C81.079 15.912 81.623 15.216 81.975 14.304L82.311 15.12C81.975 16.032 81.399 16.76 80.583 17.304C79.783 17.832 78.759 18.096 77.511 18.096ZM91.0472 18.096C89.9432 18.096 89.0952 17.792 88.5032 17.184C87.9272 16.576 87.6392 15.744 87.6392 14.688V2.736H88.8392V14.568C88.8392 15.368 89.0392 15.984 89.4392 16.416C89.8392 16.848 90.4152 17.064 91.1672 17.064C91.9512 17.064 92.5992 16.832 93.1112 16.368L93.6152 17.208C93.2952 17.512 92.9032 17.736 92.4392 17.88C91.9912 18.024 91.5272 18.096 91.0472 18.096ZM85.3352 6.504V5.472H92.8232V6.504H85.3352ZM96.2417 18V5.472H97.4417V18H96.2417ZM96.8417 2.424C96.5697 2.424 96.3377 2.328 96.1457 2.136C95.9537 1.944 95.8577 1.72 95.8577 1.464C95.8577 1.192 95.9537 0.959999 96.1457 0.767999C96.3377 0.575999 96.5697 0.48 96.8417 0.48C97.1297 0.48 97.3617 0.575999 97.5377 0.767999C97.7297 0.943999 97.8257 1.168 97.8257 1.44C97.8257 1.712 97.7297 1.944 97.5377 2.136C97.3617 2.328 97.1297 2.424 96.8417 2.424ZM106.675 18.096C105.475 18.096 104.403 17.824 103.459 17.28C102.531 16.736 101.787 15.984 101.227 15.024C100.683 14.064 100.411 12.968 100.411 11.736C100.411 10.488 100.683 9.392 101.227 8.448C101.787 7.488 102.531 6.736 103.459 6.192C104.403 5.648 105.475 5.376 106.675 5.376C107.875 5.376 108.947 5.648 109.891 6.192C110.835 6.736 111.579 7.488 112.123 8.448C112.667 9.392 112.939 10.488 112.939 11.736C112.939 12.968 112.667 14.064 112.123 15.024C111.579 15.984 110.835 16.736 109.891 17.28C108.947 17.824 107.875 18.096 106.675 18.096ZM106.675 17.016C107.635 17.016 108.499 16.8 109.267 16.368C110.035 15.92 110.635 15.296 111.067 14.496C111.499 13.696 111.715 12.776 111.715 11.736C111.715 10.68 111.499 9.76 111.067 8.976C110.635 8.176 110.035 7.56 109.267 7.128C108.499 6.68 107.635 6.456 106.675 6.456C105.715 6.456 104.851 6.68 104.083 7.128C103.331 7.56 102.731 8.176 102.283 8.976C101.851 9.76 101.635 10.68 101.635 11.736C101.635 12.776 101.851 13.696 102.283 14.496C102.731 15.296 103.331 15.92 104.083 16.368C104.851 16.8 105.715 17.016 106.675 17.016ZM122.062 5.376C123.086 5.376 123.974 5.576 124.726 5.976C125.494 6.36 126.086 6.952 126.502 7.752C126.934 8.536 127.15 9.512 127.15 10.68V18H125.95V10.776C125.95 9.368 125.59 8.296 124.87 7.56C124.166 6.824 123.174 6.456 121.894 6.456C120.918 6.456 120.07 6.656 119.35 7.056C118.63 7.456 118.078 8.016 117.694 8.736C117.326 9.456 117.142 10.32 117.142 11.328V18H115.942V5.472H117.094V8.952L116.926 8.568C117.31 7.576 117.942 6.8 118.822 6.24C119.702 5.664 120.782 5.376 122.062 5.376ZM139.267 18V15.144L139.219 14.712V10.008C139.219 8.84 138.899 7.952 138.259 7.344C137.635 6.736 136.715 6.432 135.499 6.432C134.635 6.432 133.827 6.584 133.075 6.888C132.339 7.176 131.707 7.552 131.179 8.016L130.579 7.152C131.203 6.592 131.955 6.16 132.835 5.856C133.715 5.536 134.635 5.376 135.595 5.376C137.147 5.376 138.339 5.768 139.171 6.552C140.003 7.336 140.419 8.504 140.419 10.056V18H139.267ZM134.755 18.096C133.827 18.096 133.019 17.952 132.331 17.664C131.659 17.36 131.139 16.936 130.771 16.392C130.419 15.848 130.243 15.224 130.243 14.52C130.243 13.88 130.387 13.304 130.675 12.792C130.979 12.264 131.475 11.84 132.163 11.52C132.851 11.184 133.771 11.016 134.923 11.016H139.531V11.952H134.947C133.651 11.952 132.739 12.192 132.211 12.672C131.699 13.152 131.443 13.752 131.443 14.472C131.443 15.272 131.747 15.912 132.355 16.392C132.963 16.872 133.819 17.112 134.923 17.112C135.979 17.112 136.867 16.872 137.587 16.392C138.323 15.912 138.867 15.216 139.219 14.304L139.555 15.12C139.219 16.032 138.643 16.76 137.827 17.304C137.027 17.832 136.003 18.096 134.755 18.096ZM144.643 18V5.472H145.795V8.904L145.675 8.52C146.027 7.512 146.619 6.736 147.451 6.192C148.283 5.648 149.323 5.376 150.571 5.376V6.552C150.523 6.552 150.475 6.552 150.427 6.552C150.379 6.536 150.331 6.528 150.283 6.528C148.891 6.528 147.803 6.968 147.019 7.848C146.235 8.712 145.843 9.92 145.843 11.472V18H144.643ZM153.432 22.752C152.856 22.752 152.312 22.656 151.8 22.464C151.304 22.272 150.88 21.992 150.528 21.624L151.128 20.712C151.448 21.048 151.792 21.296 152.16 21.456C152.544 21.616 152.976 21.696 153.456 21.696C154.032 21.696 154.536 21.536 154.968 21.216C155.416 20.896 155.832 20.312 156.216 19.464L157.08 17.544L157.248 17.328L162.552 5.472H163.776L157.344 19.704C157.008 20.472 156.64 21.072 156.24 21.504C155.856 21.952 155.432 22.272 154.968 22.464C154.504 22.656 153.992 22.752 153.432 22.752ZM157.056 18.312L151.248 5.472H152.52L157.8 17.256L157.056 18.312ZM164.435 18.052C164.288 18.052 164.158 18 164.045 17.896C163.941 17.7833 163.889 17.649 163.889 17.493C163.889 17.337 163.941 17.207 164.045 17.103C164.158 16.999 164.288 16.947 164.435 16.947C164.583 16.947 164.708 16.999 164.812 17.103C164.925 17.207 164.981 17.337 164.981 17.493C164.981 17.649 164.925 17.7833 164.812 17.896C164.708 18 164.583 18.052 164.435 18.052ZM169.201 18.052C168.543 18.052 167.953 17.9047 167.433 17.61C166.922 17.3153 166.515 16.908 166.211 16.388C165.917 15.868 165.769 15.2743 165.769 14.607C165.769 13.931 165.917 13.333 166.211 12.813C166.515 12.293 166.922 11.89 167.433 11.604C167.953 11.3093 168.543 11.162 169.201 11.162C169.747 11.162 170.241 11.266 170.683 11.474C171.134 11.682 171.498 11.994 171.775 12.41L171.294 12.761C171.052 12.4143 170.748 12.1587 170.384 11.994C170.02 11.8293 169.626 11.747 169.201 11.747C168.673 11.747 168.196 11.8683 167.771 12.111C167.355 12.345 167.026 12.6787 166.783 13.112C166.549 13.5367 166.432 14.035 166.432 14.607C166.432 15.179 166.549 15.6817 166.783 16.115C167.026 16.5397 167.355 16.8733 167.771 17.116C168.196 17.35 168.673 17.467 169.201 17.467C169.626 17.467 170.02 17.3847 170.384 17.22C170.748 17.0553 171.052 16.7997 171.294 16.453L171.775 16.804C171.498 17.22 171.134 17.532 170.683 17.74C170.241 17.948 169.747 18.052 169.201 18.052ZM175.869 18.052C175.219 18.052 174.638 17.9047 174.127 17.61C173.624 17.3153 173.221 16.908 172.918 16.388C172.623 15.868 172.476 15.2743 172.476 14.607C172.476 13.931 172.623 13.3373 172.918 12.826C173.221 12.306 173.624 11.8987 174.127 11.604C174.638 11.3093 175.219 11.162 175.869 11.162C176.519 11.162 177.1 11.3093 177.611 11.604C178.122 11.8987 178.525 12.306 178.82 12.826C179.115 13.3373 179.262 13.931 179.262 14.607C179.262 15.2743 179.115 15.868 178.82 16.388C178.525 16.908 178.122 17.3153 177.611 17.61C177.1 17.9047 176.519 18.052 175.869 18.052ZM175.869 17.467C176.389 17.467 176.857 17.35 177.273 17.116C177.689 16.8733 178.014 16.5353 178.248 16.102C178.482 15.6687 178.599 15.1703 178.599 14.607C178.599 14.035 178.482 13.5367 178.248 13.112C178.014 12.6787 177.689 12.345 177.273 12.111C176.857 11.8683 176.389 11.747 175.869 11.747C175.349 11.747 174.881 11.8683 174.465 12.111C174.058 12.345 173.733 12.6787 173.49 13.112C173.256 13.5367 173.139 14.035 173.139 14.607C173.139 15.1703 173.256 15.6687 173.49 16.102C173.733 16.5353 174.058 16.8733 174.465 17.116C174.881 17.35 175.349 17.467 175.869 17.467ZM189.338 11.162C189.884 11.162 190.357 11.2703 190.755 11.487C191.163 11.695 191.479 12.0157 191.704 12.449C191.93 12.8737 192.042 13.4023 192.042 14.035V18H191.392V14.087C191.392 13.3243 191.206 12.7437 190.833 12.345C190.461 11.9463 189.941 11.747 189.273 11.747C188.762 11.747 188.32 11.8553 187.947 12.072C187.575 12.2887 187.289 12.592 187.089 12.982C186.89 13.372 186.79 13.84 186.79 14.386V18H186.14V14.087C186.14 13.3243 185.954 12.7437 185.581 12.345C185.209 11.9463 184.689 11.747 184.021 11.747C183.51 11.747 183.068 11.8553 182.695 12.072C182.323 12.2887 182.037 12.592 181.837 12.982C181.638 13.372 181.538 13.84 181.538 14.386V18H180.888V11.214H181.512V13.086L181.421 12.878C181.621 12.3493 181.954 11.9333 182.422 11.63C182.89 11.318 183.454 11.162 184.112 11.162C184.788 11.162 185.356 11.3353 185.815 11.682C186.283 12.02 186.578 12.527 186.699 13.203L186.478 13.112C186.66 12.5313 187.003 12.0633 187.505 11.708C188.008 11.344 188.619 11.162 189.338 11.162Z" fill={useColorModeValue('black', 'white')}/>
        </svg>
    );
  };
  
  export default function LargeWithLogoLeft() {
    return (
      <Box
        mt={8}
        bg={useColorModeValue("#FFFEFC", "rgb(32, 32, 32)")}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
                © 2023 Templationary.com | <strong>We are not affiliated with Notion Labs, Inc. or any mentioned companies.</strong>
              </Text>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Categories</Text>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/templates/'}>Notion Templates</Link>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/widgets/'}>Notion Widgets</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Helpful Links</Text>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/how-to-add-notion-templates'}>Adding Notion Templates</Link>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/how-to-add-notion-widgets'}>Adding Notion Widgets</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Support</Text>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/contact'}>Contact</Link>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/about'}>About</Link>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/tos'}>Terms of Service</Link>
              <Link _hover={{ textDecoration:'none', opacity:0.8 }} href={'/privacy'}>Privacy Policy</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontWeight={'500'} fontSize={'lg'} mb={2}>Disclaimers</Text>
              <Text fontSize={'sm'}>
                This website is in no way affiliated with <b>Notion Labs, Inc.</b>
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }