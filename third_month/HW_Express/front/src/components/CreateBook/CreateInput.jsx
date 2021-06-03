import React from 'react';

function CreateInput({ label, placeholder, value, changeIpt, type = 'text' }) {
  const handleChangeIpt = (e) => changeIpt(e.target.value);
  return (
    <div className="create__row">
      <label>{label}: </label>
      <input
        type={type}
        placeholder={placeholder}
        className="create__row--ipt"
        value={value}
        onChange={handleChangeIpt}
      />
    </div>
  );
}

export default CreateInput;