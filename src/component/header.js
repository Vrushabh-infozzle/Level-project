import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <section className="navbar-brand">
                <img className="img-fluid" src="/images/Leveled-images/Leveled-logo.png" alt="Logo" />
            </section>

            <button
                className="navbar-toggler mt-2 mb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ms-auto"> {/* Added 'ms-auto' for proper right alignment */}
                    <li className="nav-item me-3">
                        <a className="nav-link text-dark" href="javascript:void(0)">Investments</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link text-dark" href="#Our-project">Owners/Brokers</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link text-dark" href="#About-us">Lorem/Ipsum</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="btn btn-outline-dark rounded-pill px-4" href="javascript:void(0)">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-dark rounded-pill px-4" href="javascript:void(0)">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
