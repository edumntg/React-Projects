import React from 'react'
import "./Item.css"
function Item({title, text}) {
  return (
    <div className="item">
        <div className="closebtn">
            <button className="delete">x</button>
        </div>
        <div className="title">{title}</div>
        <div className="description">{text}</div>
        <div className="details">Other</div>
    </div>
  )
}

export default Item