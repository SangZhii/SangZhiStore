import React from "react";
import "../latestblog/lastestblog.css";
import { LATESTBLOG } from "./latestblog";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  return (
    <div className="latest-blog_container">
      <div className="latest-blog">
        <div className="col-12">
          <div className="latest-blog-title glitch">
            <span aria-hidden="true">Latest Blog Entries</span>
            <span> Latest Blog Entries</span>
            <span aria-hidden="true">Latest Blog Entries</span>
          </div>
        </div>
      </div>
      <div className="latest-blog_lists">
        {LATESTBLOG.map((blog, idx) => (
          <div className="latest-blog_items" key={idx}>
            <Link to="/blogdetail">
              <img src={blog.image} alt="latestblog-img" />
            </Link>
            <div className={`latest-blog_info ${blog.className}`}>
              <p>{blog.date}</p>
              <h4>
                {blog.title}
                <span>{blog.titleBreak}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
