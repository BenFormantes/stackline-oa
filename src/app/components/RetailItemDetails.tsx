import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks'
import Tags from './Tags'
import './RetailItemDetails.css';

export default function RetailItemDetails() {
  const RetailItem = useAppSelector((state) => state.retailItem.retailItem)
  useEffect(() => {
    // Set the title of the tab
    const prefix = RetailItem?.title ? 'RetailItem | ' : 'RetailItem'
    document.title = prefix + RetailItem?.title // Use the RetailItem title or a default title
  }, [RetailItem?.title])

  return (
    <div className='item-image-container'>
      <img className='item-image' src={RetailItem?.image} alt={RetailItem?.title} />
      <div>
        <h2 className='item-title'>{RetailItem?.title}</h2>
        <p className='item-subtitle'>{RetailItem?.subtitle}</p>
        <Tags tags={RetailItem?.tags} />
      </div>
    </div>
  )
}
