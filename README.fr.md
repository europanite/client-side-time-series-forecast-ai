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

## Démonstration en 40 secondes

[![▶ Voir la démonstration de 40 secondes](https://img.youtube.com/vi/AUFat22QJHE/hqdefault.jpg)](https://youtu.be/AUFat22QJHE)

## Bac à sable

[▶ Ouvrir l’application de prévision dans le navigateur](https://europanite.github.io/client-side-time-series-forecast-ai/)

Outil d’IA de prévision de séries temporelles côté client, entièrement utilisable dans le navigateur. Il est gratuit et sûr, car tout s’exécute dans votre navigateur.

Vous pouvez choisir [XGBoost](https://xgboost.readthedocs.io/en/stable/), XGBoost Bagging ×2, [LightGBM](https://lightgbm.readthedocs.io/), LightGBM Bagging ×2, un modèle expérimental de type VARMA, [Chronos-2](https://github.com/amazon-science/chronos-forecasting), [TimesFM 2.5](https://github.com/google-research/timesfm) ou une régression Ridge.

---

## Présentation

Cet outil de prévision de séries temporelles multivariées fonctionne intégralement dans votre navigateur. Aucune installation, inscription ni paiement nécessaires. Ouvrez simplement la page pour commencer. Il aide les petites entreprises à prévoir les commandes du lendemain.

- Charger des séries temporelles CSV/XLSX dans le navigateur
- Choisir n’importe quelle colonne numérique comme cible de prévision
- Choisir entre XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, VARMA expérimental, Chronos-2 et TimesFM 2.5 préentraînés, et régression Ridge
- Entraîner localement le modèle sélectionné dans le navigateur
- Prévoir les 16 prochains points et les ajouter au graphique

Tout se passe **dans votre navigateur**. Il n’y a aucune API backend et aucune donnée ne quitte votre ordinateur.

---

## Démonstration

1. Ouvrez la démonstration GitHub Pages :  
   https://europanite.github.io/client-side-time-series-forecast-ai/

2. Importez un exemple comme [`data/sample_data.csv`](./data/sample_data.csv) (cours boursiers) ou [`data/sample_data.xlsx`](./data/sample_data.xlsx) (exemple multivarié synthétique).
3. L’application va :
   - Détecter une **colonne de date et heure**
   - Répertorier les colonnes numériques disponibles
4. Choisissez une colonne numérique comme **cible**.
5. Choisissez un **modèle de prévision**. `XGBoost` est le choix par défaut ; `XGBoost Bagging ×2` moyenne deux régresseurs XGBoost entraînés par bootstrap ; `LightGBM` est un autre GBDT entraîné localement ; `LightGBM Bagging ×2` moyenne deux régresseurs LightGBM par bootstrap ; `VARMA experimental` est une référence multivariée légère ; `Chronos-2 pretrained` est un modèle de fondation zéro-shot ; `TimesFM 2.5` est un modèle ONNX zéro-shot facultatif ; `Ridge` est une référence linéaire entraînée localement.
6. Pour XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, VARMA ou Ridge, cliquez d’abord sur **Train**. Chronos-2 et TimesFM 2.5 sont préentraînés et ne nécessitent pas d’entraînement local. Cliquez ensuite sur **Forecast +16** pour prévoir les 16 points suivants.
7. Examinez le graphique pour comparer la série observée et la courbe de prévision.

---

# 🚀 Bien démarrer

## npm

### 1. Prérequis
- Node.js

### 2. Construire les services :

```bash
cd frontend/app
npm ci
npm run dev
```

### 3. Tester :

```bash
npm test -- --ci --runInBand --coverage --verbose
npx tsc --noEmit
npm run build
```

## Docker Compose

### 1. Prérequis
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Construire les services :

```bash
docker compose up --build
```

### 3. Tester :

```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

## Structure des données

<pre>
datetime,item_a,item_b,item_c,...
2025-01-01 00:00:00+09:00,10,20,31,...
2025-01-02 00:00:00+09:00,12,19,31,...
2025-01-03 00:00:00+09:00,14,18,33,...
 ...
</pre>

### Exigences :

##### Une colonne de date et heure
L’en-tête contient « date » ou « time » (sans distinction de casse).
Cette colonne sert d’axe temporel, sans être directement convertie en variable numérique.

##### Une ou plusieurs colonnes numériques
Elles servent de cible et/ou de variables exogènes.
L’application propose six modes de prévision ajustés localement :

- **XGBoost** : vous choisissez une colonne numérique comme cible, les autres fournissant des signaux supplémentaires.
- **XGBoost Bagging ×2** : entraîne deux modèles XGBoost sur des échantillons bootstrap indépendants des mêmes variables supervisées, puis moyenne les sorties. Le mode direct à 16 pas ajuste 32 boosters.
- **LightGBM Bagging ×2** : entraîne deux modèles LightGBM avec la même méthode bootstrap que XGBoost Bagging ×2 et moyenne leurs prévisions. Le mode direct à 16 pas ajuste 32 boosters.
- **LightGBM** : utilise la même cible et les mêmes variables multivariées construites que XGBoost, mais ajuste un régresseur LightGBM.
- **VARMA experimental** : modélise conjointement toutes les colonnes numériques et affiche la prévision de la cible sélectionnée.
- **Ridge** : régression linéaire régularisée, ajustée localement avec les mêmes variables construites et le même parcours de prévision récursive que XGBoost et LightGBM.

---

<!-- ALL_MODEL_EVALUATION:START -->
### Les huit modèles — évaluation holdout comparable dans le navigateur (jusqu’au 2026-10-30)

Chaque secteur utilise 256 clôtures historiques pour prédire les 16 mêmes séances suivantes. Un MAPE plus faible est préférable. Les cinq modèles supervisés utilisent **Direct price** (valeur par défaut du navigateur) ; VARMA utilise une prévision récursive conjointe ; Chronos-2 et TimesFM 2.5 n’utilisent que la série cible. Tous s’exécutent dans Chromium, sans réimplémentation dans Node.

| Modèle | Constructeurs auto MAPE ↓ | Banques MAPE ↓ | Électronique MAPE ↓ | Télécoms MAPE ↓ | Maisons de négoce MAPE ↓ | MAPE moyen ↓ | sMAPE moyen ↓ |
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

Protocole : `real-browser-recent-16step-all-eight-v1` ; SHA256 de l’entrée : `bd5150223ed5…` ; SHA256 du code source : `e2e34fbc83b1…`.
Ces scores rétrospectifs dépendent de l’instantané évalué ; ils ne constituent pas un audit de prédictions en temps réel.
[Méthode et reproduction](docs/ALL_MODEL_EVALUATION.md). MAE/RMSE complets, prévisions et durées : [`reports/stocks/all-models.json`](reports/stocks/all-models.json).
<!-- ALL_MODEL_EVALUATION:END -->

## Approche de prévision

Le projet propose huit algorithmes de prévision reposant sur des hypothèses volontairement différentes :

| Modèle | Méthode d’apprentissage | Plusieurs séries en entrée ? | Entraînement local ? | Type de prévision |
| --- | --- | --- | --- | --- |
| XGBoost | Régression par arbres à boosting de gradient sur des variables temporelles construites | Oui | Oui | Récursive ou directe sur 16 horizons |
| XGBoost Bagging ×2 | Deux régresseurs XGBoost entraînés par bootstrap indépendant avec prévisions moyennées | Oui | Oui (2 par horizon) | Récursive ou directe sur 16 horizons |
| LightGBM | Régression par arbres à boosting de gradient fondée sur des histogrammes et les mêmes variables que XGBoost | Oui | Oui | Récursive ou directe sur 16 horizons |
| LightGBM Bagging ×2 | Deux régresseurs LightGBM entraînés par bootstrap indépendant avec prévisions moyennées | Oui | Oui (2 par horizon) | Récursive ou directe sur 16 horizons |
| VARMA experimental | Autorégression linéaire multi-sorties avec régularisation Ridge et correction des résidus | Oui, conjointement | Oui | Récursive conjointe multi-sorties |
| Chronos-2-small INT8 ONNX | Modèle de fondation temporel préentraîné fondé sur des patches | Cible sélectionnée uniquement dans l’interface actuelle | Non | Probabiliste directe à plusieurs pas |
| TimesFM 2.5 ONNX | Modèle de fondation temporel préentraîné (téléchargement volumineux facultatif) | Cible sélectionnée uniquement | Non | Probabiliste directe à plusieurs pas |
| Ridge (linear baseline) | Régression linéaire régularisée L2 sur les variables communes aux modèles d’arbres | Oui | Oui | Récursive ou directe sur 16 horizons |

Il ne s’agit pas de huit implémentations d’un même algorithme. XGBoost, LightGBM et leurs variantes bagging transforment les séries temporelles en un même problème tabulaire supervisé. VARMA modélise conjointement les vecteurs retardés de plusieurs séries ; Ridge fournit une référence linéaire avec les mêmes variables supervisées ; Chronos-2 et TimesFM 2.5 exploitent des réseaux préentraînés sans ajuster de nouveaux paramètres sur les données importées.

La **prévision directe à 16 pas est la stratégie par défaut** pour XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2 et Ridge. Chaque pas futur est ajusté séparément, sans inventer les futures entrées des autres séries. Pour passer au mode récursif, ouvrez **Settings → Advanced forecasting → Forecast strategy**. Le mode récursif utilise un seul modèle et prévoit les 16 pas successivement. VARMA utilise une autorégression multivariée conjointe ; Chronos-2 et TimesFM 2.5 prédisent directement avec leurs modèles préentraînés. Aucun mélange saisonnier fixe n’est appliqué aux modèles supervisés. Voir les [stratégies de prévision](docs/FORECAST_STRATEGIES.md).

### Choix du modèle

#### XGBoost

`XGBoost` est le modèle entraîné localement par défaut. C’est un algorithme d’arbres de décision à boosting de gradient : les arbres sont ajoutés successivement, chacun réduisant les erreurs laissées par l’ensemble précédent. XGBoost ne reçoit pas directement les séries temporelles. Chaque instant est d’abord converti en vecteur de variables, puis XGBoost est entraîné comme modèle de régression.

L’implémentation dans le navigateur utilise :

- retards de la cible et des séries exogènes jusqu’à `MAX_LAG = 3`
- différences premières
- moyenne glissante `ROLLING_WINDOW = 7`
- interactions de différence, rapport et produit entre séries numériques
- indice temporel
- variables de Fourier de périodes 24 et 168
- `gbtree` de profondeur 4, taux d’apprentissage 0.1, subsample 0.8 et 200 itérations de boosting

En mode **recursive**, le modèle prévoit un pas à la fois ; chaque prédiction rejoint l’historique et les séries futures inconnues sont prolongées par heuristique. En mode **direct**, 16 modèles indépendants, un par horizon, utilisent les dernières variables réellement observées sans fabriquer de valeurs futures pour les autres séries. Aucun mélange saisonnier fixe n’est appliqué.

**Points forts**

- capture les relations non linéaires et les interactions entre séries
- exploite naturellement les variables multivariées conçues pour ce projet
- s’entraîne localement assez rapidement dans le navigateur
- ne nécessite pas de télécharger un gros modèle préentraîné

**Limites**

- la qualité dépend de l’ingénierie de variables choisie
- la prévision récursive peut accumuler des erreurs aux pas éloignés
- les périodes de Fourier et les prolongements saisonniers sont des hypothèses de l’application, et non une structure calendaire apprise automatiquement

Choisissez XGBoost si vous souhaitez un modèle non linéaire léger, entraîné localement, qui exploite les relations entre plusieurs colonnes numériques.

#### LightGBM

`LightGBM` est un autre modèle d’arbres à boosting de gradient entraîné localement. L’implémentation utilise `@wlearn/lightgbm`, une version WebAssembly de LightGBM, et réutilise volontairement la sortie de `buildFeatures()` et les stratégies à 16 pas de XGBoost (récursive ou directe).

La configuration par défaut de LightGBM utilise la régression, un taux d’apprentissage de 0.1, 31 feuilles, une profondeur maximale de 4, un subsample de 0.8 et 200 tours de boosting. Les prévisions brutes sont utilisées sans mélange saisonnier fixe.

Utilisez LightGBM comme alternative GBDT sur histogrammes directement comparable, à chaîne de variables et protocole de prévision inchangés.

#### VARMA expérimental

`VARMA experimental` est une référence multivariée légère exécutée nativement dans le navigateur. Malgré son nom, ce n’est **pas un estimateur VARMA statistique complet par maximum de vraisemblance**. Il est plus proche d’un VAR régularisé avec une petite correction des résidus et une stabilisation saisonnière facultative.

L’implémentation :

1. sélectionne jusqu’à 8 séries numériques et les standardise ;
2. concatène les 7 vecteurs multivariés précédents en un vecteur de variables retardées ;
3. ajuste simultanément toutes les sorties par régression Ridge multi-sorties (`ridge = 1e-2`) ;
4. estime une petite correction à partir des résidus récents (`maLag = 1`) ;
5. mélange éventuellement la sortie autorégressive avec un vecteur saisonnier retardé (`seasonalLag = 7` ; `seasonalBlend = 0` par défaut) ;
6. réinjecte récursivement le vecteur prédit au pas suivant.

Comme le vecteur numérique entier est prédit à chaque pas, VARMA fait avancer toutes les séries modélisées ensemble et pas uniquement la cible.

**Points forts**

- simple et peu coûteux en calcul
- modélise conjointement plusieurs séries numériques
- fournit une référence linéaire/classique utile face à XGBoost et Chronos-2
- fonctionne entièrement en TypeScript sans téléchargement de modèle séparé

**Limites**

- exige au moins deux séries numériques et plus de 7 lignes exploitables
- suppose des relations de retard surtout linéaires
- la correction des résidus et le mélange saisonnier facultatif sont heuristiques, pas une estimation complète de moyenne mobile
- ne doit pas être présenté comme implémentation de référence du VARMA statistique

Utilisez surtout `VARMA experimental` comme référence multivariée transparente lorsque plusieurs séries évoluent ensemble.

#### Chronos-2 préentraîné

`Chronos-2 pretrained` est fondamentalement différent des modèles ajustés localement ci-dessus. Chronos-2 est un modèle de fondation temporel préentraîné, basé sur des patches, qui produit directement des **prévisions par quantiles** à plusieurs pas. Ce dépôt exécute `Chronos-2-small INT8` au format ONNX avec ONNX Runtime Web ; après téléchargement, l’inférence s’effectue localement.

L’intégration actuelle dans le navigateur :

- **n’entraîne pas** le modèle sur les données importées ;
- utilise uniquement la série cible comme contexte Chronos ;
- exige au moins 16 observations numériques de la cible ;
- conserve au plus 5 760 observations de contexte ;
- regroupe l’entrée en patches de 16 points et complète à gauche le premier patch incomplet avec `NaN` ;
- exécute la sortie interne de 672 pas du graphe ONNX (`42 × 16`) et affiche les 16 premiers dans l’interface ;
- lit les quantiles du modèle et affiche la médiane (`p50`) ainsi que les bornes d’incertitude `p10` et `p90`.

Chronos-2 prend en charge des prévisions multivariées plus riches, avec covariables, mais **l’interface actuelle n’exploite pas encore ces possibilités**. Il faut donc considérer cette intégration comme un prévisionniste univarié préentraîné dans une application autrement multivariée.

**Points forts**

- prévision zéro-shot sans ajustement spécifique à chaque jeu de données
- prévoit directement tout l’horizon sans réutiliser récursivement des modèles à un pas
- fournit des informations probabilistes par les quantiles de prévision
- transfère à de nouvelles séries des motifs appris lors du préentraînement massif

**Limites**

- le modèle doit être téléchargé avant la première utilisation
- le navigateur utilise un export ONNX INT8 ; les résultats peuvent différer du checkpoint officiel en précision complète
- l’interface actuelle ignore les colonnes numériques supplémentaires lors de l’appel à Chronos-2
- la mémoire du navigateur et l’exécution WASM limitent en pratique la taille du modèle et la longueur du contexte

Dans un ancien benchmark AirPassengers avec holdout 128/16, `Chronos-2-small INT8 ONNX` obtenait les meilleurs MAE, RMSE, MAPE, sMAPE et MASE parmi les modèles comparables. Voir ci-dessous pour les valeurs et le protocole. **Ces résultats historiques proviennent d’une version antérieure de l’application et ne doivent pas être comparés aux variables et stratégies révisées sans refaire l’évaluation.**

### Prévision à 16 pas

L’horizon par défaut est de 16, car Chronos-2 ONNX utilise des patches de 16 points et les API de XGBoost, LightGBM et VARMA sont alignées sur ce même horizon pour faciliter la comparaison.

Les algorithmes atteignent ces 16 points différemment :

- **XGBoost, LightGBM et Ridge** peuvent prévoir récursivement avec un modèle à un pas ou directement avec 16 modèles propres à chaque horizon.
- **VARMA experimental** prévoit récursivement le vecteur multivarié entier, faisant avancer ensemble toutes les séries incluses.
- **Chronos-2** effectue une inférence probabiliste directe à plusieurs pas et renvoie les 16 premières positions futures du modèle préentraîné.

La stratégie directe est celle **par défaut** pour XGBoost, LightGBM et Ridge. La stratégie récursive est une option avancée dans Settings. On peut également y changer la cible directe des valeurs d’origine vers les rendements logarithmiques cumulés pour les séries strictement positives. La prévision directe évite de fabriquer des entrées itératives, au prix d’un ajustement de 16 modèles au maximum. Il faut comparer les stratégies sur les mêmes fenêtres hors échantillon ; aucune ne garantit une meilleure précision.

---

## Ingénierie des variables (XGBoost / LightGBM)

Les variables conçues manuellement ici s’appliquent à XGBoost et LightGBM. VARMA utilise directement des vecteurs de retards normalisés, tandis que Chronos-2 traite la série cible sans ces variables.

Les pipelines de boosting par arbres considèrent les données comme une petite série temporelle multivariée :

- Une colonne de *date et heure* (en-tête contenant `date` ou `time`, sans tenir compte de la casse).
- Plusieurs colonnes numériques (p. ex., `item_a`, `item_b`, `item_c`, ...).
- Une colonne numérique choisie comme **cible** de prévision.

En interne, le générateur construit un **vecteur de variables riche** pour chaque instant `t` et un **vecteur de variables futures** pour `t + 1`. Tous les calculs sont réalisés **uniquement côté client**, en JavaScript/TypeScript.

### Séries utilisées pour les variables

- `datetimeKey`  
  - Détectée automatiquement via un en-tête contenant `"date"` ou `"time"`.
  - Sert uniquement à repérer l’axe temporel, pas directement comme variable numérique.
- `targetKey`  
  - Colonne numérique que l’utilisateur choisit de prévoir.
- `featureKeys`  
  - Toutes les autres colonnes numériques (hors date/heure et cible).
  - Traitées comme des **séries exogènes**.

En interne, `seriesMap: Record<string, number[]>` conserve un tableau numérique par série.

### Variables par série (séries exogènes)

Pour chaque série exogène `x(t)` (chaque clé de `featureKeys`) et chaque instant `t`, on calcule :

1. **Valeur contemporaine**
   - `x(t)` (valeur à l’indice temporel `t`).

2. **Variables retardées (historique)**
   - Jusqu’à `MAX_LAG = 3` :
     - `x(t - 1)`
     - `x(t - 2)`
     - `x(t - 3)`
   - Cela permet d’apprendre la dynamique temporelle à court terme de chaque série.

3. **Première différence**
   - `x(t) - x(t - 1)`
   - Capture les changements locaux (tendance / pente), pas seulement le niveau absolu.

4. **Moyenne glissante (moyenne locale)**
   - Fenêtre de `ROLLING_WINDOW = 7` pas :
     - `mean(x[t - 6 ... t])` (raccourcie au début de la série)
   - Représente la tendance et le niveau local tout en lissant le bruit à court terme.

> Si la série est plus courte que la fenêtre, le code réduit automatiquement celle-ci pour utiliser tous les points passés disponibles jusqu’à `t`.

### Historique de la série cible

Pour la **série cible** `y(t)` elle-même, la valeur actuelle `y(t)` **n’est pas** incluse comme variable (c’est l’étiquette de ce pas), mais son historique l’est :

1. **Retards de la cible**
   - `y(t - 1)`
   - `y(t - 2)`
   - `y(t - 3)`

2. **Différence de la cible**
   - `y(t) - y(t - 1)`

3. **Moyenne glissante de la cible**
   - Même fenêtre glissante que ci-dessus :
     - `mean(y[t - 6 ... t])`

Le modèle peut ainsi apprendre des motifs courants comme « la prochaine valeur dépend des dernières valeurs et de leur tendance locale ».

### Interactions entre séries

Pour capturer les **relations entre différentes séries**, on construit des variables d’interaction pour chaque **paire de séries numériques**, cible comprise :

- `v_i(t)` et `v_j(t)` désignent les valeurs contemporaines de deux séries à l’instant `t`.
- Pour chaque paire ordonnée `(i, j)` telle que `i < j`, on calcule :

1. **Écart (spread)**
   - `v_i(t) - v_j(t)`
   - Encode les différences relatives de niveau entre séries.

2. **Rapport**
   - `v_i(t) / v_j(t)`
   - Pour éviter une division par zéro, on ajoute si nécessaire un petit epsilon au dénominateur :
     - `denom = |v_j| < 1e-9 ? sign(v_j) * 1e-9 : v_j`
   - Encode l’échelle relative et la proportionnalité.

3. **Produit**
   - `v_i(t) * v_j(t)`
   - Permet de représenter des « effets d’interaction » lorsque les niveaux élevés ou faibles des deux séries comptent.

Ces variables exposent explicitement la **structure multivariée** au booster, au-delà des seules valeurs individuelles.

### Indice temporel et variables de Fourier

Le temps lui-même est aussi encodé sous forme numérique :

1. **Indice temporel**
   - Indice entier `t = 0, 1, 2, ...` (indice de ligne).
   - Permet au booster de modéliser simplement les tendances globales.

2. **Variables de Fourier** (motifs cycliques)
   - Deux périodes (en « nombre de lignes ») :
     - Période 24 (p. ex. 24 heures pour des données horaires)
     - Période 168 (p. ex. 7 jours × 24 heures)
   - Pour chaque période `P`, on calcule :
     - `sin(2πt / P)`
     - `cos(2πt / P)`
   - C’est une manière courante de représenter saisonnalité et cycles, exploitable par les modèles d’arbres.

Le vecteur de variables final de chaque instant `t` est :

```text
[ exogenous features (current, lags, diff, rolling mean for each series),
  target-series history (lags, diff, rolling mean),
  cross-series interactions (spread, ratio, product),
  time index, sin/cos(2πt/24), sin/cos(2πt/168) ]
```

### Vecteur de variables du pas futur (lastFeatureRow)
La même logique construit un vecteur pour t + 1 (prévision à un pas) :
- Le prochain indice est conceptuellement t_next = n, où n est le nombre de lignes observées.
- Pour les valeurs « actuelles » à t_next, on réutilise la dernière observation (indice n - 1).
- Les retards et moyennes glissantes utilisent les derniers pas MAX_LAG / ROLLING_WINDOW observés.
- L’encodage temporel utilise t_next comme indice.
- On obtient ainsi un unique lastFeatureRow représentant le prochain instant à partir de tout l’historique disponible.

La fonction buildFeatures renvoie donc :
```text
{
  X: number[][];        // feature matrix for all observed steps
  y: number[];          // target series values for those steps
  lastFeatureRow: number[]; // feature vector representing t + 1
}
```

---

<!-- FRONTEND_STOCK_EVALUATION:START -->
## Résultats boursiers — benchmark dans le navigateur (jusqu’au 2026-10-09)

| Secteur | Modèle | MAPE précédent sur 16 pas ↓ | MAPE récent sur 16 pas ↓ | MAPE glissant sur 1 pas ↓ |
| --- | --- | ---: | ---: | ---: |
| Constructeurs auto | xgboost | 7.55% | 4.08% | 1.55% |
| Constructeurs auto | lightgbm | 2.58% | 4.74% | 1.71% |
| Constructeurs auto | varma | 11.82% | 3.67% | 1.81% |
| Constructeurs auto | chronos | 1.86% | 3.20% | 1.07% |
| Constructeurs auto | ridge | 2.69% | 6.78% | 1.47% |
| Constructeurs auto | last_close | 2.26% | 2.70% | 1.09% |
| Banques | xgboost | 3.56% | 2.27% | 1.66% |
| Banques | lightgbm | 3.13% | 1.89% | 1.60% |
| Banques | varma | 4.21% | 12.66% | 1.85% |
| Banques | chronos | 3.68% | 4.60% | 1.78% |
| Banques | ridge | 4.99% | 1.91% | 1.66% |
| Banques | last_close | 4.06% | 2.84% | 1.46% |
| Électronique | xgboost | 3.67% | 5.16% | 1.40% |
| Électronique | lightgbm | 3.58% | 1.09% | 1.38% |
| Électronique | varma | 5.13% | 21.04% | 1.81% |
| Électronique | chronos | 3.11% | 3.09% | 1.36% |
| Électronique | ridge | 7.11% | 5.62% | 1.72% |
| Électronique | last_close | 3.04% | 1.56% | 1.30% |
| Télécoms | xgboost | 5.23% | 1.44% | 1.28% |
| Télécoms | lightgbm | 5.96% | 1.47% | 1.47% |
| Télécoms | varma | 13.19% | 14.50% | 1.41% |
| Télécoms | chronos | 5.43% | 3.09% | 1.08% |
| Télécoms | ridge | 7.14% | 1.65% | 1.13% |
| Télécoms | last_close | 3.44% | 2.83% | 0.88% |
| Maisons de négoce | xgboost | 3.08% | 4.58% | 1.41% |
| Maisons de négoce | lightgbm | 2.78% | 4.40% | 1.48% |
| Maisons de négoce | varma | 9.75% | 1.05% | 2.36% |
| Maisons de négoce | chronos | 3.14% | 3.45% | 1.27% |
| Maisons de négoce | ridge | 2.72% | 7.36% | 1.69% |
| Maisons de négoce | last_close | 2.46% | 4.63% | 1.32% |
### Comparaison directe à 16 pas (5 secteurs, 2 holdouts ; jusqu’au 2026-10-09)

| Modèle | MAPE prix récursif ↓ | MAPE prix direct ↓ | MAPE rendement logarithmique direct ↓ | MAPE dernier cours de clôture ↓ |
| --- | ---: | ---: | ---: | ---: |
| xgboost | 4.06% | 3.46% | 4.59% | 2.98% |
| lightgbm | 3.16% | 3.75% | 4.49% | 2.98% |
| ridge | 4.80% | 4.31% | 4.01% | 2.98% |
<!-- FRONTEND_STOCK_EVALUATION:END -->

## Résultats boursiers — benchmark avec moteur séparé

<!-- STOCK_MULTIVARIATE:START -->
| Secteur | Modèle | MAPE longue période univarié ↓ | MAPE longue période multivarié ↓ | MAPE récent univarié ↓ | MAPE récent multivarié ↓ |
| --- | --- | ---: | ---: | ---: | ---: |
| Constructeurs auto | ridge | 1.48% | 1.52% | 1.07% | 1.13% |
| Constructeurs auto | xgboost | 1.67% | 1.64% | 1.41% | 1.34% |
| Constructeurs auto | lightgbm | 1.60% | 1.59% | 1.33% | 1.34% |
| Banques | ridge | 1.63% | 1.66% | 1.47% | 1.52% |
| Banques | xgboost | 1.77% | 1.80% | 1.66% | 1.61% |
| Banques | lightgbm | 1.76% | 1.77% | 1.49% | 1.55% |
| Électronique | ridge | 1.69% | 1.70% | 1.27% | 1.35% |
| Électronique | xgboost | 1.83% | 1.91% | 1.45% | 1.50% |
| Électronique | lightgbm | 1.79% | 1.80% | 1.34% | 1.41% |
| Télécoms | ridge | 0.81% | 0.82% | 0.90% | 0.87% |
| Télécoms | xgboost | 0.85% | 0.87% | 1.04% | 1.01% |
| Télécoms | lightgbm | 0.83% | 0.85% | 0.97% | 0.91% |
| Maisons de négoce | ridge | 1.63% | 1.63% | 1.39% | 1.41% |
| Maisons de négoce | xgboost | 1.77% | 1.69% | 1.50% | 1.53% |
| Maisons de négoce | lightgbm | 1.69% | 1.66% | 1.34% | 1.43% |
<!-- STOCK_MULTIVARIATE:END -->


---

## Benchmark AirPassengers

Consultez [`BENCHMARKS.md`](./BENCHMARKS.md) pour le protocole équitable à 16 pas et les règles de comparaison aux articles.

Le dépôt inclut les données AirPassengers et une commande de benchmark permettant de tester les modèles sur cette série temporelle mensuelle classique.

Exécuter le benchmark avec Docker Compose :

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark
```

Sortie JSON :

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm xgboost --json'
```

Référence naïve saisonnière :

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm seasonal-naive --json'
```


### Benchmark holdout à 16 pas

- entraînement : les 128 premières observations d’AirPassengers
- holdout : les 16 observations suivantes
- aucune valeur réelle du holdout n’est réinjectée pendant la prévision
- mesures ponctuelles communes : MAE, RMSE, MAPE, sMAPE et MASE

Reproduisez le benchmark avec :

```bash
docker compose -f docker-compose.test.yml run --rm \
  air_passengers_fair_benchmark \
  sh -lc '
    npm --prefix frontend/app ci &&
    node scripts/benchmark-air-passengers-fair.mjs --markdown
  '
```

Évaluation AirPassengers avec LightGBM uniquement :

```bash
docker compose -f docker-compose.test.yml run --rm \
  lightgbm_air_passengers_benchmark
```

Cela exécute le même protocole 128/16 avec `--algorithm lightgbm` ; le résultat est donc directement comparable aux autres lignes AirPassengers.

VARMA est indiqué N/A, car AirPassengers est univariée alors que l’implémentation VARMA expérimentale de ce dépôt exige au moins deux séries numériques. Voir [`BENCHMARKS.md`](./BENCHMARKS.md) pour les protocoles multivariés et de comparaison aux articles.

# Licence
- Apache License 2.0
