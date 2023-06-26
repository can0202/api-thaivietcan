import React from 'react';

const SkeletonHeader = () => {
  return (
    <>
      {[...Array(4)].map((x, i) => (
        <li
          key={i}
          className='skeleton'
          style={{ minHeight: '24px', minWidth: '100px' }}
        >
          <a href=''></a>
        </li>
      ))}
    </>
  );
};

export default SkeletonHeader;
