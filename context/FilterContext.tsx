'use client';
import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

import { IProduct } from '@/utils/api';

interface FilterContextValues {
  setActive: Dispatch<SetStateAction<boolean>>;
  setPromotion: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  filteredProducts: IProduct[];
  error: string | null;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
}

const deafultContextValues = {
  setActive: () => {},
  active: false,
  setPromotion: () => {},
  promotion: false,
  setSearch: () => {},
  search: '',
  filteredProducts: [],
  error: null,
  currentPage: 1,
  setCurrentPage: () => {},
  isLoading: true,
};

export const FilterContext =
  createContext<FilterContextValues>(deafultContextValues);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(deafultContextValues.active);
  const [promotion, setPromotion] = useState(deafultContextValues.promotion);
  const [search, setSearch] = useState(deafultContextValues.search);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(
    deafultContextValues.filteredProducts
  );
  const [error, setError] = useState<string | null>(deafultContextValues.error);
  const [currentPage, setCurrentPage] = useState(
    deafultContextValues.currentPage
  );
  const [isLoading, setIsLoading] = useState(deafultContextValues.isLoading);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          'https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products'
        );
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedProducts = await res.json();
        setProducts(fetchedProducts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Something went wrong');
        }
        setProducts([]);
      }

      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (active) {
      filtered = filtered.filter(product => product.active);
    }

    if (promotion) {
      filtered = filtered.filter(product => product.promotion);
    }

    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [active, promotion, search, products]);

  return (
    <FilterContext.Provider
      value={{
        setActive,
        setPromotion,
        setSearch,
        filteredProducts,
        error,
        currentPage,
        setCurrentPage,
        isLoading,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
