import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  // const handleEmailChange = (e) => {
  //   setEnteredEmail(() => e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setEnteredPassword(() => e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User email: " + enteredEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
        {/* 
      One way to stop the entire page from reloading when pressing the button is to
      change the default "submit" type to "button".
      Alternatively, we keep the "submit" type but we remove the onClick and instead
      add the onSubmit event listener inside the form.
      We can then use the preventDefault method that prevents the default browser behaviour.
      */}
      </p>
    </form>
  );
}
