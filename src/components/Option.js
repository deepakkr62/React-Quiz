function Option({ questions, dispatch, answer }) {
  const hasAswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((options, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAswered
              ? questions.correctOption === index
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={options}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAswered}
        >
          {options}
        </button>
      ))}
    </div>
  );
}

export default Option;
