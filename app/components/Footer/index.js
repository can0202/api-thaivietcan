import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer__main d-flex align-items-center justify-between'>
            <div className='footer__menus'>
              <ul className='menus'>
                <li>
                  <a href='http://localhost/thaivietcan'>Trang chủ</a>
                </li>
                <li>
                  <a href='tel:0396393483'>Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className='footer__copyright'>
              <p>
                © 2021 - 2023 <span className='line'></span> Thai Viet Can. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
