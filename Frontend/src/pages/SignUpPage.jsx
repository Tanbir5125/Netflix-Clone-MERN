import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

export const SignUpPage = () => {

  const { searchParams } = new URL(document.location);
  const emailFromURL = searchParams.get('email');

  const [email, setEmail] = useState(emailFromURL || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  const { signup, isSigningUp } =useAuthStore()

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({email, username, password});
  };
  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-40 h-12" />
        </Link>
      </header>

      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md bg-black/60 p-8 space-y-6 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign Up
          </h1>

          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="flex flex-col justify-center items-center gap-4">
              
                <input
                  type="email"
                  className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                  placeholder="Email address"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            
              
                <input
                  type="text"
                  className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                  placeholder="Username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              
              
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                  placeholder="••••••"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            
              <button className="w-[80%] self-center py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700" disabled={isSigningUp} >
                {isSigningUp ? "Loading..." : "Sign Up"  }
              </button>
            </div>
          </form>

          <div>
            <p className="text-gray-400 text-center my-5">
              Already have an account?{" "}
              <Link to={"/login"} className="text-red-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
