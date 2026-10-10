# shukin 的个人网站

一个米白、墨黑与橙色的个人网站 Demo，包含作品展示、分类筛选、随笔阅读、关于与 GitHub 联系入口。人物设定、作品及文章均为虚构示例。

访问地址：https://shukinnn.github.io

## 本地预览

只使用 HTML、CSS 与原生 JavaScript，无构建依赖、外部字体或 CDN。

```sh
python -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173 。

## 文件

- `index.html`：页面结构及文案
- `style.css`：响应式布局与原创 CSS 插画
- `script.js`：作品筛选和详情阅读
- `favicon.svg`：站点图标
- `.nojekyll`：让 GitHub Pages 直接发布静态文件

## 发布

GitHub Pages 从 `main` 分支根目录发布。推送修改后自动更新，无需安装构建工具。

显示名称是 **shukin**。默认域名使用 GitHub 账号名 **Shukinnn**，因此为 `shukinnn.github.io`。
