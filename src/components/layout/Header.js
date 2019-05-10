import React from 'react'

  function Header() {
  return (
    <header style={headerStyle}>
      <h1> ToDo List</h1>
    </header>
  )
}

export default Header

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}