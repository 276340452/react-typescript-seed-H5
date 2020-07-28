const fs = require('fs');
const chalk = require('chalk'); // 美化终端
const symbols = require('log-symbols'); // 美化终端

const PUBLIC_URL = process.env.PUBLIC_URL;
const API_URL = process.env.API_URL;
// 读取API文件
let environment = {
  PUBLIC_URL:'',
  API_URL:''
};
// 更新环境变量
if(PUBLIC_URL){
  environment.PUBLIC_URL = `/${PUBLIC_URL}`;
}
// 更新环境变量
if(API_URL){
  environment.API_URL = `/${API_URL}`;
}
fs.writeFile('./.env', `PUBLIC_URL=${environment.PUBLIC_URL}`, (error) => {
  if (error) throw error;
  console.log(symbols.success, chalk.green('.env更新成功'));
});
// 读取API文件
fs.writeFile('./src/config/environment.json', JSON.stringify(environment), (error) => {
  if (error) throw error;
  console.log(symbols.success, chalk.green('environment文件更新成功'));
});

