# MovieTime — Movies Website

A responsive movie website for the 2026 frontend midterm. The topic is movies: visitors can browse six films, read short reviews, compare running times and preview a suggestion.

**Published website:** https://Atitu9.github.io/movies-website/

## Group members and individual contributions

Fill in the real names and actual contributions before submission. They have not been provided yet; the entries below are intentionally unfinished.

| Group member | Individual contribution |
| --- | --- |
| TODO: full name | TODO: actual pages, styles and features completed |
| TODO: full name (if applicable) | TODO: actual contribution |

Add or remove rows to match your group. Each member should understand the whole project for the individual defence.

## Pages and features

- `index.html` — welcome section and three movie picks.
- `movies.html` — six film cards, title search, genre filter, expandable synopses and a running-time table.
- `reviews.html` — three spoiler-free reviews.
- `about.html` — project description, list and FAQ.
- `contact.html` — labelled form with required fields, email validation, message preview and reset.
- Shared navigation, current-page highlight, footer contact and external social links.
- Responsive layouts for desktop, tablet and mobile, keyboard focus styles and a skip link.

The contact form is a **local demonstration**. It does not send email, store personal data or contact a server. The actual contact link opens GitHub Issues. The footer's YouTube and Instagram links are external film accounts, not accounts belonging to this project.

## Technologies

HTML5, CSS3, [Bootstrap 5.3.8](https://getbootstrap.com/docs/5.3/getting-started/download/) and a small amount of plain JavaScript. No framework, API key, database, build process or package installation is needed. Bootstrap's distributed files and MIT license are included in `vendor/bootstrap/`. Only Bootstrap CSS is needed by these pages; the optional JS bundle is included for future course exercises.

The Nunito Sans font loads from Google Fonts. If offline, the site falls back to Arial. Posters and Bootstrap are local, so the pages still work without a connection.

## Run locally

Open `index.html` in your browser. Alternatively, open the folder in VS Code and use Live Server, or run `python3 -m http.server 8000` and open http://localhost:8000.

## Where the course requirements are demonstrated

| Requirement | Example in the project |
| --- | --- |
| Semantic HTML | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` |
| External CSS, no inline styles | `css/style.css` |
| Flexbox | `.header-content`, `.nav-list`, `.footer-links` |
| CSS Grid | `.movie-grid` |
| Bootstrap grid | `.container`, `.row`, `.col-md-8`, `.col-lg-4` |
| Bootstrap utilities | `py-5`, `mb-4`, `g-4`, `text-center`, `btn` |
| Positioning | `.movie-card` is relative; `.pick-label` is absolute |
| Hover and focus | `a:hover`, navigation hover and `:focus-visible` |
| Repeating-item selector | `.movie-table tbody tr:nth-child(even)` |
| CSS variables | Six variables inside `:root` |
| Responsive breakpoints | `max-width: 991px` and `max-width: 575px` |
| Font | Nunito Sans via Google Fonts |
| Lazy loading | `loading="lazy"` on below-the-fold posters |
| Table and form | `movies.html` and `contact.html` |

## Коротко для подготовки к защите

- Шапка использует Flexbox: логотип и меню расположены в одну строку, на планшете — друг под другом.
- Карточки используют CSS Grid: три колонки на компьютере, две на планшете и одна на телефоне.
- Bootstrap отвечает за контейнеры, сетку некоторых разделов, кнопки и отступы. Собственный CSS подключён после Bootstrap, чтобы переопределять оформление.
- JavaScript берёт текст поиска и выбранный жанр, сравнивает их с `data-title` и `data-genre`, затем скрывает неподходящие карточки атрибутом `hidden`.
- Форма использует проверку HTML (`required`, `type="email"`, `minlength`), а `preventDefault()` отменяет отправку и позволяет показать локальный предпросмотр.
- Перед защитой самостоятельно попробуйте добавить карточку фильма, изменить число колонок и добавить поле формы.

## Image credits

Posters are copyrighted promotional material belonging to their respective owners, not Creative Commons assets. Source pages are listed below for attribution. Wikipedia's fair-use statements describe its own use, not a general reuse licence.

- [Interstellar](https://en.wikipedia.org/wiki/File:Interstellar_film_poster.jpg)
- [Inception](https://en.wikipedia.org/wiki/File:Inception_(2010)_theatrical_poster.jpg)
- [The Dark Knight](https://en.wikipedia.org/wiki/File:The_Dark_Knight_(2008_film).jpg)
- [Spirited Away](https://en.wikipedia.org/wiki/File:Spirited_Away_Japanese_poster.png)
- [Ratatouille](https://en.wikipedia.org/wiki/File:RatatouillePoster.jpg)
- [The Grand Budapest Hotel](https://en.wikipedia.org/wiki/File:The_Grand_Budapest_Hotel.png)

## Publishing

GitHub Pages serves the `main` branch, root folder. Changes pushed to `main` are published automatically. Relative links keep navigation and local assets working under `/movies-website/`.
