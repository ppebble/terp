import React from 'react';

function Commentarea() {
  return (
    <div className="card">
      <div className="header">
        <h2>Comments 3</h2>
      </div>
      <div className="body">
        <ul className="comment-reply list-unstyled">
          <li className="row clearfix">
            <div className="icon-box col-md-2 col-4" />
            <div className="text-box col-md-10 col-8 p-l-0 p-r0">
              <h5 className="m-b-0">Gigi Hadid </h5>
              <p>
                Why are there so many tutorials on how to decouple WordPress?
                how fast and easy it is to get it running (and keep it running!)
                and its massive ecosystem.{' '}
              </p>
              <ul className="list-inline">
                {/* <li>
                            <a href="javascript:void(0);">Mar 09 2018</a>
                          </li> */}
              </ul>
            </div>
          </li>
          <li className="row clearfix">
            <div className="icon-box col-md-2 col-4">
              {/* <img
                          className="img-fluid img-thumbnail"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt="Awesome Image"
                        /> */}
            </div>
            <div className="text-box col-md-10 col-8 p-l-0 p-r0">
              <h5 className="m-b-0">Christian Louboutin</h5>
              <p>
                Great tutorial but few issues with it? If i try open post i get
                following errors. Please can you help me?
              </p>
              <ul className="list-inline" />
            </div>
          </li>
          <li className="row clearfix">
            <div className="icon-box col-md-2 col-4" />
            <div className="text-box col-md-10 col-8 p-l-0 p-r0">
              <h5 className="m-b-0">Kendall Jenner</h5>
              <p>hi</p>
              <ul className="list-inline" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Commentarea;
