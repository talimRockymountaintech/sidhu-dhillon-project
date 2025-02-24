import React from 'react'
import DashboarsSidebar from '../../components/DashboarsSidebar'

const MySearches = () => {
    return (
        <>
            <div id="wrapper" class="bg-4 ">
                <div class="page-layout">
                    <DashboarsSidebar />
                    {/* <!-- .main-content --> */}
            <div class="main-content w-100">
                <div class="main-content-inner style-3">
                    <div class="button-show-hide show-mb">
                        <span class="body-1">Show Dashboard</span>
                    </div>
                    <div class="widget-box-2 wd-listing">
                        <h3 class="title">My Favorites</h3>
                        <div class="tf-new-listing w-100">
                            <div class="new-listing wrap-table ">
                                <div class="table-content">
                                    <div class="wrap-listing table-responsive">
                                        <table class="table-save-search">
                                            <thead>
                                                <tr>
                                                    <th class="fw-6">Title</th>
                                                    <th class="fw-6">Parameters</th>
                                                    <th class="fw-6">Email</th>
                                                    <th class="fw-6">Date Published</th>
                                                    <th class="fw-6">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <!-- col 1 --> */}
                                                <tr class="file-delete">
                                                    <td>
                                                        <a href="#">Alaska</a>
                                                    </td>
                                                    <td>
                                                        <div>Status: <span class="fw-6">for-rent</span> |
                                                            Province/State:
                                                            <span class="fw-6">alaska</span> |
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>themesflat@gmail.com</div>
                                                    </td>
                                                    <td>
                                                        <div>October 14, 2024</div>
                                                    </td>
                                                    <td>

                                                        <ul class="list-action">
                                                            <li class=""><a class="remove-file item">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                                                            stroke="#A3ABB0" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                    Delete</a></li>
                                                        </ul>

                                                    </td>
                                                </tr>
                                                {/* <!-- col 2 --> */}
                                                <tr class="file-delete">
                                                    <td>
                                                        <a href="#">Baths</a>
                                                    </td>
                                                    <td>
                                                        <div>Status: <span class="fw-6">for-rent</span> |
                                                            Province/State:
                                                            <span class="fw-6">baths</span> |
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>themesflat@gmail.com</div>
                                                    </td>
                                                    <td>
                                                        <div>October 14, 2024</div>
                                                    </td>
                                                    <td>

                                                        <ul class="list-action">
                                                            <li class=""><a class="remove-file item">
                                                                    <svg width="16" height="16" viewBox="0 0 16 16"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                                                            stroke="#A3ABB0" stroke-linecap="round"
                                                                            stroke-linejoin="round" />
                                                                    </svg>
                                                                    Delete</a></li>
                                                        </ul>

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </>
    )
}

export default MySearches