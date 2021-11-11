import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="home">React Router v6</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex justify-content-end">
                            <li className="">
                                <Link className="nav-link active" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="posts">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">about</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default header;