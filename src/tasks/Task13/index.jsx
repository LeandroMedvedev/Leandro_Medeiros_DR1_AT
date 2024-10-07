import { useState } from 'react';

import styles from './style.module.css';
import Question from './components/Question';
import QuizSummary from './components/QuizSummary';
import { QUESTIONS } from '../../constants';

function Task13() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswerSubmit = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedOption(null);
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className={styles.container}>
      {!quizCompleted ? (
        <Question
          question={currentQuestion}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          showResult={showResult}
          handleAnswerSubmit={handleAnswerSubmit}
          handleNextQuestion={handleNextQuestion}
        />
      ) : (
        <QuizSummary score={score} totalQuestions={QUESTIONS.length} />
      )}
    </div>
  );
}

export default Task13;
