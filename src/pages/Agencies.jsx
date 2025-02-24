import React from 'react'

const Agencies = () => {
  return (
    <>
      {/* <!-- flat-title --> */}
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
        {/* <!-- /flat-title --> */}
        {/* <!-- .main-content --> */}
        <div class="main-content tf-spacing-6">

            <section class="section-agency-layout">
                <div class="tf-container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="box-title ">
                                <h2>Agencies</h2>
                                <div class="right">

                                    <ul class="nav-tab-filter group-layout" role="tablist">
                                        <li class="nav-tab-item" role="presentation">
                                            <a href="#gridLayout" class=" btn-layout grid nav-link-item "
                                                data-bs-toggle="tab">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.04883 6.40508C5.04883 5.6222 5.67272 5 6.41981 5C7.16686 5 7.7908 5.62221 7.7908 6.40508C7.7908 7.18801 7.16722 7.8101 6.41981 7.8101C5.67241 7.8101 5.04883 7.18801 5.04883 6.40508Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M11.1045 6.40508C11.1045 5.62221 11.7284 5 12.4755 5C13.2229 5 13.8466 5.6222 13.8466 6.40508C13.8466 7.18789 13.2227 7.8101 12.4755 7.8101C11.7284 7.8101 11.1045 7.18794 11.1045 6.40508Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M19.9998 6.40514C19.9998 7.18797 19.3757 7.81016 18.6288 7.81016C17.8818 7.81016 17.2578 7.18794 17.2578 6.40508C17.2578 5.62211 17.8813 5 18.6288 5C19.3763 5 19.9998 5.62215 19.9998 6.40514Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M7.74249 12.5097C7.74249 13.2926 7.11849 13.9147 6.37133 13.9147C5.62411 13.9147 5 13.2926 5 12.5097C5 11.7267 5.62419 11.1044 6.37133 11.1044C7.11842 11.1044 7.74249 11.7266 7.74249 12.5097Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M13.7976 12.5097C13.7976 13.2927 13.1736 13.9147 12.4266 13.9147C11.6795 13.9147 11.0557 13.2927 11.0557 12.5097C11.0557 11.7265 11.6793 11.1044 12.4266 11.1044C13.1741 11.1044 13.7976 11.7265 13.7976 12.5097Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M19.9516 12.5097C19.9516 13.2927 19.328 13.9147 18.5807 13.9147C17.8329 13.9147 17.209 13.2925 17.209 12.5097C17.209 11.7268 17.8332 11.1044 18.5807 11.1044C19.3279 11.1044 19.9516 11.7265 19.9516 12.5097Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M5.04297 18.5947C5.04297 17.8118 5.66709 17.1896 6.4143 17.1896C7.16137 17.1896 7.78523 17.8116 7.78523 18.5947C7.78523 19.3778 7.16139 19.9997 6.4143 19.9997C5.66714 19.9997 5.04297 19.3773 5.04297 18.5947Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M11.0986 18.5947C11.0986 17.8118 11.7227 17.1896 12.47 17.1896C13.2169 17.1896 13.8409 17.8117 13.8409 18.5947C13.8409 19.3778 13.2169 19.9997 12.47 19.9997C11.7225 19.9997 11.0986 19.3774 11.0986 18.5947Z"
                                                        stroke="#8E8E93" />
                                                    <path
                                                        d="M17.252 18.5947C17.252 17.8117 17.876 17.1896 18.6229 17.1896C19.3699 17.1896 19.9939 17.8117 19.9939 18.5947C19.9939 19.3778 19.3702 19.9997 18.6229 19.9997C17.876 19.9997 17.252 19.3774 17.252 18.5947Z"
                                                        stroke="#8E8E93" />
                                                </svg>

                                            </a>
                                        </li>
                                        <li class="nav-tab-item" role="presentation">
                                            <a href="#listLayout" class="nav-link-item btn-layout list active"
                                                data-bs-toggle="tab">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19.7016 18.3317H9.00246C8.5615 18.3317 8.2041 17.9743 8.2041 17.5333C8.2041 17.0923 8.5615 16.7349 9.00246 16.7349H19.7013C20.1423 16.7349 20.4997 17.0923 20.4997 17.5333C20.4997 17.9743 20.1426 18.3317 19.7016 18.3317Z"
                                                        fill="#8E8E93" />
                                                    <path
                                                        d="M19.7016 13.3203H9.00246C8.5615 13.3203 8.2041 12.9629 8.2041 12.5219C8.2041 12.081 8.5615 11.7236 9.00246 11.7236H19.7013C20.1423 11.7236 20.4997 12.081 20.4997 12.5219C20.5 12.9629 20.1426 13.3203 19.7016 13.3203Z"
                                                        fill="#8E8E93" />
                                                    <path
                                                        d="M19.7016 8.30919H9.00246C8.5615 8.30919 8.2041 7.95179 8.2041 7.51083C8.2041 7.06986 8.5615 6.71246 9.00246 6.71246H19.7013C20.1423 6.71246 20.4997 7.06986 20.4997 7.51083C20.4997 7.95179 20.1426 8.30919 19.7016 8.30919Z"
                                                        fill="#8E8E93" />
                                                    <path
                                                        d="M5.5722 8.64465C6.16436 8.64465 6.6444 8.16461 6.6444 7.57245C6.6444 6.98029 6.16436 6.50024 5.5722 6.50024C4.98004 6.50024 4.5 6.98029 4.5 7.57245C4.5 8.16461 4.98004 8.64465 5.5722 8.64465Z"
                                                        fill="#8E8E93" />
                                                    <path
                                                        d="M5.5722 13.5942C6.16436 13.5942 6.6444 13.1141 6.6444 12.522C6.6444 11.9298 6.16436 11.4498 5.5722 11.4498C4.98004 11.4498 4.5 11.9298 4.5 12.522C4.5 13.1141 4.98004 13.5942 5.5722 13.5942Z"
                                                        fill="#8E8E93" />
                                                    <path
                                                        d="M5.5722 18.5438C6.16436 18.5438 6.6444 18.0637 6.6444 17.4716C6.6444 16.8794 6.16436 16.3994 5.5722 16.3994C4.98004 16.3994 4.5 16.8794 4.5 17.4716C4.5 18.0637 4.98004 18.5438 5.5722 18.5438Z"
                                                        fill="#8E8E93" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="nice-select select-filter list-sort" tabindex="0"><span
                                            class="current">Sort by (Default)</span>
                                        <ul class="list">
                                            <li data-value="default" class="option selected">Sort by (Default)</li>
                                            <li data-value="new" class="option">Newest</li>
                                            <li data-value="old" class="option">Oldest</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flat-animate-tab">
                                <div class="tab-content">
                                    <div class="tab-pane " id="gridLayout" role="tabpanel">
                                        <div class="grid-layout-2">
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-1.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-7.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-2.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-1.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-3.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-4.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-4.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-2.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-5.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-8.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-6.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-6.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-7.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-9.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item style-2">
                                                <div class="bg-image">
                                                    <img src="../images/section/agencies-8.jpg" alt="" />
                                                </div>
                                                <div class="content-inner">
                                                    <div class="logo-wrap">
                                                        <img src="../images/brands/brand-5.jpg" alt="" />
                                                    </div>
                                                    <div class="content">
                                                        <div class="info">
                                                            <h6 class="name">
                                                                <a href="agency-details.html">Lorem House</a>

                                                            </h6>
                                                            <p class="location text-1 flex items-center gap-8">
                                                                102 Ingraham St, Brooklyn, NY 11237
                                                            </p>
                                                        </div>
                                                        <ul class="list-info">
                                                            <li><span>Listing:</span><span>7.328</span></li>
                                                            <li><span>Hotline:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Phone:</span><span>+7-445-556-8337</span></li>
                                                            <li><span>Email:</span><span>loremhouse@gmail.com</span>
                                                            </li>

                                                        </ul>
                                                        <div class="contact">
                                                            <ul class="list-link">
                                                                <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                                <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                                <li><a href="#"><i class="icon-connect"></i></a></li>
                                                            </ul>
                                                            <a href="agency-details.html"
                                                                class="tf-btn style-border pd-4">
                                                                Details
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane active show" id="listLayout" role="tabpanel">
                                        <div class="wrap-list">
                                            <div class="agencies-item">
                                                <div class="logo-wrap">
                                                    <img src="../images/brands/brand-1.jpg" alt="" />
                                                </div>
                                                <div class="content">
                                                    <div class="info">
                                                        <h6 class="name">
                                                            <a href="agency-details.html">Lorem House</a>

                                                        </h6>
                                                        <p class="location text-1 flex items-center gap-8">
                                                            <i class="icon-location"></i> 2118 Thornridge Cir. Syracuse,
                                                            Connecticut
                                                            35624
                                                        </p>
                                                    </div>
                                                    <p class="description text-1">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                                        ligula neque,
                                                        ornare
                                                        quis
                                                        urna nec, congue hendrerit turpis. Quisque nec diam varius,
                                                        iaculis enim
                                                        aliquam...
                                                    </p>
                                                    <div class="contact">
                                                        <ul class="list-link">
                                                            <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                            <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                            <li><a href="#"><i class="icon-connect"></i></a></li>
                                                        </ul>
                                                        <a href="agency-details.html" class="tf-btn style-border pd-4">
                                                            Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item">
                                                <div class="logo-wrap">
                                                    <img src="../images/brands/brand-2.jpg" alt="" />
                                                </div>
                                                <div class="content">
                                                    <div class="info">
                                                        <h6 class="name">
                                                            <a href="agency-details.html">Lorem House</a>

                                                        </h6>
                                                        <p class="location text-1 flex items-center gap-8">
                                                            <i class="icon-location"></i> 2118 Thornridge Cir. Syracuse,
                                                            Connecticut
                                                            35624
                                                        </p>
                                                    </div>
                                                    <p class="description text-1">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                                        ligula neque,
                                                        ornare
                                                        quis
                                                        urna nec, congue hendrerit turpis. Quisque nec diam varius,
                                                        iaculis enim
                                                        aliquam...
                                                    </p>
                                                    <div class="contact">
                                                        <ul class="list-link">
                                                            <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                            <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                            <li><a href="#"><i class="icon-connect"></i></a></li>
                                                        </ul>
                                                        <a href="agency-details.html" class="tf-btn style-border pd-4">
                                                            Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item">
                                                <div class="logo-wrap">
                                                    <img src="../images/brands/brand-3.jpg" alt="" />
                                                </div>
                                                <div class="content">
                                                    <div class="info">
                                                        <h6 class="name">
                                                            <a href="agency-details.html">Lorem House</a>

                                                        </h6>
                                                        <p class="location text-1 flex items-center gap-8">
                                                            <i class="icon-location"></i> 2118 Thornridge Cir. Syracuse,
                                                            Connecticut
                                                            35624
                                                        </p>
                                                    </div>
                                                    <p class="description text-1">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                                        ligula neque,
                                                        ornare
                                                        quis
                                                        urna nec, congue hendrerit turpis. Quisque nec diam varius,
                                                        iaculis enim
                                                        aliquam...
                                                    </p>
                                                    <div class="contact">
                                                        <ul class="list-link">
                                                            <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                            <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                            <li><a href="#"><i class="icon-connect"></i></a></li>
                                                        </ul>
                                                        <a href="agency-details.html" class="tf-btn style-border pd-4">
                                                            Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item">
                                                <div class="logo-wrap">
                                                    <img src="../images/brands/brand-4.jpg" alt="" />
                                                </div>
                                                <div class="content">
                                                    <div class="info">
                                                        <h6 class="name">
                                                            <a href="agency-details.html">Lorem House</a>

                                                        </h6>
                                                        <p class="location text-1 flex items-center gap-8">
                                                            <i class="icon-location"></i> 2118 Thornridge Cir. Syracuse,
                                                            Connecticut
                                                            35624
                                                        </p>
                                                    </div>
                                                    <p class="description text-1">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                                        ligula neque,
                                                        ornare
                                                        quis
                                                        urna nec, congue hendrerit turpis. Quisque nec diam varius,
                                                        iaculis enim
                                                        aliquam...
                                                    </p>
                                                    <div class="contact">
                                                        <ul class="list-link">
                                                            <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                            <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                            <li><a href="#"><i class="icon-connect"></i></a></li>
                                                        </ul>
                                                        <a href="agency-details.html" class="tf-btn style-border pd-4">
                                                            Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item">
                                                <div class="logo-wrap">
                                                    <img src="../images/brands/brand-5.jpg" alt="" />
                                                </div>
                                                <div class="content">
                                                    <div class="info">
                                                        <h6 class="name">
                                                            <a href="agency-details.html">Lorem House</a>

                                                        </h6>
                                                        <p class="location text-1 flex items-center gap-8">
                                                            <i class="icon-location"></i> 2118 Thornridge Cir. Syracuse,
                                                            Connecticut
                                                            35624
                                                        </p>
                                                    </div>
                                                    <p class="description text-1">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                                        ligula neque,
                                                        ornare
                                                        quis
                                                        urna nec, congue hendrerit turpis. Quisque nec diam varius,
                                                        iaculis enim
                                                        aliquam...
                                                    </p>
                                                    <div class="contact">
                                                        <ul class="list-link">
                                                            <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                            <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                            <li><a href="#"><i class="icon-connect"></i></a></li>
                                                        </ul>
                                                        <a href="agency-details.html" class="tf-btn style-border pd-4">
                                                            Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="agencies-item">
                                                <div class="logo-wrap">
                                                    <img src="../images/brands/brand-6.jpg" alt="" />
                                                </div>
                                                <div class="content">
                                                    <div class="info">
                                                        <h6 class="name">
                                                            <a href="agency-details.html">Lorem House</a>

                                                        </h6>
                                                        <p class="location text-1 flex items-center gap-8">
                                                            <i class="icon-location"></i> 2118 Thornridge Cir. Syracuse,
                                                            Connecticut
                                                            35624
                                                        </p>
                                                    </div>
                                                    <p class="description text-1">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                                        ligula neque,
                                                        ornare
                                                        quis
                                                        urna nec, congue hendrerit turpis. Quisque nec diam varius,
                                                        iaculis enim
                                                        aliquam...
                                                    </p>
                                                    <div class="contact">
                                                        <ul class="list-link">
                                                            <li><a href="#"><i class="icon-phone-4"></i></a></li>
                                                            <li><a href="#"><i class="icon-letter-1"></i></a></li>
                                                            <li><a href="#"><i class="icon-connect"></i></a></li>
                                                        </ul>
                                                        <a href="agency-details.html" class="tf-btn style-border pd-4">
                                                            Details
                                                        </a>
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
                        <div class="col-xl-4 col-lg-5">
                            <div class=" tf-sidebar">
                                <form class="form-contact-agent style-2 mb-30">
                                    <h4 class="heading-title mb-30">
                                        Contact Me
                                    </h4>
                                    <fieldset>
                                        <input type="text" class="form-control" placeholder="Your name" name="name"
                                            id="name" required />
                                    </fieldset>
                                    <fieldset>
                                        <input type="text" class="form-control" placeholder="Email" name="email"
                                            id="email" required />
                                    </fieldset>
                                    <fieldset class="phone">
                                        <input type="text" class="form-control " placeholder="Phone" name="phone"
                                            id="phone" required />
                                    </fieldset>
                                    <fieldset>
                                        <textarea name="message" cols="30" rows="10" placeholder="Message"
                                             id="message" required></textarea>
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
                                        <a href="#" class="tf-btn style-border pd-9 "><svg width="21" height="20"
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
                                <div class="sidebar-item sidebar-featured style-2 mb-28  pb-36">
                                    <h4 class="sidebar-title mb-28">Featured Listings</h4>
                                    <ul>
                                        <li class="box-listings style-2 hover-img">
                                            <div class="image-wrap">
                                                <img class="lazyload" data-src="images/section/box-listing-1.jpg"
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
                                                <img class="lazyload" data-src="images/section/box-listing-2.jpg"
                                                    src="../images/section/box-listing-2.jpg" alt="" />
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
                                                <img class="lazyload" data-src="images/section/box-listing-3.jpg"
                                                    src="../images/section/box-listing-3.jpg" alt="" />
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
                                                <img class="lazyload" data-src="images/section/box-listing-4.jpg"
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
                                                <img class="lazyload" data-src="images/section/box-listing-5.jpg"
                                                    src="../images/section/box-listing-5.jpg" alt="" />
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
                                        <img class="lazyload" data-src="images/blog/ads.jpg" src="../images/blog/ads.jpg"
                                            alt="" />
                                    </div>
                                    <div class="logo relative z-5">
                                        <img src="../images/logo/logo-2%402x.png" alt="" width="136px" height="42px"/>
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


        </div>
        {/* <!-- /main-content -->

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
    </>
    // <div>Agencies</div>
  )
}

export default Agencies;