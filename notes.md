## Tasks

### Layout

- Sticky header
- Footer

### Page 1

- Form with email, given name, postal code, parents name
- Validation with css and html instead of UI libraries.

### Page 2

- Form data available, but not displayed.
- Link to return to page 1.

### Guidelines

- No external modules.
- Solution submitted via zip file.
- Data shared between pages

### Implementation

#### Creating Next.js app, using recommended settings.

```
✔ What is your project named? … form-task
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias? … No / Yes.

Using npm.

Initializing project with template: app
```

- Email verification kept to chcking for `@` and `.`. No assumptions made about domain name length or allowed character types.
- Error messages in English, while labels are in Swedish, as both languages are used in the task. Ideally an Internationalization (i18n) tool would be used.
