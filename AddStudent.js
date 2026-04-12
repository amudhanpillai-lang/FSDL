import { useState } from 'react';

function AddStudent() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.text())
      .then(data => alert(data));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="course" placeholder="Course" onChange={handleChange} /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;