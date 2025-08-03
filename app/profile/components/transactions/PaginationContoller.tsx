"use client";

import FillButton from "@/app/components/commen/FilledButton/FilledButton";
import styles from "../../Profile.module.scss";
import ImagePaths from "@/app/constants/ImagePaths";
import { useState, useEffect } from "react";
import React from "react";

interface PaginationControllerProps {
  initialPage?: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const PaginationController: React.FC<PaginationControllerProps> = ({
  initialPage = 1,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  return (
    <div className={styles.paginationControllerContainer}>
      <FillButton
        circleBtn={true}
        iconSrc={ImagePaths.icons.arrowLeft2}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        filledColor={currentPage === 1 ? "#FFFFFF1A" : undefined}
      />
      <h3>{currentPage}</h3>
      <FillButton
        circleBtn={true}
        iconSrc={ImagePaths.icons.arrowRight2}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        filledColor={currentPage === totalPages ? "#FFFFFF1A" : undefined}
      />
      <span>of {totalPages}</span>
    </div>
  );
};

export default PaginationController;
