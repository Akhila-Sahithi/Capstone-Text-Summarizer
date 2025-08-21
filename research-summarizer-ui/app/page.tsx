// app/page.tsx
"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { motion } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState("AI");
  const [selectedArticle, setSelectedArticle] = useState("");
  const [summary, setSummary] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const topics = ["AI", "Healthcare", "Physics", "Robotics", "Climate"];
  const articles = [
    {
      title: "Understanding Transformers",
      author: "Smith et al.",
      preview: "Transformers are used for...",
    },
    {
      title: "Advancements in Healthcare AI",
      author: "Jones et al.",
      preview: "AI is improving patient...",
    },
  ];
  const recommendations = [
    { title: "Paper A", keywords: ["AI", "BERT"] },
    { title: "Paper B", keywords: ["Transformer", "Summary"] },
  ];

  return (
    <div
      className={`${darkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white" : "bg-gradient-to-br from-white via-slate-100 to-white text-black"} min-h-screen transition-all duration-300`}
    >
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b shadow-md">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="text-purple-500" size={24} /> Research Summarizer
        </h1>
        <Toggle
          pressed={darkMode}
          onPressedChange={setDarkMode}
          className="flex items-center gap-2"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          <span>{darkMode ? "Dark" : "Light"} Mode</span>
        </Toggle>
      </div>

      <div className="flex">
        {/* Left Pane: Topics */}
        <div className="w-1/4 border-r p-4 space-y-3 animate-in fade-in duration-500">
          <h2 className="text-lg font-semibold mb-2">Topics</h2>
          {topics.map((topic) => (
            <motion.div whileHover={{ scale: 1.03 }} key={topic}>
              <Button
                variant={selectedTopic === topic ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Middle Pane: Articles */}
        <div className="w-2/4 p-6 space-y-4 animate-in fade-in duration-500">
          <h2 className="text-lg font-semibold mb-3">
            Articles in {selectedTopic}
          </h2>
          {articles.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                onClick={() => {
                  setSelectedArticle(article.title);
                  setSummary("Generating summary...");
                  setTimeout(
                    () =>
                      setSummary(
                        "This is a generated summary for " + article.title
                      ),
                    1000
                  );
                }}
                className="cursor-pointer hover:shadow-xl transition duration-300"
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    by {article.author}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {article.preview}
                  </p>
                  <Button className="mt-3">Read & Summarize</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Right Pane: Summary & Recommendations */}
        <div className="w-1/4 p-4 animate-in fade-in duration-500">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          {selectedArticle ? (
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-medium text-purple-600 dark:text-purple-300">
                {selectedArticle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {summary}
              </p>
              <h4 className="mt-4 font-semibold text-sm text-gray-500 dark:text-gray-400">
                Recommended
              </h4>
              <div className="flex gap-2 overflow-x-auto mt-2 pb-1">
                {recommendations.map((rec, i) => (
                  <motion.div
                    key={i}
                    className="min-w-[160px] bg-gray-100 dark:bg-gray-700 rounded-lg p-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="font-medium">{rec.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Keywords: {rec.keywords.join(", ")}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Select an article to view the summary
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
