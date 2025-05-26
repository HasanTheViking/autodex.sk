// pages/_app.js
import '../styles/globals.css'
import { CartProvider } from '../components/CartContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-gray-800 text-white">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
