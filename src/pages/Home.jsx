import PostList from "../components/PostList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import posts from "../data/posts";

function Home(){
    return (
        <>
            <Header />
            <PostList posts={posts} />
            <Footer />
        </>
    );
}

export default Home;