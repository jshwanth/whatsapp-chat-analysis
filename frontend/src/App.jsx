import React, { useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from react-icons

import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const response = await axios.post("https://whatsapp-chat-analysis-aeof.onrender.com/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to analyze. Check server console.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>
        <FaWhatsapp style={{ color: "#25D366", marginRight: "0.6rem", verticalAlign: "middle" }} />
        WhatsApp Chat Analyzer
      </h1>

      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {data && (
        <div className="results">
          <div className="card">
            <h2>🕒 Timeline of Messages</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.timeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Messages" stroke="#25D366" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h2>📈 Emoji Stats</h2>
            <ul>
              {data.emoji_stats.map((e, idx) => (
                <li key={idx}>
                  {e.Emoji} - {e.Count}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>🗣️ Common Words</h2>
            <ul>
              {data.common_words.map((w, idx) => (
                <li key={idx}>
                  {w.Word} - {w.Count}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>🌥 Wordcloud</h2>
            <img
              src={`data:image/png;base64,${data.wordcloud}`}
              alt="Wordcloud"
              className="wordcloud-img"
            />
          </div>

          <div className="card">
            <h2>💬 Sentiment Distribution</h2>
            <ul>
              <li>Positive: {data.sentiments.positive}</li>
              <li>Neutral: {data.sentiments.neutral}</li>
              <li>Negative: {data.sentiments.negative}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
