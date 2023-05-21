import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/images/t3.webp"  className="d-block w-100" width={1500} height={300} alt="banner slide 1" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <Image src="/images/u.jpg" className="d-block w-100" width={1500} height={300} alt="banner slide 2" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div className="carousel-item">
          <Image src="/images/t1.PNG" className="d-block w-100" width={1350} height={300} alt="banner slide 3" />
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Banner