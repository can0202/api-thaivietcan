'use client';
import React, { useState, useEffect } from 'react';
import { fetchPosts } from './api/getAllPost';
import CartItem from './components/CartItem';
import Skeleton from './components/CartItem/Skeleton';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAPI = async () => {
    const data = {
      pageSize: 12,
      post_author_user: '',
    };

    if (data) {
      const results = await fetchPosts(data);
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
        <div className='post__all'>
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
}
