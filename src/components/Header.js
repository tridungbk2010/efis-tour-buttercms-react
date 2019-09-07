import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/p/blog">Blogs</Link>
    </div>
  );
}

export default Header;
