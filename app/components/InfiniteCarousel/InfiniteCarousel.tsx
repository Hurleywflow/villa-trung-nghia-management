"use client";
import React, { useEffect, useRef } from 'react';
import styles from './InfiniteCarousel.module.css';

function InfiniteCarousel() {
const nextRef = useRef<HTMLButtonElement>(null);
const prevRef = useRef<HTMLButtonElement>(null);
 const slideRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = Array.from(document.querySelectorAll('.item'));
  }, []);

const handleNextClick = () => {
  if (slideRef.current) {
    slideRef.current.appendChild(itemsRef.current.length > 1? itemsRef.current[1] : itemsRef.current[0]);
  }
};

const handlePrevClick = () => {
  if (slideRef.current) {
    slideRef.current.prepend(itemsRef.current[itemsRef.current.length - 1]);
  }
};
  return (
    <div className={styles.sectionInfinite}>
      {/* Font Awesome CDN */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        integrity='sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <div className={styles.container}>
        <div className={styles.slide} ref={slideRef}>
          <div
            className='item'
            ref={itemsRef.current[0]}
            style={{
              backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)',
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Finland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className='item'
            ref={itemsRef.current[1]}
            style={{
              backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)',
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Iceland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className='item'
            ref={itemsRef.current[2]}
            style={{
              backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)',
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Australia</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className='item'
            ref={itemsRef.current[3]}
            style={{
              backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)',
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Netherland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
          <div
            className='item'
            ref={itemsRef.current[4]}
            style={{
              backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)',
            }}
          >
            <div className={styles.content}>
              <div className={styles.name}>Ireland</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button className='prev' onClick={handlePrevClick} ref={prevRef}>
            <i className='fa-solid fa-arrow-left' />
          </button>
          <button className='next' onClick={handleNextClick} ref={nextRef}>
            <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfiniteCarousel;
