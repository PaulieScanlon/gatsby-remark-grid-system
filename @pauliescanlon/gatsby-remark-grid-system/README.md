<a href="https://gatsby-remark-grid-system.netlify.com/" target="_blank">
<img src="https://gatsby-remark-grid-system.netlify.com/images/remark-sticky-table.gif" alt="gatsby-remark-grid-system gif image" />
</a>

# gatsby-remark-grid-system

gatsby-remark-grid-system is a plugin that...

**Motivation**

## 👁️ Preview

- [Live Demo](https://gatsby-remark-grid-system.netlify.com/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-remark-grid-system
```

### Setup

Add `gatsby-transformer-remark` to your `gatsby-config.js` then add `@pauliescanlon/gatsby-remark-grid-system` as a plugin of that 😅

```js
module.exports = {
  ...
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`@pauliescanlon/gatsby-remark-grid-system`],
      },
    },
  ],
}
```

### Options

| Option      | Type   | Reqiured | Default               | Description                    |
| ----------- | ------ | -------- | --------------------- | ------------------------------ |
| breakpoints | array  | no       | [576, 768, 992, 1200] | bootstrap inspired breakpoings |
| gutterWidth | number | no       | 30                    | gutter width ...               |

```js
...
plugins: [
  {
    resolve: `@pauliescanlon/gatsby-remark-grid-system`,
    options: {

    },
  },
]
```

## ✨ Styling

## 📝 Markdown
