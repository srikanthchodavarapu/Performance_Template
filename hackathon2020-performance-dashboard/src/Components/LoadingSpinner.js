import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner--group spinners-large center">
      <svg className="spinner__color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path d="M4,64 C1.790861,64 0,62.209139 0,60 C0,57.790861 1.790861,56 4,56 C17.254834,56 28,45.254834 28,32 C28,18.745166 17.254834,8 4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,1.42108547e-14 4,0 C21.673112,-7.10542736e-14 36,14.326888 36,32 C36,49.673112 21.673112,64 4,64 Z" transform="rotate(180 18 32)"></path>
      </svg>
      <svg className="spinner__color--counterspin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <path d="M4,64 C1.790861,64 0,62.209139 0,60 C0,57.790861 1.790861,56 4,56 C17.254834,56 28,45.254834 28,32 C28,18.745166 17.254834,8 4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,1.42108547e-14 4,0 C21.673112,-7.10542736e-14 36,14.326888 36,32 C36,49.673112 21.673112,64 4,64 Z" transform="rotate(180 18 32)"></path>
      </svg>
  </div>
  )
}

export default LoadingSpinner;
