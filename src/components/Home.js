import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {


  return (
    <Container>
    <Section 
        title="Model 3"
        description= "Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtn="Custom order"
        rightBtn= "Existing Iventory"

    />
    <Section 
        title="Model Y"
        description= "Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtn="Custom order"
        rightBtn= "Existing Iventory"
    />
    <Section 
        title="Model S"
        description= "Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtn="Custom order"
        rightBtn= "Existing Iventory"
    />
    <Section 
        title="Model X"
        description= "Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtn="Custom order"
        rightBtn= "Existing Iventory"
    />

    <Section
    title= "Solar Panels"
    description="Lowest Cost Panels in America"
    backgroundImg="solar-panel.jpg"
    leftBtn="Order now"
    rightBtn="Learn More"
    />
        <Section
    title= "Solar Roof"
    description="Produce Clean Energy From Your Roof"
    backgroundImg="solar-roof.jpg"
    leftBtn="Order now"
    rightBtn="Learn More"
    />

<Section
    title= "Accessories"
    description=""
    backgroundImg="accessories.jpg"
    leftBtn="Shop Now"
    />
    
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
z-index: 10;
`