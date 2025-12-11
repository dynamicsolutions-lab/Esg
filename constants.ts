import { Question } from './types';

export const EXAM_DURATION_MINUTES = 60;

export const QUESTIONS: Question[] = [
  // --- SIMULADO 1: FUNDAMENTOS ESG & FRAMEWORKS ---
  {
    id: 1,
    category: 'Fundamentals',
    text: "Qual framework é mais diretamente associado à materialidade financeira para investidores?",
    options: [
      { id: 'A', text: 'GRI (Global Reporting Initiative)' },
      { id: 'B', text: 'SASB (Sustainability Accounting Standards Board)' },
      { id: 'C', text: 'ISO 26000' },
      { id: 'D', text: 'SDGs (Objetivos de Desenvolvimento Sustentável)' },
    ],
    correctOptionId: 'B',
    explanation: "SASB foca especificamente em impactos ESG financeiramente materiais por setor, sendo o padrão preferido para análises de risco de investimento."
  },
  {
    id: 2,
    category: 'Fundamentals',
    text: "O GRI (Global Reporting Initiative) exige que a empresa reporte:",
    options: [
      { id: 'A', text: 'Todos os indicadores disponíveis no padrão.' },
      { id: 'B', text: 'Apenas indicadores climáticos.' },
      { id: 'C', text: 'Apenas temas materialmente relevantes (Materialidade de Impacto).' },
      { id: 'D', text: 'Apenas dados financeiros auditados.' },
    ],
    correctOptionId: 'C',
    explanation: "O GRI é baseado no princípio da materialidade de impacto: a empresa deve reportar onde ela gera impacto significativo na economia, meio ambiente e pessoas."
  },
  {
    id: 3,
    category: 'Fundamentals',
    text: "No contexto do ISSB (IFRS S1 e S2), o foco principal é:",
    options: [
      { id: 'A', text: 'Impacto social na comunidade local.' },
      { id: 'B', text: 'Estrutura de governança corporativa interna.' },
      { id: 'C', text: 'Riscos e oportunidades climáticas financeiramente materiais.' },
      { id: 'D', text: 'Diversidade e inclusão no local de trabalho.' },
    ],
    correctOptionId: 'C',
    explanation: "O ISSB foca na materialidade financeira, especificamente como questões de sustentabilidade (como o clima na IFRS S2) afetam o fluxo de caixa e valor da empresa."
  },
  {
    id: 4,
    category: 'Fundamentals',
    text: "Qual combinação de foco está correta?",
    options: [
      { id: 'A', text: 'TCFD → Impactos sociais' },
      { id: 'B', text: 'SASB → Compliance regulatório local' },
      { id: 'C', text: 'GRI → Impactos econômicos, ambientais e sociais' },
      { id: 'D', text: 'ISO 14001 → Governança financeira' },
    ],
    correctOptionId: 'C',
    explanation: "GRI é o padrão multi-stakeholder para reportar impactos amplos. TCFD foca em clima/finanças, SASB em materialidade financeira setorial."
  },
  {
    id: 5,
    category: 'Fundamentals',
    text: "O CDP (Carbon Disclosure Project) é mais corretamente descrito como:",
    options: [
      { id: 'A', text: 'Um padrão contábil obrigatório.' },
      { id: 'B', text: 'Uma agência reguladora governamental.' },
      { id: 'C', text: 'Uma plataforma global de disclosure voluntário.' },
      { id: 'D', text: 'Um índice de ações sustentáveis.' },
    ],
    correctOptionId: 'C',
    explanation: "O CDP é uma organização sem fins lucrativos que gerencia o sistema de divulgação global para investidores, empresas e cidades gerenciarem seus impactos ambientais."
  },
  {
    id: 6,
    category: 'Fundamentals',
    text: "A materialidade dupla (Double Materiality) considera:",
    options: [
      { id: 'A', text: 'Apenas riscos financeiros.' },
      { id: 'B', text: 'Impactos ambientais e sociais (Inside-Out) + riscos financeiros (Outside-In).' },
      { id: 'C', text: 'Apenas expectativas de investidores.' },
      { id: 'D', text: 'Apenas emissões de carbono.' },
    ],
    correctOptionId: 'B',
    explanation: "Conceito central na regulação europeia (CSRD), exige olhar o impacto da empresa no mundo E o impacto do mundo no valor da empresa."
  },
  {
    id: 7,
    category: 'Fundamentals',
    text: "Qual framework é mais usado para relato corporativo amplo de sustentabilidade visando múltiplos stakeholders?",
    options: [
      { id: 'A', text: 'SASB' },
      { id: 'B', text: 'GRI' },
      { id: 'C', text: 'TCFD' },
      { id: 'D', text: 'COSO' },
    ],
    correctOptionId: 'B',
    explanation: "Devido à sua abrangência de temas e foco em impacto, o GRI é o padrão dominante para relatórios de sustentabilidade gerais."
  },
  {
    id: 8,
    category: 'Fundamentals',
    text: "Qual instituição consolidou iniciativas como o VRF (SASB + IIRC) e CDSB sob um padrão global?",
    options: [
      { id: 'A', text: 'OECD' },
      { id: 'B', text: 'ONU' },
      { id: 'C', text: 'ISSB (International Sustainability Standards Board)' },
      { id: 'D', text: 'WEF' },
    ],
    correctOptionId: 'C',
    explanation: "O ISSB foi criado pela IFRS Foundation para harmonizar o 'alphabet soup' das siglas ESG focadas no mercado de capitais."
  },
  {
    id: 9,
    category: 'Fundamentals',
    text: "A norma ISO 26000 trata principalmente de:",
    options: [
      { id: 'A', text: 'Auditoria financeira.' },
      { id: 'B', text: 'Responsabilidade social.' },
      { id: 'C', text: 'Gestão ambiental certificável.' },
      { id: 'D', text: 'Governança de dados.' },
    ],
    correctOptionId: 'B',
    explanation: "A ISO 26000 fornece diretrizes sobre Responsabilidade Social, embora não seja uma norma para certificação (ao contrário da ISO 14001)."
  },
  {
    id: 10,
    category: 'Fundamentals',
    text: "Qual destas opções NÃO é um uso legítimo e estratégico de indicadores ESG?",
    options: [
      { id: 'A', text: 'Avaliação de risco.' },
      { id: 'B', text: 'Greenwashing (Marketing sem substância).' },
      { id: 'C', text: 'Monitoramento regulatório.' },
      { id: 'D', text: 'Estratégia corporativa de longo prazo.' },
    ],
    correctOptionId: 'B',
    explanation: "Greenwashing é a prática enganosa de usar indicadores para criar uma falsa impressão de sustentabilidade, o oposto de um uso legítimo."
  },
  {
    id: 11,
    category: 'Fundamentals',
    text: "Conceitualmente, ESG e Sustentabilidade diferem na prática de mercado porque:",
    options: [
      { id: 'A', text: 'ESG é apenas marketing.' },
      { id: 'B', text: 'Sustentabilidade é puramente qualitativa.' },
      { id: 'C', text: 'ESG foca em métricas ligadas a risco, retorno e valor para o investidor.' },
      { id: 'D', text: 'Sustentabilidade trata apenas de meio ambiente.' },
    ],
    correctOptionId: 'C',
    explanation: "Enquanto Sustentabilidade é o objetivo amplo, ESG é frequentemente a lente do mercado financeiro para mensurar a performance não-financeira."
  },
  {
    id: 12,
    category: 'Fundamentals',
    text: "A definição de Materialidade no contexto ESG busca identificar:",
    options: [
      { id: 'A', text: 'Tudo o que a empresa faz.' },
      { id: 'B', text: 'Apenas o que importa para investidores de curto prazo.' },
      { id: 'C', text: 'Temas que geram impacto relevante ou risco significativo.' },
      { id: 'D', text: 'Apenas compliance legal básico.' },
    ],
    correctOptionId: 'C',
    explanation: "Materialidade define o que é importante. Se não é material, não precisa ser priorizado na estratégia ou no relatório."
  },
  {
    id: 13,
    category: 'Fundamentals',
    text: "O que é mais comum ser exigido em entrevistas técnicas para Analista ESG?",
    options: [
      { id: 'A', text: 'Definição teórica pura de siglas.' },
      { id: 'B', text: 'Case aplicado com análise de métricas e resolução de problemas.' },
      { id: 'C', text: 'Cálculo contábil avançado de derivativos.' },
      { id: 'D', text: 'Psicologia organizacional teórica.' },
    ],
    correctOptionId: 'B',
    explanation: "Recrutadores buscam raciocínio crítico aplicado: como você usa os dados para tomar decisões ou identificar riscos."
  },
  {
    id: 14,
    category: 'Fundamentals',
    text: "Um erro crítico comum em relatórios ESG é:",
    options: [
      { id: 'A', text: 'Apresentar dados incompletos.' },
      { id: 'B', text: 'Falta de metas claras.' },
      { id: 'C', text: 'Falta de vínculo com a gestão de risco.' },
      { id: 'D', text: 'Todos os anteriores.' },
    ],
    correctOptionId: 'D',
    explanation: "Relatórios robustos precisam ser completos, ter metas (targets) e conectar a sustentabilidade à estratégia de risco do negócio."
  },
  {
    id: 15,
    category: 'Fundamentals',
    text: "Qual framework possui padrões específicos por setor (ex: Mineração, Óleo e Gás, Finanças)?",
    options: [
      { id: 'A', text: 'GRI' },
      { id: 'B', text: 'SASB' },
      { id: 'C', text: 'TCFD' },
      { id: 'D', text: 'SDGs' },
    ],
    correctOptionId: 'B',
    explanation: "SASB (agora sob o ISSB) é famoso por seus 'Industry Standards' que definem o que é material para cada uma das 77 indústrias mapeadas."
  },
  {
    id: 16,
    category: 'Fundamentals',
    text: "Qual framework é focado especificamente na governança de riscos corporativos (Enterprise Risk Management)?",
    options: [
      { id: 'A', text: 'COSO ERM' },
      { id: 'B', text: 'GRI 403' },
      { id: 'C', text: 'ISO 14064' },
      { id: 'D', text: 'SDG 13' },
    ],
    correctOptionId: 'A',
    explanation: "O COSO (Committee of Sponsoring Organizations) fornece a estrutura para integrar riscos ESG à gestão de riscos corporativos tradicional."
  },
  {
    id: 17,
    category: 'Fundamentals',
    text: "O termo ESG começou a ganhar tração 'mainstream' forte no mercado financeiro principalmente a partir de:",
    options: [
      { id: 'A', text: '1990 (Eco-92)' },
      { id: 'B', text: '2000 (Global Compact)' },
      { id: 'C', text: 'Pós-2015 (Acordo de Paris e Carta da BlackRock)' },
      { id: 'D', text: '2023' },
    ],
    correctOptionId: 'C',
    explanation: "Embora cunhado em 2004, a aceleração real ocorreu após o Acordo de Paris e o posicionamento de grandes Asset Managers como a BlackRock."
  },
  {
    id: 18,
    category: 'Fundamentals',
    text: "Qual destes frameworks é tecnicamente voluntário (embora o mercado possa exigir)?",
    options: [
      { id: 'A', text: 'GRI' },
      { id: 'B', text: 'SASB' },
      { id: 'C', text: 'TCFD' },
      { id: 'D', text: "Todos (em muitas jurisdições, ainda são voluntários ou 'comply or explain')" },
    ],
    correctOptionId: 'D',
    explanation: "A regulação está mudando (como CSRD na Europa ou CVM 59 no Brasil), mas historicamente esses frameworks nasceram como iniciativas voluntárias."
  },
  {
    id: 19,
    category: 'Fundamentals',
    text: "Qual associação conceitual está INCORRETA?",
    options: [
      { id: 'A', text: 'Clima → TCFD' },
      { id: 'B', text: 'Social → UNGP (Princípios Orientadores sobre Empresas e Direitos Humanos)' },
      { id: 'C', text: 'Governança → Diversidade do Conselho' },
      { id: 'D', text: 'ESG → Apenas meio ambiente' },
    ],
    correctOptionId: 'D',
    explanation: "Reduzir ESG apenas ao 'E' (Meio Ambiente) é um erro conceitual grave. Governança e Social são pilares igualmente estruturantes."
  },
  {
    id: 20,
    category: 'Fundamentals',
    text: "Qual habilidade é mais valorizada em um analista ESG sênior?",
    options: [
      { id: 'A', text: 'Opinião pessoal forte.' },
      { id: 'B', text: 'Análise crítica de dados e correlação com riscos.' },
      { id: 'C', text: 'Ativismo ideológico.' },
      { id: 'D', text: 'Retórica persuasiva sem dados.' },
    ],
    correctOptionId: 'B',
    explanation: "O papel é analítico: traduzir dados não-financeiros em insights de negócio."
  },

  // --- SIMULADO 2: CLIMA, IPCC, EMISSÕES ---
  {
    id: 21,
    category: 'Climate & Carbon',
    text: "No GHG Protocol, o Escopo 1 corresponde a:",
    options: [
      { id: 'A', text: 'Emissões indiretas da cadeia de valor.' },
      { id: 'B', text: 'Emissões diretas de fontes próprias ou controladas pela empresa.' },
      { id: 'C', text: 'Emissões dos fornecedores.' },
      { id: 'D', text: 'Emissões financiadas.' },
    ],
    correctOptionId: 'B',
    explanation: "Exemplos: Frota própria, caldeiras, reações químicas no processo industrial."
  },
  {
    id: 22,
    category: 'Climate & Carbon',
    text: "O Escopo 2 refere-se exclusivamente a:",
    options: [
      { id: 'A', text: 'Transporte terceirizado.' },
      { id: 'B', text: 'Emissões indiretas da aquisição de energia (eletricidade, calor, vapor).' },
      { id: 'C', text: 'Resíduos gerados.' },
      { id: 'D', text: 'Viagens de negócios.' },
    ],
    correctOptionId: 'B',
    explanation: "São emissões que ocorrem fisicamente na usina geradora, mas são contabilizadas pela empresa que comprou a energia."
  },
  {
    id: 23,
    category: 'Climate & Carbon',
    text: "O maior desafio técnico do Escopo 3 é:",
    options: [
      { id: 'A', text: 'O cálculo matemático é simples.' },
      { id: 'B', text: 'Falta de impacto real.' },
      { id: 'C', text: 'Dependência de dados de terceiros e complexidade da cadeia de valor.' },
      { id: 'D', text: 'Pouca relevância para a pegada total.' },
    ],
    correctOptionId: 'C',
    explanation: "Rastreabilidade e qualidade dos dados de fornecedores e uso de produtos são as maiores barreiras."
  },
  {
    id: 24,
    category: 'Climate & Carbon',
    text: "Qual setor tipicamente tem o Escopo 3 como a parte dominante de suas emissões (muitas vezes >90%)?",
    options: [
      { id: 'A', text: 'Geração de Energia (Termelétricas).' },
      { id: 'B', text: 'Instituições Financeiras (Bancos).' },
      { id: 'C', text: 'Mineração.' },
      { id: 'D', text: 'Saúde.' },
    ],
    correctOptionId: 'B',
    explanation: "Para bancos, as 'Emissões Financiadas' (carteira de crédito e investimento) são infinitamente maiores que suas emissões de escritório."
  },
  {
    id: 25,
    category: 'Climate & Carbon',
    text: "O IPCC (Painel Intergovernamental sobre Mudanças Climáticas) fornece:",
    options: [
      { id: 'A', text: 'Normas regulatórias obrigatórias para empresas.' },
      { id: 'B', text: 'A base científica sobre a mudança do clima para subsidiar políticas.' },
      { id: 'C', text: 'Ratings ESG corporativos.' },
      { id: 'D', text: 'Auditorias financeiras.' },
    ],
    correctOptionId: 'B',
    explanation: "O IPCC não regula; ele consolida a ciência que justifica a regulação e os acordos globais."
  },
  {
    id: 26,
    category: 'Climate & Carbon',
    text: "O framework TCFD (Task Force on Climate-related Financial Disclosures) exige reporte em 4 pilares. Qual NÃO é um deles?",
    options: [
      { id: 'A', text: 'Governança' },
      { id: 'B', text: 'Estratégia' },
      { id: 'C', text: 'Métricas e Metas' },
      { id: 'D', text: 'Metas Sociais e de Diversidade' },
    ],
    correctOptionId: 'D',
    explanation: "O TCFD é focado exclusivamente em CLIMA. Os pilares são: Governança, Estratégia, Gestão de Riscos e Métricas/Metas."
  },
  {
    id: 27,
    category: 'Climate & Carbon',
    text: "Na classificação de riscos climáticos, 'Risco Físico' refere-se a:",
    options: [
      { id: 'A', text: 'Novas regulações ambientais.' },
      { id: 'B', text: 'Taxação de carbono.' },
      { id: 'C', text: 'Eventos climáticos extremos (agudos) ou mudanças de longo prazo (crônicos).' },
      { id: 'D', text: 'Mudança tecnológica.' },
    ],
    correctOptionId: 'C',
    explanation: "Exemplos: Enchentes destruindo fábricas (agudo) ou aumento do nível do mar inviabilizando portos (crônico)."
  },
  {
    id: 28,
    category: 'Climate & Carbon',
    text: "Na classificação de riscos climáticos, 'Risco de Transição' inclui:",
    options: [
      { id: 'A', text: 'Secas prolongadas.' },
      { id: 'B', text: 'Enchentes.' },
      { id: 'C', text: 'Mudanças regulatórias, legais, tecnológicas e de mercado.' },
      { id: 'D', text: 'Terremotos.' },
    ],
    correctOptionId: 'C',
    explanation: "É o risco financeiro advindo do processo de descarbonização da economia."
  },
  {
    id: 29,
    category: 'Climate & Carbon',
    text: "O termo 'Carbon Neutrality' (Neutralidade de Carbono) geralmente permite:",
    options: [
      { id: 'A', text: 'Apenas emissões zero absolutas.' },
      { id: 'B', text: 'Compensação (offsets) das emissões que não foram reduzidas.' },
      { id: 'C', text: 'Apenas medição do Escopo 1.' },
      { id: 'D', text: 'Focar apenas no Escopo 2.' },
    ],
    correctOptionId: 'B',
    explanation: "Neutralidade pode ser atingida comprando créditos de carbono para compensar as emissões, sem necessariamente reduzir a zero a operação."
  },
  {
    id: 30,
    category: 'Climate & Carbon',
    text: "O padrão 'Net Zero' (pela norma do SBTi) é mais rigoroso que Carbon Neutrality pois exige:",
    options: [
      { id: 'A', text: 'Apenas compra de offsets.' },
      { id: 'B', text: 'Redução profunda das emissões (>90%) e neutralização apenas das emissões residuais.' },
      { id: 'C', text: 'Apenas campanhas de marketing.' },
      { id: 'D', text: 'Foco apenas no Scope 2.' },
    ],
    correctOptionId: 'B',
    explanation: "Net Zero prioriza a redução real (descarbonização) da cadeia de valor antes de pensar em compensação."
  },
  {
    id: 31,
    category: 'Climate & Carbon',
    text: "Qual a unidade de medida padrão para inventários de gases de efeito estufa?",
    options: [
      { id: 'A', text: 'Quilogramas (kg)' },
      { id: 'B', text: 'Toneladas de CO₂ equivalente (tCO₂e)' },
      { id: 'C', text: 'Joules' },
      { id: 'D', text: 'kWh' },
    ],
    correctOptionId: 'B',
    explanation: "O CO₂e permite equiparar o potencial de aquecimento global de diferentes gases (como Metano e Óxido Nitroso) numa única métrica."
  },
  {
    id: 32,
    category: 'Climate & Carbon',
    text: "Um erro comum (red flag) em estratégias climáticas corporativas é:",
    options: [
      { id: 'A', text: 'Reportar o Escopo 1 com precisão.' },
      { id: 'B', text: 'Ignorar o Escopo 3 quando ele é materialmente relevante.' },
      { id: 'C', text: 'Ter metas baseadas na ciência.' },
      { id: 'D', text: 'Usar a metodologia GHG Protocol.' },
    ],
    correctOptionId: 'B',
    explanation: "Ignorar o Escopo 3 muitas vezes esconde mais de 70-80% do impacto real da empresa."
  },
  {
    id: 33,
    category: 'Climate & Carbon',
    text: "O conceito de 'Emissões Financiadas' se aplica principalmente a:",
    options: [
      { id: 'A', text: 'Indústria pesada.' },
      { id: 'B', text: 'Bancos e Gestoras de Ativos.' },
      { id: 'C', text: 'Varejo.' },
      { id: 'D', text: 'Telecomunicações.' },
    ],
    correctOptionId: 'B',
    explanation: "Refere-se ao impacto carbono do dinheiro emprestado ou investido."
  },
  {
    id: 34,
    category: 'Climate & Carbon',
    text: "Qual é o padrão global mais utilizado para elaboração de inventários de emissões?",
    options: [
      { id: 'A', text: 'GRI' },
      { id: 'B', text: 'GHG Protocol' },
      { id: 'C', text: 'ISO 9001' },
      { id: 'D', text: 'SDGs' },
    ],
    correctOptionId: 'B',
    explanation: "O GHG Protocol Corporate Standard é a base metodológica para quase todos os inventários corporativos no mundo."
  },
  {
    id: 35,
    category: 'Climate & Carbon',
    text: "Para comparar a eficiência de carbono entre duas empresas de tamanhos diferentes, qual métrica é ideal?",
    options: [
      { id: 'A', text: 'Emissão absoluta total.' },
      { id: 'B', text: 'Intensidade de emissão (ex: tCO₂e por R$ Milhão de Receita ou por Tonelada de Produto).' },
      { id: 'C', text: 'A narrativa do relatório.' },
      { id: 'D', text: 'O número de compromissos assinados.' },
    ],
    correctOptionId: 'B',
    explanation: "Métricas de intensidade normalizam os dados, permitindo comparar a eficiência relativa independentemente do tamanho da operação."
  },

  // --- SIMULADO 3: SOCIAL, GOVERNANÇA E CASOS PRÁTICOS ---
  {
    id: 36,
    category: 'Social & Governance',
    text: "Os UNGP (Princípios Orientadores da ONU) são a referência global para:",
    options: [
      { id: 'A', text: 'Mudanças climáticas.' },
      { id: 'B', text: 'Empresas e Direitos Humanos.' },
      { id: 'C', text: 'Auditoria contábil.' },
      { id: 'D', text: 'Regulação do mercado financeiro.' },
    ],
    correctOptionId: 'B',
    explanation: "Estabelecem o framework 'Proteger, Respeitar e Remediar' para direitos humanos nos negócios."
  },
  {
    id: 37,
    category: 'Social & Governance',
    text: "Fazer 'Due Diligence' em Direitos Humanos significa:",
    options: [
      { id: 'A', text: 'Uma auditoria financeira simples.' },
      { id: 'B', text: 'Um processo contínuo de identificar, prevenir, mitigar e remediar impactos nos direitos humanos.' },
      { id: 'C', text: 'Apenas uma campanha de marketing social.' },
      { id: 'D', text: 'Assinar um termo de compliance formal sem verificação.' },
    ],
    correctOptionId: 'B',
    explanation: "Não é um ato único, é um sistema de gestão de risco social."
  },
  {
    id: 38,
    category: 'Social & Governance',
    text: "Na governança, a presença de um Conselho de Administração majoritariamente independente tende a:",
    options: [
      { id: 'A', text: 'Reduzir a receita.' },
      { id: 'B', text: 'Reduzir riscos de governança e conflitos de interesse.' },
      { id: 'C', text: 'Diminuir a transparência.' },
      { id: 'D', text: 'Reduzir a eficiência operacional.' },
    ],
    correctOptionId: 'B',
    explanation: "A independência garante que as decisões visem a perenidade da companhia e todos os acionistas, não apenas o controlador ou a diretoria executiva."
  },
  {
    id: 39,
    category: 'Social & Governance',
    text: "Qual destes é um KPI (Indicador Chave de Performance) social quantitativo relevante?",
    options: [
      { id: 'A', text: 'Número de likes no LinkedIn.' },
      { id: 'B', text: 'Taxa de Turnover (rotatividade) voluntário e Taxa de Frequência de Acidentes.' },
      { id: 'C', text: 'EBITDA.' },
      { id: 'D', text: 'Capex.' },
    ],
    correctOptionId: 'B',
    explanation: "Turnover alto ou acidentes frequentes indicam problemas sérios na gestão do capital humano."
  },
  {
    id: 40,
    category: 'Social & Governance',
    text: "O Greenwashing ocorre quando:",
    options: [
      { id: 'A', text: 'Há metas claras e validadas.' },
      { id: 'B', text: 'A comunicação e o marketing superam ou distorcem a ação real e os resultados.' },
      { id: 'C', text: 'Há auditoria de terceira parte.' },
      { id: 'D', text: 'Os dados são públicos e transparentes.' },
    ],
    correctOptionId: 'B',
    explanation: "É a desconexão entre o discurso (promessa) e a prática (realidade)."
  },
  {
    id: 41,
    category: 'Social & Governance',
    text: "Qual é um indicador clássico de boa estrutura de Governança?",
    options: [
      { id: 'A', text: 'Emissões de carbono baixas.' },
      { id: 'B', text: 'Diversidade e independência na composição do Conselho (Board).' },
      { id: 'C', text: 'Treinamento ambiental para operários.' },
      { id: 'D', text: 'Consumo de água.' },
    ],
    correctOptionId: 'B',
    explanation: "A composição do board reflete a qualidade da supervisão estratégica e a capacidade de desafiar o status quo."
  },
  {
    id: 42,
    category: 'Social & Governance',
    text: "Um bom analista ESG, ao receber um relatório de sustentabilidade, deve:",
    options: [
      { id: 'A', text: 'Aceitar todos os dados como verdade absoluta.' },
      { id: 'B', text: 'Questionar fontes, escopo, metodologia e buscar inconsistências (Ceticismo Profissional).' },
      { id: 'C', text: 'Ajustar os resultados para parecerem melhores.' },
      { id: 'D', text: 'Ignorar potenciais conflitos.' },
    ],
    correctOptionId: 'B',
    explanation: "A análise crítica é a competência central. Dados podem ser maquiados ou recortados para favorecer a empresa."
  },
  {
    id: 43,
    category: 'Social & Governance',
    text: "Uma política anticorrupção robusta e canal de denúncias anônimo são pilares do:",
    options: [
      { id: 'A', text: 'Pilar Social.' },
      { id: 'B', text: 'Pilar de Governança (G).' },
      { id: 'C', text: 'Pilar Ambiental.' },
      { id: 'D', text: 'Departamento de Marketing.' },
    ],
    correctOptionId: 'B',
    explanation: "Integridade e Ética são fundamentos da Governança Corporativa."
  },
  {
    id: 44,
    category: 'Social & Governance',
    text: "Um risco reputacional grave em ESG geralmente nasce de:",
    options: [
      { id: 'A', text: 'Alta conformidade.' },
      { id: 'B', text: 'Escândalos (vazamentos, trabalho escravo, corrupção) mal geridos.' },
      { id: 'C', text: 'Excesso de transparência.' },
      { id: 'D', text: 'Auditoria frequente.' },
    ],
    correctOptionId: 'B',
    explanation: "A perda de confiança pública impacta diretamente o valor da marca e a licença social para operar."
  },
  {
    id: 45,
    category: 'Social & Governance',
    text: "Qual característica é um sinal de alerta (red flag) na governança?",
    options: [
      { id: 'A', text: 'CEO sem supervisão ou com poder total concentrado (acumulando cargo de Chairman).' },
      { id: 'B', text: 'Comitê de auditoria independente.' },
      { id: 'C', text: 'Política de remuneração transparente.' },
      { id: 'D', text: 'Board com mandatos renováveis.' },
    ],
    correctOptionId: 'A',
    explanation: "A concentração de poder reduz o 'checks and balances' (freios e contrapesos), aumentando risco de decisões autocráticas ou antiéticas."
  },
  {
    id: 46,
    category: 'Social & Governance',
    text: "Sob a ótica de negócio, a diversidade (gênero, raça, background) importa porque:",
    options: [
      { id: 'A', text: 'É apenas uma tendência política.' },
      { id: 'B', text: 'Reduz o "pensamento de manada" (groupthink), melhora a inovação e a gestão de riscos.' },
      { id: 'C', text: 'É obrigatória por lei em todos os países.' },
      { id: 'D', text: 'Serve apenas para marketing.' },
    ],
    correctOptionId: 'B',
    explanation: "Times diversos trazem perspectivas diferentes, identificando riscos e oportunidades que um grupo homogêneo ignoraria."
  },
  {
    id: 47,
    category: 'Social & Governance',
    text: "Uma empresa com alto risco social (ex: más condições de trabalho na cadeia) tende a ter:",
    options: [
      { id: 'A', text: 'Maior previsibilidade operacional.' },
      { id: 'B', text: 'Maior risco financeiro e operacional (greves, processos, boicotes).' },
      { id: 'C', text: 'Maior valuation no longo prazo.' },
      { id: 'D', text: 'Menos regulação.' },
    ],
    correctOptionId: 'B',
    explanation: "Riscos sociais não geridos explodem em crises que paralisam operações e destroem valor."
  },
  {
    id: 48,
    category: 'Social & Governance',
    text: "A melhor forma de gerir conflitos de interesse na alta direção é:",
    options: [
      { id: 'A', text: 'Omissão.' },
      { id: 'B', text: 'Transparência total e abstenção do envolvido na votação/decisão.' },
      { id: 'C', text: 'Pressão interna.' },
      { id: 'D', text: 'Campanha de marketing.' },
    ],
    correctOptionId: 'B',
    explanation: "Conflitos existem; a governança existe para garantir que eles sejam declarados e neutralizados no processo decisório."
  },
  {
    id: 49,
    category: 'Social & Governance',
    text: "Qual atitude profissional se alinha melhor com uma cultura de Alta Performance e Integridade ESG?",
    options: [
      { id: 'A', text: 'Flexibilidade ética para atingir metas a qualquer custo.' },
      { id: 'B', text: 'Tomada de decisão baseada em dados, transparência e responsabilidade.' },
      { id: 'C', text: 'Pressa e improviso.' },
      { id: 'D', text: 'Individualismo extremo.' },
    ],
    correctOptionId: 'B',
    explanation: "Alta performance em ESG exige rigor analítico e ética inegociável. Atalhos éticos destroem valor no longo prazo."
  },
  {
    id: 50,
    category: 'Social & Governance',
    text: "Diante de um dilema onde o prazo é curto mas os dados de sustentabilidade estão incompletos, a melhor ação é:",
    options: [
      { id: 'A', text: 'Dizer "não é minha área".' },
      { id: 'B', text: 'Inventar dados baseados na média anterior ("sempre fiz assim").' },
      { id: 'C', text: 'Avaliar o risco, comunicar a limitação, reportar o que é sólido e buscar compliance, priorizando a integridade da informação.' },
      { id: 'D', text: 'Ignorar o prazo e entregar meses depois.' },
    ],
    correctOptionId: 'C',
    explanation: "A integridade do dado é o ativo mais valioso de um analista. Comunicar incertezas é melhor do que fabricar certezas."
  },
];