import { Outlet } from 'react-router'
import { Navbar } from './Navbar'
import Footer from './Footer'

export default function ApplayOut() {
  return (
    <div>
        <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}
