import React from 'react';

function WordCloudChart({ image }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Word Cloud</h2>
      <img src={image} alt="Word Cloud" className="w-full max-w-lg" />
    </div>
  );
}

export default WordCloudChart;
