import React from 'react'

const ItemVayTheChap = (props) => {

    let {icon, titleItem} = props    
  return (
    <>
    <div className="item-vay-the-chap">
        <div className="icon-item">
            <img src={icon} alt="" className="icon" />
        </div>
        <div className="title-item">
            {titleItem}
        </div>
    </div>
    </>
  )
}

export default ItemVayTheChap