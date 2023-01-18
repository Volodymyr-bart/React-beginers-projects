import { useEffect } from "react";
import { useState } from "react";
import Collection from "../../components/Collection/Collection";

const categoryList = [
  { name: "Все" },
  { name: "Море" },
  { name: "Горы" },
  { name: "Архитектура" },
  { name: "Города" },
];

function ColectionsPhoto() {
  const [categoryId, setCategoryId] = useState(0);
  const [collections, setCollections] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : "";
    setIsLoading(true);
    fetch(`https://636c06ecad62451f9fc200fa.mockapi.io/colection?page=${page}&limit=3&${category}`)
      .then((res) => res.json())
      .then((res) => setCollections(res))
      .catch((er) => console.log(er))
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {categoryList.map((item, index) => (
            <li
              key={item.name}
              className={categoryId === index ? "active" : ""}
              onClick={() => setCategoryId(index)}>
              {item.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Loading</h2>
        ) : (
          collections
            .filter((obj) => {
              return obj.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((obj, index) => <Collection key={index} name={obj.name} images={obj.photos} />)
        )}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => (
          <li className={page === i + 1 ? "active" : ""} onClick={() => setPage(i + 1)}>
            {i + 1}{" "}
          </li>
        ))}
        {/* <li>1</li>
        <li className="active">2</li>
        <li>3</li> */}
      </ul>
    </div>
  );
}

export default ColectionsPhoto;
