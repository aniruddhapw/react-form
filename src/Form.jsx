import React, { useState } from 'react';

function Form() {
  const [page1Data, setPage1Data] = useState({ name: '', email: '' });
  const [page2Data, setPage2Data] = useState({ password: '', confirmPassword: '' });
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage1Submit = (e) => {
    e.preventDefault();
    if (page1Data.name === '' || page1Data.email === '') {
      alert('Please fill in all required fields.');
      return;
    }
    setCurrentPage(2);
  };

  const handlePage2Submit = (e) => {
    e.preventDefault();
    if (page2Data.password === '' || page2Data.confirmPassword === '') {
      alert('Please fill in all required fields.');
      return;
    }
    if (page2Data.password !== page2Data.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    // perform form submission
  };

  const handlePage2BackClick = () => {
    setCurrentPage(1);
  };

  return (
    <>
      {currentPage === 1 && (
        <form onSubmit={handlePage1Submit}>
          <label>
            Name:
            <input
              type="text"
              value={page1Data.name}
              onChange={(e) => setPage1Data({ ...page1Data, name: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={page1Data.email}
              onChange={(e) => setPage1Data({ ...page1Data, email: e.target.value })}
            />
          </label>
          <button type="submit">Next</button>
        </form>
      )}
      {currentPage === 2 && (
        <form onSubmit={handlePage2Submit}>
          <label>
            Password:
            <input
              type="password"
              value={page2Data.password}
              onChange={(e) => setPage2Data({ ...page2Data, password: e.target.value })}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={page2Data.confirmPassword}
              onChange={(e) => setPage2Data({ ...page2Data, confirmPassword: e.target.value })}
            />
          </label>
          <button type="button" onClick={handlePage2BackClick}>
            Back
          </button>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default Form;
