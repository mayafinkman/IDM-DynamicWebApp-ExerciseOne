import React from 'react';
function ArticleCard({ articleData }){ /*passing prop into the function, can destructor so it recieves the one you want*/
    console.log("article card articleData", articleData);
    return(
        <article className="articleCard">
            <div className='articleCard__image'>
                <img src={articleData.image.url} alt={articleData.image.alt}></img>
            </div>
            <div className='articleCard__text'>
                <h2>{articleData.title}</h2> 
             {/* by referencing the article object from the data file, refer to the key title that is refered to in the data */}
                <p>{articleData.publishedDate}</p>
                <p>{articleData.blurb}</p>
                <a href={`article/${articleData.id}`}>Read More</a>
            </div>
        </article>
    );
}
export default ArticleCard;