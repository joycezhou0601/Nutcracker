# Nutcracker template

这个模板使用 StPageFlip，实现：

- 封面先单页显示
- 翻开后显示左右双页
- 封面和内页都有圆角
- 支持鼠标拖动、点击翻页和手机浏览
- 可通过 GitHub Pages 发布，再嵌入 Cargo

## 你现在怎么上传

1. 先把下载的 ZIP 解压。
2. 回到 GitHub 的 Upload files 页面。
3. 把以下内容一起拖进去：
   - `index.html`
   - `style.css`
   - `script.js`
   - 整个 `images` 文件夹
4. 点击绿色 `Commit changes`。

## 换成你自己的图片

打开 `images` 文件夹，把示例文件替换成你的图片。最简单的命名方式：

- `cover.jpg`
- `page-01.jpg`
- `page-02.jpg`
- `page-03.jpg`
- ...
- `back-cover.jpg`

然后在 `index.html` 里，把 `.svg` 文件名改成对应的 `.jpg`。

每一张必须是单页，不要把左右跨页合成一张。建议所有页面保持相同长宽比，例如 3:4。

## 增加页面

复制下面这一段并修改文件名：

```html
<div class="page">
  <img src="images/page-05.jpg" alt="Page 5" />
</div>
```

封底保持最后一个，并保留：

```html
data-density="hard"
```

## 开启 GitHub Pages

进入仓库：

`Settings → Pages → Build and deployment`

选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

保存后等待几分钟。

你的网址通常会是：

`https://你的GitHub用户名.github.io/elf-sisters-book/`

## 圆角说明

静止时，单页封面和双页都会显示圆角。翻页动画进行中，StPageFlip 的 3D 裁切可能让活动页的圆角短暂不完全一致，这是这个库本身的限制。
