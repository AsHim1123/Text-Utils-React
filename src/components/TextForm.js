import React, { useEffect, useState } from "react";

function TextForm() {
  const convertLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const convertUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const copyText = () => {
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
  };
  const removeText = () => {
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <h1 className="my-5 mx-3 text-decoration-underline ">Enter your text here</h1>
      <div className="mb-3">
        <textarea
          className="form-control mx-3 "
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="button" className="btn btn-info mx-3  my-3 " disabled={text.length === 0} onClick={convertUpper}>
        Convert to Uppercase
      </button>
      <button type="button" className="btn btn-info mx-3 my-3 " disabled={text.length === 0} onClick={convertLower}>
        Convert to Lowercase
      </button>
      <button type="button" className="btn btn-info mx-3 my-3 " disabled={text.length === 0} onClick={copyText}>
        Copy Text
      </button>
      <button type="button" className="btn btn-info mx-3 my-3 " disabled={text.length === 0} onClick={removeText}>
        Remove Text
      </button>

      <div>
        <h1 className="my-3 mx-3">Summary of the Text</h1>
        <h5 className="mx-5">
          {
            text.split(/\s+/).filter((element) => {
              return element !== "";
            }).length
          }{" "}
          words and {text.length} characters
        </h5>
        <h5 className="my-3 mx-5">
          {(1 / 125) *
            text.split(/\s+/).filter((element) => {
              return element !== "";
            }).length}{" "}
          minutes to read
        </h5>
        <h1 className="my-3 mx-5">Preview</h1>
        <p className="my-2 mx-5">{text}</p>
      </div>
    </>
  );
}

export default TextForm;
