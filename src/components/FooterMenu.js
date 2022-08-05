import React from 'react'
import './FooterMenu.css';

const FooterMenu = ({name, href, target}) => {

  return (
    <a href={href} target={target}>
      {name}
    </a>
  )
}

export default FooterMenu;