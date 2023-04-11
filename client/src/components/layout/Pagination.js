import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129,
  130, 131,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[47%] md:w-[31.7%] lg:w-[30%]"
          >
            <Product
              className="mb-9 w-full lg:mb-12"
              imgClass="w-full"
              src="assets/so1.png"
              alt="special_offer_1"
              badgeShow={true}
              badgeTitle="New"
              productTitle="Basic Table Watch"
              productPrice="$44.00"
              productColor="Black"
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="sm:flex sm:flex-wrap sm:justify-between xl:gap-x-10">
        <Items currentItems={currentItems} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-6">
        <ReactPaginate
          breakLabel="..."
          breakClassName="w-9 h-9 text-center"
          breakLinkClassName="inline-block w-full h-full leading-9 text-secondary"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex flex-wrap gap-y-[10px] gap-x-3.5"
          pageClassName="w-7 h-7 leading-7 lg:w-9 lg:h-9 lg:leading-9 text-center border border-solid border-smoke font-dm font-normal text-sm text-secondary"
          pageLinkClassName="inline-block w-full h-full"
          previousClassName="hidden"
          nextClassName="hidden"
          activeClassName="w-7 h-7 leading-7 lg:w-9 lg:h-9 lg:leading-9 text-center border border-solid border-transparent font-dm font-normal text-sm !text-pure bg-primary"
        />

        <p className="py-2 font-dm text-xs font-normal text-secondary lg:text-sm xl:absolute xl:bottom-0 xl:right-0">
          Products from {itemOffset} to {endOffset} of {items.length}
        </p>
      </div>
    </>
  );
};

export default Pagination;
