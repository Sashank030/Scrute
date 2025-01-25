import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowBigUp,
  ArrowBigDown,
  Share2,
  Repeat2,
  Bookmark,
} from "lucide-react";
interface ScreteDetailViewProps {
  scrute: {
    name: string;
    title: string;
    avatar: string;
    topic: string;
    mention: string;
    content: string;
    images?: string[];
  };
  onClose: () => void;
}

export function ScreteDetailView({ scrute, onClose }: ScreteDetailViewProps) {
  return (
    <div className="flex flex-col h-full bg-background text-foreground">
      <div className="flex-grow overflow-y-auto p-6">
        <Button
          variant="ghost"
          onClick={onClose}
          className="mb-4 hover:text-primary"
        >
          ← Back
        </Button>
        <Card className="bg-card mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={scrute.avatar || "/placeholder.svg"}
                alt={scrute.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">{scrute.name}</h3>
                <p className="text-sm text-muted-foreground">{scrute.title}</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {scrute.topic}{" "}
              <span className="text-primary">@{scrute.mention}</span>
            </h2>
            <p className="text-muted-foreground mb-4">{scrute.content}</p>
            {scrute.images &&
              scrute.images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4"
                />
              ))}                  
          </div>
        </Card>
        {/* Additional content, comments, etc. can be added here */}
      </div>
      <div className="border-t border-border p-4 bg-background">
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="hover:text-primary">
            <ArrowBigUp className="w-6 h-6" />
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            <ArrowBigDown className="w-6 h-6" />
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            <Share2 className="w-6 h-6" />
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            <Repeat2 className="w-6 h-6" />
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            <Bookmark className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}