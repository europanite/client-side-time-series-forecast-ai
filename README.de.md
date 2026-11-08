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



## 40-Sekunden-Demo

[![▶ 40-Sekunden-Demo ansehen](https://img.youtube.com/vi/AUFat22QJHE/hqdefault.jpg)](https://youtu.be/AUFat22QJHE)

## Playground

[▶ Prognose-App im Browser öffnen](https://europanite.github.io/client-side-time-series-forecast-ai/)

Browserbasierte KI für clientseitige Zeitreihenprognosen. Das Tool ist vollständig kostenlos und sicher, da es ausschließlich in Ihrem Browser ausgeführt wird.

Zur Auswahl stehen [XGBoost](https://xgboost.readthedocs.io/en/stable/), XGBoost Bagging ×2, [LightGBM](https://lightgbm.readthedocs.io/), LightGBM Bagging ×2, ein experimentelles VARMA-ähnliches Modell, [Chronos-2](https://github.com/amazon-science/chronos-forecasting), [TimesFM 2.5](https://github.com/google-research/timesfm) und Ridge-Regression.

---

## Überblick

Dieses Tool zur multivariaten Zeitreihenprognose läuft vollständig in Ihrem Webbrowser. Keine Installation, Registrierung oder Zahlung erforderlich. Einfach im Browser öffnen und loslegen. Es hilft kleinen Unternehmen, Bestellungen für den nächsten Tag vorherzusagen.

- CSV-/XLSX-Zeitreihendaten im Browser laden
- Eine beliebige numerische Spalte als Prognoseziel auswählen
- Zwischen XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, experimentellem VARMA, vortrainiertem Chronos-2 und TimesFM 2.5 sowie Ridge-Regression wählen
- Das ausgewählte Modell lokal im Browser trainieren
- Die nächsten 16 Datenpunkte prognostizieren und im Diagramm ergänzen

Alles geschieht **in Ihrem Browser**. Es gibt keine Backend-API, und keine Daten verlassen Ihren Computer.

---

## Demo

1. Öffnen Sie die GitHub-Pages-Demo:  
   https://europanite.github.io/client-side-time-series-forecast-ai/

2. Laden Sie eine Beispieldatei wie [`data/sample_data.csv`](./data/sample_data.csv) (Aktienkurse) oder [`data/sample_data.xlsx`](./data/sample_data.xlsx) (synthetisches multivariates Beispiel) hoch.
3. Die App wird:
   - eine **Datum-/Uhrzeitspalte** erkennen
   - die verfügbaren numerischen Spalten auflisten
4. Wählen Sie eine numerische Spalte als **Ziel** aus.
5. Wählen Sie ein **Prognosemodell**. `XGBoost` ist voreingestellt; `XGBoost Bagging ×2` mittelt zwei mit Bootstrap-Stichproben trainierte XGBoost-Regressoren; `LightGBM` ist eine alternativ lokal trainierte GBDT-Variante; `LightGBM Bagging ×2` mittelt zwei LightGBM-Regressoren; `VARMA experimental` ist eine schlanke multivariate Baseline; `Chronos-2 pretrained` ist ein Zero-Shot-Fundamentmodell; `TimesFM 2.5` ist ein optionales Zero-Shot-ONNX-Modell; `Ridge` ist eine lokal trainierte lineare Baseline.
6. Klicken Sie bei XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, VARMA oder Ridge zunächst auf **Train**. Chronos-2 und TimesFM 2.5 sind vortrainiert und brauchen kein lokales Training. Klicken Sie anschließend auf **Forecast +16**, um die nächsten 16 Punkte vorherzusagen.
7. Vergleichen Sie im Diagramm die beobachtete Zeitreihe mit der Prognoselinie.

---

# 🚀 Erste Schritte

## npm

### 1. Voraussetzungen
- Node.js

### 2. Dienste erstellen:

```bash
cd frontend/app
npm ci
npm run dev
```

### 3. Testen:

```bash
npm test -- --ci --runInBand --coverage --verbose
npx tsc --noEmit
npm run build
```

## Docker Compose

### 1. Voraussetzungen
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Dienste erstellen:

```bash
docker compose up --build
```

### 3. Testen:

```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

## Datenstruktur

<pre>
datetime,item_a,item_b,item_c,...
2025-01-01 00:00:00+09:00,10,20,31,...
2025-01-02 00:00:00+09:00,12,19,31,...
2025-01-03 00:00:00+09:00,14,18,33,...
 ...
</pre>

### Anforderungen:

##### Eine Datum-/Uhrzeitspalte
Die Spaltenüberschrift enthält „date“ oder „time“ (ohne Beachtung der Groß-/Kleinschreibung).
Sie dient als Zeitachse, wird aber nicht direkt in numerische Merkmale umgewandelt.

##### Eine oder mehrere numerische Spalten
Diese dienen als Ziel und/oder exogene Merkmale.
Die App unterstützt sechs lokal angepasste Prognosemodi:

- **XGBoost**: Eine numerische Spalte dient als Ziel, die übrigen als zusätzliche Signale.
- **XGBoost Bagging ×2**: Trainiert zwei XGBoost-Modelle auf unabhängigen Bootstrap-Stichproben derselben überwachten Merkmale und mittelt ihre Ausgaben. Im direkten 16-Schritte-Modus werden 32 Booster angepasst.
- **LightGBM Bagging ×2**: Trainiert zwei LightGBM-Modelle mit demselben Bootstrap-Verfahren wie XGBoost Bagging ×2 und mittelt die Vorhersagen. Im direkten 16-Schritte-Modus werden 32 Booster angepasst.
- **LightGBM**: Nutzt dasselbe Ziel und dieselben konstruierten multivariaten Merkmale wie XGBoost, passt aber einen LightGBM-Regressor an.
- **VARMA experimental**: Modelliert alle numerischen Spalten gemeinsam und zeigt die Prognose der ausgewählten Zielspalte.
- **Ridge**: Lokal angepasste regularisierte lineare Regression mit denselben konstruierten Merkmalen und demselben rekursiven Prognoseweg wie XGBoost und LightGBM.

---

<!-- ALL_MODEL_EVALUATION:START -->
### Alle acht Modelle — vergleichbarer Browser-Holdout (bis 2026-10-30)

Jeder Sektor verwendet 256 historische Schlusskurse, um dieselben nächsten 16 Handelssitzungen vorherzusagen. Ein niedrigerer MAPE ist besser. Die fünf überwachten Modelle nutzen **Direct price** (Browserstandard); VARMA prognostiziert gemeinsam rekursiv; Chronos-2 und TimesFM 2.5 verwenden ausschließlich die gewählte Zielreihe. Alle Modelle laufen in Chromium und werden nicht in Node neu implementiert.

| Modell | Autohersteller MAPE ↓ | Banken MAPE ↓ | Elektronik MAPE ↓ | Telekommunikation MAPE ↓ | Handelshäuser MAPE ↓ | Mittlerer MAPE ↓ | Mittlerer sMAPE ↓ |
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

Protokoll: `real-browser-recent-16step-all-eight-v1`; Eingabe-SHA256: `bd5150223ed5…`; Quellcode-SHA256: `e2e34fbc83b1…`.
Die Ergebnisse sind retrospektiv und gelten für den bewerteten Snapshot, nicht für eine Live-Prognoseprüfung.
[Methode und Reproduktion](docs/ALL_MODEL_EVALUATION.md). Vollständige MAE/RMSE-Werte, Vorhersagen und Laufzeiten: [`reports/stocks/all-models.json`](reports/stocks/all-models.json).
<!-- ALL_MODEL_EVALUATION:END -->

## Prognoseansatz

Das Projekt stellt acht Prognosealgorithmen mit bewusst unterschiedlichen Annahmen bereit:

| Modell | Lernverfahren | Mehrere Eingabereihen? | Lokales Training? | Prognoseverfahren |
| --- | --- | --- | --- | --- |
| XGBoost | Gradient-Boosting-Entscheidungsbaumregression auf konstruierten Zeitreihenmerkmalen | Ja | Ja | Rekursive oder direkte Prognose für 16 Horizonte |
| XGBoost Bagging ×2 | Zwei unabhängig per Bootstrap trainierte XGBoost-Regressoren mit gemittelten Vorhersagen | Ja | Ja (2 pro Horizont) | Rekursive oder direkte Prognose für 16 Horizonte |
| LightGBM | Histogrammbasierte Gradient-Boosting-Baumregression mit denselben Merkmalen wie XGBoost | Ja | Ja | Rekursive oder direkte Prognose für 16 Horizonte |
| LightGBM Bagging ×2 | Zwei unabhängig per Bootstrap trainierte LightGBM-Regressoren mit gemittelten Vorhersagen | Ja | Ja (2 pro Horizont) | Rekursive oder direkte Prognose für 16 Horizonte |
| VARMA experimental | Lineare Mehrfachausgabe-Autoregression mit Ridge-Regularisierung und Residuenkorrektur | Ja, gemeinsam | Ja | Gemeinsame rekursive Mehrfachausgabe-Prognose |
| Chronos-2-small INT8 ONNX | Vortrainiertes patchbasiertes Fundamentmodell für Zeitreihen | In aktueller UI nur gewähltes Ziel | Nein | Direkte probabilistische Mehrschrittprognose |
| TimesFM 2.5 ONNX | Vortrainiertes Zeitreihen-Fundamentmodell (großer optionaler Download) | Nur gewähltes Ziel | Nein | Direkte probabilistische Mehrschrittprognose |
| Ridge (linear baseline) | L2-regularisierte lineare Regression auf Merkmalen, die mit Baummodellen geteilt werden | Ja | Ja | Rekursive oder direkte Prognose für 16 Horizonte |

Diese Modelle sind keine acht Implementierungen desselben Algorithmus. XGBoost, LightGBM und ihre Bagging-Varianten wandeln Zeitreihen in dasselbe überwachte tabellarische Lernproblem um. VARMA modelliert verzögerte Vektoren mehrerer Reihen gemeinsam; Ridge dient als lineare Referenz auf denselben überwachten Merkmalen. Chronos-2 und TimesFM 2.5 nutzen vortrainierte neuronale Prognosemodelle, ohne neue Parameter an die hochgeladenen Daten anzupassen.

Die **direkte 16-Schritte-Prognose ist die Standardeinstellung** für XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2 und Ridge. Jeder Zukunftsschritt wird unabhängig angepasst; künstliche Zukunftswerte anderer Reihen werden vermieden. Für rekursive Prognosen öffnen Sie **Settings → Advanced forecasting → Forecast strategy**. Rekursiv verwendet ein Modell und prognostiziert 16 Schritte iterativ. VARMA nutzt gemeinsame Autoregression; Chronos-2 und TimesFM 2.5 prognostizieren vortrainiert direkt. Auf überwachte Vorhersagen wird keine feste saisonale Mischung angewendet. Siehe [Prognosestrategien](docs/FORECAST_STRATEGIES.md).

### Modellauswahl

#### XGBoost

`XGBoost` ist das standardmäßig lokal trainierte Modell. Es ist ein Gradient-Boosting-Entscheidungsbaumverfahren: Viele Bäume werden nacheinander hinzugefügt, wobei jeder neue Baum verbleibende Fehler des bisherigen Ensembles reduziert. Zeitreihen gehen nicht direkt in XGBoost ein. Stattdessen wird jeder Zeitschritt in einen Merkmalsvektor umgewandelt und XGBoost als Regressionsmodell trainiert.

Die Browserimplementierung verwendet:

- Ziel- und exogene Verzögerungen bis `MAX_LAG = 3`
- erste Differenzen
- gleitenden Mittelwert mit `ROLLING_WINDOW = 7`
- Differenz-, Verhältnis- und Produktinteraktionen zwischen numerischen Reihen
- Zeitindex
- Fourier-Merkmale mit Perioden 24 und 168
- `gbtree` mit Tiefe 4, Lernrate 0.1, Subsample 0.8 und 200 Boosting-Iterationen

Im Modus **recursive** sagt das Modell jeweils einen Schritt voraus. Die Vorhersage wird Teil der Historie; unbekannte künftige Nebenreihen werden heuristisch fortgeführt. Im Modus **direct** nutzen 16 unabhängig angepasste horizontspezifische Modelle die letzten tatsächlich beobachteten Merkmale, ohne zukünftige Nebenwerte zu erfinden. Eine feste saisonale Mischung wird nicht angewendet.

**Stärken**

- erfasst nichtlineare Beziehungen und Wechselwirkungen zwischen Reihen
- nutzt die projektspezifisch konstruierten multivariaten Merkmale gut
- trainiert lokal und relativ schnell im Browser
- erfordert keinen Download eines großen vortrainierten Modells

**Einschränkungen**

- die Prognosequalität hängt von den gewählten Merkmalen ab
- rekursive Prognosen können in späteren Schritten Fehler aufsummieren
- Fourier-Perioden und saisonale Fortschreibung sind Annahmen der Anwendung und keine automatisch gelernte Kalenderstruktur

Verwenden Sie XGBoost, wenn Sie ein leichtgewichtiges, lokal trainiertes nichtlineares Modell benötigen, das Beziehungen zwischen mehreren numerischen Spalten nutzt.

#### LightGBM

`LightGBM` ist ein weiteres lokal trainiertes Gradient-Boosting-Baummodell. Die Browserimplementierung nutzt `@wlearn/lightgbm`, eine WebAssembly-Version von LightGBM, und verwendet bewusst dieselbe `buildFeatures()`-Ausgabe sowie die 16-Schritte-Strategien von XGBoost (rekursiv oder direkt).

Die Standardeinstellungen sind Regression, Lernrate 0.1, 31 Blätter, maximale Tiefe 4, Subsample 0.8 und 200 Boosting-Runden. Die Rohprognosen werden ohne feste saisonale Mischung verwendet.

LightGBM eignet sich als direkt vergleichbare histogrammbasierte GBDT-Alternative bei unveränderter Merkmalsverarbeitung und unverändertem Prognoseprotokoll.

#### VARMA experimental

`VARMA experimental` ist eine schlanke, browsernative multivariate Baseline. Trotz des Namens ist es **kein vollständiger statistischer Maximum-Likelihood-VARMA-Schätzer**. Es ähnelt eher einem regularisierten VAR-Modell mit kleiner Residuenkorrektur und optionaler saisonaler Stabilisierung.

Die Implementierung:

1. wählt bis zu 8 numerische Reihen aus und standardisiert sie;
2. verkettet die vorherigen 7 multivariaten Vektoren zu einem Verzögerungsmerkmalsvektor;
3. passt alle Ausgabereihen gleichzeitig mittels Ridge-Regression mit mehreren Ausgaben an (`ridge = 1e-2`);
4. schätzt aus jüngsten Residuen eine kleine Korrektur (`maLag = 1`);
5. mischt optional die autoregressive Ausgabe mit einem saisonal verzögerten Vektor (`seasonalLag = 7`; Standard `seasonalBlend = 0`);
6. führt den prognostizierten Vektor rekursiv dem nächsten Schritt zu.

Da bei jedem Schritt der vollständige numerische Vektor prognostiziert wird, schreibt VARMA alle modellierten Reihen gemeinsam fort und nicht nur das gewählte Ziel.

**Stärken**

- einfach und rechenarm
- modelliert mehrere numerische Reihen gemeinsam
- liefert eine nützliche lineare/klassische Referenz gegenüber XGBoost und Chronos-2
- läuft vollständig in TypeScript ohne zusätzlichen Modelldownload

**Einschränkungen**

- benötigt mindestens zwei numerische Reihen und mehr als 7 nutzbare Zeilen
- setzt überwiegend lineare Verzögerungsbeziehungen voraus
- Residuenkorrektur und optionale saisonale Mischung sind Heuristiken, keine vollständige Schätzung gleitender Durchschnitte
- sollte nicht als Referenzimplementierung eines statistischen VARMA gelten

`VARMA experimental` eignet sich vor allem als nachvollziehbare multivariate Baseline, wenn mehrere Reihen gemeinsam schwanken.

#### Chronos-2 vortrainiert

`Chronos-2 pretrained` unterscheidet sich grundlegend von den zuvor lokal angepassten Modellen. Chronos-2 ist ein vortrainiertes patchbasiertes Fundamentmodell für Zeitreihen, das direkt mehrschrittige **Quantilprognosen** erzeugt. Das Repository führt `Chronos-2-small INT8` mit ONNX Runtime Web aus. Nach dem Download erfolgt die Inferenz lokal.

Die aktuelle Browserintegration:

- trainiert **nicht** auf dem hochgeladenen Datensatz;
- nutzt nur die gewählte Zielreihe als Chronos-Kontext;
- benötigt mindestens 16 numerische Zielbeobachtungen;
- behält höchstens 5.760 Kontextbeobachtungen;
- gruppiert die Eingabe in 16-Punkte-Patches und polstert den ersten unvollständigen Patch links mit `NaN` auf;
- führt die interne 672-Schritte-Ausgabe des ONNX-Graphen aus (`42 × 16`) und zeigt die ersten 16 Schritte in der UI;
- liest die Quantile und zeigt die Medianprognose (`p50`) sowie Unsicherheitsgrenzen `p10` und `p90`.

Chronos-2 unterstützt selbst komplexere multivariate und kovariatenbasierte Prognosen, **die aktuelle UI nutzt diese Möglichkeiten jedoch noch nicht**. Daher ist die Integration derzeit als vortrainierter univariater Zielreihenprognostiker innerhalb einer sonst multivariaten Anwendung zu verstehen.

**Stärken**

- Zero-Shot-Prognose ohne datensatzspezifische Modellanpassung
- prognostiziert den ganzen Horizont direkt statt rekursiv mit Ein-Schritt-Modellen
- liefert probabilistische Informationen über Prognosequantile
- überträgt bei großskaligem Vortraining gelernte Muster auf neue Reihen

**Einschränkungen**

- das Modell muss vor der ersten Nutzung heruntergeladen werden
- der Browser nutzt einen INT8-ONNX-Export; Ergebnisse können vom offiziellen Checkpoint mit voller Präzision abweichen
- die aktuelle UI ignoriert weitere numerische Spalten beim Aufruf von Chronos-2
- Browserspeicher und WASM-Ausführung begrenzen Modellgröße und Kontextlänge praktisch

In einem früher erfassten AirPassengers-128/16-Holdout-Benchmark erzielte `Chronos-2-small INT8 ONNX` unter vergleichbaren Modellen die niedrigsten Werte für MAE, RMSE, MAPE, sMAPE und MASE. Messwerte und Verfahren stehen im folgenden Benchmark-Abschnitt. **Diese historischen Ergebnisse stammen aus einer älteren App-Version und dürfen ohne erneute Auswertung nicht mit den überarbeiteten Merkmalen und Strategien verglichen werden.**

### 16-Schritte-Prognose

Der Standardhorizont beträgt 16, weil das integrierte Chronos-2-ONNX-Modell 16-Punkte-Patches nutzt und die XGBoost-, LightGBM- und VARMA-APIs für Vergleiche denselben Horizont verwenden.

Die Algorithmen erreichen die 16 Punkte auf unterschiedliche Weise:

- **XGBoost, LightGBM und Ridge** prognostizieren entweder rekursiv mit einem angepassten Ein-Schritt-Modell oder direkt mit 16 horizontspezifischen Modellen.
- **VARMA experimental** prognostiziert rekursiv den gesamten multivariaten Vektor und schreibt alle enthaltenen Reihen gemeinsam fort.
- **Chronos-2** berechnet direkte probabilistische Mehrschrittprognosen und liefert die ersten 16 zukünftigen Positionen der vortrainierten Ausgabe.

Direkt ist die **Standardeinstellung** für XGBoost, LightGBM und Ridge. Rekursiv ist eine erweiterte Option unter Settings. Dort kann das direkte Prognoseziel zudem von den ursprünglichen Werten auf kumulierte Log-Renditen für strikt positive Reihen umgestellt werden. Die direkte Methode vermeidet iterativ erfundene Eingaben, erfordert aber bis zu 16 angepasste Modelle. Strategien müssen an denselben Out-of-Sample-Zeitfenstern verglichen werden. Keine garantiert höhere Genauigkeit.

---

## Feature Engineering (XGBoost / LightGBM)

Die hier manuell konstruierten Merkmale gelten für XGBoost und LightGBM. VARMA nutzt direkt normalisierte Verzögerungsvektoren, während Chronos-2 ohne diese Merkmale auf der gewählten Zielsequenz arbeitet.

Die Tree-Boosting-Pipelines betrachten die Eingabe als kleine multivariate Zeitreihe:

- Eine *Datum-/Uhrzeitspalte* (Überschrift enthält `date` oder `time`, unabhängig von der Schreibung).
- Mehrere numerische Spalten (z. B. `item_a`, `item_b`, `item_c`, ...).
- Eine numerische Spalte wird als **Prognoseziel** ausgewählt.

Intern erstellt der Merkmalsgenerator einen **umfangreichen Merkmalsvektor** für jeden Zeitpunkt `t` und einen **zukünftigen Merkmalsvektor** für `t + 1`. Alle Merkmale werden **ausschließlich clientseitig** in JavaScript/TypeScript berechnet.

### Für Merkmale verwendete Reihen

- `datetimeKey`  
  - Automatische Erkennung anhand einer Überschrift mit `"date"` oder `"time"`.
  - Nur zur Bestimmung der Zeitachse, nicht direkt als numerisches Merkmal.
- `targetKey`  
  - Die numerische Spalte, die prognostiziert werden soll.
- `featureKeys`  
  - Alle anderen numerischen Spalten (weder Datum/Uhrzeit noch Ziel).
  - Werden als **exogene Reihen** behandelt.

Intern enthält `seriesMap: Record<string, number[]>` ein numerisches Array pro Reihe.

### Merkmale je Reihe (exogene Reihen)

Für jede exogene Reihe `x(t)` (jeder Schlüssel in `featureKeys`) und jeden Zeitpunkt `t` berechnen wir:

1. **Zeitgleicher Wert**
   - `x(t)` (Wert am Zeitindex `t`).

2. **Verzögerungsmerkmale (Historie)**
   - Bis `MAX_LAG = 3`:
     - `x(t - 1)`
     - `x(t - 2)`
     - `x(t - 3)`
   - Damit lernt das Modell kurzfristige zeitliche Dynamiken je Reihe.

3. **Erste Differenz**
   - `x(t) - x(t - 1)`
   - Erfasst lokale Änderungen (Trend / Steigung), nicht nur absolute Niveaus.

4. **Gleitender Mittelwert (lokaler Durchschnitt)**
   - Fenster von `ROLLING_WINDOW = 7` Zeitschritten:
     - `mean(x[t - 6 ... t])` (am Reihenanfang verkürzt)
   - Beschreibt lokalen Trend und Grundniveau und glättet kurzfristiges Rauschen.

> Ist die Reihe kürzer als das Fenster, verkleinert der Code das Fenster automatisch und verwendet alle bis `t` verfügbaren vergangenen Punkte.

### Historie der Zielreihe

Für die **Zielreihe** `y(t)` selbst wird der aktuelle Wert `y(t)` **nicht** als Merkmal verwendet (er ist das Label dieses Schritts), wohl aber die Historie:

1. **Zielverzögerungen**
   - `y(t - 1)`
   - `y(t - 2)`
   - `y(t - 3)`

2. **Zieldifferenz**
   - `y(t) - y(t - 1)`

3. **Gleitender Zielmittelwert**
   - Gleiches gleitendes Fenster wie oben:
     - `mean(y[t - 6 ... t])`

Dadurch kann das Modell typische Zeitreihenmuster lernen, etwa dass der nächste Wert von den letzten Werten und ihrem lokalen Trend abhängt.

### Interaktionen zwischen Reihen

Um **Beziehungen zwischen verschiedenen Reihen** zu erfassen, erzeugen wir Interaktionsmerkmale für jedes **Paar numerischer Reihen**, einschließlich der Zielreihe:

- `v_i(t)` und `v_j(t)` seien die zeitgleichen Werte zweier Reihen bei `t`.
- Für jedes geordnete Paar `(i, j)` mit `i < j` berechnen wir:

1. **Differenz (Spread)**
   - `v_i(t) - v_j(t)`
   - Kodiert relative Niveauunterschiede zwischen Reihen.

2. **Verhältnis**
   - `v_i(t) / v_j(t)`
   - Zur Vermeidung einer Division durch null wird bei Bedarf ein kleines Epsilon im Nenner verwendet:
     - `denom = |v_j| < 1e-9 ? sign(v_j) * 1e-9 : v_j`
   - Kodiert relative Größenordnungen und Proportionalität.

3. **Produkt**
   - `v_i(t) * v_j(t)`
   - Bildet „Interaktionseffekte“ ab, bei denen die gleichzeitige Größe beider Reihen relevant ist.

Diese Merkmale machen die **Struktur mehrerer Reihen** für das Boosting-Modell explizit sichtbar, statt nur Einzelwerte zu verwenden.

### Zeitindex und Fourier-Merkmale

Auch die Zeit selbst wird numerisch kodiert:

1. **Zeitindex**
   - Ganzzahliger Index `t = 0, 1, 2, ...` (Zeilenindex).
   - Ermöglicht dem Booster, globale Trends einfach zu modellieren.

2. **Fourier-Merkmale** (zyklische Muster)
   - Zwei Perioden (in „Anzahl Zeilen“):
     - Periode 24 (z. B. 24 Stunden bei stündlichen Daten)
     - Periode 168 (z. B. 7 Tage × 24 Stunden)
   - Für jede Periode `P` berechnen wir:
     - `sin(2πt / P)`
     - `cos(2πt / P)`
   - Dies ist eine übliche Darstellung von Saisonmustern/Zyklen, die auch Baummodelle nutzen können.

Der endgültige Merkmalsvektor für jeden Zeitpunkt `t` lautet:

```text
[ exogenous features (current, lags, diff, rolling mean for each series),
  target-series history (lags, diff, rolling mean),
  cross-series interactions (spread, ratio, product),
  time index, sin/cos(2πt/24), sin/cos(2πt/168) ]
```

### Merkmalsvektor für den nächsten Schritt (lastFeatureRow)
Dieselbe Logik erzeugt den Merkmalsvektor für t + 1 (Ein-Schritt-Prognose):
- Konzeptionell ist der nächste Zeitindex t_next = n, wobei n die Zahl der beobachteten Zeilen ist.
- Als „aktuelle“ Werte bei t_next verwenden wir die zuletzt beobachteten Werte (Index n - 1).
- Verzögerungen und gleitende Mittelwerte werden aus den letzten MAX_LAG / ROLLING_WINDOW Schritten berechnet.
- Die Zeitkodierung verwendet t_next als Index.
- So entsteht lastFeatureRow als einzelner Merkmalsvektor des nächsten Zeitpunkts aus der gesamten beobachteten Historie.

Die Funktion buildFeatures gibt daher Folgendes zurück:
```text
{
  X: number[][];        // feature matrix for all observed steps
  y: number[];          // target series values for those steps
  lastFeatureRow: number[]; // feature vector representing t + 1
}
```

---

<!-- FRONTEND_STOCK_EVALUATION:START -->
## Aktienergebnisse — Browser-Benchmark (bis 2026-10-09)

| Sektor | Modell | Vorheriger 16-Schritte-MAPE ↓ | Jüngster 16-Schritte-MAPE ↓ | Rollierender 1-Schritt-MAPE ↓ |
| --- | --- | ---: | ---: | ---: |
| Autohersteller | xgboost | 7.55% | 4.08% | 1.55% |
| Autohersteller | lightgbm | 2.58% | 4.74% | 1.71% |
| Autohersteller | varma | 11.82% | 3.67% | 1.81% |
| Autohersteller | chronos | 1.86% | 3.20% | 1.07% |
| Autohersteller | ridge | 2.69% | 6.78% | 1.47% |
| Autohersteller | last_close | 2.26% | 2.70% | 1.09% |
| Banken | xgboost | 3.56% | 2.27% | 1.66% |
| Banken | lightgbm | 3.13% | 1.89% | 1.60% |
| Banken | varma | 4.21% | 12.66% | 1.85% |
| Banken | chronos | 3.68% | 4.60% | 1.78% |
| Banken | ridge | 4.99% | 1.91% | 1.66% |
| Banken | last_close | 4.06% | 2.84% | 1.46% |
| Elektronik | xgboost | 3.67% | 5.16% | 1.40% |
| Elektronik | lightgbm | 3.58% | 1.09% | 1.38% |
| Elektronik | varma | 5.13% | 21.04% | 1.81% |
| Elektronik | chronos | 3.11% | 3.09% | 1.36% |
| Elektronik | ridge | 7.11% | 5.62% | 1.72% |
| Elektronik | last_close | 3.04% | 1.56% | 1.30% |
| Telekommunikation | xgboost | 5.23% | 1.44% | 1.28% |
| Telekommunikation | lightgbm | 5.96% | 1.47% | 1.47% |
| Telekommunikation | varma | 13.19% | 14.50% | 1.41% |
| Telekommunikation | chronos | 5.43% | 3.09% | 1.08% |
| Telekommunikation | ridge | 7.14% | 1.65% | 1.13% |
| Telekommunikation | last_close | 3.44% | 2.83% | 0.88% |
| Handelshäuser | xgboost | 3.08% | 4.58% | 1.41% |
| Handelshäuser | lightgbm | 2.78% | 4.40% | 1.48% |
| Handelshäuser | varma | 9.75% | 1.05% | 2.36% |
| Handelshäuser | chronos | 3.14% | 3.45% | 1.27% |
| Handelshäuser | ridge | 2.72% | 7.36% | 1.69% |
| Handelshäuser | last_close | 2.46% | 4.63% | 1.32% |
### Direkter 16-Schritte-Vergleich (5 Sektoren, 2 Holdouts; bis 2026-10-09)

| Modell | Rekursiver Kurs-MAPE ↓ | Direkter Kurs-MAPE ↓ | Direkter Log-Rendite-MAPE ↓ | Letzter-Schlusskurs-MAPE ↓ |
| --- | ---: | ---: | ---: | ---: |
| xgboost | 4.06% | 3.46% | 4.59% | 2.98% |
| lightgbm | 3.16% | 3.75% | 4.49% | 2.98% |
| ridge | 4.80% | 4.31% | 4.01% | 2.98% |
<!-- FRONTEND_STOCK_EVALUATION:END -->

## Aktienergebnisse — Benchmark mit separater Engine

<!-- STOCK_MULTIVARIATE:START -->
| Sektor | Modell | Langer Einzelreihen-MAPE ↓ | Langer Mehrreihen-MAPE ↓ | Jüngster Einzelreihen-MAPE ↓ | Jüngster Mehrreihen-MAPE ↓ |
| --- | --- | ---: | ---: | ---: | ---: |
| Autohersteller | ridge | 1.48% | 1.52% | 1.07% | 1.13% |
| Autohersteller | xgboost | 1.67% | 1.64% | 1.41% | 1.34% |
| Autohersteller | lightgbm | 1.60% | 1.59% | 1.33% | 1.34% |
| Banken | ridge | 1.63% | 1.66% | 1.47% | 1.52% |
| Banken | xgboost | 1.77% | 1.80% | 1.66% | 1.61% |
| Banken | lightgbm | 1.76% | 1.77% | 1.49% | 1.55% |
| Elektronik | ridge | 1.69% | 1.70% | 1.27% | 1.35% |
| Elektronik | xgboost | 1.83% | 1.91% | 1.45% | 1.50% |
| Elektronik | lightgbm | 1.79% | 1.80% | 1.34% | 1.41% |
| Telekommunikation | ridge | 0.81% | 0.82% | 0.90% | 0.87% |
| Telekommunikation | xgboost | 0.85% | 0.87% | 1.04% | 1.01% |
| Telekommunikation | lightgbm | 0.83% | 0.85% | 0.97% | 0.91% |
| Handelshäuser | ridge | 1.63% | 1.63% | 1.39% | 1.41% |
| Handelshäuser | xgboost | 1.77% | 1.69% | 1.50% | 1.53% |
| Handelshäuser | lightgbm | 1.69% | 1.66% | 1.34% | 1.43% |
<!-- STOCK_MULTIVARIATE:END -->


---

## AirPassengers-Benchmark

Das faire 16-Schritte-Protokoll und die Regeln zum Vergleich mit Veröffentlichungen stehen in [`BENCHMARKS.md`](./BENCHMARKS.md).

Das Repository enthält den AirPassengers-Datensatz und einen Benchmark-Befehl, um das Modellverhalten anhand einer klassischen monatlichen Zeitreihe zu prüfen.

Benchmark mit Docker Compose ausführen:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark
```

JSON-Ausgabe:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm xgboost --json'
```

Saisonale naive Baseline:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm seasonal-naive --json'
```


### 16-Schritte-Holdout-Benchmark

- Training: erste 128 AirPassengers-Beobachtungen
- Holdout: nächste 16 Beobachtungen
- während der Prognose werden keine tatsächlichen Holdout-Zielwerte zurückgeführt
- gemeinsame Punktmetriken: MAE, RMSE, MAPE, sMAPE und MASE

Benchmark reproduzieren mit:

```bash
docker compose -f docker-compose.test.yml run --rm \
  air_passengers_fair_benchmark \
  sh -lc '
    npm --prefix frontend/app ci &&
    node scripts/benchmark-air-passengers-fair.mjs --markdown
  '
```

AirPassengers-Auswertung nur mit LightGBM:

```bash
docker compose -f docker-compose.test.yml run --rm \
  lightgbm_air_passengers_benchmark
```

Dies führt dasselbe 128/16-Protokoll mit `--algorithm lightgbm` aus; das Ergebnis ist daher direkt mit den anderen AirPassengers-Zeilen vergleichbar.

VARMA wird mit N/A angegeben, da AirPassengers univariat ist, die experimentelle VARMA-Implementierung dieses Repositorys jedoch mindestens zwei numerische Reihen verlangt. Das multivariate und das Paper-Vergleichsprotokoll stehen in [`BENCHMARKS.md`](./BENCHMARKS.md).

# Lizenz
- Apache License 2.0
