import React from 'react'
import DashboarsSidebar from '../../components/DashboarsSidebar'

export const MyProperties = () => {
    return (
        <>
            <div id="wrapper" class="bg-4 ">
                <div class="page-layout">
                    <DashboarsSidebar />
                    {/* <!-- .main-content --> */}
                    <div class="main-content w-100">
                        <div class="main-content-inner wrap-dashboard-content">
                            <div class="button-show-hide show-mb">
                                <span class="body-1">Show Dashboard</span>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <form>
                                        <fieldset class="box-fieldset">
                                            <label>
                                                Post Status:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">Select</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option selected">Select</li>
                                                    <li data-value="2" class="option">Publish</li>
                                                    <li data-value="3" class="option">Pending</li>
                                                    <li data-value="3" class="option">Hidden</li>
                                                    <li data-value="3" class="option">Sold</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                <div class="col-md-9">
                                    <form>
                                        <fieldset class="box-fieldset">
                                            <label>
                                                Search:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" placeholder="Search by title" />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div class="widget-box-2 wd-listing mt-20">
                                <h3 class="title">My Properties</h3>
                                <div class="wrap-table">
                                    <div class="table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Listing</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="file-delete">
                                                    <td>
                                                        <div class="listing-box">
                                                            <div class="images">
                                                                <img src="../images/home/house-db-1.jpg" alt="images" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="title"><a href="property-detail-v1.html"
                                                                    class="link">Gorgeous Apartment Building</a> </div>
                                                                <div class="text-date">Posting date: March 22, 2024</div>
                                                                <div class="text-btn text-color-primary">$7,500</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="status-wrap">
                                                            <a href="#" class="btn-status"> Approved</a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-action">
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Edit</a>
                                                            </li>
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>

                                                                Sold</a>
                                                            </li>
                                                            <li><a class="remove-file item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                {/* <!-- col 2 --> */}
                                                <tr class="file-delete">
                                                    <td>
                                                        <div class="listing-box">
                                                            <div class="images">
                                                                <img src="../images/home/house-db-2.jpg" alt="images" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="title"><a href="property-detail-v1.html"
                                                                    class="link">Mountain Mist Retreat, Aspen</a> </div>
                                                                <div class="text-date">Posting date: March 22, 2024</div>
                                                                <div class="text-btn text-color-primary">$7,500</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="status-wrap">
                                                            <a href="#" class="btn-status"> Approved</a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-action">
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Edit</a>
                                                            </li>
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>

                                                                Sold</a>
                                                            </li>
                                                            <li><a class="remove-file item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                {/* <!-- col 3 --> */}
                                                <tr class="file-delete">
                                                    <td>
                                                        <div class="listing-box">
                                                            <div class="images">
                                                                <img src="../images/home/house-db-3.jpg" alt="images" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="title"><a href="property-detail-v1.html"
                                                                    class="link">Lakeview Haven, Lake Tahoe</a> </div>
                                                                <div class="text-date">Posting date: March 22, 2024</div>
                                                                <div class="text-btn text-color-primary">$7,500</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="status-wrap">
                                                            <a href="#" class="btn-status pending"> Pending</a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-action">
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Edit</a>
                                                            </li>
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>

                                                                Sold</a>
                                                            </li>
                                                            <li><a class="remove-file item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                {/* <!-- col 4 --> */}
                                                <tr class="file-delete">
                                                    <td>
                                                        <div class="listing-box">
                                                            <div class="images">
                                                                <img src="../images/home/house-db-4.jpg" alt="images" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="title"><a href="property-detail-v1.html"
                                                                    class="link">Coastal Serenity Cottage</a> </div>
                                                                <div class="text-date">Posting date: March 22, 2024</div>
                                                                <div class="text-btn text-color-primary">$7,500</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="status-wrap">
                                                            <a href="#" class="btn-status sold">Sold</a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-action">
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Edit</a>
                                                            </li>
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>

                                                                Sold</a>
                                                            </li>
                                                            <li><a class="remove-file item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                {/* <!-- col 5 --> */}
                                                <tr class="file-delete">
                                                    <td>
                                                        <div class="listing-box">
                                                            <div class="images">
                                                                <img src="../images/home/house-db-5.jpg" alt="images" />
                                                            </div>
                                                            <div class="content">
                                                                <div class="title"><a href="property-detail-v1.html"
                                                                    class="link">Sunset Heights Estate</a> </div>
                                                                <div class="text-date">Posting date: March 22, 2024</div>
                                                                <div class="text-btn text-color-primary">$7,500</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="status-wrap">
                                                            <a href="#" class="btn-status pending"> Pending</a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-action">
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Edit</a>
                                                            </li>
                                                            <li><a class="item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>

                                                                Sold</a>
                                                            </li>
                                                            <li><a class="remove-file item">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                                                        stroke="#A3ABB0" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                Delete</a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>

                                    <ul class="wg-pagination ">
                                        <li class="arrow">
                                            <a href="#"><i class="icon-arrow-left"></i></a>
                                        </li>
                                        <li>
                                            <a href="#">1</a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">...</a>
                                        </li>
                                        <li class="active">
                                            <a href="#">20</a>
                                        </li>
                                        <li class="arrow">
                                            <a href="#"><i class="icon-arrow-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- .footer-dashboard --> */}
                            <div class="footer-dashboard">
                                <p>Copyright © 2024 Popty</p>
                                <ul class="list">
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                            {/* <!-- .footer-dashboard --> */}
                        </div>
                        <div class="overlay-dashboard"></div>


                    </div>
                    {/* <!-- /.main-content --> */}
                </div>
            </div></>
    )
}
