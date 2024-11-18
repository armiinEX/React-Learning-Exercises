import React from 'react';
import ReactDOM from 'react-dom/client';

const tick = () => {
  const element = (
    <div>
      <h1>hi friends</h1>
      <h2>it's {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
tick();
setInterval(tick, 1000);
