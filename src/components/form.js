import { useState } from "react";
import InputText from "./inputText";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("");
  const [bio, setBio] = useState("");

  const onSumbit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setStaff("");
    setBio("");
  };
  return (
    <div className="main">
      <h1>Form</h1>
      <h2>Welcome to this stupid Fucking Form </h2>
      <form onSubmit={onSumbit}>
        <div>
          <InputText inputId="name" inputValue={name} inputFunction={setName} />
        </div>
        <div>
          <InputText
            inputId="email"
            inputValue={email}
            inputFunction={setEmail}
          />
        </div>
        <div>
          <InputText
            inputId="phone"
            inputValue={phone}
            inputFunction={setPhone}
          />
        </div>
        <div>
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label>
            Staff:
            <label>
              <input
                type="radio"
                name="staff"
                value="instructor"
                checked={staff === "instructor"}
                onChange={(e) => setStaff(e.target.value)}
              />
              Instructor
            </label>
            <label>
              <input
                type="radio"
                name="staff"
                value="student"
                checked={staff === "student"}
                onChange={(e) => setStaff(e.target.value)}
              />
              Student
            </label>
          </label>
        </div>
        <div>
          {" "}
          <label htmlFor="bio">Bio :</label>
          <textarea
            id="bio"
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
