'use client';
import { fetchPostCategory } from '@/app/api/getPostCategory';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CartItem from '@/app/components/CartItem';
import Skeleton from '@/app/components/CartItem/Skeleton';

const Category = () => {
  const pathname = usePathname().split('/');
  const permalink = pathname[2].split('&')[0];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAPI = async () => {
    const data = {
      category: permalink,
      pageSize: 12,
    };
    if (data) {
      const results = await fetchPostCategory(data);
      const items = results?.posts_data ?? [];
      setPosts(items);
      setLoading(true);
    }
  };
  useEffect(() => {
    setLoading(false);
    fetchAPI();
  }, []);

  return (
    <>
      <div className='home page'>
        <div className='post__all '>
          {posts?.length == 0 ? (
            <>
              {!loading ? (
                <Skeleton posts={posts} />
              ) : (
                <p style={{ color: '#fff', textAlign: 'center' }}>
                  Nội dung đang cập nhật...
                </p>
              )}
            </>
          ) : (
            <div className='d-grid grid-template-3 gap'>
              {posts?.map((item) => {
                return (
                  <CartItem key={item?.ID} item={item} loading={loading} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
