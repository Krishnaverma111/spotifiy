import React from 'react'
import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Content from './components/Content'
// import Footer from './components/Footer'
// import Premium from './components/Premium'
import Support from './components/Support'
import Download from './components/Download'
import Sign from './components/Sign'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbar />
        {/* <Home />
        <Footer /> */}
      </div>
  },
  {
    path: "/support",
    element:
      <div>

        <Support />
        <Footer />
      </div>
  },
  {
    path: "/premium",
    element:
      <div>

        <Support />
        <Footer />
      </div>
  },
  {
    path: "/download",
    element:
      <div>
        <Download />
        <Footer />
      </div>
  },
  {
    path: "/signup",
    element:
      <div>
        <Sign />
        <Footer />
      </div>
  }
])

export default function App(props) {
  return (

    <div className='bg-black'>
      <RouterProvider router={router} />




    </div>
  )
}
