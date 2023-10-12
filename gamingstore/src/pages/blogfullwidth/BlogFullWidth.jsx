import React from "react";
import BlogLeft from "../blogleft/BlogLeft";
import style from "../blogfullwidth/fullwidth.module.css";

const BlogFullWidth = () => {
  return (
    <>
      <BlogLeft
        fullWidth={style.fullWidth}
        className={style.container}
        blogItems={style.blogItems}
      />
    </>
  );
};

export default BlogFullWidth;
