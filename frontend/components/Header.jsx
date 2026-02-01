import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
const Header = () => {
    return ( 
         <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
           logo
           <div>nav links</div>
           <div className="flex items-center space-x-4">
             < SignedIn mode="modal">
              <UserButton />
            </SignedIn>
            <SignedOut mode="modal">
              <button variant="ghost" className="text-stone-700 hover:text-stone-900">Sign In</button>
              <SignUpButton>
               <button className="px-8 py-3 bg-white text-orange-500 font-semibold 
               rounded-full border-2 border-orange-500
               hover:bg-orange-500 hover:text-white
               transition duration-200">
               Get Started
              </button>
              </SignUpButton>
            </SignedOut>
            </div>
            </nav>
          </header>
    );
};
export default Header;