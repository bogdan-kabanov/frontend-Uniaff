import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [questions, setQuestions] = useState<any[]>([]); // явно указываем тип данных

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://analcustdev.com/api/question/get-all');
        setQuestions(response.data.questions);
      } catch (error) {
        console.error('Ошибка при получении вопросов:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (

      <div>
        <h1>Список вопросов:</h1>
        <ul>
          {questions.map((question: any) => (
            <li key={question.id}>
              <Link to={`/question/${question.id}`}>{question.name}</Link>
            </li>
          ))}
        </ul>
      </div>

  );
}

export default HomePage;
