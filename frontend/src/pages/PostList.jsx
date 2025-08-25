import React, { useEffect, useState } from "react";
import axios from "axios";

// Dummy data for UI demonstration

const PostList = () => {

    
      const [posts, setPosts] = useState([])

  useEffect(() => {
   
    axios.get('https://frontend-backend-7.onrender.com/api/posts').then((response)=> setPosts(response.data.post)
    
    ).catch((err)=> console.log(err)
    )
  }, [])
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      justifyContent: "center",
      padding: "2rem"
    }}>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            width: "320px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#fff"
          }}
        >
          <img
            src={post.url}
            alt={post.caption}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "1rem" }}>
            <p style={{ margin: 0, fontSize: "1.1rem", color: "#333" }}>{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
