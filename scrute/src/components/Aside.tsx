import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Plus } from "lucide-react";
import SidebarBanner from "../assets/SidebarBanner.png";

interface AsideProps {
  topics: string[];
  trending: Array<{
    title: string;
    mention: string;
    author: string;
  }>;
}

export function Aside({ topics, trending }: AsideProps) {
  return (
    <aside
      style={{
        backgroundImage: `url(${SidebarBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:w-82 hidden lg:block h-screen sticky top-0 overflow-y-auto p-6 bg-background scrollbar-custom"
    >
      {/* Subscribe Section */}
      <div className="flex flex-col items-start h-auto lg:mt-4">
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-white">
              Subscribe to ScruteMax
            </h2>
            <p className="text-zinc-200 mb-6">
              Unlock the premium features now!
            </p>
          </div>
          <Button className="rounded-none bg-white text-[#4846dc] font-bold hover:bg-zinc-200">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Topics */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Topics you follow</h2>
        <div className="grid grid-cols-3 gap-3">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="font-bold p-2 bg-[#252525] bg-opacity-40 rounded-none text-center"
            >
              {topic}
            </div>
          ))}
          <Button
            variant="outline"
            className="font-bold bg-transparent rounded-none border-primary text-[#fafafa]"
          >
            <Plus className="w-5 h-5" />
            Add More
          </Button>
        </div>
      </div>

      {/* Trending */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Trending Scrutes</h2>
        {trending.map((item, index) => (
          <Card key={index} className="rounded-none mb-4 bg-[#fafafa]">
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-[#4846dc]">
                    {item.title} @{item.mention}
                  </h3>
                  <p className="text-sm text-[#252525] font-semibold">
                    {item.author}
                  </p>
                </div>
                <Button className="bg-[#4846dc] rounded-none ml-4 text-primary-foreground hover:bg-primary/90">
                  View Scrute
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </aside>
  );
}
