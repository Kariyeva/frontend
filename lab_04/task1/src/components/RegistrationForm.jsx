import { useState } from "react";

export default function RegistrationForm() {
  // Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  // Success
  const [success, setSuccess] = useState(false);

  // Validation functions (по заданию)
  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    const regex = /[\s@]+@[\s@]+\.[\s@]+/;
    if (!regex.test(value)) return "Email format is invalid";
    return "";
  };

  const validateAge = (value) => {
    if (value === "" || value === null) return "Age is required";
    const num = Number(value);
    if (Number.isNaN(num)) return "Age must be a number";
    if (num < 18) return "Age must be 18+";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // обязательно :contentReference[oaicite:6]{index=6}

    const nErr = validateName(name);
    const eErr = validateEmail(email);
    const aErr = validateAge(age);

    setNameError(nErr);
    setEmailError(eErr);
    setAgeError(aErr);

    if (nErr || eErr || aErr) {
      setSuccess(false);
      return;
    }

    setSuccess(true);

    // очистка формы после успеха
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <h2>Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            const value = e.target.value;
            setName(value);
            setNameError(validateName(value));
            setSuccess(false);
          }}
          style={{ width: "100%", padding: 10, marginTop: 10 }}
        />
        {nameError && <p style={{ color: "red", margin: "6px 0" }}>{nameError}</p>}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
            setEmailError(validateEmail(value));
            setSuccess(false);
          }}
          style={{ width: "100%", padding: 10, marginTop: 10 }}
        />
        {emailError && <p style={{ color: "red", margin: "6px 0" }}>{emailError}</p>}

        {/* AGE */}
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            const value = e.target.value;
            setAge(value);
            setAgeError(validateAge(value));
            setSuccess(false);
          }}
          style={{ width: "100%", padding: 10, marginTop: 10 }}
        />
        {ageError && <p style={{ color: "red", margin: "6px 0" }}>{ageError}</p>}

        <button type="submit" style={{ width: "100%", padding: 10, marginTop: 12 }}>
          Submit
        </button>
      </form>

      {success && (
        <p style={{ color: "green", marginTop: 12 }}>Registration successful!</p>
      )}
    </div>
  );
}
