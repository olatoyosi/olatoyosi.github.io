import {useCallback, useEffect, useState} from "react";

const usePagination = (data, perPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    const paginate = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
        setCurrentData(data.slice((pageNumber - 1) * perPage, pageNumber * perPage));
    //    eslint-disable-next-line
    },[data, perPage])

    const handlePrev = useCallback(() => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    //    eslint-disable-next-line
    }, [currentPage])

    const handleNext = useCallback(() => {
        if (currentPage < Math.ceil(data.length / perPage)) {
            paginate(currentPage + 1);
        }
        //    eslint-disable-next-line
     },[currentPage, data])

    useEffect(()=>{
        paginate(currentPage);
        //    eslint-disable-next-line
    }, [])

    return {
        currentPage,
        currentData,
        paginate,
        handlePrev,
        handleNext
    }
};

export default usePagination;