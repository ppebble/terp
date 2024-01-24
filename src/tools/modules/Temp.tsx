/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../css/template.css';
import Instagramcard from './Instagramcard';
import Searchbox from './Searchbox';
import CategoryClouds from './CategoryClouds';
import Newsletter from './Newsletter';
import Rightbox from './Rightbox';
import Singlepost from './Singlepost';
import Commentarea from './Commentarea';
import Writearea from './Writearea';
import Leftbox from './Leftbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainlayout from './MainLayout';

function template() {
  return (
    <>
      {/*
        https://www.bootdey.com/snippets/view/Blog-Detail-App#html
    */}
      <Mainlayout>
        <Leftbox>
          <Singlepost />
          <Commentarea />
          <Writearea />
        </Leftbox>
        <Rightbox>
          <Searchbox />
          <CategoryClouds />
          <Instagramcard />
          <Newsletter />
        </Rightbox>
      </Mainlayout>
      {/* Bootstrap JS */}
    </>
  );
}
export default template;
