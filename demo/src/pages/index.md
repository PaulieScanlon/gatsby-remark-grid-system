# gatsby-remark-grid-system

#### Given the following markdown

we can make multi-coloumn layouts across 4 breakpoints

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

#### 🤔 col 12|6|6|6

The numbers next to `col` indicate the number of columns you’d like to use. They are seperated by a pipe "|" to indicate which col width should apply at each of the breakpoints.

You now the drill, resize your browser to see it in action!
