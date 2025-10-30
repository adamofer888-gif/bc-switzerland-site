import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "DTE HOLDING AG",
  description: "Official website of DTE HOLDING AG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
