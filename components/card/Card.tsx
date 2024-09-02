import Image from 'next/image';

import { IProduct } from '@/utils/api';

import GoldenStar from '@/components/svgs/GoldenStar';
import EmptyStar from '@/components/svgs/EmptyStar';

function Card({ ...product }: IProduct) {
  const ratingValue = Math.round(+product.rating / 2);

  return (
    <div className='max-w-xs flex flex-col justify-between rounded-lg overflow-hidden shadow-lg bg-white'>
      <div className={`relative w-full h-48 ${!product.active && 'grayscale'}`}>
        <Image
          className='w-full h-full object-cover'
          src={product.image}
          alt={`Image of ${product.name}`}
          width={256}
          height={192}
          priority={true}
        />
        {!product.active && (
          <div
            className='absolute inset-0 bg-gray-500 bg-opacity-50'
            aria-hidden='true'
          />
        )}
        {product.promotion && (
          <div
            className='absolute top-10 left-0 px-4 rounded-r text-lg bg-yellow-500'
            aria-label='Product on promotion'>
            <span className='text-white text-base'>Promo</span>
          </div>
        )}
      </div>
      <div className='p-4 flex flex-col flex-grow'>
        <h2 className='text-lg font-semibold'>{product.name}</h2>
        <p className='text-gray-600 text-sm mt-1 flex-grow'>
          {product.description}
        </p>
        <div className='flex flex-col mt-12'>
          <div
            className='flex text-yellow-500 mb-4'
            aria-label={`Rating: ${product.rating} out of 10`}>
            {[...Array(ratingValue)].map((_, i) => (
              <GoldenStar key={i} aria-hidden='true' />
            ))}
            {[...Array(5 - ratingValue)].map((_, i) => (
              <EmptyStar key={i} aria-hidden='true' />
            ))}
          </div>
          <button
            disabled={!product.active}
            className={`w-full ${
              product.active
                ? 'bg-blue-500 hover:bg-blue-600 transition duration-200'
                : 'bg-gray-500 cursor-not-allowed'
            } text-white py-2 rounded-lg`}
            aria-label={
              product.active ? 'Show product details' : 'Product unavailable'
            }>
            {product.active ? 'Show Details' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
