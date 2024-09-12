import React, { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    repeatpassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset errors
    setErrors({ email: '', username: '', password: '', repeatpassword: '' });

      // Client-side validation
      const newErrors = {};
      if (!form.email) newErrors.email = 'Email is required.';
      if (!form.password) newErrors.password = 'Password is required.';
      if (form.password !== form.repeatpassword) newErrors.repeatpassword = 'Passwords do not match.';
  
      // If there are validation errors, alert them and return early
      if (Object.keys(newErrors).length > 0) {
        Object.values(newErrors).forEach(error => alert(error));
        setErrors(newErrors);
        return;
      }


        // Proceed with server-side registration
    try {
        const response = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
  
     
        const data = await response.json();
        if (!response.ok) {
          if (data.errors) {
            // Alert errors from the server
        
            Object.values(data.errors).forEach(error => alert(error.message));
          
          } else {
            throw new Error(data.error || "Registration failed");
          }
          return;
        }
  
        alert('Registration successful!');
        navigate('/auth/login');
        setForm({ email: '', username: '', password: '', repeatPassword: '' });
  
      } catch (error) {
        console.error('Error:', error.message);
        alert(`Error: ${error.message}`);
      }
    };


  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatpassword">Password:</label>
          <input
            type="password"
            id="repeatpassword"
            name="repeatpassword"
            value={form.repeatpassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}
