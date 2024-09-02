'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { FilterContext } from '@/context/FilterContext';
import SearchIcon from '../svgs/SearchIcon';

const Navbar = () => {
  const { push } = useRouter();

  const { setActive, setPromotion, setSearch } = useContext(FilterContext);

  return (
    <nav className='bg-white shadow-md p-4' aria-label='Main Navigation'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <span
            onClick={() => push('/')}
            role='button'
            tabIndex={0}
            aria-label='Home'
            className='text-xl font-bold cursor-pointer'>
            LOGO
          </span>
          <button
            onClick={() => push('/login')}
            className='md:hidden border border-blue-500 text-blue-500 rounded-md px-4 py-2'
            aria-label='Log in'>
            Log in
          </button>
        </div>

        <div className='mt-4 w-full gap-6 md:mt-0 flex md:flex-grow md:justify-center flex-col-reverse md:flex-row'>
          <div className='flex space-x-4 md:space-x-6 '>
            <label className='inline-flex items-center'>
              <input
                onChange={e => setActive(e.target.checked)}
                type='checkbox'
                className='form-checkbox text-blue-600'
                aria-label='Filter active products'
              />
              <span className='ml-2'>Active</span>
            </label>
            <label className='inline-flex items-center'>
              <input
                onChange={e => setPromotion(e.target.checked)}
                type='checkbox'
                className='form-checkbox text-blue-600'
                aria-label='Filter promotional products'
              />
              <span className='ml-2'>Promo</span>
            </label>
          </div>
          <label className='relative block w-full md:max-w-xs'>
            <span className='sr-only'>Search</span>
            <span className='absolute inset-y-0 pr-5 right-0 flex items-center pl-2'>
              <SearchIcon />
            </span>
            <input
              className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm'
              placeholder='Search'
              type='text'
              name='search'
              aria-label='Search'
              onChange={e => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0'>
          <button
            onClick={() => push('/login')}
            className='hidden w-max hover:bg-blue-500 hover:text-white md:inline-block border border-blue-500 text-blue-500 rounded-md px-4 py-2 ml-4'
            aria-label='Log in'>
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
