# RH Connect

> **Contexto técnico v0.2:** stack, MySQL, Git/GitHub, monorepo e Vercel adotados provisoriamente para a versão técnica inicial.

Plataforma web responsiva para preparação de candidatos para entrevistas de emprego, desenvolvida como projeto acadêmico no SENAC-DF.

> **Status atual:** transição do Protótipo 01 para uma versão funcional do produto.

---

## 1. Visão do produto

O RH Connect tem como objetivo oferecer um ambiente de treinamento de entrevistas no qual o candidato possa:

1. criar uma conta;
2. completar seu perfil profissional;
3. cadastrar uma vaga de interesse;
4. realizar uma entrevista simulada;
5. gravar e enviar respostas;
6. aguardar avaliação humana;
7. consultar um relatório estruturado;
8. praticar novamente e acompanhar sua evolução.

A primeira versão funcional deve priorizar o fluxo completo com **avaliação humana**. Recursos de Inteligência Artificial são considerados evolução posterior e não devem bloquear o MVP.

---

## 2. Perfis principais

O MVP trabalha com três perfis principais.

### Candidato

Responsável por:

- gerenciar o próprio perfil;
- cadastrar vagas;
- realizar entrevistas;
- gravar e enviar respostas;
- acompanhar o status das avaliações;
- consultar os próprios resultados e relatórios.

### Avaliador

Responsável por:

- acessar entrevistas atribuídas;
- assistir às gravações autorizadas;
- preencher avaliações;
- registrar pontos fortes e oportunidades de melhoria;
- salvar rascunhos;
- concluir avaliações;
- consultar seu histórico.

### Administrador

Responsável por:

- gerenciar usuários;
- gerenciar avaliadores;
- acompanhar entrevistas;
- atribuir entrevistas;
- gerenciar perguntas;
- gerenciar critérios;
- operar consentimentos, configurações e ações administrativas.

---

## 3. Fluxo principal do MVP

```text
Cadastro
  ↓
Perfil profissional
  ↓
Cadastro da vaga
  ↓
Entrevista simulada
  ↓
Revisão e envio
  ↓
Avaliação humana
  ↓
Relatório
  ↓
Nova prática
```

---

## 4. Estado atual do projeto

O Protótipo 01, criado no Figma Make, é atualmente a principal referência visual do RH Connect.

O código exportado já possui uma base em React, TypeScript, Vite e Tailwind CSS, além de componentes visuais reutilizáveis e tokens iniciais de tema.

Entretanto, ele ainda deve ser tratado como **protótipo navegável**, e não como arquitetura definitiva.

A auditoria inicial identificou que ainda existem, entre outros pontos:

- navegação simulada;
- autenticação simulada;
- cadastro simulado;
- câmera e microfone simulados;
- gravação simulada;
- upload simulado;
- dados hardcoded/mocks;
- ausência de integração real com API;
- ausência de banco de dados;
- ausência de áreas completas de avaliador e administrador;
- concentração excessiva de responsabilidades no arquivo principal;
- necessidade de consolidação do Design System;
- ausência de estratégia completa de testes e automação.

A estratégia recomendada é **reaproveitamento parcial e migração controlada**.

---

## 5. Estratégia de migração

```text
Preservar o protótipo original
        ↓
Auditar o código existente
        ↓
Criar a estrutura oficial
        ↓
Migrar componentes e estilos úteis
        ↓
Consolidar o Design System
        ↓
Criar rotas reais
        ↓
Separar mocks
        ↓
Criar camada de API
        ↓
Integrar Front-end e Back-end
        ↓
Adicionar testes
        ↓
Substituir simulações por funcionalidades reais
```

Não realizar uma reescrita total sem necessidade e não continuar adicionando funcionalidades diretamente ao código monolítico do protótipo.

---

## 6. Stack técnica adotada para a versão inicial

Para permitir o avanço do projeto, a stack abaixo será utilizada **provisoriamente nesta versão técnica inicial**. Ela poderá ser revisada caso a equipe identifique impedimento técnico relevante ou registre uma decisão posterior.

### Front-end

- React
- TypeScript
- Vite
- React Router
- React Hook Form
- Zod
- TanStack Query
- Storybook
- Vitest
- React Testing Library
- Cypress

### Back-end

- Node.js
- TypeScript
- NestJS
- Prisma
- OpenAPI / Swagger UI
- Jest
- Supertest

### Banco de dados

- MySQL

Motivo atual: familiaridade da equipe e adequação aos requisitos relacionais do MVP.

### Qualidade e automação

- ESLint
- Prettier
- GitHub Actions

### Versionamento e colaboração

- Git
- GitHub
- `main` como branch principal estável
- branches por tarefa
- Pull Requests
- GitHub Projects para acompanhamento técnico

### Deploy e infraestrutura

Adotado provisoriamente:

- Vercel para o Front-end

Ainda a definir:

- hospedagem da API;
- armazenamento dos vídeos;
- política de retenção;
- estratégia final de autenticação/sessão.

---

## 7. Arquitetura inicial adotada provisoriamente

Para esta versão técnica inicial, será utilizado provisoriamente um **monorepositório**.

```text
rh-connect/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── ui/
│   ├── types/
│   ├── validation/
│   └── config/
├── docs/
├── .github/
├── .env.example
├── .gitignore
├── AGENTS.md
├── README.md
└── package.json
```

### `apps/web`

Aplicação Front-end:

- páginas;
- layouts;
- rotas;
- formulários;
- integração com API;
- estados de interface;
- responsividade.

### `apps/api`

Aplicação Back-end:

- autenticação;
- autorização;
- regras de negócio;
- APIs;
- banco de dados;
- integrações de infraestrutura;
- upload e acesso seguro à mídia.

### `packages/ui`

Design System e componentes reutilizáveis.

### `packages/types`

Tipos compartilhados quando realmente necessário.

### `packages/validation`

Schemas compartilháveis quando aprovados pela arquitetura.

### `docs`

Documentação oficial e decisões do projeto.

---

## 8. Organização recomendada do Front-end

```text
apps/web/src/
├── app/
│   ├── router/
│   ├── providers/
│   └── App.tsx
├── pages/
│   ├── public/
│   ├── auth/
│   ├── candidate/
│   ├── evaluator/
│   └── admin/
├── features/
│   ├── auth/
│   ├── profile/
│   ├── jobs/
│   ├── interviews/
│   ├── evaluations/
│   └── reports/
├── components/
│   ├── ui/
│   └── shared/
├── layouts/
├── services/
│   └── api/
├── hooks/
├── types/
├── mocks/
└── styles/
```

Essa estrutura é uma referência para migração gradual e não deve ser aplicada em uma única refatoração massiva.

---

## 9. Design System

O Design System deve ser consolidado a partir do Protótipo 01 e da identidade visual aprovada.

A primeira fase deve levantar e padronizar:

- cores;
- tipografia;
- espaçamentos;
- bordas;
- sombras;
- breakpoints;
- estados;
- ícones.

Componentes prioritários:

- Button
- Input
- PasswordInput
- Checkbox
- Select
- Textarea
- Card
- Badge
- Alert
- Modal/Dialog
- Toast
- FormField
- Loading/Skeleton
- Tooltip

Depois:

- Sidebar
- Header/TopBar
- PageHeader
- EmptyState
- DataTable
- Pagination
- Filters
- StatusBadge
- Tabs

Evitar espalhar novos valores visuais hardcoded pelo código.

---

## 10. Permissões e segurança

O controle de acesso deve ser aplicado no Back-end.

Regras principais:

- candidato acessa apenas os próprios dados;
- avaliador acessa apenas entrevistas atribuídas e dados necessários;
- administrador possui acesso operacional conforme permissões aprovadas;
- avaliações em rascunho não aparecem ao candidato;
- observações internas do avaliador não aparecem ao candidato;
- ações críticas devem ser auditáveis;
- consentimentos devem ser separados por finalidade;
- esconder componentes no Front-end não substitui autorização no servidor.

---

## 11. Privacidade e consentimentos

A plataforma trabalha com dados pessoais, profissionais, imagem, voz, vídeos e avaliações.

Princípios:

- coletar somente dados necessários;
- registrar consentimentos com data e versão;
- separar consentimento de gravação de eventual consentimento para IA;
- controlar acesso aos vídeos;
- não expor segredos ou dados sensíveis;
- respeitar retenção, exclusão e auditoria.

---

## 12. Vídeos

Os vídeos não devem ser armazenados diretamente no banco relacional.

A arquitetura deve prever:

- armazenamento externo de mídia;
- metadados no banco;
- upload com progresso;
- tratamento de falhas;
- confirmação real do servidor;
- controle de acesso;
- reprodução segura.

Duração, tamanho, retenção e quantidade de regravações ainda dependem de decisões do projeto.

---

## 13. Contratos da API

Front-end e Back-end devem combinar previamente o formato de comunicação dos principais fluxos.

Cada contrato deve indicar:

- método HTTP;
- rota;
- autenticação;
- dados de entrada;
- campos obrigatórios;
- resposta de sucesso;
- resposta de erro;
- códigos HTTP;
- regras de autorização.

Primeiros contratos prioritários:

- cadastro;
- login;
- logout/sessão;
- recuperação de senha;
- usuário autenticado/perfil.

A documentação deve ser mantida em OpenAPI/Swagger e/ou em `/docs/06-api`.

---

## 14. Git e colaboração

Regras propostas:

- não desenvolver diretamente na `main`;
- criar uma Issue por tarefa relevante;
- criar uma branch por tarefa;
- enviar alterações por Pull Request;
- revisar antes do merge;
- executar build e testes;
- não commitar segredos;
- manter alterações pequenas e revisáveis.

Exemplos de branches:

```text
feature/web-login
feature/api-login
feature/database-users
feature/design-system-button
fix/sidebar-mobile
docs/api-authentication
refactor/auth-structure
test/login-flow
```

---

## 15. GitHub Projects

O GitHub Projects será utilizado como Kanban técnico oficial.

Fluxo sugerido:

- Backlog
- Pronta para iniciar
- Em andamento
- Em revisão
- Em teste
- Bloqueada
- Concluída

Cada Issue deve conter, quando aplicável:

- responsável;
- equipe;
- prioridade;
- sprint;
- prazo;
- dependências;
- revisor;
- critérios de aceite.

---

## 16. Variáveis de ambiente

Nunca commitar segredos.

Arquivos reais de ambiente devem permanecer fora do Git.

Exemplo de `.env.example`:

```env
DATABASE_URL=
JWT_SECRET=
API_URL=
STORAGE_URL=
STORAGE_KEY=
```

Nunca inserir valores reais em `.env.example`.

---

## 17. Testes

A estratégia atual proposta é:

### Front-end

- Vitest
- React Testing Library
- Cypress

### Back-end

- Jest
- Supertest

### Automação

- lint;
- build;
- testes;
- GitHub Actions nos Pull Requests.

Teste deve acompanhar o desenvolvimento, não ser deixado apenas para o final.

---

## 18. Definition of Done

Uma tarefa não deve ser considerada concluída apenas porque aparece visualmente.

Quando aplicável, verificar:

- critérios de aceite;
- comportamento de sucesso;
- loading;
- erros;
- estado vazio;
- autorização;
- responsividade;
- acessibilidade;
- build;
- testes;
- documentação;
- ausência de segredos.

---

## 19. Áreas profissionais iniciais

A estrutura de conteúdo deverá suportar inicialmente áreas relacionadas a:

- Tecnologia da Informação;
- Gestão / Recursos Humanos;
- Secretariado.

O modelo deve permanecer extensível para novas áreas e subáreas futuramente.

Evitar hardcodes que impeçam expansão.

---

## 20. Nilo, gamificação e Árvore de Talentos

Existe documentação própria para esses recursos.

No momento, devem ser tratados conforme o status mais recente registrado pela equipe.

Princípios importantes:

- Nilo é guia, não avaliador;
- Nilo não atribui notas;
- Nilo não influencia contratação;
- Nilo não aparece durante gravações;
- gamificação não utiliza ranking entre candidatos;
- XP não altera a nota;
- evolução é individual;
- falhas técnicas não penalizam progresso.

Não implementar funcionalidades avançadas de gamificação sem confirmação do escopo.

---

## 21. Documentação do projeto

Estrutura recomendada:

```text
docs/
├── 00-fontes-originais/
├── 01-produto-e-escopo/
├── 02-ux/
├── 03-design/
├── 04-arquitetura/
├── 05-modelo-de-dados/
├── 06-api/
├── 07-testes/
├── 08-seguranca-e-permissoes/
└── 09-gestao/
```

Decisões arquiteturais importantes devem ser registradas em ADRs.

Exemplo:

```text
docs/04-arquitetura/decisions/
├── ADR-001-banco-de-dados.md
├── ADR-002-estrutura-do-repositorio.md
├── ADR-003-stack-frontend.md
├── ADR-004-stack-backend.md
├── ADR-005-autenticacao.md
└── ADR-006-armazenamento-de-videos.md
```

---

## 22. Primeira fase técnica

Antes de avançar para funcionalidades complexas:

1. preservar o ZIP original;
2. criar/validar a estrutura do repositório;
3. validar a stack;
4. decidir o banco;
5. configurar Front-end e Back-end;
6. configurar lint, formatação e testes mínimos;
7. consolidar o Design System mínimo;
8. criar rotas reais iniciais;
9. definir os contratos de autenticação;
10. implementar cadastro/login/sessão;
11. realizar a primeira integração real entre Front-end, API e banco;
12. validar o redirecionamento por perfil.

Primeira entrega funcional recomendada:

```text
Cadastro
  ↓
Login
  ↓
Sessão
  ↓
Identificação do perfil
  ↓
Dashboard correspondente
```

---

## 23. Como executar o projeto

> Esta seção deverá ser atualizada após a criação da estrutura oficial do monorepositório.

Enquanto o projeto ainda estiver na estrutura original exportada do Figma Make, consulte o `package.json` para os scripts disponíveis.

Após a migração, documentar aqui:

```text
Pré-requisitos
Instalação
Variáveis de ambiente
Execução do Front-end
Execução do Back-end
Banco de dados
Migrations
Seeds
Testes
Build
Lint
```

Não inventar comandos antes de a estrutura oficial ser criada.

---

## 24. Contribuição

Antes de começar uma tarefa:

1. consulte a Issue;
2. confirme dependências;
3. atualize a branch base;
4. crie uma branch específica;
5. implemente somente o escopo da tarefa;
6. execute os testes relevantes;
7. abra Pull Request;
8. aguarde revisão.

Para instruções específicas destinadas a agentes de código, consulte:

```text
AGENTS.md
```

---

## 25. Status das decisões

Algumas decisões ainda permanecem abertas, entre elas:

- estratégia final de autenticação/sessão;
- hospedagem da API;
- armazenamento dos vídeos;
- política de retenção;
- detalhes de entrevista;
- regras de regravação;
- fórmula de avaliação;
- escopo exato de gamificação.

Nunca tratar uma decisão pendente como definitiva sem registro oficial.

---

## 26. Objetivo da equipe nesta fase

Transformar o Protótipo 01 em uma aplicação funcional e sustentável sem perder o trabalho visual aprovado e sem carregar para o produto final as limitações do código gerado para prototipação.

A prioridade é:

**organização → integração → segurança → testes → fluxo principal funcionando → evolução.**
