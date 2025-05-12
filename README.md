# 🐉 Legal pages built with Astro

## _Проект на Astro, реализующий обязательные юридические страницы веб-приложения для системы инвентаризации логистического/торгового микро-предприятия._

## 📚 Описание проекта

Данный проект представляет собой отдельный модуль клиентской части системы, в котором реализованы следующие страницы:

- [Terms of Usage](https://site-policies.vercel.app/terms-of-usage)
- [Privacy Policy](https://site-policies.vercel.app/privacy-policy)
- [Public Offer](https://site-policies.vercel.app/offer)

Проект создан с использованием [Astro](https://astro.build/), современного фреймворка для быстрого создания веб-сайтов.

---

## 🛠 Технологии

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- HTML / Astro-компоненты
- Markdown
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Lefthook](https://github.com/evilmartians/lefthook)
- [Commitizen](https://github.com/commitizen/cz-cli)
- @astrojs/sitemap

---

## 🚀 Быстрый старт

1. Клонировать репозиторий:

   ```bash
   git clone https://github.com/your-username/site-policies.git
   cd astro-site-policies

   ```

2. Установить зависимости:

   ```bash
   npm install

   ```

3. Запустить проект в режиме разработки:
   ```bash
   npm run dev
   ```

---

## 📂 Структура проекта

```pqsql
site-policies/
├── public/
│   ├── robots.txt
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   │   │   ├── icon.png
│   │   │   │   ├── logo.png
│   │   │   │   └── opengraph.png
│   ├── pages/
│   │   ├── offer.astro
│   │   ├── policy.astro
│   │   └── terms.astro
│   ├── components/
│   │   ├── Footer.astro
├── styles/
│   ├── font.css
│   ├── layout.css
│   ├── misc.css
│   ├── navigation.css
│   └── sidebar.css
├── utils/
│   └── copyright.ts
├── .prettierrc.js
├── .prettierignore
├── eslint.config.js
├── lefthook.yml
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── yarn.lock
└── README.md
```

---

## 🌐 Навигация по сайту

```
/terms — Условия использования
/policy — Политика конфиденциальности
/offer - Публичная оферта
```

---

## 🔍 SEO и индексация

**Sitemap:** Генерируется автоматически с помощью плагина `@astrojs/sitemap`. После сборки (`npm run build`) создаются файлы `sitemap-index.xml` и `sitemap-0.xml` в папке `dist/`. Они содержат ссылки на страницы `/`,`/offer`, `/terms`, `/policy`. Доступны по адресам:

- [sitemap-index.xml](https://site-policies.vercel.app/sitemap-index.xml)
- [sitemap-0.xml](https://site-policies.vercel.app/sitemap-0.xml)

**Robots.txt:** Находится в `public/robots.txt`. Указывает поисковым системам, какие страницы индексировать, и содержит ссылку на `sitemap-index.xml`. Доступен по адресу:

- [robots.txt](https://site-policies.vercel.app/robots.txt)

---

## 🛠 Процесс разработки

- _Коммиты:_ Используйте `npm run commit` с Commitizen для создания структурированных сообщений в формате Conventional Commits.
- _Линтинг и форматирование:_ Перед коммитом автоматически выполняются `npm run lint` (ESLint) и `npm run format` (Prettier) с помощью Lefthook.
- _Добавление изменений:_ Убедитесь, что все новые файлы добавлены в индекс Git перед коммитом (`git add .`).

---

## 📬 Контакты

Для вопросов или предложений свяжитесь с командой разработки через issue в репозитории.
(почта тг там потом добавлю)
