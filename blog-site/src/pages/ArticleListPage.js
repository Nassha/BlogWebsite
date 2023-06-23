import articles from "./articleContent";
import ArticleList from "../components/ArticlesList";


const ArticleListPage = () => {
    return(
        <>
        <h1>Articles</h1>

        <ArticleList articles={articles}/>
        </>
    )
}

export default ArticleListPage;