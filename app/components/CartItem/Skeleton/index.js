import React from 'react';
const Skeleton = () => {
  return (
    <div className='d-grid grid-template-3 gap'>
      {[...Array(9)].map((x, i) => (
        <article key={i} className='item'>
          <div className='item__thumbnail skeleton'>
            <a href=''>
              <div style={{ height: '250px', width: '100%' }}></div>
            </a>
            <button className='skeleton'>
              <div className='icon-box d-inline-block'></div>
            </button>
          </div>
          <div className='item__content'>
            <h2 className='skeleton w-100' style={{ minHeight: '24px' }}></h2>
            <p
              className='desc limit-text limit-text-2 skeleton w-100'
              style={{ minHeight: '24px', marginBottom: '8px' }}
            ></p>
            <div className='item__time d-flex align-items-center justify-between'>
              <p className='skeleton w-20' style={{ minHeight: '24px' }}></p>
              <p
                className='item__time__date skeleton w-20'
                style={{ minHeight: '24px' }}
              ></p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Skeleton;
