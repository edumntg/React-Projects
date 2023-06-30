import React from 'react'
import "./Todolist.css"
import Item from "../Item/Item"
function Todolist() {
  return (
    <>
        <div className="container">
            <div className="wrapper">
                <div className="topbar">
                    <button className="newnote">+</button>
                </div>
                <div className="notes">
                    <Item title="Llamar al medico" text="Llamar al medico el Miercoles a las 9:00 a.m"/>
                    <Item title="Llamar al medico" text="Llamar al medico el Miercoles a las 9:00 a.m"/>
                    <Item title="Llamar al medico" text="Llamar al medico el Miercoles a las 9:00 a.m"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todolist