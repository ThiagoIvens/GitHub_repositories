import { useEffect, useState } from "react";
import { SearchContainer, FiltersContainer, SelectContainer } from "./styles";

export default function Search(props: any) {
  const [searchValue, setSearchValue] = useState("");
  const [orderValue, setOrderValue] = useState("asc");
  const [sortValue, setSortValue] = useState("stars");

  useEffect(() => {
    console.log("Order: ", orderValue);
    console.log("Sort: ", sortValue);
  }, [orderValue, sortValue]);

  return (
    <>
      <SearchContainer>
        <div>
          <input
            id="searchInput"
            type="search"
            placeholder="Search..."
            onKeyUp={(e) =>
              e.key === "Enter"
                ? props.search(searchValue, orderValue, sortValue)
                : setSearchValue((e.target as HTMLInputElement).value)
            }
          />
          <button
            onClick={() => props.search(searchValue, orderValue, sortValue)}
          >
            Search
          </button>
        </div>
      </SearchContainer>
      <FiltersContainer>
        <h4>Filters:</h4>

        <div className="select">
          <label className="label" htmlFor="orderInput">
            Order
          </label>
          <select
            name="orderInput"
            onChange={(e) =>
              setOrderValue((e.target as HTMLSelectElement).value)
            }
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

        <div className="select">
          <label className="label" htmlFor="sortInput">
            Sort
          </label>
          <select
            name="sortInput"
            onChange={(e) =>
              setSortValue((e.target as HTMLSelectElement).value)
            }
          >
            <option value="stars">Stars</option>
            <option value="updated">Updated</option>
            <option value="forks">Forks</option>
          </select>
        </div>
      </FiltersContainer>
    </>
  );
}
