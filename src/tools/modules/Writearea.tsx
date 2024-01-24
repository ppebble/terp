import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Writearea() {
  const navigate = useNavigate();
  const nameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const textArea = useRef<any>(null);
  const handleSubmit = () => {
    const text = textArea.current.value;
    const name = nameRef.current.value;
    navigate('/rest', {
      state: {
        text,
        name,
      },
    });
  };
  return (
    <div className="card">
      <div className="header">
        <h2>
          Leave a reply{' '}
          <small>
            Your email address will not be published. Required fields are
            marked*
          </small>
        </h2>
      </div>
      <div className="body">
        <div className="comment-form">
          <form className="row clearfix">
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  ref={nameRef}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  ref={emailRef}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <textarea
                  rows={4}
                  ref={textArea}
                  className="form-control no-resize"
                  placeholder="Please type what you want..."
                  defaultValue=""
                />
              </div>
              <button
                type="submit"
                className="btn btn-block btn-primary"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Writearea;
