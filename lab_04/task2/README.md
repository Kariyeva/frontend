# Lab 04 - Task 2 (Refactoring Articles)

I started from one manager component logic and refactored UI into reusable components:
- AddArticle: inputs + add button
- ArticleList: renders list
- ArticleItem: shows one article and manages its own open/close state with useState

ArticleManager stores the articles array and passes handlers as props.

