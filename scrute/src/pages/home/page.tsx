"use client"
import { Sidebar } from "../../components/Sidebar"
import { Main } from "../../components/Main"
import { Aside } from "../../components/Aside"

export default function Page() {
  const posts = [
    {
      name: "Sarah Rafferty",
      title: "UI/UX Designer @Apple | 5+ UX Certifications",
      avatar: "/placeholder.svg",
      topic: "User Flow Issue",
      mention: "Reddit",
      content:
        "We all have been using @Reddit for many decades, though we love the app and its intuitiveness, there are certain aspects where it lacks the accessibility and common-sense.",
      images: ["/placeholder.svg?height=300&width=500"],
    },
    {
      name: "Mike Ross",
      title: "Frontend Developer @Uber",
      avatar: "/placeholder.svg",
      topic: "Technical Discussion",
      mention: "React",
      content: "Let's discuss the latest React features and their implications for modern web development.",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
    },
  ]

  const topics = ["Technology", "UX/UI", "Web", "AI / ML", "Data Science", "Salesforce", "Python", "Java"]

  const trending = [
    {
      title: "Legal Suggestion",
      mention: "Harvey vs State",
      author: "Jake Bloom",
    },
    {
      title: "Chat Fix",
      mention: "OpenAI",
      author: "Tom Johnson",
    },
    {
      title: "Feed Issue",
      mention: "Pinterest",
      author: "Stacy Bloom",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 lg:pb-0 scrollbar-custom">
      <div className="flex flex-col lg:flex-row">
        <Sidebar className="w-64 hidden lg:block" />
        <Main posts={posts} trending={trending} />
        <Aside topics={topics} trending={trending} />
      </div>
    </div>
  )
}

