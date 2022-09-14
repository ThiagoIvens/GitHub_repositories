import { useState } from "react";
import { RepositoryList } from "../RepositoryList";
import Search from "../Search";
import axios from "axios";
import "./styles.css";

function Home() {
  const [repositories, setRepositories] = useState([]);

  async function handleSearch(search: string, order: string, sort: string) {
    console.log(search, order, sort);
    await axios
      .get(
        "https://api.github.com/search/repositories?q=" +
          search +
          "&order=" +
          order +
          "&sort=" +
          sort
      )
      .then((response: any) => {
        setRepositories(response.data.items);
        if (response.data.items.length === 0) {
          alert("Repositories not found!");
        }
        console.log("Search results: ", repositories, response);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <h1>Welcome to Test Project!</h1>
      <span>
        A project using the{" "}
        <a href="https://docs.github.com/pt/rest" target="_blank">
          API Github
        </a>
        !
      </span>

      <Search search={handleSearch} />
      <RepositoryList repos={repositories} />
    </>
  );
}

export default Home;
