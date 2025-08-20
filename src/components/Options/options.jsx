const Options = ({ onLeaveFeedback, onReset, hasFeedBack }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {hasFeedBack && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
export default Options;
