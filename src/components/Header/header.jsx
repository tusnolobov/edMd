import React from 'react';

export const Header = () => {
  return (
    <header>
      <h3>edMD</h3>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          height: 10vh;
          padding: 0 1.6rem;
        }

        h3 {
          margin: 0;
          font-size: 3.2rem;
          color: #152833;
        }
      `}</style>
    </header>
  );
};
