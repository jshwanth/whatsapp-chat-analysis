import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const EmojiChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Top Emojis</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.slice(0, 10)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="emoji" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmojiChart;
