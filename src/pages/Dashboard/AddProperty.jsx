import React from 'react'
import Dashboard from '../Dashboard'
import DashboarsSidebar from '../../components/DashboarsSidebar'

export const AddProperty = () => {
    return (
        <>
            <div id="wrapper" class="bg-4 ">
                <div class="page-layout">
                    <DashboarsSidebar />
                    {/* <!-- .main-content --> */}
                    <div class="main-content w-100">
                        <div class="main-content-inner">
                            <div class="button-show-hide show-mb">
                                <span class="body-1">Show Dashboard</span>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h3 class="title">Upload Media</h3>
                                <div class="box-uploadfile text-center">
                                    <div class="uploadfile">
                                        <a href="#" class=" tf-btn bg-color-primary pd-10 btn-upload mx-auto">
                                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.625 14.375V17.1875C13.625 17.705 13.205 18.125 12.6875 18.125H4.5625C4.31386 18.125 4.0754 18.0262 3.89959 17.8504C3.72377 17.6746 3.625 17.4361 3.625 17.1875V6.5625C3.625 6.045 4.045 5.625 4.5625 5.625H6.125C6.54381 5.62472 6.96192 5.65928 7.375 5.72834M13.625 14.375H16.4375C16.955 14.375 17.375 13.955 17.375 13.4375V9.375C17.375 5.65834 14.6725 2.57417 11.125 1.97834C10.7119 1.90928 10.2938 1.87472 9.875 1.875H8.3125C7.795 1.875 7.375 2.295 7.375 2.8125V5.72834M13.625 14.375H8.3125C8.06386 14.375 7.8254 14.2762 7.64959 14.1004C7.47377 13.9246 7.375 13.6861 7.375 13.4375V5.72834M17.375 11.25V9.6875C17.375 8.94158 17.0787 8.22621 16.5512 7.69876C16.0238 7.17132 15.3084 6.875 14.5625 6.875H13.3125C13.0639 6.875 12.8254 6.77623 12.6496 6.60041C12.4738 6.4246 12.375 6.18614 12.375 5.9375V4.6875C12.375 4.31816 12.3023 3.95243 12.1609 3.6112C12.0196 3.26998 11.8124 2.95993 11.5512 2.69876C11.2901 2.4376 10.98 2.23043 10.6388 2.08909C10.2976 1.94775 9.93184 1.875 9.5625 1.875H8.625"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                            Select photos
                                            <input type="file" class="ip-file" />
                                        </a>
                                        <p class="file-name fw-5">or drag photos here <br />
                                            <span>(Up to 10 photos)</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="box-img-upload">
                                    <div class="item-upload file-delete">
                                        <img src="../images/home/house-db-1.jpg" alt="img" />
                                        <span class="icon icon-trashcan1 remove-file"></span>
                                    </div>
                                    <div class="item-upload file-delete">
                                        <img src="../images/home/house-db-2.jpg" alt="img" />
                                        <span class="icon icon-trashcan1"></span>

                                    </div>
                                    <div class="item-upload file-delete">
                                        <img src="../images/home/house-db-3.jpg" alt="img" />
                                        <span class="icon icon-trashcan1 remove-file"></span>

                                    </div>
                                    <div class="item-upload file-delete">
                                        <img src="../images/home/house-db-4.jpg" alt="img" />
                                        <span class="icon icon-trashcan1 remove-file"></span>

                                    </div>
                                    <div class="item-upload file-delete">
                                        <img src="../images/home/house-db-5.jpg" alt="img" />
                                        <span class="icon icon-trashcan1 remove-file"></span>

                                    </div>
                                </div>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h5 class="title">Information</h5>
                                <form class="box-info-property">
                                    <fieldset class="box box-fieldset">
                                        <label for="title">
                                            Title:<span>*</span>
                                        </label>
                                        <input type="text" class="form-control" placeholder="Choose" />
                                    </fieldset>
                                    <fieldset class="box box-fieldset">
                                        <label for="desc">Description:</label>
                                        <textarea class="textarea" placeholder="Your Decscription"></textarea>
                                    </fieldset>
                                    <div class="box grid-layout-3 gap-30">
                                        <fieldset class="box-fieldset">
                                            <label for="address">
                                                Full Address:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" placeholder="Enter property full address" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="zip">
                                                Zip Code:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" placeholder="Enter property zip code" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="country">
                                                Country:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">United States</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option selected">United States</li>
                                                    <li data-value="2" class="option">United Kingdom</li>
                                                    <li data-value="3" class="option">Russia</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="box grid-layout-2 gap-30">
                                        <fieldset class="box-fieldset">
                                            <label for="state">
                                                Province/State:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">None</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option selected">None</li>
                                                    <li data-value="2" class="option">Texas</li>
                                                    <li data-value="3" class="option">New York</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="neighborhood">
                                                Neighborhood:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">None</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option selected">None</li>
                                                    <li data-value="2" class="option">Little Italy</li>
                                                    <li data-value="3" class="option"> Bedford Park</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="box box-fieldset">
                                        <label for="location">Location:<span>*</span></label>
                                        <div class="box-ip">
                                            <input type="text" class="form-control" value="None" />
                                            <a href="#" class="btn-location"><i class="icon icon-location"></i></a>
                                        </div>
                                        <iframe class="map"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d135905.11693909427!2d-73.95165795400088!3d41.17584829642291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727094281524!5m2!1sen!2s"
                                            width="100%" height="456" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </div>

                                </form>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h3 class="title">Price</h3>
                                <div class="box-price-property">
                                    <form class="box grid-2 gap-30">
                                        <fieldset class="box-fieldset mb-30">
                                            <label for="price">Price:<span>*</span></label>
                                            <input type="text" class="form-control" placeholder="Example value: 12345.67" />
                                        </fieldset>
                                        <fieldset class="box-fieldset mb-30">
                                            <label for="neighborhood">
                                                Unit Price:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">None</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option selected">None</li>
                                                    <li data-value="2" class="option">1000</li>
                                                    <li data-value="3" class="option">2000</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                        <div class="grid-layout-2 gap-30">
                                            <fieldset class="box-fieldset">
                                                <label for="price">
                                                    Before Price Label:<span>*</span>
                                                </label>
                                                <input type="text" class="form-control" />
                                            </fieldset>
                                            <fieldset class="box-fieldset">
                                                <label for="price">
                                                    After Price Label:<span>*</span>
                                                </label>
                                                <input type="text" class="form-control" />
                                            </fieldset>

                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h3 class="title">Addtional Infomation</h3>
                                <form>
                                    <div class="box grid-layout-3 gap-30">
                                        <fieldset class="box-fieldset">
                                            <label for="type">
                                                Property Type:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">Choose</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option">Apartment</li>
                                                    <li data-value="2" class="option">Villa</li>
                                                    <li data-value="3" class="option">Studio</li>
                                                    <li data-value="4" class="option">Studio</li>
                                                    <li data-value="5" class="option">Office</li>
                                                    <li data-value="6" class="option">Townhouse</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="status">
                                                Property Status:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">Choose</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option">For Rent</li>
                                                    <li data-value="2" class="option">For Sale</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="label">
                                                Property Label:<span>*</span>
                                            </label>
                                            <div class="nice-select" tabindex="0"><span class="current">Choose</span>
                                                <ul class="list">
                                                    <li data-value="1" class="option">New Listing</li>
                                                    <li data-value="2" class="option">Open House</li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="box grid-layout-3 gap-30">
                                        <fieldset class="box-fieldset">
                                            <label for="size">
                                                Size (SqFt):<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="land">
                                                Land Area (SqFt):<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="id">
                                                Property ID:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                    </div>
                                    <div class="box grid-layout-3 gap-30">
                                        <fieldset class="box-fieldset">
                                            <label for="rom">
                                                Rooms:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="bedrooms">
                                                Bedrooms:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="bathrooms">
                                                Bathrooms:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                    </div>
                                    <div class="box grid-layout-3 gap-30">
                                        <fieldset class="box-fieldset">
                                            <label for="garages">
                                                Garages:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="garages-size">
                                                Garages Size (SqFt):<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="year">
                                                Year Built:<span>*</span>
                                            </label>
                                            <input type="text" class="form-control" />
                                        </fieldset>
                                    </div>
                                </form>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h5 class="title">Amenities<span>*</span></h5>
                                <div class="box-amenities-property">
                                    <div class="box-amenities">
                                        <div class="title-amenities fw-6 text-color-heading text-1">Home safety:</div>
                                        <div class="list-amenities">
                                            <fieldset class="checkbox-item  style-1  ">
                                                <label>
                                                    <span class="text-4">Smoke alarm</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">Self check-in with lockbox</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">Carbon monoxide alarm</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">Security cameras</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="box-amenities">
                                        <div class="title-amenities fw-6 text-color-heading text-1">Bedroom</div>
                                        <div class="list-amenities">
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">Hangers</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">Extra pillows & blankets</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">
                                                        Bed linens</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">TV with standard cable</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="box-amenities">
                                        <div class="title-amenities fw-6 text-color-heading text-1">Kitchen:</div>
                                        <div class="list-amenities">
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">Refrigerator</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">Dishwasher</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">
                                                        Microwave</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                            <fieldset class="checkbox-item style-1  ">
                                                <label>
                                                    <span class="text-4">
                                                        Coffee maker</span>
                                                    <input type="checkbox" />
                                                    <span class="btn-checkbox"></span>
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h3 class="title">Virtual Tour 360</h3>
                                <div class="box-radio-check">
                                    <div class="text-btn mb-16">Virtual Tour Type:</div>
                                    <form>
                                        <fieldset class="radio-item   ">
                                            <label>
                                                <span class="text-1">Embedded code</span>
                                                <input type="radio" name="radio" id="radio1" />
                                                <span class="btn-radio"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="radio-item  style-1  ">
                                            <label>
                                                <span class="text-1">Upload image</span>
                                                <input type="radio" name="radio" id="radio2" />
                                                <span class="btn-radio"></span>
                                            </label>
                                        </fieldset>
                                        <fieldset class="box-fieldset">
                                            <label for="embedded">Embedded Code Virtual 360</label>
                                            <textarea class="textarea"></textarea>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h3 class="title">Videos</h3>
                                <form>
                                    <fieldset class="box-fieldset">
                                        <label for="video" class="text-btn">Video URL:</label>
                                        <input type="text" class="form-control" placeholder="Youtube, vimeo url" />
                                    </fieldset>
                                </form>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h3 class="title">Floors</h3>
                                <div class="box-radio-check mb-16">
                                    <div class="text-1 mb-12">Enable Floor Plan:</div>
                                    <fieldset class="radio-item mb-8">
                                        <label>
                                            <span class="text-1">Enable
                                            </span>
                                            <input type="radio" name="radio" id=" floor-plan-1" />
                                            <span class="btn-radio"></span>
                                        </label>
                                    </fieldset>
                                    <fieldset class="radio-item  style-1  ">
                                        <label>
                                            <span class="text-1">Disable</span>
                                            <input type="radio" name="radio" id="  floor-plan-2 " />
                                            <span class="btn-radio"></span>
                                        </label>
                                    </fieldset>
                                </div>
                                <div class="box-floor-property file-delete">
                                    <div class="top d-flex justify-content-between align-items-center">
                                        <h6>Floor 1:</h6>
                                        <a href="#" class="remove-file"><span class="icon icon-close"></span></a>
                                    </div>
                                    <form>
                                        <fieldset class="box box-fieldset">
                                            <label for="name">Floor Name:</label>
                                            <input type="text" class="form-control " />
                                        </fieldset>
                                        <div class="grid-layout-2 box gap-30">
                                            <fieldset class="box-fieldset">
                                                <label for="floor-price">Floor Price (Only Digits):</label>
                                                <input type="text" class="form-control " />
                                            </fieldset>
                                            <fieldset class="box-fieldset">
                                                <label for="price-postfix">Price Postfix:</label>
                                                <input type="text" class="form-control " />
                                            </fieldset>
                                        </div>
                                        <div class="grid-layout-2 box gap-30">
                                            <fieldset class="box-fieldset">
                                                <label for="floor-size">Floor Size (Only Digits):</label>
                                                <input type="text" class="form-control " />
                                            </fieldset>
                                            <fieldset class="box-fieldset">
                                                <label for="size-postfix">Size Postfix:</label>
                                                <input type="text" class="form-control " />
                                            </fieldset>
                                        </div>
                                        <div class="grid-layout-2 box gap-30">
                                            <fieldset class="box-fieldset">
                                                <label for="bedrooms">Bedrooms:</label>
                                                <input type="text" class="form-control " />
                                            </fieldset>
                                            <fieldset class="box-fieldset">
                                                <label for="bathrooms">Bathrooms:</label>
                                                <input type="text" class="form-control " />
                                            </fieldset>
                                        </div>
                                        <div class="grid-layout-2 box gap-30">
                                            <fieldset class="box-fieldset">
                                                <label for="bedrooms">Floor Image:</label>
                                                <div class="box-floor-img uploadfile">
                                                    <a href="#" class="btn-upload tf-btn bg-color-primary pd-10">
                                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.375 13.125L6.67417 8.82583C6.84828 8.65172 7.05498 8.51361 7.28246 8.41938C7.50995 8.32515 7.75377 8.27665 8 8.27665C8.24623 8.27665 8.49005 8.32515 8.71754 8.41938C8.94502 8.51361 9.15172 8.65172 9.32583 8.82583L13.625 13.125M12.375 11.875L13.5492 10.7008C13.7233 10.5267 13.93 10.3886 14.1575 10.2944C14.385 10.2001 14.6288 10.1516 14.875 10.1516C15.1212 10.1516 15.365 10.2001 15.5925 10.2944C15.82 10.3886 16.0267 10.5267 16.2008 10.7008L18.625 13.125M3.625 16.25H17.375C17.7065 16.25 18.0245 16.1183 18.2589 15.8839C18.4933 15.6495 18.625 15.3315 18.625 15V5C18.625 4.66848 18.4933 4.35054 18.2589 4.11612C18.0245 3.8817 17.7065 3.75 17.375 3.75H3.625C3.29348 3.75 2.97554 3.8817 2.74112 4.11612C2.5067 4.35054 2.375 4.66848 2.375 5V15C2.375 15.3315 2.5067 15.6495 2.74112 15.8839C2.97554 16.1183 3.29348 16.25 3.625 16.25ZM12.375 6.875H12.3817V6.88167H12.375V6.875ZM12.6875 6.875C12.6875 6.95788 12.6546 7.03737 12.596 7.09597C12.5374 7.15458 12.4579 7.1875 12.375 7.1875C12.2921 7.1875 12.2126 7.15458 12.154 7.09597C12.0954 7.03737 12.0625 6.95788 12.0625 6.875C12.0625 6.79212 12.0954 6.71263 12.154 6.65403C12.2126 6.59542 12.2921 6.5625 12.375 6.5625C12.4579 6.5625 12.5374 6.59542 12.596 6.65403C12.6546 6.71263 12.6875 6.79212 12.6875 6.875Z"
                                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                        Choose File
                                                        <input type="file" class="ip-file" />
                                                    </a>
                                                    <p class="file-name">Or drop file here to upload</p>
                                                </div>
                                            </fieldset>
                                            <fieldset class="box-fieldset">
                                                <label for="bathrooms">Description:</label>
                                                <textarea class="textarea"></textarea>
                                            </fieldset>
                                        </div>
                                    </form>
                                </div>
                                <div class="text-center">
                                    <a href="#" class="btn-add-floor"><span class="icon icon-plus"></span></a>
                                </div>
                            </div>
                            <div class="widget-box-2 mb-20">
                                <h3 class="title">Agent Infomation</h3>
                                <div class="box-radio-check">
                                    <div class="text-1 mb-16">Choose type agent information?</div>
                                    <fieldset class="radio-item mb-8">
                                        <label>
                                            <span class="text-1">Your current user information
                                            </span>
                                            <input type="radio" name="radio" id=" floor-plan-1" />
                                            <span class="btn-radio"></span>
                                        </label>
                                    </fieldset>
                                    <fieldset class="radio-item  style-1  ">
                                        <label>
                                            <span class="text-1">Other contact
                                            </span>
                                            <input type="radio" name="radio" id="  floor-plan-2 " />
                                            <span class="btn-radio"></span>
                                        </label>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="box-btn">
                                <a href="#" class="tf-btn bg-color-primary pd-13">Add Property</a>
                                <a href="#" class="tf-btn style-border pd-10">Save & Preview</a>
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
                            {/* <!-- /.footer-dashboard --> */}
                        </div>
                        <div class="overlay-dashboard"></div>

                    </div>
                    {/* <!-- /.main-content --> */}
                </div>
            </div>
        </>
    )
}
