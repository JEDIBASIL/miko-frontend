import { Button, SimpleGrid, Switch, Tabs, TextInput } from '@mantine/core'
import userProfileImg from "../../images/user.png"

const Settings = () => {
  return (
    <div>
      <h1 className="pageHeading">Settings</h1>
      <div className='settingsContainer'>
        <Tabs variant='outline' defaultValue={"profile"} color={"major.0"}>
          <Tabs.List>
            <Tabs.Tab value='profile'><>Profile</></Tabs.Tab>
            <Tabs.Tab value='bank'><>Bank</></Tabs.Tab>
            <Tabs.Tab value='verification'><>Verification</></Tabs.Tab>
            <Tabs.Tab value='security'><>Security</></Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="profile" pt="xs">
            <div className='tabContent'>
              <div className='profileImg'>
                <img src={userProfileImg} alt="" />
                <div className='text'>
                  <h4>Change Image</h4>
                  <p>Maximum file size for Profile Avatar is 20MB</p>
                  <Button radius={50} color={"major.0"}>Upload</Button>
                </div>
              </div>

              <div className='userInfo'>
                <h4>User</h4>
                <SimpleGrid spacing={"xl"} cols={3} mt={10}>
                  <TextInput
                    label={"First name"}
                    placeholder='Enter first name'
                  />
                  <TextInput
                    label={"Last name"}
                    placeholder='Enter last name'
                  />
                  <TextInput
                    label={"Phone number"}
                    placeholder='Enter phoneNumber'
                  />

                  <TextInput
                    label={"Email Address"}
                    placeholder='First name'
                  />
                </SimpleGrid>
              </div>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="security" pt="xs">
              <div className='securityContent'>
                <h3>Logged in</h3>
                <p>Get an email notification when your account is logged in</p>
                <Switch  color={"major.0"} />
            </div>

            <div className='securityContent'>
                <h3>Reset password</h3>
                <p>To sign in, your password is required</p>
                <Button radius={50} color={"major.0"}>Reset password</Button>
            </div>

            <div className='securityContent'>
                <h3>Delete account</h3>
                <p>We wish you the best and wouldn't want to see you go</p>
                <Button radius={50} color={"red"}>Terminate account</Button>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  )
}

export default Settings