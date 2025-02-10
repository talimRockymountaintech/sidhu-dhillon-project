import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header id="header-main" className="header header-fixed">
            <div className="header-inner">
                <div className="tf-container xl">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-inner-wrap">
                                <div className="header-logo">
                                    <Link to="/" className="site-logo"><img id="logo_header" alt="" src="images/logo/logo%402x.png" /></Link>
                                </div>
                                <nav className="main-menu">
                                    <ul className="navigation ">
                                        <li className="has-child current-menu">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="has-child style-2">
                                            <Link to="/listing">Listing</Link>
                                        </li>
                                        <li className="has-child"><a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li className="has-child">
                                                    <a href="#">Agents</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link to="/pages/agents">Agents</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/pages/agents-details">Agents Details</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-child"><a href="#">Agencies</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link to="/pages/agencies">Agencies List</Link>
                                                        </li>

                                                        <li>
                                                            <Link to="/pages/agencies-details">Agencies
                                                                Details</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/home-loan-process">Home Loan Process</Link>
                                                </li>


                                                <li>
                                                    <Link to="/career">Career</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faqs">Faq's</Link>
                                                    </li>
                                                <li><Link to="/dashboard">Dashboard</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-child "><a href="#">Blog</a>
                                            <ul className="submenu">
                                                <li><Link to="/blog" >Blog List</Link></li>
                                                <li><Link to="/blog-details" >Blog Detail</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                                <div className="header-right">
                                    <div className="phone-number">
                                        <div className="icons">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
                                                    stroke="black" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>

                                        </div>
                                        <p>(603) 555-0123</p>
                                    </div>
                                    <div className="box-user tf-action-btns">
                                        <div className="user ">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.749 6C15.749 6.99456 15.3539 7.94839 14.6507 8.65165C13.9474 9.35491 12.9936 9.75 11.999 9.75C11.0044 9.75 10.0506 9.35491 9.34735 8.65165C8.64409 7.94839 8.249 6.99456 8.249 6C8.249 5.00544 8.64409 4.05161 9.34735 3.34835C10.0506 2.64509 11.0044 2.25 11.999 2.25C12.9936 2.25 13.9474 2.64509 14.6507 3.34835C15.3539 4.05161 15.749 5.00544 15.749 6ZM4.5 20.118C4.53213 18.1504 5.33634 16.2742 6.73918 14.894C8.14202 13.5139 10.0311 12.7405 11.999 12.7405C13.9669 12.7405 15.856 13.5139 17.2588 14.894C18.6617 16.2742 19.4659 18.1504 19.498 20.118C17.1454 21.1968 14.5871 21.7535 11.999 21.75C9.323 21.75 6.783 21.166 4.5 20.118Z"
                                                    stroke="#2C2E33" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="name">
                                            Themesflat
                                            <i className="icon-CaretDown"></i>
                                        </div>
                                        <div className=" menu-user">
                                            <a className="dropdown-item" href="dashboard.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M16.668 2.5H12.5013C12.0411 2.5 11.668 2.8731 11.668 3.33333V5.83333C11.668 6.29357 12.0411 6.66667 12.5013 6.66667H16.668C17.1282 6.66667 17.5013 6.29357 17.5013 5.83333V3.33333C17.5013 2.8731 17.1282 2.5 16.668 2.5Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M16.668 10H12.5013C12.0411 10 11.668 10.3731 11.668 10.8333V16.6667C11.668 17.1269 12.0411 17.5 12.5013 17.5H16.668C17.1282 17.5 17.5013 17.1269 17.5013 16.6667V10.8333C17.5013 10.3731 17.1282 10 16.668 10Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M7.5 13.3334H3.33333C2.8731 13.3334 2.5 13.7065 2.5 14.1667V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H7.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V14.1667C8.33333 13.7065 7.96024 13.3334 7.5 13.3334Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                Dashboards</a>
                                            <a className="dropdown-item" href="my-profile.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15 15C16.3807 15 17.5 13.8807 17.5 12.5C17.5 11.1193 16.3807 10 15 10C13.6193 10 12.5 11.1193 12.5 12.5C12.5 13.8807 13.6193 15 15 15Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M7.5013 9.16667C9.34225 9.16667 10.8346 7.67428 10.8346 5.83333C10.8346 3.99238 9.34225 2.5 7.5013 2.5C5.66035 2.5 4.16797 3.99238 4.16797 5.83333C4.16797 7.67428 5.66035 9.16667 7.5013 9.16667Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M8.33464 12.5H5.0013C4.11725 12.5 3.2694 12.8512 2.64428 13.4763C2.01916 14.1014 1.66797 14.9493 1.66797 15.8333V17.5"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M18.082 13.6666L17.332 13.4166" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M12.668 11.5834L11.918 11.3334" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M13.832 15.5834L14.082 14.8334" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M15.918 10.1666L16.168 9.41663" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M16.3333 15.5833L16 14.75" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M14.0013 10.25L13.668 9.41663" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M11.918 13.8333L12.7513 13.5" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M17.25 11.5L18.0833 11.1666" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                My profile</a>
                                            <a className="dropdown-item" href="my-package.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.5 7.5H17.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V7.5Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M2.5 7.50004L4.54167 3.41671C4.6808 3.14059 4.89401 2.90861 5.15744 2.74673C5.42087 2.58484 5.72414 2.49943 6.03333 2.50004H13.9667C14.2773 2.49788 14.5823 2.58256 14.8473 2.74453C15.1124 2.9065 15.3269 3.13931 15.4667 3.41671L17.5 7.50004"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M10 2.5V7.5" stroke="#A8ABAE" strokeWidth="1.4"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                My package</a>
                                            <a className="dropdown-item" href="my-favorites.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.33203 18.3333H14.9987C15.4407 18.3333 15.8646 18.1577 16.1772 17.8451C16.4898 17.5326 16.6654 17.1087 16.6654 16.6666V5.83329L12.4987 1.66663H4.9987C4.55667 1.66663 4.13275 1.84222 3.82019 2.15478C3.50763 2.46734 3.33203 2.89127 3.33203 3.33329V4.99996"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M11.668 1.66663V4.99996C11.668 5.44199 11.8436 5.86591 12.1561 6.17847C12.4687 6.49103 12.8926 6.66663 13.3346 6.66663H16.668"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M8.574 8.91662C8.28934 8.63239 7.92648 8.43938 7.53169 8.3622C7.1369 8.28503 6.72807 8.32718 6.35733 8.48329C6.11566 8.58329 5.89066 8.73329 5.70733 8.92496L5.41566 9.20829L5.124 8.92496C4.84097 8.641 4.48002 8.44744 4.08689 8.36882C3.69376 8.29019 3.28613 8.33003 2.91566 8.48329C2.66566 8.58329 2.449 8.73329 2.25733 8.92496C1.46566 9.70829 1.424 11.0333 2.424 12.0416L5.41566 15L8.41566 12.0416C9.41566 11.0333 9.36566 9.70829 8.574 8.92496V8.91662Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                My favorites (1)</a>
                                            <a className="dropdown-item" href="my-save-search.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.91797 16.6666H3.33464C2.89261 16.6666 2.46868 16.491 2.15612 16.1785C1.84356 15.8659 1.66797 15.442 1.66797 15V4.16662C1.66797 3.7246 1.84356 3.30067 2.15612 2.98811C2.46868 2.67555 2.89261 2.49996 3.33464 2.49996H6.58464C6.86337 2.49723 7.13835 2.56445 7.38438 2.69547C7.63042 2.8265 7.83967 3.01715 7.99297 3.24996L8.66797 4.24996C8.81973 4.4804 9.02632 4.66956 9.26922 4.80046C9.51212 4.93136 9.78371 4.99991 10.0596 4.99996H16.668C17.11 4.99996 17.5339 5.17555 17.8465 5.48811C18.159 5.80067 18.3346 6.2246 18.3346 6.66662V10.0833"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M17.5013 17.5L15.918 15.9166" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M14.168 16.6666C15.5487 16.6666 16.668 15.5473 16.668 14.1666C16.668 12.7859 15.5487 11.6666 14.168 11.6666C12.7873 11.6666 11.668 12.7859 11.668 14.1666C11.668 15.5473 12.7873 16.6666 14.168 16.6666Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                My save searches</a>
                                            <a className="dropdown-item" href="review.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M6.66797 9.99996C7.11 9.99996 7.53392 9.82436 7.84648 9.5118C8.15904 9.19924 8.33464 8.77532 8.33464 8.33329V6.66663H6.66797"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M11.668 9.99996C12.11 9.99996 12.5339 9.82436 12.8465 9.5118C13.159 9.19924 13.3346 8.77532 13.3346 8.33329V6.66663H11.668"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                Reviews</a>
                                            <a className="dropdown-item" href="my-property.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.082 18.3333H14.9987C15.4407 18.3333 15.8646 18.1577 16.1772 17.8451C16.4898 17.5326 16.6654 17.1087 16.6654 16.6666V5.83329L12.4987 1.66663H4.9987C4.55667 1.66663 4.13275 1.84222 3.82019 2.15478C3.50763 2.46734 3.33203 2.89127 3.33203 3.33329V6.66663"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M11.668 1.66663V4.99996C11.668 5.44199 11.8436 5.86591 12.1561 6.17847C12.4687 6.49103 12.8926 6.66663 13.3346 6.66663H16.668"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M2.49828 10.9167C2.24146 11.0649 2.02884 11.279 1.88235 11.5368C1.73587 11.7946 1.66082 12.0868 1.66494 12.3833V15.0833C1.65529 15.3802 1.72514 15.6742 1.86726 15.935C2.00937 16.1958 2.2186 16.4139 2.47328 16.5667L4.99828 18.0833C5.25385 18.2356 5.5455 18.3166 5.84297 18.3181C6.14044 18.3195 6.43288 18.2414 6.68994 18.0917L9.16494 16.5833C9.42176 16.4351 9.63438 16.221 9.78087 15.9632C9.92735 15.7054 10.0024 15.4132 9.99828 15.1167V12.4167C10.0079 12.1198 9.93808 11.8258 9.79596 11.565C9.65385 11.3042 9.44462 11.0861 9.18994 10.9333L6.66494 9.41666C6.40937 9.26442 6.11771 9.18337 5.82025 9.1819C5.52278 9.18044 5.23033 9.25862 4.97328 9.40832L2.49828 10.9167Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M5.83203 14.1666V18.3333" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M9.7513 11.8334L5.83464 14.1667L1.91797 11.8334"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                My properties
                                            </a>
                                            <a className="dropdown-item " href="add-property.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.9987 4.16663L12.987 2.15496C12.6745 1.84238 12.2507 1.66672 11.8087 1.66663H4.9987C4.55667 1.66663 4.13275 1.84222 3.82019 2.15478C3.50763 2.46734 3.33203 2.89127 3.33203 3.33329V16.6666C3.33203 17.1087 3.50763 17.5326 3.82019 17.8451C4.13275 18.1577 4.55667 18.3333 4.9987 18.3333H14.9987C15.4407 18.3333 15.8646 18.1577 16.1772 17.8451C16.4898 17.5326 16.6654 17.1087 16.6654 16.6666"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path
                                                        d="M17.8168 10.5217C18.1487 10.1897 18.3352 9.73947 18.3352 9.27C18.3352 8.80054 18.1487 8.3503 17.8168 8.01834C17.4848 7.68637 17.0346 7.49988 16.5651 7.49988C16.0956 7.49988 15.6454 7.68637 15.3134 8.01834L11.9718 11.3617C11.7736 11.5597 11.6286 11.8044 11.5501 12.0733L10.8526 14.465C10.8317 14.5367 10.8304 14.6127 10.849 14.6851C10.8675 14.7574 10.9052 14.8235 10.958 14.8763C11.0108 14.9291 11.0768 14.9668 11.1492 14.9853C11.2216 15.0038 11.2976 15.0026 11.3693 14.9817L13.7609 14.2842C14.0298 14.2057 14.2746 14.0606 14.4726 13.8625L17.8168 10.5217Z"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M6.66797 15H7.5013" stroke="#A8ABAE" strokeWidth="1.4"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                Add property</a>
                                            <div className="dropdown-item ">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.749 6C15.749 6.99456 15.3539 7.94839 14.6507 8.65165C13.9474 9.35491 12.9936 9.75 11.999 9.75C11.0044 9.75 10.0506 9.35491 9.34735 8.65165C8.64409 7.94839 8.249 6.99456 8.249 6C8.249 5.00544 8.64409 4.05161 9.34735 3.34835C10.0506 2.64509 11.0044 2.25 11.999 2.25C12.9936 2.25 13.9474 2.64509 14.6507 3.34835C15.3539 4.05161 15.749 5.00544 15.749 6ZM4.5 20.118C4.53213 18.1504 5.33634 16.2742 6.73918 14.894C8.14202 13.5139 10.0311 12.7405 11.999 12.7405C13.9669 12.7405 15.856 13.5139 17.2588 14.894C18.6617 16.2742 19.4659 18.1504 19.498 20.118C17.1454 21.1968 14.5871 21.7535 11.999 21.75C9.323 21.75 6.783 21.166 4.5 20.118Z"
                                                        stroke="#A8ABAE" strokeWidth="1.5" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                </svg>
                                                <div className="d-flex wrap-login">
                                                    <a href="#modalLogin" data-bs-toggle="modal">
                                                        login</a>
                                                    <span>/</span>
                                                    <a href="#modalRegister" data-bs-toggle="modal">
                                                        register </a>
                                                </div>
                                            </div>
                                            <a className="dropdown-item" href="index.html">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                                                        stroke="#A8ABAE" strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M13.332 14.1667L17.4987 10L13.332 5.83337" stroke="#A8ABAE"
                                                        strokeWidth="1.4" strokeLinecap="round"
                                                        strokeLinejoin="round" />
                                                    <path d="M17.5 10H7.5" stroke="#A8ABAE" strokeWidth="1.4"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                Logout</a>
                                        </div>
                                    </div>
                                    <div className="btn-add">
                                        <a className="tf-btn style-border pd-23" href="add-property.html">Add property</a>
                                    </div>
                                    <div className="mobile-button" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile"
                                        aria-controls="menu-mobile">
                                        <i className="icon-menu"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
