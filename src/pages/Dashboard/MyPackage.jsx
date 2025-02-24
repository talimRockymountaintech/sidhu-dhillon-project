import React from 'react'
import DashboarsSidebar from '../../components/DashboarsSidebar'

export const MyPackage = () => {
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
                    <div class="widget-box-2 style-2 package">
                        <h3 class="title">My Package</h3>
                        <div class="flat-pricing">
                            <div class="box box-style">
                                <h3 class="sub-title  fw-7">Basic</h3>
                                <p class="text-sub fw-6 ">Automatically reach potential customers</p>
                                <div class="title-price flex">
                                    <h2>$19 </h2>
                                    <div class="month fw-7"> / month</div>
                                </div>
                                <p class="texts">Per month, per company or team members</p>
                                <ul class="check">
                                    <li class="flex-three">Listing free</li>
                                    <li class="flex-three">Support 24/7</li>
                                    <li class="flex-three">Quick access to customers</li>
                                    <li class="flex-three">Auto refresh ads</li>
                                </ul>
                                <div class="button-pricing">
                                    <a class="tf-btn bg-color-primary pd-20" href="https://vithemes.com/">
                                        <span>Upgrade</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- .footer-dashboard --> */}
                    <div class="footer-dashboard style-2">
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
