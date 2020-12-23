import React from 'react';
import Img from './assets/img/superdashboardFakeIcon.png';

const App: React.FC = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      <h1>Hello World!!</h1>
      <h1>Env: {env}</h1>
      <img src={Img} alt="hello-world" />
    </div>
  );
};

export default App;
