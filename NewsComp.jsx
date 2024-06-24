import React from 'react'

const NewsComp = (Props) => {
  return (
    <div>
      <h1>{Props.data.title}</h1>
      {/* <h2>{Props.data.content}</h2> */}
      {/* <p>{Props.data.description}</p> */}
      {/* <img src={Props.data.urlToImage} alt="" /> */}
      {/* <a href={Props.data.url}><button>Learn More</button></a> */}
    </div>
  )
}

export default NewsComp
