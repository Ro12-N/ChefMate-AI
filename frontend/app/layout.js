import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";


const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "ChefMate AI Recipe Generator",
  description: "Generate delicious recipes with chefMate AI",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider appearance={{ baseTheme: neobrutalism }}>   
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        <footer className="py-8 px-4 border-t">
          <div className="max-w-6xl mx-auto flex justify-center items-center p-4 text-center ">
            <p className="text-stone-500 text-sm">Made with ❤️ by RohanNaidu  </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
