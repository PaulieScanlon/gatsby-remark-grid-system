::: div row

::: div col 12

<h1 style='margin-top: 40px;'>@pauliescanlon/gatsby-remark-grid-system </h1>
A Gatsby remark plugin for responsive grid systems in markdown 🍱

:::

:::

<br>

::: div row

::: div col 12

### Markdown

Given the following markdown we can make multi-coloumn layouts across a maximum of 4 breakpoints

:::

:::

<br>

::: div row

::: div col 12|6|7|10

```
::: div row

    ::: div col 12|6|7|10
        left content
    :::

    ::: div col 12|6|5|2
        right content
    :::

:::

```

:::

::: div col 12|6|5|2

<img style='display: flex; margin: 0 auto; max-width: 220px' src="https://gatsby-remark-grid-system.netlify.com/images/remark-grid-system-demo-image.png"/>
:::

:::

<br>

::: div row

::: div col 12|12|6|6

---

### 🤔 row

The `row` is used to start a new block level element and contain a set of `col`'s to create a more dynamic layout

:::

::: div col 12|12|6|6

---

### 🤗 col 12|6|7|10

The numbers next to `col` indicates the number of columns you’d like to use. They are seperated by a pipe "|" to indicate which col width should apply at each of the breakpoints

:::

:::

<br>

::: div row

::: div col 12|12|2|2

:::

::: div col 12|12|8|8

### Responsive

> If you're on a "desktop" resize your browser to see the widths of the `col`'s change. If you're on "mobile" you should just be seeing nicely stacked content.

:::

::: div col 12|12|2|2

:::

:::
