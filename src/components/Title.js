import React from 'react'
import './Title.css';

const Title = ({title, href}) => {

  return (
    <div key="title" className="box-container">
      <h2>{title}</h2>  
      <a href={href.length > 0 ? href : null} className="vermas">
        VER MAS  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="334.237 4816 9 9"><path d="m338.737 4816-.793.793 3.139 3.145h-6.846v1.125h6.846l-3.144 3.138.798.8 4.5-4.5-4.5-4.5Z" fill="#04857f" fill-rule="evenodd" data-name="Path 9308"/></svg>
      </a>
    </div>
  )
}

export default Title;