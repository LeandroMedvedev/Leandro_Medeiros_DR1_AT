import styles from './style.module.css';

function QuizSummary({ score, totalQuestions }) {
  return (
    <div className={styles.resultContainer}>
      <h2>Quiz Encerrado!</h2>
      <p>
        Você acertou {score} de {totalQuestions} perguntas.
      </p>
      <button
        className={styles.restartButton}
        onClick={() => window.location.reload()}
      >
        Reiniciar
      </button>
    </div>
  );
}

export default QuizSummary;
