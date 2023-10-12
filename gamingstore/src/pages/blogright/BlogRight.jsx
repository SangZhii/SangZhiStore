import React from "react";
import BlogLeft from "../blogleft/BlogLeft";
import style from "../blogright/blogright.module.css";

const BlogRight = () => {
  return (
    <>
      <BlogLeft className={style.blogContainer} />
    </>
  );
};

export default BlogRight;
