# 📊 WhatsApp Chat Analyzer

Analyze WhatsApp chats with AI to extract insights like emoji stats, message trends, common words, sentiment distribution, and even a word cloud — all visualized beautifully!

![screenshot](https://your-screenshot-url-if-any.com)

## 🚀 Features

- 📈 Message timeline chart
- 😂 Emoji usage statistics
- 🗣️ Most common words
- 🌥️ Wordcloud generation
- 💬 Sentiment analysis (Positive, Neutral, Negative)
- 📂 Simple drag & drop chat upload
- 🌙 Dark mode (optional enhancement)

---


---

## 💻 Tech Stack

- **Frontend**: React + Vite + Recharts + Axios
- **Backend**: FastAPI + Pandas + Regex + TextBlob + Wordcloud
- **Deployment**: 
  - Backend: [Render](https://render.com)
  - Frontend: [Vercel](https://vercel.com) or [Netlify](https://netlify.com)

---

## 📦 Installation

### 🔧 Backend Setup (FastAPI)

```bash
# Clone the repo
git clone https://github.com/yourusername/whatsapp-chat-analyzer.git
cd whatsapp-chat-analyzer

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn app:app --reload
```

