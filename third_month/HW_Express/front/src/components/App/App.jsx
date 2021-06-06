import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import BooksCard from '../BookCards';
import Book from '../Book';
import CreateBook from '../CreateBook';
import { useEffect, useState, createContext } from 'react';
import { url } from '../../helpers/constants';

export const CurrentPage = createContext();

function App() {
  const [data, setData] = useState({ books: [] });
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
  };
  useEffect(() => getData(), []);
  const onPaginationClick = async (page) => {
    const res = await fetch(`${url}?page=${page}`);
    const resData = await res.json();
    setData(resData);
    setCurrentPage(page);
  };
  return (
    <CurrentPage.Provider value={currentPage}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BooksCard
              data={data}
              onPaginationClick={onPaginationClick} />
          </Route>
          <Route exact path="/create">
            <CreateBook />
          </Route>
          <Route exact path="/book/:id">
            <Book data={data} />
          </Route>
        </Switch>
      </Router>
    </CurrentPage.Provider>
  );
}

export default App;
