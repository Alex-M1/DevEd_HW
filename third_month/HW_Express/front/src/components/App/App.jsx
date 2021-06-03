import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import BooksCard from '../BookCards';
import Book from '../Book';
import CreateBook from '../CreateBook';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch('./data/data.json');
    const resData = await res.json();
    setData(resData);
  };
  useEffect(() => getData(), []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BooksCard data={data} />
        </Route>
        <Route exact path="/create">
          <CreateBook />
        </Route>
        <Route exact path="/book/:id">
          <Book data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
