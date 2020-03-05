import React from 'react';
import './pagination-item.styles.scss';

export default function paginationItem({content, isActive, clickEvent, isDisabled}) {
  return (
    <button className={`pagination-item ${isActive ? 'pagination-item__active' : ''} ${isDisabled ? 'pagination-item--disable' : ''}`} onClick={() => clickEvent()} >
      {content}
    </button>
  )
}
