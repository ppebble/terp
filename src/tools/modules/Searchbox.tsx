import React from 'react';

function Searchbox() {
  return (
    <div className="card">
      <div className="body search">
        <div className="input-group m-b-0">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-search" />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
export default Searchbox;
