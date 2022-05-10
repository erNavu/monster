import "./App.css";
import React, { Component } from "react";
import CardList from "./components/cardList/cardList";
import SearchBox from "./components/searchBox/searchBox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users, searchList: users }));
  }

  handleMonsterSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchField: value });
  };

  render() {
    const { monsters, searchField } = this.state;
    console.log(monsters, "monsters");
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filterMonsters, "dgfshjgshd");
    return (
      <div className="App">
        <h1 className="monster-heading">Monster List </h1>
        <SearchBox
          placeholder="Search monster"
          onChange={this.handleMonsterSearch}
          value={searchField}
        ></SearchBox>
        {filterMonsters?.length ? (
          <CardList monsters={filterMonsters}></CardList>
        ) : (
          <h1>No Monster Found </h1>
        )}
      </div>
    );
  }
}

export default App;
