import React, { useState } from "react";
import { validateEmail } from "../utils/helper";
function Form() {
  // Here we set state variables using `useState`
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call input field based on what field the user is typing in

    if (name === "userName") {
      return setUserName(value);
    } else if (name === "userEmail") {
      return setUserEmail(value);
    } else {
      return setUserMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // We check to see if userName and Message fields are filled. If not, we set an error message.
    if (!userName || !userMessage) {
      alert("Name and Message fields can Not be blank");
      return;
    } else if (!validateEmail(userEmail)) {
      // We check to see if Email is entered with correct format. If not, we set an error message.
      alert("Email address is invalid");
      return;
    }

    alert(`Hello ${userName}! Thank for your message!`);
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <div>
      <h2 className="content">Contact Me</h2>
      <form>
        <div className="form-group">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            value={userEmail}
            name="userEmail"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            value={userMessage}
            name="userMessage"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            rows="10"
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
