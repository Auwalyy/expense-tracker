import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUp, SignUpButton, UserButton } from "@clerk/clerk-react" 

export const Auth = () => {
 return <div className="sign-in-container">
  <SignedOut>
   <SignUpButton />
   <SignInButton />
  </SignedOut>

  
 </div>
}