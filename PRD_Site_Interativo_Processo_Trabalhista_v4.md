# PRD v4 — Site Interativo “Como funciona um processo trabalhista”

**Versão:** v4  
**Formato:** Markdown  
**Produto:** Site educativo interativo sobre processo trabalhista individual  
**Escopo:** Reclamação trabalhista individual em linguagem cidadã  
**Status:** Documento-base para desenvolvimento, UX, conteúdo, validação jurídica e testes

---

## 1. Visão do produto

Criar um site educativo, interativo, acessível e responsivo para explicar, em linguagem simples, como funciona uma reclamação trabalhista individual na Justiça do Trabalho.

O produto será estruturado em camadas:

```text
Home simples
↓
Fluxograma mestre
↓
8 subfluxogramas internos
↓
Cards explicativos
↓
Simulação guiada
↓
Glossário
↓
Resumo final
↓
Vídeos educativos em fase futura
```

O objetivo não é esgotar o processo do trabalho. O objetivo é permitir que uma pessoa leiga compreenda o caminho geral de um processo trabalhista individual.

---

## 2. Escopo jurídico do produto

### 2.1. Escopo coberto

O produto explica, de forma educativa e simplificada, o caminho geral de uma reclamação trabalhista individual, incluindo:

- início da reclamação;
- petição inicial;
- distribuição;
- notificação do reclamado;
- audiência;
- comparecimento das partes;
- tentativa de conciliação;
- defesa;
- instrução;
- provas;
- perícia, quando necessária;
- alegações finais;
- sentença;
- recurso em visão simplificada;
- trânsito em julgado;
- liquidação;
- execução;
- encerramento.

### 2.2. Escopo não coberto

O produto não pretende cobrir integralmente:

- ações coletivas;
- dissídio coletivo;
- mandado de segurança;
- ação rescisória;
- execução fiscal;
- procedimentos especiais;
- incidentes processuais complexos;
- todas as hipóteses recursais;
- peculiaridades de cada Tribunal Regional do Trabalho;
- cálculos trabalhistas;
- estratégia processual;
- análise de caso individual;
- consulta processual real.

### 2.3. Nível de fidelidade jurídica

O conteúdo deve representar o fluxo geral de uma reclamação trabalhista individual de forma educativa, simplificada e segura.

Não deve tentar representar todas as exceções processuais.

Quando uma etapa puder variar, o texto deve usar linguagem condicional:

```text
Pode ocorrer...
Em geral...
Conforme o caso...
O processo pode seguir para...
A Justiça pode analisar...
```

Evitar frases absolutas:

```text
O juiz vai...
A empresa será obrigada...
Você tem direito...
Você deve pedir...
```

---

## 3. Não objetivos do produto

Este site não tem como objetivo:

- orientar juridicamente casos individuais;
- substituir atendimento da Justiça do Trabalho;
- substituir advogado, sindicato ou Defensoria;
- ensinar processo do trabalho em nível acadêmico completo;
- cobrir todas as exceções legais;
- consultar processos reais;
- gerar documentos processuais;
- calcular verbas trabalhistas;
- prever resultado de processos;
- sugerir estratégia ao reclamante ou ao reclamado.

---

## 4. Objetivo principal

Permitir que uma pessoa leiga consiga entender:

1. como o processo começa;
2. para que serve a audiência;
3. o que acontece quando há acordo;
4. o que acontece quando não há acordo;
5. por que existe fase de provas;
6. o que é sentença;
7. por que pode haver recurso;
8. o que é execução;
9. quais são os principais desfechos possíveis.

---

## 5. Problema

O processo trabalhista é difícil para o cidadão comum porque combina:

- termos técnicos;
- etapas condicionais;
- linguagem jurídica;
- múltiplos caminhos;
- consequências diferentes conforme comparecimento, acordo, provas, recurso e pagamento;
- pouca visualização clara do início ao fim.

O problema central é de **compreensão pública**, não apenas de informação jurídica.

---

## 6. Proposta de valor

### Para o cidadão

> Entender o caminho de um processo trabalhista de forma visual, simples e segura.

### Para jovens e estudantes

> Aprender por fluxogramas, simulação e linguagem cidadã.

### Para instituições

> Usar uma ferramenta educativa padronizada em campanhas, eventos, escolas e ações de cidadania.

---

## 7. Personas

### Persona 1 — Cidadão leigo

Quer entender o que acontece em um processo trabalhista sem precisar conhecer termos jurídicos.

**Jornada principal:**

```text
Home → Começar simulação → Responder decisões → Ver resumo final
```

**Critério de sucesso:**

> Consegue explicar que o processo pode passar por audiência, acordo, provas, sentença e cumprimento.

### Persona 2 — Jovem ou estudante

Quer aprender de forma visual, rápida e interativa.

**Jornada principal:**

```text
Home → Explorar fluxograma → Abrir cards → Fazer simulação
```

**Critério de sucesso:**

> Reconhece as principais fases do processo e entende os desfechos básicos.

### Persona 3 — Educador, servidor ou comunicador

Quer usar o site em aula, palestra, feira, evento ou campanha.

**Jornada futura:**

```text
Home → Modo apresentação → Fluxograma mestre → Subfluxogramas → Vídeos
```

**Critério de sucesso:**

> Consegue usar o site como roteiro visual de explicação pública.

---

## 8. Matriz etapa → objetivo pedagógico

| Etapa | O usuário deve entender |
|---|---|
| Problema trabalhista | Que o processo começa quando alguém acredita que houve violação de direito trabalhista |
| Petição inicial | Que a reclamação formal apresenta fatos, pedidos e valores |
| Distribuição | Que o processo recebe número e é encaminhado a uma Vara do Trabalho |
| Notificação | Que a outra parte precisa ser comunicada sobre a ação e audiência |
| Audiência | Que é um momento central para presença das partes, tentativa de acordo e atos processuais |
| Comparecimento do reclamante | Que a ausência pode levar ao arquivamento |
| Comparecimento do reclamado | Que a ausência pode gerar revelia, conforme o caso |
| Conciliação | Que as partes podem resolver o conflito por acordo |
| Defesa | Que o reclamado apresenta sua versão e documentos |
| Provas e instrução | Que o juiz reúne elementos para compreender os fatos |
| Perícia | Que um especialista pode analisar questões técnicas |
| Alegações finais | Que as partes apresentam seus últimos argumentos |
| Sentença | Que o juiz decide os pedidos |
| Recurso | Que a decisão pode ser revista pelo Tribunal |
| Trânsito em julgado | Que a decisão se torna definitiva |
| Liquidação | Que os valores podem ser calculados |
| Execução | Que a decisão ou acordo deve ser cumprido |
| Encerramento | Que o processo termina após cumprimento ou desfecho aplicável |

---

## 9. Princípios do produto

### 9.1. Clareza antes de completude

O objetivo é ensinar o caminho geral, não esgotar o processo trabalhista.

### 9.2. Conteúdo em camadas

Cada etapa deve ter três níveis de profundidade:

#### Nível 1 — Entenda em 30 segundos

Resumo ultracurto.

Exemplo:

```text
A audiência é o momento em que as partes comparecem e a Justiça tenta acordo.
```

#### Nível 2 — Entenda melhor

Card com:

- o que é;
- quem participa;
- o que acontece;
- para onde vai depois.

#### Nível 3 — Ver detalhe técnico

Conteúdo opcional com:

- termo técnico;
- observações;
- base legal validada;
- avisos de variação.

---

## 10. Restrições jurídicas e éticas

O sistema não deve:

- avaliar caso individual;
- recomendar estratégia processual;
- calcular valores;
- gerar petição;
- dizer se o usuário tem direito;
- pedir CPF;
- pedir número de processo;
- coletar relatos reais;
- induzir expectativa de resultado;
- substituir orientação jurídica.

Aviso obrigatório:

```text
Material educativo. O fluxo pode variar conforme o caso. Este conteúdo não substitui orientação jurídica.
```

---

## 11. Matriz de risco por funcionalidade

| Funcionalidade | Risco jurídico | Mitigação |
|---|---:|---|
| Fluxograma mestre | Baixo | Aviso educativo e linguagem geral |
| Subfluxogramas | Baixo/médio | Revisão jurídica e linguagem condicional |
| Cards explicativos | Médio | Revisão jurídica e editorial |
| Glossário | Médio | Definições genéricas e validadas |
| Simulação guiada | Médio/alto | Caso fictício, sem dados reais e sem recomendação |
| Base legal opcional | Médio | Revisão formal antes da publicação |
| Vídeos | Médio | Roteiro validado e aviso educativo |
| Campo livre de texto | Alto | Não incluir no MVP |
| Cálculo de verbas | Alto | Fora do escopo |
| Chatbot jurídico | Alto | Fora do MVP |

---

## 12. Simulação segura

A simulação deve usar apenas situações genéricas e fictícias.

O sistema não deve:

- perguntar fatos reais do usuário;
- estimar chance de sucesso;
- indicar estratégia;
- sugerir pedidos;
- armazenar relatos pessoais;
- recomendar conduta processual.

Cada decisão deve explicar uma consequência processual geral, nunca uma recomendação individual.

---

## 13. Escopo do MVP

### 13.1. MVP obrigatório

1. Home;
2. fluxograma mestre;
3. 8 subfluxogramas;
4. cards explicativos;
5. glossário básico;
6. simulação guiada simples;
7. resumo final;
8. página Sobre (com declaração de acessibilidade, política de privacidade e créditos);
9. aviso educativo fixo;
10. responsividade mobile-first;
11. alternativa textual dos fluxogramas;
12. estrutura de conteúdo em JSON;
13. revisão jurídica/editorial inicial.

### 13.2. Fora do MVP

Ficam para versões futuras:

- vídeos integrados;
- quiz;
- certificado;
- modo apresentação;
- modo educador;
- painel administrativo;
- analytics avançado;
- exportação em PDF;
- narração em áudio;
- Libras;
- integração com chatbot;
- integração com canais institucionais.

---

## 14. Inventário de conteúdo validável

| Conteúdo | Obrigatório no MVP? | Responsável sugerido | Status inicial |
|---|---:|---|---|
| Fluxograma mestre | Sim | Jurídico + Comunicação | A revisar |
| 8 subfluxogramas | Sim | Jurídico + UX | A revisar |
| Cards explicativos | Sim | Conteúdo + Jurídico | A revisar |
| Glossário | Sim | Jurídico + Linguagem cidadã | A revisar |
| Simulação | Sim | Produto + Jurídico | A revisar |
| Versões textuais acessíveis | Sim | UX + Acessibilidade | A revisar |
| Vídeos | Não | Comunicação | Futuro |
| Quiz | Não | Educação | Futuro |
| Modo apresentação | Não | Produto + Comunicação | Futuro |
| Painel admin | Não | Produto + TI | Futuro |

---

## 15. Jornadas do usuário

### Jornada A — Entender rapidamente

```text
Home
↓
Ver fluxograma completo
↓
Clicar em uma fase
↓
Ler resumo
↓
Sair com visão geral
```

### Jornada B — Aprender passo a passo

```text
Home
↓
Começar simulação
↓
Responder decisões
↓
Ver consequências
↓
Receber resumo final
```

### Jornada C — Estudar uma fase específica

```text
Home
↓
Explorar por etapas
↓
Abrir subfluxograma
↓
Ler cards
↓
Consultar glossário
```

### Jornada D — Uso educacional futuro

```text
Home
↓
Modo apresentação
↓
Fluxograma mestre
↓
Subfluxogramas
↓
Vídeos
↓
Quiz
```

---

## 16. Arquitetura da experiência

### 16.1. Home

Elementos:

- título;
- subtítulo;
- ilustração leve;
- botões principais;
- aviso educativo.

Botões:

```text
Começar simulação
Ver fluxograma completo
Explorar por etapas
```

Critério:

> O usuário deve entender o propósito do site em até 10 segundos.

### 16.2. Fluxograma mestre

Deve apresentar 5 blocos:

```text
1. Início do processo
2. Audiência inicial
3. Provas e instrução
4. Decisão do juiz
5. Depois da sentença
```

Funcionalidades:

- clicar em fase;
- abrir resumo lateral;
- abrir subfluxograma;
- abrir versão textual;
- iniciar simulação;
- mostrar legenda.

### 16.3. Subfluxogramas

Cada subfluxograma deve ter:

- título;
- subtítulo;
- diagrama visual;
- versão textual;
- cards;
- glossário contextual;
- navegação para etapa anterior e próxima.

Botões obrigatórios:

```text
Voltar ao mapa geral
Ver como lista
Continuar para próxima fase
Iniciar simulação
```

---

## 17. Estrutura de rotas

```text
/
 /mapa-do-processo
 /simulacao
 /glossario
 /etapas/inicio-e-peticao-inicial
 /etapas/notificacao-do-reclamado
 /etapas/audiencia-inicial
 /etapas/defesa-e-contestacao
 /etapas/provas-e-instrucao
 /etapas/sentenca
 /etapas/recurso-trabalhista
 /etapas/liquidacao-e-execucao
 /sobre
```

---

## 18. Wireframes textuais

### 18.1. Home

```text
Topo:
- logotipo/nome do projeto
- navegação: Mapa | Simulação | Glossário | Sobre

Hero:
- título: Como funciona um processo trabalhista
- subtítulo: Entenda o caminho de uma ação trabalhista do início ao encerramento
- CTA primário: Começar simulação
- CTA secundário: Ver fluxograma completo
- CTA terciário: Explorar por etapas

Corpo:
- 5 cards resumidos das fases
- explicação curta do objetivo educativo

Rodapé:
- aviso educativo
- links institucionais
```

### 18.2. Fluxograma mestre

```text
Topo:
- título
- aviso educativo discreto
- botões: Simulação | Glossário | Ver como lista

Corpo desktop:
- fluxograma visual em 5 blocos
- legenda visual
- zoom/ajuste de visualização

Painel lateral:
- fase selecionada
- resumo em 30 segundos
- botão Abrir subfluxograma
- termos relacionados

Mobile:
- timeline vertical com 5 blocos
- cada bloco expansível
- botão Ver mapa visual como opção secundária
```

### 18.3. Página de subfluxograma

```text
Topo:
- breadcrumb
- título da etapa
- subtítulo
- botões: Voltar ao mapa | Ver como lista | Iniciar simulação

Corpo:
- fluxograma visual no desktop
- timeline vertical no mobile
- cards clicáveis

Painel/card:
- resumo
- o que é
- quem participa
- o que acontece
- próximos caminhos
- glossário relacionado
```

### 18.4. Simulação

```text
Topo:
- progresso da simulação
- botão Voltar
- botão Reiniciar

Corpo:
- contexto curto
- pergunta principal
- opções de resposta
- explicação após escolha
- próximo passo

Rodapé:
- aviso educativo
```

### 18.5. Resumo final

```text
Topo:
- título do resultado
- tipo de desfecho

Corpo:
- caminho percorrido
- decisões tomadas
- explicação simples do resultado
- etapas relacionadas

Ações:
- Reiniciar simulação
- Voltar ao mapa
- Ver glossário
```

### 18.6. Glossário

```text
Topo:
- título: Glossário
- subtítulo: Termos do processo trabalhista explicados em linguagem simples
- campo de busca acessível com label visível

Corpo:
- lista de termos em ordem alfabética
- cada termo exibe:
  - nome do termo (destaque)
  - definição simples (máx. 2 frases)
  - termos relacionados como links
  - definição técnica expansível (opcional, clique para ver)
- navegação por letra (A–Z) como atalho

Mobile:
- busca fixada no topo durante rolagem
- termos em lista vertical com separadores
- navegação por letra colapsada em dropdown

Rodapé:
- aviso educativo
- link para Sobre
```

### 18.7. Sobre

```text
Topo:
- título: Sobre este site
- subtítulo curto

Corpo:
- bloco 1: O que é este site
  - descrição do objetivo educativo
  - declaração explícita de que não substitui orientação jurídica

- bloco 2: Quem fez
  - Equipe de Comunicação do TRT 18°
  - link institucional do tribunal

- bloco 3: Acessibilidade
  - nível de conformidade buscado: WCAG 2.2 AA
  - canal para reportar problemas de acessibilidade (e-mail institucional)

- bloco 4: Privacidade
  - resumo de uma linha sobre coleta de dados
  - link para a política de privacidade completa

- bloco 5: Contato e feedback
  - canal de contato institucional (e-mail do TRT 18°)
  - sem formulário com dados pessoais

- bloco 6: Atualização do conteúdo
  - data da última revisão do conteúdo

Rodapé:
- aviso educativo padrão
```

---

## 19. Fluxograma mestre

### Bloco 1 — Início do processo

1. Problema trabalhista;
2. Petição inicial / entrar com a ação;
3. Distribuição do processo;
4. Notificação do reclamado.

Mensagem:

```text
Aqui o processo começa e a outra parte é avisada.
```

### Bloco 2 — Audiência inicial

1. Audiência;
2. O reclamante compareceu?
   - não → arquivamento;
   - sim → segue;
3. O reclamado compareceu?
   - não → revelia;
   - sim → segue;
4. Tentativa inicial de acordo;
5. Houve acordo?
   - sim → acordo homologado;
   - não → defesa.

Mensagem:

```text
Aqui a Justiça tenta resolver o conflito logo no começo.
```

### Bloco 3 — Provas e instrução

1. Manifestação do reclamante;
2. instrução processual;
3. documentos, depoimentos e testemunhas;
4. precisa de perícia?
   - sim → perícia;
   - não → segue;
5. alegações finais.

Mensagem:

```text
Aqui o juiz reúne informações para entender melhor o que aconteceu.
```

### Bloco 4 — Decisão do juiz

1. Nova tentativa de acordo;
2. houve acordo final?
   - sim → acordo homologado;
   - não → sentença;
3. sentença do juiz.

Mensagem:

```text
Se não houver acordo, o juiz decide.
```

### Bloco 5 — Depois da sentença

1. Alguma parte recorreu?
   - sim → recurso;
   - não → trânsito em julgado;
2. julgamento do recurso;
3. trânsito em julgado;
4. liquidação;
5. execução;
6. houve pagamento espontâneo?
   - sim → encerramento;
   - não → medidas de execução;
7. pagamento / cumprimento forçado;
8. encerramento.

Mensagem:

```text
Depois da decisão, o processo pode continuar até que a obrigação seja cumprida.
```

---

## 20. Os 8 subfluxogramas

### Subfluxograma 1 — Início e petição inicial

1. Problema trabalhista;
2. busca de orientação;
3. reunião de documentos;
4. definição dos pedidos;
5. petição inicial;
6. a petição está completa?
   - não → ajustes / complementação;
   - sim → protocolo;
7. protocolo da ação;
8. distribuição do processo;
9. segue para notificação.

### Subfluxograma 2 — Notificação do reclamado

1. Processo distribuído;
2. secretaria da Vara;
3. emissão da notificação;
4. envio da comunicação;
5. a notificação foi recebida regularmente?
   - não → nova tentativa;
   - sim → ciência;
6. ciência do reclamado;
7. preparação da defesa;
8. audiência designada.

### Subfluxograma 3 — Audiência inicial

1. Audiência;
2. reclamante compareceu?
   - não → arquivamento;
   - sim → segue;
3. reclamado compareceu?
   - não → revelia;
   - sim → segue;
4. tentativa inicial de acordo;
5. houve acordo?
   - sim → acordo homologado;
   - não → defesa;
6. apresentação da defesa;
7. segue para provas.

### Subfluxograma 4 — Defesa / contestação

1. Recebimento da ação;
2. análise dos pedidos;
3. reunião de documentos;
4. preparação da defesa;
5. apresentação da contestação;
6. juntada de documentos;
7. há preliminares ou impugnações?
   - sim → argumentos processuais;
   - não → segue;
8. manifestação do reclamante;
9. segue para instrução.

### Subfluxograma 5 — Provas e instrução

1. Início da instrução;
2. depoimentos das partes;
3. documentos;
4. testemunhas;
5. é necessária perícia?
   - sim → perícia técnica → laudo → manifestação;
   - não → segue;
6. encerramento da instrução;
7. alegações finais;
8. segue para acordo final e sentença.

### Subfluxograma 6 — Sentença do juiz

1. Fim da fase de provas;
2. alegações finais;
3. nova tentativa de acordo;
4. houve acordo final?
   - sim → acordo homologado;
   - não → análise do juiz;
5. análise do juiz;
6. sentença;
7. resultado possível:
   - procedente;
   - improcedente;
   - parcialmente procedente;
8. intimação das partes;
9. pode haver recurso.

### Subfluxograma 7 — Recurso trabalhista

1. Sentença publicada;
2. alguma parte quer recorrer?
   - não → trânsito em julgado;
   - sim → segue;
3. verificação de prazo e requisitos;
4. apresentação do recurso;
5. contrarrazões;
6. envio ao Tribunal;
7. julgamento do recurso;
8. resultado:
   - mantém;
   - modifica;
   - anula ou determina novo exame;
9. segue para trânsito em julgado.

### Subfluxograma 8 — Liquidação e execução

1. Trânsito em julgado;
2. liquidação;
3. definição do valor;
4. início da execução;
5. houve pagamento espontâneo?
   - sim → pagamento registrado → encerramento;
   - não → medidas de execução;
6. medidas de execução;
7. busca de valores ou bens;
8. pagamento / cumprimento forçado;
9. encerramento.

---

## 21. Simulação guiada como máquina de estados

### 21.1. Estados obrigatórios

A máquina de estados tem 15 estados. O botão "Não sei" **não é um estado** — é um comportamento de UI que exibe um painel de ajuda contextual e retorna o usuário à mesma pergunta sem avançar na árvore.

```text
sim_inicio
sim_reclamante_compareceu
sim_reclamado_compareceu
sim_acordo_inicial
sim_pericia
sim_acordo_final
sim_sentenca
sim_recurso
sim_pagamento
final_arquivamento
final_acordo_inicial
final_acordo_final
final_sentenca_sem_recurso
final_sentenca_com_recurso
final_execucao_espontanea
final_execucao_forcada
```

### 21.2. Árvore mínima

O botão "Não sei" está disponível em qualquer estado de decisão que possua `helpContent` definido. Ele não aparece na árvore de transições pois não altera o estado atual.

```text
sim_inicio
↓
sim_reclamante_compareceu
├── Não → final_arquivamento
└── Sim → sim_reclamado_compareceu
       ├── Não → sim_acordo_inicial
       └── Sim → sim_acordo_inicial
              ├── Sim → final_acordo_inicial
              └── Não → sim_pericia
                     ├── Sim → sim_acordo_final
                     └── Não → sim_acordo_final
                            ├── Sim → final_acordo_final
                            └── Não → sim_sentenca
                                   ↓
                                sim_recurso
                                ├── Não → sim_pagamento
                                └── Sim → sim_pagamento
                                       ├── Sim → final_execucao_espontanea
                                       └── Não → final_execucao_forcada
```

### 21.3. Modelo de estado

O campo `helpContent` é opcional. Quando presente, o componente de simulação renderiza automaticamente o botão "Não sei". Ao clicar, um painel de ajuda é exibido sem avançar o estado. Ao fechar o painel, o usuário retorna à mesma pergunta.

```json
{
  "id": "sim_reclamante_compareceu",
  "type": "decision",
  "question": "O reclamante compareceu à audiência?",
  "context": "Na audiência, a presença do reclamante é verificada.",
  "helpContent": {
    "title": "O que é comparecer à audiência?",
    "explanation": "Comparecer significa estar presente na data e hora marcadas pela Justiça do Trabalho.",
    "consequence": "A ausência do reclamante pode levar ao arquivamento da reclamação, conforme o caso.",
    "glossaryTerms": ["audiência", "arquivamento"]
  },
  "options": [
    {
      "label": "Sim",
      "next": "sim_reclamado_compareceu",
      "impact": "O processo segue para verificar a presença do reclamado."
    },
    {
      "label": "Não",
      "next": "final_arquivamento",
      "impact": "A ausência pode levar ao arquivamento do processo."
    }
  ]
}
```

### 21.4. Regra de geração do botão "Não sei"

```text
- Estado possui helpContent → botão "Não sei" aparece automaticamente
- Estado não possui helpContent → botão "Não sei" não é exibido
- Clicar em "Não sei" → abre painel de ajuda (não avança o estado)
- Fechar painel → retorna à mesma pergunta
```

---

## 22. Persistência local

No MVP, o sistema tenta salvar localmente no navegador:

- etapa atual da simulação;
- escolhas feitas;
- preferência de linguagem;
- preferência visual/lista.

Não deve enviar esses dados para servidor.

### 22.1. Estratégia de persistência em camadas

A persistência é **melhor esforço** — não garantida em todos os contextos de navegador. iOS Safari em modo de navegação privada lança `QuotaExceededError` ao tentar escrever em `localStorage` sem aviso ao usuário.

A implementação deve usar fallback silencioso em camadas:

```text
1. tenta localStorage (persiste entre sessões)
2. se falhar → tenta sessionStorage (persiste na sessão atual)
3. se falhar → mantém estado em memória (simulação funciona, sem persistência)
```

Todo acesso a `localStorage` e `sessionStorage` deve ser encapsulado em um wrapper com tratamento de erro — nunca acessado diretamente nos componentes.

### 22.2. Impacto na UX

- o prompt "Deseja continuar de onde parou?" (seção 33.4) só deve ser exibido quando houver estado salvo recuperável;
- se nenhuma camada de persistência estiver disponível, a simulação começa do início sem mensagem de erro;
- o usuário nunca deve ver uma mensagem de falha de armazenamento.

---

## 23. Finais possíveis da simulação

1. Arquivamento;
2. acordo inicial;
3. acordo final;
4. sentença sem recurso;
5. sentença com recurso;
6. execução com pagamento espontâneo;
7. execução forçada.

Cada final deve conter:

- título;
- caminho percorrido;
- decisões tomadas;
- explicação simples;
- aviso educativo;
- botão reiniciar;
- botão voltar ao mapa.

---

## 24. Cards explicativos

### 24.1. Campos obrigatórios

Cada card deve conter:

- título simples;
- título técnico;
- resumo de 30 segundos;
- explicação cidadã;
- quem participa;
- o que acontece;
- próximos caminhos;
- termos relacionados;
- aviso de variação;
- status de revisão.

### 24.2. Campos opcionais

- base legal;
- exemplo prático;
- vídeo relacionado;
- pergunta de quiz;
- explicação técnica avançada.

### 24.3. Conteúdo mínimo por nó

```json
{
  "id": "audiencia",
  "title": "Audiência",
  "shortSummary": "Momento em que as partes comparecem e a Justiça tenta acordo.",
  "whatIs": "A audiência é uma reunião formal na Justiça do Trabalho.",
  "whoParticipates": ["reclamante", "reclamado", "juiz"],
  "whatCanHappen": ["acordo", "defesa", "arquivamento", "revelia"],
  "nextSteps": ["provas", "fim por acordo"],
  "glossaryTerms": ["audiência", "conciliação"],
  "textAlternative": "Versão textual acessível."
}
```

---

## 25. Critério de conteúdo pronto

Uma etapa só pode ser publicada se tiver:

```text
título simples
título técnico
explicação cidadã
próximos caminhos
termos relacionados
alternativa textual
status aprovado
data de revisão
responsável pela revisão
```

---

## 26. Qualidade editorial

Cada texto de card deve:

- ter no máximo 80 palavras no modo simples;
- explicar a etapa em até 3 frases;
- evitar mais de 1 termo técnico sem explicação;
- usar voz ativa;
- evitar frases absolutas;
- indicar próximo caminho;
- conter aviso de variação quando necessário.

---

## 27. Glossário

Termos obrigatórios:

- reclamação trabalhista;
- reclamante;
- reclamado;
- petição inicial;
- distribuição;
- notificação;
- audiência;
- conciliação;
- acordo homologado;
- arquivamento;
- revelia;
- defesa;
- contestação;
- instrução;
- provas;
- testemunha;
- perícia;
- laudo pericial;
- alegações finais;
- sentença;
- procedente;
- improcedente;
- parcialmente procedente;
- recurso;
- contrarrazões;
- Tribunal;
- trânsito em julgado;
- liquidação;
- execução;
- pagamento espontâneo;
- medidas de execução;
- encerramento.

Modelo:

```json
{
  "term": "Reclamante",
  "simpleDefinition": "Pessoa que entra com a ação trabalhista.",
  "technicalDefinition": "Parte autora da reclamação trabalhista.",
  "example": "Exemplo: trabalhador que pede verbas que acredita não terem sido pagas.",
  "relatedTerms": ["reclamação trabalhista", "petição inicial"]
}
```

---

## 28. Microcopy padrão

### Botões

```text
Começar
Voltar ao mapa
Ver etapa anterior
Próxima etapa
Ver como lista
Ver explicação simples
Ver detalhe técnico
Reiniciar simulação
Continuar
Não sei
```

### Mensagens

```text
Você está aqui.
Este caminho pode variar conforme o caso.
Esta é uma explicação educativa.
Não entendi esta etapa.
Vamos explicar de outro jeito.
```

### Feedback

```text
Você entendeu esta etapa?
[Entendi]
[Ainda tenho dúvida]
```

Se “ainda tenho dúvida”:

```text
Ver explicação mais simples
Ver glossário
Ver exemplo prático
Voltar ao fluxograma
```

---

## 29. Tom e diretrizes visuais

### 29.1. Diretrizes visuais

- Não representar trabalhador como vítima indefesa.
- Não representar empregador como vilão.
- Não usar expressões dramáticas.
- Não usar martelo de juiz de forma excessiva.
- Priorizar ícones neutros: documento, calendário, conversa, acordo, tribunal, calculadora.
- Representar diversidade de pessoas sem estereótipos.
- Manter aparência institucional, leve e educativa.

### 29.2. Tom em situações sensíveis

O texto deve explicar a consequência sem assustar, culpar ou constranger.

Exemplo ruim:

```text
Se você faltar, perde o processo.
```

Exemplo adequado:

```text
A ausência do reclamante pode levar ao arquivamento da reclamação, conforme o caso.
```

---

## 30. Acessibilidade

### 30.1. Meta

Buscar conformidade mínima com **WCAG 2.2 nível AA**.

### 30.2. Requisitos gerais

- `<html lang="pt-BR">` definido em `app/layout.tsx` (WCAG 3.1.1 — nível A);
- navegação por teclado;
- foco visível;
- contraste adequado;
- textos alternativos;
- não depender apenas de cor;
- botões grandes;
- linguagem simples;
- versão textual de todo fluxograma;
- respeitar `prefers-reduced-motion` em todas as animações.

### 30.3. Princípio arquitetural — progressive enhancement

O fluxograma visual (React Flow) é uma camada de enriquecimento, não a estrutura base.

A ordem de implementação e de importância é:

```text
1. Versão textual em lista (sempre presente no DOM)
2. Canvas visual sobreposto via CSS para telas maiores
```

Isso significa que:

- a versão textual é o componente primário, sempre acessível por leitor de tela e teclado;
- o canvas visual é opcional e jamais deve ser o único meio de acesso ao conteúdo;
- o React Flow não precisa ser 100% acessível por si só — a versão texto cumpre esse papel.

Essa decisão deve ser tomada no **Sprint 1**, não no Sprint 5. Reverter uma arquitetura visual-first para texto-first no final do projeto gera retrabalho alto.

### 30.4. Checklist por componente

#### Fluxograma

- versão textual em lista é o componente base (DOM);
- canvas visual é sobreposto via CSS (`@media` ou classe condicional);
- `aria-hidden="true"` no canvas quando a versão texto estiver ativa;
- botão "Ver como lista / Ver como mapa" sempre visível;
- não depender apenas de cor;
- leitura em ordem lógica na versão textual.

#### Card

- fechamento por tecla Esc;
- foco retorna ao botão que abriu;
- título identificado para leitor de tela;
- conteúdo dividido por subtítulos.

#### Simulação

- pergunta lida corretamente;
- botões com labels claros;
- progresso anunciado;
- consequência da resposta anunciada.

#### Glossário

- busca acessível;
- termos navegáveis por teclado;
- definições curtas;
- links relacionados identificáveis.

---

## 31. Mobile-first

### 31.1. Regra principal

Em telas menores que 768px:

- não usar canvas grande como visual padrão;
- exibir fluxo como timeline vertical;
- cada nó vira um card expansível;
- decisões aparecem como perguntas;
- botões “Sim/Não” aparecem empilhados;
- “ver mapa visual” fica como opção secundária;
- não exigir pinch zoom.

### 31.2. Regras de interface mobile

- botões com mínimo de 44 px de altura;
- cards curtos;
- leitura de card em até 15 segundos;
- navegação por rolagem vertical;
- botão fixo para voltar;
- progressão clara.

### 31.3. Desktop

No desktop:

- usar fluxograma visual amplo;
- painel lateral;
- zoom;
- cards;
- navegação por blocos.

### 31.4. Projetor e uso educacional presencial

O plano de lançamento prevê uso em eventos, escolas e campanhas — contextos onde o site é projetado em tela grande para uma plateia.

Breakpoint de referência: `≥ 1280px` com viewport height reduzida (tipicamente `≤ 768px` em projetores 16:9).

Requisitos para esse contexto:

- tamanho mínimo de fonte no fluxograma: 16px visível a ~3 metros de distância;
- botões e nós do fluxograma com área clicável mínima de 48px;
- sem dependência de hover para revelar informações essenciais — projetor não tem cursor visível para a plateia;
- fluxograma mestre deve caber na tela sem scroll em resolução 1280×720;
- contraste mínimo 4.5:1 mesmo em ambientes com luz ambiente alta;
- nomes das fases e rótulos das arestas legíveis sem zoom adicional.

---

## 32. Design system mínimo

### 32.1. Componentes

- botão primário;
- botão secundário;
- botão de texto;
- card de etapa;
- card de decisão;
- alerta educativo;
- badge de fase;
- tooltip de glossário;
- modal;
- painel lateral;
- timeline mobile;
- barra de progresso;
- resumo final.

### 32.2. Cores por função

Valores de referência — validar contraste com ferramenta (ex: WebAIM Contrast Checker) antes de finalizar. Contraste mínimo exigido: 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA).

| Função | Nome | Hex sugerido | Uso com texto |
|---|---|---|---|
| Início e etapas comuns | Azul | `#1D4ED8` | Branco |
| Decisões | Âmbar | `#B45309` | Branco |
| Alertas e instrução | Laranja | `#C2410C` | Branco |
| Sentença | Roxo | `#6D28D9` | Branco |
| Acordo ou encerramento | Verde | `#15803D` | Branco |
| Recurso e execução | Verde-azulado | `#0E7490` | Branco |
| Arquivamento | Cinza | `#4B5563` | Branco |
| Atenção | Vermelho suave | `#B91C1C` | Branco |

Regra: as cores são usadas como fundo de nós e badges. Texto sobre fundo colorido deve ser sempre branco (`#FFFFFF`). Texto sobre fundo branco deve usar `#1F2937` (cinza escuro) — nunca preto puro.

### 32.3. Regras visuais

- cantos arredondados;
- alto contraste;
- ícones simples;
- pouco texto por caixa;
- espaçamento generoso;
- consistência entre fluxograma mestre e subfluxos.

### 32.5. Tipografia

- família de fonte: fonte sem serifa de alta legibilidade (ex: Inter, Source Sans 3 ou fonte do sistema via `font-family: system-ui`);
- tamanho mínimo de corpo: 16px em mobile, 17px em desktop;
- tamanho mínimo de botões e labels: 14px;
- `line-height` mínimo: 1.5 para parágrafos, 1.3 para títulos;
- escala de tamanhos definida em `rem` — nunca em `px` fixo — para respeitar o zoom do navegador;
- contraste de texto sobre fundo: mínimo 4.5:1 (WCAG AA) para corpo, 3:1 para textos grandes;
- sem uso de `font-weight` abaixo de 400 para texto de leitura;
- a fonte escolhida deve ter suporte a caracteres especiais do português (ç, ã, á, etc.).

**Carregamento de fontes:**

Usar obrigatoriamente `next/font/google` (ou `next/font/local` para fontes próprias). O `next/font/google` faz o download da fonte em tempo de build e a serve a partir da infraestrutura do TRT 18° — sem nenhuma requisição aos servidores do Google em runtime. Isso mantém a soberania de dados e elimina o risco de LGPD associado ao carregamento externo de fontes.

```ts
// app/layout.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

**Nunca** carregar fontes via `<link>` para `fonts.googleapis.com` diretamente no HTML.

### 32.7. Favicon e ícone de homescreen

O site deve ter identidade visual completa ao ser salvo ou compartilhado:

- `app/icon.png` — favicon (32×32px e 192×192px, formato PNG);
- `app/apple-icon.png` — ícone para iOS homescreen (180×180px);
- `app/manifest.ts` — web manifest com nome, descrição curta e cor de tema.

O design do ícone deve ser aprovado pela Equipe de Comunicação do TRT 18° antes do Sprint 6.

### 32.6. Tooltip de glossário inline

Termos do glossário que aparecem no texto dos cards devem ser marcados visualmente (sublinhado pontilhado) e exibir uma definição rápida ao serem acionados.

**Acionamento:**

```text
Desktop: clique ou foco por teclado (não hover — hover não é acessível e não funciona em projetor)
Mobile: toque
Teclado: Tab para focar, Enter ou Espaço para abrir, Esc para fechar
```

**Conteúdo do tooltip:**

```text
- nome do termo
- definição simples (máx. 2 frases — mesma da seção 27)
- link "Ver no glossário" para a página /glossario#termo
```

**Comportamento:**

- tooltip abre como popover ancorado ao termo, não como modal de tela cheia;
- em mobile, se o popover não couber, abre como drawer inferior leve;
- foco retorna ao termo ao fechar;
- um único tooltip aberto por vez — abrir outro fecha o anterior;
- `aria-describedby` conecta o termo ao conteúdo do tooltip para leitores de tela.

### 32.4. Regras de animação

- toda animação implementada com Framer Motion deve verificar `useReducedMotion()` e suprimir ou reduzir o movimento quando a preferência estiver ativa;
- o projeto deve incluir regra CSS global como rede de segurança:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- animações não podem ser o único meio de transmitir informação (ex: progresso da simulação não pode depender apenas de animação para ser compreendido).

---

## 33. Estados de erro e fallback

### 33.1. Fluxograma não carrega

Mostrar:

```text
Não foi possível carregar o fluxograma visual.
Você pode continuar pela versão em lista.
```

Ações:

```text
[Ver como lista]
[Tentar novamente]
```

### 33.2. JSON com erro

Mostrar:

```text
Não conseguimos carregar esta etapa agora.
Tente novamente ou volte ao mapa geral.
```

### 33.3. Página não encontrada (404)

Arquivo Next.js: `app/not-found.tsx`

Mostrar:

```text
Página não encontrada.
O endereço que você acessou não existe ou foi movido.
```

Ações:

```text
[Voltar ao início]
[Ver mapa do processo]
```

Manter identidade visual do site, aviso educativo e navegação principal.

### 33.4. Erro genérico de aplicação

Arquivo Next.js: `app/error.tsx`

Mostrar:

```text
Algo deu errado.
Tente novamente ou volte ao início.
```

Ações:

```text
[Tentar novamente]
[Voltar ao início]
```

Não exibir mensagens técnicas de erro ao usuário. Registrar o erro no console para depuração.

### 33.6. Vídeo não carrega em versão futura

Mostrar:

```text
O vídeo não carregou.
Você pode ler a transcrição.
```

### 33.7. Usuário sai da simulação

Ao retornar, **somente se houver estado salvo recuperável**:

```text
Deseja continuar de onde parou?
[Continuar]
[Reiniciar]
```

Se não houver estado salvo (modo privado, storage indisponível, sessão expirada): iniciar simulação do início sem exibir prompt nem mensagem de erro.

---

## 34. Modelo de dados completo

### Node (fluxograma)

```json
{
  "id": "audiencia",
  "type": "step",
  "titleSimple": "Audiência",
  "titleTechnical": "Audiência trabalhista",
  "summary30s": "Momento em que as partes comparecem e a Justiça tenta acordo.",
  "citizenExplanation": "A audiência é uma reunião formal na Justiça do Trabalho em que as partes podem ser ouvidas e tentar resolver o conflito.",
  "technicalExplanation": "A audiência pode envolver tentativa de conciliação, apresentação de defesa, instrução e outros atos processuais.",
  "participants": ["reclamante", "reclamado", "juiz", "advogados", "servidores"],
  "possibleOutcomes": ["acordo", "defesa", "arquivamento", "revelia"],
  "glossaryTerms": ["audiência", "conciliação", "revelia"],
  "legalReferences": [],
  "videoRef": null,
  "riskLevel": "medium",
  "reviewStatus": "draft",
  "lastReviewedAt": null,
  "reviewedBy": null
}
```

### SimulationState (simulação)

```json
{
  "id": "sim_reclamante_compareceu",
  "type": "decision",
  "question": "O reclamante compareceu à audiência?",
  "context": "Na audiência, a presença do reclamante é verificada.",
  "helpContent": {
    "title": "O que é comparecer à audiência?",
    "explanation": "Comparecer significa estar presente na data e hora marcadas pela Justiça do Trabalho.",
    "consequence": "A ausência do reclamante pode levar ao arquivamento da reclamação, conforme o caso.",
    "glossaryTerms": ["audiência", "arquivamento"]
  },
  "options": [
    {
      "label": "Sim",
      "next": "sim_reclamado_compareceu",
      "impact": "O processo segue para verificar a presença do reclamado."
    },
    {
      "label": "Não",
      "next": "final_arquivamento",
      "impact": "A ausência pode levar ao arquivamento do processo."
    }
  ]
}
```

O campo `helpContent` é opcional. Quando ausente, o botão "Não sei" não é exibido para aquele estado.

### Flow

```json
{
  "id": "audiencia-inicial",
  "title": "Audiência inicial",
  "subtitle": "Primeiros acontecimentos na audiência trabalhista",
  "order": 3,
  "theme": "yellow",
  "description": "Explica o primeiro grande momento do processo.",
  "nodes": [],
  "edges": [],
  "textAlternative": []
}
```

### Edge

```json
{
  "from": "reclamante-compareceu",
  "to": "arquivamento",
  "label": "Não",
  "type": "negative",
  "explanation": "A ausência do reclamante pode levar ao arquivamento."
}
```

---

## 35. Governança jurídica e editorial

### 35.1. Responsáveis pelo conteúdo

| Papel | Responsável |
|---|---|
| Redação e revisão editorial | Equipe de Comunicação do TRT 18° |
| Revisão jurídica | Equipe de Comunicação do TRT 18° / área jurídica designada |
| Revisão de linguagem cidadã | Equipe de Comunicação do TRT 18° |
| Revisão de acessibilidade | Time de desenvolvimento + Equipe de Comunicação do TRT 18° |
| Aprovação final para publicação | Equipe de Comunicação do TRT 18° |

### 35.2. Revisão obrigatória

Todo conteúdo deve passar por:

1. revisão jurídica;
2. revisão de linguagem cidadã;
3. revisão de acessibilidade;
4. revisão de comunicação institucional.

### 35.3. Caminho crítico de conteúdo

O desenvolvimento dos Sprints 1 e 2 ocorre com **conteúdo placeholder** — dados fictícios estruturados no mesmo formato JSON final. Isso permite validar a arquitetura sem depender de aprovação jurídica.

O Sprint 3 (subfluxogramas e cards) só tem início quando:

```text
- nós dos Subfluxogramas 1, 2 e 3 estiverem com status "aprovado"
- glossário base (termos obrigatórios da seção 27) estiver com status "aprovado"
```

O Sprint 4 (simulação) só tem início quando:

```text
- simulation.json completo estiver com status "aprovado"
```

O conteúdo placeholder deve ser substituído por conteúdo aprovado antes do Sprint 6 (QA e beta).

### 35.4. Status

```text
draft
em revisão jurídica
em revisão editorial
aprovado
publicado
arquivado
```

### 35.5. Regra de publicação

Nenhum conteúdo jurídico deve ir ao ar sem status:

```text
aprovado
```

### 35.6. Checklist jurídico

Antes da publicação, verificar:

- a afirmação é genérica e educativa?
- evita aconselhamento individual?
- usa “pode ocorrer” quando há variação?
- evita promessa de resultado?
- não induz estratégia processual?
- termos técnicos estão corretos?
- conteúdo foi revisado por responsável jurídico?
- há data de revisão?

### 35.7. Checklist de linguagem cidadã

Verificar:

- frase com menos de 25 palavras sempre que possível;
- termo jurídico explicado;
- resposta clara para “o que é?”;
- resposta clara para “o que acontece depois?”;
- exemplo simples quando necessário;
- ausência de juridiquês desnecessário.

### 35.8. Ciclo de revisão

- Revisão ordinária: a cada 6 ou 12 meses.
- Revisão extraordinária: quando houver mudança legislativa, normativa ou orientação institucional.
- Todo conteúdo deve ter data de última revisão.
- Conteúdos desatualizados devem ser retirados, corrigidos ou marcados para revisão.

### 35.10. Processo de atualização por mudança legislativa

O conteúdo de nível 3 (base legal) tem risco jurídico médio e depende de legislação vigente. Mudanças na CLT, no CPC aplicado subsidiariamente ou em normas do TST podem tornar o conteúdo desatualizado sem aviso.

**Responsável pelo monitoramento:** área jurídica do TRT 18°.

**Fluxo obrigatório:**

```text
1. área jurídica identifica mudança legislativa relevante
2. aciona a Equipe de Comunicação do TRT 18° em até 5 dias úteis
3. conteúdo afetado recebe status "em revisão jurídica" imediatamente
4. conteúdo desatualizado é retirado do ar ou marcado com aviso até ser corrigido
5. novo conteúdo passa pelo fluxo de aprovação normal antes de voltar ao ar
```

**Prazo máximo para retirada de conteúdo desatualizado:** 10 dias úteis após identificação da mudança.

**Aviso temporário enquanto o conteúdo está em revisão:**

```text
Este conteúdo está sendo revisado para refletir atualizações recentes.
```

### 35.11. Workflow de atualização de conteúdo pós-lançamento

Os JSONs de conteúdo ficam no repositório de código. A Equipe de Comunicação do TRT 18° não tem acesso ao repositório nem utiliza Git. O fluxo abaixo define como atualizações chegam ao ar após o lançamento.

**Fluxo de atualização ordinária:**

```text
1. Equipe de Comunicação do TRT 18° redige a atualização em documento compartilhado (ex: Google Docs, Word, email)
2. Envia para o time de desenvolvimento com indicação do campo e etapa a atualizar
3. Time de desenvolvimento atualiza o JSON correspondente no repositório
4. Testes de schema são executados automaticamente em CI
5. Se aprovado, gera novo build e faz deploy na infraestrutura do TRT 18°
6. Equipe de Comunicação valida no ambiente de homologação antes de publicar em produção
```

**Prazo esperado por atualização simples (texto de card ou glossário):** até 3 dias úteis.

**Prazo esperado por atualização estrutural (novo nó, nova rota, nova etapa):** a combinar conforme escopo.

**Regra:** nenhuma atualização de conteúdo vai direto para produção sem passar pelo fluxo de aprovação da seção 35.2 e pelos testes de schema da seção 49.6.

### 35.9. Política de privacidade (LGPD)

A política de privacidade é **obrigatória para publicação** e deve estar pronta antes do início do Sprint 6.

**Responsável pela elaboração:** área jurídica do TRT 18° em conjunto com o Encarregado de Dados (DPO) do tribunal.

**Conteúdo mínimo obrigatório:**

- identificação do controlador de dados: TRT 18°;
- finalidade do tratamento: melhoria do produto educativo, análise de uso agregado;
- base legal: interesse público (art. 7°, III, LGPD), dado que se trata de instituição pública;
- dados coletados: dados de acesso agregados e anonimizados via Matomo (IP anonimizado, páginas visitadas, ações realizadas);
- prazo de retenção: máximo de 12 meses;
- ausência de coleta de dados pessoais identificáveis (CPF, nome, número de processo);
- direitos do titular: acesso, correção e exclusão conforme LGPD;
- canal de contato com o DPO do TRT 18°.

**Prazo:** elaboração iniciada no Sprint 1, aprovação concluída antes do Sprint 6.

---

## 36. SEO e compartilhamento

Cada subfluxograma deve ter:

- URL própria;
- título SEO;
- descrição;
- texto indexável;
- imagem social (OG image);
- breadcrumb;
- link para etapa anterior e próxima.

### 36.1. OG images (imagem social)

As OG images devem ser geradas dinamicamente via `next/og` (API de geração de imagens do Next.js) — sem criação manual por página.

Template obrigatório para todas as páginas:

```text
- fundo: cor da fase correspondente (seção 32.2)
- logo ou nome do projeto (canto superior esquerdo)
- título da etapa em destaque (fonte grande, centralizado)
- subtítulo curto (máx. 10 palavras)
- selo institucional TRT 18° (canto inferior direito)
- dimensões: 1200 × 630px
```

**Responsável pela aprovação do template:** Equipe de Comunicação do TRT 18°.
**Implementação:** time de desenvolvimento via `app/opengraph-image.tsx` por rota.
**Sprint:** implementar no Sprint 3, junto com as páginas de subfluxograma.

URLs sugeridas:

```text
/etapas/inicio-e-peticao-inicial
/etapas/notificacao-do-reclamado
/etapas/audiencia-inicial
/etapas/defesa-e-contestacao
/etapas/provas-e-instrucao
/etapas/sentenca
/etapas/recurso-trabalhista
/etapas/liquidacao-e-execucao
```

### 36.2. Sitemap e robots.txt

Implementar via Next.js App Router:

- `app/sitemap.ts` — gera `sitemap.xml` com todas as rotas públicas (home, mapa, simulação, glossário, 8 etapas, sobre);
- `app/robots.ts` — gera `robots.txt` permitindo indexação de todas as rotas públicas;
- a URL base do sitemap deve usar a variável de ambiente `NEXT_PUBLIC_BASE_URL` (ver seção de variáveis de ambiente).

**Sprint:** implementar no Sprint 2, junto com a home.

---

## 37. Analytics com privacidade

### 37.1. Ferramenta

**Matomo auto-hospedado na infraestrutura do TRT 18°.**

Justificativa:
- dados permanecem sob controle total do tribunal, sem transferência internacional;
- compatível com LGPD sem necessidade de banner de cookies (modo cookieless);
- sem dependência de serviços de terceiros externos (Google, Meta, etc.);
- adequado para instituição pública judicial.

Requisito de infraestrutura: o TRT 18° deve provisionar e manter a instância Matomo antes do Sprint 6.

### 37.2. Configuração obrigatória

- modo cookieless ativado (`disableCookies`);
- anonimização de IP ativada;
- sem integração com redes sociais ou remarketing;
- dados retidos por no máximo 12 meses.

### 37.3. Regras de privacidade

Analytics devem ser agregados e não identificáveis.

- não registrar CPF;
- não registrar nome;
- não registrar número de processo;
- não registrar relato pessoal;
- não usar respostas da simulação como perfil pessoal.

### 37.4. Eventos do MVP

```text
home_start_simulation_clicked
home_master_flow_clicked
master_flow_opened
master_phase_clicked
subflow_opened
step_card_opened
glossary_term_opened
simulation_started
simulation_step_answered
simulation_help_clicked
simulation_completed
summary_generated
feedback_understood_clicked
feedback_confused_clicked
```

---

## 38. Internacionalização

MVP em:

```text
Português do Brasil
```

A estrutura deve estar preparada para futura tradução, mas sem tradução no MVP.

---

## 39. Variáveis de ambiente

O projeto deve ter um arquivo `.env.example` no repositório com todas as variáveis necessárias documentadas. O arquivo `.env.local` nunca deve ser commitado.

| Variável | Descrição | Obrigatória |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | URL base do site em produção (ex: `https://processo.trt18.jus.br`) | Sim |
| `NEXT_PUBLIC_MATOMO_URL` | URL da instância Matomo do TRT 18° | Sim (antes do Sprint 6) |
| `NEXT_PUBLIC_MATOMO_SITE_ID` | ID do site no Matomo | Sim (antes do Sprint 6) |
| `NODE_ENV` | Ambiente (`development` / `production`) | Gerenciado pelo Next.js |

Regras:

- variáveis com prefixo `NEXT_PUBLIC_` são expostas ao cliente — nunca colocar segredos nelas;
- em desenvolvimento local, usar `.env.local` com valores de teste;
- em produção, as variáveis são configuradas diretamente no servidor do TRT 18° — não em arquivo.

---

## 40. Suporte de navegadores

Suporte mínimo:

- últimas 2 versões de Chrome;
- últimas 2 versões de Edge;
- últimas 2 versões de Firefox;
- Safari atual;
- Android Chrome;
- iOS Safari.

Sem suporte prioritário:

- Internet Explorer;
- navegadores embarcados antigos.

---

## 40. Vídeos futuros

Embora fora do MVP, os vídeos devem seguir padrão mínimo:

- duração entre 45 e 90 segundos;
- legenda obrigatória;
- transcrição obrigatória;
- sem dependência exclusiva de áudio;
- mesma paleta visual do site;
- link com subfluxograma correspondente;
- aviso educativo ao final.

---

## 41. Requisitos funcionais

### RF01 — Home

Apresentar título, explicação curta, botões principais e aviso educativo.

### RF02 — Fluxograma mestre

Exibir as 5 fases principais com interação e versão textual.

### RF03 — Subfluxogramas

Exibir os 8 subfluxogramas com cards e navegação.

### RF04 — Cards explicativos

Abrir card ao clicar em etapa.

### RF05 — Simulação guiada

Conduzir jornada com pelo menos 7 decisões.

### RF06 — Resumo final

Mostrar caminho percorrido, escolhas e resultado.

### RF07 — Glossário

Permitir busca e consulta de termos.

### RF08 — Alternância de profundidade

Permitir alternar entre:

```text
Entenda em 30 segundos
Entenda melhor
Ver detalhe técnico
```

### RF09 — Alternativa textual

Todo fluxograma deve ter versão em lista.

### RF10 — Persistência local

Tentar salvar o estado da simulação localmente sem envio de dados ao servidor, usando estratégia de fallback em camadas (localStorage → sessionStorage → memória). A persistência é melhor esforço — a simulação deve funcionar corretamente mesmo quando nenhuma camada de armazenamento estiver disponível.

### RF11 — Página Sobre

Apresentar: objetivo educativo do site, crédito à Equipe de Comunicação do TRT 18°, declaração de acessibilidade (WCAG 2.2 AA), link para política de privacidade, canal de contato institucional e data da última atualização do conteúdo.

---

## 42. Critérios de aceite por página

### Home aceita quando

- apresenta objetivo do site;
- exibe 3 CTAs principais;
- mostra aviso educativo;
- funciona em mobile;
- permite navegar para simulação, mapa e etapas.

### Mapa mestre aceito quando

- mostra as 5 fases;
- permite clicar em cada fase;
- abre resumo da fase;
- permite abrir subfluxograma;
- possui versão textual;
- funciona no mobile como timeline vertical.

### Subfluxograma aceito quando

- mostra o fluxo visual no desktop;
- mostra timeline no mobile;
- cada etapa abre card;
- possui versão textual;
- permite voltar ao mapa;
- permite avançar para próxima fase.

### Card aceito quando

- explica o que é;
- mostra quem participa;
- mostra o que acontece;
- mostra próximos caminhos;
- contém termos relacionados;
- pode ser fechado por mouse, teclado e toque.

### Simulação aceita quando

- permite completar todos os caminhos principais;
- mostra consequência após cada escolha;
- permite voltar;
- permite reiniciar;
- gera resumo final;
- não pede dados reais do usuário.

### Glossário aceito quando

- permite busca;
- exibe definições simples;
- contém termos obrigatórios;
- funciona por teclado;
- abre termos relacionados.

### Sobre aceito quando

- apresenta objetivo educativo e declaração de não substituição de orientação jurídica;
- credita a Equipe de Comunicação do TRT 18° com link institucional;
- declara o nível de conformidade de acessibilidade (WCAG 2.2 AA) e canal para reporte;
- exibe link para a política de privacidade;
- exibe canal de contato institucional sem coletar dados pessoais;
- exibe data da última atualização do conteúdo;
- funciona em mobile.

---

## 43. Requisitos não funcionais

### RNF01 — Performance

- carregamento inicial abaixo de 3 segundos;
- subfluxos sob demanda;
- imagens otimizadas;
- sem vídeos carregados no MVP;
- home interativa em até 3 segundos em 4G comum;
- versão textual disponível mesmo se o visual demorar;
- rolagem mobile fluida.

### RNF02 — Segurança

- HTTPS;
- sem coleta de dados pessoais;
- sem campos livres sensíveis;
- sanitização em caso de CMS futuro.

### RNF03 — Manutenibilidade

Conteúdo fora do código visual:

```text
content/flows/master.json
content/flows/subflows.json
content/simulation.json
content/glossary.json
```

### RNF04 — Acessibilidade

Conformidade alvo:

```text
WCAG 2.2 AA
```

### RNF05 — Responsividade

Mobile-first obrigatório.

### RNF07 — Pipeline de CI/CD

O pipeline de entrega deve ser acordado com a área de TI do TRT 18° antes do Sprint 3.

**Etapas obrigatórias do pipeline:**

```text
1. push no repositório (branch main ou branch de release)
2. CI executa: testes de schema dos JSONs (Vitest) + testes de transição de estado
3. se testes passam → build Next.js (next build + next export para SSG)
4. artefato estático gerado (pasta out/) é transferido para servidor do TRT 18°
5. deploy em ambiente de homologação para validação
6. aprovação manual → deploy em produção
```

**Repositório:** a definir com TRT 18° (GitHub, GitLab ou servidor interno do tribunal).

**Ferramenta de CI:** a definir conforme infraestrutura do TRT 18° (GitHub Actions, GitLab CI ou Jenkins).

**Regra:** nenhum deploy em produção sem aprovação manual após validação em homologação.

### RNF06 — Deploy e hospedagem

- ambiente de produção hospedado na infraestrutura própria do TRT 18°;
- o produto final gerado pelo Next.js é um conjunto de arquivos estáticos (HTML, JS, CSS, JSON) servíveis por qualquer servidor web;
- ambiente de desenvolvimento e beta pode usar Vercel como plataforma de homologação;
- nenhum dado de usuário de produção deve trafegar por serviços externos não contratados pelo tribunal.

---

## 44. Stack técnica recomendada

### MVP

```text
Next.js (App Router) com SSG
React
TypeScript
Tailwind CSS
React Flow (camada visual sobre versão textual acessível)
Framer Motion
JSON local (content/)
Vitest (testes unitários)
Deploy de produção: infraestrutura própria do TRT 18°
Deploy de desenvolvimento/beta: Vercel (ambiente de homologação apenas)
```

### Versão futura

Itens adicionados sobre a mesma base Next.js do MVP:

```text
CMS Headless (para edição de conteúdo sem deploy)
PostgreSQL (persistência de conteúdo e governança editorial)
API dedicada em FastAPI ou Node.js (se o CMS exigir backend separado)
Painel administrativo
```

Analytics (Matomo) já está incluído no MVP — ver seção 37.

---

## 45. Versão estática e versão administrável

### MVP

Conteúdo versionado no repositório, sem painel administrativo.

### Versão 2

Conteúdo editável por CMS, com fluxo de aprovação.

Regra:

> Não implementar CMS antes de validar o conteúdo e a experiência.

---

## 46. Estrutura de diretórios

```text
processo-trabalhista-interativo/
├── public/
│   ├── images/
│   ├── icons/
│   └── videos/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                        (Home)
│   ├── mapa-do-processo/
│   │   └── page.tsx
│   ├── simulacao/
│   │   └── page.tsx
│   ├── glossario/
│   │   └── page.tsx
│   ├── etapas/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── sobre/
│       └── page.tsx
├── components/
│   ├── flow/
│   ├── cards/
│   ├── simulation/
│   ├── glossary/
│   └── layout/
├── content/
│   ├── flows/
│   │   ├── master.json
│   │   └── subflows.json
│   ├── simulation.json
│   └── glossary.json
├── lib/
├── hooks/
├── package.json
└── README.md
```

---

## 47. Matriz de dependências

| Entrega | Depende de |
|---|---|
| Home | design system mínimo |
| Fluxograma mestre | `master.json` |
| Subfluxogramas | `subflows.json` |
| Cards | nós completos e revisados |
| Simulação | `simulation.json` |
| Glossário | `glossary.json` |
| Modo técnico | conteúdo validado |
| Vídeos | roteiros e arquivos finais |
| Analytics | instância Matomo provisionada pelo TRT 18° + eventos definidos |
| Painel admin | governança editorial validada |

---

## 48. Roteiro de implementação

### Sprint 1 — Base do projeto

- criar projeto Next.js com App Router;
- configurar rotas;
- configurar Tailwind;
- criar design system mínimo;
- criar estrutura JSON inicial e arquivo `.env.example` com todas as variáveis da seção 39;
- configurar `<html lang="pt-BR">` em `app/layout.tsx`;
- configurar fonte via `next/font/google` (sem carregamento externo em runtime);
- configurar Vitest e implementar testes de schema para todos os arquivos `content/` (ver seção 49.6);
- definir e implementar arquitetura de progressive enhancement: versão textual em lista como componente base de todos os fluxogramas, canvas React Flow como camada visual sobreposta;
- validar navegação por teclado e leitura por leitor de tela na versão textual antes de avançar para o visual;
- implementar regra CSS global de `prefers-reduced-motion` e configurar `useReducedMotion()` como padrão em todos os componentes Framer Motion;
- acionar área jurídica do TRT 18° e DPO para início da elaboração da política de privacidade (prazo: pronta antes do Sprint 6);
- solicitar aprovação do design do favicon e ícone de homescreen à Equipe de Comunicação do TRT 18° (prazo: antes do Sprint 6).

### Sprint 2 — Home e mapa mestre

- implementar home;
- implementar mapa mestre;
- implementar versão textual;
- implementar legenda visual;
- implementar `sitemap.ts` e `robots.ts` (seção 36.2);
- implementar componente de tooltip de glossário inline (seção 32.6);
- implementar páginas 404 (`not-found.tsx`) e erro genérico (`error.tsx`) (seção 33.3 e 33.4);
- usar conteúdo placeholder estruturado no formato JSON final (sem dependência de aprovação jurídica);
- alinhar com a Equipe de Comunicação do TRT 18° a entrega do conteúdo aprovado para os Subfluxogramas 1, 2 e 3 antes do Sprint 3.

### Sprint 3 — Subfluxogramas e cards

- alinhar pipeline de CI/CD com área de TI do TRT 18° (pré-requisito para Sprint 6);
- implementar 8 páginas;
- implementar cards;
- implementar navegação entre etapas;
- implementar timeline mobile;
- implementar OG images dinâmicas via `next/og` com template aprovado pela Equipe de Comunicação do TRT 18° (seção 36.1);
- validar layout em resolução de projetor 1280×720px (seção 31.4).

### Sprint 4 — Simulação

- implementar máquina de estados;
- implementar decisões;
- implementar finais;
- implementar resumo final;
- implementar persistência local com fallback em camadas (localStorage → sessionStorage → memória);
- implementar testes de transição de estado com Vitest: cobertura de todos os caminhos da árvore e alcançabilidade dos 7 finais (ver seção 49.6).

### Sprint 5 — Glossário e validação de acessibilidade

- implementar glossário;
- auditoria WCAG 2.2 AA em todos os componentes;
- validar foco visível e navegação por teclado end-to-end;
- validar `aria-labels` e anúncios de leitor de tela;
- validar comportamento de todas as animações com `prefers-reduced-motion` ativo (testar no SO com a preferência habilitada);
- ajustes de contraste;
- fallbacks de erro;
- teste com leitor de tela real (NVDA ou VoiceOver).

### Sprint 6 — QA, revisão e beta

- substituir todo conteúdo placeholder por conteúdo aprovado pela Equipe de Comunicação do TRT 18°;
- revisão jurídica final;
- revisão editorial final;
- confirmar publicação da política de privacidade (pré-requisito para publicação — ver seção 35.9);
- integrar Matomo (instância provisionada pelo TRT 18°) e validar disparo dos eventos da seção 37.4;
- validar deploy na infraestrutura do TRT 18° (ambiente de homologação interno);
- testes com usuários;
- correção de bugs;
- beta fechado.

---

## 49. Plano de testes

### 49.1. Funcionais

- abrir home;
- abrir mapa;
- abrir 8 subfluxogramas;
- abrir cards;
- alternar visual/lista;
- completar simulação;
- reiniciar simulação;
- consultar glossário;
- continuar simulação local.

### 49.2. Responsivos

- celular pequeno (360px);
- celular grande (430px);
- tablet (768px);
- desktop (1280px);
- projetor (1280×720px — validar legibilidade do fluxograma mestre sem scroll e ausência de dependência de hover).

### 49.3. Acessibilidade

- teclado;
- foco visível;
- contraste;
- leitor de tela;
- versão textual;
- aria-labels.

### 49.4. Conteúdo

- revisão jurídica;
- revisão editorial;
- revisão de linguagem cidadã;
- revisão do glossário;
- revisão dos textos da simulação.

### 49.5. Testes com usuários leigos

#### Tarefa 1

Descobrir o que pode acontecer se o reclamante não comparecer à audiência.

**Sucesso:**

> Usuário encontra “arquivamento” e consegue explicar em suas palavras.

#### Tarefa 2

Descobrir quando pode haver acordo.

**Sucesso:**

> Usuário identifica audiência inicial e nova tentativa antes da sentença.

#### Tarefa 3

Explicar o que é execução.

**Sucesso:**

> Usuário entende que é a fase de cumprimento da decisão ou acordo.

Critério mínimo:

Em teste com 5 usuários leigos, pelo menos 4 devem conseguir explicar:

1. que a audiência pode terminar em acordo;
2. que ausência do reclamante pode gerar arquivamento;
3. que o processo pode seguir para provas;
4. que sentença pode ter recurso;
5. que execução é a fase de cumprimento.

### 49.6. Testes automatizados (Vitest)

Ferramenta: **Vitest**. Dois grupos de cobertura obrigatória:

#### Transições de estado da simulação

Todo caminho da árvore de decisão (seção 21.2) deve ter cobertura de teste. Nenhuma alteração no `simulation.json` deve chegar ao ar sem os testes passando.

Cobertura mínima obrigatória:

- cada transição `"next"` referencia um estado que existe;
- todos os 7 finais são alcançáveis a partir de `sim_inicio`;
- nenhum estado de decisão tem `options` vazio;
- estados com `helpContent` têm todos os campos obrigatórios (`title`, `explanation`, `consequence`).

#### Validação de schema dos JSONs de conteúdo

Os arquivos JSON são editados pela Equipe de Comunicação do TRT 18° fora do ciclo de desenvolvimento. Campos ausentes ou com tipo errado quebram componentes em runtime sem erro de build.

Cobertura mínima obrigatória:

- todo nó em `master.json` e `subflows.json` tem `id`, `titleSimple`, `citizenExplanation` e `textAlternative`;
- todo termo em `glossary.json` tem `term`, `simpleDefinition` e `relatedTerms`;
- todo estado em `simulation.json` tem `id`, `type`, `question` e `options` com ao menos uma entrada;
- IDs são únicos dentro de cada arquivo.

Os testes de schema devem ser executados em CI a cada alteração nos arquivos `content/`.

---

## 50. Plano de lançamento

### Alpha

Equipe interna testa:

- navegação;
- conteúdo;
- responsividade;
- acessibilidade básica;
- erros técnicos.

### Beta fechado

Teste com:

- servidores;
- comunicadores;
- professores;
- 5 a 10 usuários leigos.

### Piloto

Uso controlado em:

- evento;
- ação educativa;
- escola;
- campanha.

### Publicação

Site aberto com:

- monitoramento de feedback;
- revisão de métricas;
- correções rápidas.

---

## 51. Critérios para avançar pós-MVP

As métricas abaixo são **provisórias** — definidas sem baseline histórico pois o produto é novo. Devem ser calibradas após as primeiras 4 semanas de uso real com dados do Matomo. A decisão de avançar deve considerar os números observados, não apenas as metas fixas.

Avançar para vídeos se:

- taxa de conclusão da simulação atingir a meta calibrada (referência inicial: 60%);
- taxa de “ainda tenho dúvida” nas etapas principais ficar abaixo da meta calibrada (referência inicial: 20%);
- usuários leigos demonstrarem compreensão mínima satisfatória nos testes (seção 49.5).

Avançar para painel admin se:

- houver necessidade real de atualização frequente;
- houver equipe responsável pela governança editorial.

Avançar para modo apresentação se:

- houver uso confirmado em eventos, escolas ou campanhas.

**Revisão das metas:** após 4 semanas de uso, a Equipe de Comunicação do TRT 18° e o time de produto revisam as métricas observadas e definem metas definitivas para avanço.

---

## 52. Pronto para publicação

O produto estará pronto para publicação quando:

- conteúdo jurídico estiver aprovado;
- acessibilidade básica estiver validada;
- teste com usuários tiver sido concluído;
- erros críticos tiverem sido corrigidos;
- aviso educativo estiver visível;
- fallback textual estiver funcionando;
- política de privacidade estiver publicada (obrigatório — analytics Matomo está no MVP);
- equipe responsável por manutenção estiver definida.

---

## 53. Critérios de aceite do MVP

O MVP estará pronto quando:

1. home funcional;
2. fluxograma mestre navegável;
3. 8 subfluxogramas implementados;
4. cards principais completos;
5. versão textual de todos os fluxos;
6. simulação com estados definidos;
7. pelo menos 7 decisões;
8. 7 finais possíveis;
9. glossário básico disponível;
10. mobile funcional sem pinch zoom obrigatório;
11. aviso educativo fixo;
12. conteúdo em JSON;
13. persistência local funcionando;
14. página Sobre completa e publicada;
15. acessibilidade básica validada;
16. conteúdo com revisão aprovada;
17. teste com usuários leigos satisfatório.

---

## 54. Definição de sucesso pedagógico

O produto será considerado bem-sucedido se o usuário leigo conseguir explicar:

1. como o processo começa;
2. para que serve a audiência;
3. o que acontece se houver acordo;
4. o que acontece se não houver acordo;
5. por que podem existir provas;
6. o que é sentença;
7. por que pode haver recurso;
8. o que é execução;
9. quais são os principais desfechos.

---

## 55. Síntese executiva

O PRD v4 define um produto com:

```text
escopo jurídico claro
não objetivos explícitos
objetivos pedagógicos
personas
jornadas
fluxograma mestre
8 subfluxogramas
wireframes textuais
simulação segura como máquina de estados
conteúdo em camadas
glossário
mobile-first real
acessibilidade por componente
design system mínimo
governança jurídica/editorial
critérios por página
matriz de dependências
plano de sprints
plano de testes
plano de lançamento
critérios pós-MVP
```

A decisão estratégica continua sendo:

```text
Primeiro ensinar bem.
Depois enriquecer com vídeos, quiz, modo apresentação, CMS e integrações.
```

Este PRD já está em nível suficiente para virar um pacote de produção, composto por:

```text
PRD final
+ backlog de épicos e user stories
+ modelo JSON completo
+ wireframes textuais
+ critérios de aceite por tela
+ checklist jurídico/editorial
+ plano de sprints
```
