'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { fetchPostDetail } from '../api/getPostDetail';
import Link from 'next/link';
import LoadingApp from '../components/Loading';

const Single = () => {
  const pathname = usePathname().split('&');
  const [dataPost, setDataPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAPI = async () => {
    const data = {
      permalink: pathname[0],
      post_author_user: '',
    };

    if (data) {
      const results = await fetchPostDetail(data);
      const items = results?.posts_data;
      setDataPost(items);
      setLoading(true);
    }
  };
  useEffect(() => {
    setLoading(false);
    fetchAPI();
  }, []);
  return (
    <section>
      {!loading ? (
        <LoadingApp />
      ) : (
        <div className='single'>
          <div className='container'>
            <div className='single-inner'>
              <header className='entry-header'>
                <div className='entry-meta entry-category'>
                  <span className='cat-links '>
                    <Link
                      className=''
                      passHref
                      legacyBehavior
                      href={`/${dataPost[0]?.category[0]?.taxonomy}/${dataPost[0]?.category[0]?.slug}`}
                    >
                      <a>{dataPost[0]?.category[0]?.name}</a>
                    </Link>
                  </span>
                </div>
                <h1 className='entry-title'>{dataPost[0]?.post_title}</h1>
              </header>
              <figure className='entry-thumbnail'>
                <img
                  width='768'
                  height='320'
                  src={dataPost[0]?.thumbnail}
                  className='attachment-post-thumbnail size-post-thumbnail wp-post-image'
                  alt=''
                  decoding='async'
                />{' '}
              </figure>
              <div
                className='entry-content'
                dangerouslySetInnerHTML={{ __html: dataPost[0]?.post_content }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Single;
