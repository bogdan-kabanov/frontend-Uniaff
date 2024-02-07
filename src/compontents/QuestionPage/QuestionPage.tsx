import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Answer {
  id: number;
  response_text: string;
}

function QuestionPage() {
  const { questionId } = useParams();
  const [question, setQuestion] = useState<any>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      try {
        const questionResponse = await axios.get(`https://analcustdev.com/api/question/get/${questionId}`);
        setQuestion(questionResponse.data.question);
        
        const answersResponse = await axios.get(`https://analcustdev.com/api/handwrittenAnswer/${questionId}`);
        setAnswers(answersResponse.data.handwrittenAnswers);
      } catch (error) {
        console.error('Ошибка при получении данных о вопросе и ответах:', error);
      }
    };
    

    fetchQuestionAndAnswers();
  }, [questionId]);

  return (
    <div>
      {question && (
        
        <>
          <h1>{question?.name}</h1>
          <ul>
            {answers.map((answer) => (
              <li key={answer.id}>{answer.response_text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default QuestionPage;
