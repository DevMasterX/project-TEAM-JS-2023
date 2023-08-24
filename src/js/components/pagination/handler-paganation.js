import { refs } from "../favorites";
import { elementstyle } from "../utils";

export function handleIsHiddenPaginationGavorite(arr = []) {
    if (arr.length < 12) {
        elementstyle(refs.paginationDiv, "display", "none")
    } else {
        elementstyle(refs.paginationDiv, "display", "block")
    }
}

// import { initialStatePagination } from "./pagination";



// export function handlePagination({ page: activePage, totalPage }) {
//     initialStatePagination.currentPage = +activePage;
//     initialStatePagination.totalPage = totalPage;
//     // if (totalPage < 6) {
//     //     initialStatePagination.step = 2
//     // } else {
//     //     initialStatePagination.step = 3
//     // }

//     renderPages(totalPage, activePage);
// }