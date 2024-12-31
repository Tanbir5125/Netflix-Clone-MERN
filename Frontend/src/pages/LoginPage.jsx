import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoggingIn } = useAuthStore();

  const handleSignIn = (e) => {
    e.preventDefault();
    login({email, password});
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
            Sign In
          </h1>

          <form className="space-y-4" onSubmit={handleSignIn}>
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
                  type="password"
                  className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                  placeholder="••••••"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            

              <button className="w-[80%] self-center py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700" disabled={isLoggingIn} >
                {isLoggingIn ? "Loading..." : "Sign In"  }
              </button>
            </div>
          </form>
          <div>
            <p className="text-gray-400 text-center my-5">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-red-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
