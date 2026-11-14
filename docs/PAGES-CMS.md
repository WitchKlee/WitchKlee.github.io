# 用 Pages CMS 写博客

后台入口：<https://app.pagescms.org/>  
博客地址：<https://witchklee.github.io/>  
仓库：`WitchKlee/WitchKlee.github.io`，分支：`main`。

## 第一次登录

1. 打开后台入口，选择使用 GitHub 登录（Sign in with GitHub）。
2. 按页面提示安装或配置 Pages CMS 的 GitHub App。
3. 在仓库授权范围选择「Only select repositories」，勾选 `WitchKlee.github.io`，完成安装或保存。这里只需要授权博客仓库。
4. 返回 Pages CMS，选择 `WitchKlee` 下的 `WitchKlee.github.io`，再选择 `main` 分支。
5. 页面应出现「文章」「关于我」「友情链接」和媒体管理入口。仓库已经有 `.pages.yml`，不必再新建或覆盖配置。

如果没有看到仓库，在 GitHub 的 **Settings → Applications → Installed GitHub Apps** 中找到 Pages CMS，点击 Configure，检查它是否已获授权访问 `WitchKlee.github.io`。授权后返回后台刷新。

## 新建文章

1. 点击「文章」，再点击新建按钮（界面可能显示 New、Create 或 Add）。
2. 填写「标题」；「文章时间」使用北京时间，用于排序。
3. 「分类」填一个名字，例如 `随记`；「标签」每项填一个，可以添加多项。
4. 在「正文」中写作。Editor 是可视化编辑，Source 是 Markdown 源码。
5. 暂时不发布时，保持「发布到网站」关闭，然后点击 Save 保存。
6. 准备公开时，开启「发布到网站」，再点击 Save。

新文章的文件名会自动生成，通常不需要手动填写。文章链接由文件名决定；修改标题不会要求你更改文件名。已有文章尽量不要重命名文件，以免已分享的文章链接改变。

**草稿的含义：** 关闭发布开关后，文章不会出现在博客正文、首页、搜索或 RSS 中。但文件会保存到公开的 GitHub 仓库，能被访问仓库的人读取，因此不适合保存私人内容。

**保存与发布：** 保存会写入 GitHub，并触发「发布博客」工作流；网页要等部署成功才更新，并非点保存后立刻变化。`published: false` 是草稿开关；未来的文章时间不等于定时发布。

## 排版、图片与首页摘要

普通正文可以用工具栏插入标题、加粗、列表、引用、链接和图片。

上传的图片存入 `source/images/`，写入文章的公开地址为 `/images/文件名`，网站构建后可直接访问。上传时文件名会安全化处理，以保存后显示的实际路径为准。

也可以在媒体管理页先上传，再在正文中选择图片。不要删除仍被文章或头像引用的图片。

若希望首页只显示开头，在 **Source** 模式中，在摘要和正文之间单独放一行：

```markdown
这里是首页显示的摘要。

<!-- more -->

## 正文标题

这里开始写完整正文。
```

含 `<!-- more -->`、Hexo `{% ... %}` 标签或自定义 HTML 的文章，建议全程使用 Source 模式保存；可视化编辑器不一定能保留这些特殊标记。两篇现有示例文章都含摘要标记。Markdown 源码模式中的图片可按下面格式插入：

```markdown
![图片说明](/images/photo.jpg)
```

## 修改、撤下文章

在「文章」中找到文章并点击标题，编辑后 Save 即可更新。

临时撤下时，关闭「发布到网站」并保存。这样保留文件，但下一次部署后博客不再显示它。删除则会从仓库当前分支移除文件，因此通常先用撤下更方便。

## 关于我与友情链接

- 「关于我」：修改页面标题和正文，保存后自动更新。
- 「友情链接」：每一项是一张友链卡片。填写网站名称、以 `https://` 或 `http://` 开头的完整地址、介绍；头像图片和头像文字可选，图片优先。可以增加或删除条目，再保存。

## 保存后在哪里查看

打开 <https://github.com/WitchKlee/WitchKlee.github.io/actions>，查看最新的「发布博客」。绿色对勾表示构建和部署通过，再打开博客查看。看到旧内容时按 `Ctrl+F5` 强制刷新。

如果部署红色失败，打开失败的工作流查看详情；也可以把失败链接发给我排查。不要反复重建配置或删除文章。

## 网页编辑后继续在电脑上写

后台修改发生在 GitHub，电脑上的文件不会自动同步。下次在 VS Code 本地编辑前，先进入博客目录执行：

```powershell
git pull --ff-only
```

若本地已有未提交修改，先保留或提交这些修改再同步；遇到冲突不要强制覆盖。以后只在 Pages CMS 写作时，不必运行本地命令。

## 官方说明

- [首次登录与授权](https://pagescms.org/docs/quick-start/)
- [正文编辑器](https://pagescms.org/docs/configuration/fields/rich-text/)
- [图片路径配置](https://pagescms.org/docs/configuration/media/)

接入状态：仓库配置、构建和部署可由本项目验证；Pages CMS 的账号授权及首次保存，需由你在登录后的后台完成并确认。
