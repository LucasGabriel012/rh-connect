# Contribuicao - RH Connect

Este projeto usa um fluxo simples para manter a `main` estavel e facilitar revisoes pequenas.

## Fluxo de trabalho

1. Criar ou escolher uma Issue.
2. Atualizar a `main` local.
3. Criar uma branch a partir da `main`.
4. Implementar somente o escopo da Issue.
5. Executar as validacoes relevantes.
6. Abrir Pull Request para `main`.
7. Aguardar revisao antes do merge.

Nao desenvolver diretamente na `main`.

## Convencao de branches

Use nomes curtos e descritivos:

- `feature/*`
- `fix/*`
- `docs/*`
- `refactor/*`
- `test/*`
- `chore/*`
- `ci/*`
- `spike/*`

Exemplos:

- `feature/web-login`
- `feature/api-login`
- `fix/sidebar-mobile`
- `docs/api-auth`
- `refactor/app-layout`
- `test/login-flow`
- `chore/typescript-config`
- `ci/github-actions`

## Pull Requests

Mantenha PRs pequenos e revisaveis. Evite misturar assuntos diferentes no mesmo PR.

Cada PR deve informar:

- resumo da alteracao;
- Issue relacionada;
- como foi testado;
- impacto visual;
- riscos ou pendencias.

## Commits

Prefira mensagens objetivas com prefixo coerente com a branch ou tipo de alteracao:

- `feature:`
- `fix:`
- `docs:`
- `refactor:`
- `test:`
- `chore:`
- `ci:`
- `spike:`

## Main estavel

A `main` deve representar um estado estavel do projeto. Mudancas devem entrar por Pull Request, com revisao e validacoes adequadas ao escopo.

Nao commitar segredos, arquivos `.env`, dependencias instaladas, builds ou artefatos temporarios.
