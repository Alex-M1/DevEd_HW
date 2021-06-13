import './CreateBook.scss';
import React, { useState } from 'react';
import CreateIpt from './CreateInput';
import CreateBottom from './CreateBottom';
import { url } from '../../helpers/constants';

function CreateBook() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [file, setFile] = useState('');
  const [descr, setDescr] = useState('');
  const resetForm = (e) => e.preventDefault();
  const onClickSend = async () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('writeDate', year);
    formData.append('author', author);
    formData.append('bookDescr', descr);
    await fetch(url, {
      method: 'POST',
      body: formData
    });
    setDescr('');
    setFile('');
    setYear('');
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="container">
      <div className="create-table">
        <form className="create" onSubmit={resetForm}>
          <CreateIpt label="Автор" placeholder="Введите название автора..." value={author} changeIpt={setAuthor} />
          <CreateIpt label="Название" placeholder="Введите название книги..." value={title} changeIpt={setTitle} />
          <CreateIpt label="Год выпуска" placeholder="Введите год выпуска..." type="number" value={year} changeIpt={setYear} />
          <CreateBottom
            setFile={setFile}
            setDescr={setDescr}
            valueDescr={descr}
          />
          <button className="create__btn" onClick={onClickSend}>Создать</button>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;