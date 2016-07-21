# Wesbos - *What The Flexbox?!*

Minhas anotações da série [What The Flexbox?!](https://www.youtube.com/playlist?list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid), feita pelo @wesbos

Elas consistem em vários exemplos e em aprender a usar o guia do flexbox:

> O [guia do *flexbox*](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) pode ser seu melhor amigo.

## **StackOverflow**: [What are the differences between flex-basis and width?](http://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width)
> ## Consider flex-direction

> The first thing that comes to mind when reading your question is that flex-basis doesn't always apply to width.

> When flex-direction is row, flex-basis controls width.

> But when flex-direction is column, flex-basis controls height.

> ## Browser Behavior

> So, according to the spec, flex-basis and width resolve identically, unless flex-basis is auto or content. In such cases, flex-basis may use content width (which, presumably, the width property would use, as well).

## **StackOverflow**: [What exactly flex-basis property sets?](http://stackoverflow.com/questions/23569229/what-exactly-flex-basis-property-sets)
> `flex-basis` allows you to specify the initial/starting size of the element, before anything else is computed. It can either be a percentage or an absolute value.

> It is, however, not the breaking point for flex-grow/shrink properties. The browser determines when to wrap the element on the basis of if the initial sizes of elements exceed the width of the cross-axis (in conventional sense, that is the width).
