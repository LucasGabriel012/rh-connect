# Front-end

Esta pasta concentra a documentacao tecnica do Front-end do RH Connect apos a atualizacao do prototipo exportado do Figma Make.

Os documentos aqui registrados servem como referencia para migrar o prototipo visual para uma arquitetura de produto, preservando identidade visual e reduzindo risco.

## Documentos

- [Auditoria do prototipo atualizado](./auditoria-prototipo-atualizado.md): estado tecnico e funcional atual do `apps/web`, stack encontrada, navegacao, riscos e recomendacoes.
- [Mapa de telas do Front-end](./mapa-de-telas-front-end.md): telas por perfil, prioridade, status, dependencia com Back-end e relacao com a entrega testavel de 10/09.
- [Plano de migracao do App.tsx](./plano-de-migracao-app-tsx.md): plano incremental para reduzir o arquivo principal sem quebrar o prototipo.
- [Mocks e dados temporarios](./mocks-e-dados-temporarios.md): inventario inicial de hardcodes, mocks e simulacoes presentes no prototipo atualizado.
- [Escopo da entrega de 10/09](./escopo-entrega-10-09.md): recorte funcional recomendado para a entrega testavel.

## Regras de uso

- Estes documentos nao autorizam refatoracao automatica.
- O prototipo atualizado continua sendo referencia visual e funcional, nao arquitetura final.
- Mudancas no Front-end devem ser pequenas, revisaveis e validadas por build.
- Autenticacao, autorizacao, persistencia e midia real dependem de contratos e implementacao posterior do Back-end.
