'use client';
import { useContext } from 'react';

import Card from '@/components/card/Card';
import Pagination from '@/components/pagination/Pagination';

import { FilterContext } from '@/context/FilterContext';

import { IProduct } from '@/utils/api';

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const { isLoading, filteredProducts, error, currentPage, setCurrentPage } =
    useContext(FilterContext);

  if (error) {
    return <p className='text-center text-red-500'>{error}</p>;
  }

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className='mb-10 max-w-7xl m-auto'>
      <div className='container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  justify-items-center'>
        {currentProducts.length === 0 ? (
          isLoading ? (
            <p className='text-center text-gray-500'>Loading...</p>
          ) : (
            <p className='text-center text-gray-500'>No products found</p>
          )
        ) : (
          currentProducts.map((product: IProduct) => (
            <Card key={product.id} {...product} />
          ))
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
