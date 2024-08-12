// Header component
import Header from "@/components/home/Header"


export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}