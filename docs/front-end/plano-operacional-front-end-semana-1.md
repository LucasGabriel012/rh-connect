# Plano Operacional Front-end — Semana 1

## 1. Objetivo do documento

Este documento orienta a equipe Front-end sobre como trabalhar na base atual do RH Connect depois da importação do protótipo atualizado do Figma Make.

A ideia é organizar as primeiras frentes de trabalho sem quebrar o visual aprovado, sem refatorar tudo de uma vez e sem transformar o protótipo em produto de forma apressada. O foco da Semana 1 é entender, testar, mapear e fazer ajustes pequenos e seguros.

Este plano não define tarefas obrigatórias por pessoa. Ele descreve frentes de trabalho para que a equipe possa se organizar conforme disponibilidade, facilidade e prioridade.

## 2. Estado atual do Front-end

O protótipo atualizado já está em:

```text
apps/web
```

A base atual já possui telas de:

- Candidato;
- Avaliador;
- Administrador.

O projeto roda localmente e a referência visual está mais completa que a versão anterior. Mesmo assim, ainda é uma base de protótipo:

- a navegação ainda é simulada por estado interno;
- ainda não existem rotas reais organizadas por página;
- muitos dados ainda são mockados ou hardcoded;
- o `App.tsx` ainda concentra muitas telas e responsabilidades;
- ações como login, cadastro, envio, gravação, avaliação e salvamento ainda são simulações visuais;
- a integração real com Back-end ainda não existe nesta fase.

Portanto, o objetivo agora não é "mexer em tudo", e sim preparar o caminho para uma migração gradual.

## 3. Como rodar o projeto localmente

No Windows, a recomendação inicial é usar o **PowerShell** ou o **terminal integrado do VS Code**.

Por enquanto, evite usar o **Git Bash** para rodar o projeto. Em alguns computadores ele pode não reconhecer o `pnpm` mesmo quando o Node/npm estão instalados corretamente. Isso pode gerar o erro:

```text
pnpm: command not found
```

Esse erro normalmente significa que o `pnpm` não está instalado ou não foi reconhecido pelo terminal atual.

Antes de rodar o projeto, confira se Node, npm e pnpm estão disponíveis:

```bash
node -v
npm -v
pnpm -v
```

Se `node -v` e `npm -v` funcionarem, mas `pnpm -v` não funcionar, instale o pnpm com:

```bash
npm install -g pnpm
```

Depois de instalar, feche o terminal e abra novamente. Isso ajuda o Windows/VS Code a reconhecer o novo comando.

Passo a passo para rodar pela raiz do projeto:

1. Abra o terminal na raiz do projeto.
2. Instale as dependências com pnpm:

```bash
pnpm install
```

3. Rode o Front-end:

```bash
pnpm run dev:web
```

4. Abra no navegador a URL indicada pelo Vite no terminal.

Se você estiver com o terminal aberto diretamente dentro de `apps/web`, também pode rodar:

```bash
pnpm run dev
```

Use `pnpm` como gerenciador do projeto. Não rode `npm install`, porque isso pode gerar `package-lock.json` e misturar gerenciadores de pacote.

Arquivos e pastas que não devem ser commitados:

- `node_modules`;
- `dist`;
- `.pnpm-store`;
- `.env`;
- arquivos temporários pessoais;
- `package-lock.json`, pois o projeto usa `pnpm`.

Antes de qualquer commit, sempre rode:

```bash
git status
```

## 4. Como encontrar uma tela no código

Ainda não existem rotas reais organizadas por página. Por isso, encontrar uma tela exige olhar o mapa de telas e pesquisar no código.

Use primeiro:

```text
docs/front-end/mapa-de-telas-front-end.md
```

Depois, no VS Code, use `Ctrl + Shift + F` para buscar por textos visíveis na interface ou por nomes como:

- `Dashboard`;
- `Avaliação`;
- `Admin`;
- `Onboarding`;
- `Relatório`;
- `Entrevista`;
- `Perfil`;
- `Vagas`.

Exemplos úteis:

- Dashboard do Avaliador provavelmente está em `apps/web/src/app/components/eval-screens.tsx`.
- Telas administrativas provavelmente estão em `apps/web/src/app/components/admin-screens.tsx`.
- Onboarding do candidato está em `apps/web/src/app/components/onboarding-screens.tsx`.
- Popovers de conta, header e notificações estão em `apps/web/src/app/components/header-popovers.tsx`.
- Várias telas do Candidato ainda estão em `apps/web/src/app/App.tsx`.

Se não encontrar pela função/componente, procure por um texto que aparece na tela.

## 5. Como fazer ajustes de responsividade

A equipe já pode trabalhar responsividade mesmo sem rotas reais, desde que os ajustes sejam pequenos e seguros.

Passo a passo recomendado:

1. Rode o projeto localmente.
2. Abra a tela no navegador.
3. Use o DevTools em modo responsivo.
4. Teste desktop, tablet e mobile.
5. Identifique a quebra visual.
6. Localize a tela no código.
7. Ajuste classes Tailwind/CSS com cuidado.
8. Teste novamente nos três tamanhos.
9. Faça um commit pequeno e focado.

Exemplos de ajustes comuns:

```tsx
// Antes
grid-cols-3

// Depois
grid-cols-1 md:grid-cols-2 xl:grid-cols-3
```

```tsx
// Antes
flex

// Depois
flex flex-col lg:flex-row
```

Outros exemplos:

- trocar larguras fixas por `w-full max-w-*`;
- adicionar `overflow-x-auto` em tabelas;
- reduzir espaçamentos em mobile;
- evitar que botões fiquem espremidos;
- evitar texto cortado em cards;
- testar se sidebars e menus continuam utilizáveis.

Evite mudanças visuais grandes nesta fase. Se o ajuste exigir alterar layout inteiro, registre o problema para uma etapa futura.

## 6. Frentes de trabalho do Front-end

### Frente 1 — Revisão do mapa de telas

Objetivo:

Validar se o mapa de telas corresponde ao que existe no protótipo atualizado.

Atividades:

- revisar telas públicas/auth;
- revisar telas do Candidato;
- revisar telas do Avaliador;
- revisar telas do Administrador;
- marcar dúvidas ou telas faltantes;
- confirmar o que entra na entrega de 10/09.

Entrega esperada:

- comentários ou ajustes no mapa;
- lista de telas prioritárias para 10/09;
- dúvidas registradas para alinhamento com a equipe.

### Frente 2 — Responsividade

Objetivo:

Testar e mapear problemas visuais nas telas principais.

Atividades:

- testar desktop, tablet e mobile;
- priorizar o fluxo do Candidato;
- testar telas principais do Avaliador;
- testar telas principais do Administrador;
- registrar prints/problemas;
- corrigir apenas ajustes simples e seguros.

Entrega esperada:

- lista de problemas encontrados;
- correções pequenas quando possível;
- indicação de problemas que exigem refatoração futura.

### Frente 3 — Mocks e dados temporários

Objetivo:

Entender quais dados são simulados e onde estão.

Atividades:

- revisar mocks em `App.tsx`;
- revisar mocks em `admin-screens.tsx`;
- revisar mocks em `eval-screens.tsx`;
- revisar dados em `header-popovers.tsx`;
- comparar com `docs/front-end/mocks-e-dados-temporarios.md`;
- não apagar mocks ainda.

Entrega esperada:

- lista dos principais dados temporários;
- sugestão de separação futura em arquivos de mocks;
- dúvidas para alinhamento com Back-end.

### Frente 4 — App.tsx

Objetivo:

Entender a estrutura do `App.tsx` antes de qualquer separação.

Atividades:

- identificar blocos de auth;
- identificar blocos do Candidato;
- identificar blocos de entrevista;
- identificar blocos de relatório;
- identificar `screenMap`, `onNavigate` e `setScreen`;
- mapear o que pode ser separado depois.

Entrega esperada:

- lista de blocos candidatos à separação;
- riscos de mexer no `App.tsx`;
- sugestão de ordem de migração.

### Frente 5 — Rotas futuras

Objetivo:

Propor rotas futuras sem implementar ainda.

Atividades:

- transformar telas em propostas de URL;
- separar rotas públicas, Candidato, Avaliador e Administrador;
- identificar rotas prioritárias;
- identificar rotas futuras ou "em breve";
- garantir que a proposta respeite os perfis do produto.

Entrega esperada:

- tabela com tela atual, rota sugerida, perfil e prioridade;
- observações sobre rotas que dependem de autenticação;
- dúvidas para alinhamento com Back-end.

### Frente 6 — Revisão visual do fluxo principal

Objetivo:

Garantir que o fluxo principal da entrega testável faça sentido visualmente.

Fluxo base:

```text
Cadastro/Login → Onboarding → Dashboard → Perfil/Vaga → Entrevista simplificada → Avaliação humana → Resultado/Relatório
```

Atividades:

- percorrer o fluxo no navegador;
- identificar telas confusas;
- registrar botões sem ação clara;
- registrar textos que podem confundir o usuário;
- propor ajustes simples;
- separar o que depende do Back-end do que pode ser ajustado no Front agora.

Entrega esperada:

- lista de ajustes visuais/textuais;
- pontos que dependem do Back-end;
- pontos que devem ficar como "em breve".

## 7. O que pode ser feito agora

- Ajustes simples de responsividade.
- Correções visuais pequenas.
- Documentação.
- Mapeamento de telas.
- Mapeamento de mocks.
- Propostas de rotas futuras.
- Análise do `App.tsx`.
- Pequenos commits focados.
- Registro de dúvidas para alinhamento com Back-end.

## 8. O que não deve ser feito agora

- Não refatorar o `App.tsx` inteiro.
- Não implementar autenticação real ainda.
- Não criar rotas reais sem plano aprovado.
- Não alterar Design System sem alinhamento.
- Não mexer no `apps/api`.
- Não apagar mocks sem mapear.
- Não misturar muitas alterações no mesmo commit.
- Não fazer redesign.
- Não trocar bibliotecas por preferência.
- Não commitar `node_modules`, `dist`, `.pnpm-store`, `.env` ou `package-lock.json`.

## 9. Como fazer uma alteração com segurança

Fluxo recomendado:

1. Atualizar a `main`.
2. Instalar ou atualizar dependências com `pnpm install`.
3. Rodar o projeto com `pnpm run dev:web`.
4. Confirmar que a base abre normalmente no navegador.
5. Criar uma branch nova.
6. Escolher uma frente/tela.
7. Localizar o arquivo.
8. Fazer ajuste pequeno.
9. Testar localmente.
10. Rodar `git status`.
11. Fazer commit.
12. Abrir Pull Request.

Comandos úteis:

```bash
git checkout main
git pull origin main
pnpm install
pnpm run dev:web
git checkout -b nome-da-branch
git status
git add caminho/do/arquivo
git commit -m "mensagem do commit"
git push -u origin nome-da-branch
```

Antes de abrir o PR, confira:

- se o ajuste ficou restrito ao escopo;
- se nenhum arquivo indevido entrou;
- se o visual foi testado;
- se o PR explica o que foi feito e como revisar.

## 10. Padrão de branches e commits

Sugestões de nomes de branch:

- `fix/responsividade-dashboard-candidato`;
- `docs/ajusta-mapa-telas-front`;
- `chore/mapeia-mocks-front`;
- `refactor/prepara-separacao-mocks`;
- `fix/responsividade-avaliador-fila`.

Sugestões de commits:

- `fix: ajusta responsividade do dashboard do candidato`;
- `docs: atualiza mapa de telas do front`;
- `chore: mapeia mocks do fluxo candidato`;
- `fix: corrige espacamento da fila do avaliador`;
- `docs: propõe rotas futuras do front`.

Use mensagens curtas, claras e no escopo da alteração.

## 11. Critérios para considerar uma tarefa concluída

Uma frente ou ajuste pode ser considerado pronto para revisão quando:

- a tela foi encontrada no código;
- a alteração foi pequena e focada;
- o visual foi testado;
- desktop, tablet e mobile foram considerados quando aplicável;
- nenhum fluxo importante foi quebrado;
- nenhum arquivo indevido foi adicionado;
- nenhum segredo foi commitado;
- o commit está claro;
- o PR explica o que foi feito;
- dúvidas e limitações foram registradas.

## 12. Próximos passos depois da Semana 1

Depois da Semana 1, a equipe deve consolidar o que foi aprendido e transformar os achados em próximos passos mais técnicos.

Próximos movimentos esperados:

- consolidar feedback da equipe;
- revisar o escopo realista da entrega de 10/09;
- começar a separação dos mocks;
- iniciar a separação incremental do `App.tsx`;
- planejar rotas reais com React Router;
- alinhar contratos com Back-end;
- preparar a futura camada de API;
- decidir quais telas ficam como "em breve";
- retomar validações reais de qualidade quando houver etapa própria.

O mais importante é manter o projeto estável enquanto ele deixa de ser apenas protótipo e começa a virar produto.
