import React from 'react';

function CreateBottom({ setFile, setDescr, valueDescr, file }) {
  const onChangeFile = (e) => setFile(e.target.files[0]);
  const onChangeDescr = (e) => setDescr(e.target.value);
  return (
    <div className="create__bottom">
      <input type="file" className="create__bottom--ipt" onChange={onChangeFile} />
      <textarea type="text" placeholder="Введите описание..." className="create__bottom--area" onChange={onChangeDescr} value={valueDescr} ></textarea>
    </div>
  );
}

export default CreateBottom;