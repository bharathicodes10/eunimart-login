import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

const HomePage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => setUsers(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="container">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <h1 className="title">Hey there! Check out our users!</h1>
      
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="user-row" onClick={() => navigate(`/details/${user.id}`)}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
};

export default HomePage;
