import React from "react"
import tw from "tailwind-styled-components"
export * from "./seo"

const Container = tw.div``

const Layout = ({ children }) => {
	return (
		<Container>
			<main>{children}</main>
		</Container>
	)
}

export default Layout
