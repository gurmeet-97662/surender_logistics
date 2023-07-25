import React from 'react'
import slide1 from "../assets/slide1.jpeg"
import slide2 from "../assets/slide2.jpeg"
import slide3 from "../assets/slide3.jpeg"
import card1 from "../assets/card1.jpeg"
import card2 from "../assets/card2.jpeg"
import card3 from "../assets/card3.jpeg"
import card4 from "../assets/card4.webp"
import { Link } from 'react-router-dom'


function Dashboard() {
    return (
        <>
            <div className="row py-3 rounded">
                <div className="col rounded">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide shadow-sm"
                        data-bs-ride="true"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                            />

                        </div>
                        <div className="carousel-inner rounded">
                            <div className="carousel-item active">
                                <img
                                    src={slide1} height={650}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="w-50 h-100 mini-blog float-left position-absolute top-0 start-0 d-flex align-items-center text-white">
                                    <h1>
                                        Transportation Services Around the World
                                    </h1>
                                    <hr />

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={slide2} height={650}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="w-50 h-100 mini-blog float-right position-absolute top-0 end-0 d-flex align-items-center text-white">
                                    <h1>Safe and On Time Delievery</h1>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={slide3} height={650}
                                    className="d-block w-100"
                                    alt="..."
                                />
                                <div className="w-50 h-100 mini-blog float-left position-absolute top-0 start-0 d-flex align-items-center text-white">
                                    <h1>
                                        Safe & Reliable Logistic Solution
                                    </h1>
                                </div>
                            </div>

                        </div>
                        <button
                            className="carousel-control-prev justify-content-start px-5"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <p aria-hidden="true">❮</p>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next justify-content-end px-5"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <p aria-hidden="true">❯</p>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <div id="cards_landscape_wrap-2">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <Link to="/">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src={card1} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>We ensures you the best
                                                quality services</h6>
                                            <p>At our transportation company, we are dedicated to delivering the best quality services to our valued clients. Customer satisfaction is at the core of everything we do, and we strive to exceed expectations with every interaction. </p>
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
                                            <img src={card2} alt="" />
                                        </div>
                                        <div class="text-container">
                                            <h6>Safe and on time delivery of
                                                your goods</h6>
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
                                            <img src={card3} alt="" />
                                        </div>

                                        <div class="text-container">
                                            <h6>Very careful handling of
                                                valuable goods</h6>
                                            <p>Our team of highly-trained professionals specializes in the transportation of delicate and valuable cargo. They have the expertise to handle such goods with precision and caution, utilizing specialized packaging and handling techniques to minimize any risk of damage during transit.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
           <section>
            <div>
            <div class="half-half-image-text">
<div class="container">
  <div class="row">
    <div class="col-12 mt-5">
      <h1>Professional Services</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-lg-6">
      <div class="content">
        <p>Experience the epitome of professional transportation service with our company. We are committed to providing a level of excellence that goes beyond the ordinary, ensuring that every journey with us is a remarkable one. Our team of skilled drivers and coordinators work tirelessly to uphold the values of punctuality, reliability, and safety, making your travel experience stress-free and enjoyable. From corporate executives to families on vacation, we cater to all travel needs, offering a wide range of modern vehicles equipped with the latest amenities for your comfort. With a keen eye for detail and a passion for customer satisfaction, we take pride in delivering seamless logistics, allowing you to focus on what truly matters during your trip. Trust us to be your reliable partner in transportation, and we'll take you to your destination with the utmost professionalism and care. Your journey begins with us, where every mile is met with dedication, making your experience truly exceptional.</p>
        
      </div>
    </div>
    <div class="col-12 col-lg-6 mb-2">
    <img
                                    src={card4} height={350}
                                    className="d-block w-100 rounded"
                                    alt="..."
                                />
                               
    </div>
  </div>
</div>
  </div>
            </div>
           </section>
            



        </>
    )
}

export default Dashboard