import { React, useState, useEffect } from 'react'
import { Box, Text, Image, Link, Select, Spacer, Input, HStack, Flex  } from "@chakra-ui/react"
import './CountryData.css'
import Filter from './Filter'
// import { Link } from 'react-router-dom'

function CountryData() {
    const [countries, setcountries] = useState([])
    const [searchTerm, setsearchTerm] = useState('')
    const [filter, setfilter] = useState('Filter by Region')
    const url = 'https://restcountries.com/v2/all/'

    const fetchCountries = async () => {
        try{
            const res = await fetch(url)
            const countries = await res.json()
            setcountries(countries)
            console.log(countries)
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        fetchCountries()
    }, [])
    return (
        // <Card countries={countries} />
        <>
        <Flex p='10px' pt='4' className='filter'>
            <Input 
                placeholder="Search for a country..." 
                className='search' 
                onChange={(e) => {
                    setsearchTerm(e.target.value)
                }}
            />
            {/* <CountryData searchTerm={searchTerm} /> */}
            <Spacer />
            <div className="dropdowndiv">
                <Select 
                    // placeholder="Filter by Region" 
                    className='dropdown' 
                    w='fit-content'
                    value={filter}
                    onChange={(e) => setfilter(e.target.value)}
                    
                >
                    <option value="Filter by Region">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </Select>
            </div>
        </Flex>
        <section class='grid'>
        {countries.filter((country) => {
            if(filter == 'Filter by Region'){
                return country
            }else{
                if(country.continent == filter){  
                    console.log(country.continent) 
                    return country
                }  
                
            }
            
            // console.log(filter)
            // if(searchTerm === ''){
            //     return country
            // }else{
            //     if(country.name.toLowerCase().includes(searchTerm.toLowerCase())){
            //         console.log(country)
            //         return country
            //     }
            // }

             
            
            
            }).filter((country) => {
                if(searchTerm === ''){
                    return country
                }else{
                    if(country.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        console.log(country)
                        return country
                    }
                }
        
            })
            .map((c) => {
                // console.log(country)
                const { numericCode, name, population, region, capital, flags } = c
                return(
                        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">   
                            <Image src={flags[0]} alt={name} w='100%' h='200px' objectFit='contain' />
                            <Box p="6">
                                <Box
                                    mt="1"
                                    fontWeight="bold"
                                    as="h4"
                                    lineHeight="tight"
                                    isTruncated
                                    pb='4'
                                    >
                                    {name}
                                </Box>
                                <Text fontWeight='semibold'>
                                    Population: <span fontWeight='normal'>{population}</span>
                                </Text>
                                <Text fontWeight='semibold'>
                                    Region: <span fontWeight='normal'>{region}</span>
                                </Text>
                                <Text fontWeight='semibold'>
                                    Capital: <span fontWeight='normal'>{capital}</span>
                                </Text>
                                <Link href={`/countries/${name}`} color='teal' >
                                    More details
                                </Link>
                            </Box>
                        </Box>
                        
                    )
                })}
        </section>
        </>
    )
}

export default CountryData

