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



## 40秒デモ

[![▶ 40秒デモを見る](https://img.youtube.com/vi/AUFat22QJHE/hqdefault.jpg)](https://youtu.be/AUFat22QJHE)

## プレイグラウンド

[▶ ブラウザーで動く予測アプリを開く](https://europanite.github.io/client-side-time-series-forecast-ai/)

ブラウザーだけで使えるクライアントサイドの時系列予測AIツールです。処理はすべてブラウザー内で実行されるため、完全無料で安心して利用できます。

[XGBoost](https://xgboost.readthedocs.io/en/stable/)、XGBoost Bagging ×2、[LightGBM](https://lightgbm.readthedocs.io/)、LightGBM Bagging ×2、実験的なVARMA系モデル、[Chronos-2](https://github.com/amazon-science/chronos-forecasting)、[TimesFM 2.5](https://github.com/google-research/timesfm)、Ridge回帰から選択できます。

---

## 概要

この多変量時系列予測ツールは、Webブラウザー内だけで動作します。インストールも登録も支払いも不要です。ブラウザーからアクセスするだけですぐに使え、中小企業が翌日の注文量を予測するのに役立ちます。

- ブラウザーでCSV/XLSX形式の時系列データを読み込む
- 任意の数値列を予測対象として選択する
- XGBoost、XGBoost Bagging ×2、LightGBM、LightGBM Bagging ×2、実験的なVARMA系モデル、事前学習済みのChronos-2とTimesFM 2.5、Ridge回帰からモデルを選ぶ
- 選択したモデルをブラウザー内でローカル学習する
- 次の16点を予測してグラフに追加する

すべての処理は**ブラウザー内**で完結します。バックエンドAPIはなく、データが端末の外へ送信されることもありません。

---

## デモ

1. GitHub Pagesのデモを開きます：  
   https://europanite.github.io/client-side-time-series-forecast-ai/

2. [`data/sample_data.csv`](./data/sample_data.csv)（株価）や[`data/sample_data.xlsx`](./data/sample_data.xlsx)（合成の多変量サンプル）などをアップロードします。
3. アプリが次の処理を行います：
   - **日時形式の列**を検出する
   - 利用できる数値列を一覧表示する
4. 数値列を1つ、**予測対象**として選択します。
5. **予測モデル**を選びます。既定は`XGBoost`です。`XGBoost Bagging ×2`はブートストラップ標本で学習した2つのXGBoost回帰器を平均します。`LightGBM`はブラウザー内で学習する別のGBDT、`LightGBM Bagging ×2`は同様に2つのLightGBM回帰器を平均します。`VARMA experimental`は軽量な多変量ベースライン、`Chronos-2 pretrained`はゼロショットの基盤モデル、`TimesFM 2.5`は任意で使えるゼロショットONNXモデル、`Ridge`はローカル学習する線形ベースラインです。
6. XGBoost、XGBoost Bagging ×2、LightGBM、LightGBM Bagging ×2、VARMA、Ridgeでは、まず**Train**をクリックします。事前学習済みのChronos-2とTimesFM 2.5はローカル学習不要です。その後**Forecast +16**をクリックして次の16点を予測します。
7. グラフ上で観測系列と予測線を比較します。

---

# 🚀 はじめに

## npm

### 1. 前提条件
- Node.js

### 2. サービスのビルド：

```bash
cd frontend/app
npm ci
npm run dev
```

### 3. テスト：

```bash
npm test -- --ci --runInBand --coverage --verbose
npx tsc --noEmit
npm run build
```

## Docker Compose

### 1. 前提条件
- [Docker Compose](https://docs.docker.com/compose/)

### 2. サービスのビルド：

```bash
docker compose up --build
```

### 3. テスト：

```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

## データ構造

<pre>
datetime,item_a,item_b,item_c,...
2025-01-01 00:00:00+09:00,10,20,31,...
2025-01-02 00:00:00+09:00,12,19,31,...
2025-01-03 00:00:00+09:00,14,18,33,...
 ...
</pre>

### 要件：

##### 日時形式の列が1つ
列名に「date」または「time」が含まれること（大文字・小文字は区別しません）。
時間軸として使いますが、数値特徴量へ直接変換することはありません。

##### 数値列が1つ以上
予測対象や外生特徴量として使用します。
アプリには、ローカル学習する6つの予測モードがあります：

- **XGBoost**：1つの数値列を対象に選び、それ以外の数値列を補助信号として使います。
- **XGBoost Bagging ×2**：同じ教師あり特徴量から独立にブートストラップ抽出し、2つのXGBoostモデルを学習して予測を平均します。直接16ステップ予測では32個のブースターを学習します。
- **LightGBM Bagging ×2**：XGBoost Bagging ×2と同じブートストラップ方式で2つのLightGBMモデルを学習し、予測を平均します。直接16ステップ予測では32個のブースターを学習します。
- **LightGBM**：XGBoostと同じ予測対象および加工済み多変量特徴量を使い、LightGBM回帰器を学習します。
- **VARMA experimental**：すべての数値列をまとめてモデル化し、選択した対象列の予測を出力します。
- **Ridge**：XGBoostやLightGBMと同じ加工済み特徴量と再帰予測経路を使い、正則化線形回帰をローカル学習します。

---

<!-- ALL_MODEL_EVALUATION:START -->
### 全8モデル — 同条件のブラウザーホールドアウト評価（2026-10-30まで）

各業種で過去256営業日の終値を使用し、続く同じ16営業日を予測します。MAPEは低いほど優秀です。5つの教師ありモデルは**Direct price**（ブラウザーの既定値）を、VARMAは系列をまとめた再帰予測を使います。Chronos-2とTimesFM 2.5は選択した対象系列だけを使用します。いずれもNodeで再実装せず、Chromium上で実行しています。

| モデル | 自動車 MAPE ↓ | 銀行 MAPE ↓ | 電機 MAPE ↓ | 通信 MAPE ↓ | 商社 MAPE ↓ | 平均 MAPE ↓ | 平均 sMAPE ↓ |
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

プロトコル：`real-browser-recent-16step-all-eight-v1`、入力SHA256：`bd5150223ed5…`、ソースSHA256：`e2e34fbc83b1…`。
スコアは過去の評価時点のスナップショットに基づくもので、運用中の予測を監査した結果ではありません。
[手法と再現手順](docs/ALL_MODEL_EVALUATION.md)。MAE/RMSE、予測値、実行時間の全結果：[`reports/stocks/all-models.json`](reports/stocks/all-models.json)。
<!-- ALL_MODEL_EVALUATION:END -->

## 予測手法

本プロジェクトには、前提の異なる8種類の予測アルゴリズムがあります：

| モデル | 学習方式 | 複数系列を入力するか | ローカル学習 | 予測方式 |
| --- | --- | --- | --- | --- |
| XGBoost | 加工済み時系列特徴量に対する勾配ブースティング決定木回帰 | はい | はい | 再帰予測または16ホライズンの直接予測 |
| XGBoost Bagging ×2 | 独立にブートストラップ学習した2つのXGBoost回帰器の予測を平均 | はい | はい（ホライズンごとに2モデル） | 再帰予測または16ホライズンの直接予測 |
| LightGBM | XGBoostと同じ特徴量を使うヒストグラムベースの勾配ブースティング決定木回帰 | はい | はい | 再帰予測または16ホライズンの直接予測 |
| LightGBM Bagging ×2 | 独立にブートストラップ学習した2つのLightGBM回帰器の予測を平均 | はい | はい（ホライズンごとに2モデル） | 再帰予測または16ホライズンの直接予測 |
| VARMA experimental | Ridge正則化と残差補正を備えた線形の多出力自己回帰 | はい（同時モデル化） | はい | 多出力の同時再帰予測 |
| Chronos-2-small INT8 ONNX | パッチベースの事前学習済み時系列基盤モデル | 現在のUIでは対象系列のみ | いいえ | 直接的な確率的多ステップ予測 |
| TimesFM 2.5 ONNX | 事前学習済み時系列基盤モデル（任意の大容量ダウンロード） | 対象系列のみ | いいえ | 直接的な確率的多ステップ予測 |
| Ridge (linear baseline) | 木モデルと共通の加工済み特徴量に対するL2正則化線形回帰 | はい | はい | 再帰予測または16ホライズンの直接予測 |

これらは同一アルゴリズムの8実装ではありません。XGBoost、LightGBMとそのバギング版は時系列を共通の表形式の教師あり学習問題に変換します。VARMAは複数系列の遅延ベクトルを同時にモデル化し、Ridgeは同じ教師あり特徴量に対する線形の比較基準となります。一方、Chronos-2とTimesFM 2.5はアップロードしたデータで新たなパラメーターを学習せず、事前学習済みのニューラル予測モデルを使います。

XGBoost、XGBoost Bagging ×2、LightGBM、LightGBM Bagging ×2、Ridgeでは、**直接16ステップ予測が既定の方式**です。未来の各ステップを独立に学習することで、他系列の架空の将来値を使わずに済みます。再帰予測に切り替えるには**Settings → Advanced forecasting → Forecast strategy**を開きます。再帰方式は1モデルを使い、16ステップを反復的に予測します。VARMAは複数系列の同時自己回帰を使い、事前学習済みのChronos-2とTimesFM 2.5は直接予測します。教師ありモデルの予測に固定の季節性ブレンドは適用しません。詳細は[予測戦略](docs/FORECAST_STRATEGIES.md)を参照してください。

### モデルの選び方

#### XGBoost

`XGBoost`はローカル学習モデルの既定値です。XGBoostは勾配ブースティング決定木アルゴリズムで、多数の決定木を順番に追加し、前のアンサンブルに残った誤差を新しい木で減らします。時系列をそのままXGBoostへ渡すのではなく、各時点を特徴ベクトルに変換して回帰モデルとして学習します。

ブラウザー実装では、次を使用します：

- 対象系列と外生系列の最大`MAX_LAG = 3`のラグ
- 一階差分
- `ROLLING_WINDOW = 7`の移動平均
- 数値系列間の差・比・積の交互作用
- 時間インデックス
- 周期24と168のフーリエ特徴量
- 深さ4、学習率0.1、subsample 0.8、200回のブースティングを行う`gbtree`

**recursive**モードでは1ステップずつ予測し、その結果を次の予測の履歴に追加します。未知の他系列の将来値はヒューリスティックに補完します。**direct**モードでは、16個の独立したホライズン別モデルが実際の最終観測特徴量を使うため、他系列の架空の将来値は不要です。モデル予測に固定の季節性ブレンドは使いません。

**長所**

- 系列間の非線形関係や交互作用を捉えられる
- 本プロジェクト独自の多変量特徴量と相性がよい
- ブラウザー内で比較的高速に学習できる
- 大容量の事前学習済みモデルをダウンロードする必要がない

**制約**

- 精度は特徴量設計に左右される
- 再帰予測では後のステップほど誤差が蓄積し得る
- フーリエ周期と季節的な延長方法は、カレンダー構造を自動学習した結果ではなく、アプリ側の仮定である

複数の数値列の関係を活用できる、軽量でローカル学習可能な非線形モデルが必要な場合はXGBoostを選んでください。

#### LightGBM

`LightGBM`はもう1つのローカル学習型勾配ブースティング決定木モデルです。ブラウザー実装ではLightGBMのWebAssembly版である`@wlearn/lightgbm`を使用し、XGBoostと同じ`buildFeatures()`の出力と16ステップ予測戦略（再帰または直接）を意図的に再利用します。

LightGBMの既定設定は回帰、学習率0.1、葉31、最大深さ4、subsample 0.8、ブースティング200回です。固定の季節性ブレンドは行わず、モデルの生の予測を使います。

特徴量パイプラインとアプリ側の評価プロトコルを固定したまま、XGBoostと直接比較できるヒストグラム型GBDTを試したい場合に適しています。

#### VARMA（実験版）

`VARMA experimental`はブラウザー内で動く軽量な多変量ベースラインです。名称に反して、この実装は**統計的な完全な最尤VARMA推定器ではありません**。小規模な残差補正と任意の季節性安定化を備えた、正則化VARに近いモデルです。

実装の手順：

1. 最大8つの数値系列を選択し、標準化する。
2. 過去7時点の多変量ベクトルを連結し、ラグ特徴ベクトルを作る。
3. 多出力Ridge回帰（`ridge = 1e-2`）で全系列を同時に学習する。
4. 直近の残差から小さな補正を推定する（`maLag = 1`）。
5. 任意で自己回帰の出力を季節ラグベクトルと混合する（`seasonalLag = 7`、既定の`seasonalBlend = 0`）。
6. 予測ベクトルを次のステップに再帰的に入力する。

各ステップで数値ベクトル全体を予測するため、VARMAは対象列だけでなく、すべてのモデル化対象系列を同時に進めます。

**長所**

- 単純で計算コストが低い
- 複数の数値系列を同時にモデル化する
- XGBoostやChronos-2との比較に使える線形・古典的手法のベースラインになる
- 別のモデルをダウンロードせず、TypeScriptだけで動作する

**制約**

- 数値系列が2つ以上、利用可能な行が8行以上必要
- ラグ間の関係が主に線形であると仮定する
- 残差補正と任意の季節性ブレンドはヒューリスティックで、完全な移動平均推定ではない
- 統計的VARMAの参照実装として扱うべきではない

`VARMA experimental`は、複数系列が連動する場面で、挙動を理解しやすい多変量ベースラインとして使うのが適しています。

#### Chronos-2（事前学習済み）

`Chronos-2 pretrained`は前述のローカル学習モデルと根本的に異なります。Chronos-2はパッチベースの事前学習済み時系列基盤モデルで、複数ステップの**分位点予測**を直接出力します。本リポジトリでは`Chronos-2-small INT8`をONNX Runtime Webで実行するため、モデルをダウンロードした後の推論はローカルで行われます。

現在のブラウザー統合では：

- アップロードしたデータセットで**学習しない**
- 選択した対象系列だけをChronosのコンテキストに使う
- 対象系列に16点以上の数値観測が必要
- コンテキストは最大5,760点まで
- 入力を16点ずつのパッチに分け、先頭の不完全なパッチを`NaN`で左側パディングする
- ONNXグラフ内部の672ステップ出力（`42 × 16`）を実行し、先頭16ステップをUIに表示する
- 分位点出力から中央値（`p50`）の予測と、`p10`・`p90`の不確実性境界を表示する

Chronos-2自体は、より豊富な多変量・共変量を利用した予測に対応しますが、**現在のUIはそれらの機能をまだ使用していません**。したがって現時点の実装は、多変量アプリ内で動作する事前学習済み単変量予測器と理解してください。

**長所**

- ゼロショット予測：データセットごとの学習が不要
- 1ステップモデルを再帰適用せず、予測期間全体を直接予測する
- 分位点を通じて予測の確率情報を提供する
- 大規模な事前学習で得たパターンを新しい系列へ転移できる

**制約**

- 初回利用前にモデルのダウンロードが必要
- ブラウザーではINT8 ONNXエクスポートを使用するため、公式の全精度チェックポイントと結果が完全一致するとは限らない
- 現在のUIではChronos-2の実行時に追加の数値列を無視する
- ブラウザーのメモリとWASM実行にはモデルサイズとコンテキスト長の実用上の制限がある

過去に記録されたAirPassengersの128/16ホールドアウト評価では、`Chronos-2-small INT8 ONNX`が比較対象モデルのうちMAE、RMSE、MAPE、sMAPE、MASEのすべてで最小でした。測定値と評価手順は下のベンチマーク節を参照してください。**これらは旧バージョンのアプリで得た過去の結果です。特徴量と予測戦略の改訂後の結果と比較するには、評価の再実行が必要です。**

### 16ステップ予測

既定の予測期間が16なのは、組み込まれたChronos-2 ONNXモデルが16点パッチを使用し、比較のためXGBoost、LightGBM、VARMAのAPIも同じ期間に揃えているためです。

各アルゴリズムの16点への到達方法は異なります：

- **XGBoost、LightGBM、Ridge**は、1つの学習済み1ステップモデルによる再帰予測か、16個の期間別モデルによる直接予測を行えます。
- **VARMA experimental**は多変量ベクトル全体を再帰予測し、含まれるすべての系列を同時に進めます。
- **Chronos-2**は複数ステップの確率的推論を直接行い、事前学習済みモデルの出力から未来の先頭16点を返します。

XGBoost、LightGBM、Ridgeでは直接方式が**既定**です。再帰方式はSettings内の詳細オプションです。またSettingsでは、直接予測の対象を既定の元の値から、正値系列の累積対数リターンに変更できます。直接予測では最大16モデルの学習が必要ですが、繰り返し架空の入力を作る必要がありません。方式間の比較には同じ未知データ期間を使用する必要があり、どちらにも精度上の優位性は保証されません。

---

## 特徴量エンジニアリング（XGBoost / LightGBM）

ここで説明する手作業の特徴量設計はXGBoostとLightGBMの両方に適用されます。VARMAは正規化したラグベクトルを直接使い、Chronos-2はこれらの特徴量を使わず対象系列を入力します。

木ベースのブースティング処理では、入力を小規模な多変量時系列として扱います：

- *日時形式*の列が1つ（ヘッダーに大文字・小文字を問わず`date`または`time`を含む）。
- 数値列が複数（例：`item_a`、`item_b`、`item_c`など）。
- 数値列の1つを**予測対象**として選ぶ。

内部では、各時点`t`の**豊富な特徴ベクトル**と、`t + 1`に対する**将来特徴ベクトル**を構築します。すべての特徴量はJavaScript/TypeScriptで**クライアント側のみ**で計算されます。

### 特徴量に用いる系列

- `datetimeKey`  
  - ヘッダーに`"date"`または`"time"`を含む列から自動検出します。
  - 時間軸の特定にのみ使い、数値特徴量には直接使用しません。
- `targetKey`  
  - ユーザーが予測対象として選ぶ数値列です。
- `featureKeys`  
  - 日時列・対象列以外のすべての数値列です。
  - **外生系列**として扱います。

内部では、各系列の数値配列を保持する`seriesMap: Record<string, number[]>`を使用します。

### 系列ごとの特徴量（外生系列）

各外生系列`x(t)`（`featureKeys`の各キー）と各時点`t`について、次を計算します：

1. **同時点の値**
   - `x(t)`（時点`t`の値）。

2. **ラグ特徴量（履歴）**
   - 最大`MAX_LAG = 3`まで：
     - `x(t - 1)`
     - `x(t - 2)`
     - `x(t - 3)`
   - 系列ごとの短期的な時間変化を学習できます。

3. **一階差分**
   - `x(t) - x(t - 1)`
   - 絶対的な水準だけでなく、局所的な変化（傾向・傾き）を捉えます。

4. **移動平均（局所平均）**
   - `ROLLING_WINDOW = 7`時点の移動窓：
     - `mean(x[t - 6 ... t])`（系列の先頭付近では窓を短縮）
   - 局所的な傾向・基準水準を表し、短期ノイズを平滑化します。

> 系列長が窓より短い場合、コードは窓を自動で縮小し、`t`までに利用可能な過去の点をすべて使用します。

### 対象系列の履歴

**対象系列**`y(t)`自体については、現時点の値`y(t)`がそのステップの正解ラベルなので特徴量には含めません。ただし、その履歴は使用します：

1. **対象系列のラグ**
   - `y(t - 1)`
   - `y(t - 2)`
   - `y(t - 3)`

2. **対象系列の差分**
   - `y(t) - y(t - 1)`

3. **対象系列の移動平均**
   - 上と同じ移動窓：
     - `mean(y[t - 6 ... t])`

これにより、「次の値は直近数点とその局所的な傾向に依存する」といった、時系列予測で一般的なパターンを学習できます。

### 系列間の交互作用

**異なる系列間の関係**を捉えるため、予測対象を含む**数値系列の各ペア**について交互作用特徴量を作ります：

- `v_i(t)`と`v_j(t)`を、時点`t`における2系列の値とします。
- `i < j`を満たす各順序付きペア`(i, j)`について、次を計算します：

1. **差（スプレッド）**
   - `v_i(t) - v_j(t)`
   - 系列間の相対的な水準差を表します。

2. **比率**
   - `v_i(t) / v_j(t)`
   - ゼロ除算を避けるため、必要に応じて分母に小さなイプシロンを加えます：
     - `denom = |v_j| < 1e-9 ? sign(v_j) * 1e-9 : v_j`
   - 相対的なスケールと比例関係を表します。

3. **積**
   - `v_i(t) * v_j(t)`
   - 両系列の値の大小が効く「交互作用効果」を表現できます。

こうした系列間特徴量により、個々の値だけに頼らず、**複数系列の構造**をブースティングモデルへ明示的に渡せます。

### 時間インデックスとフーリエ特徴量

時間そのものも数値特徴量として符号化します：

1. **時間インデックス**
   - 整数インデックス`t = 0, 1, 2, ...`（行番号）。
   - ブースティングモデルが全体的な傾向を表現する手掛かりになります。

2. **フーリエ特徴量**（周期パターン）
   - 2種類の周期（単位は「行数」）：
     - 周期24（例：時間別データの24時間）
     - 周期168（例：7日×24時間）
   - 各周期`P`について以下を計算します：
     - `sin(2πt / P)`
     - `cos(2πt / P)`
   - 木モデルでも利用できる形で季節性・周期性を表現する標準的な方法です。

各時点`t`の最終的な特徴ベクトルは次のとおりです：

```text
[ exogenous features (current, lags, diff, rolling mean for each series),
  target-series history (lags, diff, rolling mean),
  cross-series interactions (spread, ratio, product),
  time index, sin/cos(2πt/24), sin/cos(2πt/168) ]
```

### 将来ステップの特徴ベクトル（lastFeatureRow）
同じ特徴量構築処理で、t + 1（1ステップ先）の特徴ベクトルも作ります：
- 次の時点をt_next = nとし、nを観測行数と考えます。
- t_nextでの各系列の「現在値」には最後の観測値（インデックスn - 1）を再利用します。
- ラグと移動平均は観測データの最後のMAX_LAG / ROLLING_WINDOWステップから計算します。
- 時間の符号化にはt_nextをインデックスとして使います。
- こうして、最後の観測までの全履歴から次の時点を表す単一の特徴ベクトルlastFeatureRowを作ります。

したがってbuildFeatures関数は次を返します：
```text
{
  X: number[][];        // feature matrix for all observed steps
  y: number[];          // target series values for those steps
  lastFeatureRow: number[]; // feature vector representing t + 1
}
```

---

<!-- FRONTEND_STOCK_EVALUATION:START -->
## 株価の結果 — ブラウザーベンチマーク（2026-10-09まで）

| 業種 | モデル | 以前の16ステップ MAPE ↓ | 直近の16ステップ MAPE ↓ | ローリング1ステップ MAPE ↓ |
| --- | --- | ---: | ---: | ---: |
| 自動車 | xgboost | 7.55% | 4.08% | 1.55% |
| 自動車 | lightgbm | 2.58% | 4.74% | 1.71% |
| 自動車 | varma | 11.82% | 3.67% | 1.81% |
| 自動車 | chronos | 1.86% | 3.20% | 1.07% |
| 自動車 | ridge | 2.69% | 6.78% | 1.47% |
| 自動車 | last_close | 2.26% | 2.70% | 1.09% |
| 銀行 | xgboost | 3.56% | 2.27% | 1.66% |
| 銀行 | lightgbm | 3.13% | 1.89% | 1.60% |
| 銀行 | varma | 4.21% | 12.66% | 1.85% |
| 銀行 | chronos | 3.68% | 4.60% | 1.78% |
| 銀行 | ridge | 4.99% | 1.91% | 1.66% |
| 銀行 | last_close | 4.06% | 2.84% | 1.46% |
| 電機 | xgboost | 3.67% | 5.16% | 1.40% |
| 電機 | lightgbm | 3.58% | 1.09% | 1.38% |
| 電機 | varma | 5.13% | 21.04% | 1.81% |
| 電機 | chronos | 3.11% | 3.09% | 1.36% |
| 電機 | ridge | 7.11% | 5.62% | 1.72% |
| 電機 | last_close | 3.04% | 1.56% | 1.30% |
| 通信 | xgboost | 5.23% | 1.44% | 1.28% |
| 通信 | lightgbm | 5.96% | 1.47% | 1.47% |
| 通信 | varma | 13.19% | 14.50% | 1.41% |
| 通信 | chronos | 5.43% | 3.09% | 1.08% |
| 通信 | ridge | 7.14% | 1.65% | 1.13% |
| 通信 | last_close | 3.44% | 2.83% | 0.88% |
| 商社 | xgboost | 3.08% | 4.58% | 1.41% |
| 商社 | lightgbm | 2.78% | 4.40% | 1.48% |
| 商社 | varma | 9.75% | 1.05% | 2.36% |
| 商社 | chronos | 3.14% | 3.45% | 1.27% |
| 商社 | ridge | 2.72% | 7.36% | 1.69% |
| 商社 | last_close | 2.46% | 4.63% | 1.32% |
### 直接16ステップ予測の比較（5業種・2ホールドアウト、2026-10-09まで）

| モデル | 再帰的な価格予測 MAPE ↓ | 直接的な価格予測 MAPE ↓ | 直接的な対数リターン予測 MAPE ↓ | 最終終値 MAPE ↓ |
| --- | ---: | ---: | ---: | ---: |
| xgboost | 4.06% | 3.46% | 4.59% | 2.98% |
| lightgbm | 3.16% | 3.75% | 4.49% | 2.98% |
| ridge | 4.80% | 4.31% | 4.01% | 2.98% |
<!-- FRONTEND_STOCK_EVALUATION:END -->

## 株価の結果 — 別エンジンのベンチマーク

<!-- STOCK_MULTIVARIATE:START -->
| 業種 | モデル | 長期・単変量 MAPE ↓ | 長期・多変量 MAPE ↓ | 直近・単変量 MAPE ↓ | 直近・多変量 MAPE ↓ |
| --- | --- | ---: | ---: | ---: | ---: |
| 自動車 | ridge | 1.48% | 1.52% | 1.07% | 1.13% |
| 自動車 | xgboost | 1.67% | 1.64% | 1.41% | 1.34% |
| 自動車 | lightgbm | 1.60% | 1.59% | 1.33% | 1.34% |
| 銀行 | ridge | 1.63% | 1.66% | 1.47% | 1.52% |
| 銀行 | xgboost | 1.77% | 1.80% | 1.66% | 1.61% |
| 銀行 | lightgbm | 1.76% | 1.77% | 1.49% | 1.55% |
| 電機 | ridge | 1.69% | 1.70% | 1.27% | 1.35% |
| 電機 | xgboost | 1.83% | 1.91% | 1.45% | 1.50% |
| 電機 | lightgbm | 1.79% | 1.80% | 1.34% | 1.41% |
| 通信 | ridge | 0.81% | 0.82% | 0.90% | 0.87% |
| 通信 | xgboost | 0.85% | 0.87% | 1.04% | 1.01% |
| 通信 | lightgbm | 0.83% | 0.85% | 0.97% | 0.91% |
| 商社 | ridge | 1.63% | 1.63% | 1.39% | 1.41% |
| 商社 | xgboost | 1.77% | 1.69% | 1.50% | 1.53% |
| 商社 | lightgbm | 1.69% | 1.66% | 1.34% | 1.43% |
<!-- STOCK_MULTIVARIATE:END -->


---

## AirPassengersベンチマーク

公平な16ステップ評価手順と論文比較の規則は[`BENCHMARKS.md`](./BENCHMARKS.md)を参照してください。

本リポジトリにはAirPassengersデータセットと、代表的な月次時系列データに対してモデルの挙動を確認するベンチマークコマンドが含まれます。

Docker Composeでベンチマークを実行します：

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark
```

JSON出力：

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm xgboost --json'
```

季節ナイーブ法のベースライン：

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm seasonal-naive --json'
```


### 16ステップのホールドアウト評価

- 学習：AirPassengersの最初の128観測点
- ホールドアウト：続く16観測点
- 予測中にホールドアウトの正解値をフィードバックしない
- 共通の点予測指標：MAE、RMSE、MAPE、sMAPE、MASE

次のコマンドでベンチマークを再現できます：

```bash
docker compose -f docker-compose.test.yml run --rm \
  air_passengers_fair_benchmark \
  sh -lc '
    npm --prefix frontend/app ci &&
    node scripts/benchmark-air-passengers-fair.mjs --markdown
  '
```

LightGBMだけを使用したAirPassengers評価：

```bash
docker compose -f docker-compose.test.yml run --rm \
  lightgbm_air_passengers_benchmark
```

同じ128/16手順を`--algorithm lightgbm`で実行するため、ほかのAirPassengersの結果と直接比較できます。

AirPassengersは単変量データですが、このリポジトリの実験的VARMAは数値系列が2つ以上必要なため、VARMAはN/Aとしています。多変量評価および論文との比較手順は[`BENCHMARKS.md`](./BENCHMARKS.md)を参照してください。

# ライセンス
- Apache License 2.0
