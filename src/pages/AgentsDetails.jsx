import React from 'react'

const AgentsDetails = () => {
  return (
    <div>
        {/* flat-title */}
        <section class="flat-title ">
            <div class="tf-container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-inner ">
                            <ul class="breadcrumb">
                                <li><a class="home fw-6 text-color-3" href="index.html">Home</a></li>
                                <li>Property Listing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* flat-title */}
        {/* <!-- .main-content --> */}
        <div class="page-content  ">
            {/* <!-- page-blog-details --> */}
            <section class="section-agents-details  tf-spacing-4">
                <div class="tf-container">
                    <div class="row">
                        <div class="col-lg-8 ">
                            <div class="agent-details hover-img effec-overlay mb-48">
                                <div class="image-wrap ">
                                    <a href="agents-details.html">
                                        <img class="lazyload" data-src="../images/section/agent-details.jpg"
                                            src="../images/section/agent-details.jpg" alt=""/>
                                    </a>
                                    <ul class="tf-social style-3">
                                        <li><a href="#"><i class="icon-fb"></i></a></li>
                                        <li><a href="#"><i class="icon-X"></i></a></li>
                                        <li><a href="#"><i class="icon-linked"></i></a></li>
                                        <li><a href="#"><i class="icon-ins"></i></a></li>
                                    </ul>
                                </div>
                                <div class="content-inner">
                                    <div class="author">
                                        <h4 class="name "> <a href="agents-details.html">Cameron Williamson</a></h4>
                                        <p class="font-poppins">Company Agent at <a href="#" class="fw-7">Themesflat</a>
                                        </p>
                                    </div>
                                    <ul class="info">
                                        <li> <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.5 7V4M9.5 7H12.5M9.5 7L13.5 3M11.5 15C5.97733 15 1.5 10.5227 1.5 5V3.5C1.5 3.10218 1.65804 2.72064 1.93934 2.43934C2.22064 2.15804 2.60218 2 3 2H3.91467C4.25867 2 4.55867 2.234 4.642 2.568L5.37933 5.51667C5.45267 5.81 5.34333 6.118 5.10133 6.29867L4.23933 6.94533C4.11595 7.03465 4.02467 7.16138 3.97903 7.3067C3.93339 7.45202 3.93584 7.60818 3.986 7.752C4.38725 8.84341 5.02094 9.83456 5.84319 10.6568C6.66544 11.4791 7.65659 12.1128 8.748 12.514C9.042 12.622 9.36667 12.5113 9.55467 12.2607L10.2013 11.3987C10.2898 11.2805 10.4113 11.1911 10.5504 11.1416C10.6895 11.0922 10.8401 11.0849 10.9833 11.1207L13.932 11.858C14.2653 11.9413 14.5 12.2413 14.5 12.5853V13.5C14.5 13.8978 14.342 14.2794 14.0607 14.5607C13.7794 14.842 13.3978 15 13 15H11.5Z"
                                                    stroke="#8E8E93" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span class="font-mulish fw-7">+7-445-556-8337</span>
                                        </li>
                                        <li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5"
                                                    stroke="#8E8E93" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <a href="#">themesflat@gmail.com</a>
                                        </li>
                                        <li>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                                                    stroke="#8E8E93" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                                                    stroke="#8E8E93" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                            1901 Thornridge Cir. Shiloh, Hawaii 81063
                                        </li>
                                    </ul>
                                    <div class="content">
                                        <h6 class="title">About Cameron Williamson</h6>
                                        <p class="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Aliquam
                                            risus leo, blandit vitae diam a, vestibulum viverra nisi. Vestibulum
                                            ullamcorper
                                            velit eget mattis aliquam. Proin dapibus luctus pulvinar. Integer et libero
                                            ut
                                            purus bibendum </p>
                                        <a href="https://vithemes.com/" class="tf-btn-link ">
                                            <span>
                                                Read More
                                            </span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_2450_13860)">
                                                    <path
                                                        d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6024 18.3346 10C18.3346 5.39765 14.6037 1.66669 10.0013 1.66669C5.39893 1.66669 1.66797 5.39765 1.66797 10C1.66797 14.6024 5.39893 18.3334 10.0013 18.3334Z"
                                                        stroke="#F1913D" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M6.66797 10H13.3346" stroke="#F1913D" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10 13.3334L13.3333 10L10 6.66669" stroke="#F1913D"
                                                        stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2450_13860">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="wg-listing">
                                <div class="heading">
                                    <div class="text-7 fw-6 text-color-heading">Listing</div>
                                    <div class="tf-houese-filter">
                                        <div class="tf-btns-filter text-1 tf-tab-link_all is--active" id="all">
                                            <span>All</span>
                                        </div>
                                        <div class="tf-btns-filter text-1 fw-3" id="tf_filter_rent">
                                            <span>For rent</span>
                                        </div>
                                        <div class="tf-btns-filter text-1 fw-3" id="tf_filter_sale">
                                            <span>For sale</span>
                                        </div>
                                    </div>
                                </div>
                                <div id="parent" class=" tf-grid-layout md-col-2">
                                    <div class="tf_filter_rent tf-filter-item tf-tab-content">
                                        <div class="box-house hover-img">
                                            <div class="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img class="lazyload" data-src="../images/section/box-house.jpg"
                                                        src="../images/section/box-house.jpg" alt=""/>
                                                </a>
                                                <ul class="box-tag flex gap-8 ">
                                                    <li class="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li class="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div class="list-btn flex gap-8 ">
                                                    <a href="#" class="btn-icon save hover-tooltip"><i
                                                            class="icon-save"></i>
                                                        <span class="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" class="btn-icon find hover-tooltip"><i
                                                            class="icon-find-plus"></i>
                                                        <span class="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h5 class="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p class="location text-1 flex items-center gap-6">
                                                    <i class="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Beds</li>
                                                    <li class="text-1 flex"><span>3</span>Baths</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="bot flex justify-between items-center">
                                                    <h5 class="price">
                                                        $8.600
                                                    </h5>
                                                    <div class="wrap-btn flex">
                                                        <a href="#" class="compare flex gap-8 items-center text-1"><svg
                                                                width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M16.6922 14.1922L14.1922 16.6922C14.0749 16.8095 13.9159 16.8754 13.75 16.8754C13.5842 16.8754 13.4251 16.8095 13.3078 16.6922C13.1905 16.5749 13.1247 16.4159 13.1247 16.25C13.1247 16.0842 13.1905 15.9251 13.3078 15.8078L14.7414 14.375H3.75C3.58424 14.375 3.42527 14.3092 3.30806 14.192C3.19085 14.0747 3.125 13.9158 3.125 13.75C3.125 13.5843 3.19085 13.4253 3.30806 13.3081C3.42527 13.1909 3.58424 13.125 3.75 13.125H14.7414L13.3078 11.6922C13.1905 11.5749 13.1247 11.4159 13.1247 11.25C13.1247 11.0842 13.1905 10.9251 13.3078 10.8078C13.4251 10.6905 13.5842 10.6247 13.75 10.6247C13.9159 10.6247 14.0749 10.6905 14.1922 10.8078L16.6922 13.3078C16.7503 13.3659 16.7964 13.4348 16.8279 13.5107C16.8593 13.5865 16.8755 13.6679 16.8755 13.75C16.8755 13.8321 16.8593 13.9135 16.8279 13.9893C16.7964 14.0652 16.7503 14.1342 16.6922 14.1922ZM5.80782 9.1922C5.92509 9.30947 6.08415 9.37536 6.25 9.37536C6.41586 9.37536 6.57492 9.30947 6.69219 9.1922C6.80947 9.07492 6.87535 8.91586 6.87535 8.75001C6.87535 8.58416 6.80947 8.4251 6.69219 8.30782L5.2586 6.87501H16.25C16.4158 6.87501 16.5747 6.80916 16.6919 6.69195C16.8092 6.57474 16.875 6.41577 16.875 6.25001C16.875 6.08425 16.8092 5.92528 16.6919 5.80807C16.5747 5.69086 16.4158 5.62501 16.25 5.62501H5.2586L6.69219 4.1922C6.80947 4.07492 6.87535 3.91586 6.87535 3.75001C6.87535 3.58416 6.80947 3.4251 6.69219 3.30782C6.57492 3.19055 6.41586 3.12466 6.25 3.12466C6.08415 3.12466 5.92509 3.19055 5.80782 3.30782L3.30782 5.80782C3.24971 5.86587 3.20361 5.9348 3.17215 6.01067C3.1407 6.08655 3.12451 6.16788 3.12451 6.25001C3.12451 6.33215 3.1407 6.41348 3.17215 6.48935C3.20361 6.56522 3.24971 6.63415 3.30782 6.6922L5.80782 9.1922Z"
                                                                    fill="#5C5E61" />
                                                            </svg>
                                                            Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            class="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tf_filter_sale tf-filter-item tf-tab-content">
                                        <div class="box-house hover-img">
                                            <div class="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img class="lazyload" data-src="../images/section/box-house-2.jpg"
                                                        src="../images/section/box-house-2.jpg" alt=""/>
                                                </a>
                                                <ul class="box-tag flex gap-8 ">
                                                    <li class="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li class="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div class="list-btn flex gap-8 ">
                                                    <a href="#" class="btn-icon save hover-tooltip"><i
                                                            class="icon-save"></i>
                                                        <span class="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" class="btn-icon find hover-tooltip"><i
                                                            class="icon-find-plus"></i>
                                                        <span class="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h5 class="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p class="location text-1 flex items-center gap-6">
                                                    <i class="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Beds</li>
                                                    <li class="text-1 flex"><span>3</span>Baths</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="bot flex justify-between items-center">
                                                    <h5 class="price">
                                                        $8.600
                                                    </h5>
                                                    <div class="wrap-btn flex">
                                                        <a href="#" class="compare flex gap-8 items-center text-1"><svg
                                                                width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M16.6922 14.1922L14.1922 16.6922C14.0749 16.8095 13.9159 16.8754 13.75 16.8754C13.5842 16.8754 13.4251 16.8095 13.3078 16.6922C13.1905 16.5749 13.1247 16.4159 13.1247 16.25C13.1247 16.0842 13.1905 15.9251 13.3078 15.8078L14.7414 14.375H3.75C3.58424 14.375 3.42527 14.3092 3.30806 14.192C3.19085 14.0747 3.125 13.9158 3.125 13.75C3.125 13.5843 3.19085 13.4253 3.30806 13.3081C3.42527 13.1909 3.58424 13.125 3.75 13.125H14.7414L13.3078 11.6922C13.1905 11.5749 13.1247 11.4159 13.1247 11.25C13.1247 11.0842 13.1905 10.9251 13.3078 10.8078C13.4251 10.6905 13.5842 10.6247 13.75 10.6247C13.9159 10.6247 14.0749 10.6905 14.1922 10.8078L16.6922 13.3078C16.7503 13.3659 16.7964 13.4348 16.8279 13.5107C16.8593 13.5865 16.8755 13.6679 16.8755 13.75C16.8755 13.8321 16.8593 13.9135 16.8279 13.9893C16.7964 14.0652 16.7503 14.1342 16.6922 14.1922ZM5.80782 9.1922C5.92509 9.30947 6.08415 9.37536 6.25 9.37536C6.41586 9.37536 6.57492 9.30947 6.69219 9.1922C6.80947 9.07492 6.87535 8.91586 6.87535 8.75001C6.87535 8.58416 6.80947 8.4251 6.69219 8.30782L5.2586 6.87501H16.25C16.4158 6.87501 16.5747 6.80916 16.6919 6.69195C16.8092 6.57474 16.875 6.41577 16.875 6.25001C16.875 6.08425 16.8092 5.92528 16.6919 5.80807C16.5747 5.69086 16.4158 5.62501 16.25 5.62501H5.2586L6.69219 4.1922C6.80947 4.07492 6.87535 3.91586 6.87535 3.75001C6.87535 3.58416 6.80947 3.4251 6.69219 3.30782C6.57492 3.19055 6.41586 3.12466 6.25 3.12466C6.08415 3.12466 5.92509 3.19055 5.80782 3.30782L3.30782 5.80782C3.24971 5.86587 3.20361 5.9348 3.17215 6.01067C3.1407 6.08655 3.12451 6.16788 3.12451 6.25001C3.12451 6.33215 3.1407 6.41348 3.17215 6.48935C3.20361 6.56522 3.24971 6.63415 3.30782 6.6922L5.80782 9.1922Z"
                                                                    fill="#5C5E61" />
                                                            </svg>
                                                            Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            class="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tf_filter_sale tf-filter-item tf-tab-content">
                                        <div class="box-house hover-img">
                                            <div class="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img class="lazyload" data-src="../images/section/box-house-5.jpg"
                                                        src="../images/section/box-house-5.jpg" alt=""/>
                                                </a>
                                                <ul class="box-tag flex gap-8 ">
                                                    <li class="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li class="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div class="list-btn flex gap-8 ">
                                                    <a href="#" class="btn-icon save hover-tooltip"><i
                                                            class="icon-save"></i>
                                                        <span class="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" class="btn-icon find hover-tooltip"><i
                                                            class="icon-find-plus"></i>
                                                        <span class="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h5 class="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p class="location text-1 flex items-center gap-6">
                                                    <i class="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Beds</li>
                                                    <li class="text-1 flex"><span>3</span>Baths</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="bot flex justify-between items-center">
                                                    <h5 class="price">
                                                        $8.600
                                                    </h5>
                                                    <div class="wrap-btn flex">
                                                        <a href="#" class="compare flex gap-8 items-center text-1"><svg
                                                                width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M16.6922 14.1922L14.1922 16.6922C14.0749 16.8095 13.9159 16.8754 13.75 16.8754C13.5842 16.8754 13.4251 16.8095 13.3078 16.6922C13.1905 16.5749 13.1247 16.4159 13.1247 16.25C13.1247 16.0842 13.1905 15.9251 13.3078 15.8078L14.7414 14.375H3.75C3.58424 14.375 3.42527 14.3092 3.30806 14.192C3.19085 14.0747 3.125 13.9158 3.125 13.75C3.125 13.5843 3.19085 13.4253 3.30806 13.3081C3.42527 13.1909 3.58424 13.125 3.75 13.125H14.7414L13.3078 11.6922C13.1905 11.5749 13.1247 11.4159 13.1247 11.25C13.1247 11.0842 13.1905 10.9251 13.3078 10.8078C13.4251 10.6905 13.5842 10.6247 13.75 10.6247C13.9159 10.6247 14.0749 10.6905 14.1922 10.8078L16.6922 13.3078C16.7503 13.3659 16.7964 13.4348 16.8279 13.5107C16.8593 13.5865 16.8755 13.6679 16.8755 13.75C16.8755 13.8321 16.8593 13.9135 16.8279 13.9893C16.7964 14.0652 16.7503 14.1342 16.6922 14.1922ZM5.80782 9.1922C5.92509 9.30947 6.08415 9.37536 6.25 9.37536C6.41586 9.37536 6.57492 9.30947 6.69219 9.1922C6.80947 9.07492 6.87535 8.91586 6.87535 8.75001C6.87535 8.58416 6.80947 8.4251 6.69219 8.30782L5.2586 6.87501H16.25C16.4158 6.87501 16.5747 6.80916 16.6919 6.69195C16.8092 6.57474 16.875 6.41577 16.875 6.25001C16.875 6.08425 16.8092 5.92528 16.6919 5.80807C16.5747 5.69086 16.4158 5.62501 16.25 5.62501H5.2586L6.69219 4.1922C6.80947 4.07492 6.87535 3.91586 6.87535 3.75001C6.87535 3.58416 6.80947 3.4251 6.69219 3.30782C6.57492 3.19055 6.41586 3.12466 6.25 3.12466C6.08415 3.12466 5.92509 3.19055 5.80782 3.30782L3.30782 5.80782C3.24971 5.86587 3.20361 5.9348 3.17215 6.01067C3.1407 6.08655 3.12451 6.16788 3.12451 6.25001C3.12451 6.33215 3.1407 6.41348 3.17215 6.48935C3.20361 6.56522 3.24971 6.63415 3.30782 6.6922L5.80782 9.1922Z"
                                                                    fill="#5C5E61" />
                                                            </svg>
                                                            Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            class="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tf_filter_rent tf-filter-item tf-tab-content">
                                        <div class="box-house hover-img">
                                            <div class="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img class="lazyload" data-src="../images/section/box-house-4.jpg"
                                                        src="../images/section/box-house-4.jpg" alt=""/>
                                                </a>
                                                <ul class="box-tag flex gap-8 ">
                                                    <li class="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li class="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div class="list-btn flex gap-8 ">
                                                    <a href="#" class="btn-icon save hover-tooltip"><i
                                                            class="icon-save"></i>
                                                        <span class="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" class="btn-icon find hover-tooltip"><i
                                                            class="icon-find-plus"></i>
                                                        <span class="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h5 class="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p class="location text-1 flex items-center gap-6">
                                                    <i class="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Beds</li>
                                                    <li class="text-1 flex"><span>3</span>Baths</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="bot flex justify-between items-center">
                                                    <h5 class="price">
                                                        $8.600
                                                    </h5>
                                                    <div class="wrap-btn flex">
                                                        <a href="#" class="compare flex gap-8 items-center text-1"><svg
                                                                width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M16.6922 14.1922L14.1922 16.6922C14.0749 16.8095 13.9159 16.8754 13.75 16.8754C13.5842 16.8754 13.4251 16.8095 13.3078 16.6922C13.1905 16.5749 13.1247 16.4159 13.1247 16.25C13.1247 16.0842 13.1905 15.9251 13.3078 15.8078L14.7414 14.375H3.75C3.58424 14.375 3.42527 14.3092 3.30806 14.192C3.19085 14.0747 3.125 13.9158 3.125 13.75C3.125 13.5843 3.19085 13.4253 3.30806 13.3081C3.42527 13.1909 3.58424 13.125 3.75 13.125H14.7414L13.3078 11.6922C13.1905 11.5749 13.1247 11.4159 13.1247 11.25C13.1247 11.0842 13.1905 10.9251 13.3078 10.8078C13.4251 10.6905 13.5842 10.6247 13.75 10.6247C13.9159 10.6247 14.0749 10.6905 14.1922 10.8078L16.6922 13.3078C16.7503 13.3659 16.7964 13.4348 16.8279 13.5107C16.8593 13.5865 16.8755 13.6679 16.8755 13.75C16.8755 13.8321 16.8593 13.9135 16.8279 13.9893C16.7964 14.0652 16.7503 14.1342 16.6922 14.1922ZM5.80782 9.1922C5.92509 9.30947 6.08415 9.37536 6.25 9.37536C6.41586 9.37536 6.57492 9.30947 6.69219 9.1922C6.80947 9.07492 6.87535 8.91586 6.87535 8.75001C6.87535 8.58416 6.80947 8.4251 6.69219 8.30782L5.2586 6.87501H16.25C16.4158 6.87501 16.5747 6.80916 16.6919 6.69195C16.8092 6.57474 16.875 6.41577 16.875 6.25001C16.875 6.08425 16.8092 5.92528 16.6919 5.80807C16.5747 5.69086 16.4158 5.62501 16.25 5.62501H5.2586L6.69219 4.1922C6.80947 4.07492 6.87535 3.91586 6.87535 3.75001C6.87535 3.58416 6.80947 3.4251 6.69219 3.30782C6.57492 3.19055 6.41586 3.12466 6.25 3.12466C6.08415 3.12466 5.92509 3.19055 5.80782 3.30782L3.30782 5.80782C3.24971 5.86587 3.20361 5.9348 3.17215 6.01067C3.1407 6.08655 3.12451 6.16788 3.12451 6.25001C3.12451 6.33215 3.1407 6.41348 3.17215 6.48935C3.20361 6.56522 3.24971 6.63415 3.30782 6.6922L5.80782 9.1922Z"
                                                                    fill="#5C5E61" />
                                                            </svg>
                                                            Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            class="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tf_filter_sale tf-filter-item tf-tab-content">
                                        <div class="box-house hover-img">
                                            <div class="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img class="lazyload" data-src="../images/section/box-house-6.jpg"
                                                        src="../images/section/box-house-6.jpg" alt=""/>
                                                </a>
                                                <ul class="box-tag flex gap-8 ">
                                                    <li class="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li class="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div class="list-btn flex gap-8 ">
                                                    <a href="#" class="btn-icon save hover-tooltip"><i
                                                            class="icon-save"></i>
                                                        <span class="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" class="btn-icon find hover-tooltip"><i
                                                            class="icon-find-plus"></i>
                                                        <span class="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h5 class="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p class="location text-1 flex items-center gap-6">
                                                    <i class="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Beds</li>
                                                    <li class="text-1 flex"><span>3</span>Baths</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="bot flex justify-between items-center">
                                                    <h5 class="price">
                                                        $8.600
                                                    </h5>
                                                    <div class="wrap-btn flex">
                                                        <a href="#" class="compare flex gap-8 items-center text-1"><svg
                                                                width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M16.6922 14.1922L14.1922 16.6922C14.0749 16.8095 13.9159 16.8754 13.75 16.8754C13.5842 16.8754 13.4251 16.8095 13.3078 16.6922C13.1905 16.5749 13.1247 16.4159 13.1247 16.25C13.1247 16.0842 13.1905 15.9251 13.3078 15.8078L14.7414 14.375H3.75C3.58424 14.375 3.42527 14.3092 3.30806 14.192C3.19085 14.0747 3.125 13.9158 3.125 13.75C3.125 13.5843 3.19085 13.4253 3.30806 13.3081C3.42527 13.1909 3.58424 13.125 3.75 13.125H14.7414L13.3078 11.6922C13.1905 11.5749 13.1247 11.4159 13.1247 11.25C13.1247 11.0842 13.1905 10.9251 13.3078 10.8078C13.4251 10.6905 13.5842 10.6247 13.75 10.6247C13.9159 10.6247 14.0749 10.6905 14.1922 10.8078L16.6922 13.3078C16.7503 13.3659 16.7964 13.4348 16.8279 13.5107C16.8593 13.5865 16.8755 13.6679 16.8755 13.75C16.8755 13.8321 16.8593 13.9135 16.8279 13.9893C16.7964 14.0652 16.7503 14.1342 16.6922 14.1922ZM5.80782 9.1922C5.92509 9.30947 6.08415 9.37536 6.25 9.37536C6.41586 9.37536 6.57492 9.30947 6.69219 9.1922C6.80947 9.07492 6.87535 8.91586 6.87535 8.75001C6.87535 8.58416 6.80947 8.4251 6.69219 8.30782L5.2586 6.87501H16.25C16.4158 6.87501 16.5747 6.80916 16.6919 6.69195C16.8092 6.57474 16.875 6.41577 16.875 6.25001C16.875 6.08425 16.8092 5.92528 16.6919 5.80807C16.5747 5.69086 16.4158 5.62501 16.25 5.62501H5.2586L6.69219 4.1922C6.80947 4.07492 6.87535 3.91586 6.87535 3.75001C6.87535 3.58416 6.80947 3.4251 6.69219 3.30782C6.57492 3.19055 6.41586 3.12466 6.25 3.12466C6.08415 3.12466 5.92509 3.19055 5.80782 3.30782L3.30782 5.80782C3.24971 5.86587 3.20361 5.9348 3.17215 6.01067C3.1407 6.08655 3.12451 6.16788 3.12451 6.25001C3.12451 6.33215 3.1407 6.41348 3.17215 6.48935C3.20361 6.56522 3.24971 6.63415 3.30782 6.6922L5.80782 9.1922Z"
                                                                    fill="#5C5E61" />
                                                            </svg>
                                                            Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            class="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tf_filter_rent tf-filter-item tf-tab-content">
                                        <div class="box-house hover-img">
                                            <div class="image-wrap">
                                                <a href="property-detail-v1.html">
                                                    <img class="lazyload" data-src="../images/section/box-house-15.jpg"
                                                        src="../images/section/box-house-15.jpg" alt=""/>
                                                </a>
                                                <ul class="box-tag flex gap-8 ">
                                                    <li class="flat-tag text-4 bg-main fw-6 text-white">Featured</li>
                                                    <li class="flat-tag text-4 bg-3 fw-6 text-white">For Sale</li>
                                                </ul>
                                                <div class="list-btn flex gap-8 ">
                                                    <a href="#" class="btn-icon save hover-tooltip"><i
                                                            class="icon-save"></i>
                                                        <span class="tooltip">Add Favorite</span>
                                                    </a>
                                                    <a href="#" class="btn-icon find hover-tooltip"><i
                                                            class="icon-find-plus"></i>
                                                        <span class="tooltip">Quick View</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="content">
                                                <h5 class="title">
                                                    <a href="property-detail-v1.html">Elegant studio flat</a>

                                                </h5>
                                                <p class="location text-1 flex items-center gap-6">
                                                    <i class="icon-location"></i> 102 Ingraham St, Brooklyn, NY 11237
                                                </p>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Beds</li>
                                                    <li class="text-1 flex"><span>3</span>Baths</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="bot flex justify-between items-center">
                                                    <h5 class="price">
                                                        $8.600
                                                    </h5>
                                                    <div class="wrap-btn flex">
                                                        <a href="#" class="compare flex gap-8 items-center text-1"><svg
                                                                width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M16.6922 14.1922L14.1922 16.6922C14.0749 16.8095 13.9159 16.8754 13.75 16.8754C13.5842 16.8754 13.4251 16.8095 13.3078 16.6922C13.1905 16.5749 13.1247 16.4159 13.1247 16.25C13.1247 16.0842 13.1905 15.9251 13.3078 15.8078L14.7414 14.375H3.75C3.58424 14.375 3.42527 14.3092 3.30806 14.192C3.19085 14.0747 3.125 13.9158 3.125 13.75C3.125 13.5843 3.19085 13.4253 3.30806 13.3081C3.42527 13.1909 3.58424 13.125 3.75 13.125H14.7414L13.3078 11.6922C13.1905 11.5749 13.1247 11.4159 13.1247 11.25C13.1247 11.0842 13.1905 10.9251 13.3078 10.8078C13.4251 10.6905 13.5842 10.6247 13.75 10.6247C13.9159 10.6247 14.0749 10.6905 14.1922 10.8078L16.6922 13.3078C16.7503 13.3659 16.7964 13.4348 16.8279 13.5107C16.8593 13.5865 16.8755 13.6679 16.8755 13.75C16.8755 13.8321 16.8593 13.9135 16.8279 13.9893C16.7964 14.0652 16.7503 14.1342 16.6922 14.1922ZM5.80782 9.1922C5.92509 9.30947 6.08415 9.37536 6.25 9.37536C6.41586 9.37536 6.57492 9.30947 6.69219 9.1922C6.80947 9.07492 6.87535 8.91586 6.87535 8.75001C6.87535 8.58416 6.80947 8.4251 6.69219 8.30782L5.2586 6.87501H16.25C16.4158 6.87501 16.5747 6.80916 16.6919 6.69195C16.8092 6.57474 16.875 6.41577 16.875 6.25001C16.875 6.08425 16.8092 5.92528 16.6919 5.80807C16.5747 5.69086 16.4158 5.62501 16.25 5.62501H5.2586L6.69219 4.1922C6.80947 4.07492 6.87535 3.91586 6.87535 3.75001C6.87535 3.58416 6.80947 3.4251 6.69219 3.30782C6.57492 3.19055 6.41586 3.12466 6.25 3.12466C6.08415 3.12466 5.92509 3.19055 5.80782 3.30782L3.30782 5.80782C3.24971 5.86587 3.20361 5.9348 3.17215 6.01067C3.1407 6.08655 3.12451 6.16788 3.12451 6.25001C3.12451 6.33215 3.1407 6.41348 3.17215 6.48935C3.20361 6.56522 3.24971 6.63415 3.30782 6.6922L5.80782 9.1922Z"
                                                                    fill="#5C5E61" />
                                                            </svg>
                                                            Compare
                                                        </a>
                                                        <a href="property-detail-v1.html"
                                                            class="tf-btn style-border pd-4">Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                <li>
                                    <a href="#">20</a>
                                </li>
                                <li class="arrow">
                                    <a href="#"><i class="icon-arrow-right"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 ">
                            <div class="tf-sidebar">
                                <form class="form-contact-agent style-2 mb-30">
                                    <h4 class="heading-title mb-30">
                                        Contact Me
                                    </h4>
                                    <fieldset>
                                        <input type="text" class="form-control" placeholder="Your name" name="name"
                                            id="name" required/>
                                    </fieldset>
                                    <fieldset>
                                        <input type="text" class="form-control" placeholder="Email" name="email"
                                            id="email-contact" required/>
                                    </fieldset>
                                    <fieldset class="phone">
                                        <input type="text" class="form-control " placeholder="Your phone number"
                                            name="phone" id="phone" required/>
                                    </fieldset>
                                    <fieldset>
                                        <textarea name="message" cols="30" rows="10" placeholder="Message" id="message"
                                            required></textarea>
                                    </fieldset>
                                    <div class="wrap-btn">
                                        <a href="#" class="tf-btn bg-color-primary w-full"><svg width="20" height="20"
                                                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.125 5.625V14.375C18.125 14.8723 17.9275 15.3492 17.5758 15.7008C17.2242 16.0525 16.7473 16.25 16.25 16.25H3.75C3.25272 16.25 2.77581 16.0525 2.42417 15.7008C2.07254 15.3492 1.875 14.8723 1.875 14.375V5.625M18.125 5.625C18.125 5.12772 17.9275 4.65081 17.5758 4.29917C17.2242 3.94754 16.7473 3.75 16.25 3.75H3.75C3.25272 3.75 2.77581 3.94754 2.42417 4.29917C2.07254 4.65081 1.875 5.12772 1.875 5.625M18.125 5.625V5.8275C18.125 6.14762 18.0431 6.46242 17.887 6.74191C17.7309 7.0214 17.5059 7.25628 17.2333 7.42417L10.9833 11.27C10.6877 11.4521 10.3472 11.5485 10 11.5485C9.65275 11.5485 9.31233 11.4521 9.01667 11.27L2.76667 7.425C2.4941 7.25711 2.26906 7.02224 2.11297 6.74275C1.95689 6.46325 1.87496 6.14845 1.875 5.82833V5.625"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            Send message</a>
                                        <a href="#" class="tf-btn style-border pd-24  "><svg width="21" height="20"
                                                viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.375 8.125V4.375M12.375 8.125H16.125M12.375 8.125L17.375 3.125M14.875 18.125C7.97167 18.125 2.375 12.5283 2.375 5.625V3.75C2.375 3.25272 2.57254 2.77581 2.92417 2.42417C3.27581 2.07254 3.75272 1.875 4.25 1.875H5.39333C5.82333 1.875 6.19833 2.1675 6.3025 2.585L7.22417 6.27083C7.31583 6.6375 7.17917 7.0225 6.87667 7.24833L5.79917 8.05667C5.64494 8.16831 5.53083 8.32672 5.47379 8.50837C5.41674 8.69002 5.4198 8.88523 5.4825 9.065C5.98406 10.4293 6.77618 11.6682 7.80398 12.696C8.83179 13.7238 10.0707 14.5159 11.435 15.0175C11.8025 15.1525 12.2083 15.0142 12.4433 14.7008L13.2517 13.6233C13.3623 13.4756 13.5141 13.3639 13.688 13.3021C13.8619 13.2402 14.0501 13.2311 14.2292 13.2758L17.915 14.1975C18.3317 14.3017 18.625 14.6767 18.625 15.1067V16.25C18.625 16.7473 18.4275 17.2242 18.0758 17.5758C17.7242 17.9275 17.2473 18.125 16.75 18.125H14.875Z"
                                                    stroke="#F1913D" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            Call
                                        </a>
                                    </div>
                                </form>
                                <div class="sidebar-item sidebar-featured style-2  pb-36 mb-28">
                                    <h4 class="sidebar-title mb-28 ">Featured Listings</h4>
                                    <ul>
                                        <li class="box-listings style-2 hover-img">
                                            <div class="image-wrap">
                                                <img class="lazyload" data-src="../images/section/box-listing-1.jpg"
                                                    src="../images/section/box-listing-1.jpg" alt=""/>
                                            </div>
                                            <div class="content">
                                                <div class="text-1 title fw-5 lh-20">
                                                    <a href="property-detail-v1.html">Casa Lomas de Machalí Machas</a>
                                                </div>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Bed</li>
                                                    <li class="text-1 flex"><span>3</span>Bath</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="price text-1 lh-20 fw-6">$7250,00</div>
                                            </div>
                                        </li>
                                        <li class="box-listings style-2 hover-img">
                                            <div class=" image-wrap">
                                                <img class="lazyload" data-src="../images/section/box-listing-2.jpg"
                                                    src="../images/section/box-listing-2.jpg" alt=""/>
                                            </div>
                                            <div class="content">
                                                <div class="text-1 title fw-5 lh-20">
                                                    <a href="property-detail-v1.html">Casa Lomas de Machalí Machas</a>
                                                </div>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Bed</li>
                                                    <li class="text-1 flex"><span>3</span>Bath</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="price text-1 lh-20 fw-6">$7250,00</div>

                                            </div>
                                        </li>
                                        <li class="box-listings style-2 hover-img">
                                            <div class=" image-wrap">
                                                <img class="lazyload" data-src="../images/section/box-listing-3.jpg"
                                                    src="../images/section/box-listing-3.jpg" alt=""/>
                                            </div>
                                            <div class="content">
                                                <div class="text-1 title fw-5 lh-20">
                                                    <a href="property-detail-v1.html">Casa Lomas de Machalí Machas</a>
                                                </div>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Bed</li>
                                                    <li class="text-1 flex"><span>3</span>Bath</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="price text-1 lh-20 fw-6">$7250,00</div>

                                            </div>
                                        </li>
                                        <li class="box-listings style-2 hover-img">
                                            <div class=" image-wrap">
                                                <img class="lazyload" data-src="../images/section/box-listing-4.jpg"
                                                    src="../images/section/box-listing-4.jpg" alt=""/>
                                            </div>
                                            <div class="content">
                                                <div class="text-1 title fw-5 lh-20">
                                                    <a href="property-detail-v1.html">Casa Lomas de Machalí Machas</a>
                                                </div>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Bed</li>
                                                    <li class="text-1 flex"><span>3</span>Bath</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="price text-1 lh-20 fw-6">$7250,00</div>
                                            </div>
                                        </li>
                                        <li class="box-listings style-2 hover-img">
                                            <div class=" image-wrap">
                                                <img class="lazyload" data-src="../images/section/box-listing-5.jpg"
                                                    src="../images/section/box-listing-5.jpg" alt=""/>
                                            </div>
                                            <div class="content">
                                                <div class="text-1 title fw-5 lh-20">
                                                    <a href="property-detail-v1.html">Casa Lomas de Machalí Machas</a>
                                                </div>
                                                <ul class="meta-list flex">
                                                    <li class="text-1 flex"><span>3</span>Bed</li>
                                                    <li class="text-1 flex"><span>3</span>Bath</li>
                                                    <li class="text-1 flex"><span>4,043</span>Sqft</li>
                                                </ul>
                                                <div class="price text-1 lh-20 fw-6">$7250,00</div>

                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class=" sidebar-ads">
                                    <div class="image-wrap">
                                        <img class="lazyload" data-src="../images/blog/ads.jpg" src="../images/blog/ads.jpg"
                                            alt=""/>
                                    </div>
                                    <div class="logo relative z-5">
                                        <img src="../images/logo/logo-2%402x.png" alt=""/>
                                    </div>
                                    <div class="box-ads relative z-5">
                                        <div class="content ">
                                            <h4 class="title"><a href="property-detail-v1.html">We can help you find a
                                                    local real estate agent</a> </h4>
                                            <div class="text-addres ">
                                                <p>Connect with a trusted agent who knows the market inside out -
                                                    whether you’re buying or selling.</p>
                                            </div>
                                        </div>
                                        <a href="#" class="tf-btn fw-6 bg-color-primary w-full">
                                            Connect with an agent
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /page-blog-details -->


            <!-- section-CTA --> */}
            <section class="section-CTA">
                <div class="tf-container">
                    <div class="row">
                        <div class="col-12">
                            <div class="content-inner">
                                <img src="../images/section/cta.png" alt=""/>
                                <div class="content">
                                    <h4 class="text-white mb-8 ">Find a Local Real Estate Agent Today</h4>
                                    <p class="text-white text-1">If you’re looking to buy or sell a home. We’ll help you
                                        make
                                        the most money
                                        possible.</p>
                                </div>
                                <a href="#" class="tf-btn style-2 fw-6 ">Find your location agent <i
                                        class="icon-MagnifyingGlass fw-6"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /section-CTA --> */}
        </div>
        {/* <!-- /main-content --> */}
    </div>
  )
}

export default AgentsDetails