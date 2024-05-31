import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/logout', {
        method: 'GET',
        credentials: 'include', // Important for including cookies in the request
      });

      if (response.ok) {
        // Handle successful logout, e.g., redirect to login page or show a message
        console.log('Logged out successfully');
        window.location.href = '/login'; // Redirect to login page or home page
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;