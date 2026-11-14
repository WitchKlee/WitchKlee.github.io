# Pages CMS 接入覆盖清单

以当前博客的内容文件、自有配置和自定义样式为范围逐项检查。原始配置编辑器还可以维护表单之外的新设置。

| 后台入口 | 覆盖内容 |
| --- | --- |
| 文章 | 标题、日期、发布开关、分类、标签、正文与图片 |
| 站点信息 | 网站名称、副标题、简介、博主、语言、时区、网址、文章链接规则、分页、代码高亮、搜索数据和 RSS；另提供关键词与联系邮箱 |
| 头像与外观 | 头像、图标、布局、深色模式、菜单、社交链接、侧栏、目录、页脚、字体与动效开关、自定义样式路径 |
| 页面 | 关于我、分类页、标签页、友链页标题与说明 |
| 友情链接 | 名称、地址、介绍、头像文字与头像图片，增删排序 |
| 媒体 | source/images 下的图片、头像和图标 |
| 高级编辑 | 完整站点与主题 YAML、颜色与排版样式、导航文字、文章模板、三个自有脚本、使用指南和旧文章原稿 |

## 现有配置项逐项核对

### 站点信息：21 / 21 项

文件：`_config.yml`。

- `title`
- `subtitle`
- `description`
- `author`
- `language`
- `timezone`
- `url`
- `root`
- `permalink`
- `theme`
- `updated_option`
- `highlight.enable`
- `highlight.line_number`
- `index_generator.per_page`
- `tag_generator.enable_index_page`
- `search.path`
- `search.field`
- `search.content`
- `feed.type`
- `feed.path`
- `feed.limit`

### 头像与外观：28 / 28 项

文件：`_config.next.yml`。

- `scheme`
- `darkmode`
- `custom_file_path.style`
- `menu.home`
- `menu.categories`
- `menu.tags`
- `menu.archives`
- `menu.friends`
- `menu.about`
- `menu_settings.icons`
- `menu_settings.badges`
- `sidebar.display`
- `avatar.url`
- `avatar.rounded`
- `favicon.small`
- `favicon.medium`
- `favicon.apple_touch_icon`
- `favicon.safari_pinned_tab`
- `social.RSS`
- `toc.enable`
- `toc.number`
- `toc.wrap`
- `footer.since`
- `footer.powered`
- `footer.icon.name`
- `font.enable`
- `motion.enable`
- `local_search.enable`

## 保存行为

- 启用 `settings.content.merge: true`，表单保存会保留配置中未纳入表单的键。
- 结构化表单与高级原始编辑器编辑同一份源文件，没有第二份相互冲突的配置。
- Safari 固定标签图标从 `false` 规范化为留空字符串，两者都禁用该图标；填写 SVG 路径时启用。
- 用户本地未提交的关于页内容不包含在这次后台配置提交中。

## 文件边界

`node_modules/`、`public/`、`db.json` 是依赖或生成物，不作为内容编辑入口。`package.json`、锁文件、Node 版本和 GitHub Actions 工作流仍按代码维护；安装新插件和变更发布基础设施不属于内容后台。Pages CMS 自身 `.pages.yml` 可在其内置「配置 / Settings」页编辑。
