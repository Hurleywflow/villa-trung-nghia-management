'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';
import styles from './style.module.css';

type Props = {};

const Testimonials: FC<Props> = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <section ref={container}>
      <motion.div
        style={{ x: x1 }}
        className='grid gap-6 text-center md:grid-cols-3 lg:gap-12'
      >
        <div className='mb-6 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:inline-block'>
          <div className='flex items-start text-left'>
            <div className='flex-shrink-0'>
              <div className='relative inline-block'>
                <a href='#' className='relative block'>
                  <img
                    alt='profil'
                    src='/images/person/1.jpg'
                    className='mx-auto h-16 w-16 rounded-full object-cover '
                  />
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  className='absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white'
                >
                  <path d='M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z'></path>
                </svg>
              </div>
            </div>
            <div className='ml-6'>
              <p className='flex items-baseline'>
                <span className='font-bold text-gray-600 dark:text-gray-200'>
                  A Msan
                </span>
                <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                  2 months ago
                </span>
              </p>
              <div className='mt-1 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <p className='mt-1 max-w-xs dark:text-white'>
                  My first job of scanning photos at the Memories 2 Digital
                  Photo Scanning was fantastic. She completed the work quickly
                  while I was waiting. Thanks for a great service..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-6 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:inline-block'>
          <div className='flex items-start text-left'>
            <div className='flex-shrink-0'>
              <div className='relative inline-block'>
                <a href='#' className='relative block'>
                  <img
                    alt='profil'
                    src='/images/person/1.jpg'
                    className='mx-auto h-16 w-16 rounded-full object-cover '
                  />
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  className='absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white'
                >
                  <path d='M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z'></path>
                </svg>
              </div>
            </div>
            <div className='ml-6'>
              <p className='flex items-baseline'>
                <span className='font-bold text-gray-600 dark:text-gray-200'>
                  A Msan
                </span>
                <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                  2 months ago
                </span>
              </p>
              <div className='mt-1 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <p className='mt-1 max-w-xs dark:text-white'>
                  My first job of scanning photos at the Memories 2 Digital
                  Photo Scanning was fantastic. She completed the work quickly
                  while I was waiting. Thanks for a great service..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-6 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:hidden md:inline-block'>
          <div className='flex items-start text-left'>
            <div className='flex-shrink-0'>
              <div className='relative inline-block'>
                <a href='#' className='relative block'>
                  <img
                    alt='profil'
                    src='/images/person/1.jpg'
                    className='mx-auto h-16 w-16 rounded-full object-cover '
                  />
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  className='absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white'
                >
                  <path d='M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z'></path>
                </svg>
              </div>
            </div>
            <div className='ml-6'>
              <p className='flex items-baseline'>
                <span className='font-bold text-gray-600 dark:text-gray-200'>
                  A Msan
                </span>
                <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                  2 months ago
                </span>
              </p>
              <div className='mt-1 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <p className='mt-1 max-w-xs dark:text-white'>
                  My first job of scanning photos at the Memories 2 Digital
                  Photo Scanning was fantastic. She completed the work quickly
                  while I was waiting. Thanks for a great service..
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className=' grid gap-6 text-center md:grid-cols-3 lg:gap-12'
      >
        <div className='mb-6 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:inline-block'>
          <div className='flex items-start text-left'>
            <div className='flex-shrink-0'>
              <div className='relative inline-block'>
                <a href='#' className='relative block'>
                  <img
                    alt='profil'
                    src='/images/person/1.jpg'
                    className='mx-auto h-16 w-16 rounded-full object-cover '
                  />
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  className='absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white'
                >
                  <path d='M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z'></path>
                </svg>
              </div>
            </div>
            <div className='ml-6'>
              <p className='flex items-baseline'>
                <span className='font-bold text-gray-600 dark:text-gray-200'>
                  A Msan
                </span>
                <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                  2 months ago
                </span>
              </p>
              <div className='mt-1 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <p className='mt-1 max-w-xs dark:text-white'>
                  My first job of scanning photos at the Memories 2 Digital
                  Photo Scanning was fantastic. She completed the work quickly
                  while I was waiting. Thanks for a great service..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-6 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:inline-block'>
          <div className='flex items-start text-left'>
            <div className='flex-shrink-0'>
              <div className='relative inline-block'>
                <a href='#' className='relative block'>
                  <img
                    alt='profil'
                    src='/images/person/1.jpg'
                    className='mx-auto h-16 w-16 rounded-full object-cover '
                  />
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  className='absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white'
                >
                  <path d='M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z'></path>
                </svg>
              </div>
            </div>
            <div className='ml-6'>
              <p className='flex items-baseline'>
                <span className='font-bold text-gray-600 dark:text-gray-200'>
                  A Msan
                </span>
                <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                  2 months ago
                </span>
              </p>
              <div className='mt-1 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <p className='mt-1 max-w-xs dark:text-white'>
                  My first job of scanning photos at the Memories 2 Digital
                  Photo Scanning was fantastic. She completed the work quickly
                  while I was waiting. Thanks for a great service..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-6 w-full rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:hidden md:inline-block'>
          <div className='flex items-start text-left'>
            <div className='flex-shrink-0'>
              <div className='relative inline-block'>
                <a href='#' className='relative block'>
                  <img
                    alt='profil'
                    src='/images/person/1.jpg'
                    className='mx-auto h-16 w-16 rounded-full object-cover '
                  />
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  className='absolute bottom-0 right-0 -mx-1 -my-1 h-6 w-6 rounded-full bg-green-600 fill-current p-1 text-white'
                >
                  <path d='M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z'></path>
                </svg>
              </div>
            </div>
            <div className='ml-6'>
              <p className='flex items-baseline'>
                <span className='font-bold text-gray-600 dark:text-gray-200'>
                  A Msan
                </span>
                <span className='ml-2 text-sm text-gray-500 dark:text-gray-300'>
                  2 months ago
                </span>
              </p>
              <div className='mt-1 flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  className='h-4 w-4 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 1792 1792'
                >
                  <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <p className='mt-1 max-w-xs dark:text-white'>
                  My first job of scanning photos at the Memories 2 Digital
                  Photo Scanning was fantastic. She completed the work quickly
                  while I was waiting. Thanks for a great service..
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </section>
  );
};
export default Testimonials;
