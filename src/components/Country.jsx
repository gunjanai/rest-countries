import { Button, Text, Link, Box, HStack, Image, Heading, Flex } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useParams } from 'react-router'
import './Country.css'


function Country() {
    const [country, setcountry] = useState([])
    const {name} = useParams()

    useEffect(() => {
         const fetchCountry = async () => {
             const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}/`)
             const data = await res.json()
             setcountry(data)
             console.log(data)
         }

         fetchCountry()
    }, [])

    return (
        <>
            <Link href='/'>
                <Button ml='8' boxShadow='lg' mt='8'>
                    <FaArrowLeft />
                    <Text pl='8px'>back</Text>
                </Button>
            </Link>
            {country.map((c) => {
                const {flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = c
                console.log(flag)
                return(
                    <Flex className='country-content'>
                        <Box p='8' maxW='500px'>
                            <Image src={flag} alt={name} />
                        </Box>
                        <Box mt='30px'>
                            <Heading>
                                {name}
                            </Heading>
                            <HStack>
                                <Box pt='8'>
                                    <Text fontWeight='semibold' pb='2'>
                                        Native Name: <span fontWeight='normal'>{nativeName}</span>
                                    </Text>
                                    <Text fontWeight='semibold' pb='2'>
                                        Population: <span fontWeight='normal'>{population}</span>
                                    </Text>
                                    <Text fontWeight='semibold' pb='2'>
                                        Region: <span fontWeight='normal'>{region}</span>
                                    </Text>
                                    <Text fontWeight='semibold' pb='2'>
                                        Sub Region: <span fontWeight='normal'>{subregion}</span>
                                    </Text>
                                    <Text fontWeight='semibold' pb='2'>
                                        Capital: <span fontWeight='normal'>{capital}</span>
                                    </Text>
                                </Box>
                                <Box pl='16'>
                                    <Text fontWeight='semibold' pb='2'>
                                        Top Level Domain: <span fontWeight='normal'>{topLevelDomain}</span>
                                    </Text>
                                    <Text fontWeight='semibold' pb='2'>
                                        Currencies: <span fontWeight='normal'>{currencies[0].name}</span>
                                    </Text>
                                    <Text fontWeight='semibold' pb='2'>
                                        Languages: <span fontWeight='normal'>{languages[0].name}</span>
                                    </Text>
                                </Box>
                            </HStack>
                            <Box pt='4'>
                                Border Countries: {
                                    borders.map((b) => {
                                        return (<Button m='2'>
                                            {b}
                                        </Button>)
                                    })
                                }
                            </Box>
                        </Box>
                    </Flex>
                )
            })}

        </>
    )
}

export default Country
