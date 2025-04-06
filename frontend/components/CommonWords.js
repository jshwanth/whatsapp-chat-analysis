import React from 'react';

function CommonWords({ data }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Most Common Words</h2>
      <ul className="list-disc pl-6">
        {data.map((item, idx) => (
          <li key={idx}>{item.Word}: {item.Count}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommonWords;
