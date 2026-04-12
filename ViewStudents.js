import { useEffect, useState } from 'react';

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: ''
  });

  const fetchStudents = () => {
    fetch('http://localhost:5000/student/view')
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/student/delete/${id}`, {
      method: 'DELETE'
    }).then(() => fetchStudents());
  };

  const handleEdit = (student) => {
    setEditId(student._id);
    setForm(student);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    fetch(`http://localhost:5000/student/update/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => {
      setEditId(null);
      fetchStudents();
    });
  };

  return (
    <div>
      <h2>Students List</h2>

      {students.map((s) => (
        <div key={s._id}>
          {editId === s._id ? (
            <div>
              <input name="name" value={form.name} onChange={handleChange} />
              <input name="email" value={form.email} onChange={handleChange} />
              <input name="course" value={form.course} onChange={handleChange} />
              <button onClick={handleUpdate}>Update</button>
            </div>
          ) : (
            <div>
              <p>{s.name} - {s.email} - {s.course}</p>
              <button onClick={() => handleEdit(s)}>Edit</button>
              <button onClick={() => handleDelete(s._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ViewStudents;