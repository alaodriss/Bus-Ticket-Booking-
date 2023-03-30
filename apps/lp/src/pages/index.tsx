import React from "react"

import tw from "tailwind-styled-components"
import Layout from "../components/layout/index"
import { Seo } from "../components/layout"

const Title = tw.span`text-5xl text-green-500 uppercase font-bold`
const Caption = tw.span`text-3xl text-gray-900 uppercase`

const Description = tw.h1`text-2xl text-gray-500 mt-6`
const Separator = tw.div`w-10 h-1 bg-blue-500`
const MainImage = tw.img`rounded-3xl shadow-lg`
const Setcion = tw.div`max-w-screen-2xl mx-auto relative`
const Button = tw.button`bg-green-500 p-5 py-3 rounded-xl text-white font-bold uppercase mt-6`
const Gradient = tw.div`absolute inset-0 bg-gradient-radial-hero` 
const BookingFormDummyDiv = tw.div`bg-white h-24 w-2/3 rounded-3xl shadow-xl` 




const heroFeatures = [
  {
    title: "Book Easy",
    description: " Tickets with QR Code",
  },
  {
    title: "Discounts",
    description: " For those who create an account",
  },
  {
    title: "30+",
    description: "Cities around the US",
  },
]

const HeroFeaturesItem = ({ item }) => (
  <div>
    <h5 className="font-bold" >{item.title}</h5>
    <p>{item.description}</p>
  </div>
)

const HeroFeatures = () => (
  <div className="flex gap-4">
    {heroFeatures.map(item => (
      <HeroFeaturesItem item={item} />
    ))}
  </div>
)

const LogoTitle = () => (
  <div className="mt-6">
    <Caption>{"The private"}</Caption>
    <div className="mt-1">
      <Title className="text-blue-500">{"Bus"}</Title>
      <Title className="ml-3 text-green-500">{"Company"}</Title>
    </div>
    <Separator className="mt-4" />
  </div>
)
const TextSection = () => (
  <div className="mt-6">
    <div className="space-y-6 ">
      <LogoTitle />
      <Description>
        {
          "This is a private bus company that takes you from point  B within the Continental US."
        }
      </Description>
      <Button>{"Create Account"}</Button>
    </div>
    <div className="mt-32">
      <HeroFeatures />
    </div>
  </div>
)

const GradientBackground = () => (
  <div className="absolute left-0 right-0 top-0 h-[900px]">
    <Gradient />
  </div>
)

const BookingForm = () => (
	<div className="mt-16 flex justify-center">
	 <BookingFormDummyDiv />
	</div>
  )
  


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <GradientBackground />
    <Setcion>
		<BookingForm />
      <div className="mt-16 flex justify-between items-center gap-x-8">
        <TextSection />
        <div>
          <MainImage src="https://source.unsplash.com/T5jzpRTVF1U" alt="bus" />
        </div>
      </div>
    </Setcion>
  </Layout>
)

export default IndexPage
