import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  ul.blog-post {
    list-style: none;
    font-size: 0px;
    margin-left: -2.5%;
  }
  
  ul.blog-post li {
    display: inline-block;
    border-radius: 3px;
    padding: 1.5em;
    width: 400px;
    margin: 0 0 2.5% 2.5%;
    background: #fff;
    border: 1px solid #eee;
    font-size: 16px;
    font-size: 1rem;
    vertical-align: top;
    box-shadow: 0 0 6px #eee;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  
  ul.blog-post li img {
    max-width: 100%;
    height: auto;
    margin: 0 0 10px;
  }
  
  ul.blog-post li h3 {
    margin: 0.6em 0 0.6em;
    text-align: left!important;
    font-family: Source Sans Pro, sans-serif;
    color: #333;
    font-size: 1.1em;
  }
  
  ul.blog-post li p {
    margin: 0.6em 0 1.3em;
    font-size: .9em;
    line-height: 1.5em;
    color: #8c8c8c;
    text-align: left!important;
    font-family: Open Sans, sans-serif;
    font-weight: 300;
  }
  
  .button {
    text-align: center;
    width: 20%;
    border: none;
    background: #36B3A8;
    font-family: Open Sans, sans-serif;
    font-weight: 300;
    font-size: 0.7em;
    color: white;
    border-radius: 5px;
    padding: 8px 15px 8px 15px;
  }
  
  .button:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  
  ul.blog-post.columns-2 li {
    width: 37%;
  }
   
  @media (max-width: 480px) {
    ul.grid-nav li {
      display: block;
      margin: 0 0 5px;
    }
    ul.grid-nav li a {
      display: block;
    }
    ul.blog-post {
      margin-left: 0;
    }
    ul.blog-post li {
      width: 100% !important;
      margin: 0 0 20px;
    }
  }
  
  footer{
    font-family: Open Sans, sans-serif;
    text-align: center;
  }
  `;
