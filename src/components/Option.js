function Option({ questions }) {
  return (
    <div className="options">
      {questions.options.map((options) => (
        <button className="btn btn-options" key={options}>
          {options}
        </button>
      ))}
    </div>
  );
}

export default Option;
