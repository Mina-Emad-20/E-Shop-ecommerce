import ReactPaginate from "react-paginate";





export default function Pagination({ pageCount, onPress }) {
    const handlePageClick = (data) => {
        onPress(data.selected + 1)
    }
    return (
        <div className="pt-4">
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="Previous"
                containerClassName={"pagination justify-content-center p-3"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}
