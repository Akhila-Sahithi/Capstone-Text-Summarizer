"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { motion } from "framer-motion"
import {
  Brain,
  Stethoscope,
  Atom,
  Bot,
  Sun,
} from "lucide-react"

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState("AI")
  const [selectedArticle, setSelectedArticle] = useState("")
  const [summary, setSummary] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [search, setSearch] = useState("")

  const topics = ["AI", "Healthcare", "Physics", "Robotics", "Climate","NLP","DL","DSA"]
  const topicIcons: Record<string, JSX.Element> = {
    AI: <Brain className="mr-2" />,
    Healthcare: <Stethoscope className="mr-2" />,
    Physics: <Atom className="mr-2" />,
    Robotics: <Bot className="mr-2" />,
    Climate: <Sun className="mr-2" />,
    NLP: <Brain className="mr-2" />,
    DL: <Brain className="mr-2" />,
    DSA: <Brain className="mr-2" />,
  }

  const articles = [
    { title: "Understanding Transformers", author: "Smith et al.", preview: "Transformers are used for..." },
    { title: "Advancements in Healthcare AI", author: "Jones et al.", preview: "AI is improving patient..." }
  ].filter((article) => article.title.toLowerCase().includes(search.toLowerCase()))

  const recommendations = [
    { title: "Paper A", keywords: ["AI", "BERT"] },
    { title: "Paper B", keywords: ["Transformer", "Summary"] }
  ]

  return (
    <div className={`${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"} min-h-screen flex transition-colors duration-300`}>
      
      {/* LEFT: Topics */}
      <div className="w-1/4 border-r p-4 space-y-2">
        <h2 className="text-xl font-semibold mb-4">📚 Topics</h2>
        {topics.map((topic) => (
          <Button
            key={topic}
            variant={selectedTopic === topic ? "default" : "outline"}
            className="w-full flex items-center"
            onClick={() => setSelectedTopic(topic)}
          >
            {topicIcons[topic]} {topic}
          </Button>
        ))}
        <div className="mt-6">
          <Toggle pressed={darkMode} onPressedChange={setDarkMode}>
            🌙 Dark Mode
          </Toggle>
        </div>
      </div>

      {/* MIDDLE: Articles */}
      <div className="w-2/4 p-6 border-r space-y-4">
        <h2 className="text-xl font-semibold mb-4">📝 Articles in {selectedTopic}</h2>
        <Input
          placeholder="Search article..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />

        {articles.map((article, index) => (
          <Card
            key={index}
            onClick={() => {
              setSelectedArticle(article.title)
              setSummary("Generating summary...")
              setTimeout(() => setSummary("This is a generated summary for " + article.title), 1000)
            }}
            className="cursor-pointer hover:shadow-xl transition-all relative"
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-muted-foreground">by {article.author}</p>
              <p className="mt-2 text-sm">{article.preview}</p>
              <Button className="mt-3">Read & Summarize</Button>
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* RIGHT: Summary */}
      <div className="w-1/4 p-6">
        <h2 className="text-xl font-semibold mb-4">📄 Summary</h2>
        {selectedArticle ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h3 className="font-medium">{selectedArticle}</h3>
            <p className="mt-2 text-sm">{summary}</p>
            <h4 className="mt-4 font-semibold">🔗 Recommended</h4>
            <div className="flex gap-2 overflow-x-auto mt-2">
              {recommendations.map((rec, i) => (
                <Card key={i} className="min-w-[160px] p-3 bg-zinc-100 dark:bg-zinc-800">
                  <p className="font-medium">{rec.title}</p>
                  <p className="text-xs text-muted-foreground">Keywords: {rec.keywords.join(", ")}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        ) : (
          <p className="text-sm text-muted-foreground">Select an article to view the summary</p>
        )}
      </div>
    </div>
  )
}
