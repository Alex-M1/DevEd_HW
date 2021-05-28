export const
  names = [
    'Суворова Валерия', ' Смирнова Вера', 'Федорова София', 'Назаров Григорий', 'Чернова София', 'Козлова Вера', 'Макарова Мария', 'Егоров Константин', 'Добрынина Екатерина', 'Чеботарев Дмитрий', 'Черных Елизавета', 'Киреев Илья', 'Лукин Иван', 'Дмитриева Алиса', 'Смирнова Валерия', 'Коновалова Алёна', 'Суслов Богдан', 'Васильева Вероника', 'Григорьева Дарья', 'Прокофьева Эмилия', 'Белов Вячеслав', 'Балашов Николай', 'Кольцов Роман', 'Козлов Кирилл', 'Орлова Елизавета', 'Туманова Кристина', 'Семенов Михаил', 'Баженова Анастасия', 'Матвеев Вячеслав', 'Черкасова Аиша', 'Мельникова Мария', 'Матвеев Сергей', 'Чистяков Тимофей', 'Андреев Ярослав', 'Кукушкин Даниил', 'Антонова Анастасия', 'Данилова Ксения', 'Кочетков Марк', 'Захаров Степан'
  ],
  documents = ['Паспорт', 'Страховка', 'Фотография'],
  enLvlValid = ['b1', 'b2', 'c1', 'c2'],
  enLvlInvalid = ['a1', 'a2', 'a2+'],
  genSelectors = {
    entName: '#entName',
    genName: '#genName',
    entBalance: '#entBalance',
    genBalance: '#genBalance',
    entAge: '#entAge',
    genAge: '#genAge',
    entDocuments: '#entDocuments',
    genDocuments: '#genDocuments',
    entEn: '#entEn',
    genEn: '#genEn'
  },
  inputSelectors = {
    entName: '#entName',
    entBalance: '#entBalance',
    entAge: '#entAge',
    entDocuments: '.document',
    entEn: '#entEn',
  },
  message = {
    fullCandidate: 'No more than 5 people',
    nullCandidate: 'Minimum of 2 candidates is required for the race',
    nan: 'Age or balance should be a number',
    emptyField: 'You have empty fields'
  },
  X = 25,
  Y = 100,
  RADIUS = 40;