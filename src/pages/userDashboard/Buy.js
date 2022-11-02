import { Button, Select, TextInput } from '@mantine/core'

const Buy = () => {
    const data =[]
  return (
    <div>
       <h1 className="pageHeading">Buy</h1>
       <div className='transContainer'>
         <div className="card">
                <h4>Balance</h4>
                <h1>234252342</h1>
                <p className="currencyName">Naira</p>
          </div>
  
          <div>
              <Select
                  placeholder="Select coin"
                  searchable
                  nothingFound="No options"
                  maxDropdownHeight={280}
                  data={data}
                  size={"lg"}
                  radius={8}
                  mb={20}
                  variant={"filled"}
              />
              <TextInput 
                  size={"lg"}
                  placeholder="Ammount"
                  radius={8}
                  mb={20}
                  variant={"filled"}
              />
  
              <TextInput 
                  size={"lg"}
                  placeholder="Cost"
                  radius={8}
                  mb={20}
                  color={"major.0"}
                  variant={"filled"}
              />
              <Button fullWidth radius={8} size={"lg"} color={"major.0"}>Sell</Button>
  
          </div>
         </div>
    </div>
  )
}

export default Buy