import React from 'react';
import './pages.css';

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className="container">
      <h2 className="Home_heading">Select a user to start</h2>
      <h1 className="home-text">Time tracker home</h1>
      <div className="clear-data_button-container">
        <button
          className="clear-data_button"
          type="submit"
          onClick={() => {
            if (window.confirm('Are you sure you wish to delete all data'))
              localStorage.clear();
          }}
        >
          clear data
        </button>
      </div>
    </div>
  );
};
