import { HStack, Heading, Box, IconButton, useColorMode, Spacer, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box boxShadow='sm'>
                <HStack>
                    <Heading size='md' p='4' pl='8'>
                        Where in the world?
                    </Heading>
                    <Spacer />
                    <Button onClick={toggleColorMode} variant='ghost'>
                        <IconButton
                            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                            isRound='true'
                            size='sm'
                             />
                        {colorMode === 'light' ? <Text pl='4' pr='8'>Dark Mode</Text> : <Text pl='4' pr='8'>Light Mode</Text>}
                    </Button>
                </HStack>
            </Box>
        </>
    )
}

export default Header
