import React, { useState } from 'react'
import './App.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

function App() {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
    if (search === true) {
      setSearch(false)
    }
  }

  const [search, setSearch] = useState(false)
  const toggleSearch = () => {
    setSearch(!search)
    if (menu === true) {
      setMenu(false)
    }
  }
  return (
    <div>
      <nav>
        <button className="menu-icon" onClick={toggleMenu}>
          {menu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
        <div className="logo">G+</div>
        <div className={`nav-items ${menu ? '' : 'hide'}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </div>
        <button className="search-icon" onClick={toggleSearch}>
          {search ? <AiOutlineClose /> : <AiOutlineSearch />}
        </button>
        <div className={`search-bar ${search ? 'show' : 'hide'}`}>
          <form action="/">
            <input type="search" className="search-data" placeholder="Search" required />
            <button type="submit" className="fas fa-search">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default App
