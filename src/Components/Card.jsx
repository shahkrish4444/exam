import React from 'react'

const Sidebar = ({ onFilter }) => {
  return (
    <>
     <div>
       <h2>Filter</h2>
       <input name="name" type="text" placeholder="Filter by name" onChange={onFilter} />
       </div>

       </>
       )
       }
       export default Sidebar
