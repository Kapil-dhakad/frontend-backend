import React, { useState } from "react";
import axios from'axios'
import { useNavigate } from "react-router";


const Home = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

console.log(file);

  
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const form = new FormData();
    form.append('caption', caption)
    form.append('mama', file)

    console.log("form, ", form);
    

     await axios.post('https://frontend-backend-7.onrender.com/api/posts', form).then((response)=>{
      console.log(response.data);
      
    }).catch((err)=> console.log(err)
    )
    
    navigate('/posts')

  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f7f7f7" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", minWidth: "320px" }}>
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Create a Post</h2>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }} htmlFor="image">Upload File</label>
          <input type="file" id="image" name="mama" accept="image/*" onChange={(e)=> setFile(e.target.files[0])} style={{ width: "100%" }} />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }} htmlFor="caption">Caption</label>
          <input type="text" id="caption" name="caption" value={caption} onChange={(e)=>setCaption(e.target.value)} placeholder="Enter caption..." style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ddd" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", background: "#007bff", color: "#fff", border: "none", fontWeight: "bold", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
};

export default Home;
