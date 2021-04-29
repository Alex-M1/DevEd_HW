const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  port: 3306,
  insecureAuth: true,
  options: { trustedConnection: true },
  database: 'baza_dannih'
});

function getData(connection, query) {
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result)
    return result;
  });
}

// Вывести общее число жителей
getData(connection, 'SELECT COUNT(id) AS "people_quantity" FROM Persons');

// Вывести средний возраст жителей
getData(connection, 'SELECT AVG(AGE) AS "middle_age" FROM Persons');

// Вывести отсортированный по алфавиту список фамилий без повторений

getData(connection, 'SELECT LASTNAME FROM Persons GROUP BY LASTNAME ORDER BY LASTNAME ASC');

// Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке
getData(connection, 'SELECT LASTNAME, COUNT(LASTNAME) FROM Persons GROUP BY LASTNAME');

// Вывести фамилии, которые содержат в середине букву «б»
getData(connection, 'SELECT LASTNAME FROM Persons WHERE LASTNAME LIKE "_%б%_" GROUP BY LASTNAME');

// Вывести список «бомжей»
getData(connection, 'SELECT * FROM Persons WHERE ID_Streets IS NULL');

// Вывести список несовершеннолетних, проживающих на улице Костычева
getData(connection, 'SELECT FIRSTNAME,LASTNAME,AGE FROM Persons INNER JOIN Streets ON Persons.ID_Streets = Streets.ID WHERE AGE < 18 AND NAME like "Костычева"');

// Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице
getData(connection, 'SELECT NAME,count(Persons.ID) as NUMBER_NAME FROM Persons INNER JOIN Streets ON Persons.ID_Streets = Streets.ID GROUP BY NAME');

// Вывести список улиц, название которых состоит из 6-ти букв
getData(connection, 'SELECT NAME FROM Streets WHERE NAME LIKE "______"');

// Вывести список улиц с количеством жильцов на них меньше 4.
getData(connection, 'SELECT NAME,count(Persons.ID) as NUMBER_NAME FROM Persons INNER JOIN Streets ON Persons.ID_Streets = Streets.ID GROUP BY NAME HAVING count(Persons.ID) <= 3');










