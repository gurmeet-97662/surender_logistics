import React from 'react'
import services from "../assets/services.jpeg"
import card5 from "../assets/card5.jpeg"
import card6 from "../assets/card6.jpeg"
import card8 from "../assets/card8.jpeg"
import card7 from "../assets/card7.jpeg"
import card9 from "../assets/card9.jpeg"
import card10 from "../assets/card10.jpeg"
import { Link } from 'react-router-dom'


function Service() {
  return (
   
<>
<div className="carousel-inner rounded mt-2">
                            <div className="carousel-item active">
                                <img
                                    src={services} height={350}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="w-50 h-100 mini-blog float-left position-absolute top-0 start-0 d-flex align-items-center text-info display-3">
                                    <h1>
                                        Services
                                    </h1>
                                    <hr />

                                </div>
                            </div>
                            </div>
                            <div id="cards_landscape_wrap-2">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <Link to="/">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={card5} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Storage</h6>
                                            <p> Our team of highly-trained professionals specializes in the transportation of delicate and valuable cargo. They have the expertise to handle such goods with precision and caution, utilizing specialized packaging and handling techniques to minimize any risk of damage during transit.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <Link to="/">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={card6} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Logistics</h6>
                                            <p>At our transportation service, we prioritize the safe and on-time delivery of your goods. We understand the importance of reliable logistics in today's fast-paced world, and our commitment to excellence ensures that your shipments are in capable hands from start to finish.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <Link to="/">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={card7} alt="" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Tow Service</h6>
                                            <p>Our team of highly-trained professionals specializes in the transportation of delicate and valuable cargo. They have the expertise to handle such goods with precision and caution, utilizing specialized packaging and handling techniques to minimize any risk of damage during transit.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <Link to="/">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={card8} alt="" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Passanger Transport</h6>
                                            <p>Our team of highly-trained professionals specializes in the transportation of delicate and valuable cargo. They have the expertise to handle such goods with precision and caution, utilizing specialized packaging and handling techniques to minimize any risk of damage during transit.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <Link to="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={card9} alt="" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Vehicle Service</h6>
                                            <p>Our team of highly-trained professionals specializes in the transportation of delicate and valuable cargo. They have the expertise to handle such goods with precision and caution, utilizing specialized packaging and handling techniques to minimize any risk of damage during transit.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <Link to="/">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={card10} alt="" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Transport</h6>
                                            <p>Our team of highly-trained professionals specializes in the transportation of delicate and valuable cargo. They have the expertise to handle such goods with precision and caution, utilizing specialized packaging and handling techniques to minimize any risk of damage during transit.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
                    
</>
  )
}

export default Service