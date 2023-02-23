import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './details.css';
import Footer from './Footer';

const DetailedViewPage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from API
    fetch(`https://reqres.in/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.error(error));
  }, [userId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="user-details">
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        <div className="user-info">
          <p><strong>Name:</strong> {`${user.first_name} ${user.last_name}`}</p>
          <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
        </div>
      </div>
      <Link to="/" className="btn">Back to Home</Link>
      <Footer/>
    </div>
  );
  
};

export default DetailedViewPage;
