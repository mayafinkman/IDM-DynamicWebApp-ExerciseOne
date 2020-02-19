import React, { useEffect, useState} from "react"; //need useEffect to change/update data on page
import { useParams } from "react-router-dom"; //abstraction function from react, 

import DATA from "../components/Data";
import ArticleItem from "../components/ArticleItem"

function Article() {
    const [article, setArticle] = useState({}); //state functions, article is just varibles, named this way to keep consistent, empty object when first set
    let { id } = useParams(); //grabbing one item out of the params object 

    useEffect(() => {//standard fucntion, two params, setting state to the set  of data that we want
        let dataArray = DATA.filter(article => article.id === id);    //we are filtering all objects that do not match the ID of the page 
        setArticle(dataArray[0])
    }, [id]);



   
    console.log("data", DATA);


    return (
        <div>
            <header
                className="articleHeader"
                style={{
                backgroundImage: `url(${article.image && article.image.url})` //double and statement insures article image exists before you depth into it
            }
            }>
                <div className="articleHeaderWrapper">
                    <h1>{article.title}</h1>
                    <p>{article.publishedDate}</p>
                    <p>{article.blurb}</p>
                </div>
            </header>
            <main className="articleContent">
                <div className="articleContentWrapper">
                    {article.articleText && article.articleText.map((text, i) => ( //double and statement insures article data exists before you map over it
                    <ArticleItem key={i} data={text.data} type={text.type}/> ))}

                </div>
            </main>
        </div>
    )
}
export default Article;