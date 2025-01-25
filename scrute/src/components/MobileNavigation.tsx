import type React from "react"
import { Bell, Home, Plus, Search, User } from "lucide-react"
import { Button } from "../components/ui/button"

interface MobileNavigationProps {
  onCreateScrute: () => void
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ onCreateScrute }) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#252525] border-t border-zinc-800 flex justify-around items-center h-16 z-50">
      <Button variant="ghost" size="icon" className="text-white">
        <Home className="w-6 h-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <Search className="w-6 h-6" />
      </Button>
      <Button size="icon" className="bg-[#4846dc] hover:bg-indigo-700 rounded-full -mt-8" onClick={onCreateScrute}>
        <Plus className="w-6 h-6 text-white" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <Bell className="w-6 h-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <User className="w-6 h-6" />
      </Button>
    </nav>
  )
}

