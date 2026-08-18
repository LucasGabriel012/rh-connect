# RH Connect

Plataforma web responsiva para preparação de candidatos para entrevistas de emprego, desenvolvida como projeto acadêmico no SENAC-DF.

O objetivo da versão atual é transformar o protótipo aprovado em uma versão testável do produto, priorizando um fluxo menor, porém funcionando de verdade.

> **Entrega testável:** 10/09/2026  
> **Status atual:** organização da base técnica, auditoria do protótipo atualizado e preparação para evolução do Front-end e Back-end.

---

## 1. Visão geral do projeto

O RH Connect tem como objetivo oferecer um ambiente de preparação para entrevistas, permitindo que candidatos pratiquem respostas, recebam avaliação humana e acompanhem sua evolução.

A primeira versão testável deve priorizar o fluxo principal com avaliação humana.

Recursos como IA, gamificação completa, Nilo com voz, Árvore de Talentos e Centro de Desenvolvimento são considerados evolução futura ou funcionalidades “Em breve”, salvo nova decisão registrada pela equipe.

---

## 2. Fluxo principal da entrega testável

O fluxo principal considerado para a entrega de 10/09 é:

```text
Cadastro/Login
  ↓
Onboarding
  ↓
Dashboard
  ↓
Perfil/Vaga
  ↓
Entrevista simplificada
  ↓
Avaliação humana
  ↓
Resultado/Relatório
```

A prioridade é garantir que esse fluxo funcione de forma consistente, sem depender apenas de telas mockadas simulando funcionalidades essenciais.

Dados de teste podem ser usados durante desenvolvimento e validação, mas o fluxo principal não deve fingir funcionamento real apenas com dados visuais ou estados estáticos.

---

## 3. Perfis principais

O sistema considera três perfis principais.

### Candidato

Responsável por:

- criar conta e acessar o sistema;
- passar pelo onboarding;
- completar o perfil;
- cadastrar ou informar uma vaga;
- realizar entrevista ou resposta simplificada;
- acompanhar avaliação;
- visualizar resultado/relatório.

### Avaliador

Responsável por:

- acessar entrevistas atribuídas;
- analisar respostas dos candidatos;
- preencher avaliação humana;
- registrar observações;
- concluir avaliação;
- permitir que o candidato veja o resultado após finalização.

### Administrador

Responsável por:

- acompanhar o sistema;
- gerenciar usuários e avaliadores, conforme escopo definido;
- apoiar a operação da versão testável;
- acessar informações administrativas mínimas necessárias.

---

## 4. Estado atual do projeto

O projeto está em fase de reorganização para sair de um protótipo visual e caminhar para uma versão testável.

A base visual vem de um protótipo criado no Figma Make, exportado para uma aplicação Front-end.

Como o protótipo foi atualizado, auditorias antigas podem estar desatualizadas. Por isso, a etapa atual é refazer a auditoria com base na versão mais recente.

Objetivos imediatos:

- limpar referências antigas que possam confundir a equipe;
- usar apenas o protótipo atualizado como referência principal;
- auditar o Front-end atual;
- mapear telas, componentes, rotas e pontos mockados;
- documentar como a equipe Front deve continuar;
- alinhar com o Back-end a estrutura inicial do `apps/api`.

---

## 5. Protótipo atualizado e pasta `references`

A pasta `references` deve ser usada apenas para materiais de apoio e referências do projeto.

Versões antigas do protótipo podem ser removidas para:

- reduzir o tamanho do repositório;
- evitar duplicidade;
- impedir que a auditoria use uma versão desatualizada;
- facilitar a organização da equipe.

A versão válida para auditoria deve ser a versão atual exportada do Figma Make.

Caso o protótipo atualizado seja muito pesado para manter no repositório, ele pode ficar no Drive da equipe, e a pasta `references` pode conter apenas um `README.md` indicando onde está a versão correta.

Exemplo recomendado:

```text
references/
└── README.md
```

Exemplo de conteúdo para `references/README.md`:

```md
# References

As versões antigas do protótipo foram removidas para evitar duplicidade e reduzir o tamanho do repositório.

A versão válida para auditoria e organização do Front-end é o protótipo atualizado exportado do Figma Make.

Caso o arquivo do protótipo esteja no Drive da equipe, manter aqui apenas a indicação da origem e data da versão utilizada.
```

---

## 6. Estrutura prevista do repositório

A estrutura alvo do projeto segue a ideia de monorepositório:

```text
rh-connect/
├── apps/
│   ├── web/
│   └── api/
├── packages/
├── docs/
├── references/
├── README.md
└── package.json
```

### `apps/web`

Aplicação Front-end.

Responsável por:

- telas;
- rotas;
- layouts;
- componentes;
- estados de interface;
- responsividade;
- integração futura com API.

Nesta fase, o foco do `apps/web` é a auditoria e organização do protótipo atualizado.

### `apps/api`

Aplicação Back-end.

Responsável por:

- autenticação;
- usuários;
- perfis/permissões;
- banco de dados;
- regras de negócio;
- APIs;
- integrações necessárias.

Nesta fase, o foco do `apps/api` é definir a base técnica inicial: stack, organização de pastas, banco/Prisma se mantido, entidades principais e direção inicial da autenticação.

### `docs`

Documentação oficial do projeto.

Pode conter:

- escopo;
- cronograma;
- decisões;
- auditorias;
- mapas de telas;
- plano de rotas;
- guias para equipe;
- decisões técnicas.

### `references`

Materiais de apoio e versões de referência do protótipo.

Não deve acumular versões antigas sem necessidade.

---

## 7. Stack técnica

A stack do Front-end atual deve seguir o que veio do protótipo exportado e o que estiver configurado no `apps/web`.

Referência atual para o Front-end:

- React;
- TypeScript;
- Vite;
- Tailwind CSS ou estilos equivalentes herdados do protótipo;
- bibliotecas já presentes no projeto exportado.

A stack do Back-end ainda deve ser confirmada pela equipe Back-end.

Referências discutidas:

- `apps/api` para a aplicação Back-end;
- PostgreSQL como banco relacional;
- Prisma como ORM, se a equipe mantiver esse caminho.

Decisões como framework Back-end, autenticação, hospedagem da API e estratégia de sessão/token devem ser registradas oficialmente quando forem confirmadas.

Não tratar decisões em aberto como definitivas.

---

## 8. Auditoria do protótipo atualizado

A auditoria do protótipo atualizado deve ser feita antes de grandes mudanças estruturais.

Objetivos da auditoria:

- identificar a estrutura atual de arquivos;
- listar telas existentes;
- localizar componentes principais;
- identificar telas concentradas em arquivos grandes;
- entender como a navegação funciona hoje;
- identificar mocks, dados hardcoded e navegação fake;
- separar o que entra na entrega de 10/09;
- separar o que fica como “Em breve”;
- gerar documentação para a equipe continuar.

Documentos esperados em `docs/front-end`:

```text
docs/front-end/
├── auditoria-prototipo-atualizado.md
├── mapa-de-telas.md
├── plano-de-rotas.md
└── guia-de-modificacao-do-front-end.md
```

---

## 9. Mapa de telas

O mapa de telas serve para a equipe Front-end não trabalhar no escuro.

Ele deve registrar, para cada tela:

- nome da tela;
- arquivo ou componente onde está;
- perfil relacionado;
- prioridade;
- se entra ou não na entrega de 10/09;
- status atual;
- rota sugerida;
- dependências com Back-end;
- observações.

Exemplo:

```text
Tela: Login
Arquivo atual: a identificar na auditoria
Perfil: Público
Prioridade: Alta
Entra em 10/09: Sim
Rota sugerida: /login
Status atual: protótipo / visual
Depende do Back: Sim, autenticação real
Observação: precisa integrar com API posteriormente
```

---

## 10. Guia de modificação do Front-end

Após a auditoria e o mapa de telas, a equipe Front-end deve seguir um guia de modificação para evitar alterações desorganizadas.

O guia deve explicar como:

- encontrar a tela no mapa;
- localizar o arquivo no código;
- rodar o projeto localmente;
- corrigir responsividade;
- corrigir bugs visuais;
- corrigir redirecionamentos;
- evitar refatorações grandes sem alinhamento;
- registrar o que foi alterado;
- abrir branch e Pull Request.

Regra principal:

> Antes de alterar uma tela, identificar onde ela está, qual problema será resolvido e se ela entra na entrega de 10/09.

---

## 11. Autenticação e recuperação de senha

O F01 — Autenticação envolve principalmente:

- cadastro;
- login;
- usuário logado;
- perfis/permissões;
- redirecionamento correto;
- sessão/token;
- integração com API.

A recuperação de senha deve ser avaliada dentro do F01 — Autenticação como possível apoio ao login.

Ela ainda não deve ser tratada como decisão fechada sem validação da equipe.

Caso entre na entrega de 10/09, deve ser considerada como fluxo complementar ao login, sem ter o mesmo peso de cadastro/login, usuário logado, perfis e redirecionamento.

A recuperação de senha pode envolver:

- token, link ou código de recuperação;
- banco de dados;
- endpoints/API;
- possível envio de e-mail;
- validade do token;
- cuidado para não revelar se um e-mail existe ou não.

Se não couber no prazo, deve ser documentada como evolução futura.

---

## 12. Back-end na Semana 1

Na Semana 1, a parte do Back-end deve focar na preparação da base técnica inicial do `apps/api`.

Isso significa:

- confirmar a stack do Back-end;
- definir a organização inicial das pastas do `apps/api`;
- definir onde entra banco/Prisma, se esse caminho for mantido;
- mapear entidades principais do sistema;
- deixar uma direção inicial para autenticação, usuários, perfis e fluxo principal;
- registrar um padrão mínimo para a equipe Back continuar sem cada pessoa fazer de um jeito.

Não significa implementar todos os módulos na Semana 1.

A prioridade é preparar a base técnica e permitir que as próximas tarefas sejam distribuídas com mais clareza.

---

## 13. Front-end na Semana 1

Na Semana 1, a parte do Front-end deve focar em auditoria, revisão e organização.

Prioridades:

- auditar links, botões e menus;
- verificar redirecionamentos;
- auditar responsividade;
- revisar telas principais;
- registrar problemas encontrados;
- evitar criar rotas no escuro;
- evitar refatorações grandes sem mapa.

A organização inicial de telas, rotas e layouts será conduzida com apoio do Codex, para depois a equipe Front continuar com mais segurança.

---

## 14. Nilo, gamificação e recursos futuros

Nilo, gamificação completa, Árvore de Talentos e Centro de Desenvolvimento não devem bloquear a entrega principal de 10/09.

Esses recursos podem aparecer como:

- “Em breve”;
- evolução futura;
- tela visual desabilitada;
- item de menu sem funcionalidade ativa, caso aprovado.

Princípios:

- Nilo é guia, não avaliador;
- Nilo não substitui avaliação humana;
- gamificação não deve usar ranking público;
- XP não altera nota;
- evolução é individual;
- esses recursos não devem atrasar o fluxo principal da entrega testável.

---

## 15. Git e colaboração

Regras recomendadas:

- não desenvolver diretamente na `main`;
- criar branch por tarefa;
- manter alterações pequenas;
- explicar o que foi alterado;
- evitar refatorações grandes sem alinhamento;
- abrir Pull Request quando possível;
- revisar antes de mesclar;
- não commitar segredos;
- não subir arquivos pesados sem necessidade.

Exemplos de branches:

```text
chore/auditoria-prototipo-atualizado
docs/mapa-de-telas
docs/guia-front-end
fix/responsividade-dashboard
fix/redirecionamento-login
feature/auth-login
```

---

## 16. Como executar o projeto

O modo de execução depende da estrutura atual do `apps/web`.

Se o Front-end estiver em `apps/web`, entrar na pasta:

```bash
cd apps/web
```

Instalar dependências:

```bash
npm install
```

Rodar localmente:

```bash
npm run dev
```

Ou, se o projeto estiver usando `pnpm`:

```bash
pnpm install
pnpm dev
```

Caso os comandos mudem, atualizar esta seção com os comandos oficiais do projeto.

Não inventar comandos antes de confirmar a estrutura real.

---

## 17. Documentação principal

A documentação do projeto deve ficar em `docs/`.

Sugestão de organização:

```text
docs/
├── 01-produto-e-escopo/
├── 02-ux/
├── 03-design/
├── 04-arquitetura/
├── 05-modelo-de-dados/
├── 06-api/
├── 07-testes/
├── 08-seguranca-e-permissoes/
├── 09-gestao/
└── front-end/
```

Documentos específicos da auditoria do Front-end devem ficar em:

```text
docs/front-end/
```

---

## 18. Decisões ainda em aberto

Ainda precisam ser confirmadas pela equipe:

- stack final do Back-end;
- banco de dados;
- uso definitivo de Prisma;
- estratégia de autenticação;
- sessão ou token;
- hospedagem da API;
- armazenamento de vídeos;
- formato final da entrevista: vídeo, áudio ou texto;
- recuperação de senha na entrega de 10/09 ou evolução futura;
- escopo exato de funcionalidades “Em breve”.

Nenhuma decisão pendente deve ser tratada como definitiva sem registro.

---

## 19. Objetivo da fase atual

A fase atual não é implementar tudo.

A prioridade agora é:

```text
limpar referências antigas
  ↓
usar o protótipo atualizado
  ↓
auditar o Front-end
  ↓
mapear telas
  ↓
planejar rotas
  ↓
documentar como o Front deve continuar
  ↓
confirmar base técnica do Back
  ↓
evoluir para implementação do fluxo principal
```

A entrega de 10/09 deve priorizar uma versão menor, mas funcionando de verdade no fluxo principal.