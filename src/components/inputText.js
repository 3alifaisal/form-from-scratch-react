function InputText({ inputId, inputValue, inputFunction }) {
  return (
    <label htmlFor={inputId} key={inputId}>
      {inputId.charAt(0).toUpperCase() + inputId.slice(1) + " :"}
      <input
        id={inputId}
        name={inputId}
        type="text"
        onChange={(e) => inputFunction}
        value={inputValue}
      />
    </label>
  );
}
export default InputText;
