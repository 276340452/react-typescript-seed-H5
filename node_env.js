const fs = require('fs');
const chalk = require('chalk'); // 美化终端
const symbols = require('log-symbols'); // 美化终端

// 读取API文件
const apiFile = `./environment/${process.env.NODE_ENV}.json`;
fs.readFile(apiFile, 'utf-8', (err, data) => {
  if (err) throw err;
  let environment = JSON.parse(data);

  fs.writeFile('./.env', `PUBLIC_URL=${''}`, (error) => {
    if (error) throw error;
    console.log(symbols.success, chalk.green('.env更新成功'));
  });
  // 读取API文件
  fs.writeFile('./src/config/environment.json', JSON.stringify(environment), (error) => {
    if (error) throw error;
    console.log(symbols.success, chalk.green('environment文件更新成功'));
  });
});

