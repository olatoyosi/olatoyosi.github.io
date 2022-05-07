import {useCallback, useEffect, useState} from "react";

const usePagination = (data, perPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    const paginate = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
        setCurrentData(data.slice((pageNumber - 1) * perPage, pageNumber * perPage));
    },[data, perPage])

    const handlePrev = useCallback(() => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    }, [currentPage])

    const handleNext = useCallback(() => {
        if (currentPage < Math.ceil(data.length / perPage)) {
            paginate(currentPage + 1);
        }
     },[currentPage, data])

    useEffect(()=>{
        paginate(currentPage);
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