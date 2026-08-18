# Escopo da Entrega Testavel de 10/09

## Fluxo principal

Base funcional da entrega testavel:

```text
Cadastro/Login -> Onboarding -> Dashboard -> Perfil/Vaga -> Entrevista simplificada -> Avaliacao humana -> Resultado/Relatorio
```

Admin e Avaliador entram como suporte minimo para demonstrar a avaliacao humana.

## Entra na entrega testavel

### Publico e autenticacao visual

- Landing.
- Login/cadastro visual.
- Termos de uso.
- Politica de privacidade.
- Verificacao de e-mail, se nao bloquear o fluxo.

Observacao:

- Autenticacao real depende do Back-end. Ate la, o Front pode manter simulacao claramente identificada.

### Candidato

- Onboarding do candidato.
- Dashboard do candidato.
- Perfil profissional.
- Cadastro/edicao visual de vaga.
- Lista de vagas.
- Inicio da entrevista a partir de vaga.
- Consentimento de gravacao.
- Orientacoes.
- Teste tecnico simplificado.
- Entrevista simulada.
- Revisao das respostas.
- Confirmacao/envio visual.
- Status aguardando avaliacao.
- Relatorio final visual.

### Avaliador minimo

- Dashboard do avaliador.
- Fila de avaliacoes.
- Tela de avaliacao.
- Revisao da avaliacao.
- Conclusao da avaliacao.

### Administrador minimo

- Dashboard administrativo.
- Lista de entrevistas.
- Lista de avaliadores.
- Atribuicao visual de entrevista para avaliador.
- Acompanhamento basico do status.

## Pode entrar se houver tempo

- Recuperacao de senha visual.
- Redefinicao de senha visual.
- Notificacoes mockadas.
- Historico de entrevistas do candidato.
- Historico do avaliador.
- Detalhe do candidato no admin.
- Banco de perguntas visual.
- Criterios administrativos visuais.
- Consentimentos no admin.

## Fica como "em breve"

- Centro de Desenvolvimento completo.
- Materiais ricos.
- Gamificacao avancada.
- Nilo.
- Arvore de Talentos.
- Recursos de IA.
- Auditoria administrativa completa.
- Configuracoes administrativas reais.
- Gestao completa de cargos/perfis.
- Historico avancado.
- Notificacoes reais.

## Depende do Back-end

- Cadastro real.
- Login real.
- Sessao.
- Identificacao de perfil.
- Autorizacao por perfil.
- Persistencia de perfil profissional.
- Persistencia de vagas.
- Registro de consentimento.
- Persistencia de entrevistas.
- Atribuicao real de avaliador.
- Salvamento de avaliacao.
- Liberacao real de relatorio.
- Auditoria real.
- Envio de e-mails.
- Upload real de video.
- Controle de acesso a videos.

## Nao mexer agora

- `apps/api`, salvo quando o time de Back-end definir a proxima fase.
- Armazenamento definitivo de videos.
- Politica de retencao.
- Estrategia final de autenticacao/sessao.
- Integracoes pagas.
- IA avaliadora.
- Redesign visual.
- Reorganizacao total do `apps/web`.
- Refatoracao massiva do `App.tsx`.
- Correcao ampla de lint/format/testes sem etapa propria.

## Criterios para considerar a entrega testavel

- O fluxo principal pode ser demonstrado de ponta a ponta no Front.
- O usuario entende quando esta em uma simulacao.
- Candidato, Avaliador e Administrador possuem jornadas minimas conectadas visualmente.
- Nao ha promessa de integracao real quando ela ainda nao existe.
- Build do Front continua funcionando.
- Identidade visual aprovada e preservada.
- Telas criticas funcionam em desktop e mobile representativo.
