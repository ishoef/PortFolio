import React from 'react';
import { Link } from 'react-router';
import logo from "/logo.png";

const Logo = () => {
    return (
      <Link to="/">
        <div className="left flex items-center gap-2">
          <img className="w-9" src={logo} alt="" />
          <p className="hidden md:block lg:block text-2xl font-bold tracking-wide">
            Logo
          </p>
        </div>
      </Link>
    );
};

export default Logo;