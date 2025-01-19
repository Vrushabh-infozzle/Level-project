import React from "react";

function AcheivementData() {
    return (
        <section className="row my-5" id='ahcievmentSection'>
            <section className="col-md-6">
                <section className="heading">
                    Our impact and <br /> achievements
                </section>
            </section>
            <section className="col-md-6">
                <section>
                    <p>
                        Our mission is to democratize SMB ownership, enabling people to
                        invest fractionally in local businesses. We aim to foster sustainable
                        growth, create jobs, and fuel local economies, all while providing an
                        opportunity for building passive income and generational wealth.
                    </p>

                    <section className="row gy-4">
                        <section className="col-md-6">
                            <article className="heading">120</article>
                            <article>Assets under management</article>
                        </section>

                        <section className="col-md-6">
                            <article className="heading">500$</article>
                            <article>Of cash flow distributed</article>
                        </section>
                        <article className="mt-5"></article>
                        <section className="col-md-6">
                            <article className="heading">10-40%</article>
                            <article>Return on investment</article>
                        </section>

                        <section className="col-md-6">
                            <article className="heading">500</article>
                            <article>Existing investors</article>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default AcheivementData;