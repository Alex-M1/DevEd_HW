import React from 'react';
import FormItem from './FormItem';
import { StForm } from './styled';

function Form() {
  return (
    <StForm>
      <FormItem
        type="name"
        title="Имя"
        placeholder="Введите имя"
      />
      <FormItem
        type="age"
        title="Возраст"
        placeholder="Введите возраст"
      />
      <FormItem
        type="phone"
        title="Телефон"
        placeholder="Введите телефон"
      />
      <FormItem
        type="email"
        title="Email"
        placeholder="Введите email"
      />
      <FormItem
        type="company"
        title="Компания"
        placeholder="Название компании"
      />
    </StForm>
  );
}

export default Form;
