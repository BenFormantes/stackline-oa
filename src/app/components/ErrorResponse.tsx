import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ErrorResponse(props: any) {
  return (
    <div role="alert">
      <span>Error Loading Page:</span> {props.message}
    </div>
  )
}
