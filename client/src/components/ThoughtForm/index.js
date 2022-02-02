import React, { useState } from "react";

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    thought: "",
  });
  const [characterCount, setCharacterCount] = useState(0);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const postData = async () => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })
      const data = await res.json();
      console.log(data);
    }
    postData();

  // In the preceding function, we used the fetch function to send the form data to the endpoint in the body of the request.

    // clear form value
    setFormState({ username: "", thought: "" });
    setCharacterCount(0);
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder="Name"
          name="username"
          value={formState.username}
          className="form-input col-12 "
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Here's a new thought..."
          name="thought"
          value={formState.thought}
          className="form-input col-12 "
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
