import { useState } from "react";
import {
  User, Video, MessageSquare, TrendingUp, Target, Award,
  X, Menu, ArrowRight, CheckCircle, Zap, Lightbulb,
  AlertCircle, Check, GraduationCap,
} from "lucide-react";

type NavFn = (s: string) => void;

function Btn({
  variant = "primary", size = "md", children, onClick, disabled = false, className = "",
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer shrink-0";
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-4 py-2.5 text-sm", lg: "px-6 py-3.5 text-base" };
  const vars = {
    primary:   "bg-primary text-white hover:bg-blue-800 hover:shadow-md active:bg-blue-900 active:shadow-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-blue-100 hover:shadow-sm active:bg-blue-200",
    outline:   "border border-border bg-white text-foreground hover:bg-muted hover:shadow-sm active:bg-slate-100",
    ghost:     "text-foreground hover:bg-muted active:bg-slate-100",
    danger:    "bg-destructive text-white hover:bg-red-700 hover:shadow-md active:bg-red-800",
  };
  return (
    <button className={`${base} ${sizes[size]} ${vars[variant]} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function Badge({ variant = "default", children }: {
  variant?: "default" | "success" | "warning" | "error" | "info" | "purple";
  children: React.ReactNode;
}) {
  const vars = {
    default: "bg-slate-100 text-slate-600",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    error:   "bg-red-100 text-red-700",
    info:    "bg-blue-100 text-blue-700",
    purple:  "bg-purple-100 text-purple-700",
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${vars[variant]}`}>
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-2xl border border-border shadow-sm ${className}`}>
      {children}
    </div>
  );
}

const LOGO_LIGHT_PATHS = [
  { d: "M1.0034 1.3239C4.19431 1.26744 7.53747 1.31544 10.7388 1.3171L13.8914 1.31592C15.0575 1.3152 16.0381 1.29485 17.1979 1.46852C18.4141 1.65309 19.5909 2.03957 20.6795 2.61198C22.3936 3.51994 23.7867 5.08479 24.4693 6.88707C26.3808 11.9338 24.3617 17.5553 18.9677 19.175C19.1319 19.4606 19.3617 19.7205 19.5774 19.9692C18.8881 20.2148 18.0855 20.5988 17.3944 20.8665C16.373 21.2621 15.2788 21.6839 14.2793 22.1223C14.1998 21.98 14.0812 21.8379 13.9862 21.7017L13.2789 20.704C12.4177 19.5076 11.5368 18.3256 10.6363 17.1584C10.3775 16.8194 9.82044 16.1522 9.62468 15.8325C9.60416 15.536 9.62367 15.1421 9.64111 14.8468L13.0637 14.8484C13.6093 14.85 14.1573 14.8542 14.7028 14.8538C16.6991 14.8523 18.5663 13.9476 19.0304 11.8736C19.1035 11.5127 19.1394 11.1454 19.1377 10.7773C19.1334 9.65289 18.8533 8.72409 18.0428 7.91988C16.471 6.3604 14.2713 6.6455 12.2439 6.64022C10.4186 6.63171 8.5933 6.6333 6.76805 6.645L6.77191 22.7675C5.8437 23.2198 5.29824 23.9889 4.86325 24.9001C4.02954 26.6465 4.92463 29.1508 6.75606 29.93L6.74287 30.5193C4.83248 30.5654 2.82778 30.5185 0.905471 30.5299C0.886613 29.7373 0.900454 28.8871 0.899898 28.0911L0.900929 23.1983L0.901946 5.99575C0.902089 5.59104 0.871983 1.45066 0.920229 1.33522L1.0034 1.3239Z", fill: "#001640" },
  { d: "M50.6285 13.5512C50.6892 13.5585 50.8577 13.7627 50.9153 13.8205C51.848 14.7552 53.056 15.0623 54.3359 14.8798L54.3328 30.5336C53.6704 30.5255 53.0004 30.5308 52.3371 30.5308L48.5672 30.5285L48.5663 19.139L48.568 15.9289C48.5688 15.4009 48.5932 14.6078 48.5504 14.0965C49.0848 13.9134 50.0709 13.6519 50.6285 13.5512Z", fill: "#0075FE" },
  { d: "M30.4151 1.32058C32.3018 1.28932 34.2709 1.31786 36.1634 1.32312L36.1609 13.9794C35.6975 14.1455 35.1815 14.2957 34.7078 14.4516C33.5841 14.8691 32.4519 15.263 31.3118 15.6329C31.0093 15.7336 30.7212 15.8682 30.4193 15.9575C30.4338 15.4828 30.4168 14.906 30.4168 14.4224L30.4176 11.1625L30.4151 1.32058Z", fill: "#0075FE" },
  { d: "M36.0993 17.8545L36.1281 17.8577C36.193 17.9506 36.1672 19.9964 36.167 20.2632L36.1664 24.5015L36.1647 28.2418C36.1642 28.9951 36.1765 29.7872 36.1505 30.5371L30.4908 30.5318C30.4776 30.5284 30.4528 30.5086 30.4399 30.4997C30.3955 30.3014 30.4156 29.6383 30.417 29.3959L30.4175 27.6969L30.412 19.8174C30.8737 19.6743 31.2684 19.5036 31.7184 19.3454L34.3787 18.4325C34.9849 18.2254 35.4758 18.0381 36.0993 17.8545Z", fill: "#0075FE" },
  { d: "M10.8072 24.6718C11.53 24.387 12.2869 24.0327 13.0109 23.7348C15.0809 22.867 17.164 22.0307 19.2594 21.2262L23.4165 19.6475C24.1919 19.3525 25.0403 19.0024 25.8149 18.721L28.9872 17.5691C29.4554 17.404 29.9392 17.2693 30.4037 17.0953C30.4513 17.2569 30.4348 18.4825 30.4345 18.743C28.9003 19.3456 27.3123 19.8391 25.7829 20.4528C24.5529 20.9463 23.2984 21.3842 22.0658 21.8621C20.0068 22.6514 17.9547 23.4584 15.9097 24.2829C14.4274 24.8839 12.9404 25.5146 11.4514 26.0995C11.4358 26.8248 11.2554 27.5673 10.7601 28.1209C9.72883 29.2741 8.01062 29.3171 6.87421 28.2946C6.3777 27.8486 6.08134 27.2219 6.05171 26.5553C5.94771 24.4258 8.25483 22.9148 10.109 24.0925C10.3818 24.2657 10.5706 24.4545 10.8072 24.6718Z", fill: "#001640" },
  { d: "M21.7371 22.941C21.9043 23.0858 22.7947 24.3675 22.9641 24.6095L24.4678 26.7166C25.3639 27.973 26.3832 29.2422 27.2286 30.5261L21.7872 30.5278L20.1057 30.5306C19.8739 30.2731 19.7375 30.0167 19.5418 29.7404C18.5666 28.3641 17.6018 26.9809 16.6268 25.6046C16.4986 25.4237 16.374 25.2546 16.2742 25.0549C16.8003 24.8744 17.3137 24.6801 17.8284 24.4691C19.122 23.9389 20.4466 23.4784 21.7371 22.941Z", fill: "#001640" },
  { d: "M48.6542 1.32713C50.5303 1.29183 52.4535 1.32787 54.336 1.31976L54.3313 6.75147C52.9553 6.67053 52.5013 6.84509 51.3772 7.51585C50.4883 8.10961 50.0073 8.98816 49.7158 9.98612C49.3438 10.1079 48.9404 10.1887 48.5556 10.2583C48.6246 7.44075 48.5315 4.58479 48.5558 1.7646C48.557 1.64786 48.5461 1.45345 48.5838 1.34559L48.6542 1.32713Z", fill: "#0075FE" },
  { d: "M30.4035 17.0884C30.797 16.8805 31.5279 16.666 31.9774 16.5087L35.1059 15.4309L41.0946 13.4652C43.5224 12.6933 45.9384 11.9827 48.4075 11.3523C48.8371 11.2426 49.2983 11.1574 49.7195 11.034C49.8073 11.4521 50.0284 12.1341 50.1846 12.5495C48.8726 12.9316 47.5444 13.2742 46.2277 13.6409C45.977 13.7107 45.7198 13.7645 45.4683 13.8354C43.8516 14.3026 42.2436 14.7995 40.6454 15.3259C38.3571 16.0591 36.078 16.8025 33.8031 17.5791C32.6871 17.9601 31.5626 18.4023 30.4342 18.7361C30.4345 18.4756 30.451 17.2501 30.4035 17.0884Z", fill: "#0075FE" },
  { d: "M53.2854 7.48461C55.1541 7.22913 56.8761 8.53826 57.1282 10.4075C57.38 12.2771 56.065 13.9951 54.1946 14.2424C52.3304 14.4887 50.6175 13.1811 50.3664 11.3176C50.1153 9.45383 51.4222 7.73945 53.2854 7.48461Z", fill: "#0075FE", stroke: "white", strokeWidth: "1.51237" },
];

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 57.9158 31.8399" className={className} fill="none">
      {LOGO_LIGHT_PATHS.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill} stroke={p.stroke} strokeWidth={p.strokeWidth} />
      ))}
    </svg>
  );
}

export function LandingScreen({ onNavigate }: { onNavigate: NavFn }) {
  const HOW_CARDS = [
    { n: "01", icon: User,          title: "Configure seu objetivo",   desc: "Complete seu perfil e informe a vaga ou o cargo para o qual deseja se preparar." },
    { n: "02", icon: Video,         title: "Faça sua entrevista",      desc: "Responda perguntas relacionadas ao seu objetivo em uma simulação por vídeo." },
    { n: "03", icon: MessageSquare, title: "Receba seu feedback",      desc: "Veja uma avaliação estruturada sobre suas respostas e seu desempenho." },
    { n: "04", icon: TrendingUp,    title: "Evolua a cada tentativa",  desc: "Consulte seu relatório, identifique melhorias e pratique novamente." },
  ];

  const BENEFITS = [
    { icon: Target,        title: "Prática personalizada",          desc: "Treine com perguntas relacionadas ao cargo, à vaga e ao seu perfil profissional.",       color: "text-blue-600 bg-blue-50" },
    { icon: MessageSquare, title: "Feedback claro e estruturado",   desc: "Entenda seus pontos fortes e o que pode melhorar em cada resposta.",                    color: "text-green-600 bg-green-50" },
    { icon: Award,         title: "Mais confiança para entrevistas",desc: "Pratique em um ambiente seguro antes de participar de um processo seletivo real.",       color: "text-purple-600 bg-purple-50" },
    { icon: TrendingUp,    title: "Acompanhe sua evolução",         desc: "Compare suas tentativas e perceba seu desenvolvimento ao longo do tempo.",               color: "text-amber-600 bg-amber-50" },
  ];

  const FOR_WHO = [
    { label: "Primeiro emprego",               desc: "Prepare-se para sua primeira entrevista com segurança e clareza." },
    { label: "Jovem aprendiz",                 desc: "Desenvolva comunicação e confiança desde o início da carreira." },
    { label: "Estágio",                        desc: "Destaque-se em seleções com respostas mais estruturadas." },
    { label: "Recolocação profissional",       desc: "Volte ao mercado com mais preparo e segurança nas entrevistas." },
    { label: "Mudança de área",                desc: "Demonstre seu potencial e mostre por que você é o candidato certo para uma nova área." },
    { label: "Desenvolvimento de comunicação", desc: "Melhore sua expressão oral e objetividade em qualquer contexto profissional." },
  ];

  const REPORT_CRITERIA = [
    { name: "Clareza",      score: 9, color: "bg-green-500" },
    { name: "Coerência",    score: 9, color: "bg-green-500" },
    { name: "Objetividade", score: 8, color: "bg-green-500" },
    { name: "Comunicação",  score: 8, color: "bg-green-500" },
    { name: "Organização",  score: 7, color: "bg-blue-500"  },
    { name: "Segurança",    score: 6, color: "bg-amber-500" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full">

      {/* ── Header ── */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-border px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-[6px] shrink-0">
            <LogoMark className="h-7 sm:h-9 w-auto shrink-0" />
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#0075fe", fontWeight: 500, fontSize: "clamp(14px, 2.5vw, 20px)", letterSpacing: "-0.01em", lineHeight: 1 }}>Connect</span>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="#como-funciona" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Como funciona</a>
            <a href="#beneficios"    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Benefícios</a>
            <a href="#para-quem"     className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Para quem é</a>
            <a href="#sobre"         className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sobre o projeto</a>
          </nav>
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <Btn variant="outline" size="sm" onClick={() => onNavigate("auth")}>Entrar</Btn>
            <Btn variant="primary" size="sm" onClick={() => onNavigate("auth")}>Criar conta</Btn>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            {[
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Benefícios",    href: "#beneficios" },
              { label: "Para quem é",   href: "#para-quem" },
              { label: "Sobre o projeto", href: "#sobre" },
            ].map(link => (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Btn variant="outline" size="sm" className="flex-1" onClick={() => onNavigate("auth")}>Entrar</Btn>
              <Btn variant="primary" size="sm" className="flex-1" onClick={() => onNavigate("auth")}>Criar conta</Btn>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg, #0F2652 0%, #1D4ED8 100%)" }} className="px-4 sm:px-8 py-14 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Seu treinamento para conquistar a vaga dos seus sonhos
            </h1>
            <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Pratique entrevistas relacionadas ao seu objetivo profissional, desenvolva suas respostas e receba orientações para evoluir.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Btn size="lg" variant="primary" onClick={() => onNavigate("auth")} className="!bg-white !text-blue-700 hover:!bg-slate-100 hover:shadow-lg w-full sm:w-auto">
                Começar agora <ArrowRight className="w-5 h-5" />
              </Btn>
              <a href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 w-full sm:w-auto">
                Ver como funciona
              </a>
            </div>
          </div>
          {/* Dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center"><Zap className="w-3 h-3 text-white" /></div>
                    <span className="text-xs font-bold text-slate-700">RH Connect</span>
                  </div>
                  <Badge variant="success"><span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block mr-1" />Logado</Badge>
                </div>
                <div className="p-4 bg-slate-50">
                  <p className="text-xs font-bold text-slate-700 mb-3">Olá, Maria! 👋</p>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { label: "Entrevistas", v: "3", color: "bg-blue-500" },
                      { label: "Aguardando",  v: "1", color: "bg-amber-500" },
                      { label: "Concluídas",  v: "1", color: "bg-green-500" },
                    ].map(s => (
                      <div key={s.label} className="bg-white rounded-lg p-2 text-center border border-slate-100">
                        <div className={`w-5 h-5 ${s.color} rounded mx-auto mb-1`} />
                        <p className="text-sm font-bold text-slate-800">{s.v}</p>
                        <p className="text-[9px] text-slate-400">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-600 rounded-lg px-3 py-2 flex items-center justify-between">
                    <span className="text-white text-[11px] font-semibold">Iniciar nova entrevista</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <div>
                <p className="text-[10px] font-bold text-slate-700">Relatório disponível</p>
                <p className="text-[9px] text-slate-400">Nota: 7,8 · Classificação: Boa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section id="como-funciona" className="px-4 sm:px-8 py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">Como funciona</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">Prepare-se para entrevistas em 4 etapas</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Uma experiência simples para você praticar, receber orientação e evoluir a cada tentativa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_CARDS.map(step => (
              <Card key={step.n} className="p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-blue-100 leading-none">{step.n}</span>
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefícios ── */}
      <section id="beneficios" className="px-4 sm:px-8 py-14 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">Benefícios</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Por que usar o RH Connect?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map(b => (
              <Card key={b.title} className="p-5 sm:p-7 flex gap-4 sm:gap-5 hover:shadow-md transition-shadow duration-200">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${b.color}`}>
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1.5">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prévia do relatório ── */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">Relatório de desempenho</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
              Transforme cada entrevista em aprendizado
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Receba uma visão clara do seu desempenho, com destaques sobre comunicação, objetividade, segurança e organização das respostas.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Nota geral com classificação de desempenho",
                "Avaliação detalhada por critério",
                "Pontos fortes identificados na entrevista",
                "Oportunidades de melhoria com orientações claras",
                "Recomendação do avaliador para sua próxima tentativa",
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Btn variant="primary" size="lg" onClick={() => onNavigate("auth")}>
              Começar minha preparação <ArrowRight className="w-5 h-5" />
            </Btn>
          </div>
          <div>
            <Card className="overflow-hidden shadow-xl">
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Resultado da entrevista</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">Analista de Marketing Digital</p>
                </div>
                <Badge variant="info">Boa</Badge>
              </div>
              <div className="p-5 space-y-5">
                <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                  <div className="text-center shrink-0">
                    <p className="text-3xl sm:text-4xl font-extrabold text-foreground">7,8</p>
                    <p className="text-xs text-muted-foreground">de 10,0</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Critérios</p>
                    <div className="space-y-1.5">
                      {REPORT_CRITERIA.map(c => (
                        <div key={c.name} className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-16 sm:w-20 shrink-0 truncate">{c.name}</span>
                          <div className="flex-1 bg-muted rounded-full h-1.5 min-w-0">
                            <div className={`${c.color} h-1.5 rounded-full`} style={{ width: `${c.score * 10}%` }} />
                          </div>
                          <span className="text-xs font-bold text-foreground w-4 shrink-0">{c.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-green-500" /> Pontos fortes
                  </p>
                  <div className="space-y-1.5">
                    {["Clareza e objetividade nas respostas", "Boa estrutura lógica ao apresentar exemplos"].map(p => (
                      <div key={p} className="flex items-start gap-2 text-xs text-foreground bg-green-50 rounded-lg px-3 py-2">
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" /> {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-500" /> A desenvolver
                  </p>
                  <div className="flex items-start gap-2 text-xs text-foreground bg-amber-50 rounded-lg px-3 py-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" /> Aumente a segurança com exemplos mais concretos
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-1 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" /> Recomendação do avaliador
                  </p>
                  <p className="text-xs text-blue-700/80 leading-relaxed">
                    Pratique mais uma entrevista com foco em segurança e profundidade nas respostas.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Para quem é ── */}
      <section id="para-quem" className="px-4 sm:px-8 py-14 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-3">Para quem é</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">O RH Connect é para você</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm sm:text-base">
              Seja qual for o momento da sua carreira, a plataforma se adapta ao seu objetivo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FOR_WHO.map((item, i) => (
              <Card key={item.label} className="p-5 sm:p-6 flex gap-4 hover:shadow-md transition-shadow duration-200">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white text-sm font-extrabold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA central ── */}
      <section className="px-4 sm:px-8 py-12 sm:py-16" style={{ background: "linear-gradient(135deg, #0F2652 0%, #1D4ED8 100%)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Comece a se preparar agora</h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Crie sua conta em poucos minutos e faça sua primeira entrevista simulada ainda hoje.
          </p>
          <Btn size="lg" onClick={() => onNavigate("auth")} className="!bg-white !text-blue-700 hover:!bg-slate-100 hover:shadow-lg font-bold">
            Criar minha conta <ArrowRight className="w-5 h-5" />
          </Btn>
        </div>
      </section>

      {/* ── Sobre o projeto ── */}
      <section id="sobre" className="px-4 sm:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 sm:p-8 bg-slate-50 rounded-2xl border border-border">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Sobre o projeto</p>
              <p className="text-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                O RH Connect é uma iniciativa desenvolvida no <strong>SENAC-DF</strong> que une Recursos Humanos, tecnologia e educação para apoiar pessoas na preparação para entrevistas de emprego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-4 sm:px-8 py-10 sm:py-12 bg-[#021025]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-[6px] mb-2">
                <svg viewBox="0 0 57.9158 31.8399" className="h-7 w-auto shrink-0" fill="none">
                  <path d="M1.0034 1.3239C4.19431 1.26744 7.53747 1.31544 10.7388 1.3171L13.8914 1.31592C15.0575 1.3152 16.0381 1.29485 17.1979 1.46852C18.4141 1.65309 19.5909 2.03957 20.6795 2.61198C22.3936 3.51994 23.7867 5.08479 24.4693 6.88707C26.3808 11.9338 24.3617 17.5553 18.9677 19.175C19.1319 19.4606 19.3617 19.7205 19.5774 19.9692C18.8881 20.2148 18.0855 20.5988 17.3944 20.8665C16.373 21.2621 15.2788 21.6839 14.2793 22.1223C14.1998 21.98 14.0812 21.8379 13.9862 21.7017L13.2789 20.704C12.4177 19.5076 11.5368 18.3256 10.6363 17.1584C10.3775 16.8194 9.82044 16.1522 9.62468 15.8325C9.60416 15.536 9.62367 15.1421 9.64111 14.8468L13.0637 14.8484C13.6093 14.85 14.1573 14.8542 14.7028 14.8538C16.6991 14.8523 18.5663 13.9476 19.0304 11.8736C19.1035 11.5127 19.1394 11.1454 19.1377 10.7773C19.1334 9.65289 18.8533 8.72409 18.0428 7.91988C16.471 6.3604 14.2713 6.6455 12.2439 6.64022C10.4186 6.63171 8.5933 6.6333 6.76805 6.645L6.77191 22.7675C5.8437 23.2198 5.29824 23.9889 4.86325 24.9001C4.02954 26.6465 4.92463 29.1508 6.75606 29.93L6.74287 30.5193C4.83248 30.5654 2.82778 30.5185 0.905471 30.5299C0.886613 29.7373 0.900454 28.8871 0.899898 28.0911L0.900929 23.1983L0.901946 5.99575C0.902089 5.59104 0.871983 1.45066 0.920229 1.33522L1.0034 1.3239Z" fill="white" />
                  <path d="M50.6285 13.5512C50.6892 13.5585 50.8577 13.7627 50.9153 13.8205C51.848 14.7552 53.056 15.0623 54.3359 14.8798L54.3328 30.5336C53.6704 30.5255 53.0004 30.5308 52.3371 30.5308L48.5672 30.5285L48.5663 19.139L48.568 15.9289C48.5688 15.4009 48.5932 14.6078 48.5504 14.0965C49.0848 13.9134 50.0709 13.6519 50.6285 13.5512Z" fill="#0075FE" />
                  <path d="M30.4151 1.32058C32.3018 1.28932 34.2709 1.31786 36.1634 1.32312L36.1609 13.9794C35.6975 14.1455 35.1815 14.2957 34.7078 14.4516C33.5841 14.8691 32.4519 15.263 31.3118 15.6329C31.0093 15.7336 30.7212 15.8682 30.4193 15.9575C30.4338 15.4828 30.4168 14.906 30.4168 14.4224L30.4176 11.1625L30.4151 1.32058Z" fill="#0075FE" />
                  <path d="M36.0993 17.8545L36.1281 17.8577C36.193 17.9506 36.1672 19.9964 36.167 20.2632L36.1664 24.5015L36.1647 28.2418C36.1642 28.9951 36.1765 29.7872 36.1505 30.5371L30.4908 30.5318C30.4776 30.5284 30.4528 30.5086 30.4399 30.4997C30.3955 30.3014 30.4156 29.6383 30.417 29.3959L30.4175 27.6969L30.412 19.8174C30.8737 19.6743 31.2684 19.5036 31.7184 19.3454L34.3787 18.4325C34.9849 18.2254 35.4758 18.0381 36.0993 17.8545Z" fill="#0075FE" />
                  <path d="M10.8072 24.6718C11.53 24.387 12.2869 24.0327 13.0109 23.7348C15.0809 22.867 17.164 22.0307 19.2594 21.2262L23.4165 19.6475C24.1919 19.3525 25.0403 19.0024 25.8149 18.721L28.9872 17.5691C29.4554 17.404 29.9392 17.2693 30.4037 17.0953C30.4513 17.2569 30.4348 18.4825 30.4345 18.743C28.9003 19.3456 27.3123 19.8391 25.7829 20.4528C24.5529 20.9463 23.2984 21.3842 22.0658 21.8621C20.0068 22.6514 17.9547 23.4584 15.9097 24.2829C14.4274 24.8839 12.9404 25.5146 11.4514 26.0995C11.4358 26.8248 11.2554 27.5673 10.7601 28.1209C9.72883 29.2741 8.01062 29.3171 6.87421 28.2946C6.3777 27.8486 6.08134 27.2219 6.05171 26.5553C5.94771 24.4258 8.25483 22.9148 10.109 24.0925C10.3818 24.2657 10.5706 24.4545 10.8072 24.6718Z" fill="white" />
                  <path d="M21.7371 22.941C21.9043 23.0858 22.7947 24.3675 22.9641 24.6095L24.4678 26.7166C25.3639 27.973 26.3832 29.2422 27.2286 30.5261L21.7872 30.5278L20.1057 30.5306C19.8739 30.2731 19.7375 30.0167 19.5418 29.7404C18.5666 28.3641 17.6018 26.9809 16.6268 25.6046C16.4986 25.4237 16.374 25.2546 16.2742 25.0549C16.8003 24.8744 17.3137 24.6801 17.8284 24.4691C19.122 23.9389 20.4466 23.4784 21.7371 22.941Z" fill="white" />
                  <path d="M48.6542 1.32713C50.5303 1.29183 52.4535 1.32787 54.336 1.31976L54.3313 6.75147C52.9553 6.67053 52.5013 6.84509 51.3772 7.51585C50.4883 8.10961 50.0073 8.98816 49.7158 9.98612C49.3438 10.1079 48.9404 10.1887 48.5556 10.2583C48.6246 7.44075 48.5315 4.58479 48.5558 1.7646C48.557 1.64786 48.5461 1.45345 48.5838 1.34559L48.6542 1.32713Z" fill="#0075FE" />
                  <path d="M30.4035 17.0884C30.797 16.8805 31.5279 16.666 31.9774 16.5087L35.1059 15.4309L41.0946 13.4652C43.5224 12.6933 45.9384 11.9827 48.4075 11.3523C48.8371 11.2426 49.2983 11.1574 49.7195 11.034C49.8073 11.4521 50.0284 12.1341 50.1846 12.5495C48.8726 12.9316 47.5444 13.2742 46.2277 13.6409C45.977 13.7107 45.7198 13.7645 45.4683 13.8354C43.8516 14.3026 42.2436 14.7995 40.6454 15.3259C38.3571 16.0591 36.078 16.8025 33.8031 17.5791C32.6871 17.9601 31.5626 18.4023 30.4342 18.7361C30.4345 18.4756 30.451 17.2501 30.4035 17.0884Z" fill="#0075FE" />
                  <path d="M53.2854 7.48461C55.1541 7.22913 56.8761 8.53826 57.1282 10.4075C57.38 12.2771 56.065 13.9951 54.1946 14.2424C52.3304 14.4887 50.6175 13.1811 50.3664 11.3176C50.1153 9.45383 51.4222 7.73945 53.2854 7.48461Z" fill="#0075FE" stroke="white" strokeWidth="1.51237" />
                </svg>
                <span style={{ fontFamily: "'Poppins', sans-serif", color: "#0075fe", fontWeight: 500, fontSize: 15, letterSpacing: "-0.01em", lineHeight: 1 }}>Connect</span>
              </div>
              <p className="text-slate-500 text-xs max-w-xs leading-relaxed">
                Plataforma de preparação para entrevistas. Desenvolvida no SENAC-DF.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2 sm:gap-y-3">
              {[
                { label: "Como funciona",  href: "#como-funciona" },
                { label: "Benefícios",     href: "#beneficios" },
                { label: "Sobre o projeto",href: "#sobre" },
                { label: "Termos de uso",  href: "#" },
                { label: "Privacidade",    href: "#" },
                { label: "Contato",        href: "#" },
              ].map(link => (
                <a key={link.label} href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors duration-150">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-6">
            <p className="text-slate-600 text-xs text-center">
              © 2026 RH Connect · Iniciativa educacional SENAC-DF · Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
