# gatsby-remark-grid-system

gatsby-remark-grid-system is a plugin that creates responsive layouts from markdown files

**Motivation**
As much as i like blogs, do they all have to be single coloum? Arguably if you're using [gatsby-pugin-mdx](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx) this is not problem but... if your blog / site / app uses `.md` this might be worth a look.

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
| padding     | number  | no       | 16                    | padding applied to each `col`  |
| debug       | boolean | no       | false                 | adds an outline to each `col`  |

```js
...
plugins: [
  {
    resolve: `@pauliescanlon/gatsby-remark-grid-system`,
      options: {
        ...
     }
  },
]
```

## 📝 Markdown

TODO explain markdown a bit more `:::` ... `row` ... `col` ...

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
