<p align="right">
  <a href="./README.md">🇺🇸 English</a> |
  <a href="./README.hi.md">🇮🇳 हिंदी </a> |
  <a href="./README.ja.md">🇯🇵 日本語</a> |
  <a href="./README.zh-CN.md">🇨🇳 简体中文</a> |
  <a href="./README.es.md">🇪🇸 Español</a> |
  <a href="./README.pt-BR.md">🇧🇷 Português (Brasil)</a> |
  <a href="./README.ko.md">🇰🇷 한국어</a> |
  <a href="./README.de.md">🇩🇪 Deutsch</a> |
  <a href="./README.fr.md">🇫🇷 Français</a>
</p>

# [Client-Side Time-Series Forecast AI](https://github.com/europanite/client-side-time-series-forecast-ai "Client-Side Time-Series Forecast AI")

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![OS](https://img.shields.io/badge/OS-Linux%20%7C%20macOS%20%7C%20Windows-blue)
[![CI](https://github.com/europanite/client-side-time-series-forecast-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/europanite/client-side-time-series-forecast-ai/actions/workflows/ci.yml)
[![docker](https://github.com/europanite/client-side-time-series-forecast-ai/actions/workflows/docker.yml/badge.svg)](https://github.com/europanite/client-side-time-series-forecast-ai/actions/workflows/docker.yml)
[![pages](https://github.com/europanite/client-side-time-series-forecast-ai/actions/workflows/pages.yml/badge.svg)](https://github.com/europanite/client-side-time-series-forecast-ai/actions/workflows/pages.yml)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)



## Demonstração de 40 segundos

[![▶ Assista à demonstração de 40 segundos](https://img.youtube.com/vi/AUFat22QJHE/hqdefault.jpg)](https://youtu.be/AUFat22QJHE)

## Área de testes

[▶ Abra o aplicativo de previsão no navegador](https://europanite.github.io/client-side-time-series-forecast-ai/)

Ferramenta de IA para previsão de séries temporais que roda inteiramente no navegador. É totalmente gratuita e segura, pois todo o processamento ocorre no próprio navegador.

Você pode escolher entre [XGBoost](https://xgboost.readthedocs.io/en/stable/), XGBoost Bagging ×2, [LightGBM](https://lightgbm.readthedocs.io/), LightGBM Bagging ×2, um modelo experimental do tipo VARMA, [Chronos-2](https://github.com/amazon-science/chronos-forecasting), [TimesFM 2.5](https://github.com/google-research/timesfm) e regressão Ridge.

---

## Visão geral

Esta ferramenta de previsão de séries temporais multivariadas funciona totalmente no seu navegador. Não exige instalação, cadastro nem pagamento. Basta acessar para começar. Ela ajuda pequenas empresas a prever os pedidos do dia seguinte.

- Carregue conjuntos de dados de séries temporais CSV/XLSX no navegador
- Escolha qualquer coluna numérica como alvo da previsão
- Selecione XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, o modelo VARMA experimental, Chronos-2 e TimesFM 2.5 pré-treinados ou regressão Ridge
- Treine o modelo escolhido localmente no navegador
- Preveja os próximos 16 pontos e adicione-os ao gráfico

Tudo acontece **dentro do seu navegador**. Não há API de backend e nenhum dado sai do seu computador.

---

## Demonstração

1. Abra a demonstração no GitHub Pages:  
   https://europanite.github.io/client-side-time-series-forecast-ai/

2. Envie um arquivo de exemplo, como [`data/sample_data.csv`](./data/sample_data.csv) (preços de ações) ou [`data/sample_data.xlsx`](./data/sample_data.xlsx) (amostra multivariada sintética).
3. O aplicativo irá:
   - Detectar uma **coluna semelhante a data e hora**
   - Listar as colunas numéricas disponíveis
4. Escolha uma coluna numérica como **alvo**.
5. Escolha um **modelo de previsão**. `XGBoost` é o padrão; `XGBoost Bagging ×2` calcula a média de dois regressores XGBoost com amostras bootstrap; `LightGBM` é uma alternativa GBDT treinada localmente; `LightGBM Bagging ×2` combina dois regressores LightGBM com bootstrap; `VARMA experimental` é uma referência multivariada leve; `Chronos-2 pretrained` é um modelo de base zero-shot; `TimesFM 2.5` é um modelo ONNX zero-shot opcional; e `Ridge` é uma referência linear treinada localmente.
6. Para XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, VARMA ou Ridge, clique primeiro em **Train**. Chronos-2 e TimesFM 2.5 já são pré-treinados e dispensam treinamento local. Em seguida, clique em **Forecast +16** para prever os próximos 16 pontos.
7. Examine o gráfico para comparar a série observada com a linha prevista.

---

# 🚀 Primeiros passos

## npm

### 1. Pré-requisitos
- Node.js

### 2. Preparar os serviços:

```bash
cd frontend/app
npm ci
npm run dev
```

### 3. Testes:

```bash
npm test -- --ci --runInBand --coverage --verbose
npx tsc --noEmit
npm run build
```

## Docker Compose

### 1. Pré-requisitos
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Preparar os serviços:

```bash
docker compose up --build
```

### 3. Testes:

```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

## Estrutura dos dados

<pre>
datetime,item_a,item_b,item_c,...
2025-01-01 00:00:00+09:00,10,20,31,...
2025-01-02 00:00:00+09:00,12,19,31,...
2025-01-03 00:00:00+09:00,14,18,33,...
 ...
</pre>

### Requisitos:

##### Uma coluna de data e hora
O cabeçalho deve conter "date" ou "time" (sem diferenciar maiúsculas de minúsculas).
Ela define o eixo temporal, mas não é convertida diretamente em atributos numéricos.

##### Uma ou mais colunas numéricas
São usadas como alvo e/ou atributos exógenos.
O aplicativo oferece seis modos de previsão com ajuste local:

- **XGBoost**: você escolhe uma coluna numérica como alvo; as demais fornecem sinais adicionais.
- **XGBoost Bagging ×2**: treina dois modelos XGBoost com amostras bootstrap independentes dos mesmos atributos supervisionados e tira a média das saídas. O modo direto de 16 passos ajusta 32 boosters.
- **LightGBM Bagging ×2**: treina dois modelos LightGBM com o mesmo método bootstrap do XGBoost Bagging ×2 e calcula a média das previsões. O modo direto de 16 passos ajusta 32 boosters.
- **LightGBM**: utiliza o mesmo alvo e os mesmos atributos multivariados elaborados do XGBoost, mas ajusta um regressor LightGBM.
- **VARMA experimental**: modela todas as colunas numéricas em conjunto e mostra a previsão da coluna-alvo selecionada.
- **Ridge**: ajusta localmente uma regressão linear regularizada com os mesmos atributos elaborados e o caminho de previsão recursiva do XGBoost e do LightGBM.

---

<!-- ALL_MODEL_EVALUATION:START -->
### Todos os oito modelos — holdout equivalente no navegador (até 2026-10-30)

Cada setor usa 256 fechamentos históricos para prever as mesmas 16 sessões seguintes. Quanto menor o MAPE, melhor. Os cinco modelos supervisionados usam **Direct price** (padrão no navegador); o VARMA usa previsão recursiva conjunta; Chronos-2 e TimesFM 2.5 usam somente a série-alvo selecionada. Todos rodam no Chromium, sem reimplementação em Node.

| Modelo | Montadoras MAPE ↓ | Bancos MAPE ↓ | Eletrônicos MAPE ↓ | Telecomunicações MAPE ↓ | Companhias comerciais MAPE ↓ | MAPE médio ↓ | sMAPE médio ↓ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| xgboost | 3.70% | 6.08% | 7.03% | 1.02% | 2.52% | 4.07% | 4.10% |
| xgboost_bag2 | 3.61% | 5.83% | 7.44% | 1.06% | 2.77% | 4.14% | 4.18% |
| lightgbm | 4.07% | 5.95% | 6.48% | 0.96% | 2.51% | 4.00% | 4.02% |
| lightgbm_bag2 | 3.87% | 6.21% | 7.15% | 1.10% | 2.42% | 4.15% | 4.19% |
| ridge | 2.69% | 4.35% | 9.98% | 1.34% | 2.56% | 4.18% | 4.29% |
| varma | 11.83% | 6.14% | 11.33% | 7.34% | 2.20% | 7.77% | 8.12% |
| chronos | 4.72% | 7.37% | 5.57% | 1.72% | 2.17% | 4.31% | 4.33% |
| timesfm | 4.58% | 5.22% | 5.07% | 1.92% | 3.01% | 3.96% | 4.01% |
| last_close | 4.92% | 5.84% | 5.35% | 1.25% | 2.21% | 3.91% | 3.95% |

Protocolo: `real-browser-recent-16step-all-eight-v1`; SHA256 da entrada: `bd5150223ed5…`; SHA256 do código-fonte: `e2e34fbc83b1…`.
Os resultados são retrospectivos e dependem da versão avaliada, não de uma auditoria de previsões em tempo real.
[Método e reprodução](docs/ALL_MODEL_EVALUATION.md). MAE/RMSE completos, previsões e tempos: [`reports/stocks/all-models.json`](reports/stocks/all-models.json).
<!-- ALL_MODEL_EVALUATION:END -->

## Abordagem de previsão

O projeto oferece oito algoritmos de previsão com premissas intencionalmente diferentes:

| Modelo | Tipo de aprendizado | Usa várias séries de entrada? | Treinamento local? | Tipo de previsão |
| --- | --- | --- | --- | --- |
| XGBoost | Regressão por árvores de decisão com gradient boosting sobre atributos temporais elaborados | Sim | Sim | Recursiva ou direta em 16 horizontes |
| XGBoost Bagging ×2 | Dois regressores XGBoost com bootstrap independente e previsões médias | Sim | Sim (2 por horizonte) | Recursiva ou direta em 16 horizontes |
| LightGBM | Regressão por árvores com gradient boosting baseada em histogramas e nos mesmos atributos do XGBoost | Sim | Sim | Recursiva ou direta em 16 horizontes |
| LightGBM Bagging ×2 | Dois regressores LightGBM com bootstrap independente e previsões médias | Sim | Sim (2 por horizonte) | Recursiva ou direta em 16 horizontes |
| VARMA experimental | Autorregressão linear multissaída com regularização Ridge e correção de resíduos | Sim, em conjunto | Sim | Recursiva conjunta multissaída |
| Chronos-2-small INT8 ONNX | Modelo de base pré-treinado de séries temporais baseado em patches | Apenas o alvo na interface atual | Não | Previsão probabilística direta de múltiplos passos |
| TimesFM 2.5 ONNX | Modelo de base pré-treinado de séries temporais (download grande opcional) | Apenas o alvo selecionado | Não | Previsão probabilística direta de múltiplos passos |
| Ridge (linear baseline) | Regressão linear com regularização L2 sobre atributos compartilhados com os modelos de árvores | Sim | Sim | Recursiva ou direta em 16 horizontes |

Esses modelos não são oito implementações do mesmo algoritmo. XGBoost, LightGBM e as variantes com bagging transformam as séries temporais no mesmo problema de aprendizado supervisionado tabular. O VARMA modela conjuntamente vetores defasados de várias séries; Ridge fornece uma referência linear sobre os mesmos atributos; Chronos-2 e TimesFM 2.5 usam modelos neurais pré-treinados sem ajustar novos parâmetros aos dados enviados.

A **previsão direta de 16 passos é a estratégia padrão** para XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2 e Ridge. Cada passo futuro é ajustado separadamente, evitando inventar entradas futuras de outras séries. Para mudar para previsão recursiva, abra **Settings → Advanced forecasting → Forecast strategy**. O modo recursivo usa um único modelo e prevê iterativamente os 16 passos. VARMA usa autorregressão conjunta; Chronos-2 e TimesFM 2.5 são pré-treinados e preveem diretamente. Não se aplica mistura sazonal fixa às previsões supervisionadas. Consulte [estratégias de previsão](docs/FORECAST_STRATEGIES.md).

### Seleção de modelos

#### XGBoost

`XGBoost` é o modelo padrão treinado localmente. Trata-se de um algoritmo de árvores de decisão com gradient boosting: árvores são adicionadas sequencialmente, cada uma reduzindo os erros restantes do conjunto anterior. As séries temporais não são passadas diretamente ao XGBoost; cada instante é transformado em um vetor de atributos, usado para treinar um regressor.

A implementação no navegador usa:

- defasagens do alvo e das séries exógenas até `MAX_LAG = 3`
- primeiras diferenças
- média móvel com `ROLLING_WINDOW = 7`
- interações de diferença, razão e produto entre séries numéricas
- índice temporal
- atributos de Fourier com períodos 24 e 168
- `gbtree` com profundidade 4, taxa de aprendizado 0.1, subamostragem 0.8 e 200 iterações de boosting

No modo **recursive**, o modelo prevê um passo por vez; cada previsão vira histórico para o próximo passo, e as outras séries futuras desconhecidas são prolongadas por heurísticas. No modo **direct**, 16 modelos independentes por horizonte usam os últimos atributos realmente observados, sem inventar valores futuros das outras séries. Não há mistura sazonal fixa.

**Pontos fortes**

- captura relações não lineares e interações entre séries
- funciona bem com os atributos multivariados elaborados para o projeto
- treina localmente e relativamente rápido no navegador
- não exige baixar um modelo pré-treinado grande

**Limitações**

- a qualidade depende da engenharia de atributos escolhida
- o modo recursivo pode acumular erros nos passos mais distantes
- os períodos de Fourier e a continuação sazonal são premissas da aplicação, não uma estrutura de calendário aprendida automaticamente

Use XGBoost quando quiser um modelo não linear leve, treinado localmente, capaz de explorar relações entre várias colunas numéricas.

#### LightGBM

`LightGBM` é outra árvore com gradient boosting treinada localmente. A implementação usa `@wlearn/lightgbm`, versão WebAssembly do LightGBM, e reutiliza deliberadamente a saída de `buildFeatures()` e as estratégias de 16 passos do XGBoost (recursiva ou direta).

A configuração padrão do LightGBM utiliza regressão, taxa de aprendizado 0.1, 31 folhas, profundidade máxima 4, subamostragem 0.8 e 200 rodadas de boosting. As previsões brutas são usadas sem mistura sazonal fixa.

Use LightGBM para comparar diretamente uma alternativa GBDT baseada em histogramas sem alterar o pipeline de atributos nem o protocolo de previsão da aplicação.

#### VARMA experimental

`VARMA experimental` é uma referência multivariada leve e nativa do navegador. Apesar do nome, **não é um estimador VARMA estatístico completo por máxima verossimilhança**. Está mais próximo de um VAR regularizado com pequena correção residual e estabilização sazonal opcional.

A implementação:

1. seleciona até 8 séries numéricas e as padroniza;
2. concatena os 7 vetores multivariados anteriores em um vetor de atributos defasados;
3. ajusta simultaneamente todas as séries de saída com regressão Ridge multissaída (`ridge = 1e-2`);
4. estima uma pequena correção com resíduos recentes (`maLag = 1`);
5. opcionalmente mistura a saída autorregressiva com um vetor de defasagem sazonal (`seasonalLag = 7`; `seasonalBlend = 0` por padrão);
6. realimenta recursivamente o vetor previsto no passo seguinte.

Como o vetor numérico completo é previsto em cada passo, o VARMA avança todas as séries modeladas juntas, não apenas o alvo escolhido.

**Pontos fortes**

- simples e de baixo custo computacional
- modela várias séries numéricas conjuntamente
- fornece uma referência linear/clássica útil para comparar com XGBoost e Chronos-2
- roda totalmente em TypeScript sem baixar outro modelo

**Limitações**

- exige ao menos duas séries numéricas e mais de 7 linhas utilizáveis
- pressupõe relações defasadas predominantemente lineares
- a correção residual e a mistura sazonal opcional são heurísticas, não um procedimento completo de estimação de médias móveis
- não deve ser apresentado como implementação de referência do VARMA estatístico

Use `VARMA experimental` principalmente como referência multivariada transparente quando várias séries se movem juntas.

#### Chronos-2 pré-treinado

`Chronos-2 pretrained` é fundamentalmente diferente dos modelos ajustados localmente. É um modelo de base pré-treinado para séries temporais, baseado em patches, que gera diretamente **previsões por quantis** de múltiplos passos. Este repositório executa `Chronos-2-small INT8` via ONNX Runtime Web; após baixar o modelo, a inferência acontece localmente.

A integração atual no navegador:

- **não** treina com o conjunto de dados enviado;
- usa somente a série-alvo como contexto do Chronos;
- exige pelo menos 16 observações numéricas do alvo;
- mantém no máximo 5.760 observações de contexto;
- agrupa a entrada em patches de 16 pontos e preenche à esquerda o primeiro patch incompleto com `NaN`;
- executa a saída interna de 672 passos do grafo ONNX (`42 × 16`) e mostra os primeiros 16 na interface;
- lê os quantis do modelo e exibe a mediana (`p50`) com limites de incerteza `p10` e `p90`.

O Chronos-2 oferece recursos mais avançados de previsão multivariada e com covariáveis, mas **a interface atual ainda não os utiliza**. Portanto, a implementação funciona como um previsor univariado pré-treinado dentro de uma aplicação multivariada.

**Pontos fortes**

- previsão zero-shot: não precisa ajustar o modelo para cada conjunto de dados
- prevê diretamente todo o horizonte, sem usar recursivamente modelos de um passo
- fornece informação probabilística por quantis de previsão
- transfere padrões aprendidos no pré-treinamento para séries novas

**Limitações**

- o modelo precisa ser baixado antes do primeiro uso
- o navegador usa uma exportação ONNX INT8; os resultados podem não coincidir com o checkpoint oficial em precisão total
- a interface atual ignora colunas numéricas adicionais ao chamar o Chronos-2
- a memória do navegador e a execução WASM limitam o tamanho do modelo e o contexto na prática

Em um benchmark anterior de holdout 128/16 do AirPassengers, `Chronos-2-small INT8 ONNX` obteve os menores MAE, RMSE, MAPE, sMAPE e MASE entre os modelos comparáveis. Consulte abaixo os valores e o protocolo. **São resultados históricos de uma versão anterior; não devem ser comparados às estratégias e aos atributos revisados sem repetir a avaliação.**

### Previsão de 16 passos

O horizonte padrão da aplicação é 16 porque o Chronos-2 ONNX usa patches de 16 pontos e as APIs de XGBoost, LightGBM e VARMA seguem esse mesmo horizonte para comparação.

Os algoritmos chegam aos 16 pontos de maneiras diferentes:

- **XGBoost, LightGBM e Ridge** podem prever recursivamente com um único modelo de um passo ou diretamente com 16 modelos específicos por horizonte.
- **VARMA experimental** prevê recursivamente todo o vetor multivariado, avançando juntas todas as séries incluídas.
- **Chronos-2** faz inferência probabilística direta de múltiplos passos e retorna as primeiras 16 posições futuras do modelo pré-treinado.

A estratégia direta é o **padrão** para XGBoost, LightGBM e Ridge. A estratégia recursiva fica nas opções avançadas de Settings. Ali também é possível mudar o alvo da previsão direta dos valores originais padrão para retornos logarítmicos acumulados em séries estritamente positivas. A previsão direta evita criar entradas artificiais a cada passo, mas exige ajustar até 16 modelos. As estratégias devem ser comparadas nas mesmas janelas fora da amostra; nenhuma garante precisão superior.

---

## Engenharia de atributos (XGBoost / LightGBM)

Os atributos elaborados manualmente desta seção valem para XGBoost e LightGBM. O VARMA usa diretamente vetores de defasagem normalizados; o Chronos-2 trabalha com a sequência-alvo sem esses atributos.

Os pipelines de boosting por árvores tratam a entrada como uma pequena série temporal multivariada:

- Uma coluna de *data e hora* (o cabeçalho contém `date` ou `time`, sem diferenciar maiúsculas).
- Várias colunas numéricas (por exemplo, `item_a`, `item_b`, `item_c`, ...).
- Uma coluna numérica é escolhida como **alvo** da previsão.

Internamente, o gerador cria um **vetor rico de atributos** para cada instante `t` e um **vetor de atributos futuros** para `t + 1`. Tudo é calculado **somente no cliente**, em JavaScript/TypeScript.

### Séries utilizadas nos atributos

- `datetimeKey`  
  - Detectada automaticamente pelo cabeçalho que contém `"date"` ou `"time"`.
  - Serve apenas para identificar o eixo temporal, não como atributo numérico direto.
- `targetKey`  
  - Coluna numérica que o usuário escolhe para prever.
- `featureKeys`  
  - Todas as outras colunas numéricas (nem data/hora nem alvo).
  - Tratadas como **séries exógenas**.

Internamente, `seriesMap: Record<string, number[]>` mantém um array numérico para cada série.

### Atributos por série (séries exógenas)

Para cada série exógena `x(t)` (cada chave de `featureKeys`) e instante `t`, calculamos:

1. **Valor contemporâneo**
   - `x(t)` (valor no índice temporal `t`).

2. **Atributos de defasagem (histórico)**
   - Até `MAX_LAG = 3`:
     - `x(t - 1)`
     - `x(t - 2)`
     - `x(t - 3)`
   - Isso permite aprender a dinâmica temporal de curto prazo de cada série.

3. **Primeira diferença**
   - `x(t) - x(t - 1)`
   - Captura mudanças locais (tendência / inclinação), não só o nível absoluto.

4. **Média móvel (média local)**
   - Janela móvel de `ROLLING_WINDOW = 7` passos:
     - `mean(x[t - 6 ... t])` (encurtada perto do começo da série)
   - Representa a tendência e o nível de referência local e suaviza ruídos de curto prazo.

> Se a série for menor que a janela, o código reduz automaticamente a janela para usar todos os pontos passados disponíveis até `t`.

### Histórico da série-alvo

Para a própria **série-alvo** `y(t)`, **não** incluímos o valor atual `y(t)` como atributo (pois é o rótulo daquele passo), mas incluímos seu histórico:

1. **Defasagens do alvo**
   - `y(t - 1)`
   - `y(t - 2)`
   - `y(t - 3)`

2. **Diferença do alvo**
   - `y(t) - y(t - 1)`

3. **Média móvel do alvo**
   - Mesma janela móvel acima:
     - `mean(y[t - 6 ... t])`

Isso permite aprender padrões como “o próximo valor depende dos últimos valores e da tendência local”, comuns em previsão de séries temporais.

### Interações entre séries

Para captar **relações entre séries diferentes**, criamos atributos de interação para cada **par de séries numéricas** (incluindo o alvo):

- Sejam `v_i(t)` e `v_j(t)` os valores contemporâneos de duas séries no instante `t`.
- Para cada par ordenado `(i, j)` com `i < j`, calculamos:

1. **Diferença (spread)**
   - `v_i(t) - v_j(t)`
   - Codifica diferenças relativas de nível entre as séries.

2. **Razão**
   - `v_i(t) / v_j(t)`
   - Para evitar divisão por zero, adicionamos um pequeno épsilon ao denominador quando necessário:
     - `denom = |v_j| < 1e-9 ? sign(v_j) * 1e-9 : v_j`
   - Codifica escala relativa e proporcionalidade.

3. **Produto**
   - `v_i(t) * v_j(t)`
   - Permite representar “efeitos de interação” quando os valores altos ou baixos de ambas as séries importam.

Esses atributos explicitam a **estrutura entre séries** para o booster, sem depender apenas de valores individuais.

### Índice temporal e atributos de Fourier

Também codificamos o tempo como atributos numéricos:

1. **Índice temporal**
   - Índice inteiro `t = 0, 1, 2, ...` (índice da linha).
   - Oferece ao booster uma maneira simples de modelar tendências globais.

2. **Atributos de Fourier** (padrões cíclicos)
   - Dois períodos (em “número de linhas”):
     - Período 24 (por exemplo, 24 horas em dados horários)
     - Período 168 (por exemplo, 7 dias × 24 horas)
   - Para cada período `P`, calculamos:
     - `sin(2πt / P)`
     - `cos(2πt / P)`
   - É uma forma padrão de incorporar sazonalidade/ciclos que os modelos de árvores também conseguem aproveitar.

O vetor final de atributos para cada instante `t` é:

```text
[ exogenous features (current, lags, diff, rolling mean for each series),
  target-series history (lags, diff, rolling mean),
  cross-series interactions (spread, ratio, product),
  time index, sin/cos(2πt/24), sin/cos(2πt/168) ]
```

### Vetor de atributos do passo futuro (lastFeatureRow)
A mesma lógica gera o vetor de atributos para t + 1 (previsão de um passo à frente):
- Conceitualmente, o próximo índice é t_next = n, sendo n o número de linhas observadas.
- Para os valores “atuais” em t_next, reutilizamos o último valor observado (índice n - 1).
- Defasagens e médias móveis são calculadas com os últimos MAX_LAG / ROLLING_WINDOW passos observados.
- A codificação temporal usa t_next como índice.
- Isso produz um único lastFeatureRow que representa o próximo passo com todo o histórico até a última observação.

Assim, a função buildFeatures retorna:
```text
{
  X: number[][];        // feature matrix for all observed steps
  y: number[];          // target series values for those steps
  lastFeatureRow: number[]; // feature vector representing t + 1
}
```

---

<!-- FRONTEND_STOCK_EVALUATION:START -->
## Resultados de ações — benchmark no navegador (até 2026-10-09)

| Setor | Modelo | MAPE anterior de 16 passos ↓ | MAPE recente de 16 passos ↓ | MAPE móvel de 1 passo ↓ |
| --- | --- | ---: | ---: | ---: |
| Montadoras | xgboost | 7.55% | 4.08% | 1.55% |
| Montadoras | lightgbm | 2.58% | 4.74% | 1.71% |
| Montadoras | varma | 11.82% | 3.67% | 1.81% |
| Montadoras | chronos | 1.86% | 3.20% | 1.07% |
| Montadoras | ridge | 2.69% | 6.78% | 1.47% |
| Montadoras | last_close | 2.26% | 2.70% | 1.09% |
| Bancos | xgboost | 3.56% | 2.27% | 1.66% |
| Bancos | lightgbm | 3.13% | 1.89% | 1.60% |
| Bancos | varma | 4.21% | 12.66% | 1.85% |
| Bancos | chronos | 3.68% | 4.60% | 1.78% |
| Bancos | ridge | 4.99% | 1.91% | 1.66% |
| Bancos | last_close | 4.06% | 2.84% | 1.46% |
| Eletrônicos | xgboost | 3.67% | 5.16% | 1.40% |
| Eletrônicos | lightgbm | 3.58% | 1.09% | 1.38% |
| Eletrônicos | varma | 5.13% | 21.04% | 1.81% |
| Eletrônicos | chronos | 3.11% | 3.09% | 1.36% |
| Eletrônicos | ridge | 7.11% | 5.62% | 1.72% |
| Eletrônicos | last_close | 3.04% | 1.56% | 1.30% |
| Telecomunicações | xgboost | 5.23% | 1.44% | 1.28% |
| Telecomunicações | lightgbm | 5.96% | 1.47% | 1.47% |
| Telecomunicações | varma | 13.19% | 14.50% | 1.41% |
| Telecomunicações | chronos | 5.43% | 3.09% | 1.08% |
| Telecomunicações | ridge | 7.14% | 1.65% | 1.13% |
| Telecomunicações | last_close | 3.44% | 2.83% | 0.88% |
| Companhias comerciais | xgboost | 3.08% | 4.58% | 1.41% |
| Companhias comerciais | lightgbm | 2.78% | 4.40% | 1.48% |
| Companhias comerciais | varma | 9.75% | 1.05% | 2.36% |
| Companhias comerciais | chronos | 3.14% | 3.45% | 1.27% |
| Companhias comerciais | ridge | 2.72% | 7.36% | 1.69% |
| Companhias comerciais | last_close | 2.46% | 4.63% | 1.32% |
### Comparação direta de 16 passos (5 setores, 2 holdouts; até 2026-10-09)

| Modelo | MAPE de preço recursivo ↓ | MAPE de preço direto ↓ | MAPE de retorno log direto ↓ | MAPE do último fechamento ↓ |
| --- | ---: | ---: | ---: | ---: |
| xgboost | 4.06% | 3.46% | 4.59% | 2.98% |
| lightgbm | 3.16% | 3.75% | 4.49% | 2.98% |
| ridge | 4.80% | 4.31% | 4.01% | 2.98% |
<!-- FRONTEND_STOCK_EVALUATION:END -->

## Resultados de ações — benchmark com mecanismo separado

<!-- STOCK_MULTIVARIATE:START -->
| Setor | Modelo | MAPE longo univariado ↓ | MAPE longo multivariado ↓ | MAPE recente univariado ↓ | MAPE recente multivariado ↓ |
| --- | --- | ---: | ---: | ---: | ---: |
| Montadoras | ridge | 1.48% | 1.52% | 1.07% | 1.13% |
| Montadoras | xgboost | 1.67% | 1.64% | 1.41% | 1.34% |
| Montadoras | lightgbm | 1.60% | 1.59% | 1.33% | 1.34% |
| Bancos | ridge | 1.63% | 1.66% | 1.47% | 1.52% |
| Bancos | xgboost | 1.77% | 1.80% | 1.66% | 1.61% |
| Bancos | lightgbm | 1.76% | 1.77% | 1.49% | 1.55% |
| Eletrônicos | ridge | 1.69% | 1.70% | 1.27% | 1.35% |
| Eletrônicos | xgboost | 1.83% | 1.91% | 1.45% | 1.50% |
| Eletrônicos | lightgbm | 1.79% | 1.80% | 1.34% | 1.41% |
| Telecomunicações | ridge | 0.81% | 0.82% | 0.90% | 0.87% |
| Telecomunicações | xgboost | 0.85% | 0.87% | 1.04% | 1.01% |
| Telecomunicações | lightgbm | 0.83% | 0.85% | 0.97% | 0.91% |
| Companhias comerciais | ridge | 1.63% | 1.63% | 1.39% | 1.41% |
| Companhias comerciais | xgboost | 1.77% | 1.69% | 1.50% | 1.53% |
| Companhias comerciais | lightgbm | 1.69% | 1.66% | 1.34% | 1.43% |
<!-- STOCK_MULTIVARIATE:END -->


---

## Benchmark AirPassengers

Consulte [`BENCHMARKS.md`](./BENCHMARKS.md) para o protocolo justo de 16 passos e as regras de comparação com artigos.

O repositório inclui o conjunto AirPassengers e um comando de benchmark para testar o comportamento dos modelos nessa série temporal mensal clássica.

Execute o benchmark com Docker Compose:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark
```

Saída JSON:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm xgboost --json'
```

Referência sazonal ingênua:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm seasonal-naive --json'
```


### Benchmark de holdout de 16 passos

- treino: primeiras 128 observações do AirPassengers
- holdout: próximas 16 observações
- nenhum valor real do holdout é realimentado durante a previsão
- métricas pontuais comuns: MAE, RMSE, MAPE, sMAPE e MASE

Reproduza o benchmark com:

```bash
docker compose -f docker-compose.test.yml run --rm \
  air_passengers_fair_benchmark \
  sh -lc '
    npm --prefix frontend/app ci &&
    node scripts/benchmark-air-passengers-fair.mjs --markdown
  '
```

Avaliação AirPassengers somente com LightGBM:

```bash
docker compose -f docker-compose.test.yml run --rm \
  lightgbm_air_passengers_benchmark
```

Isso executa o mesmo protocolo 128/16 com `--algorithm lightgbm`, permitindo comparar diretamente com as demais linhas do AirPassengers.

O VARMA é apresentado como N/A porque AirPassengers é univariado, enquanto o VARMA experimental deste repositório exige ao menos duas séries numéricas. Consulte [`BENCHMARKS.md`](./BENCHMARKS.md) para os protocolos multivariados e de comparação com artigos.

# Licença
- Apache License 2.0
