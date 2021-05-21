import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './styles.css';
function SkeletonCard() {
  return (
    <>
      <div className="skeleton-card--group lg">
        {Array(14)
          .fill()
          .map((item, index) => {
            return (
              <div className="skeleton-card" key={index}>
                <div className="skeleton-card--content">
                  <Skeleton height={`15rem`} />
                  <div className="skeleton-card--info">
                    <Skeleton height={`1.25rem`} width={`100%`} />
                    <Skeleton height={`.9rem`} width={`80%`} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="skeleton-card--group md">
        {Array(14)
          .fill()
          .map((item, index) => {
            return (
              <div className="skeleton-card" key={index}>
                <div className="skeleton-card--content">
                  <Skeleton height={`10rem`} />
                  <div className="skeleton-card--info">
                    <Skeleton height={`1.25rem`} width={`100%`} />
                    <Skeleton height={`.9rem`} width={`80%`} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="skeleton-card--group sm">
        {Array(14)
          .fill()
          .map((item, index) => {
            return (
              <div className="skeleton-card" key={index}>
                <div className="skeleton-card--content">
                  <Skeleton height={100} />
                  <div className="skeleton-card--info">
                    <Skeleton height={`.9rem`} width={`100%`} />
                    <Skeleton height={`.9rem`} width={`80%`} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SkeletonCard;
