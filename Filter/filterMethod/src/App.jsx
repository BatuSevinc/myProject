import React, { useState } from 'react'
import items from './AllData'
import Menu from './Components/Menu';
import Button from './Components/Button';

const allCategories = ['All', ...new Set(items.map((item) => item.category))]
function App() {

  const [menuItem,setMenuItem] = useState(items);
  const [buttons,setButtons] = useState(allCategories);

  const filter = (button) =>{
    if(button === 'All'){
      setMenuItem(items)
      return
    }
    const filteredData = items.filter(item => item.category === button);
    setMenuItem(filteredData)
  }
  
  return (
    <div className='App'>
      <div className="title">
        <h1>
          Portfolio
          <span> Filter</span>
        </h1>
      </div>
      <Button button={buttons} filter={filter}/>
      <Menu menuItem={menuItem}/>
    </div>
  )
}

export default App
