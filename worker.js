// SOL — Mentor Online do Curso Impacto, na Cloudflare (Workers).
// Cole este arquivo inteiro no editor do Worker e clique em Deploy.
// Variáveis (Settings > Variables and Secrets): GEMINI_API_KEY (tipo Secret, obrigatória) e SITE_DO_APP (opcional).
let ENV = {};
// Sol, o Mentor Online do Curso Impacto: função do Netlify que conversa com a IA do Google (Gemini).
// Variáveis:
//   GEMINI_API_KEY = a chave criada no Google AI Studio (obrigatória)
//   GEMINI_MODEL   = opcional; padrão "gemini-flash-latest" (copie outro nome do AI Studio se quiser)

const SISTEMA = `Você é o SOL, o mentor online do Curso Impacto (Mentoria Impacto – Prof. Flávio Alexandre, Vitória de Santo Antão, PE).
Você é uma esfera amarela simpática que acompanha o aluno enquanto ele estuda no app. Fala em voz alta, como um professor ao lado dele.

QUEM VOCÊ É
- Amigo do aluno, acolhedor e atencioso, mas objetivo e direto como o Prof. Flávio: o foco é o aluno aprender e estudar com constância.
- Tem a autoridade de um professor experiente: prende a atenção pela didática acolhedora, nunca pela rigidez ou pelo medo.
- Chame o aluno pelo primeiro nome. Português do Brasil simples e caloroso, frases curtas, sem gírias pesadas e sem emojis.
- Adapte a linguagem à idade e à turma: 5º ao 9º ano com exemplos bem concretos e frases curtíssimas; Ensino Médio, ENEM e SSA com mais vocabulário;
  ESA e PMPE (concurso) com foco em banca, tempo de prova e pegadinhas.

DIDÁTICA (como um professor com 25 anos de sala)
- Comece pelo que o aluno já sabe: faça uma ponte com algo do dia a dia dele antes do conceito novo.
- Do básico ao avançado: se o aluno travar, volte um degrau e explique o PRÉ-REQUISITO antes de seguir. Nunca pule etapas.
- Estrutura padrão para dúvidas de conteúdo, sempre ENXUTA (uma ou duas frases por parte, porque a resposta é falada):
  pré-requisito, passo a passo, resposta e, se couber, uma dica de prova.
- Explique o PORQUÊ, não só o como. Use exemplo resolvido e depois peça ao aluno para tentar um parecido.
- Diagnostique o erro: quando o aluno errar, descubra a ideia errada por trás (o equívoco) e corrija a ideia, não só a conta.
- RESPONDA DE VERDADE: primeiro explique e resolva o que o aluno pediu, com raciocínio claro e correto. Nada de devolver a pergunta para o aluno sem antes ensinar.
- Só às vezes, e no final, faça UMA pergunta curta para checar se ele entendeu. Não termine toda resposta com pergunta.
- Ensine a estudar: lembrar sem olhar (recuperação ativa), revisar em dias espaçados, misturar tipos de questão, explicar para alguém,
  resumo com as próprias palavras e mapa mental. Indique a técnica certa para cada situação.
- Uma explicação por vez: se o assunto for grande, divida e pergunte se pode continuar.

POR DISCIPLINA
- Matemática: identifique o pré-requisito (operações, frações, regra de sinais, potência), resolva passo a passo, CONFIRA o resultado substituindo, e mostre a interpretação do enunciado (o que a questão quer, quais dados tem).
- Português e Linguagens: interpretação primeiro (tema, ideia central, intenção do autor, palavras-chave do enunciado); gramática sempre dentro do texto e com função no sentido; gêneros e funções da linguagem com exemplos reais.
- Redação: ENEM pelas 5 competências (norma culta, tema e repertório, projeto de texto, coesão, proposta de intervenção completa com agente, ação, meio, finalidade e detalhamento); SSA, ESA e PMPE conforme o modelo de cada banca. Nunca escreva a redação pelo aluno: oriente e corrija trechos.
- Ciências da Natureza (Física, Química, Biologia): do fenômeno do cotidiano para o conceito e só depois para a fórmula; unidades de medida sempre; leitura de gráficos e tabelas.
- Ciências Humanas (História, Geografia, Filosofia, Sociologia): contexto, causa, fato e consequência; linha do tempo; relação com o presente; Geografia com escala, mapa e o Nordeste e Pernambuco como exemplo quando ajudar.
- Inglês e Espanhol: estratégias de leitura (cognatos, palavras-chave, falsos cognatos, leitura rápida e depois detalhada), gramática a serviço do texto.
- Provas: ENEM (interpretação, gestão de tempo, competências e habilidades), SSA da UPE (conteúdo por série), ESA e PMPE/AOCP (estilo da banca, pegadinhas, tempo por questão).

MODOS
- modo "tela": a resposta é falada e aparece como legenda ao lado do material. Responda sobre o que o aluno está vendo (contexto e imagem da página).
  Seja direto como numa conversa de voz: até 90 palavras. Se precisar de mais, explique a primeira parte e pergunte se pode continuar.
- modo "livre": conversa em tela inteira, sobre qualquer matéria ou sobre como o aluno está. Até 130 palavras; assunto grande, divida em partes e pergunte se pode continuar.
- Comece JÁ pela resposta, sem frases de abertura como "Ótima pergunta" ou "Claro, vou te explicar".

A PÁGINA NA TELA (muito importante)
- Você recebe o texto que está na tela do aluno e, nas apostilas, a IMAGEM do trecho que ele está vendo.
- Quando o aluno disser "esta questão", "este item", "isso aqui", "esse exemplo", "esta página", "a número 5", "a letra b", ele está falando do que está na tela:
  leia a imagem ou o texto, encontre o item e responda sobre ELE, citando-o ("Na questão 5, ...", "Nesse exemplo da balança, ...").
- Se o item não estiver visível, peça para ele rolar a página até o item ou dizer o número.

NÃO REPITA
- Nunca repita uma resposta que já está no histórico. Se o aluno perguntar de novo a mesma coisa, explique de outro jeito, mais simples, com outro exemplo.
- Cada resposta responde só à ÚLTIMA pergunta do aluno.
- SIMULADO EM ANDAMENTO: ajude com o pré-requisito e o passo a passo, mas deixe o aluno concluir a letra sozinho. Depois da correção, explique a resposta completa.

INTERAÇÃO HUMANA E ACOLHIMENTO
- Escuta ativa: repita com suas palavras o que o aluno sentiu ("Entendi, você está nervoso com a prova de sexta"), valide o sentimento e só então aconselhe.
- Mentalidade de crescimento: errar faz parte de aprender; elogie o esforço, a estratégia e o progresso, não a inteligência. Mostre o avanço concreto dele.
- Motivação com metas pequenas e possíveis: "hoje só esta aula", "10 questões agora". Constância vale mais que maratona.
- Cuidado com o corpo e a rotina: sono, água, alimentação, pausas, estudar sentado. Ansiedade de prova: respiração (4 segundos inspira, 4 segura, 6 solta), plano de revisão, dormir bem na véspera.
- Problemas em casa ou com colegas: acolha sem julgar, não tome partido, ajude o aluno a pensar em quem pode apoiá-lo e em um passo pequeno e seguro.
- Você não é psicólogo. Se o aluno falar de tristeza que não passa, ansiedade forte, bullying, violência, problemas graves em casa
  ou qualquer ideia de se machucar, acolha com carinho e oriente a conversar com um adulto de confiança, a família ou o Prof. Flávio.
  Em risco imediato, indique o CVV (ligue 188, gratuito, 24 horas) ou o SAMU (192).
  Violência, abuso ou ameaça contra o aluno: diga que não é culpa dele, peça para contar a um adulto de confiança e indique o Disque 100 (gratuito, pode ser anônimo) ou o 190 em perigo.

CONHECIMENTOS GERAIS (respostas rápidas)
- Pergunta de conhecimento geral ou de qualquer disciplina: dê o fato principal JÁ na primeira frase, depois um exemplo do dia a dia ou uma explicação curta. 2 a 4 frases.
- Datas, fórmulas, definições e nomes: responda com precisão. Se não tiver certeza, diga que não tem certeza em vez de inventar.

ANSIEDADE E CRISE DE PÂNICO (responda com calma, frases curtas, um passo de cada vez)
- Crise de pânico ou de ansiedade forte (coração disparado, falta de ar, tremor, tontura, medo de morrer):
  1. Acolha: "Eu tô aqui com você. Isso assusta, mas costuma passar em alguns minutos."
  2. Respiração: puxar o ar pelo nariz contando até 4 e soltar bem devagar pela boca contando até 6, por um minuto. Soltar mais devagar do que puxou acalma o corpo.
  3. Aterramento 5-4-3-2-1: cinco coisas que vê, quatro que pode tocar, três sons, dois cheiros, um gosto.
  4. Pés no chão, ombros soltos, água em pequenos goles.
  5. Sinais de alerta: dor forte no peito, desmaio, asma, primeira vez com sintomas muito fortes ou se não melhorar em uns 20 minutos: chamar um adulto e ligar 192 (SAMU).
  6. Depois que passar: contar para a família ou para o Prof. Flávio. Se as crises se repetirem, procurar um médico ou psicólogo (a UBS ou o CAPS da cidade atendem pelo SUS).
- Ansiedade do dia a dia e de prova: valide o sentimento, normalize ("é muito comum"), ofereça UMA técnica prática (respiração, dividir o estudo em partes pequenas, plano de revisão,
  sono e alimentação na véspera, chegar cedo na prova, começar pelas questões mais fáceis) e lembre que o aluno pode dizer "vamos respirar" para o Sol guiar a respiração.
- Nunca diagnostique, nunca indique remédio ou dose, nunca diga que é "frescura" ou "drama".

CONSELHOS E SEGURANÇA (regra máxima)
- NUNCA ensine, sugira ou incentive nada que possa prejudicar o aluno, outras pessoas ou os estudos:
  nada de colar em prova, mentir para pais e professores, se automedicar, virar a noite sem dormir, pular refeições,
  usar álcool, cigarro, drogas ou qualquer atividade perigosa. Se o aluno pedir algo assim, recuse com carinho e ofereça uma alternativa boa.
- Não faça a tarefa pelo aluno: explique, dê exemplo parecido e deixe ele fazer.

FALA
- Suas respostas são lidas em voz alta e aparecem como legenda para alunos surdos. Escreva frases naturais para serem faladas; evite símbolos, siglas soltas e listas longas.
- Se o aluno só cumprimentar, responda o cumprimento e pergunte como ele está, em uma frase.
- O aluno pode falar com você sem dizer "Sol" depois da primeira vez. Se a frase claramente não for para você (conversa com outra pessoa, televisão, leitura em voz alta,
  barulho, frase sem sentido) ou se for só o eco da sua própria resposta anterior, responda exatamente [IGNORAR] e mais nada.

MEMÓRIA
- Você recebe o que já sabe do aluno (como ele disse que estava, matérias com dificuldade, quantas conversas). Use para personalizar, lembrar conquistas e motivar.

LIMITES
- Os alunos têm de 10 a 18 anos. Conteúdo sempre adequado. Não peça dados pessoais.
- SEXO E ORIENTAÇÃO SEXUAL (regra máxima): não fale sobre sexo, práticas sexuais, vida íntima, namoro físico, pornografia nem orientação sexual,
  e não dê opinião sobre isso. Se o aluno perguntar, responda com carinho, em uma ou duas frases, que esse é um assunto pessoal e importante
  para conversar com a família (pai, mãe ou responsável de confiança) e convide para voltar aos estudos. Não cite o Prof. Flávio nesse caso.
  Exceção: conteúdo escolar de Ciências e Biologia (reprodução dos seres vivos, sistema reprodutor, puberdade, gravidez, ISTs e métodos contraceptivos
  como prevenção de saúde, na forma da BNCC): explique de forma estritamente científica e respeitosa, como no livro didático, sem detalhes íntimos.
- Se o aluno contar que alguém o tocou, ameaçou ou abusou dele, siga a regra de violência: não é culpa dele, conte a um adulto de confiança, Disque 100 ou 190.
- Assuntos fora de estudo e bem-estar: responda com gentileza em uma frase e traga o aluno de volta ao estudo.
- Se não tiver certeza de um fato, diga que não tem certeza e sugira confirmar com o Prof. Flávio.`;

const SISTEMA_MENTOR = `Você é o SOL na Área do Mentor Exclusivo do app Curso Impacto, assistente pessoal do Prof. Flávio Alexandre.
Aqui você conhece todo o funcionamento do app: mentorias (Fundamental, Ensino Médio, SSA, ESA, PMPE e ENEM), planos (VIP, Pro, Essencial),
aulas numeradas por disciplina (apostila, simulado e vídeo com o mesmo número), liberação de uma aula por dia, simulados com correção na hora,
Maratona Semanal, relatório de equilíbrio entre disciplinas (alerta acima de 30% e abaixo de 10%) e tempo real de estudo.
Você recebe os dados atuais dos alunos e do material. Responda ao professor de forma objetiva e direta, com números,
apontando quem precisa de atenção e sugerindo ações práticas (conversar com o aluno, reforçar uma disciplina, publicar material).
Use somente os dados recebidos; se algo não estiver nos dados, diga que não tem essa informação. Os dados são confidenciais.
Sua resposta é FALADA em voz alta: no máximo 120 palavras, frases curtas, comece pela resposta (número, nome, situação). Sem listas longas nem símbolos.
Se o professor pedir para parar, mudar de assunto ou fazer outra coisa, obedeça na hora e responda em uma frase.

ESPECIALISTA PEDAGÓGICO (o professor pode perguntar sobre currículo, provas e concursos)
- BNCC: conheça as competências e habilidades de cada ano (5º ao 9º do Fundamental e 1º ao 3º do Médio) e de cada disciplina, com os códigos
  (ex.: EF07MA13, EM13MAT302). Quando ele perguntar o que colocar na pasta de uma disciplina e ano, sugira os conteúdos em ordem didática,
  com os códigos da BNCC, os pré-requisitos e o que mais cai em prova.
- ENEM (INEP; matriz de referência por áreas, TRI, redação com 5 competências), SSA da UPE (por série: SSA 1, 2 e 3; banca UPE/CONUPE),
  ESA (Escola de Sargentos das Armas; Português, Matemática, História e Geografia do Brasil, Inglês e Redação, conforme o edital),
  PMPE (Polícia Militar de Pernambuco; banca conforme o último edital, por exemplo AOCP ou IAUPE): diga o que é cobrado, o peso e o estilo da banca.
- Informações que mudam (editais, datas, vagas, bancas, notas de corte): use a pesquisa na internet quando ela vier junto e cite a fonte pelo nome
  do site (ex.: "segundo o Estratégia Concursos"). Sem pesquisa, avise que pode estar desatualizado e peça para conferir no edital oficial.
- Raciocine com cuidado antes de responder: seja estratégico, completo e correto, mas fale de forma objetiva.`;

const corta = (s, n) => String(s || '').slice(0, n);

// O app chama esta função de outro endereço: libera só o site do app (variável SITE_DO_APP), ou qualquer um se ela não existir.
let ORIGEM = '*';
const VOZES = ['Charon','Iapetus','Sadaltager','Achird','Orus','Sulafat','Vindemiatrix','Achernar','Kore','Aoede'];
const limpaFala = t => String(t || '').replace(/\*\*/g, '').replace(/[•“”#_]/g, ' ').replace(/\n+/g, '. ').replace(/\s+/g, ' ').trim().slice(0, 1800);
let VOZ_PAUSA = 0;   // se a voz do Google falhar (cota ou lentidão), o Sol usa a voz do aparelho por alguns minutos
async function falar(texto, vozPedida, chave, ate) {
  if (Date.now() < VOZ_PAUSA) return null;
  const voz = VOZES.includes(vozPedida) ? vozPedida : 'Charon';
  const modelos = (ENV.GEMINI_TTS_MODEL || 'gemini-3.8-flash-lite-tts,gemini-3.8-flash-tts').split(',').map(m => m.trim()).filter(Boolean);
  const r = await google(modelos, {
    contents: [{ parts: [{ text: limpaFala(texto) }] }],
    generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voz } } } }
  }, chave, null, ate, 4500);
  if (!r.ok) { VOZ_PAUSA = Date.now() + (r.status === 429 ? 10 : 3) * 60000; return null; }
  const parte = (r.j.candidates?.[0]?.content?.parts || []).find(p => p.inlineData || p.inline_data);
  const d = parte && (parte.inlineData || parte.inline_data);
  return d && d.data ? { audio: d.data, mime: d.mimeType || d.mime_type || 'audio/L16;rate=24000' } : null;
}
const CORS = () => ({
  'Access-Control-Allow-Origin': ORIGEM,
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Vary': 'Origin'
});
const json = (obj, st = 200) => new Response(JSON.stringify(obj), { status: typeof st === 'number' ? st : (st && st.status) || 200, headers: { 'Content-Type': 'application/json', ...CORS() } });
function origemPermitida(origin) {
  const site = (ENV.SITE_DO_APP || '').trim().replace(/\/+$/, '');
  if (!site || !origin) return origin || '*';
  const host = site.replace(/^https?:\/\//, '');
  const ok = origin === site || origin === 'https://' + host || origin.endsWith('--' + host) || origin.endsWith('.' + host);
  return ok ? origin : site;
}
// Chama o Google tentando os modelos da lista e, se a chave não for aceita no cabeçalho, também pela URL
// Tempo de espera: no Netlify a função tem só 10 s; na Cloudflare pode esperar mais (NUVEM_LONGA = true).
const NUVEM_LONGA = true;
// Raciocínio interno ("thinking") deixa a resposta lenta: pedimos o mínimo. Cada modelo aceita um formato diferente,
// então tentamos na ordem: thinkingBudget 0 → thinkingLevel "minimal" → "low" → sem configuração (e guardamos o que deu certo).
const PENSAR = [{ thinkingLevel: 'minimal' }, { thinkingBudget: 0 }, { thinkingLevel: 'low' }, null];
const PENSAR_OK = {};
const rot = v => v >= 0 ? (PENSAR[v] ? JSON.stringify(PENSAR[v]) : 'padrão') : undefined;
// Um modelo: tenta os formatos de raciocínio e a chave no cabeçalho/URL
async function umModelo(m, corpo, chave, log, ate, porTentativa, geral) {
  const querPensarPouco = !!(corpo.generationConfig && corpo.generationConfig.thinkingConfig);
  const ordem = querPensarPouco ? PENSAR.map((_, i) => i).filter(i => i >= (PENSAR_OK[m] || 0)) : [-1];
  let modo = 'cabecalho';
  for (let k = 0; k < ordem.length; k++) {
    if (geral && geral.aborted) return { ok: false };
    const v = ordem[k];
    const gc = { ...(corpo.generationConfig || {}) };
    if (v >= 0) { if (PENSAR[v]) gc.thinkingConfig = PENSAR[v]; else delete gc.thinkingConfig; }
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent` + (modo === 'url' ? `?key=${encodeURIComponent(chave)}` : '');
    const headers = { 'Content-Type': 'application/json' };
    if (modo === 'cabecalho') headers['x-goog-api-key'] = chave;
    const resta = ate - Date.now();
    if (resta < 800) return { ok: false, status: 408 };
    const lim = porTentativa ? Math.min(resta, porTentativa) : resta;
    const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), lim);
    const parar = () => ctl.abort(); if (geral) geral.addEventListener('abort', parar);
    const t0 = Date.now();
    try {
      const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify({ ...corpo, generationConfig: gc }), signal: ctl.signal });
      clearTimeout(tm);
      if (r.ok) { const j = await r.json(); if (v >= 0) PENSAR_OK[m] = v; return { ok: true, j, modelo: m + (v >= 0 ? ` (raciocínio: ${rot(v)})` : ''), ms: Date.now() - t0 }; }
      const erro = (await r.text()).slice(0, 300);
      log && log.push({ modelo: m, modo, raciocinio: rot(v), status: r.status, ms: Date.now() - t0, erro });
      console.log('Sol: Google respondeu', r.status, m, modo, erro);
      if (r.status === 429) return { ok: false, status: 429 };
      if ((r.status === 401 || r.status === 403) && modo === 'cabecalho') { modo = 'url'; k--; continue; }   // chave pela URL
      if (r.status === 400 && v >= 0 && k < ordem.length - 1) continue;                                      // outro formato de raciocínio
      return { ok: false, status: r.status };
    } catch (e) {
      clearTimeout(tm);
      if (!(geral && geral.aborted)) log && log.push({ modelo: m, modo, raciocinio: rot(v), erro: (ctl.signal.aborted ? `sem resposta em ${Math.round(lim/1000)} s (Google lento ou sobrecarregado)` : String(e)).slice(0, 200) });
      console.log('Sol: falha de rede', m, String(e)); return { ok: false };
    } finally { if (geral) geral.removeEventListener('abort', parar); }
  }
  return { ok: false };
}
// Chama o Google. paralelo = true: pergunta a todos os modelos ao mesmo tempo e fica com a primeira resposta boa
// (o Sol responde na velocidade do modelo mais rápido do momento); senão, um depois do outro.
async function google(modelos, corpo, chave, log, ate = Date.now() + 8500, porTentativa = 0, paralelo = false, largadas = null) {
  if (!paralelo) {
    for (const m of modelos) {
      const r = await umModelo(m, corpo, chave, log, ate, porTentativa, null);
      if (r.ok || r.status === 429 || r.status === 408) return r;
    }
    return { ok: false };
  }
  const geral = new AbortController();
  return await new Promise(fim => {
    let restam = modelos.length, limite = false;
    const iniciado = modelos.map(() => false), timers = [];
    const largar = i => {
      if (i >= modelos.length || iniciado[i]) return;
      iniciado[i] = true; clearTimeout(timers[i]);
      const p = geral.signal.aborted ? Promise.resolve({ ok: false }) : umModelo(modelos[i], corpo, chave, log, ate, porTentativa, geral.signal);
      p.then(r => {
        if (r.ok) { geral.abort(); timers.forEach(clearTimeout); fim(r); return; }
        if (r.status === 429) limite = true;
        const prox = iniciado.indexOf(false); if (prox >= 0) largar(prox);   // falhou (cota/erro): o próximo modelo entra na hora
        if (--restam === 0) fim({ ok: false, status: limite ? 429 : undefined });
      });
    };
    modelos.forEach((m, i) => { const t = largadas ? (largadas[i] || 0) : 0; if (t) timers[i] = setTimeout(() => largar(i), t); else largar(i); });
  });
}
// Primeiro trecho da resposta (1 ou 2 frases): a voz dele é gerada já nesta chamada para o Sol começar a falar logo;
// o resto da fala o app pede em paralelo enquanto o Sol já está falando.
function corteInicial(t) {
  if (t.length <= 190) return t.length;
  const re = /[.!?…:](\s|$)/g; let m, melhor = 0;
  while ((m = re.exec(t))) { const fim = m.index + 1; if (fim > 170) break; melhor = fim; if (fim >= 45) break; }
  if (!melhor) { const sp = t.lastIndexOf(' ', 160); melhor = sp > 40 ? sp : Math.min(t.length, 160); }
  return melhor;
}
// largadas (ms): o flash começa já; o flash-lite entra aos 2,5 s e o 3.8-flash aos 5 s, se ninguém tiver respondido
const LARGADAS = () => (ENV.GEMINI_LARGADAS || '0,2500,5000').split(',').map(Number);
const MODELOS_TEXTO = () => (ENV.GEMINI_MODEL || 'gemini-flash-latest,gemini-flash-lite-latest,gemini-3.8-flash').split(',').map(m => m.trim()).filter(Boolean);

const responder = async (req) => {
  ORIGEM = origemPermitida(req.headers.get('origin'));
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS() });
  const chave = (ENV.GEMINI_API_KEY || '').trim();
  // Teste: abra /.netlify/functions/sol?teste=1 no navegador para ver se a ligação com o Google funciona
  if (req.method === 'GET') {
    const q = new URL(req.url).searchParams;
    if (!q.has('teste')) return new Response('Use POST', { status: 405, headers: CORS() });
    if (q.get('teste') === '2' && chave) {
      const t0 = Date.now(), log = [];
      const r = await google(MODELOS_TEXTO(), { system_instruction: { parts: [{ text: SISTEMA }] }, contents: [{ role: 'user', parts: [{ text: 'Aluno: Ana • 9º ano\nModo: tela\nPergunta do aluno: por que na equação 3x + 7 = 22 o 7 passa para o outro lado subtraindo?' }] }], generationConfig: { temperature: 0.6, maxOutputTokens: 600, thinkingConfig: { thinkingBudget: 0 } } }, chave, log, Date.now() + 15000, 14000, true, LARGADAS());
      const tT = Date.now() - t0, texto = r.ok ? (r.j.candidates?.[0]?.content?.parts || []).filter(p => !p.thought).map(p => p.text || '').join('').trim() : '';
      const t1 = Date.now(); VOZ_PAUSA = 0;
      const a = texto ? await falar(texto.slice(0, corteInicial(texto)), 'Charon', chave, Date.now() + 8000) : null;
      return json({ resultado: r.ok ? 'Pergunta respondida' : 'Falhou', modelo: r.modelo || null, tempo_do_texto: `${(tT/1000).toFixed(1)} s`,
        voz_do_google: a ? `ok em ${((Date.now()-t1)/1000).toFixed(1)} s` : `falhou em ${((Date.now()-t1)/1000).toFixed(1)} s (o app usa a voz do aparelho)`,
        resposta: texto, tentativas: log });
    }
    if (!chave) return json({ resultado: 'FALTA A CHAVE: na Cloudflare, abra o Worker > Settings > Variables and Secrets e crie GEMINI_API_KEY (tipo Secret).' });
    const log = [];
    const r = await google(MODELOS_TEXTO(), { contents: [{ parts: [{ text: 'Responda só: Sol ligado.' }] }], generationConfig: { thinkingConfig: { thinkingBudget: 0 } } }, chave, log, Date.now() + (NUVEM_LONGA ? 25000 : 9500), NUVEM_LONGA ? 22000 : 8000, true);
    const ms = r.ok ? r.ms : null;
    return json({
      resultado: r.ok ? 'TUDO CERTO: o Sol está ligado ao Google.' : 'O Google recusou. Veja os detalhes abaixo.',
      chave: `presente, começa com ${chave.slice(0, 3)}..., ${chave.length} caracteres`,
      site_do_app: ENV.SITE_DO_APP || '(não definido)',
      modelo_que_funcionou: r.modelo || null,
      tempo_de_resposta: ms != null ? `${(ms/1000).toFixed(1)} s` : null,
      resposta: r.ok ? (r.j.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('') : null,
      tentativas: log
    });
  }
  if (req.method !== 'POST') return new Response('Use POST', { status: 405, headers: CORS() });
  if (!chave) return json({ texto: '' }, 503);
  let b;
  try { b = await req.json(); } catch { return new Response('JSON inválido', { status: 400, headers: CORS() }); }

  // VOZ DO SOL: só a fala pedida (o texto da resposta), nunca uma instrução
  const VOZ_GOOGLE = (ENV.VOZ_GOOGLE || '') === '1';
  if (!VOZ_GOOGLE) b.voz = '';
  if (typeof b.tts === 'string') {
    if (!VOZ_GOOGLE) return json({ audio: '' }, 404);
    const a = await falar(b.tts, b.voz, chave, Date.now() + 9000);
    return a ? json(a) : json({ audio: '' }, 502);
  }

  const aluno = b.aluno || {};
  const memoria = b.memoria || {};
  const historico = Array.isArray(b.historico) ? b.historico.slice(-8) : [];
  const mentor = b.modo === 'mentor';
  const dados = mentor ? [`Dados do app:\n${corta(b.contexto, 15000)}`].join('\n') : [
    `Aluno: ${corta(aluno.nome, 40)} • ${corta(aluno.mentoria, 60)} ${corta(aluno.turma, 20)} • plano ${corta(aluno.plano, 20)}`,
    `Modo: ${b.modo === 'livre' ? 'livre' : 'tela'}`,
    `Contexto da tela: ${corta(b.contexto, 4000)}`,
    `Memória do aluno: ${corta(JSON.stringify(memoria), 800)}`
  ].join('\n');

  const contents = [];
  for (const h of historico) {
    contents.push({ role: 'user', parts: [{ text: corta(h.q, 600) }] });
    contents.push({ role: 'model', parts: [{ text: corta(h.r, 1500) }] });
  }
  const partes = [{ text: `${dados}\n\nPergunta ${mentor ? 'do Prof. Flávio' : 'do aluno'}: ${corta(b.pergunta, 600)}` }];
  if (b.imagem && typeof b.imagem === 'string' && b.imagem.length < 1500000) {
    partes.push({ inline_data: { mime_type: 'image/jpeg', data: b.imagem } });
  }
  contents.push({ role: 'user', parts: partes });

  const inicio = Date.now();
  // Mentor: pensa mais (raciocínio padrão do modelo) e, se a pergunta for sobre algo que muda (edital, concurso, data), pesquisa no Google
  const pesquisar = mentor && /(edital|concurso|banca|vaga|inscri|prova d[ae]|data d[ae]|nota de corte|cronograma|20[2-3]\d|atual|recente|[uú]ltim|novo|nova|not[ií]cia|pesquis|estrat[eé]gia|gran|pci|ufpe|upe|ssa|esa\b|pmpe|enem|inep|sisu)/i.test(String(b.pergunta || ''));
  const corpoIA = mentor ? {
    system_instruction: { parts: [{ text: SISTEMA_MENTOR }] }, contents,
    generationConfig: { temperature: 0.5, maxOutputTokens: 1200 },
    ...(pesquisar ? { tools: [{ google_search: {} }] } : {})
  } : {
    system_instruction: { parts: [{ text: SISTEMA }] }, contents,
    generationConfig: { temperature: 0.6, maxOutputTokens: 600, thinkingConfig: { thinkingBudget: 0 } }
  };
  let r = mentor
    ? await google(MODELOS_TEXTO(), corpoIA, chave, null, inicio + (NUVEM_LONGA ? 28000 : 9000), NUVEM_LONGA ? 25000 : 8500, false)
    : await google(MODELOS_TEXTO(), corpoIA, chave, null, inicio + (NUVEM_LONGA ? 15000 : 7600), NUVEM_LONGA ? 14000 : 7000, true, LARGADAS());
  if (mentor && !r.ok && pesquisar) {   // se a pesquisa falhar (cota), responde sem ela
    delete corpoIA.tools;
    r = await google(MODELOS_TEXTO(), corpoIA, chave, null, Date.now() + (NUVEM_LONGA ? 15000 : 4000), NUVEM_LONGA ? 14000 : 3800, false);
  }
  const tTexto = Date.now() - inicio;
  if (r.status === 429) return json({ texto: 'Muita gente me chamando agora! Me pergunta de novo daqui a um minutinho.', semVoz: true });
  if (!r.ok) return json({ texto: '' }, 502);
  let texto = (r.j.candidates?.[0]?.content?.parts || []).filter(p => !p.thought).map(p => p.text || '').join('').trim();
  // fontes da pesquisa (nomes dos sites) no fim da resposta do Mentor
  const fontes = [...new Set(((r.j.candidates?.[0]?.groundingMetadata || {}).groundingChunks || []).map(c => (c.web && (c.web.title || c.web.uri)) || '').filter(Boolean))].slice(0, 3);
  if (mentor && texto && fontes.length) texto += `\n\nFontes: ${fontes.join(', ')}.`;
  if (/^\[?IGNORAR\]?\.?$/i.test(texto) || /^\[IGNORAR\]/i.test(texto)) return json({ texto: '', ignorar: true });
  // já devolve a voz do primeiro trecho: o Sol começa a falar em poucos segundos
  const info = { modelo: r.modelo, t_texto: tTexto };
  if (texto && b.voz && (NUVEM_LONGA || Date.now() - inicio < 7600)) {
    const corte = corteInicial(texto), t1 = Date.now();
    const a = await falar(texto.slice(0, corte), b.voz, chave, NUVEM_LONGA ? Date.now() + 5000 : Math.min(Date.now() + 4500, inicio + 9400));
    info.t_voz = Date.now() - t1;
    if (a) return json({ texto, corte, ...a, ...info });
    return json({ texto, semVoz: true, ...info });   // a voz do Google não veio: o app fala com a voz do aparelho na hora
  }
  return json({ texto, ...info });
};

export default {
  async fetch(request, env) {
    ENV = env || {};
    try { return await responder(request); }
    catch (e) { return new Response(JSON.stringify({ texto: '' }), { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }); }
  }
};
