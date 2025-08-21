# Research Paper Summarizer

## Overview
Research Summarizer is an AI-powered full-stack web application that enables users to summarize complete research papers based on a given topic. It fetches papers from arXiv, downloads the entire paper content, and uses advanced transformer models like BART and LED to generate concise, high-quality summaries.

Built with a React + Tailwind CSS frontend and a FastAPI backend, the app provides a seamless experience for anyone looking to digest complex research faster.

![Research Summarizer Demo](./demo-video.gif)


## Features
- **Topic-Based Search:** Enter any topic (e.g., “neural networks”) and fetch related papers from arXiv.
- **AI-Powered Models:** Uses state-of-the-art NLP models (BART and LED) to generate summaries that are both relevant and readable.
- **Relevance Ranking:** Displays papers in an order based on topic relevance.
- **Clean, Responsive UI:** Built using React and Tailwind CSS for a fast and elegant user experience.
- **Direct Links to Papers:** Users can access the original paper via arXiv.

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** FastAPI (Python)
- **NLP Models:** Hugging Face Transformers (LED, BART)  

## How to Use
- Open the app in your browser at http://localhost:3000.
- Enter a research topic you're interested in.
- Choose how many papers to fetch.
- Click Search.
- The app will fetch papers, extract their full content, summarize them, and display results with links to the original sources.

## Todo
- Add user authentication  
- Save and export summaries  
- Multi-language support  
- Evaluation metrics (ROUGE, BLEU) dashboard  

## 🙌 Acknowledgements
Inspired by modern research paper analysis tools & open-source NLP frameworks.  
