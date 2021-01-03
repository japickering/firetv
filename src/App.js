import './App.css';

import React, { Component } from 'react';

const styles = {
  navbar: {
    menu: {
      listStyle: 'none',
      item: {
        display: 'inline',
        marginRight: 20,
      },
      link: {
        color: '#aaa',
        textDecoration: 'none',
      },
      active: {
        color: '#fff',
        textDecoration: 'none',
      },
    },
  },
  carousel: {
    nav: {
      listStyle: 'none',
      position: 'fixed',
      // top: 0,
      bottom: 0,
      // right: 20,
      zIndex: 3,
      display: 'block',
      width: 1300,
      height: 'auto',
      overflow: 'hidden',
    },
    button: {
      display: 'inline-block',
      width: 300,
      cursor: 'pointer',
      img: {
        width: '100%',
        height: 'auto',
      },
      active: {
        width: '100%',
        height: 'auto',
        border: '1px solid goldenrod',
      },
    },
  },
};

export default class App extends Component {
  constructor() {
    super();
    this.state = { slide: 0 };
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-dark' style={{ backgroundColor: '#000' }}>
          <div className='container-fluid mt-2' style={{ backgroundColor: '#000' }}>
            <ul style={styles.navbar.menu}>
              <li className='active' style={styles.navbar.menu.item}>
                <a href='#' style={(styles.navbar.menu.link, styles.navbar.menu.active)}>
                  Home
                </a>
              </li>
              <li style={styles.navbar.menu.item}>
                <a href='#' style={styles.navbar.menu.link}>
                  Your Videos
                </a>
              </li>
              <li style={styles.navbar.menu.item}>
                <a href='#' style={styles.navbar.menu.link}>
                  Movies
                </a>
              </li>
              <li style={styles.navbar.menu.item}>
                <a href='#' style={styles.navbar.menu.link}>
                  TV Shows
                </a>
              </li>
              <li style={styles.navbar.menu.item}>
                <a href='#' style={styles.navbar.menu.link}>
                  Settings
                </a>
              </li>
            </ul>
            {/* <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='start typing..'
                aria-label='Search'
                autoComplete={true}
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form> */}
          </div>
        </nav>
        <header style={{marginLeft: '2em'}}>
          <h3>Game of Thrones: Season 1 - Deluxe Edition</h3>
        </header>
        <div className='container-fluid' style={{ backgroundColor: '#000', color: '#fff' }}>
          <div id='slider' className='carousel slide' data-bs-ride='carousel'>
            <ol className='' style={styles.carousel.nav}>
              <li data-bs-target='#slider' data-bs-slide-to='0' className='active' style={styles.carousel.button}>
                <img
                  src='https://i.ytimg.com/vi/sOEYa09bKRc/maxresdefault.jpg'
                  style={styles.carousel.button.active}
                  alt=''
                />
                <div>Game of Thrones - Winter Is Coming</div>
              </li>
              <li data-bs-target='#slider' data-bs-slide-to='1' style={styles.carousel.button}>
                <img
                  src='https://i.ytimg.com/vi/9TYq46lm7mM/maxresdefault.jpg'
                  style={styles.carousel.button.img}
                  alt=''
                />
                <div>Game of Thrones - The Kingsroad</div>
              </li>
              <li data-bs-target='#slider' data-bs-slide-to='2' style={styles.carousel.button}>
                <img
                  src='https://i.ytimg.com/vi/R4j4JS85jaI/maxresdefault.jpg'
                  style={styles.carousel.button.img}
                  alt=''
                />
                <div>Game of Thrones - Lord Snow</div>
              </li>
              <li data-bs-target='#slider' data-bs-slide-to='3' style={styles.carousel.button}>
                <img
                  src='https://i.ytimg.com/vi/KGDk4-WV-Jw/maxresdefault.jpg'
                  style={styles.carousel.button.img}
                  alt=''
                />
                <div>Game of Thrones - Cripples, Bastards ..</div>
              </li>
            </ol>

            <div className='carousel-inner' style={{ paddingLeft: '200px', maxHeight: '1000', overflow: 'hidden' }}>
              <div className='carousel-item active'>
                <iframe
                  width='1159'
                  height='652'
                  src='https://www.youtube.com/embed/sOEYa09bKRc?list=EL3wIaqYZMc08'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              </div>
              <div className='carousel-item'>
                <iframe
                  width='1159'
                  height='652'
                  src='https://www.youtube.com/embed/9TYq46lm7mM?list=EL3wIaqYZMc08'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              </div>
              <div className='carousel-item'>
                <iframe
                  width='1159'
                  height='652'
                  src='https://www.youtube.com/embed/R4j4JS85jaI?list=EL3wIaqYZMc08'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              </div>
              <div className='carousel-item'>
                <iframe
                  width='1157'
                  height='651'
                  src='https://www.youtube.com/embed/KGDk4-WV-Jw?list=EL3wIaqYZMc08'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen></iframe>
              </div>
            </div>
            <a className='carousel-control-prev' href='#carouselDemo' role='button' data-bs-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </a>
            <a className='carousel-control-next' href='#carouselDemo' role='button' data-bs-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
