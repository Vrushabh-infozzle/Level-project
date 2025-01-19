import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function IndustryVerticals() {
    const settings = {
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed in ms
        slidesToShow: 4, // Number of visible slides
        slidesToScroll: 1, // Number of slides to scroll
        arrows: false, // Left/Right arrows
        dots: true, // For navigation dots
        responsive: [
            {
                breakpoint: 1024, // Below this width
                settings: {
                    slidesToShow: 3, // Show 3 slides
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
        ],
    };

    const industries = [
        {
            title: "Lorem Ipsum",
            image: "/images/Leveled-images/Carosuel-1.png",
        },
        {
            title: "Lorem Ipsum",
            image: "/images/Leveled-images/Carosuel-2.png",
        },
        {
            title: "Lorem Ipsum",
            image: "/images/Leveled-images/Carosuel-3.png",
        },
        {
            title: "Lorem Ipsum",
            image: "/images/Leveled-images/Carosuel-4.png",
        },
        {
            title: "Lorem Ipsum",
            image: "/images/Leveled-images/Carosuel-3.png",
        },
    ];

    return (
        <section id="industry-verticals" className="py-5">
            <section className="my-3">
                <article className="d-inline middle-heading">Industry Verticals</article>
                <button className="btn btn-dark text-white rounded-pill px-4 py-2 float-end">Investments</button>
            </section>
            <Slider {...settings}>
                {industries.map((industry, index) => (
                    <div key={index} className="pe-2">
                        <div>
                            <img
                                src={industry.image}
                                alt={industry.title}
                                className="img-fluid rounded-curve w-100"
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="my-2">
                                <h5 className="card-title">{industry.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default IndustryVerticals;
