import React from 'react';

function CreateBottom(props) {
  return (
    <div className="create__bottom">
      <input type="file" className="create__bottom--ipt" />
      <textarea type="text" placeholder="Введите описание..." className="create__bottom--area" ></textarea>
    </div>
  );
}

export default CreateBottom;