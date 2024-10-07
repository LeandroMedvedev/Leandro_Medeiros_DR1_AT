import styles from './style.module.css';

function Question({
  question,
  selectedOption,
  setSelectedOption,
  showResult,
  handleAnswerSubmit,
  handleNextQuestion,
}) {
  return (
    <div className={styles.container}>
      <h2>{question.question}</h2>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`${styles.optionButton} ${
              showResult && index === question.answer ? styles.correct : ''
            } ${showResult && index !== question.answer && index === selectedOption ? styles.incorrect : ''}`}
            disabled={showResult}
            onClick={() => setSelectedOption(index)}
          >
            {option}
          </button>
        ))}
      </div>

      {!showResult && (
        <button
          className={styles.submitButton}
          onClick={handleAnswerSubmit}
          disabled={selectedOption === null}
        >
          Confirmar
        </button>
      )}

      {showResult && (
        <div className={styles.explanation}>
          <p>{question.explanation}</p>
          <button className={styles.nextButton} onClick={handleNextQuestion}>
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}

export default Question;
