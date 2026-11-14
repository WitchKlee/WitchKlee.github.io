# 拾页

基于 Hexo 8 和 NexT Muse 的中文个人博客。包含文章、分类、标签、归档、站内搜索、RSS、关于和响应式友链页。站名、博主名、示例文章和友链都可以换成自己的。

## 在网页后台写文章

写作后台：[Pages CMS](https://app.pagescms.org/)。首次使用需登录 GitHub，并将 Pages CMS 的 GitHub App 授权给 `WitchKlee.github.io` 仓库，随后选择 `main` 分支。

在「文章」中创建文章、填写标题、分类、标签并编辑正文。新文章默认不发布，确认内容后开启「发布到网站」并点击保存，GitHub Actions 会自动更新博客。

后台还可以上传图片、修改站点信息、头像、浏览器图标、菜单、侧栏和页脚，编辑页面与友情链接。完整步骤见 [Pages CMS 使用指南](docs/PAGES-CMS.md)，逐项覆盖范围见 [接入清单](docs/PAGES-CMS-COVERAGE.md)。

## 在 Windows 上预览

安装 [Node.js 24](https://nodejs.org/) 后，在此文件夹打开 PowerShell，运行：

```powershell
npm.cmd ci
npm.cmd start
```

打开 [http://localhost:4000](http://localhost:4000)，友链页在 [http://localhost:4000/links/](http://localhost:4000/links/)。按 `Ctrl+C` 停止预览。如果端口被占用，改用 `npm.cmd start -- --port 4001`。

## 换成自己的内容

| 要改什么 | 在哪里改 |
| --- | --- |
| 站名、副标题、简介、博主名、正式网址 | `_config.yml` |
| 菜单、头像、侧栏和主题 | `_config.next.yml` |
| 头像和浏览器标签页图标 | `source/images/` |
| 关于页 | `source/about/index.md` |
| 两篇示例文章 | `source/_posts/`，可以替换或删掉 |
| 友链名单 | `source/_data/friends.json` |
| 友链卡片和自定义字体样式 | `source/_data/styles.styl` |

用 `npm.cmd run new -- "文章标题"` 创建文章。文章以 Markdown 保存。`categories` 用来归类，`tags` 用来标记关键词。用 `<!-- more -->` 指定首页摘要到哪里结束。

友链条目包含 `name`、`url`、`description`，可以加 `monogram` 显示一个字，也可以设置 `avatar` 为网址或 `/images/friend.png` 这样的本地图片路径。要使用自己的图片，把文件放到 `source/images/`。

修改站点或主题配置后，重启本地预览。`npm.cmd run build` 会把静态文件生成到 `public/`。

## 发布到 GitHub Pages

当前仓库：[WitchKlee/WitchKlee.github.io](https://github.com/WitchKlee/WitchKlee.github.io)。博客网址为 <https://witchklee.github.io/>。

首次发布完成后，在此文件夹运行以下命令即可更新博客：

```powershell
git add .
git commit -m "Update blog"
git push
```

如果浏览器提示 GitHub 登录，请登录 `WitchKlee` 账号。下面是迁移到新的个人主页仓库时的步骤：

1. 在 GitHub 创建一个名为 `你的用户名.github.io` 的空公开仓库。如果你已有同名站点，先确定它如何与新博客共存。
2. 把 `_config.yml` 的 `url` 改成 `https://你的用户名.github.io`。
3. 在新仓库的 **Settings → Pages** 下，把 **Source** 设为 **GitHub Actions**。
4. 在此文件夹运行以下命令，将示例中的 `YOUR-GITHUB-USERNAME` 换成你的 GitHub 用户名。

   ```powershell
   git init -b main
   git add .
   git commit -m "Start personal blog"
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git
   git push -u origin main
   ```

5. 在仓库的 **Actions** 页面查看「发布博客」。流程完成后，访问第 2 步的网址。之后推送到 `main` 会重新生成并发布。

站点设计参考 [Thysrael 的钟鼓楼](https://thysrael.github.io/links/)。发布方式见 [Hexo 的 GitHub Pages 文档](https://hexo.io/docs/github-pages)。
