import { Outlet } from 'react-router'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Toaster } from "react-hot-toast";
import { LiveChatWidget } from "../features/live-chat";

export default function ApplayOut() {
  return (
    <div>
        <Navbar />
      <main>
          <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#0B1F3A",
      color: "#fff",
      borderRadius: "10px",
      padding: "12px 16px",
    },
  }}
/>
        <Outlet />
      </main>
      <Footer/>
      <LiveChatWidget />
    </div>
  )
}
