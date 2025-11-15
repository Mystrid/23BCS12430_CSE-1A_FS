import React from 'react'

function Welcome({ name }) {
  const displayName = name != null && name !== '' ? name : 'Guest'
  return (
    <div className="welcome">
      Welcome, {displayName}!
    </div>
  )
}

export default Welcome
