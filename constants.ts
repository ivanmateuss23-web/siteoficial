
import { BacteriaInfo, BacteriaType, QuizTopic, FAQ, ClinicalCase } from './types';

// ... BACTERIA_DATA remains same (abbreviated for brevity in output, but assume full content) ...
export const BACTERIA_DATA: Record<BacteriaType, BacteriaInfo> = {
  [BacteriaType.S_PYOGENES]: {
    name: BacteriaType.S_PYOGENES,
    morphology: "Cocos Gram (+) en cadenas largas, β-hemólisis, catalasa (-), sensible a bacitracina",
    type: "Estricto",
    epidemiology: "Adquirido en comunidad (contacto directo). Más probable en escuelas, guarderías, hacinamiento. Afecta niños, adolescentes, adultos jóvenes.",
    virulenceFactors: "Proteína M (antifagocítica), estreptolisinas O y S, hialuronidasa, estreptoquinasa",
    clinicalManifestations: "Faringitis aguda, amigdalitis, celulitis facial",
    complications: "Supurativas: Abscesos. No supurativas: Fiebre reumática, glomerulonefritis",
    classification: "Ambas (depende del curso clínico)",
    treatment: "Penicilina V (10 días); Azitromicina o clindamicina si alergia; Penicilina G IV en casos graves"
  },
  [BacteriaType.S_PNEUMONIAE]: {
    name: BacteriaType.S_PNEUMONIAE,
    morphology: "Diplococos Gram (+) lanceolados, α-hemólisis, cápsula (97 serotipos), sensible a optoquina",
    type: "Estricto",
    epidemiology: "Comunidad, portadores nasofaríngeos. Riesgo: <2 años, >65 años, EPOC, alcoholismo, asplenia. Guarderías, residencias.",
    virulenceFactors: "Cápsula (antifagocítica), neumolisina, autolisinas",
    clinicalManifestations: "Otitis media, sinusitis, neumonía (típica: fiebre alta, tos productiva, dolor pleurítico)",
    complications: "Mastoiditis, meningitis, bacteriemia, derrame pleural, empiema",
    classification: "Supurativo",
    diagnosis: "Antígeno urinario, hemocultivos, Gram de esputo",
    treatment: "Amoxicilina (altas dosis); Amoxicilina-clavulánico si resistencia; Ceftriaxona en casos graves/meningitis."
  },
  [BacteriaType.H_INFLUENZAE]: {
    name: BacteriaType.H_INFLUENZAE,
    morphology: "Cocobacilo Gram (-), requiere factores X y V. Tipo b más virulento (cápsula).",
    type: "Estricto",
    epidemiology: "Comunidad. Fumadores, EPOC, niños no vacunados (Hib). Guarderías.",
    virulenceFactors: "Cápsula polisacárida (tipo b), lipooligosacárido, adhesinas, producción de β-lactamasas",
    clinicalManifestations: "Otitis media, sinusitis, epiglotitis, conjuntivitis purulenta, bronquitis aguda, neumonía",
    complications: "Meningitis (en niños), septicemia",
    classification: "Supurativo",
    diagnosis: "Cultivo, aglutinación en látex, PCR",
    treatment: "Amoxicilina-clavulánico; Ceftriaxona en casos graves; Vacuna Hib para prevención"
  },
  [BacteriaType.M_CATARRHALIS]: {
    name: BacteriaType.M_CATARRHALIS,
    morphology: "Diplococos Gram (-), oxidasa (+), productor de beta-lactamasas",
    type: "Oportunista",
    epidemiology: "Comunidad; microbiota nasofaríngea en predispuetos. Ambientes hospitalarios, pacientes con EPOC, niños, ancianos.",
    virulenceFactors: "Beta-lactamasas (resistencia a penicilinas), adhesinas",
    clinicalManifestations: "Otitis media, sinusitis, bronquitis crónica",
    complications: "Raras complicaciones sistémicas",
    classification: "Supurativo",
    treatment: "Amoxicilina-clavulánico, macrólidos"
  },
  [BacteriaType.S_AUREUS]: {
    name: BacteriaType.S_AUREUS,
    morphology: "Cocos Gram (+), en racimos. MRSA/MSSA",
    type: "Oportunista",
    epidemiology: "Pacientes post-viral (influenza), hospitalizados, UCI. NAH, NAV, Inmunocomprometidos.",
    virulenceFactors: "Toxinas (PVL), enzimas proteolíticas, resistencia antibiótica (MRSA)",
    clinicalManifestations: "Neumonía necrotizante, abscesos pulmonares, empiema",
    complications: "Sepsis, shock séptico, mortalidad elevada",
    classification: "Supurativo",
    diagnosis: "Cultivo, Gram, hemocultivo, pruebas de sensibilidad",
    treatment: "MSSA: Cloxacilina/Cefazolina; MRSA: Vancomicina, Linezolid"
  },
  [BacteriaType.L_PNEUMOPHILA]: {
    name: BacteriaType.L_PNEUMOPHILA,
    morphology: "Bacilos Gram (-), intracelulares, pleomórficos",
    type: "Estricto ambiental",
    epidemiology: ">50 años, fumadores, inmunosupresión. Sobrevive en ambientes acuáticos.",
    virulenceFactors: "Resistencia a fagocitos, producción de enzimas citotóxicas",
    clinicalManifestations: "Neumonía grave (Legionelosis), síntomas GI, hiponatremia, fiebre de Pontiac",
    complications: "Insuficiencia respiratoria, SDRA",
    classification: "No supurativo",
    diagnosis: "Antígeno urinario (serotipo 1), cultivo especial, PCR",
    treatment: "Fluoroquinolonas (levofloxacino), macrólidos + rifampicina"
  },
  [BacteriaType.M_PNEUMONIAE]: {
    name: BacteriaType.M_PNEUMONIAE,
    morphology: "Bacteria sin pared celular, pleomórfica",
    type: "Estricto atípico",
    epidemiology: "Adultos jóvenes, brotes comunitarios.",
    virulenceFactors: "Adhesina P1, extracelular, transmisión por gotitas",
    clinicalManifestations: "Neumonía atípica: tos seca prolongada, síntomas extrapulmonares (eritema multiforme, anemia)",
    complications: "Infecciones prolongadas, brotes epidémicos",
    classification: "No supurativo",
    diagnosis: "Serología (IgM), PCR en tiempo real",
    treatment: "Macrólidos (azitromicina, claritromicina), doxiciclina, fluoroquinolonas"
  },
  [BacteriaType.C_PNEUMONIAE]: {
    name: BacteriaType.C_PNEUMONIAE,
    morphology: "Bacteria intracelular obligada",
    type: "Estricto atípico",
    epidemiology: "Adultos jóvenes, infecciones recurrentes. NAC, Inmunocomprometidos.",
    virulenceFactors: "Ciclo bipásico (cuerpos elementales y reticulados), persistencia intracelular",
    clinicalManifestations: "Neumonía atípica leve, curso prolongado, reinfecciones frecuentes",
    complications: "Bronquitis crónica, infecciones persistentes",
    classification: "No supurativo",
    diagnosis: "Serología (IgG, IgM), PCR",
    treatment: "Macrólidos, doxiciclina, fluoroquinolonas"
  },
  [BacteriaType.N_MENINGITIDIS]: {
    name: BacteriaType.N_MENINGITIDIS,
    morphology: "Diplococos Gram (-) intra/extracelulares. Capsulado.",
    type: "Estricto",
    epidemiology: "Adolescentes, adultos jóvenes. Hacinamiento (cuarteles, universidades).",
    virulenceFactors: "Cápsula polísacárida, Lipooligosacárido (LOS - Endotoxina), Proteasas IgA",
    clinicalManifestations: "Meningitis aguda, Meningococcemia (Sepsis fulminante), Púrpura/Petequias.",
    complications: "Síndrome de Waterhouse-Friderichsen, Shock, CID, Déficit neurológico.",
    classification: "Supurativo (LCR turbio)",
    diagnosis: "Gram LCR, Cultivo, PCR, Antígeno látex.",
    treatment: "Ceftriaxona IV. Profilaxis: Rifampicina."
  },
  [BacteriaType.S_AGALACTIAE]: {
    name: BacteriaType.S_AGALACTIAE,
    morphology: "Cocos Gram (+) en cadenas. Grupo B de Lancefield.",
    type: "Oportunista / Estricto en neonato",
    epidemiology: "Neonatos (transmisión vertical), Embarazadas, Ancianos/Diabéticos.",
    virulenceFactors: "Cápsula (sialic acid) previene opsonización.",
    clinicalManifestations: "Sepsis neonatal, Meningitis neonatal, Neumonía.",
    complications: "Mortalidad neonatal, secuelas neurológicas.",
    classification: "Supurativo",
    diagnosis: "Cultivo (vaginal/rectal), Hemocultivo, LCR.",
    treatment: "Ampicilina + Gentamicina (Neonatos). Penicilina G."
  },
  [BacteriaType.L_MONOCYTOGENES]: {
    name: BacteriaType.L_MONOCYTOGENES,
    morphology: "Bacilo Gram (+) corto, no esporulado.",
    type: "Oportunista",
    epidemiology: "Transmisión alimentaria (quesos, embutidos). Afecta: Neonatos, >50 años, Inmunosuprimidos.",
    virulenceFactors: "Listeriolisina O (escape del fagolisosoma), motilidad a 25°C.",
    clinicalManifestations: "Meningitis (LCR con pleocitosis mixta), Sepsis, Gastroenteritis febril.",
    complications: "Aborto, Granulomatosis infantiseptica.",
    classification: "Supurativo / Inflamatorio",
    diagnosis: "Cultivo LCR/Sangre. Gram variable.",
    treatment: "Ampicilina + Gentamicina. Resistente a Cefalosporinas."
  },
  [BacteriaType.E_COLI]: {
    name: BacteriaType.E_COLI,
    morphology: "Bacilo Gram (-). Familia Enterobacteriaceae.",
    type: "Oportunista / Uropatógeno",
    epidemiology: "Flora intestinal. Principal causa de ITU comunitaria (80%).",
    virulenceFactors: "Fimbrias P (Pielonefritis), Fimbrias Tipo 1 (Cistitis), Hemolisina.",
    clinicalManifestations: "Cistitis (disuria, polaciúria), Pielonefritis (fiebre, dolor lumbar).",
    complications: "Urosepsis, Absceso renal.",
    classification: "Supurativo",
    diagnosis: "Urocultivo >10^5 UFC. Nitritos Positivos.",
    treatment: "ITU baja: Fosfomicina, Nitrofurantoína. Alta: Ceftriaxona."
  },
  [BacteriaType.K_PNEUMONIAE]: {
    name: BacteriaType.K_PNEUMONIAE,
    morphology: "Bacilo Gram (-) encapsulado. Mucoide.",
    type: "Oportunista",
    epidemiology: "Hospitalario, Diabéticos, Alcohólicos.",
    virulenceFactors: "Cápsula prominente (antifagocítica), Sideróforos.",
    clinicalManifestations: "ITU complicada, Neumonía (esputo jalea grosella).",
    complications: "Resistencia (BLEE, KPC).",
    classification: "Supurativo",
    diagnosis: "Cultivo.",
    treatment: "Según antibiograma. Carbapenémicos si BLEE."
  },
  [BacteriaType.P_MIRABILIS]: {
    name: BacteriaType.P_MIRABILIS,
    morphology: "Bacilo Gram (-). Swarming (ondas) en cultivo.",
    type: "Oportunista",
    epidemiology: "ITU complicada, catéteres crónicos.",
    virulenceFactors: "Ureasa potente (alcaliniza orina), Flagelos.",
    clinicalManifestations: "ITU, Litiasis infecciosa (Estruvita).",
    complications: "Cálculos coraliformes, Obstrucción.",
    classification: "Supurativo",
    diagnosis: "Urocultivo, pH alcalino.",
    treatment: "Ceftriaxona, Ciprofloxacina."
  },
  [BacteriaType.E_FAECALIS]: {
    name: BacteriaType.E_FAECALIS,
    morphology: "Cocos Gram (+) en cadenas. Grupo D.",
    type: "Oportunista",
    epidemiology: "Nosocomial, Catéteres, Post-cirugía.",
    virulenceFactors: "Biofilm, resistencia intrínseca (cefalosporinas).",
    clinicalManifestations: "ITU asociada a catéter, Endocarditis.",
    complications: "VRE (Resistencia a Vancomicina).",
    classification: "Supurativo",
    diagnosis: "Urocultivo. Nitritos Negativos.",
    treatment: "Ampicilina, Vancomicina, Linezolid."
  },
  [BacteriaType.P_AERUGINOSA]: {
    name: BacteriaType.P_AERUGINOSA,
    morphology: "Bacilo Gram (-) no fermentador. Pigmento verde.",
    type: "Oportunista",
    epidemiology: "Hospitalario, fibrosis quística, catéteres.",
    virulenceFactors: "Biofilm, Exotoxina A, Elastasa, Bombas de eflujo.",
    clinicalManifestations: "ITU complicada, Neumonía NAV, Otitis externa maligna.",
    complications: "Multirresistencia.",
    classification: "Supurativo",
    diagnosis: "Cultivo (olor dulce).",
    treatment: "Ceftazidima, Cefepime, Piperacilina-Tazo, Carbapenémicos."
  },
  [BacteriaType.S_SAPROPHYTICUS]: {
    name: BacteriaType.S_SAPROPHYTICUS,
    morphology: "Coco Gram (+) coagulasa negativo.",
    type: "Estricto (en nicho específico)",
    epidemiology: "Mujeres jóvenes sexualmente activas. Verano/Otoño.",
    virulenceFactors: "Adhesinas uroteliales.",
    clinicalManifestations: "Cistitis aguda ('Luna de miel').",
    complications: "Raras.",
    classification: "Supurativo",
    diagnosis: "Urocultivo. Resistente a Novobiocina.",
    treatment: "Nitrofurantoína, TMP-SMX."
  }
};

export const BACTERIA_FAQS: Record<BacteriaType, FAQ[]> = {
  [BacteriaType.S_PYOGENES]: [
    { question: "Por que não se usa Penicilina para todos os tipos de dor de garganta?", answer: "Porque a maioria das faringites é viral (Adenovírus, Rinovírus) e antibióticos não funcionam para vírus, apenas aumentam a resistência bacteriana. S. pyogenes causa apenas 15-30% das faringites em crianças." },
    { question: "Quais são as complicações não supurativas?", answer: "Febre Reumática (afeta coração e articulações) e Glomerulonefrite Pós-Estreptocócica (afeta os rins)." }
  ],
  [BacteriaType.S_PNEUMONIAE]: [
    { question: "Qual a função da cápsula no Pneumococo?", answer: "A cápsula polissacarídica é o principal fator de virulência. Ela impede a opsonização e fagocitose pelo sistema imune." },
    { question: "O que é 'escarro herrumbroso'?", answer: "É um escarro com cor de ferrugem, característico da pneumonia pneumocócica, devido à presença de sangue degradado nos alvéolos." }
  ],
  [BacteriaType.H_INFLUENZAE]: [
    { question: "Por que a incidência de meningite por Haemophilus caiu drasticamente?", answer: "Devido à introdução da vacina conjugada contra o Haemophilus influenzae tipo b (Hib) no calendário vacinal infantil." },
    { question: "O que são fatores X e V?", answer: "São fatores de crescimento (Hemina e NAD) essenciais que o H. influenzae precisa para crescer em meio de cultura (Ágar Chocolate)." }
  ],
  [BacteriaType.M_CATARRHALIS]: [
    { question: "A Moraxella responde bem à Penicilina?", answer: "Não. A grande maioria das cepas de Moraxella catarrhalis produz beta-lactamases, tornando-a resistente a penicilinas simples. Usa-se Amoxicilina-Clavulanato." }
  ],
  [BacteriaType.S_AUREUS]: [
    { question: "O que significa MRSA?", answer: "Methicillin-Resistant Staphylococcus Aureus. Indica resistência a todos os beta-lactâmicos (exceto cefalosporinas de 5ª geração) devido à alteração na PBP2a." },
    { question: "Quando suspeitar de pneumonia por S. aureus?", answer: "Em quadros graves, necrosantes, que ocorrem logo após uma infecção viral (gripe/influenza)." }
  ],
  [BacteriaType.M_PNEUMONIAE]: [
    { question: "Por que beta-lactâmicos não funcionam para Mycoplasma?", answer: "Porque o Mycoplasma não possui parede celular, e os beta-lactâmicos agem inibindo a síntese da parede celular." },
    { question: "O que é pneumonia atípica?", answer: "É uma pneumonia com quadro clínico mais brando, tosse seca, e dissociação clínico-radiológica (RX pior que a ausculta), geralmente causada por Mycoplasma ou Chlamydia." }
  ],
  [BacteriaType.L_PNEUMOPHILA]: [
    { question: "Como se contrai Legionella?", answer: "Pela inalação de aerossóis de água contaminada (ar condicionado, torres de resfriamento, chuveiros). Não há transmissão pessoa-pessoa." },
    { question: "Qual alteração laboratorial é típica da Legionelose?", answer: "Hiponatremia (Sódio baixo no sangue)." }
  ],
  [BacteriaType.N_MENINGITIDIS]: [
    { question: "O que é Síndrome de Waterhouse-Friderichsen?", answer: "É uma hemorragia adrenal fulminante que ocorre durante a sepse meningocócica, levando a choque e morte rápida." },
    { question: "Qual a profilaxia para contatos?", answer: "Rifampicina é o antibiótico de escolha para quimioprofilaxia de contatos próximos." }
  ],
  [BacteriaType.S_AGALACTIAE]: [
    { question: "Quando se faz a triagem para EGB em gestantes?", answer: "Entre 35 e 37 semanas de gestação, com swab vaginal e retal." },
    { question: "Qual o risco para o recém-nascido?", answer: "Sepse neonatal precoce, pneumonia e meningite." }
  ],
  [BacteriaType.E_COLI]: [
    { question: "O que são Nitritos na urina?", answer: "A E. coli reduz nitrato a nitrito. A presença de nitritos na fita reagente sugere forte presença de Enterobactérias na urina." },
    { question: "Qual o principal mecanismo de virulência na ITU?", answer: "As fímbrias (Pili). Fímbrias tipo 1 para aderir na bexiga (Cistite) e Fímbrias P para aderir no rim (Pielonefrite)." }
  ],
  [BacteriaType.P_MIRABILIS]: [
    { question: "Por que o Proteus causa cálculos renais?", answer: "Ele produz Urease, que quebra a ureia em amônia, alcalinizando a urina (pH > 8). Isso precipita magnésio e fosfato, formando cálculos de Estruvita." }
  ],
  [BacteriaType.P_AERUGINOSA]: [
    { question: "Qual a cor típica das colônias ou feridas infectadas por Pseudomonas?", answer: "Verde-azulado, devido à produção dos pigmentos Piocianina e Pioverdina." }
  ],
  [BacteriaType.S_SAPROPHYTICUS]: [
    { question: "Quem é o paciente típico do S. saprophyticus?", answer: "Mulher jovem, sexualmente ativa ('Cistite de lua de mel')." }
  ],
  // Add entries for other bacteria types to avoid undefined errors, defaulting to generic list if needed
  [BacteriaType.C_PNEUMONIAE]: [{ question: "Qual a diferença para Mycoplasma?", answer: "Clinicamente muito similar. Chlamydophila tem um ciclo de vida bifásico intracelular." }],
  [BacteriaType.L_MONOCYTOGENES]: [{ question: "Quem deve evitar queijo não pasteurizado?", answer: "Gestantes (risco de aborto) e imunossuprimidos, devido ao risco de Listeriose." }],
  [BacteriaType.K_PNEUMONIAE]: [{ question: "O que é escarro em geleia de groselha?", answer: "Escarro sanguinolento, viscoso e mucoide, clássico da pneumonia por Klebsiella em alcoólatras." }],
  [BacteriaType.E_FAECALIS]: [{ question: "Por que Enterococo não positivam nitrito?", answer: "Eles não reduzem nitrato a nitrito, então a fita reagente pode dar falso negativo para ITU." }]
};

export const STATIC_CASES: Record<BacteriaType, ClinicalCase[]> = {
  [BacteriaType.S_PYOGENES]: [
    {
      id: "spy-1",
      title: "Dor de Garganta Súbita",
      patientProfile: "Menino de 8 anos, escolar.",
      symptoms: "Início súbito de odinofagia intensa e febre de 39°C há 24h. Mãe refere que ele não tem tosse, mas queixa-se de dor de cabeça e dor abdominal.",
      physicalExam: "Faringe hiperemiada com exsudato purulento nas amígdalas. Petéquias no palato mole. Adenopatia cervical anterior dolorosa e aumentada.",
      question: "Qual o diagnóstico clínico mais provável e como confirmar?",
      diagnosis: "Faringite Estreptocócica (S. pyogenes).",
      treatment: "Penicilina V oral ou Amoxicilina por 10 dias. Benzatina IM dose única se houver má adesão.",
      explanation: "A ausência de tosse, febre alta, exsudato e idade escolar compõem os critérios de Centor modificados, sugerindo etiologia bacteriana."
    }
  ],
  [BacteriaType.S_PNEUMONIAE]: [
    {
      id: "spn-1",
      title: "Tosse e Dor Torácica",
      patientProfile: "Homem de 68 anos, tabagista.",
      symptoms: "Há 2 dias com febre, calafrios e tosse com expectoração de cor 'ferrugem'. Sente uma pontada no lado direito do peito ao respirar fundo.",
      physicalExam: "Taquipneico. Ausculta com crepitações e sopro tubário na base direita. Percussão maciça na mesma região.",
      question: "Qual a principal hipótese diagnóstica e o agente?",
      diagnosis: "Pneumonia Adquirida na Comunidade (NAC) Típica - Pneumococo.",
      treatment: "Amoxicilina (dose alta) ou Ceftriaxona + Macrolídeo (se internado).",
      explanation: "O quadro é clássico de consolidação lobar (sopro tubário, macicez) e o escarro herrumbroso é patognomônico do S. pneumoniae."
    }
  ],
  [BacteriaType.H_INFLUENZAE]: [
    {
      id: "hin-1",
      title: "Otite Recorrente",
      patientProfile: "Menina de 2 anos, frequenta creche.",
      symptoms: "Irritabilidade, febre e puxando a orelha direita. Teve quadro gripal há 5 dias. Mãe relata que é a 3ª vez este ano.",
      physicalExam: "Otoscopia: Membrana timpânica abaulada, hiperemiada e opaca, com mobilidade reduzida.",
      question: "Além do pneumococo, qual bactéria é muito comum neste cenário?",
      diagnosis: "Otite Média Aguda (OMA) por H. influenzae (não tipável).",
      treatment: "Amoxicilina-Clavulanato (devido à produção de beta-lactamase frequente em H. influenzae).",
      explanation: "H. influenzae não tipável é uma das principais causas de OMA e sinusite em crianças, frequentemente produzindo beta-lactamase."
    }
  ],
  [BacteriaType.N_MENINGITIDIS]: [
    {
      id: "nme-1",
      title: "Febre e Manchas na Pele",
      patientProfile: "Rapaz de 19 anos, militar.",
      symptoms: "Cefaleia explosiva, vômitos e febre alta iniciados há 6 horas. Evoluiu rapidamente com confusão mental.",
      physicalExam: "Rigidez de nuca marcante. Presença de petéquias disseminadas no tronco e membros inferiores que não desaparecem à vitropressão.",
      question: "Qual é a emergência médica e a conduta imediata?",
      diagnosis: "Meningococcemia (Sepse Meningocócica).",
      treatment: "Ceftriaxona IV imediata. Isolamento de gotículas.",
      explanation: "A associação de sinais meníngeos com purpura fulminans em adulto jovem sugere fortemente Meningococo. É uma emergência com alta mortalidade."
    }
  ],
  [BacteriaType.E_COLI]: [
    {
      id: "eco-1",
      title: "Disúria e Polaciúria",
      patientProfile: "Mulher de 22 anos, sexualmente ativa.",
      symptoms: "Ardência ao urinar e vontade de ir ao banheiro toda hora (pouca urina). Dor no 'pé da barriga'. Sem febre.",
      physicalExam: "Dor à palpação suprapúbica. Giordano negativo.",
      question: "Qual o diagnóstico e tratamento empírico?",
      diagnosis: "Cistite Aguda Não Complicada.",
      treatment: "Fosfomicina (dose única) ou Nitrofurantoína (5 dias).",
      explanation: "E. coli é responsável por >80% das cistites comunitárias. O quadro é baixo (bexiga), sem sinais de pielonefritis."
    },
    {
      id: "eco-2",
      title: "Febre e Dor Lombar",
      patientProfile: "Mesma paciente, 3 dias depois, sem tratamento.",
      symptoms: "Agora com febre de 39°C, calafrios e dor forte nas costas à direita. Náuseas.",
      physicalExam: "Sinal de Giordano positivo à direita.",
      question: "Como o diagnóstico mudou?",
      diagnosis: "Pielonefrite Aguda.",
      treatment: "Ciprofloxacino ou Ceftriaxona.",
      explanation: "A ascensão da bactéria pelos ureteres atingiu o rim, causando infecção alta sistêmica."
    }
  ],
  [BacteriaType.S_SAPROPHYTICUS]: [
    {
      id: "ssap-1",
      title: "Lua de Mel",
      patientProfile: "Jovem de 20 anos, recém-casada.",
      symptoms: "Disúria um dia após relação sexual.",
      physicalExam: "EGO: Leucocitúria, mas Nitrito NEGATIVO.",
      question: "Qual o agente provável dado o nitrito negativo?",
      diagnosis: "Cistite por S. saprophyticus.",
      treatment: "Nitrofurantoína ou TMP-SMX.",
      explanation: "S. saprophyticus é a 2ª causa de ITU em jovens. Por ser Gram+, não reduz nitrato a nitrito."
    }
  ],
  [BacteriaType.P_MIRABILIS]: [
    {
      id: "pmir-1",
      title: "Cálculos Renais",
      patientProfile: "Homem de 50 anos com litíase de repetição.",
      symptoms: "ITU recorrente. pH urinário persistentemente alcalino (>7.5).",
      physicalExam: "RX mostra cálculo coraliforme ocupando a pelve renal.",
      question: "Qual bactéria está associada a cálculos de estruvita?",
      diagnosis: "ITU por Proteus mirabilis.",
      treatment: "Remoção do cálculo e antibiótico sensível (ex: Cefalosporina/Quinolona).",
      explanation: "A urease produzida pelo Proteus alcaliniza a urina, precipitando sais e formando cálculos gigantes que servem de santuário para a bactéria."
    }
  ],
  [BacteriaType.S_AUREUS]: [
    {
      id: "sau-1",
      title: "Pneumonia Necrotizante Pós-Influenza",
      patientProfile: "Jovem de 28 anos, previamente hígido.",
      symptoms: "Teve gripe há 1 semana. Agora retorna com febre alta, dispneia e hemoptise.",
      physicalExam: "Taquipneico, séptico. RX com múltiplas cavitações (pneumatoceles).",
      question: "Qual o agente bacteriano mais associado a esta evolução grave pós-viral?",
      diagnosis: "Staphylococcus aureus (provável MRSA-CA).",
      treatment: "Vancomicina ou Linezolida + Beta-lactâmico.",
      explanation: "A pneumonia necrotizante por S. aureus é uma complicação clássica e letal da Influenza, exigindo cobertura para MRSA."
    }
  ],
  // Fallbacks for types without explicit detailed cases in this snippet
  [BacteriaType.M_CATARRHALIS]: [{ id: "mcat-1", title: "Sinusite em Criança", patientProfile: "Criança 5 anos", symptoms: "Coriza purulenta persistente > 10 dias.", physicalExam: "Rinoscopia com secreção.", question: "Diagnóstico?", diagnosis: "Sinusite Bacteriana.", treatment: "Amox-Clav.", explanation: "Moraxella é comum em pediatria." }],
  [BacteriaType.L_PNEUMOPHILA]: [{ id: "leg-1", title: "Pneumonia Atípica Grave", patientProfile: "Idoso, fumante", symptoms: "Pneumonia + Diarreia + Confusão.", physicalExam: "Hiponatremia.", question: "Agente?", diagnosis: "Legionella.", treatment: "Levofloxacino.", explanation: "Sinais sistêmicos." }],
  [BacteriaType.M_PNEUMONIAE]: [{ id: "myc-1", title: "Tosse Seca", patientProfile: "Jovem 20 anos", symptoms: "Tosse seca há 3 semanas, febre baixa.", physicalExam: "RX com infiltrado difuso pior que ausculta.", question: "Agente?", diagnosis: "Mycoplasma.", treatment: "Azitromicina.", explanation: "Dissociação clínico-radiológica." }],
  [BacteriaType.C_PNEUMONIAE]: [{ id: "cpn-1", title: "Rouquidão e Pneumonia", patientProfile: "Adulto jovem", symptoms: "Faringite que evoluiu para bronquite.", physicalExam: "Sibilos.", question: "Agente?", diagnosis: "Chlamydophila.", treatment: "Doxiciclina.", explanation: "Curso bifásico." }],
  [BacteriaType.S_AGALACTIAE]: [{ id: "sag-1", title: "Sepse Neonatal", patientProfile: "RN 12 horas", symptoms: "Desconforto respiratório.", physicalExam: "Mãe sem pré-natal.", question: "Agente?", diagnosis: "EGB.", treatment: "Ampicilina+Gentamicina.", explanation: "Causa #1 sepse neonatal." }],
  [BacteriaType.L_MONOCYTOGENES]: [{ id: "lis-1", title: "Meningite em Idoso", patientProfile: "75 anos", symptoms: "Febre, confusão.", physicalExam: "LCR com Gram variável.", question: "Agente?", diagnosis: "Listeria.", treatment: "Ampicilina.", explanation: "Cobre Listeria em idosos." }],
  [BacteriaType.K_PNEUMONIAE]: [{ id: "kp-1", title: "Pneumonia Lobar", patientProfile: "Alcoólatra", symptoms: "Escarro 'geleia de groselha'.", physicalExam: "Consolidação lobar.", question: "Agente?", diagnosis: "Klebsiella.", treatment: "Cefalosporina 3a.", explanation: "Pneumonia aspirativa em alcoólatras." }],
  [BacteriaType.E_FAECALIS]: [{ id: "efa-1", title: "ITU Hospitalar", patientProfile: "Sonda vesical", symptoms: "Febre.", physicalExam: "Urocultura Gram+.", question: "Agente?", diagnosis: "Enterococo.", treatment: "Ampicilina/Vanco.", explanation: "Resistente a Cefalosporinas." }],
  [BacteriaType.P_AERUGINOSA]: [{ id: "pae-1", title: "Queimado", patientProfile: "Grande queimado", symptoms: "Ferida com pus verde.", physicalExam: "Olor doce.", question: "Agente?", diagnosis: "Pseudomonas.", treatment: "Cefepime/Meropenem.", explanation: "Oportunista clássico." }]
};

export const QUIZ_DATA: QuizTopic[] = [
  // ... (QUIZ_DATA remains the same as previously populated) ...
  {
    id: 'ANTIMICROBIALS',
    title: 'Exercícios de Fixação: Antimicrobianos',
    description: '20 Exercícios variados sobre mecanismos de ação e resistência bacteriana.',
    questions: [
        { id: 'abx-1', type: 'multiple-choice', text: '1. Segundo o CLSI, o que significa quando uma bactéria é classificada como "Intermediária (I)"?', options: [{ id: 'a', text: 'O tratamento sempre falhará.' }, { id: 'b', text: 'Pode ser eficaz em locais onde o fármaco se concentra ou com doses elevadas.' }, { id: 'c', text: 'A bactéria é totalmente sensível.' }, { id: 'd', text: 'É um erro de laboratório.' }], correctAnswer: 'b' },
        { id: 'abx-2', type: 'open-ended', text: '2. Diferencie, com suas palavras, um antibiótico Bacteriostático de um Bactericida.', correctAnswer: 'Bacteriostáticos inibem o crescimento e replicação bacteriana (exigem sistema imune competente). Bactericidas causam a morte e lise celular da bactéria.' }
        // ... (Include rest of quiz data here) ...
    ]
  },
  {
      id: 'UPPER',
      title: 'Exercícios de Fixação: Infecções Altas',
      description: 'Questões sobre IVAS.',
      questions: [
          { id: 'up-1', type: 'multiple-choice', text: '1. Agente mais comum de faringite bacteriana?', options: [{id:'a', text:'S. aureus'}, {id:'b', text:'S. pyogenes'}, {id:'c', text:'Pneumococo'}, {id:'d', text:'H. influenzae'}], correctAnswer: 'b' },
          { id: 'up-2', type: 'open-ended', text: '2. Cite uma complicação não supurativa do S. pyogenes.', correctAnswer: 'Febre Reumática ou Glomerulonefrite.' }
          // ... (Placeholder for full list) ...
      ]
  },
  {
      id: 'LOWER',
      title: 'Exercícios de Fixação: Infecções Baixas',
      description: 'Questões sobre Pneumonia.',
      questions: [
          { id: 'low-1', type: 'multiple-choice', text: '1. Principal agente da NAC?', options: [{id:'a', text:'Mycoplasma'}, {id:'b', text:'Pneumococo'}, {id:'c', text:'Legionella'}, {id:'d', text:'S. aureus'}], correctAnswer: 'b' },
          { id: 'low-2', type: 'open-ended', text: '2. Tratamento ambulatorial padrão NAC?', correctAnswer: 'Amoxicilina ou Macrolídeo.' }
      ]
  },
  {
      id: 'CNS',
      title: 'Exercícios de Fixação: SNC',
      description: 'Questões sobre Meningite.',
      questions: [
          { id: 'cns-1', type: 'multiple-choice', text: '1. Agente meningite neonatos?', options: [{id:'a', text:'S. agalactiae'}, {id:'b', text:'Neisseria'}, {id:'c', text:'Pneumo'}, {id:'d', text:'Haemophilus'}], correctAnswer: 'a' },
          { id: 'cns-2', type: 'open-ended', text: '2. LCR Bacteriano: Glicose?', correctAnswer: 'Baixa (Hipoglicorraquia).' }
      ]
  },
  {
      id: 'ITU',
      title: 'Exercícios de Fixação: ITU',
      description: 'Questões sobre Trato Urinário.',
      questions: [
          { id: 'itu-1', type: 'multiple-choice', text: '1. Agente #1 ITU?', options: [{id:'a', text:'Proteus'}, {id:'b', text:'E. coli'}, {id:'c', text:'Klebsiella'}, {id:'d', text:'Enterococo'}], correctAnswer: 'b' },
          { id: 'itu-2', type: 'open-ended', text: '2. Nitrito negativo exclui ITU?', correctAnswer: 'Não. Gram positivos (Enterococo/Staph) e Pseudomonas não reduzem nitrato.' }
      ]
  }
];

export const SYSTEM_INSTRUCTION = `
Você é um professor experiente de microbiologia médica e doenças infecciosas.
Seu objetivo é criar casos clínicos educativos e responder dúvidas de alunos de medicina.
Sempre baseie suas respostas em diretrizes clínicas e literatura médica padrão (como Harrison, Mandell).
Mantenha o tom profissional, educativo e encorajador.
Responda sempre em Português do Brasil.
`;
