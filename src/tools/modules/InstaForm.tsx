import React from 'react';
import '../css/Instagramcard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function InstaForm() {
  return (
    <div className="story_form">
      <div className="body widget">
        <ul className="list-unstyled instagram-plugin m-b-0">
          <li className="spread-underline">
            <a href="//www.naver.com">
              <img
                src="https://www.bootdey.com/image/150x150/87CEFA/000000"
                alt=""
              />
            </a>
          </li>
          <li className="spread-underline">
            <a href="//sports.naver.com/*">
              <img
                src="https://www.bootdey.com/image/150x150/87CEFA/000000"
                alt=" "
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default InstaForm;
