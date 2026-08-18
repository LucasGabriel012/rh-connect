# Mapa de Telas do Front-end

Status utilizados:

- **Visual**: tela representada visualmente, sem comportamento real completo.
- **Mockado**: usa dados ficticios/hardcoded.
- **Simulado**: fluxo ou acao representada por estado local, `setTimeout` ou navegacao fake.
- **Futuro**: nao deve entrar no caminho critico agora ou depende de decisao posterior.

## Publicas e autenticacao

| Tela | Arquivo/componente provavel | Perfil | Prioridade | 10/09 | Status atual | Dependencia com Back-end | Observacoes |
|---|---|---|---|---|---|---|---|
| Landing | `landing-screen.tsx` / `LandingScreen` | Publico | Alta | Sim | Visual | Nao imediata | Principal entrada do produto. |
| Login/Cadastro | `App.tsx` / `AuthScreen` | Publico | Alta | Sim | Simulado | Sim | Deve virar fluxo real de auth futuramente. |
| Verificacao de e-mail | `App.tsx` / `EmailVerifyScreen` | Publico | Media | Talvez | Simulado | Sim | Depende de decisao de ativacao e envio de e-mail. |
| Esqueci senha | `App.tsx` / `ForgotPasswordScreen` | Publico | Media | Talvez | Simulado | Sim | Depende de contrato de recuperacao. |
| Redefinir senha | `App.tsx` / `ResetPasswordScreen` | Publico | Media | Talvez | Simulado | Sim | Depende de token/fluxo real. |
| Termos de uso | `App.tsx` / `TermsScreen` | Publico | Media | Sim | Visual | Talvez | Texto deve ser validado pelo time. |
| Privacidade | `App.tsx` / `PrivacyScreen` | Publico | Media | Sim | Visual | Talvez | Deve alinhar com regras de dados, imagem e voz. |

## Candidato

| Tela | Arquivo/componente provavel | Perfil | Prioridade | 10/09 | Status atual | Dependencia com Back-end | Observacoes |
|---|---|---|---|---|---|---|---|
| Onboarding do candidato | `onboarding-screens.tsx` / `CandidateOnboardingScreen` | Candidato | Alta | Sim | Simulado | Sim | Entra no fluxo principal. |
| Dashboard | `App.tsx` / `DashboardScreen` | Candidato | Alta | Sim | Mockado | Sim | Deve refletir estado real do usuario futuramente. |
| Perfil | `App.tsx` / `ProfileScreen` | Candidato | Alta | Sim | Mockado | Sim | Dados pessoais e profissionais hardcoded. |
| Configuracoes | `App.tsx` / `SettingsScreen` | Candidato | Media | Talvez | Simulado | Sim | Contem preferencias e acoes sensiveis simuladas. |
| Materiais | `App.tsx` / `MaterialsScreen` | Candidato | Baixa | Nao | Mockado | Talvez | Pode ficar como evolucao futura. |
| Notificacoes | `App.tsx` / `NotificationsScreen` | Candidato | Media | Talvez | Mockado | Sim | Sem backend de notificacoes. |
| Minhas vagas | `App.tsx` / `JobListScreen` | Candidato | Alta | Sim | Mockado | Sim | Necessaria para selecionar vaga. |
| Nova vaga | `App.tsx` / `JobScreen` | Candidato | Alta | Sim | Simulado | Sim | Cadastro real depende de API. |
| Detalhe de vaga | `App.tsx` / `JobListScreen` reaproveitado | Candidato | Media | Talvez | Mockado | Sim | Mapeamento atual ainda nao e tela dedicada. |
| Historico de entrevistas | `App.tsx` / `InterviewHistoryScreen` | Candidato | Media | Talvez | Mockado | Sim | Pode apoiar demonstracao. |
| Desenvolvimento | `development-screen.tsx` / `DevelopmentContent` | Candidato | Baixa | Nao | Mockado | Talvez | Relacionado a recursos futuros/gamificacao. |
| Selecionar vaga | `App.tsx` / `InterviewSetupScreen` | Candidato | Alta | Sim | Simulado | Sim | Inicio do fluxo de entrevista. |
| Consentimento | `App.tsx` / `ConsentScreen` | Candidato | Alta | Sim | Simulado | Sim | Consentimento real deve ser registrado no Back-end. |
| Orientacoes | `App.tsx` / `PrepScreen` | Candidato | Alta | Sim | Visual | Nao imediata | Tela educacional do fluxo. |
| Teste tecnico | `App.tsx` / `DeviceScreen` | Candidato | Alta | Sim | Simulado | Talvez | Camera/microfone ainda nao reais. |
| Entrevista | `App.tsx` / `InterviewScreen` | Candidato | Alta | Sim | Simulado | Sim | Gravacao e perguntas mockadas. |
| Revisao | `App.tsx` / `ReviewScreen` | Candidato | Alta | Sim | Simulado | Sim | Envio usa temporizador local. |
| Confirmar envio | `App.tsx` / `InterviewConfirmScreen` | Candidato | Alta | Sim | Simulado | Sim | Upload real nao existe. |
| Entrevista concluida | `App.tsx` / `InterviewDoneScreen` | Candidato | Alta | Sim | Simulado | Sim | Estado final visual. |
| Aguardando avaliacao | `App.tsx` / `PendingScreen` | Candidato | Alta | Sim | Mockado | Sim | Depende do status real da avaliacao. |
| Relatorio | `App.tsx` / `ReportScreen` | Candidato | Alta | Sim | Mockado | Sim | Depende de avaliacao concluida/liberada. |

## Avaliador

| Tela | Arquivo/componente provavel | Perfil | Prioridade | 10/09 | Status atual | Dependencia com Back-end | Observacoes |
|---|---|---|---|---|---|---|---|
| Ativacao de conta | `eval-screens.tsx` / `EvalActivateScreen` | Avaliador | Media | Talvez | Simulado | Sim | Depende do fluxo oficial de convite/ativacao. |
| Onboarding avaliador | `eval-screens.tsx` / `EvalOnboardingScreen` | Avaliador | Media | Talvez | Simulado | Sim | Pode apoiar demo, mas nao deve virar cadastro publico. |
| Dashboard | `eval-screens.tsx` / `EvalDashboardScreen` | Avaliador | Alta | Sim | Mockado | Sim | Necessario para suporte minimo da entrega. |
| Fila de avaliacoes | `eval-screens.tsx` / `EvalQueueScreen` | Avaliador | Alta | Sim | Mockado | Sim | Depende de atribuicoes reais. |
| Em andamento | `eval-screens.tsx` / `EvalActiveScreen` | Avaliador | Media | Talvez | Mockado | Sim | Pode ficar simplificado. |
| Tela de avaliacao | `eval-screens.tsx` / `EvalScreenView` | Avaliador | Alta | Sim | Simulado | Sim | Video e criterios ainda mockados. |
| Revisao de avaliacao | `eval-screens.tsx` / `EvalReviewScreen` | Avaliador | Alta | Sim | Simulado | Sim | Deve virar salvamento/conclusao real futuramente. |
| Avaliacao enviada | `eval-screens.tsx` / `EvalDoneScreen` | Avaliador | Alta | Sim | Simulado | Sim | Estado visual de conclusao. |
| Historico | `eval-screens.tsx` / `EvalHistoryScreen` | Avaliador | Media | Talvez | Mockado | Sim | Pode ser posterior ao fluxo minimo. |
| Criterios | `eval-screens.tsx` / `EvalCriteriaScreen` | Avaliador | Media | Talvez | Mockado | Sim | Leitura de criterios definidos pelo admin. |
| Configuracoes | `eval-screens.tsx` / `EvalSettingsScreen` | Avaliador | Baixa | Nao | Simulado | Sim | Fora do caminho critico. |

## Administrador

| Tela | Arquivo/componente provavel | Perfil | Prioridade | 10/09 | Status atual | Dependencia com Back-end | Observacoes |
|---|---|---|---|---|---|---|---|
| Onboarding admin | `admin-screens.tsx` / `AdminOnboardingScreen` | Admin | Baixa | Nao | Simulado | Sim | Pode ficar fora da entrega testavel. |
| Dashboard | `admin-screens.tsx` / `AdminDashboardScreen` | Admin | Alta | Sim | Mockado | Sim | Suporte operacional minimo. |
| Candidatos | `admin-screens.tsx` / `AdminCandidatesScreen` | Admin | Media | Talvez | Mockado | Sim | Util para demonstracao. |
| Detalhe do candidato | `admin-screens.tsx` / `AdminCandidateDetailScreen` | Admin | Media | Talvez | Mockado | Sim | Depende de dados reais e autorizacao. |
| Avaliadores | `admin-screens.tsx` / `AdminEvaluatorsScreen` | Admin | Alta | Sim | Mockado | Sim | Necessario para operacao de atribuicao. |
| Formulario de avaliador | `admin-screens.tsx` / `AdminEvaluatorFormScreen` | Admin | Media | Talvez | Simulado | Sim | Convite/ativacao dependem de decisao. |
| Entrevistas | `admin-screens.tsx` / `AdminInterviewsScreen` | Admin | Alta | Sim | Mockado | Sim | Necessario para acompanhar fluxo. |
| Atribuicoes | `admin-screens.tsx` / `AdminAssignScreen` | Admin | Alta | Sim | Simulado | Sim | Suporte minimo para avaliacao humana. |
| Perguntas | `admin-screens.tsx` / `AdminQuestionsScreen` | Admin | Media | Talvez | Mockado | Sim | Pode entrar como gestao basica se houver tempo. |
| Formulario de pergunta | `admin-screens.tsx` / `AdminQuestionFormScreen` | Admin | Baixa | Nao | Simulado | Sim | Pode ficar futuro. |
| Cargos/perfis | `admin-screens.tsx` / `AdminRolesScreen` | Admin | Baixa | Nao | Mockado | Sim | Fora do fluxo minimo. |
| Criterios | `admin-screens.tsx` / `AdminCriteriaScreen` | Admin | Media | Talvez | Mockado | Sim | Importante para avaliacao, mas pode iniciar estatico. |
| Consentimentos | `admin-screens.tsx` / `AdminConsentScreen` | Admin | Media | Talvez | Mockado | Sim | Relevante para seguranca e privacidade. |
| Auditoria | `admin-screens.tsx` / `AdminAuditScreen` | Admin | Baixa | Nao | Mockado | Sim | Deve ser preservada como futura. |
| Configuracoes | `admin-screens.tsx` / `AdminSettingsScreen` | Admin | Baixa | Nao | Simulado | Sim | Fora do caminho critico. |

## Futuras ou "em breve"

| Tela/area | Arquivo/componente provavel | Perfil | Prioridade | 10/09 | Status atual | Dependencia com Back-end | Observacoes |
|---|---|---|---|---|---|---|---|
| Centro de Desenvolvimento completo | `development-screen.tsx` | Candidato | Baixa | Nao | Mockado | Talvez | Relacionado a evolucao posterior. |
| Materiais ricos | `App.tsx` / `MaterialsScreen` | Candidato | Baixa | Nao | Mockado | Talvez | Pode ser exibido como em breve. |
| Gamificacao avancada | `development-screen.tsx` | Candidato | Baixa | Nao | Futuro | Talvez | Depende de decisao de escopo. |
| Nilo | Documentacao/prototipo | Candidato | Baixa | Nao | Futuro | Talvez | Nao deve ser implementado automaticamente. |
| IA supervisionada | Nao aplicavel | Todos | Baixa | Nao | Futuro | Sim | Fora do MVP sem decisao posterior. |
| Upload real de video | Fluxo de entrevista | Candidato | Alta tecnica | Nao agora | Futuro | Sim | Depende de armazenamento, API e politica de retencao. |
| Auditoria operacional completa | `AdminAuditScreen` | Admin | Media futura | Nao | Mockado | Sim | Exige Back-end e logs reais. |
