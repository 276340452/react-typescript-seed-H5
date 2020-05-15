const fs = require('fs');
const program = require('commander'); // node命令行
const chalk = require('chalk'); // 美化终端
const symbols = require('log-symbols'); // 美化终端

const environment = require('./src/config/environment.json');

program
  .option('-p, --path <type>', '设置PUBLIC_URL，项目公共路径', '')
  .description('设置PUBLIC_URL，项目公共路径');

program.parse(process.argv);
// 更新环境变量
if(program.path){
  environment.PUBLIC_URL = `/${program.path}`;
} else {
  environment.PUBLIC_URL = '';
}

fs.writeFile('./.env', `PUBLIC_URL=${environment.PUBLIC_URL}`, (error) => {
  if (error) throw error;
});
// 读取API文件
fs.writeFile('./src/config/environment.json', JSON.stringify(environment), (error) => {
  if (error) throw error;
  console.log(symbols.success, chalk.green('环境变量更新成功'));
});
