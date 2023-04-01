import React from 'react';

function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="company logo" />
        </div>
        <div className="col align-self-center text-start">
          <h1>Hayden's React Site</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
