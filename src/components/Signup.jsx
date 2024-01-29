export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const enteredEmail = fd.get('email')
    
    // FormData is a built-in browser feature and is an object that makes it easy
    // to get hold of the different values entered into a form.
    // We simply pass the e.target because the target of that event is the form itself.
    // IMPORTANT: for this to work, all the input elements must have the name prop set on them.
    // We can now use the get() method to get the value that has name="email"
    // Alternatively, we can use Object.fromEntries(fd.entries()) which will give us back an object
    // that contains key-value pair, reflecting all the inputs I have.
    // Since the checkbox are grouped, they won't show inside the object,
    // therefore we first use fd.getAll('acquisition') and then data.acquisition
    // to attach them to our object.
    const data = Object.fromEntries(fd.entries())
    const acquisitionChannel = fd.getAll('acquisition')
    data.acquisition = acquisitionChannel;

    // To reset the form, we can either put type="reset" on the reset button or
    // we use the reset() built-in method to target the event like below.
    // e.target.reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
