import { useParams } from "react-router";
import articles from "./articleContent";
import NotFound from "./NotFound";

const ArticlePage = () => {
    const { articleId } = useParams();
    const article =articles.find(article => article.name === articleId);

    if (!article){
        return <NotFound />
    }
    return(
        <>

        <h1>{article.title}</h1>

        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}

        </>
        

    );
}

export default ArticlePage;