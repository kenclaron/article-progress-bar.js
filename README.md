# Article-Progress-Bar.js

> Vanilla JavaScript article top custom progress bar for website.

[Website for preview](http://kenclaron.ru) (on this website Article-Progress-Bar.js worked only on phones)

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
- Desktop and mobile platforms support
- Supports custom settings (check out the [syntax](#syntax))

## Main

```text
dist/
├── article-progress-bar.js
└── article-progress-bar.min.js   (compressed)
```

## Getting Started

### Installation

```
npm install article-progress-bar.js
```

In browser:

```html
<script src="/path/to/article-progress-bar.js"></script>
```

### Usage

#### Syntax

```js
new ArticleProgressBar(mobile, heightActive, heightContainer, colorActive, colorContainer);
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
new ArticleProgressBar();
```

## License

The Article-Progress-Bar.js licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Browser support

- Chrome (49.0.2623 or latest)
- Firefox (45.0 or latest)
- Opera (36.0.2130.32 or latest)
- Edge (25.10586/EdgeHTML 13.10586 or latest)
- Safari (9.0 or latest)

## Author

> You can express your gratitude by clicking on one of the links

- [Personal website](http://kenclaron.ru)
- [Telegram](http://t.me/joinchat/AAAAAFZA0MAQ_0nopQKN_A)
- [VK](https://vk.com/club190729942)


___________________________________

[↑ back to top](#table-of-contents)