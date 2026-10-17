# Locale Guard demo: a base file without a locale code

A small React meeting room in English, Arabic, German and Turkish, translated
with [react-i18next](https://react.i18next.com). English lives in
`public/lang/main.json` and every other language in
`public/lang/main-{locale}.json`, the layout
[Jitsi Meet](https://github.com/jitsi/jitsi-meet) uses. It shows what
[Locale Guard](https://github.com/Mohamed-Almarag/locale-guard) reports on real
pull requests.

## Setup

| | |
|---|---|
| Framework | React 19 with Vite |
| Translation library | `react-i18next`, files loaded by `i18next-http-backend` |
| Locale files | `public/lang/main.json` for English, `public/lang/main-{locale}.json` for the others |
| Base locale | `en` |

The English file has no locale code in its name, so no `{locale}` pattern
matches it. `base-file` names it:

```yaml
- uses: Mohamed-Almarag/locale-guard@v1
  with:
    files: public/lang/main-{locale}.json
    base-file: public/lang/main.json
    format: react-i18next
```

The whole setup is one workflow file,
[.github/workflows/translations.yml](.github/workflows/translations.yml).

## Pull requests to look at

| Pull request | What it shows | Result |
|---|---|---|
| [#1 Add a waiting room](https://github.com/Mohamed-Almarag/locale-guard-demo-base-file/pull/1) | Keys German and Turkish never got, in one copy-paste block named `public/lang/main-{locale}.json`; an Arabic placeholder translated as `{{المضيف}}`; an extra key | ❌ Fails |
| [#2 Add meeting notes](https://github.com/Mohamed-Almarag/locale-guard-demo-base-file/pull/2) | The first commit forgets German and Turkish, the second one adds them, and the same comment turns green | ✅ Passes |
| [#3 Space out the toolbar](https://github.com/Mohamed-Almarag/locale-guard-demo-base-file/pull/3) | A change that touches no translation file, so the check finishes in seconds | ✅ Passes |

The `main` branch already has two old issues: a key German never got, and an
empty Turkish value. Locale Guard lists them apart from the issues each pull
request adds, collapsed, and they do not fail the check.

## Run the app

```bash
npm install
npm run dev
```
