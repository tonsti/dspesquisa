import React from 'react';
import { getTokenSourceMapRange } from 'typescript';
import './styles.css';

type Props = {
    totalPages?: number;
    goToPage: Function;
    activePage: number; 
}

const Pagination = ({ totalPages = 0, goToPage, activePage: activepage }: Props) => {
    const paginationItems = Array.from(Array(totalPages).keys());
    return (
        <div className="pagination-container">
            {paginationItems.map(item => (
                <button key={item}
                className = {`pagination-item ${activepage === item ? 'active' : 'inactive'}`}
                onClick={() => goToPage(item)}>
                    {item +1}
                </button>
            ))}
        
    </div>
    );
}

export default Pagination;