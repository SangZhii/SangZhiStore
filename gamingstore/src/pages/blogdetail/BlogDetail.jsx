import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faComment } from "@fortawesome/free-regular-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import "../blogleft/blogleft.css";
import "../blogdetail/blogdetail.css";
import style from "../blogdetail/blogdetail.module.css";
import MainFooter from "../../components/mainfooter/MainFooter";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  ARCHIVE,
  BANNER,
  BLOG,
  CATEGORY,
  RECOMMEND,
  TAGS,
} from "../blogleft/bloglefts";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  return (
    <>
      <Navbar />
      <div className={style.actionContainer}>
        <div className="latest-blog">
          <div className={style.col12}>
            <div className={`glitch ${style.latestblogTitle}`}>
              <span aria-hidden="true">Latest Blog Entries</span>
              <span> Latest Blog Entries</span>
              <span aria-hidden="true">Latest Blog Entries</span>
            </div>
          </div>
        </div>
        <div className={style.mainSlide}>
          {BANNER.map((blog, idx) => (
            <div className={style.slide} key={idx}>
              <img src={blog.img} alt="sport" />
            </div>
          ))}
        </div>
      </div>

      <section>
        <div className="blog-container">
          <div className="blog-left">
            {BLOG.map((blogs, index) => (
              <div className="blog-lists" key={index}>
                <div className="blog-items">
                  <img src={blogs.image} alt="blog" />
                  <div className="blog-footer">
                    <div className="blog-footer__left">
                      <FontAwesomeIcon icon={faCircleUser} className="user" />
                      <h4>By Admin</h4>
                      <span></span>
                      <ul>
                        <li>
                          <Link to="/SangZhiStore">
                            <a href="/#">#</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/adventure">
                            <a href="/#">Adventure</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/adventure">
                            <a href="/#">Action</a>
                          </Link>
                        </li>
                        <li>
                          <Link to="/sports">
                            <a href="/#">Sports</a>
                          </Link>
                        </li>
                      </ul>
                      <span></span>
                      <FontAwesomeIcon icon={faComment} className="cmt" />
                      <h6>8 Comments</h6>
                    </div>
                  </div>
                  <div className="blog-info">
                    <h1>{blogs.title}</h1>
                    <p>{blogs.detail}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="blog-page">
              <h4>Tags: </h4>
              <Link to="/adventure" className="detail-tag">
                Action
              </Link>
              <Link to="/kids" className="detail-tag">
                Role-Play
              </Link>
            </div>
            <div className="blog-message">
              <h1>Leave A Comment</h1>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="blog-email">
                <div className="email-input">
                  <form action="input-email">
                    <div className="email-inputbox">
                      <input
                        type="text"
                        required="required"
                        placeholder="Name *"
                      />
                      <input
                        type="text"
                        required="required"
                        placeholder="Email *"
                      />
                    </div>
                    <div className="comment-inputbox">
                      <textarea
                        name="cmt"
                        type="text"
                        required="required"
                        placeholder="Comment..."
                      />
                    </div>
                    <button>Post comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-right">
            <div className="search-inputs">
              <form action="inputs">
                <div className="inputboxs">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="filter-search-icon"
                  />
                  <input type="text" required="required" placeholder="Search" />
                </div>
              </form>
            </div>
            <div className="categories-container">
              <h3>Categories</h3>
              {CATEGORY.map((cate, idx) => (
                <div className="categories" key={idx}>
                  <div className="categories-item">
                    <ul>
                      <li>
                        <Link to={cate.to}>
                          <a href="/#">{cate.item}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="recommended-games">
              <h1>Recommended Games</h1>
              {RECOMMEND.map((recom, idx) => (
                <div className="recommended-items" key={idx}>
                  <a href="#top" className="overlay">
                    <img src={recom.img} alt="product" />
                  </a>
                  <div className="recommended-title">
                    <a href="#top">{recom.title}</a>
                    <div className="recommended-price">
                      <p>{recom.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="archive-container">
              <h1>Archive</h1>
              {ARCHIVE.map((arch, idx) => (
                <div className="archive-items" key={idx}>
                  <ul>
                    <li>
                      <a href="#top">
                        <span>{arch.items}</span>
                        <span>{arch.num}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="tags-container">
              <h1>Tags</h1>
              <div className="tags-list">
                {TAGS.map((tag, idx) => (
                  <div className="tags-items" key={idx}>
                    <Link to={tag.to} className="link-tag">
                      {tag.item}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default BlogDetail;
