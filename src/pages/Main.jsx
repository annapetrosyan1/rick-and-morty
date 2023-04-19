import './Main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Icon from '../assets/logo-black 1.svg'
import ContentImage from '../assets/content-image.svg'
import CardImage from '../assets/card img.svg'

function Main() {
    return (
        <div>
        <header>
        <img class="icon" alt="icon" src={Icon}/>
        <nav class="header-nav">
            <ul class="menu-header">
                <li><a href='#' class="menu-item">Characters</a></li>
                <li><a href='#' class="menu-item">Locations</a></li>
                <li><a href='#' class="menu-item">Episodes</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <content>
            <section class="main-image">
                <img class="content-image" alt="image" src={ContentImage} />
            </section>
            <section class="form-section">
                <div class="form-wrapper">
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
            <section class="cards">
                <div class="card">
                    <div class="card-image">
                        <img class="card-image" src={CardImage} alt="card image" />
                    </div>
                    <div class="card-headline">
                        <h4 class="card-title">Rick Sanchez</h4>
                        <p class="card-subtitle">Human</p>
                    </div>
                </div>
            </section>
            <button class="content-button" type="button">Load more</button>
        </content>
    </main>

    <footer>
    <div class="footer-text">Made by me</div>
    </footer>
    </div>
    )
}

export default Main;