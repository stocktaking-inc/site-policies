# 🐉 Legal pages built with Astro #

_Проект на Astro, реализующий обязательные юридические страницы веб-приложения для системы инвентаризации логистического/торгового микро-предприятия._
---

## 📚 Описание проекта

Данный проект представляет собой отдельный модуль клиентской части системы, в котором реализованы следующие страницы:
- [Terms of Usage](https://site-policies.vercel.app/terms-of-usage)
- [Privacy Policy](https://site-policies.vercel.app/privacy-policy)

Проект создан с использованием [Astro](https://astro.build/), современного фреймворка для быстрого создания веб-сайтов.

---

## 🛠 Технологии

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- HTML / Astro-компоненты
- Markdown 
- Prettier
- @astrojs/sitemap 

---

## 🚀 Быстрый старт

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/your-username/astro-privacy-terms.git
   cd astro-privacy-terms

2. Установить зависимости:
   ```bash
   npm install

3. Запустить проект в режиме разработки:
   ```bash
   npm run dev

---

## 📂 Структура проекта

```pqsql
site-policies/    
├── public/
│   ├── robots.txt             
├── src/
│   ├── styles/
│   │   ├── styles.css
│   ├── utils/
│   │   ├── copyright.ts
│   ├── pages/
│   │   ├── privacy-policy.astro
│   │   └── terms-of-usage.astro         
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🌐 Навигация по сайту
```
/terms-of-usage — Условия использования 
/privacy-policy — Политика конфиденциальности 
```
## 🔍 SEO и индексация
**Sitemap:** Генерируется автоматически с помощью плагина ```@astrojs/sitemap```. После сборки (```npm run build```) создаются файлы ```sitemap-index.xml``` и ```sitemap-0.xml``` в папке ```dist/```. Они содержат ссылки на страницы ```/```, ```/terms-of-usage```, ```/privacy-policy```. Доступны по адресам:
- [sitemap-index.xml](https://site-policies.vercel.app/sitemap-index.xml)
- [sitemap-0.xml](https://site-policies.vercel.app/sitemap-0.xml)

**Robots.txt:** Находится в ```public/robots.txt```. Указывает поисковым системам, какие страницы индексировать, и содержит ссылку на ```sitemap-index.xml```. Доступен по адресу:
- [robots.txt](https://site-policies.vercel.app/robots.txt)

## 📬 Контакты

Для вопросов или предложений свяжитесь с командой разработки через issue в репозитории.