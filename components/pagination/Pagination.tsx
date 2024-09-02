interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

interface Page {
  number: number | null;
  label: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const generatePageNumbers = (): Page[] => {
    const pages: Page[] = [];

    const addPage = (pageNumber: number, label: string) => {
      if (
        pageNumber > 0 &&
        pageNumber <= totalPages &&
        !pages.some(page => page.number === pageNumber)
      ) {
        pages.push({ number: pageNumber, label });
      }
    };

    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      addPage(i, i.toString());
    }

    if (totalPages > 6 && currentPage > 4) {
      pages.push({ number: null, label: '...' });
    }

    const rangeStart = Math.max(4, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 3, currentPage + 1);
    for (let i = rangeStart; i <= rangeEnd; i++) {
      addPage(i, i.toString());
    }

    if (totalPages > 6 && currentPage < totalPages - 3) {
      pages.push({ number: null, label: '...' });
    }

    for (let i = Math.max(totalPages - 2, 4); i <= totalPages; i++) {
      addPage(i, i.toString());
    }

    if (totalPages > 1) {
      pages.unshift({ number: 1, label: 'First' });
      pages.push({ number: totalPages, label: 'Last' });
    }

    return pages;
  };

  return (
    <div className='flex justify-center gap-2 mt-4'>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => page.number && onPageChange(page.number)}
          disabled={page.number === null}
          aria-label={`${page.label} page`}
          className={`px-3 py-1
            ${
              page.number === currentPage ? ' text-blue-500' : ' text-inherit'
            } ${
            page.number === null
              ? 'cursor-default text-gray-500'
              : 'cursor-pointer hover:text-blue-700'
          }
          ${
            page.number === currentPage &&
            (page.label === 'First' || page.label === 'Last') &&
            'text-gray-300 cursor-not-allowed pointer-events-none'
          }
          `}>
          {page.label}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
