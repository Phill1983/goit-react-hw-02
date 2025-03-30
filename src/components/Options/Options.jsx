import styles from './Options.module.css';

export default function Options ({ options, onLeaveFeedback, onReset, hasFeedback })  {
  return (
    <div className={styles.buttons}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={styles.button}
        >
          {option}
        </button>
      ))}

      {hasFeedback && (
        <>
          <button onClick={onReset} className={styles.button}>Reset</button>
        </>
      )}
    </div>
  );
};

 