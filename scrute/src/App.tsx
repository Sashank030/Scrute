import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import SignupForm from "./components/signup-form";
import HomePage from "./pages/home/page";
import ScruteLoginBanner from "./assets/SignIn Banner (1).svg";
import ScruteSignUpBanner from "./assets/SignUp Banner.svg";
import { useState } from "react";

function Banner({ isLogin }: { isLogin: boolean }) {
  const bannerSrc = isLogin ? ScruteLoginBanner : ScruteSignUpBanner;
  const altText = isLogin ? "Login Banner" : "Signup Banner";
  return (
    <div className="relative hidden bg-muted lg:block bg-primary">
      <img src={bannerSrc} alt={altText} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          isAuthenticated ? (
            <HomePage />
          ) : (
            <div className="min-h-screen lg:grid lg:grid-cols-2">
              <Banner isLogin={true} />
              <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                  <div className="w-full max-w-xs">
                    <LoginForm onLogin={handleAuthentication} />
                  </div>
                </div>
              </div>
            </div>
          )
        } />
        <Route path="/signup" element={
          <div className="min-h-screen lg:grid lg:grid-cols-2">
            <Banner isLogin={false} />
            <div className="flex flex-col gap-4 p-6 md:p-10">
              <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                  <SignupForm onSignup={handleAuthentication} />
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;