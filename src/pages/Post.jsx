import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import posts from "../data/posts";

function Post() {
    const { id } = useParams();
    const post = posts.find((p) => p.id ===parseInt(id));

    if (!post) {
        return <div>Post não encontrado</div>;
    }


    return (
        <>
            <Header title="Meu Blog" />
            <h1>{posts[id -1].title}</h1>
            <p>{posts[id -1].author} / {posts[0].date}</p>
            <p>{posts[id -1].content}</p>
            <Footer text="Todos os direitos reservados" />
        </>
    );
}

export default Post;