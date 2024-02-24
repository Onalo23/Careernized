import React, { useState } from 'react';
import { useNavigate } from '../components/NavMain/'

const Register = () => {
  // Define state variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [firstHobby, setFirstHobby] = useState('');
  const [secondHobby, setSecondHobby] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here (e.g., send registration request to server)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('First Hobby:', firstHobby);
    console.log('Second Hobby:', secondHobby);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Gender:', gender);
    // Reset form fields after submission if needed
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setFirstHobby('');
    setSecondHobby('');
    setDateOfBirth('');
    setPassword('');
    setConfirmPassword('');
    setGender('');
  };

  return (
    <div className="form1">
      <form onSubmit={handleSubmit}>
        <h1>REGISTRATION FORM</h1>
        <input
          className="fill"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="text"
          placeholder="First Hobby"
          value={firstHobby}
          onChange={(e) => setFirstHobby(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="text"
          placeholder="Second Hobby"
          value={secondHobby}
          onChange={(e) => setSecondHobby(e.target.value)}
        /><br /><br />
        <label htmlFor="dob" style={{ color: '#CC8B65' }}>Date of Birth</label><br />
        <input
          className="fill"
          type="date"
          id="dob"
          name="dob"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <input
          className="fill"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br /><br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="male" style={{ color: '#E3DCD2' }}>Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="female" style={{ color: '#E3DCD2' }}>Female</label><br /><br />
        <button type="submit">Submit</button><br /><br />

        <p style={{ color: '#E3DCD2' }}>Already a user?</p>
        <button className="button-1"><a className="button-1" href="/login" style={{ textDecoration: 'none' }}>LOGIN</a></button>
      </form>
    </div>
  );
};

export default Register;
