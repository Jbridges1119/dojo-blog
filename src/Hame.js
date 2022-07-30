import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const [name,setName] = useState("mario")
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  //doesn't mutate blogs - filter info based on a boolean value pass
  const filterBlogs = blogs.filter((blog) => blog.author === "mario");


  useEffect(() => {

  },[name])

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} title="All Blogs!" />
      <button onClick={() => setName("luigi")} >change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
