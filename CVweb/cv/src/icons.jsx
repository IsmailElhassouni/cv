import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './wheel.css';
import Laravel from './laravel-3';
import Tailwind from './tailwindcss';
import ReactJS from './react-2';
import NodeJS from './nodejs-icon';
import Bootstrap from './bootstrap-5-1';
import ExpressJs from './expressjs-ar21';
function Icons() {
  return (
    <div className="wheel">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
<div title='NodeJS' className="cabin"><NodeJS/></div>
<div title='ReactJS'  className="cabin"><ReactJS/></div>
<div title='Laravel' className="cabin"><Laravel/></div>
<div title='Bootstrap' className="cabin"><Bootstrap/></div>
<div title='Tailwind' className="cabin"><Tailwind/></div>
<div title='ExpressJS' className="cabin"><ExpressJs/></div>
    </div>
  );
}

export default Icons;
