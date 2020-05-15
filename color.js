const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const { generateTheme, getLessVars } = require("antd-theme-generator");

const options = {
  stylesDir: resolveApp('src/assets/less'), //对应具体位置
  antDir: resolveApp('node_modules/antd-mobile'), //对应具体位置
  varFile: resolveApp('src/assets/less/vars.less'), //对应具体位置
  mainLessFile: resolveApp('src/assets/less/index.less'), //对应具体位置
  themeVariables: [
    "@primary-color",         // 全局主色
    "@link-color",            // 链接色
    "@success-color",         // 成功色
    "@warning-color",         // 警告色
    "@error-color",           // 错误色
    "@font-size-base",        // 主字号
    "@heading-color",         // 标题色
    "@text-color",            // 主文本色
    "@text-color-secondary",  // 次文本色
    "@disabled-color",        // 失效色
    "@border-radius-base",    // 组建/浮层圆角
    "@box-shadow-base",       // 浮层阴影
  ],
  indexFileName: "index.html",
  outputFilePath: resolveApp('public/color.less'),
};

generateTheme(options)
.then((less) => {
  console.log("Theme generated successfully");
  fs.readFile(resolveApp('public/color.less'), (err,data) => {
    let str = data.toString();
    // 缓存
    str = str.replace(/#108ee9/, '@temp-brand-primary');
    str = str.replace(/#108ee9/g, '@brand-primary');
    str = str.replace(/@temp-brand-primary/, '#108ee9');

    str = str.replace(/#0e80d2/, '@temp-brand-primary-tap');
    str = str.replace(/#0e80d2/g, '@brand-primary-tap');
    str = str.replace(/@temp-brand-primary-tap/, '#0e80d2');

    str = str.replace(/#6abf47/, '@temp-brand-success');
    str = str.replace(/#6abf47/g, '@brand-success');
    str = str.replace(/@temp-brand-success/, '#6abf47');

    str = str.replace(/#ffc600/, '@temp-brand-warning');
    str = str.replace(/#ffc600/g, '@brand-warning');
    str = str.replace(/@temp-brand-warning/, '#ffc600');

    str = str.replace(/#f4333c/, '@temp-brand-error');
    str = str.replace(/#f4333c/g, '@brand-error');
    str = str.replace(/@temp-brand-error/, '#f4333c');

    str = str.replace(/#ff5b05/, '@temp-brand-important');
    str = str.replace(/#ff5b05/g, '@brand-important');
    str = str.replace(/@temp-brand-important/, '#ff5b05');

    str = str.replace(/#e94f4f/, '@temp-warning-button-fill');
    str = str.replace(/#e94f4f/g, '@warning-button-fill');
    str = str.replace(/@temp-warning-button-fill/, '#e94f4f');

    str = str.replace(/#d24747/, '@temp-warning-button-fill-tap');
    str = str.replace(/#d24747/g, '@warning-button-fill-tap');
    str = str.replace(/@temp-warning-button-fill-tap/, '#d24747');

    fs.writeFile(resolveApp('public/color.less'), str, (err) => {
      if(err) console.log(err);
    });
  });
})
.catch((error) => {
  console.log("Error", error);
});
