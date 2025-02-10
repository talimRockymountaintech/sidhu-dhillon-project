import React from 'react'
import DashboarsSidebar from '../components/DashboarsSidebar'

const Dashboard = () => {
  return (
    <div id="wrapper" class="bg-4 ">
      <div class="page-layout">

        {/* <!-- sidebar dashboard --> */}
        <DashboarsSidebar />
        {/* <!-- /.end sidebar dashboard -->

<!-- .main-content --> */}
        <div class="main-content w-100">
          <div class="main-content-inner  ">
            <div class="button-show-hide show-mb">
              <span class="body-1">Show Dashboard</span>
            </div>
            <div class="flat-counter-v2 tf-counter">
              <div class="counter-box">
                <div class="box-icon">
                  <span class="icon ">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.5 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V30C6 30.7956 6.31607 31.5587 6.87868 32.1213C7.44129 32.6839 8.20435 33 9 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V10.5L22.5 3Z"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M21 3V9C21 9.79565 21.3161 10.5587 21.8787 11.1213C22.4413 11.6839 23.2044 12 24 12H30"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M12 19.5H15" stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M21 19.5H24" stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M12 25.5H15" stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M21 25.5H24" stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>

                  </span>
                </div>
                <div class="content-box">
                  <div class="title-count text-variant-1">Your listing</div>
                  <div class="box-count d-flex align-items-end">
                    <div class="number">32</div>
                    <span class="text">/50 remaining</span>
                  </div>

                </div>
              </div>
              <div class="counter-box">
                <div class="box-icon">
                  <span class="icon "><svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5061 32.991C15.4409 33.0945 12.4177 32.2559 9.84374 30.5882C7.26982 28.9206 5.26894 26.504 4.11073 23.6642C2.95253 20.8243 2.69265 17.6977 3.36614 14.7056C4.03962 11.7135 5.61409 8.9998 7.87737 6.9301C10.1407 4.86039 12.984 3.5342 16.0242 3.13022C19.0644 2.72624 22.1554 3.2639 24.8807 4.67074C27.6059 6.07757 29.8344 8.28598 31.2659 10.9984C32.6974 13.7107 33.263 16.7967 32.8866 19.8405"
                      stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M18 9V18L21 19.5" stroke="#F1913D" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 27L27 33L33 27" stroke="#F1913D" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27 21V33" stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg> </span>
                </div>
                <div class="content-box">
                  <div class="title-count text-variant-1">Pending</div>
                  <div class="box-count d-flex align-items-end">
                    <div class="number">02</div>
                  </div>
                </div>
              </div>
              <div class="counter-box">
                <div class="box-icon">
                  <span class="icon ">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V10.5L22.5 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V9"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M21 3V9C21 9.79565 21.3161 10.5587 21.8787 11.1213C22.4413 11.6839 23.2044 12 24 12H30"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M15.4348 16.05C14.9224 15.5384 14.2692 15.191 13.5586 15.0521C12.848 14.9132 12.1121 14.989 11.4448 15.27C11.0098 15.45 10.6048 15.72 10.2748 16.065L9.74976 16.575L9.22476 16.065C8.71531 15.5539 8.0656 15.2055 7.35797 15.064C6.65033 14.9225 5.9166 14.9942 5.24976 15.27C4.79976 15.45 4.40976 15.72 4.06476 16.065C2.63976 17.475 2.56476 19.86 4.36476 21.675L9.74976 27L15.1498 21.675C16.9498 19.86 16.8598 17.475 15.4348 16.065V16.05Z"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>

                  </span>
                </div>
                <div class="content-box">
                  <div class="title-count text-variant-1">Favorites</div>
                  <div class="d-flex align-items-end">
                    <div class="number">06</div>
                  </div>

                </div>
              </div>
              <div class="counter-box">
                <div class="box-icon">
                  <span class="icon">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M31.5 22.5C31.5 23.2956 31.1839 24.0587 30.6213 24.6213C30.0587 25.1839 29.2956 25.5 28.5 25.5H10.5L4.5 31.5V7.5C4.5 6.70435 4.81607 5.94129 5.37868 5.37868C5.94129 4.81607 6.70435 4.5 7.5 4.5H28.5C29.2956 4.5 30.0587 4.81607 30.6213 5.37868C31.1839 5.94129 31.5 6.70435 31.5 7.5V22.5Z"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M12 18C12.7956 18 13.5587 17.6839 14.1213 17.1213C14.6839 16.5587 15 15.7956 15 15V12H12"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M21 18C21.7956 18 22.5587 17.6839 23.1213 17.1213C23.6839 16.5587 24 15.7956 24 15V12H21"
                        stroke="#F1913D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>

                  </span>
                </div>
                <div class="content-box">
                  <div class="title-count text-variant-1">Reviews</div>
                  <div class="d-flex align-items-end">
                    <div class="number">1.483</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-9 ">
                <div class="widget-box-2 wd-listing mb-24">
                  <h3 class="title">My Favorites</h3>
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
                                  <img src="images/home/house-db-1.jpg" alt="images" />
                                </div>
                                <div class="content">
                                  <div class="title"><a href="property-detail-v1.html"
                                    class="link">Gorgeous Apartment Building</a>
                                  </div>
                                  <div class="text-date">Posting date: March 22, 2024
                                  </div>
                                  <div class="text-btn text-color-primary">$7,500</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>April 10, 2024</span>
                            </td>
                            <td>
                              <ul class="list-action">
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  Edit</a>
                                </li>
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>

                                  Sold</a>
                                </li>
                                <li><a class="remove-file item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                  <img src="images/home/house-db-2.jpg" alt="images" />
                                </div>
                                <div class="content">
                                  <div class="title"><a href="property-detail-v1.html"
                                    class="link">Mountain Mist Retreat, Aspen</a>
                                  </div>
                                  <div class="text-date">Posting date: March 22, 2024
                                  </div>
                                  <div class="text-btn text-color-primary">$7,500</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>April 10, 2024</span>
                            </td>
                            <td>
                              <ul class="list-action">
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  Edit</a>
                                </li>
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>

                                  Sold</a>
                                </li>
                                <li><a class="remove-file item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                  <img src="images/home/house-db-3.jpg" alt="images" />
                                </div>
                                <div class="content">
                                  <div class="title"><a href="property-detail-v1.html"
                                    class="link">Lakeview Haven, Lake Tahoe</a>
                                  </div>
                                  <div class="text-date">Posting date: March 22, 2024
                                  </div>
                                  <div class="text-btn text-color-primary">$7,500</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>April 10, 2024</span>
                            </td>
                            <td>
                              <ul class="list-action">
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  Edit</a>
                                </li>
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>

                                  Sold</a>
                                </li>
                                <li><a class="remove-file item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                  <img src="images/home/house-db-4.jpg" alt="images" />
                                </div>
                                <div class="content">
                                  <div class="title"><a href="property-detail-v1.html"
                                    class="link">Coastal Serenity Cottage</a> </div>
                                  <div class="text-date">Posting date: March 22, 2024
                                  </div>
                                  <div class="text-btn text-color-primary">$7,500</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>April 10, 2024</span>
                            </td>
                            <td>
                              <ul class="list-action">
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  Edit</a>
                                </li>
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>

                                  Sold</a>
                                </li>
                                <li><a class="remove-file item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                  <img src="images/home/house-db-5.jpg" alt="images" />
                                </div>
                                <div class="content">
                                  <div class="title"><a href="property-detail-v1.html"
                                    class="link">Sunset Heights Estate</a> </div>
                                  <div class="text-date">Posting date: March 22, 2024
                                  </div>
                                  <div class="text-btn text-color-primary">$7,500</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>April 10, 2024</span>
                            </td>
                            <td>
                              <ul class="list-action">
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  Edit</a>
                                </li>
                                <li><a class="item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                      stroke="#A3ABB0" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>

                                  Sold</a>
                                </li>
                                <li><a class="remove-file item">
                                  <svg width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <li class="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">...</a>
                      </li>
                      <li >
                        <a href="#">3</a>
                      </li>
                      <li class="arrow">
                        <a href="#"><i class="icon-arrow-right"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="widget-box-2 wd-chart">
                  <h5 class="title">Page Inside</h5>
                  <div class="wd-filter-date">
                    <div class="left">
                      <div class="dates active">Day</div>
                      <div class="dates">Week</div>
                      <div class="dates">Month</div>
                      <div class="dates">Year</div>
                    </div>
                    <div class="right">
                      <form>
                        <fieldset class="ip-group icon">
                          <input type="text" id="datepicker3" class="ip-datepicker icon"
                            placeholder="From Date" />
                        </fieldset>
                      </form>
                      <form>
                        <fieldset class="ip-group icon">
                          <input type="text" id="datepicker4" class="ip-datepicker icon"
                            placeholder="To Date" />
                        </fieldset>
                      </form>
                    </div>
                  </div>
                  <div class="chart-box">
                    <canvas id="lineChart"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-xl-3">
                <div class="widget-box-2 mess-box mb-20">
                  <h5 class="title">Messages</h5>
                  <ul class="list-mess">
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png9.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Themesflat</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque
                        vulputate tincidunt. Maecenas lorem sapien </p>
                    </li>
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png10.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">ThemeMu</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Nullam lacinia lorem id sapien suscipit, vitae pellentesque metus maximus.
                        Duis
                        eu mollis dolor. Proin faucibus eu lectus a eleifend </p>
                    </li>
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png11.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Cameron Williamson</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>In consequat lacus augue, a vestibulum est aliquam non</p>
                    </li>
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png12.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Esther Howard</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Cras congue in justo vel dapibus. Praesent euismod, lectus et aliquam pretium
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="widget-box-2 mess-box">
                  <h5 class="title">Recent Reviews</h5>
                  <ul class="list-mess">
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png13.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Bessie Cooper</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Maecenas eu lorem et urna accumsan vestibulum vel vitae magna. </p>
                      <div class="ratings">
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                      </div>
                    </li>
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png14.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Annette Black</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Nullam rhoncus dolor arcu, et commodo tellus semper vitae. Aenean finibus
                        tristique lectus, ac lobortis mauris venenatis ac. </p>
                      <div class="ratings">
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                      </div>
                    </li>
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png15.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Ralph Edwards</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra
                        semper
                        convallis. Integer vestibulum tempus tincidunt. </p>
                      <div class="ratings">
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                      </div>
                    </li>
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png16.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Jerome Bell</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Fusce sit amet purus eget quam eleifend hendrerit nec a erat. Sed turpis
                        neque,
                        iaculis blandit viverra ut, dapibus eget nisi. </p>
                      <div class="ratings">
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                      </div>
                    </li>
                    <li class="mess-item">
                      <div class="user-box">
                        <div class="avatar">
                          <img src="images/avatar/avt-png17.png" alt="avt" />
                        </div>
                        <div class="content">
                          <div class="name fw-6">Albert Flores</div>
                          <span class="caption-2 text-variant-3">3 day ago</span>
                        </div>
                      </div>
                      <p>Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at dui
                        tincidunt nulla semper venenatis at et magna. Mauris turpis lorem, ultricies
                        vel
                        justo sed.</p>
                      <div class="ratings">
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                        <i class="icon-start"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-9">
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
            </div>

          </div>

          <div class="overlay-dashboard"></div>
        </div>
        {/* <!-- /.main-content --> */}

      </div>
    </div>
  )
}

export default Dashboard