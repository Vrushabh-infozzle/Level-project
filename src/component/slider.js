import React, { useEffect } from "react";

function ImagesSlider() {
    useEffect(() => {
        window.onload = function () {
            let sAllImg = document.querySelectorAll("#sliderSection figure img");
            let sAllboxes = document.querySelectorAll("#sliderSection section");

            sAllImg.forEach(function (eachImg) {
                eachImg.addEventListener("mouseover", function () {
                    changewidthofBoxes(sAllboxes);
                    let parentSibling = eachImg.parentElement.parentElement;
                    parentSibling.setAttribute("class", "col-md-8 makeslower");
                });
            });
        };

        function changewidthofBoxes(allBoxes) {
            allBoxes.forEach(function (eachBox) {
                eachBox.setAttribute("class", "col-md-2 makeslower");
            });
        }
    }, []);

    return (
        <section className="row" id="sliderSection">
            <section className="col-md-8 makeslower">
                <figure className="mb-0">
                    <img src="/images/Leveled-images/Rectangle 34624631.png" className="img-fluid" alt="Slider-img-1" />
                </figure>
            </section>
            <section className="col-md-2 makeslower">
                <figure className="mb-0">
                    <img src="/images/Leveled-images/Rectangle 34624631.png" className="img-fluid" alt="Slider-img-2" />
                </figure>
            </section>
            <section className="col-md-2 makeslower">
                <figure className="mb-0">
                    <img src="/images/Leveled-images/Rectangle 34624631.png" className="img-fluid" alt="Slider-img-3" />
                </figure>
            </section>
        </section>
    );
}

export default ImagesSlider;
