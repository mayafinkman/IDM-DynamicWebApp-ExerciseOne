import React from 'react';
import ArticleCard from '../components/ArticleCard';

import Data from '../components/Data';


function ArticleListing(){
    console.log('data', Data);
    return(
        <div className='articleListing'> 
            <header>
                <h1>Articles</h1>
            </header>
            <main>
                {Data.map((article, i)=> ( /* an array, article is every single data, i is the key, arrow is auto returning everything afterwards */
                    <ArticleCard key={i} articleData={article} /> /* returning an article card, key is to point to memory, passing in the article prop from above into the article card*/
                ))}
                
            </main>

        </div>
    )
        
}
export default ArticleListing;