import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import './PostList.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // Sử dụng axios
            setPosts(response.data.slice(0, 10)); // Lấy 10 bài viết đầu tiên
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Danh sách bài viết</h2>
            <button onClick={fetchPosts}>Tải lại</button>
            {loading ? <p>Đang tải...</p> : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostList;
