'use client';
import { fetchMenus } from '@/app/api/getItemMenu';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SkeletonHeader from './skeleton';

const Header = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  // get menu item
  const fetchAPI = async () => {
    const id = 30;
    if (id) {
      const results = await fetchMenus(id);
      const items = results?.data ?? [];
      setMenus(items);
      setLoading(true);
    }
  };
  useEffect(() => {
    setLoading(false);
    fetchAPI();
  }, []);
  return (
    <header className='header'>
      <div className='container'>
        {/* Header Top */}
        <div className='header__top d-flex align-items-center justify-between'>
          <div className='header__social pc'>
            <ul>
              <li title='Facebook'>
                <Link
                  href={`https://www.facebook.com/profile.php?id=100077554684246`}
                  passHref
                  legacyBehavior
                >
                  <a>F</a>
                </Link>
              </li>
              <li title='Email'>
                <Link
                  href={`mailto:vietcanthai1996@gmail.com`}
                  passHref
                  legacyBehavior
                >
                  <a>E</a>
                </Link>
              </li>
              <li title='Phone'>
                <Link href={`tel:0396393483`} passHref legacyBehavior>
                  <a>P</a>
                </Link>
              </li>
              <li title='Skype'>
                <Link href={`#`} passHref legacyBehavior>
                  <a>S</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='header__logo'>
            <Link href='/' className='d-flex align-items-center'>
              <div className='logo__icon d-flex align-items-center'>
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <span className='pointer-effect'>Code</span>
              </div>
              <div className='logo__text'>
                <span>Thaivietcan</span>
              </div>
            </Link>
          </div>
          <div className='header__login' id='header__login'>
            {/* <a href="#" className="logged d-flex align-items-center" id="logged" title="Logged">
                <i className="ion-person"></i>
                <span><?= $current_user->display_name; ?></span>
              </a>
              <ul className="profile__user" id="profile__user">
                <li><a href="<?php echo get_home_url(); ?>/yeu-thich/">Danh sách yêu thích</a></li>
                <li><a href="<?php echo esc_url(wp_logout_url()); ?>">Đăng xuất</a></li>
              </ul> */}
            <a className='login__button' href='#' title='Login'>
              Đăng nhập
            </a>
          </div>
        </div>

        {/* Header Middle */}
        <div className='header__middle'>
          <h1 className='title__main'>
            Nothing is too small to know, and nothing too big to attempt.
          </h1>
        </div>

        {/* Header Bottom */}
        <div className='header__bottom '>
          <ul className='menus d-flex align-items-center justify-center'>
            {/* Get menu */}
            {!loading ? (
              <SkeletonHeader />
            ) : (
              <>
                {menus.map((item) => {
                  const url = item?.url.split('/');
                  return (
                    <li key={item?.ID}>
                      <Link
                        passHref
                        legacyBehavior
                        href={`/${url[4]}/${url[5]}`}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
