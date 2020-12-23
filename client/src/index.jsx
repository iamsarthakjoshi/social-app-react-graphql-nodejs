import React from 'react';
import ReactDOM from 'react-dom';
import Img from './superdashboardFakeIcon.png';
import './assets/styles/styles.css';
// import App from './App';

const App = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      <h1>Hello World!!</h1>
      <h1>{env} asdf</h1>
      <img src={Img} alt="image" />
    </div>
  );
};
// const App: React.FC = () => <div>Hello World</div>;

ReactDOM.render(<App />, document.getElementById('root'));
