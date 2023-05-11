import React from 'react'

const Menu = ({menuItem}) => {
  return (
    <div className='item'>
      {
        menuItem.map((item)=>{
            return <div className='items-container' key={item.id}>
                <div className="item-container">
                    <img src={item.image} alt="image" />
                    <h2 className='itemTitle'>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default Menu
