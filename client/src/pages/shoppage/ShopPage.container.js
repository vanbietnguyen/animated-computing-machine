import React, { useState, useEffect } from 'react';
import {SHOP_DATA} from "./shop.data";
import CollectionPreview from '../../components/collection/CollectionPreview';

const ShopPage = () => {
  const [ shopData, setShopData ] = useState([])

  useEffect(() => {
    setShopData(SHOP_DATA)
  }, [])

  let collections = shopData.map(({ id, ...otherCollectionProps }) => (
    <CollectionPreview key={id} {...otherCollectionProps} />
  ))
  return (
    <div className='shop-page'>
      {collections}
    </div>
  )

}

export default ShopPage;