import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <nav>
        <Link id="home-link" to="/">
        <h1>INSIDER</h1>
        </Link>
        <ul className='nav-links'>
        <Link  className='header-list-items' to="/topheadlines">
            <li>Top Headlines</li>
          </Link> 
          <Link className='header-list-items' to="/science">
            <li>Science</li>
          </Link>
          <Link  className='header-list-items' to="/business">
            <li>Business</li> 
          </Link>
          <Link  className='header-list-items' to="/technology">
            <li>Technology</li>
          </Link>
          <div class="search-box">
                <a class="search-btn">
                    <i class="fas fa-search"></i></a>
                <input class="search-txt" name="" type="text" placeholder="Search.."/>
          </div>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
  );
}

export default Header;
