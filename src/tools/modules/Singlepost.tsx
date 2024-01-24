import React from 'react';

function Singlepost() {
  return (
    <div className="card single_post">
      <div className="body">
        <div className="img-post">
          <img
            className="d-block img-fluid"
            src="https://www.bootdey.com/image/800x280/87CEFA/000000"
            alt="First slide"
          />
        </div>
        <h3>
          <a href="blog-details.html">
            {'{'}
            {'{'} title {'}'}
            {'}'}
          </a>
        </h3>
        <p>
          {'{'}
          {'{'} content {'}'}
          {'}'}
        </p>
      </div>
    </div>
  );
}
export default Singlepost;
