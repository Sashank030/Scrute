import React, { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Plus, Upload } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { ScreteDetailView } from "./ScreteDetailView"

interface MainProps {
  posts: Array<{
    name: string
    title: string
    avatar: string
    topic: string
    mention: string
    content: string
    images?: string[]
  }>
  trending: Array<{
    title: string
    mention: string
    author: string
  }>
}

export function Main({ posts, trending }: MainProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [selectedScrute, setSelectedScrute] = useState<(typeof posts)[0] | null>(null)
  const [isDetailViewVisible, setIsDetailViewVisible] = useState(false)
  const [showTrending, setShowTrending] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsDialogOpen(false)
    setSelectedFiles([])
  }

  const handleViewMore = (post: (typeof posts)[0]) => {
    setSelectedScrute(post)
    // Delay setting visibility to true to allow for the animation
    setTimeout(() => setIsDetailViewVisible(true), 50)
  }

  React.useEffect(() => {
    if (selectedScrute) {
      document.body.classList.add("detail-view-open")
    } else {
      document.body.classList.remove("detail-view-open")
    }

    return () => {
      document.body.classList.remove("detail-view-open")
    }
  }, [selectedScrute])

  return (
    <main className="flex-1 max-w-3xl mx-auto px-4 py-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#4846dc] mb-6 lg:mt-4">Welcome, John Miller!</h1>

      {/* Create Post */}
      <Card className="mb-6 bg-[#FAFAFA] rounded-none lg:w-1/2">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div className="p-4 flex items-center space-x-2 cursor-pointer">
              <Input
                placeholder="Write your Scrute..."
                className="lg:text-lg bg-transparent rounded-full border-none focus-visible:ring-0"
                readOnly
              />
              <Button size="icon" className="rounded-full bg-[#FAFAFA] dark:bg-[#252525] text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]" aria-describedby="dialog-description">
            <DialogHeader>
              <DialogTitle>Create a Scrute</DialogTitle>
              <DialogDescription>
                Share your thoughts, reference a company or issue, and add attachments.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter the title of your Scrute" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Issue Reference</Label>
                <Input id="company" placeholder="e.g., @Reddit, @OpenAI" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" placeholder="Write your thoughts..." className="min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="attachments">Attachments</Label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Input id="attachments" type="file" multiple className="hidden" onChange={handleFileChange} />
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-dashed"
                      onClick={() => document.getElementById("attachments")?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Files
                    </Button>
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="text-sm text-muted-foreground">{selectedFiles.length} file(s) selected</div>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Post Scrute
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </Card>

      {/* Trending Scrutes Toggle (Mobile and Tablet) */}
      <div className="lg:hidden mb-6">
        <Button
          onClick={() => setShowTrending(!showTrending)}
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          {showTrending ? "Hide" : "View"} Trending Scrutes
        </Button>
      </div>

      {/* Trending Scrutes (Mobile and Tablet) */}
      {showTrending && (
        <div className="lg:hidden mb-6">
          <h2 className="text-2xl font-bold mb-4">Trending Scrutes</h2>
          {trending.map((item, index) => (
            <Card key={index} className="mb-4 bg-card">
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-primary">
                      {item.title} @{item.mention}
                    </h3>
                    <p className="text-sm">{item.author}</p>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Scrute</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Posts */}
      {posts.map((post, index) => (
        <Card key={index} className="mb-6 dark:bg-[#252525] rounded-none border border-gray-600">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={post.avatar || "/placeholder.svg"}
                  alt={post.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">{post.name}</h3>
                  <p className="text-md text-[#4846dc]">{post.title}</p>
                </div>
              </div>
              <Button variant="secondary" className="bg-[#4c4e51] rounded-none">Follow</Button>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                {post.topic} <span className="text-[#4846dc]">@{post.mention}</span>
              </h2>
              <p className="text-muted-foreground">{post.content}</p>
              <Button
                variant="secondary"
                className="bg-[#4648dc] rounded-none text-primary-foreground hover:bg-primary/90"
                onClick={() => handleViewMore(post)}
              >
                View More
              </Button>
            </div>
          </div>
        </Card>
      ))}

      {/* Scrute Detail View */}
      {selectedScrute && (
        <div
          className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity duration-300 ${
            isDetailViewVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background shadow-lg transition-transform duration-300 ease-in-out transform ${
              isDetailViewVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ScreteDetailView
              scrute={selectedScrute}
              onClose={() => {
                setIsDetailViewVisible(false)
                setTimeout(() => setSelectedScrute(null), 300)
              }}
            />
          </div>
        </div>
      )}
    </main>
  )
}

