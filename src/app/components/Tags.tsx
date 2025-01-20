import React from 'react'
import './Tags.css';
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Tags(props: any) {
  return (
    <div className="tags">
      {props?.tags?.length
        ? props.tags.map((tag: any, id: number) => (
            <span className="tag" key={id}>
              {tag}
            </span>
          ))
        : ''}
    </div>
  )
}
