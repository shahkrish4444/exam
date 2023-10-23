import React, { useState } from 'react';
import Sidebar from './Card';
// Data array
const data = [
 { name: 'Shirt', color: 'red', type: 'men' ,img : 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww'},
 { name: 'Shirt', color: 'red', type: 'men' },
 { name: 'Shirt', color: 'red', type: 'men' },
 { name: 'Skirt', color: 'blue', type: 'women' },
 { name: 'Sweater', color: 'white', type: 'kids' },
 { name: 'Dress', color: 'green', type: 'women' },
 { name: 'Pants', color: 'black', type: 'men' },
];

// Main Component
const Main = () => {
 const [filteredData, setFilteredData] = useState(data);

 // Filter Functionality
 const handleFilter = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const color = e.target.color
    if (name === 'color') {
      setFilteredData(data.filter((item) => item.color.toLowerCase().includes(value.toLowerCase())));
    } else if (name === 'type') {
      setFilteredData(data.filter((item) => item.type === value));
    } else if (name === 'name') {
      setFilteredData(data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
    }
  
 };

 return (
    <>
    <div>
      <h1>Products</h1>
      <ul>
        {filteredData.map((item) => (
         <div class="card">
         <img src= {data[0].img}/>
         <div class="card-body">
             <h2 class="card-title">{item.name}</h2>
             <h2 class="card-title">{item.color}</h2>
            
         </div>
     </div>
      
        ))}
      </ul>
      <Sidebar onFilter={handleFilter} />
    </div>
    </>
 );
};

export default Main
