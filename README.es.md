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



## Demostración de 40 segundos

[![▶ Ver la demostración de 40 segundos](https://img.youtube.com/vi/AUFat22QJHE/hqdefault.jpg)](https://youtu.be/AUFat22QJHE)

## Entorno de prueba

[▶ Abrir la aplicación de pronósticos en el navegador](https://europanite.github.io/client-side-time-series-forecast-ai/)

Herramienta de IA para pronosticar series temporales íntegramente en el navegador. Es gratuita y segura, ya que todo se ejecuta de forma local en tu navegador.

Puedes elegir entre [XGBoost](https://xgboost.readthedocs.io/en/stable/), XGBoost Bagging ×2, [LightGBM](https://lightgbm.readthedocs.io/), LightGBM Bagging ×2, un modelo experimental de tipo VARMA, [Chronos-2](https://github.com/amazon-science/chronos-forecasting), [TimesFM 2.5](https://github.com/google-research/timesfm) y regresión Ridge.

---

## Descripción general

Esta herramienta de pronóstico multivariante de series temporales funciona completamente en tu navegador. No requiere instalación, registro ni pago. Basta con abrirla para empezar. Ayuda a las pequeñas empresas a prever los pedidos del día siguiente.

- Cargar datos de series temporales CSV/XLSX en el navegador
- Elegir cualquier columna numérica como variable objetivo
- Elegir entre XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, un modelo VARMA experimental, Chronos-2 y TimesFM 2.5 preentrenados, y regresión Ridge
- Entrenar el modelo elegido localmente en el navegador
- Pronosticar los siguientes 16 puntos y añadirlos al gráfico

Todo ocurre **dentro de tu navegador**. No hay API de backend ni se envían datos fuera de tu equipo.

---

## Demostración

1. Abre la demostración en GitHub Pages:  
   https://europanite.github.io/client-side-time-series-forecast-ai/

2. Sube un archivo de ejemplo, como [`data/sample_data.csv`](./data/sample_data.csv) (cotizaciones bursátiles) o [`data/sample_data.xlsx`](./data/sample_data.xlsx) (ejemplo multivariante sintético).
3. La aplicación realizará lo siguiente:
   - Detectar una **columna de fecha y hora**
   - Mostrar las columnas numéricas disponibles
4. Elige una columna numérica como **objetivo**.
5. Elige un **modelo de pronóstico**. `XGBoost` es el predeterminado; `XGBoost Bagging ×2` promedia dos regresores XGBoost entrenados con muestras bootstrap; `LightGBM` es otra opción de GBDT entrenada localmente; `LightGBM Bagging ×2` promedia dos regresores LightGBM con bootstrap; `VARMA experimental` es una referencia multivariante ligera; `Chronos-2 pretrained` es un modelo fundacional de cero disparos; `TimesFM 2.5` es un modelo ONNX opcional de cero disparos; y `Ridge` es una referencia lineal entrenada localmente.
6. Con XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, VARMA o Ridge, pulsa primero **Train**. Chronos-2 y TimesFM 2.5 ya están preentrenados y no necesitan entrenamiento local. Después, pulsa **Forecast +16** para predecir los siguientes 16 puntos.
7. Examina el gráfico para comparar la serie observada con la línea pronosticada.

---

# 🚀 Primeros pasos

## npm

### 1. Requisitos previos
- Node.js

### 2. Preparar los servicios:

```bash
cd frontend/app
npm ci
npm run dev
```

### 3. Pruebas:

```bash
npm test -- --ci --runInBand --coverage --verbose
npx tsc --noEmit
npm run build
```

## Docker Compose

### 1. Requisitos previos
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Preparar los servicios:

```bash
docker compose up --build
```

### 3. Pruebas:

```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

## Estructura de los datos

<pre>
datetime,item_a,item_b,item_c,...
2025-01-01 00:00:00+09:00,10,20,31,...
2025-01-02 00:00:00+09:00,12,19,31,...
2025-01-03 00:00:00+09:00,14,18,33,...
 ...
</pre>

### Requisitos:

##### Una columna de fecha y hora
El nombre de la columna debe contener «date» o «time», sin distinguir mayúsculas de minúsculas.
Se usa como eje temporal, pero no se transforma directamente en una característica numérica.

##### Una o más columnas numéricas
Se usan como objetivo y/o como variables exógenas.
La aplicación admite seis modalidades de pronóstico con entrenamiento local:

- **XGBoost**: seleccionas una columna numérica como objetivo y las demás aportan señales adicionales.
- **XGBoost Bagging ×2**: entrena dos modelos XGBoost con muestras bootstrap independientes de las mismas características supervisadas y promedia sus salidas. El modo directo de 16 pasos ajusta 32 potenciadores.
- **LightGBM Bagging ×2**: entrena dos modelos LightGBM mediante el mismo muestreo bootstrap que XGBoost Bagging ×2 y promedia sus predicciones. El modo directo de 16 pasos ajusta 32 potenciadores.
- **LightGBM**: utiliza el mismo objetivo y las mismas características multivariantes elaboradas que XGBoost, pero ajusta un regresor LightGBM.
- **VARMA experimental**: modela conjuntamente todas las columnas numéricas y muestra el pronóstico de la columna objetivo elegida.
- **Ridge**: ajusta localmente una regresión lineal regularizada usando las mismas características elaboradas y la misma ruta de predicción recursiva que XGBoost y LightGBM.

---

<!-- ALL_MODEL_EVALUATION:START -->
### Los ocho modelos — evaluación de retención comparable en el navegador (hasta 2026-10-30)

Cada sector utiliza 256 cierres históricos para predecir las mismas 16 sesiones siguientes. Cuanto menor sea el MAPE, mejor. Los cinco modelos supervisados emplean **Direct price** (opción predeterminada del navegador); VARMA realiza pronóstico recursivo conjunto; Chronos-2 y TimesFM 2.5 solo utilizan la serie objetivo seleccionada. Todos se ejecutan en Chromium, sin reimplementarlos en Node.

| Modelo | Automotrices MAPE ↓ | Bancos MAPE ↓ | Electrónica MAPE ↓ | Telecomunicaciones MAPE ↓ | Comercializadoras MAPE ↓ | MAPE medio ↓ | sMAPE medio ↓ |
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

Protocolo: `real-browser-recent-16step-all-eight-v1`; SHA256 de entrada: `bd5150223ed5…`; SHA256 de fuente: `e2e34fbc83b1…`.
Las puntuaciones son retrospectivas y dependen de la instantánea evaluada; no constituyen una auditoría de predicciones en vivo.
[Método y reproducción](docs/ALL_MODEL_EVALUATION.md). MAE/RMSE completos, predicciones y tiempos: [`reports/stocks/all-models.json`](reports/stocks/all-models.json).
<!-- ALL_MODEL_EVALUATION:END -->

## Enfoque de pronóstico

El proyecto ofrece ocho algoritmos de pronóstico con supuestos deliberadamente distintos:

| Modelo | Estilo de aprendizaje | ¿Usa varias series de entrada? | ¿Entrenamiento local? | Método de pronóstico |
| --- | --- | --- | --- | --- |
| XGBoost | Regresión con árboles de decisión potenciados por gradiente sobre características temporales elaboradas | Sí | Sí | Pronóstico recursivo o directo de 16 horizontes |
| XGBoost Bagging ×2 | Dos regresores XGBoost con bootstrap independiente cuyas predicciones se promedian | Sí | Sí (2 por horizonte) | Pronóstico recursivo o directo de 16 horizontes |
| LightGBM | Regresión con árboles potenciados por gradiente basada en histogramas y las mismas características que XGBoost | Sí | Sí | Pronóstico recursivo o directo de 16 horizontes |
| LightGBM Bagging ×2 | Dos regresores LightGBM con bootstrap independiente cuyas predicciones se promedian | Sí | Sí (2 por horizonte) | Pronóstico recursivo o directo de 16 horizontes |
| VARMA experimental | Autorregresión lineal multisalida con regularización Ridge y corrección de residuos | Sí, conjuntamente | Sí | Pronóstico recursivo conjunto multisalida |
| Chronos-2-small INT8 ONNX | Modelo fundacional preentrenado para series temporales basado en parches | Solo objetivo seleccionado en la interfaz actual | No | Pronóstico probabilístico directo de varios pasos |
| TimesFM 2.5 ONNX | Modelo fundacional preentrenado para series temporales (descarga grande opcional) | Solo objetivo seleccionado | No | Pronóstico probabilístico directo de varios pasos |
| Ridge (linear baseline) | Regresión lineal regularizada con L2 sobre las características compartidas con los modelos de árboles | Sí | Sí | Pronóstico recursivo o directo de 16 horizontes |

No son ocho implementaciones del mismo algoritmo. XGBoost, LightGBM y sus variantes con bagging convierten las series temporales en un mismo problema de aprendizaje supervisado tabular. VARMA modela conjuntamente vectores rezagados de varias series; Ridge proporciona una referencia lineal sobre las mismas características supervisadas; Chronos-2 y TimesFM 2.5 utilizan modelos neuronales preentrenados sin ajustar parámetros nuevos al conjunto de datos cargado.

El **pronóstico directo de 16 pasos es la estrategia predeterminada** de XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2 y Ridge. Cada paso futuro se ajusta por separado, evitando inventar entradas futuras de otras series. Para cambiar al método recursivo, abre **Settings → Advanced forecasting → Forecast strategy**. El recursivo usa un modelo y predice los 16 pasos de forma iterativa. VARMA utiliza autorregresión conjunta de varias series; Chronos-2 y TimesFM 2.5 predicen directamente con modelos preentrenados. No se aplica ninguna mezcla estacional fija a las predicciones supervisadas. Consulta las [estrategias de pronóstico](docs/FORECAST_STRATEGIES.md).

### Selección de modelo

#### XGBoost

`XGBoost` es el modelo entrenado localmente de forma predeterminada. XGBoost es un algoritmo de árboles de decisión potenciados por gradiente: incorpora árboles secuencialmente, y cada árbol nuevo reduce los errores del conjunto anterior. No recibe las series temporales directamente; primero se convierte cada instante en un vector de características y luego se entrena XGBoost como regresor.

La implementación en el navegador utiliza:

- rezagos del objetivo y de las series exógenas hasta `MAX_LAG = 3`
- primeras diferencias
- media móvil de `ROLLING_WINDOW = 7`
- interacciones de diferencia, cociente y producto entre series numéricas
- índice temporal
- características de Fourier con períodos 24 y 168
- `gbtree` con profundidad 4, tasa de aprendizaje 0.1, submuestreo 0.8 y 200 iteraciones de boosting

En el modo **recursive**, predice un paso cada vez; cada predicción pasa a formar parte del historial para el siguiente paso y las series futuras desconocidas se prolongan con heurísticas. En el modo **direct**, 16 modelos independientes por horizonte utilizan las últimas características realmente observadas, sin inventar valores futuros de otras series. No se aplica una mezcla estacional fija.

**Ventajas**

- capta relaciones no lineales e interacciones entre series
- aprovecha bien las características multivariantes diseñadas para el proyecto
- se entrena de forma local y relativamente rápida en el navegador
- no requiere descargar un modelo preentrenado grande

**Limitaciones**

- la calidad depende de la ingeniería de características elegida
- la predicción recursiva puede acumular errores en los pasos más lejanos
- los períodos de Fourier y la prolongación estacional son supuestos de la aplicación, no una estructura de calendario aprendida automáticamente

Elige XGBoost si buscas un modelo no lineal ligero, entrenado localmente, que aproveche las relaciones entre varias columnas numéricas.

#### LightGBM

`LightGBM` es otro modelo de árboles potenciados por gradiente entrenado localmente. El navegador usa `@wlearn/lightgbm`, una compilación WebAssembly de LightGBM, y reutiliza a propósito la salida de `buildFeatures()` y las estrategias de 16 pasos de XGBoost (recursiva o directa).

La configuración predeterminada de LightGBM usa regresión, tasa de aprendizaje 0.1, 31 hojas, profundidad máxima 4, submuestreo 0.8 y 200 rondas de boosting. Utiliza los pronósticos originales, sin mezcla estacional fija.

Elige LightGBM si quieres una alternativa GBDT basada en histogramas comparable directamente, sin cambiar el flujo de características ni el protocolo de pronóstico de la aplicación.

#### VARMA experimental

`VARMA experimental` es una referencia multivariante ligera que funciona de forma nativa en el navegador. A pesar de su nombre, **no es un estimador VARMA estadístico completo de máxima verosimilitud**. Se parece más a un VAR regularizado con una pequeña corrección de residuos y estabilización estacional opcional.

La implementación:

1. selecciona hasta 8 series numéricas y las estandariza;
2. concatena los 7 vectores multivariantes anteriores en un vector de características rezagadas;
3. ajusta todas las series de salida a la vez mediante regresión Ridge multisalida (`ridge = 1e-2`);
4. estima una pequeña corrección a partir de residuos recientes (`maLag = 1`);
5. opcionalmente combina la salida autorregresiva con un vector de rezago estacional (`seasonalLag = 7`; valor predeterminado `seasonalBlend = 0`);
6. realimenta recursivamente el vector predicho al siguiente paso.

Como se predice el vector numérico completo en cada paso, VARMA avanza todas las series modeladas juntas y no solo el objetivo elegido.

**Ventajas**

- sencillo y barato computacionalmente
- modela varias series numéricas conjuntamente
- ofrece una referencia lineal de estilo clásico útil frente a XGBoost y Chronos-2
- funciona por completo en TypeScript sin descargar otro modelo

**Limitaciones**

- requiere al menos dos series numéricas y más de 7 filas utilizables
- presupone relaciones de rezago principalmente lineales
- la corrección de residuos y la mezcla estacional opcional son heurísticas, no un procedimiento completo de estimación de medias móviles
- no debe presentarse como implementación de referencia de VARMA estadístico

Utiliza `VARMA experimental` principalmente como referencia multivariante interpretable cuando varias series se mueven juntas.

#### Chronos-2 preentrenado

`Chronos-2 pretrained` difiere fundamentalmente de los modelos de ajuste local anteriores. Chronos-2 es un modelo fundacional preentrenado para series temporales basado en parches que produce **pronósticos de cuantiles** directamente a varios pasos. El repositorio ejecuta `Chronos-2-small INT8` como modelo ONNX con ONNX Runtime Web, de modo que, una vez descargado, la inferencia es local.

La integración actual en el navegador:

- **no** entrena con el conjunto de datos cargado;
- solo usa la serie objetivo como contexto de Chronos;
- necesita al menos 16 observaciones numéricas del objetivo;
- conserva como máximo 5.760 observaciones de contexto;
- agrupa la entrada en parches de 16 puntos y rellena por la izquierda con `NaN` el primer parche incompleto;
- ejecuta la salida interna de 672 pasos del grafo ONNX (`42 × 16`) y expone los primeros 16 a la interfaz;
- lee los cuantiles del modelo y muestra la mediana (`p50`) con los límites de incertidumbre `p10` y `p90`.

Chronos-2 admite en sí mismo pronósticos multivariantes más avanzados y el uso de covariables, pero **la interfaz actual todavía no aprovecha esas capacidades**. Por tanto, aquí funciona como pronosticador univariante preentrenado dentro de una aplicación por lo demás multivariante.

**Ventajas**

- pronóstico de cero disparos: no necesita ajuste por conjunto de datos
- predice directamente todo el horizonte sin aplicar recursivamente modelos de un paso
- aporta información probabilística mediante cuantiles
- transfiere patrones aprendidos en el preentrenamiento a series nuevas

**Limitaciones**

- hay que descargar el modelo antes del primer uso
- el navegador usa una exportación ONNX INT8; los resultados pueden diferir del checkpoint oficial de precisión completa
- la interfaz actual ignora las columnas numéricas adicionales al llamar a Chronos-2
- la memoria del navegador y la ejecución WASM limitan en la práctica el tamaño del modelo y el contexto

En una evaluación histórica AirPassengers con retención 128/16, `Chronos-2-small INT8 ONNX` obtuvo los menores MAE, RMSE, MAPE, sMAPE y MASE entre los modelos comparables. Consulta la sección de pruebas para los valores y el protocolo. **Son resultados históricos de una versión anterior; no deben compararse con las nuevas características y estrategias sin repetir la evaluación.**

### Pronóstico de 16 pasos

El horizonte predeterminado de la aplicación es 16 porque Chronos-2 ONNX usa parches de 16 puntos y las API de XGBoost, LightGBM y VARMA se alinean con ese horizonte para compararlas.

Los algoritmos llegan a esos 16 puntos de distintas maneras:

- **XGBoost, LightGBM y Ridge** pueden predecir recursivamente con un único modelo ajustado de un paso o directamente con 16 modelos específicos por horizonte.
- **VARMA experimental** predice recursivamente el vector multivariante completo, avanzando juntas todas las series incluidas.
- **Chronos-2** realiza inferencia probabilística directa de varios pasos y devuelve las primeras 16 posiciones futuras del modelo preentrenado.

La estrategia directa es la **predeterminada** para XGBoost, LightGBM y Ridge. La recursiva se encuentra en las opciones avanzadas de Settings. Allí también puede cambiarse el objetivo directo: de los valores originales predeterminados a retornos logarítmicos acumulados, siempre que la serie sea estrictamente positiva. El método directo evita fabricar entradas iterativamente, pero requiere ajustar hasta 16 modelos. Las estrategias deben compararse sobre las mismas ventanas de datos no vistos; ninguna garantiza mayor precisión.

---

## Ingeniería de características (XGBoost / LightGBM)

Las características diseñadas manualmente de esta sección se aplican a XGBoost y LightGBM. VARMA utiliza directamente vectores de rezagos normalizados, mientras que Chronos-2 trabaja con la serie objetivo sin estas características.

Los modelos de boosting con árboles tratan la entrada como una pequeña serie temporal multivariante:

- Una columna de *fecha y hora* (nombre que contiene `date` o `time`, sin importar mayúsculas).
- Varias columnas numéricas (p. ej., `item_a`, `item_b`, `item_c`, ...).
- Se elige una columna numérica como **objetivo** del pronóstico.

El generador construye internamente un **vector de características completo** para cada instante `t` y un **vector de características futuras** para `t + 1`. Todo se calcula **solo en el cliente** mediante JavaScript/TypeScript.

### Series utilizadas como características

- `datetimeKey`  
  - Se detecta automáticamente por un encabezado que contiene `"date"` o `"time"`.
  - Solo permite identificar el eje temporal; no se usa directamente como característica numérica.
- `targetKey`  
  - Columna numérica que el usuario desea pronosticar.
- `featureKeys`  
  - Todas las demás columnas numéricas (ni fecha/hora ni objetivo).
  - Se consideran **series exógenas**.

Internamente, `seriesMap: Record<string, number[]>` almacena un arreglo numérico por serie.

### Características por serie (series exógenas)

Para cada serie exógena `x(t)` (cada clave de `featureKeys`) y cada instante `t`, calculamos:

1. **Valor contemporáneo**
   - `x(t)` (valor en el índice temporal `t`).

2. **Características de rezago (historial)**
   - Hasta `MAX_LAG = 3`:
     - `x(t - 1)`
     - `x(t - 2)`
     - `x(t - 3)`
   - Permite aprender la dinámica temporal a corto plazo de cada serie.

3. **Primera diferencia**
   - `x(t) - x(t - 1)`
   - Capta cambios locales (tendencia / pendiente) y no solo el nivel absoluto.

4. **Media móvil (promedio local)**
   - Ventana de `ROLLING_WINDOW = 7` pasos:
     - `mean(x[t - 6 ... t])` (acortada cerca del comienzo de la serie)
   - Representa la tendencia y el nivel local, suavizando el ruido a corto plazo.

> Si la serie es más corta que la ventana, el código la reduce automáticamente para incluir todos los puntos anteriores disponibles hasta `t`.

### Historial de la serie objetivo

Para la propia **serie objetivo** `y(t)`, **no** incluimos el valor actual `y(t)` como característica, porque es la etiqueta de ese instante; sí incluimos su historial:

1. **Rezagos del objetivo**
   - `y(t - 1)`
   - `y(t - 2)`
   - `y(t - 3)`

2. **Diferencia del objetivo**
   - `y(t) - y(t - 1)`

3. **Media móvil del objetivo**
   - La misma ventana móvil indicada antes:
     - `mean(y[t - 6 ... t])`

Así el modelo aprende patrones como «el siguiente valor depende de los últimos valores y su tendencia local», habituales en el pronóstico temporal.

### Interacciones entre series

Para captar las **relaciones entre distintas series**, generamos características de interacción para cada **par de series numéricas**, incluido el objetivo:

- Sean `v_i(t)` y `v_j(t)` los valores contemporáneos de dos series en el instante `t`.
- Para cada par ordenado `(i, j)` con `i < j`, calculamos:

1. **Diferencia (spread)**
   - `v_i(t) - v_j(t)`
   - Codifica diferencias relativas de nivel entre series.

2. **Cociente**
   - `v_i(t) / v_j(t)`
   - Para evitar dividir entre cero, añadimos un épsilon pequeño al denominador si hace falta:
     - `denom = |v_j| < 1e-9 ? sign(v_j) * 1e-9 : v_j`
   - Codifica la escala relativa y la proporcionalidad.

3. **Producto**
   - `v_i(t) * v_j(t)`
   - Permite expresar «efectos de interacción» cuando importa que ambas series sean grandes o pequeñas.

Estas características exponen explícitamente la **estructura multiserie** al modelo de boosting, en vez de depender solo de valores individuales.

### Índice temporal y características de Fourier

También codificamos el propio tiempo como características numéricas:

1. **Índice temporal**
   - Índice entero `t = 0, 1, 2, ...` (número de fila).
   - Permite al booster modelar tendencias globales de forma sencilla.

2. **Características de Fourier** (patrones cíclicos)
   - Dos períodos (medidos en «número de filas»):
     - Período 24 (p. ej., 24 horas en datos horarios)
     - Período 168 (p. ej., 7 días × 24 horas)
   - Para cada período `P`, calculamos:
     - `sin(2πt / P)`
     - `cos(2πt / P)`
   - Es una forma habitual de representar estacionalidad y ciclos que también aprovechan los modelos de árboles.

El vector final de características para cada instante `t` es:

```text
[ exogenous features (current, lags, diff, rolling mean for each series),
  target-series history (lags, diff, rolling mean),
  cross-series interactions (spread, ratio, product),
  time index, sin/cos(2πt/24), sin/cos(2πt/168) ]
```

### Vector de características del siguiente paso (lastFeatureRow)
La misma lógica genera un vector de características para t + 1 (pronóstico a un paso):
- Conceptualmente, el siguiente índice es t_next = n, donde n es el número de filas observadas.
- Para los valores «actuales» de cada serie en t_next, reutilizamos la última observación (índice n - 1).
- Los rezagos y medias móviles se calculan con los últimos MAX_LAG / ROLLING_WINDOW pasos observados.
- Las codificaciones temporales usan t_next como índice.
- Así obtenemos un único vector lastFeatureRow que representa el siguiente instante a partir de todo el historial observado.

Por tanto, la función buildFeatures devuelve:
```text
{
  X: number[][];        // feature matrix for all observed steps
  y: number[];          // target series values for those steps
  lastFeatureRow: number[]; // feature vector representing t + 1
}
```

---

<!-- FRONTEND_STOCK_EVALUATION:START -->
## Resultados bursátiles — evaluación en navegador (hasta 2026-10-09)

| Sector | Modelo | MAPE anterior a 16 pasos ↓ | MAPE reciente a 16 pasos ↓ | MAPE móvil a 1 paso ↓ |
| --- | --- | ---: | ---: | ---: |
| Automotrices | xgboost | 7.55% | 4.08% | 1.55% |
| Automotrices | lightgbm | 2.58% | 4.74% | 1.71% |
| Automotrices | varma | 11.82% | 3.67% | 1.81% |
| Automotrices | chronos | 1.86% | 3.20% | 1.07% |
| Automotrices | ridge | 2.69% | 6.78% | 1.47% |
| Automotrices | last_close | 2.26% | 2.70% | 1.09% |
| Bancos | xgboost | 3.56% | 2.27% | 1.66% |
| Bancos | lightgbm | 3.13% | 1.89% | 1.60% |
| Bancos | varma | 4.21% | 12.66% | 1.85% |
| Bancos | chronos | 3.68% | 4.60% | 1.78% |
| Bancos | ridge | 4.99% | 1.91% | 1.66% |
| Bancos | last_close | 4.06% | 2.84% | 1.46% |
| Electrónica | xgboost | 3.67% | 5.16% | 1.40% |
| Electrónica | lightgbm | 3.58% | 1.09% | 1.38% |
| Electrónica | varma | 5.13% | 21.04% | 1.81% |
| Electrónica | chronos | 3.11% | 3.09% | 1.36% |
| Electrónica | ridge | 7.11% | 5.62% | 1.72% |
| Electrónica | last_close | 3.04% | 1.56% | 1.30% |
| Telecomunicaciones | xgboost | 5.23% | 1.44% | 1.28% |
| Telecomunicaciones | lightgbm | 5.96% | 1.47% | 1.47% |
| Telecomunicaciones | varma | 13.19% | 14.50% | 1.41% |
| Telecomunicaciones | chronos | 5.43% | 3.09% | 1.08% |
| Telecomunicaciones | ridge | 7.14% | 1.65% | 1.13% |
| Telecomunicaciones | last_close | 3.44% | 2.83% | 0.88% |
| Comercializadoras | xgboost | 3.08% | 4.58% | 1.41% |
| Comercializadoras | lightgbm | 2.78% | 4.40% | 1.48% |
| Comercializadoras | varma | 9.75% | 1.05% | 2.36% |
| Comercializadoras | chronos | 3.14% | 3.45% | 1.27% |
| Comercializadoras | ridge | 2.72% | 7.36% | 1.69% |
| Comercializadoras | last_close | 2.46% | 4.63% | 1.32% |
### Comparación directa de 16 pasos (5 sectores, 2 ventanas de prueba; hasta 2026-10-09)

| Modelo | MAPE de precio recursivo ↓ | MAPE de precio directo ↓ | MAPE de retorno logarítmico directo ↓ | MAPE del último cierre ↓ |
| --- | ---: | ---: | ---: | ---: |
| xgboost | 4.06% | 3.46% | 4.59% | 2.98% |
| lightgbm | 3.16% | 3.75% | 4.49% | 2.98% |
| ridge | 4.80% | 4.31% | 4.01% | 2.98% |
<!-- FRONTEND_STOCK_EVALUATION:END -->

## Resultados bursátiles — evaluación con motor independiente

<!-- STOCK_MULTIVARIATE:START -->
| Sector | Modelo | MAPE largo univariante ↓ | MAPE largo multivariante ↓ | MAPE reciente univariante ↓ | MAPE reciente multivariante ↓ |
| --- | --- | ---: | ---: | ---: | ---: |
| Automotrices | ridge | 1.48% | 1.52% | 1.07% | 1.13% |
| Automotrices | xgboost | 1.67% | 1.64% | 1.41% | 1.34% |
| Automotrices | lightgbm | 1.60% | 1.59% | 1.33% | 1.34% |
| Bancos | ridge | 1.63% | 1.66% | 1.47% | 1.52% |
| Bancos | xgboost | 1.77% | 1.80% | 1.66% | 1.61% |
| Bancos | lightgbm | 1.76% | 1.77% | 1.49% | 1.55% |
| Electrónica | ridge | 1.69% | 1.70% | 1.27% | 1.35% |
| Electrónica | xgboost | 1.83% | 1.91% | 1.45% | 1.50% |
| Electrónica | lightgbm | 1.79% | 1.80% | 1.34% | 1.41% |
| Telecomunicaciones | ridge | 0.81% | 0.82% | 0.90% | 0.87% |
| Telecomunicaciones | xgboost | 0.85% | 0.87% | 1.04% | 1.01% |
| Telecomunicaciones | lightgbm | 0.83% | 0.85% | 0.97% | 0.91% |
| Comercializadoras | ridge | 1.63% | 1.63% | 1.39% | 1.41% |
| Comercializadoras | xgboost | 1.77% | 1.69% | 1.50% | 1.53% |
| Comercializadoras | lightgbm | 1.69% | 1.66% | 1.34% | 1.43% |
<!-- STOCK_MULTIVARIATE:END -->


---

## Pruebas de referencia AirPassengers

Consulta [`BENCHMARKS.md`](./BENCHMARKS.md) para el protocolo equitativo de 16 pasos y las reglas de comparación con artículos.

El repositorio incluye el conjunto AirPassengers y un comando de evaluación para estudiar el comportamiento con esta serie temporal mensual clásica.

Ejecuta la evaluación con Docker Compose:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark
```

Salida JSON:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm xgboost --json'
```

Referencia estacional ingenua:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm seasonal-naive --json'
```


### Evaluación con retención de 16 pasos

- entrenamiento: primeras 128 observaciones de AirPassengers
- retención: siguientes 16 observaciones
- no se reutiliza ningún valor real de la retención durante el pronóstico
- métricas puntuales comunes: MAE, RMSE, MAPE, sMAPE y MASE

Reproduce la evaluación con:

```bash
docker compose -f docker-compose.test.yml run --rm \
  air_passengers_fair_benchmark \
  sh -lc '
    npm --prefix frontend/app ci &&
    node scripts/benchmark-air-passengers-fair.mjs --markdown
  '
```

Evaluación AirPassengers solo con LightGBM:

```bash
docker compose -f docker-compose.test.yml run --rm \
  lightgbm_air_passengers_benchmark
```

Esto ejecuta el mismo protocolo 128/16 con `--algorithm lightgbm`, por lo que los resultados son directamente comparables con las demás filas de AirPassengers.

VARMA aparece como N/A porque AirPassengers es univariante y la implementación experimental de VARMA de este repositorio necesita al menos dos series numéricas. Consulta [`BENCHMARKS.md`](./BENCHMARKS.md) para los protocolos multivariante y de comparación con artículos.

# Licencia
- Apache License 2.0
