# Article-Scrollbar.js

> Vanilla JavaScript article top custom scrollbar for website.

[Website for preview](http://kenclaron.ru) (On this website Mobile-Scrollbar.js worked only on phones)

## Table of contents
- [Features](#features)
- [Getting started](#getting-started)
  - [Syntax](#syntax)
  - [Example](#example)
- [License](#license)
- [Browser support](#browser-support)
- [Author](#author)

## Features

- Cross-browser support
- Supports custom settings (check out the [syntax](#syntax))

## Main

```text
dist/
├── article-scrollbar.js
└── article-scrollbar.min.js   (compressed)
```

## Getting Started

### Installation

```
npm install article-scrollbar.js
```

In browser:

```html
<script src="/path/to/article-scrollbar.js"></script>
```

### Usage

#### Syntax

```js
new ArticleScrollbar(mobile, heightActive, heightContainer, colorActive, colorContainer);
```

- **mobile** (optional)
  - Type: `Boolean`
  - For mobile devices or not (default: true).

- **heightActive** (optional)
  - Type: `String`
  - Height of active element in scrollbar's container (default: "4px").

- **heightContainer** (optional)
  - Type: `String`
  - Height of scrollbar's container element (default: 4px).

- **colorActive** (optional)
  - Type: `String`
  - Color of active element in scrollbar's container (default: #f23232).

- **colorContainer** (optional)
  - Type: `String`
  - Color of scrollbar's container element (default: #f2f2f2).

#### Example

```js
new ArticleScrollbar();
```

## License

The Article-Scrollbar.js licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Browser support

- Chrome (49.0.2623 or latest)
- Firefox (45.0 or latest)
- Opera (36.0.2130.32 or latest)
- Edge (25.10586/EdgeHTML 13.10586 or latest)
- Safari (9.0 or latest)

## Author

> You can express your gratitude by clicking on one of the links

- [Personal Website](http://kenclaron.ru)
- [Telegram](http://t.me/joinchat/AAAAAFZA0MAQ_0nopQKN_A)
- [VK](https://vk.com/club190729942)


___________________________________

[⬆ back to top](#table-of-contents)