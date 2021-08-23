import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <>
            <article className="card">
                <h3>Audi</h3>
                <img src={process.env.PUBLIC_URL + '/images/StingerGTAVfrente.jpg'} alt="audi"/>
                <div className="container">
                    <button>View</button> <p class="price">$400.000</p>
                </div>
            </article>
        </>
    )
}

export default Card
