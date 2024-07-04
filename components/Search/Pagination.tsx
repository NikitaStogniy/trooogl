import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import React, { memo, useCallback } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const generatePaginationItems = (
  totalPages: number,
  currentPage: number,
  handlePageChange: (page: number) => void
) => {
  const items = [];
  const maxVisiblePages = 3;

  if (totalPages <= maxVisiblePages + 2) {
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          isActive={currentPage === 1}
          onClick={() => handlePageChange(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    if (currentPage > maxVisiblePages) {
      items.push(<PaginationEllipsis key="left-ellipsis" />);
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (currentPage < totalPages - maxVisiblePages + 1) {
      items.push(<PaginationEllipsis key="right-ellipsis" />);
    }

    items.push(
      <PaginationItem key={totalPages}>
        <PaginationLink
          isActive={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return items;
};

const PaginationComp: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  const handlePreviousClick = useCallback(() => {
    handlePageChange(currentPage - 1);
  }, [currentPage, handlePageChange]);

  const handleNextClick = useCallback(() => {
    handlePageChange(currentPage + 1);
  }, [currentPage, handlePageChange]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePreviousClick} />
        </PaginationItem>
        {generatePaginationItems(totalPages, currentPage, handlePageChange)}
        <PaginationItem>
          <PaginationNext onClick={handleNextClick} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default memo(PaginationComp);
