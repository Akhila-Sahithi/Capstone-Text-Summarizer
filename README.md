# 🧠 Research Paper Summarizer

A full-stack project that allows users to browse topics, view research papers, and generate summaries using an NLP model (e.g., LED, T5, or BART).

---

## 📁 Project Structure

project-root/
├── research-summarizer-ui/         # Frontend (React + Tailwind + shadcn)
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── tailwind.config.js
│   ├── ...
│   └── package.json
│
└── research-summarizer-backend/    # Backend (Flask dummy API + model placeholder)
    ├── app.py
    ├── summaries/
    ├── dataset/
    └── requirements.txt


---

## 🚀 Setup & Run Instructions

### 🔧 Backend (Flask API)

1. **Navigate to backend folder**:
    ```bash
    cd research-summarizer-backend
    ```

2. **(Optional) Create and activate virtual environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On macOS/Linux
    ```

3. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run Flask server**:
    ```bash
    python app.py
    ```

- Runs on: `http://localhost:5000`

---

### 🎨 Frontend (React + Tailwind)

1. **Navigate to frontend folder**:
    ```bash
    cd research-summarizer-ui
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run development server**:
    ```bash
    npm run dev
    ```

- Runs on: `http://localhost:3000`

---

## 🔗 Connecting Frontend to Backend

Your React UI makes requests to the Flask API hosted at `http://localhost:5000/api/summary`. Update fetch/axios requests as needed in your components.

If using `.env` in frontend:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000


💡 Features
✅ Browse topics and research papers.

✅ Click to view paper previews and generate summaries.

✅ View recommendations with keywords.

✅ Toggle between Light/Dark mode.

✅ Clean UI using Tailwind CSS + shadcn/ui.

🚧 LED/T5 model integration via Flask.

🚧 Dataset explorer (CSV or JSON preview).



✅ To Do
 Connect real summarization model (LED, T5, or BART).

 Explore full dataset (arXiv/S2ORC).

 Improve summary ranking algorithm.

 Add search, filters, and download options.

 Deploy frontend and backend.


 🧠 Technologies
Frontend: React, Tailwind CSS, shadcn/ui

Backend: Python, Flask, Transformers

Model: allenai/led-base-16384 (for long documents)


👩‍💻 Author
Akhila Sahithi
B.Tech CSE (Big Data Analytics)