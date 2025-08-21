# Research Paper Summarizer

## Overview
A full-stack web application that allows users to **browse topics**, **view research papers**, and **generate AI-powered summaries** using state-of-the-art NLP models (LED, T5, BART).

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
