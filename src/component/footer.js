import React from "react";

export default function FooterStructre() {
    return (
        <footer className="bg-dark text-danger text-light px-4 pt-5">
            <article className="pt-4">Success stories</article>
            <p className="firstPara my-4">
                "The platform is very easy to use, and I now have a <br /> stable passive income.
                I really like it, highly <br /> recommended!”
            </p>


            <section className="row my-5">
                <section className="col-10 d-flex">
                    <article>
                        <img className="img-fluid" src='/images/Leveled-images/elipese-man.png' />
                    </article>
                    <article className="ps-3">
                        <article>David Smith</article>
                        <article>SEO Lorem Ipsum</article>
                    </article>
                </section>

                <section className="col-2">
                    <img className="img-fluid px-3" src='/images/Leveled-images/elipese-1.png' />
                    <img className="img-fluid" src='/images/Leveled-images/elipese-2.png' />
                </section>
            </section>

            <section className="my-3 mx-1">
                <section className="rounded-curve bg-blue text-center py-5">
                    <article className="fs-3 py-3">Start investing with us</article>
                    <p>
                        Сonvert the user to create an account and invest on the platform to <br /> enjoy monthly cash flow/dividend and appreciation.
                    </p>

                    <a className="btn btn-light rounded-pill px-5 py-2" href="javascript:void(0)">
                        Join the Waitlist <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                </section>
            </section>

            <section className="mt-mb-mix-10">
                <span className="px-2">Investments</span>
                <span className="px-2">Owners/Brokers</span>
                <span className="px-2">Lorem Ipsum</span>
                <span className="float-end">
                    <span><i className="bi bi-envelope text-light me-2"></i></span>
                    <span>support@getleveled.co</span>
                </span>
            </section>
            <hr />

            <section>
                <img className="img-fluid" src='/images/Leveled-images/Leveled-white-logo.png' />
                <span className="float-end">© 2024 Leveled. All rights reserved.</span>

                <p className="text-lightgrey py-5">
                    Leveled, Inc. (“Leveled”, the “Company”, “our” or “we”) operates a website at https://getleveled.co (the “Platform”). By using the Platform, you accept our Terms of Service and Privacy Policy.This Platform may contain certain historical returns, expected returns, projections or forward-looking statements. Past performance is not a guarantee of future results. Any such historical returns, expected returns, projections or forward-looking statements may not reflect actual future performance. Our ability to predict future events, actions, plans or results is inherently uncertain and actual outcomes may differ materially from those set forth on or anticipated by Leveled. Diversification and asset allocation do not ensure profit or guarantee against loss.All investments involve risk, including the risk of the partial or total loss of your invested capital. Information provided by Leveled does not consider an investor’s specific objectives or risk profile. Investment decisions should be made based on your own objectives, risk tolerance and circumstances, and in consultation with your own professional advisors.The information contained on the Platform neither constitutes an offer for nor a solicitation of interest in any specific securities or any offering thereof. Content provided by Leveled is not intended to be a recommendation or investment advice, and Leveled does not provide tax, accounting, legal or financial advice. Leveled is not registered, licensed or supervised as a broker dealer by the Securities and Exchange Commission or the Financial Industry Regulatory Authority.While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties.Leveled takes any potential security issues seriously and encourages the responsible and timely reporting of unknown security issues. Please send any discovered security concerns to support@getleveled.co
                </p>
            </section>

        </footer>
    )
}