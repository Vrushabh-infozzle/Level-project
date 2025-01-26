import React from "react";

export default function AccordianStructure() {
    return (
        <section id="askedQuestionData" className="row my-5">
            <article className="text-center middle-heading">Frequently asked questions</article>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Who can invest on leveled?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body m-3">
                            Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is the minimum investment amount?                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body m-3">
                            Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What kind of returns can i expect from SMB investing?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body m-3">
                            Lorem ipsum dolor sit amet consectetur. Eget suspendisse urna ultrices morbi.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}