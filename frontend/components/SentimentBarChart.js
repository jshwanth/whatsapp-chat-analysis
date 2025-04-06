import React from 'react';

function SentimentBarChart({ data }) {
  const total = data.positive + data.neutral + data.negative;

  const percent = (value) => ((value / total) * 100).toFixed(1);

  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Sentiment Analysis</h2>
      <div className="flex gap-4">
        <div className="flex-1 bg-green-200 p-2 rounded">Positive: {data.positive} ({percent(data.positive)}%)</div>
        <div className="flex-1 bg-gray-300 p-2 rounded">Neutral: {data.neutral} ({percent(data.neutral)}%)</div>
        <div className="flex-1 bg-red-200 p-2 rounded">Negative: {data.negative} ({percent(data.negative)}%)</div>
      </div>
    </div>
  );
}

export default SentimentBarChart;
