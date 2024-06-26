import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from "../images/Untitled-design-1.png";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="nav-main">
      <div className="nav-sub">
        <div className="top-nav-main">
          <div className="top-nav-sub">
            <ul className="top-nav-p1">
              <li>
                <Link>Shop</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Wishlist</Link>
              </li>
              <li>
                <Link>My Account</Link>
              </li>
            </ul>
            <div className="top-nav-p2">
              <div className="top-p2-txt">
                <p>Follow Us On</p>
              </div>
              <hr />
              <div className="top-p2-icon">
                <Link>
                  <FaFacebookF />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="main-nav-sub">
            <div className="logo-main">
              <div className="logo-sub">
                <Link>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="search-main">
              <div className="search-sub">
                <input type="text" placeholder="Search For Products ..." />
                <span>
                  <FaSearch />
                </span>
              </div>
            </div>
            <div className="main-nav-icon">
              <div className="main-nav-icon-sub">
                <Link className="main-nav-icon-user">
                  <FaUserAlt />
                </Link>
                <Link>
                  <FaHeart />
                  <span>0</span>
                </Link>
                <Link>
                  <FaCartPlus />
                  <span>0</span>
                </Link>
              </div>
              <div className="main-nav-price-icon">
                <p>$ 0.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-main">
          <div className="menu-sub">
            <div className="menu-div">
              <ul>
                <li>
                  <Link>HOME</Link>
                </li>
                <li>
                  <Link>SHOP</Link>
                </li>
                <li>
                  <Link>ABOUT US</Link>
                </li>
                <li>
                  <Link>MY ACCOUNT</Link>
                </li>
                <li>
                  <Link>CONTACT</Link>
                </li>
              </ul>
            </div>
            <div className="menu-num-main">
              <div className="menu-num-sub">
                <div className="menu-num-icon">
                  <span>
                    <FaPhoneAlt />
                  </span>
                </div>
                <div className="menu-num-txt">
                  <p>Need any Help ?</p>
                  <Link>+91 76988 28883</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
