import { Stepper, Button, Group } from '@mantine/core';
import iPhone from "../../images/iPhone.png"
import { useState } from 'react';
import rocketImg from "../../images/btcRocket.png"
import { MantineProvider } from '@mantine/core';
import loginMockup from "../../images/loginMockup.png"


const GettingStartedSteps = () => {

  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
      <section  className="GettingStartedSteps">
          <h1>Buy, Sell, Receive & Trade Crypto with Mcgamma in 3 easy steps</h1>
          <div className='img'>
              <img src={rocketImg} alt="" />
          </div>
          <div className='GettingStartedStepsContainer'>
          <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS> 

        <Stepper  color="indigo" active={active} onStepClick={setActive} breakpoint="sm" orientation="vertical">
          <Stepper.Step className='stepsContainer' label="" description={
          <div className='steps'>
              <img src={loginMockup} alt="" />
              <div className='text'>
                  <h2>Create an account</h2>
                  <p>Sign up for a free account on our website or mobile Android or iOS apps.</p>
              </div>
          </div>
      }>
          
          </Stepper.Step>
          <Stepper.Step className='stepsContainer' label="" description={
              <div className='steps'>
              <img src={iPhone} alt="" />
              <div className='text'>
                  <h2>Fund your account</h2>
                  <p>Link your bank account and choose your preferred payment method to add money.</p>
              </div>
          </div>
          }>
          </Stepper.Step>
          <Stepper.Step className='stepsContainer' label="" description={
              <div className='steps'>
              <img src={iPhone} alt="" />
              <div className='text'>
                  <h2>Start trading Crypto</h2>
                  <p>Choose from over 30+ cryptocurrencies to diversify your portfolio quickly and easily.</p>
              </div>
          </div>
          }>
          </Stepper.Step>
          <Stepper.Completed>
          </Stepper.Completed>
        </Stepper>
        </MantineProvider> 
        {/* <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group> */}
        <div>

        </div>
      </div>
      </section>
  )
}

export default GettingStartedSteps