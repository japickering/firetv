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
    button: {
      display: 'inline-block',
      cursor: 'pointer',
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
                <a href='#' style={styles.navbar.menu.link, styles.navbar.menu.active}>
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
        <div className='container-fluid' style={{ backgroundColor: '#000', color: '#fff' }}>
          <div id='carouselDemo' className='carousel slide' data-bs-ride='carousel'>
            <ol
              className=''
              style={{
                listStyle: 'none',
                position: 'absolute',
                zIndex: 3,
                display: 'block',
                width: 300,
                height: 'auto',
                overflow: 'hidden',
              }}>
              <li
                data-bs-target='#carouselDemo'
                data-bs-slide-to='0'
                className='active'
                style={(styles.carousel.button, styles.carousel.button.active)}>
                <img
                  src='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.atHuZsw8g1Yl5CcbdTL1lQHaEs%26pid%3DApi&f=1'
                  className=''
                  alt=''
                />
                <div>Episode 1</div>
              </li>
              <li data-bs-target='#carouselDemo' data-bs-slide-to='1' style={styles.carousel.button}>
                <img
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2kf3CHVVipxKradUiT6N6wHaEK%26pid%3DApi&f=1
'
                  className=''
                  alt=''
                  border='0'
                />
                <div>Episode 2</div>
              </li>
              <li data-bs-target='#carouselDemo' data-bs-slide-to='2' style={styles.carousel.button}>
                <img
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-76PFSqaH-45P-Matj0cfQHaDt%26pid%3DApi&f=1
'
                  className=''
                  alt=''
                  border='0'
                />
                <div>Episode 3</div>
              </li>
            </ol>
            <div className='carousel-inner' style={{ maxHeight: '900', overflow: 'hidden' }}>
              <div className='carousel-item active'>
                <img
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fksassets.timeincuk.net%2Fwp%2Fuploads%2Fsites%2F55%2F2017%2F08%2F2017_GameOfThrones_HBO_220817.jpg&f=1&nofb=1
'
                  className='d-block w-100'
                  alt=''
                />
                <div class='carousel-caption'>
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.vanityfair.com%2Fphotos%2F5ce2a59f1d6b8739f44c2f54%2F16%3A9%2Fw_1280%2Cc_limit%2Fgame-of-thrones-finale-daenerys-death-emilia-clarke.jpg%3Fmbid%3Dsocial_retweet&f=1&nofb=1
'
                  className='d-block w-100'
                  alt=''
                />
                <div class='carousel-caption'>
                  <h5>Seond slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img
                  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscreenrant.com%2Fwp-content%2Fuploads%2F2017%2F08%2FThe-Night-King-in-the-Game-of-Thrones-episode-Hardhome.jpg&f=1&nofb=1
'
                  className='d-block w-100'
                  alt=''
                />
                <div class='carousel-caption'>
                  <h5>Third slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
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
