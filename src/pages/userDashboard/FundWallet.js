import { Select, TextInput, Button } from '@mantine/core'

const FundWallet = () => {
    const data = []
  return (
    <div>
        <h1 className="pageHeading">Fund Wallet</h1>
        <div className='fundWalletContainer'>
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
              <Button fullWidth radius={8} size={"lg"} color={"major.0"}>Sell</Button>
  
          </div>
        </div>
    </div>
  )
}

export default FundWallet