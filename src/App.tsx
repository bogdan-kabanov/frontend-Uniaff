import { Routes, Route } from 'react-router-dom';
import QuestionPage from './compontents/QuestionPage/QuestionPage';
import HomePage from './compontents/HomePage/HomePage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/question/:questionId" element={<QuestionPage />} />
      </Routes>
  );
}

export default App;
