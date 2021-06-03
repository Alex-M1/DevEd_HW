import './CreateBook.scss';
import React, { useState } from 'react';
import CreateIpt from './CreateInput';
import CreateBottom from './CreateBottom';

function CreateBook() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const changeAuth = (value) => setAuthor(value);
  const changeTitle = (value) => setTitle(value);
  const changeYear = (value) => setYear(value);

  return (
    <div className="container">
      <div className="create-table">
        <form className="create">
          <CreateIpt label="Автор" placeholder="Введите название автора..." value={author} changeIpt={changeAuth} />
          <CreateIpt label="Название" placeholder="Введите название книги..." value={title} changeIpt={changeTitle} />
          <CreateIpt label="Год выпуска" placeholder="Введите год выпуска..." type="number" value={year} changeIpt={changeYear} />
          <CreateBottom />
          <button className="create__btn">Создать</button>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;