# apps/web

Aplicacao Front-end atual do RH Connect.

O Prototipo 01 exportado do Figma Make foi movido para esta pasta na Etapa 5 da migracao, sem refatoracao de componentes, estilos, navegacao, mocks ou comportamento.

## Stack atual

- React
- TypeScript
- Vite
- Tailwind CSS 4
- Vitest
- React Testing Library

## TypeScript

A configuracao TypeScript esta declarada em:

- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`

O alias `@/*` aponta para `src/*`, equivalente ao alias configurado no Vite.

## Comandos

A partir da raiz do repositorio:

```bash
pnpm dev:web
pnpm build:web
pnpm typecheck:web
pnpm lint:web
pnpm test:web
pnpm format:check:web
pnpm format:web
```

Ou diretamente nesta pasta:

```bash
pnpm dev
pnpm build
pnpm typecheck
pnpm lint
pnpm test
pnpm test:run
pnpm format:check
pnpm format
```

Os testes seguem a convencao `src/**/*.test.ts` e `src/**/*.test.tsx`.

Este codigo ainda esta em processo de migracao estrutural. A separacao de rotas, mocks, servicos de API e Design System ocorrera em etapas futuras.
