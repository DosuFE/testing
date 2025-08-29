import "./globals.css";
import Script from "next/script";
import NavBar from "./components/navBar";
import { CartProvider } from "./context/cartContext";
import Footer from "./components/footer";


export const metadata = {
  title: "Glow Skin Care - E-commerce Web App",
  description: "An e-commerce web app for skin care products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://js.paystack.co/v1/inline.js" strategy="afterInteractive" />
        <link rel="icon" href="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/18/1316373/1.jpg?8882" />
      </head>
      <body>
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
