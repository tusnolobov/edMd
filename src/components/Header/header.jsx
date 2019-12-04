import React from 'react';

export const Header = () => {
  return (
    <header>
      <h3>edMD</h3>
      <style jsx>{`
        header {
          height: 5vh;
          padding: 0 1.6rem;
          background-color: #f7f7f7;
        }

        h3 {
          margin: 0;
        }
      `}</style>
    </header>
  );
};
