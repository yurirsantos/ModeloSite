import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar'

export function NavAndFooter(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}
