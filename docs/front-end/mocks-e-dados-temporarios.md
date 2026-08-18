# Mocks e Dados Temporarios

## Objetivo

Registrar os principais dados mockados, hardcoded e fluxos simulados encontrados no prototipo atualizado do Front-end.

Este documento deve orientar a futura separacao de mocks e a substituicao incremental por contratos reais de API.

## App.tsx

Arquivo:

```text
apps/web/src/app/App.tsx
```

Principais dados e simulacoes:

- `type Screen` com lista de telas e perfis misturados.
- `STEPS` usado para navegacao exploratoria do prototipo.
- `AUTH_SCREENS` usado para diferenciar telas autenticadas de forma visual.
- `QUESTIONS` com perguntas fixas de entrevista.
- `CRITERIA` com criterios e notas fixas para relatorio.
- Nome do candidato exibido em telas, como "Joao".
- Vaga exemplo: "Analista de Marketing Digital".
- Empresa exemplo: "Agencia Creative XYZ".
- Fluxo de entrevista controlado por estado local.
- Gravacao simulada.
- Barras de audio simuladas com `Math.random`.
- Envio simulado com `setTimeout`.
- Confirmacao de entrevista e upload sem comunicacao real com servidor.
- Relatorio com notas, graficos e recomendacoes hardcoded.
- Consentimento visual sem registro real.
- Configuracoes de conta simuladas.
- Historico de entrevistas mockado.
- Materiais e notificacoes mockados.
- `sessionStorage` para armazenar apenas estado visual de sidebar recolhida.

Risco:

- Mistura regras de UI, fluxo, dados ficticios e navegacao em um unico arquivo.
- Pode gerar falsa sensacao de funcionalidade real.

## admin-screens.tsx

Arquivo:

```text
apps/web/src/app/components/admin-screens.tsx
```

Principais dados e simulacoes:

- `CANDIDATES` com candidatos ficticios.
- `EVALUATORS` com avaliadores ficticios.
- `INTERVIEWS` com entrevistas ficticias.
- `QUESTIONS_DATA` com banco de perguntas mockado.
- Dashboard administrativo com metricas hardcoded.
- Convite de avaliador simulado.
- Salvamento de formularios com `setTimeout`.
- Atribuicao de entrevistas apenas visual.
- Consentimentos e auditoria mockados.
- Configuracoes administrativas sem persistencia.

Risco:

- Area administrativa parece operacional, mas nao possui autorizacao, persistencia ou auditoria reais.

## eval-screens.tsx

Arquivo:

```text
apps/web/src/app/components/eval-screens.tsx
```

Principais dados e simulacoes:

- `CRITERIA_GUIDE` com criterios fixos.
- `QUEUE_ITEMS` com fila de avaliacao ficticia.
- `HISTORY_ITEMS` com historico ficticio.
- Nome e contexto do avaliador hardcoded.
- Player de video marcado como mock.
- Avaliacao por criterios controlada localmente.
- Revisao e conclusao da avaliacao simuladas.
- Configuracoes de avaliador sem persistencia.
- Ativacao e onboarding de avaliador simulados.

Risco:

- Fluxo de avaliacao humana parece completo, mas ainda nao consome entrevista real nem salva avaliacao real.

## header-popovers.tsx

Arquivo:

```text
apps/web/src/app/components/header-popovers.tsx
```

Principais dados e simulacoes:

- `CANDIDATE_ACCOUNT` com dados de candidato.
- `EVAL_ACCOUNT` com dados de avaliador.
- `ADMIN_ACCOUNT` com dados de administrador.
- `CANDIDATE_NOTIFS` com notificacoes ficticias.
- `EVAL_NOTIFS` com notificacoes ficticias.
- `ADMIN_NOTIFS` com notificacoes ficticias.
- Navegacao por `onNavigate`.
- Logout apenas visual.

Risco:

- Perfis sao representados por dados estaticos, nao por sessao autenticada.

## onboarding-screens.tsx

Arquivo:

```text
apps/web/src/app/components/onboarding-screens.tsx
```

Principais dados e simulacoes:

- Etapas do onboarding do candidato definidas localmente.
- Conclusao do onboarding navega direto para dashboard.
- Nao ha persistencia de progresso.
- Nao ha validacao real de dados.

Risco:

- Onboarding aparenta finalizar configuracao de conta, mas nao grava estado real.

## Dados por dominio

### Candidato

- Nome, cargo, progresso, dados profissionais e status sao mockados.
- Perfil e configuracoes nao persistem.
- Historico e relatorio sao dados fixos.

### Avaliador

- Conta, fila, historico e criterios sao mockados.
- Avaliacao nao e salva no servidor.
- Observacoes e recomendacoes sao locais/visuais.

### Administrador

- Usuarios, avaliadores, entrevistas e atribuicoes sao mockados.
- Permissoes, auditoria e consentimentos sao apenas visuais.

### Vagas

- Vagas e empresas sao hardcoded.
- Cadastro de vaga nao persiste.
- Selecao de vaga apenas direciona o fluxo visual.

### Entrevistas

- Perguntas fixas.
- Gravacao simulada.
- Upload simulado.
- Status hardcoded.
- Videos nao existem como midia real.

### Perguntas e criterios

- Perguntas estaticas em `App.tsx` e `admin-screens.tsx`.
- Criterios estaticos em `App.tsx`, `eval-screens.tsx` e `admin-screens.tsx`.
- Nao ha contrato unico de criterio.

### Relatorios

- Pontuacoes, graficos, pontos fortes e recomendacoes sao hardcoded.
- Liberacao do relatorio nao depende de avaliacao real.

## Recomendacao de destino futuro

Separar mocks em:

```text
apps/web/src/mocks/
├── auth.ts
├── candidate.ts
├── jobs.ts
├── interviews.ts
├── questions.ts
├── evaluations.ts
├── reports.ts
├── evaluator.ts
└── admin.ts
```

Depois, substituir gradualmente por:

```text
apps/web/src/services/api/
```

somente quando houver contratos reais definidos com o Back-end.
