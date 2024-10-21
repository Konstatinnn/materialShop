const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    // Путь к файлу db.json
    const dbPath = path.resolve(__dirname, '../../server/db.json');

    // Чтение файла db.json
    const data = fs.readFileSync(dbPath, 'utf-8');
    const jsonData = JSON.parse(data);

    // Получение категории из запроса
    const category = event.queryStringParameters.category;

    // Проверка наличия категории в данных
    if (jsonData[category]) {
      return {
        statusCode: 200,
        body: JSON.stringify(jsonData[category]),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Category not found' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to read data' }),
    };
  }
};
