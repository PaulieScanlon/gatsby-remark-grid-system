<a href="https://gatsby-remark-grid-system.netlify.com/" target="_blank">
<img src="https://gatsby-remark-grid-system.netlify.com/images/remark-sticky-table.gif" alt="gatsby-remark-grid-system gif image" />
</a>

# gatsby-remark-grid-system

gatsby-remark-grid-system is a plugin that creates responsive layouts from markdown files

**Motivation**
As much as i like blogs, do they all have to be single coloum?

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

| Option      | Type    | Reqiured | Default               | Description                    |
| ----------- | ------- | -------- | --------------------- | ------------------------------ |
| breakpoints | array   | no       | [576, 768, 992, 1200] | bootstrap inspired breakpoints |
| padding     | number  | no       | 15                    | ...                            |
| debug       | boolean | no       | false                 | ...                            |

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

TODO `:::` ... `row` ... `col` ...

```
::: div row

::: div col 12|6|7|9
   left content 1
:::

::: div col 12|6|5|3
   right content 1
:::

:::
```
