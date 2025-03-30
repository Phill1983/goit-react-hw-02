import styles from './Feedback.module.css';

export default function Feedback({ feedback, total, positivePercentage }) {
  return (
    <div className={styles.stats}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive (incl. neutral): {positivePercentage}%</p>
    </div>
  );
};

