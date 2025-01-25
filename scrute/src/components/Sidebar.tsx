import {Link} from "react-router-dom";
import { Bell, Home, Search, Sun, Moon, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";  // Ensure you've installed next-themes
import Logo from "../assets/Scrute Favicon Light (1).svg"
interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = "" }: SidebarProps) {
  const { theme, setTheme } = useTheme();

  // Define a function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col justify-between p-4 bg-background border-r border-gray-600 h-screen sticky top-0 ${className}`}
      >
        <div className="space-y-2">
          <Link to="/" className="flex items-center mb-4">
            <img
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              className="lg:mt-6 w-12 h-12"
            />
          </Link>
          <nav className="lg:ml-2 space-y-2">
            <Button variant="ghost" size="icon" className="w-full justify-start">
              <Home className="w-5 h-5 mr-2" />
              <span>Home</span>
            </Button>
            <Button variant="ghost" size="icon" className="w-full justify-start">
              <Bell className="w-5 h-5 mr-2" />
              <span>Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="w-full justify-start">
              <Search className="w-5 h-5 mr-2" />
              <span>Search</span>
            </Button>
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}  // Attach the toggleTheme function here
          className="w-full justify-start mt-auto"
        >
          {theme === "dark" ? (
            <>
              <Sun className="w-5 h-5 mr-2" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-5 h-5 mr-2" />
              <span>Dark Mode</span>
            </>
          )}
        </Button>
      </aside>
    </>
  );
}
