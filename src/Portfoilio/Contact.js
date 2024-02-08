import React, { useState } from "react";
import "./AboutMe";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [displayname, setDisplayname] = useState("");

  const [email, setEmail] = useState("");
  const [displayemail, setDisplayemail] = useState("");

  const [number, setNumber] = useState("");
  const [displaynumber, setDisplaynumber] = useState("");

  const [massage, setMassage] = useState("");
  const [displaymassage, setDisplayMassage] = useState("");

  function handleClick(e) {
    e.preventDefault();
    alert("Submitted");
    setName("");
    setEmail("");
    setNumber("");
    setMassage("");
    setDisplayname(name);
    setDisplayemail(email);
    setDisplaynumber(number);
    setDisplayMassage(massage);
  }

  function handleChangename(e) {
    setName(e.target.value);
  }

  function handleChangeemail(e) {
    setEmail(e.target.value);
  }

  function handleChangenumber(e) {
    setNumber(e.target.value);
  }

  function handleChangemassage(e) {
    setMassage(e.target.value);
  }
  return (
    <div id="contact" className="contact1">
      <h1 className="contact2"> Contact </h1>
      <form onSubmit={handleClick} className="contact3">
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={handleChangename}
          value={name}
          required
        ></input>
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={handleChangeemail}
          value={email}
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Enter Your Number"
          onChange={handleChangenumber}
          value={number}
        ></input>
        <br></br>
        <br></br>
        <textarea
          rows="2"
          cols="22"
          placeholder="Enter Your Massage"
          onChange={handleChangemassage}
          value={massage}
        ></textarea>
        <br></br>
        <br></br>
        <button className="submit">Submit</button>
        <p>{displayname}</p>
        <p> {displayemail} </p>
        <p> {displaynumber} </p>
        <p> {displaymassage} </p>
      </form>
    </div>
  );
}

export default Contact;
