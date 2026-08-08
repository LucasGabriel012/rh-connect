# Baseline do Prototipo 01 - RH Connect

Data do registro: 2026-08-07

Este diretorio preserva o baseline do codigo atual exportado do Prototipo 01 do RH Connect criado no Figma Make, antes de qualquer migracao estrutural para a arquitetura oficial do projeto.

## Arquivo preservado

- `rh-connect-prototipo-01-baseline.zip`

SHA-256:

```text
7634588EFAEC05D20837964B6C4A25EE97A5313DE339763FC0E3F0EB3E58FBA1
```

## Conteudo incluido no baseline

O arquivo compactado preserva os arquivos e pastas que representam o prototipo navegavel e suas configuracoes atuais:

- `src/`
- `guidelines/`
- `ATTRIBUTIONS.md`
- `default_shadcn_theme.css`
- `index.html`
- `package.json`
- `pnpm-workspace.yaml`
- `postcss.config.mjs`
- `vite.config.ts`

## Conteudo nao incluido

As pastas e arquivos de documentacao do projeto nao foram duplicados dentro do ZIP para evitar recursao e duplicacao desnecessaria. O contexto vigente deve continuar sendo lido diretamente de:

- `AGENTS.md`
- `README.md`
- `docs/`

As pastas `apps/` e `packages/` tambem nao foram incluidas porque, neste momento, ainda nao contem a aplicacao migrada. Elas fazem parte da arquitetura-alvo, nao do export original do prototipo.

## Uso durante a migracao

Este baseline deve ser usado como referencia visual e funcional durante a migracao incremental.

Regras:

- nao editar o conteudo deste ZIP;
- nao tratar o codigo preservado como arquitetura final;
- comparar mudancas visuais relevantes contra este baseline;
- preservar identidade, textos, layouts e estados visuais coerentes;
- substituir simulacoes por funcionalidades reais apenas nas etapas aprovadas;
- manter o codigo do prototipo como fonte de reaproveitamento parcial e controlado.

## Escopo deste registro

Esta etapa nao inicializou Git, nao criou repositorio remoto, nao moveu arquivos do Front-end para `apps/web`, nao instalou dependencias, nao alterou estilos, nao refatorou componentes e nao modificou o comportamento atual da aplicacao.
