import React from "react";
import RickAndMorty from '../assets/rick-and-morty 1.svg'
import './Main.css'

function Locations() {
    return(
        <div className='main-content'>
                <section className="main-image">
                    <img className="content-image" alt="image" src={RickAndMorty} />
                </section>
                <section className="form-section">
                    <div className="form-wrapper">
                        <form>
                            <input id="search" type="search" placeholder="Filter by name..." />
                            <select id="first" name="Species">
                                <option value='' disabled selected hidden>Species</option>
                            </select>
                            <select id="second" name="Gender">
                                <option value='' disabled selected hidden>Gender</option>
                            </select>
                            <select id="third" name="Status">
                                <option value='' disabled selected hidden>Status</option>
                            </select>
                        </form>
                    </div>
                </section>
                <section className="cards">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div className="card">
                        <div className='card-top'>
                            <div className="card-image">
                                <img className="image-in-card" src={CardImage} alt="card image" />
                            </div>
                        </div>
                        
                        <div className="card-headline">
                            <h4 className="card-title">Rick Sanchez</h4>
                            <p className="card-subtitle">Human</p>
                        </div>
                    </div>
                ))}
                </section>
                <button className="content-button" type="button">Load more</button>
            </div>
    )
}

export default Locations;