import React, { useState } from "react";
import { FILTERIMAGE, PRODUCT } from "../../product";
import "../biggestseries/series.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpShortWide,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { PRICE, SORRTII, SORT, TAGS } from "./filter";
import Product from "./Product";
import { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import ProductCard from "./ProductCard";

const Series = ({ className, filter }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [data, setData] = useState(PRODUCT);
  const [fade, setFade] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { onAdd } = useContext(ShopContext);
  const [modal, setModal] = useState(false);

  const filterResult = (catItem) => {
    const result = PRODUCT.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
    setFade(!fade);
  };

  const filterMain = (catItem) => {
    const result = PRODUCT.filter((curData) => {
      return curData.mainCategory === catItem;
    });
    setData(result);
  };

  const showFilters = () => {
    setShowFilter(!showFilter);
  };

  const showSearchBar = () => {
    setShowSearch(!showSearch);
  };

  const homepage = data.filter(
    (item) => item.type !== "" && item.type !== null,
    (item) => item.type2 !== "" && item.type2 !== null,
    (item) => item.type3 !== "" && item.type3 !== null,
    (item) => item.type1 !== "" && item.type1 !== null
  );

  return (
    <>
      <div className="series-container">
        <div className={`col-12 ${className}`}>
          <div className="series-header-title glitch">
            <span aria-hidden="true">blockbuster games out now</span>
            <span> blockbuster games out now</span>
            <span aria-hidden="true">blockbuster games out now</span>
          </div>
        </div>
        <div className={`filter-group ${filter}`}>
          <div className="filter-group1">
            <button
              tabIndex={1}
              onClick={() => filterMain("recommend")}
              className={isActive ? "removed" : "active"}
            >
              <h5
                onClick={() => setIsActive("recommend")}
                className={isActive === "recommend" ? "actived" : "removed"}
              >
                Recommend
              </h5>
            </button>
            <button tabIndex={1} onClick={() => filterResult("top")}>
              <h5
                onClick={() => setIsActive("top")}
                className={isActive === "top" ? "actived" : "removed"}
              >
                Top Rated
              </h5>
            </button>
            <button tabIndex={1} onClick={() => filterResult("arrival")}>
              <h5
                onClick={() => setIsActive("arrival")}
                className={isActive === "arrival" ? "actived" : "removed"}
              >
                New Arrival
              </h5>
            </button>
            <button tabIndex={1} onClick={() => filterResult("trending")}>
              <h5
                onClick={() => setIsActive("trending")}
                className={isActive === "trending" ? "actived" : "removed"}
              >
                Trending
              </h5>
            </button>
          </div>
          <div className="filter-group2">
            <div
              className="filter"
              onClick={showSearch ? showSearchBar : showFilters}
            >
              <FontAwesomeIcon icon={faArrowUpShortWide} />
              <span>Filter</span>
            </div>
            <div
              className="filter-search"
              onClick={showFilter ? showFilters : showSearchBar}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Search</span>
            </div>
          </div>
        </div>
        {showFilter && (
          <div className="filter-dropdown__container">
            <div className="filter-dropdown__lists">
              <div className="filter-dropdown__lists1">
                {SORT.map((sort, idx) => (
                  <div className="filter-dropdown__items1" key={idx}>
                    <h4 className={sort.className}>{sort.header}</h4>
                    <ul className={sort.className2}>
                      <a href="/#">
                        <li className={sort.className2}>{sort.list}</li>
                      </a>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="filter-dropdown__lists2">
                {PRICE.map((price, idx) => (
                  <div className="filter-dropdown__items2" key={idx}>
                    <h4 className={price.className}>{price.header2}</h4>
                    <ul className={price.className2}>
                      <a href="/#">
                        <li className={price.className2}>{price.list2}</li>
                      </a>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="filter-dropdown__lists3">
                {SORRTII.map((sortii, idx) => (
                  <div className="filter-dropdown__items3" key={idx}>
                    <h4 className={sortii.className}>{sortii.header3}</h4>
                    <ul>
                      <a href="/#" className={sortii.className2}>
                        <li className={sortii.className2}>{sortii.list3}</li>
                      </a>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="filter-dropdown__list4--container">
                <div className="filter-dropdown__header">
                  <h4>Tags</h4>
                </div>
                <div className="filter-dropdown__lists4">
                  {TAGS.map((tag, idx) => (
                    <div className="filter-dropdown__items4" key={idx}>
                      <div className="filter-grid">
                        <a href="/#">
                          <button
                            className={tag.classNameAcitve}
                            style={{ cursor: "pointer" }}
                          >
                            {tag.list4}
                          </button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {showSearch && (
          <div className="search-input">
            <form action="input">
              <div className="inputbox">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="filter-search-icon"
                />
                <input type="text" required="required" placeholder="Search" />
              </div>
            </form>
          </div>
        )}
        <div className="series-lists">
          {homepage.map((product, idx) => (
            <div
              className={`series items  ${fade ? "fadeIn" : "fadeOut fadeIn"}`}
              key={idx}
            >
              <Product
                product={product}
                onAdd={onAdd}
                setModal={setModal}
                modal={modal}
              />
            </div>
          ))}
        </div>
        <div className="series-btn">
          <button>Load More</button>
        </div>
      </div>
      <ProductCard product={FILTERIMAGE} modal={modal} setModal={setModal} />
    </>
  );
};

export default Series;
library.add(fas, far);
