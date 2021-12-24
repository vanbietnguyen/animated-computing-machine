import React, {useState, useEffect}from "react";
import MenuItem from "./MenuItem";
import {sections} from "./directory.data"

const DirectoryMenu = () => {
  useEffect(() => {
    setItems(sections)
  }, [])

  const [items, setItems] = useState([])
  
  console.log(items, 'items')

  let menuItems = items.map(({ id, ...otherProps }) => (
    <MenuItem key={id} {...otherProps} />
  ))

  return (
      <div className='directory-menu'>
       {menuItems}
      </div>
  )
}

export default DirectoryMenu;