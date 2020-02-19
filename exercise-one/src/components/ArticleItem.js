import React from 'react';

function ArticleItem({ data, type }) {
    if (type === "p") {
        return <p>{data}</p>;
    }
    if (type == "h2") {
        return <h2>{data}</h2>;
    }
    return (
        <p>{data}</p>
    
    
)

}

export default ArticleItem;