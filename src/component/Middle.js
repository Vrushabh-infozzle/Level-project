import React from "react";

function MiddlePart() {
    return (
        <section className="my-5">
            <section className="text-center">
                <h1 className="middle-heading">
                    Own a piece of Main Street: Join the <br /> SMB revolution!
                </h1>
                <article className="text-muted">
                    Diversify your portfolio – unlock the attractive returns of Small - Medium Businesses <br />
                    without any of the operational burden.
                </article>
            </section>

            {/* Image and Button Section */}
            <section className="text-center mt-4">
                <a className="btn btn-dark rounded-pill px-4 shadow" href="javascript:void(0)">
                    Join the Waitlist <i className="bi bi-arrow-right ms-2"></i>
                </a>
                <section className="mt-4">
                    <img src="/images/Leveled-images/Group 427320089 (1).png" className="img-fluid" alt="SMB Revolution" />
                </section>

                <section className="mt-5">
                    <img src="/images/Leveled-images/all-cuurenecy.png" className="img-fluid" alt="SMB Revolution" />
                </section>

                <section className="mt-4">
                    <img src="/images/Leveled-images/feature-in.png" className="img-fluid" alt="SMB Revolution" />
                </section>
            </section>
        </section>
    );
}

export default MiddlePart;
