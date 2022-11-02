import { Button, Center, Select, SimpleGrid, TextInput } from '@mantine/core'
import React from 'react'
import { CgArrowsExchangeAltV } from "react-icons/cg"

const Swap = () => {
    const data = []
    return (
        <div>
            <h1 className="pageHeading">Swap</h1>
            <div className='swapContainer'>
                <SimpleGrid cols={2}>
                    <Select
                        label={"You send"}
                        placeholder="Select coin"
                        searchable
                        nothingFound="No options"
                        maxDropdownHeight={280}
                        data={data}
                        size={"lg"}
                        variant={"filled"}
                        radius={8}
                        mb={20}
                    />
                    <TextInput
                        label={" "}
                        size={"lg"}
                        variant={"filled"}
                        placeholder="Ammount"
                        radius={8}
                        mb={20}
                    />
                </SimpleGrid>
                <Center mb={20}>
                    <Button variant={"filled"} color={"gray"}><CgArrowsExchangeAltV style={{ fontSize: "22px" }} /></Button>
                </Center>
                <SimpleGrid cols={2}>
                    <Select
                        label={"You get"}
                        placeholder="Select coin"
                        searchable
                        nothingFound="No options"
                        maxDropdownHeight={280}
                        data={data}
                        size={"lg"}
                        variant={"filled"}
                        radius={8}
                        mb={20}
                    />
                    <TextInput
                        label={" "}
                        size={"lg"}
                        variant={"filled"}
                        placeholder="Ammount"
                        radius={8}
                        mb={20}
                    />
                </SimpleGrid>
                <Button mt={30} fullWidth radius={8} size={"lg"} color={"major.0"}>Swap</Button>
            </div>
        </div>
    )
}

export default Swap