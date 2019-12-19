# @pauliescanlon/gatsby-remark-grid-system

<br>

### Markdown

Given the followint markdown we can make multi-coloumn layouts across 4 breakpoints

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

```js
 🏝️
```

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

:::
