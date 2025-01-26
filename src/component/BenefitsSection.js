import React from "react";

function BenefitsSection() {
    return (
        <section id="benefitSection" className="row my-5">
            <article className="middle-heading text-center my-3">Benefits</article>
            <section className="col-md-6">
                <article className="">
                    <img
                        style={{height:"490px",objectFit:"unset"}}
                        className="img-fluid rounded-curve w-100"
                        src="/images/Leveled-images//benefits-lady-img.png"
                        alt="benefits-img"
                    />
                </article>
            </section>
            <section className="col-md-6">
                <section className="border border-0 border-bottom border-secondary parent">
                    <span className="fs-3">01</span>
                    <span className="ps-3 fw-bold fs-3">Passive income</span>
                    <p className="py-1">
                        Generate cash flow without any of the management and <br/>
                        operational burden of owning and operating a business.
                    </p>
                </section>

                <section className="border border-0 border-bottom border-secondary parent mt-2">
                    <span className="fs-3">02</span>
                    <span className="ps-3 fw-bold fs-3">Diversify portfolio</span>
                    <p className="py-1">
                        Generate cash flow without any of the management and <br/>
                        operational burden of owning and operating a business.
                    </p>
                </section>


                <section className="border border-0 border-bottom border-secondary parent mt-2">
                    <span className="fs-3">03</span>
                    <span className="ps-3 fw-bold fs-3">No operational headache</span>
                    <p className="py-1">
                        Generate cash flow without any of the management and <br/>
                        operational burden of owning and operating a business.
                    </p>
                </section>

                <section className="border border-0 border-bottom border-secondary parent mt-2">
                    <span className="fs-3">04</span>
                    <span className="ps-3 fw-bold fs-3">Value appreciation</span>
                    <p className="py-1">
                        Generate cash flow without any of the management and <br/>
                        operational burden of owning and operating a business.
                    </p>
                </section>
            </section>
        </section>
    )
}

export default BenefitsSection 