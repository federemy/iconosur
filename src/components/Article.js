import React from 'react'
import './Article.css';

const Article = ({id, title, media, canonical, date, label, labelUrl}) => {

  const url = 'https://api.iconosur.com/v1/json' + media

  const startTime = new Date(date); 
  const endTime = new Date();
  const difference = endTime.getTime() - startTime.getTime();
  const resultInMinutes = Math.round(difference / 60000);

  return (
    <article key={id} className="">
      <a href={canonical}>
        <img src={url}  alt=""/>
      </a>
      <a className="label" href={labelUrl}>{label}</a>
      <a href={canonical}>
        <h3>{title}</h3>    
        <time>Hace {resultInMinutes} min</time>
      </a>
    </article>
  )
}

export default Article;