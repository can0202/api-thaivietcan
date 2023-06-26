'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PropsTypes from 'prop-types';
import Skeleton from './Skeleton';
import { Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { getFavoritePost } from '@/app/api/getFavorite';

const CartItem = ({ item, loading }) => {
  const [itemCart, setItemCart] = useState(item);
  const handleFavorite = (e) => {
    const dataObject = {
      post_id: 236,
      post_author_user: 'admin',
      is_favorite: itemCart?.is_favorite == 1 ? 0 : 1,
    };
    const fetchAPI = async () => {
      const data = await getFavoritePost(dataObject);
      if (data.code === 200) {
        setItemCart({ ...itemCart, is_favorite: is_favorite });
      }
    };
    fetchAPI();
  };
  return (
    <>
      {!loading ? (
        <Skeleton />
      ) : (
        <article className='item'>
          <div className='item__thumbnail'>
            <Link passHref legacyBehavior href={`/${item?.post_name}`}>
              <a>
                <img src={item?.thumbnail} className='thumnail wp-post-image' />
              </a>
            </Link>
            <Button
              onClick={handleFavorite}
              data-issingle='true'
              data-id={itemCart?.ID}
              data-favorite={itemCart?.is_favorite}
              className='fav-icon '
              title={`${itemCart?.is_favorite ? 'Bỏ yêu thích' : 'Yêu thích'}`}
            >
              <div className='icon-box d-inline-block'>
                <HeartFilled />
              </div>
            </Button>
          </div>
          <div className='item__content'>
            <Link href={`/${item?.post_name}`} passHref legacyBehavior>
              <a>
                <h2>{item?.post_title}</h2>
              </a>
            </Link>
            <p className='desc limit-text limit-text-2'>{item?.post_excerpt}</p>
            <div className='item__time d-flex align-items-center justify-between'>
              <p>4 phút đọc</p>
              <p className='item__time__date'>{item?.post_date}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default CartItem;
CartItem.propTypes = {
  item: PropsTypes.any,
  loading: PropsTypes.bool,
};
