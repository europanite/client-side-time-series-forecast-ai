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



## 40초 데모

[![▶ 40초 데모 보기](https://img.youtube.com/vi/AUFat22QJHE/hqdefault.jpg)](https://youtu.be/AUFat22QJHE)

## 체험하기

[▶ 브라우저 기반 예측 앱 열기](https://europanite.github.io/client-side-time-series-forecast-ai/)

웹브라우저에서만 실행되는 클라이언트 측 시계열 예측 AI 도구입니다. 모든 처리가 브라우저 내부에서 이루어지므로 완전히 무료이며 안전합니다.

[XGBoost](https://xgboost.readthedocs.io/en/stable/), XGBoost Bagging ×2, [LightGBM](https://lightgbm.readthedocs.io/), LightGBM Bagging ×2, 실험적인 VARMA 계열 모델, [Chronos-2](https://github.com/amazon-science/chronos-forecasting), [TimesFM 2.5](https://github.com/google-research/timesfm), Ridge 회귀 중에서 선택할 수 있습니다.

---

## 개요

이 다변량 시계열 예측 도구는 웹브라우저 안에서 완전히 실행됩니다. 설치, 가입, 결제가 필요 없습니다. 브라우저로 접속하면 바로 사용할 수 있으며 소규모 기업의 다음 날 주문량 예측에 도움이 됩니다.

- 브라우저에서 CSV/XLSX 시계열 데이터셋 불러오기
- 원하는 숫자 열을 예측 대상으로 선택하기
- XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, 실험적 VARMA 계열 모델, 사전 학습된 Chronos-2 및 TimesFM 2.5, Ridge 회귀 중 선택하기
- 선택한 모델을 브라우저에서 로컬로 학습하기
- 다음 16개 지점을 예측하고 차트에 추가하기

모든 처리는 **브라우저 내부**에서 완료됩니다. 백엔드 API가 없으며 데이터가 컴퓨터 밖으로 전송되지 않습니다.

---

## 데모

1. GitHub Pages 데모를 엽니다:  
   https://europanite.github.io/client-side-time-series-forecast-ai/

2. [`data/sample_data.csv`](./data/sample_data.csv)(주가) 또는 [`data/sample_data.xlsx`](./data/sample_data.xlsx)(합성 다변량 샘플) 같은 예제 파일을 업로드합니다.
3. 앱이 다음 작업을 수행합니다:
   - **날짜·시간 형식 열** 감지
   - 사용 가능한 숫자 열 나열
4. 숫자 열 하나를 **예측 대상**으로 선택합니다.
5. **예측 모델**을 선택합니다. 기본값은 `XGBoost`입니다. `XGBoost Bagging ×2`는 부트스트랩으로 학습한 XGBoost 회귀 모델 두 개를 평균합니다. `LightGBM`은 로컬 학습 GBDT 대안이며, `LightGBM Bagging ×2`는 LightGBM 회귀 모델 두 개를 평균합니다. `VARMA experimental`은 경량 다변량 기준 모델, `Chronos-2 pretrained`는 제로샷 기반 모델, `TimesFM 2.5`는 선택적으로 사용하는 제로샷 ONNX 모델, `Ridge`는 로컬 학습 선형 기준 모델입니다.
6. XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, VARMA 또는 Ridge는 먼저 **Train**을 클릭합니다. Chronos-2와 TimesFM 2.5는 사전 학습되어 로컬 학습이 필요하지 않습니다. 이어서 **Forecast +16**을 클릭하여 다음 16개 지점을 예측합니다.
7. 차트에서 관측 시계열과 예측선을 비교합니다.

---

# 🚀 시작하기

## npm

### 1. 사전 요구 사항
- Node.js

### 2. 서비스 빌드:

```bash
cd frontend/app
npm ci
npm run dev
```

### 3. 테스트:

```bash
npm test -- --ci --runInBand --coverage --verbose
npx tsc --noEmit
npm run build
```

## Docker Compose

### 1. 사전 요구 사항
- [Docker Compose](https://docs.docker.com/compose/)

### 2. 서비스 빌드:

```bash
docker compose up --build
```

### 3. 테스트:

```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

## 데이터 구조

<pre>
datetime,item_a,item_b,item_c,...
2025-01-01 00:00:00+09:00,10,20,31,...
2025-01-02 00:00:00+09:00,12,19,31,...
2025-01-03 00:00:00+09:00,14,18,33,...
 ...
</pre>

### 요구 사항:

##### 날짜·시간 형식 열 하나
열 이름에 "date" 또는 "time"이 포함되어야 합니다(대소문자 구분 없음).
시간축으로 사용하지만 숫자 특성으로 직접 변환하지는 않습니다.

##### 하나 이상의 숫자 열
예측 대상 및/또는 외생 특성으로 사용합니다.
앱은 로컬에서 학습하는 6가지 예측 모드를 지원합니다:

- **XGBoost**: 숫자 열 하나를 대상으로 선택하고 다른 숫자 열은 추가 신호로 사용합니다.
- **XGBoost Bagging ×2**: 동일한 지도 학습 특성에서 독립적으로 부트스트랩 샘플을 추출해 XGBoost 모델 두 개를 학습하고 출력을 평균합니다. 직접 16단계 모드에서는 부스터 32개를 학습합니다.
- **LightGBM Bagging ×2**: XGBoost Bagging ×2와 같은 부트스트랩 방식으로 LightGBM 모델 두 개를 학습하고 예측을 평균합니다. 직접 16단계 모드에서는 부스터 32개를 학습합니다.
- **LightGBM**: XGBoost와 같은 대상 및 가공된 다변량 특성을 사용하지만 LightGBM 회귀 모델을 학습합니다.
- **VARMA experimental**: 모든 숫자 열을 함께 모델링하고 선택한 대상 열의 예측을 출력합니다.
- **Ridge**: XGBoost 및 LightGBM과 동일한 가공 특성 및 재귀 예측 경로에 정규화 선형 회귀를 로컬로 학습합니다.

---

<!-- ALL_MODEL_EVALUATION:START -->
### 전체 8개 모델 — 동일 조건의 브라우저 홀드아웃 평가(2026-10-30까지)

각 업종에서 과거 종가 256개로 동일한 다음 16거래일을 예측합니다. MAPE가 낮을수록 좋습니다. 5개 지도 학습 모델은 **Direct price**(브라우저 기본값)를 사용하고 VARMA는 공동 재귀 예측을 사용합니다. Chronos-2와 TimesFM 2.5는 선택한 대상 시계열만 사용합니다. Node에서 재구현하지 않고 모두 Chromium에서 실행합니다.

| 모델 | 자동차 제조사 MAPE ↓ | 은행 MAPE ↓ | 전자 MAPE ↓ | 통신 MAPE ↓ | 종합상사 MAPE ↓ | 평균 MAPE ↓ | 평균 sMAPE ↓ |
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

프로토콜: `real-browser-recent-16step-all-eight-v1`; 입력 SHA256: `bd5150223ed5…`; 소스 SHA256: `e2e34fbc83b1…`.
점수는 평가 당시 스냅샷에 의존하는 과거 결과이며 실시간 예측 감사 결과가 아닙니다.
[방법 및 재현 절차](docs/ALL_MODEL_EVALUATION.md). 전체 MAE/RMSE, 예측값, 소요 시간: [`reports/stocks/all-models.json`](reports/stocks/all-models.json).
<!-- ALL_MODEL_EVALUATION:END -->

## 예측 접근법

이 프로젝트는 의도적으로 서로 다른 가정을 사용하는 8가지 예측 알고리즘을 제공합니다:

| 모델 | 학습 방식 | 여러 입력 시계열 사용? | 로컬 학습? | 예측 방식 |
| --- | --- | --- | --- | --- |
| XGBoost | 가공된 시계열 특성을 이용한 그래디언트 부스팅 결정 트리 회귀 | 예 | 예 | 재귀 예측 또는 16개 시점 직접 예측 |
| XGBoost Bagging ×2 | 독립적으로 부트스트랩 학습한 XGBoost 회귀 모델 두 개의 예측 평균 | 예 | 예(시점별 2개) | 재귀 예측 또는 16개 시점 직접 예측 |
| LightGBM | XGBoost와 동일한 특성을 사용하는 히스토그램 기반 그래디언트 부스팅 결정 트리 회귀 | 예 | 예 | 재귀 예측 또는 16개 시점 직접 예측 |
| LightGBM Bagging ×2 | 독립적으로 부트스트랩 학습한 LightGBM 회귀 모델 두 개의 예측 평균 | 예 | 예(시점별 2개) | 재귀 예측 또는 16개 시점 직접 예측 |
| VARMA experimental | Ridge 정규화 및 잔차 보정을 적용한 선형 다중 출력 자기회귀 | 예, 공동 모델링 | 예 | 공동 재귀 다중 출력 예측 |
| Chronos-2-small INT8 ONNX | 패치 기반의 사전 학습 시계열 파운데이션 모델 | 현재 UI에서는 선택한 대상만 | 아니요 | 직접 확률적 다단계 예측 |
| TimesFM 2.5 ONNX | 사전 학습 시계열 파운데이션 모델(선택적 대용량 다운로드) | 선택한 대상만 | 아니요 | 직접 확률적 다단계 예측 |
| Ridge (linear baseline) | 트리 모델과 공유하는 가공 특성에 대한 L2 정규화 선형 회귀 | 예 | 예 | 재귀 예측 또는 16개 시점 직접 예측 |

이 모델들은 같은 알고리즘을 여덟 번 구현한 것이 아닙니다. XGBoost, LightGBM 및 배깅 변형은 시계열을 동일한 표 형식 지도 학습 문제로 변환합니다. VARMA는 여러 시계열의 지연 벡터를 공동 모델링하고 Ridge는 같은 지도 학습 특성에 대한 선형 기준을 제공합니다. Chronos-2와 TimesFM 2.5는 업로드한 데이터로 새 파라미터를 학습하지 않고 사전 학습된 신경망 예측 모델을 사용합니다.

XGBoost, XGBoost Bagging ×2, LightGBM, LightGBM Bagging ×2, Ridge의 **기본 전략은 직접 16단계 예측**입니다. 미래 각 단계의 모델을 독립적으로 학습하므로 다른 시계열의 가짜 미래 입력을 만들지 않습니다. 재귀 예측으로 바꾸려면 **Settings → Advanced forecasting → Forecast strategy**를 여세요. 재귀 방식은 모델 하나로 16단계를 반복 예측합니다. VARMA는 여러 시계열의 공동 자기회귀를 사용하고 사전 학습된 Chronos-2와 TimesFM 2.5는 직접 예측합니다. 지도 학습 예측에 고정 계절 혼합은 적용하지 않습니다. [예측 전략](docs/FORECAST_STRATEGIES.md)을 참고하세요.

### 모델 선택

#### XGBoost

`XGBoost`는 기본 로컬 학습 모델입니다. XGBoost는 그래디언트 부스팅 결정 트리 알고리즘으로, 결정 트리를 순차적으로 추가하며 새 트리가 이전 앙상블의 잔여 오차를 줄입니다. 시계열을 XGBoost에 바로 넣지 않고 각 시점을 특성 벡터로 변환한 후 회귀 모델로 학습합니다.

브라우저 구현에 사용되는 요소:

- 대상 및 외생 시계열의 최대 `MAX_LAG = 3` 지연값
- 1차 차분
- `ROLLING_WINDOW = 7` 이동 평균
- 숫자 시계열 간 차이·비율·곱의 상호작용
- 시간 인덱스
- 주기 24와 168의 푸리에 특성
- 깊이 4, 학습률 0.1, subsample 0.8, 부스팅 반복 200회의 `gbtree`

**recursive** 모드에서는 한 단계씩 예측하고 결과를 다음 단계의 이력으로 사용합니다. 알 수 없는 다른 시계열의 미래값은 휴리스틱으로 연장합니다. **direct** 모드에서는 독립적으로 학습한 16개 시점별 모델이 마지막 실제 관측 특성을 사용하여 가상의 미래 입력을 만들지 않습니다. 예측에 고정 계절 혼합을 적용하지 않습니다.

**장점**

- 시계열 간 비선형 관계와 상호작용을 포착
- 프로젝트에서 직접 설계한 다변량 특성과 잘 맞음
- 브라우저에서 비교적 빠르게 로컬 학습 가능
- 큰 사전 학습 모델을 다운로드할 필요 없음

**한계**

- 예측 품질이 특성 공학에 좌우됨
- 재귀 예측은 먼 단계로 갈수록 오차가 누적될 수 있음
- 푸리에 주기와 계절적 연장은 자동 학습된 달력 구조가 아니라 앱 수준의 가정임

여러 숫자 열 사이의 관계를 활용하는 가벼운 비선형 모델을 로컬에서 학습하려면 XGBoost를 사용하세요.

#### LightGBM

`LightGBM`은 또 다른 로컬 학습 그래디언트 부스팅 결정 트리 모델입니다. 브라우저에서는 LightGBM의 WebAssembly 빌드인 `@wlearn/lightgbm`을 사용하며 XGBoost와 동일한 `buildFeatures()` 출력 및 16단계 예측 전략(재귀 또는 직접)을 의도적으로 재사용합니다.

LightGBM 기본 설정은 회귀, 학습률 0.1, 리프 31개, 최대 깊이 4, subsample 0.8, 부스팅 200회입니다. 고정 계절 혼합 없이 원본 모델 예측을 사용합니다.

특성 파이프라인과 앱 수준 예측 프로토콜을 유지하면서 히스토그램 기반 GBDT 대안을 직접 비교할 때 LightGBM이 적합합니다.

#### VARMA 실험 버전

`VARMA experimental`은 브라우저에서 직접 실행되는 경량 다변량 기준 모델입니다. 이름과 달리 **통계적으로 완전한 최대우도 VARMA 추정기는 아닙니다**. 작은 잔차 보정과 선택적 계절 안정화를 추가한 정규화 VAR 방식에 더 가깝습니다.

구현 절차:

1. 최대 8개 숫자 시계열을 선택하고 표준화합니다.
2. 이전 7개 다변량 벡터를 연결해 지연 특성 벡터를 만듭니다.
3. 다중 출력 Ridge 회귀(`ridge = 1e-2`)로 모든 출력 시계열을 동시에 학습합니다.
4. 최근 잔차로부터 작은 보정값을 추정합니다(`maLag = 1`).
5. 선택적으로 자기회귀 출력과 계절 지연 벡터를 혼합합니다(`seasonalLag = 7`, 기본 `seasonalBlend = 0`).
6. 예측 벡터를 다음 단계에 재귀적으로 입력합니다.

각 단계에서 전체 숫자 벡터를 예측하므로 VARMA는 선택한 대상만이 아니라 모델링한 모든 시계열을 함께 진행합니다.

**장점**

- 단순하며 계산 비용이 낮음
- 여러 숫자 시계열을 공동 모델링
- XGBoost 및 Chronos-2와 비교할 유용한 선형·고전적 기준을 제공
- 별도 모델 다운로드 없이 TypeScript만으로 실행

**한계**

- 숫자 시계열이 두 개 이상이고 사용 가능한 행이 7개보다 많아야 함
- 지연 관계가 대부분 선형이라고 가정
- 잔차 보정과 선택적 계절 혼합은 휴리스틱일 뿐 완전한 이동평균 추정 절차가 아님
- 통계적 VARMA의 참조 구현으로 제시하면 안 됨

여러 시계열이 함께 움직일 때 `VARMA experimental`을 동작이 투명한 다변량 기준 모델로 사용하세요.

#### 사전 학습된 Chronos-2

`Chronos-2 pretrained`는 앞의 로컬 학습 모델과 근본적으로 다릅니다. Chronos-2는 패치 기반 사전 학습 시계열 파운데이션 모델이며 여러 단계의 **분위수 예측**을 직접 생성합니다. 이 저장소는 ONNX Runtime Web으로 `Chronos-2-small INT8`을 실행하므로 모델을 다운로드한 뒤 추론은 로컬에서 이루어집니다.

현재 브라우저 통합 방식:

- 업로드한 데이터셋에서 **학습하지 않음**
- 선택한 대상 시계열만 Chronos의 컨텍스트로 사용
- 숫자 관측 대상값이 최소 16개 필요
- 컨텍스트 관측값을 최대 5,760개 유지
- 입력을 16개 지점씩 패치로 묶고 첫 패치가 불완전하면 왼쪽에 `NaN`을 채움
- ONNX 그래프 내부의 672단계 출력(`42 × 16`)을 실행하고 처음 16단계를 UI에 표시
- 모델의 분위수 출력에서 중앙값(`p50`) 예측과 `p10`, `p90` 불확실성 경계를 표시

Chronos-2 자체는 다변량 및 공변량 기반 예측도 지원하지만 **현재 UI는 아직 이러한 기능을 사용하지 않습니다**. 따라서 현 구현은 다변량 앱 안에서 작동하는 사전 학습 단변량 대상 예측기로 이해해야 합니다.

**장점**

- 제로샷 예측: 데이터셋마다 모델을 새로 학습할 필요가 없음
- 1단계 모델을 재귀 적용하지 않고 전체 예측 구간을 직접 예측
- 예측 분위수를 통해 확률 정보를 제공
- 대규모 사전 학습에서 배운 패턴을 새 시계열에 전이 가능

**한계**

- 처음 사용하기 전에 모델을 다운로드해야 함
- 브라우저는 INT8 ONNX 내보내기 모델을 사용하므로 공식 전체 정밀도 체크포인트와 결과가 다를 수 있음
- 현재 UI는 Chronos-2 호출 시 추가 숫자 열을 무시함
- 브라우저 메모리와 WASM 실행이 모델 크기 및 컨텍스트 길이에 실질적 제약을 줌

이전에 기록한 AirPassengers 128/16 홀드아웃 벤치마크에서는 `Chronos-2-small INT8 ONNX`가 비교 가능한 모델 중 MAE, RMSE, MAPE, sMAPE, MASE 모두 가장 낮았습니다. 측정값과 평가 프로토콜은 아래 벤치마크 절을 참고하세요. **이는 이전 앱 버전의 과거 결과이므로 특성과 예측 전략을 수정한 버전과 비교하려면 평가를 다시 실행해야 합니다.**

### 16단계 예측

기본 예측 구간이 16인 이유는 통합된 Chronos-2 ONNX 모델이 16개 지점 패치를 사용하고 비교를 위해 XGBoost, LightGBM, VARMA API도 같은 구간에 맞췄기 때문입니다.

각 알고리즘은 서로 다른 방식으로 16개 지점을 예측합니다:

- **XGBoost, LightGBM, Ridge**는 하나의 1단계 학습 모델로 재귀 예측하거나 16개의 시점별 모델로 직접 예측할 수 있습니다.
- **VARMA experimental**은 다변량 벡터 전체를 재귀 예측하여 모든 포함 시계열을 함께 진행합니다.
- **Chronos-2**는 직접 확률적 다단계 추론을 수행하고 사전 학습 모델 출력의 처음 16개 미래 위치를 반환합니다.

XGBoost, LightGBM, Ridge에서는 직접 전략이 **기본값**입니다. 재귀 전략은 Settings의 고급 옵션입니다. Settings에서 직접 예측 대상을 원래 값에서 엄격히 양수인 시계열의 누적 로그 수익률로 바꿀 수도 있습니다. 직접 예측은 최대 16개 모델을 학습하는 대신 반복적인 가상 입력 생성을 피합니다. 전략 간 비교는 같은 표본 외 구간에서 해야 하며 어느 쪽도 정확도 우위를 보장하지 않습니다.

---

## 특성 공학(XGBoost / LightGBM)

이 절의 수작업 특성은 XGBoost와 LightGBM 파이프라인 모두에 적용됩니다. VARMA는 정규화된 지연 벡터를 직접 사용하고 Chronos-2는 이 특성 없이 선택한 대상 시계열을 사용합니다.

트리 부스팅 파이프라인은 입력을 작은 다변량 시계열로 취급합니다:

- *날짜·시간 형식* 열 하나(헤더에 `date` 또는 `time` 포함, 대소문자 무관).
- 여러 숫자 열(예: `item_a`, `item_b`, `item_c` 등).
- 숫자 열 하나를 **예측 대상**으로 선택합니다.

내부 특성 생성기는 각 시점`t`에 대한 **풍부한 특성 벡터**와 `t + 1`에 대한 **미래 특성 벡터**를 만듭니다. 모든 특성은 JavaScript/TypeScript를 이용해 **클라이언트 측에서만** 계산합니다.

### 특성에 사용하는 시계열

- `datetimeKey`  
  - 헤더에 `"date"` 또는 `"time"`이 포함된 열을 자동 감지합니다.
  - 시간축을 찾는 데만 사용하며 숫자 특성으로 직접 사용하지 않습니다.
- `targetKey`  
  - 사용자가 예측하도록 선택한 숫자 열입니다.
- `featureKeys`  
  - 날짜·시간 및 대상 열을 제외한 나머지 모든 숫자 열입니다.
  - **외생 시계열**로 취급합니다.

내부에서는 시계열마다 숫자 배열 하나를 가지는 `seriesMap: Record<string, number[]>`를 유지합니다.

### 시계열별 특성(외생 시계열)

각 외생 시계열`x(t)`(`featureKeys`의 각 키)과 각 시점`t`에 대해 다음을 계산합니다:

1. **동시점 값**
   - `x(t)`(시간 인덱스`t`의 값).

2. **지연 특성(이력)**
   - 최대 `MAX_LAG = 3`:
     - `x(t - 1)`
     - `x(t - 2)`
     - `x(t - 3)`
   - 모델이 시계열별 단기 시간 동역학을 학습할 수 있습니다.

3. **1차 차분**
   - `x(t) - x(t - 1)`
   - 절댓값 수준만이 아니라 국소 변화(추세/기울기)를 포착합니다.

4. **이동 평균(국소 평균)**
   - `ROLLING_WINDOW = 7`시점의 이동 창:
     - `mean(x[t - 6 ... t])`(시계열 초반에는 창을 줄임)
   - 국소 추세와 기준 수준을 나타내며 단기 잡음을 평활화합니다.

> 시계열이 창보다 짧으면 코드가 창을 자동으로 줄여 `t`까지 사용 가능한 모든 과거 지점을 활용합니다.

### 대상 시계열의 이력

**대상 시계열**`y(t)` 자체는 현재 값`y(t)`가 해당 단계의 정답 레이블이므로 특성에 포함하지 **않지만**, 이력은 포함합니다:

1. **대상 지연값**
   - `y(t - 1)`
   - `y(t - 2)`
   - `y(t - 3)`

2. **대상 차분**
   - `y(t) - y(t - 1)`

3. **대상 이동 평균**
   - 위와 같은 이동 창:
     - `mean(y[t - 6 ... t])`

이렇게 하면 “다음 값은 최근 값들과 그 국소 추세에 의존한다”와 같은 일반적인 시계열 패턴을 학습할 수 있습니다.

### 시계열 간 상호작용

**서로 다른 시계열 간 관계**를 포착하기 위해 대상까지 포함한 모든 **숫자 시계열 쌍**에 대해 상호작용 특성을 만듭니다:

- `v_i(t)`와 `v_j(t)`는 시점`t`에서 두 시계열의 동시점 값입니다.
- `i < j`인 순서쌍`(i, j)`마다 다음을 계산합니다:

1. **차이(스프레드)**
   - `v_i(t) - v_j(t)`
   - 시계열 간 상대적인 수준 차이를 나타냅니다.

2. **비율**
   - `v_i(t) / v_j(t)`
   - 0으로 나누지 않도록 필요하면 분모에 작은 엡실론을 추가합니다:
     - `denom = |v_j| < 1e-9 ? sign(v_j) * 1e-9 : v_j`
   - 상대적인 규모와 비례 관계를 나타냅니다.

3. **곱**
   - `v_i(t) * v_j(t)`
   - 두 시계열 값이 모두 크거나 작을 때 나타나는 “상호작용 효과”를 표현합니다.

이러한 특성은 개별 시계열 값에만 의존하지 않고 **다중 시계열 구조**를 부스터에 명시적으로 제공합니다.

### 시간 인덱스와 푸리에 특성

시간 자체도 숫자 특성으로 인코딩합니다:

1. **시간 인덱스**
   - 정수 인덱스`t = 0, 1, 2, ...`(행 번호).
   - 부스터가 전체 추세를 간단히 모델링하도록 합니다.

2. **푸리에 특성**(주기 패턴)
   - 두 주기(단위는 “행 개수”):
     - 주기 24(예: 시간별 데이터에서 24시간)
     - 주기 168(예: 7일 × 24시간)
   - 각 주기`P`에 대해 계산합니다:
     - `sin(2πt / P)`
     - `cos(2πt / P)`
   - 트리 모델도 활용할 수 있도록 계절성/주기를 표현하는 표준적인 방법입니다.

각 시점`t`의 최종 특성 벡터:

```text
[ exogenous features (current, lags, diff, rolling mean for each series),
  target-series history (lags, diff, rolling mean),
  cross-series interactions (spread, ratio, product),
  time index, sin/cos(2πt/24), sin/cos(2πt/168) ]
```

### 미래 단계 특성 벡터(lastFeatureRow)
같은 특성 생성 방식으로 t + 1(한 단계 앞선 예측)의 벡터를 생성합니다:
- 개념적으로 다음 시간 인덱스는 t_next = n이며 n은 관측 행 수입니다.
- t_next에서 각 시계열의 “현재” 값에는 마지막 관측값(인덱스 n - 1)을 재사용합니다.
- 지연값과 이동 평균은 관측 데이터의 마지막 MAX_LAG / ROLLING_WINDOW 단계로 계산합니다.
- 시간 인코딩은 t_next를 시간 인덱스로 사용합니다.
- 이렇게 마지막 관측까지의 전체 이력으로 다음 시점을 나타내는 단일 벡터 lastFeatureRow를 만듭니다.

따라서 buildFeatures 함수는 다음을 반환합니다:
```text
{
  X: number[][];        // feature matrix for all observed steps
  y: number[];          // target series values for those steps
  lastFeatureRow: number[]; // feature vector representing t + 1
}
```

---

<!-- FRONTEND_STOCK_EVALUATION:START -->
## 주식 결과 — 브라우저 벤치마크(2026-10-09까지)

| 업종 | 모델 | 이전 16단계 MAPE ↓ | 최근 16단계 MAPE ↓ | 롤링 1단계 MAPE ↓ |
| --- | --- | ---: | ---: | ---: |
| 자동차 제조사 | xgboost | 7.55% | 4.08% | 1.55% |
| 자동차 제조사 | lightgbm | 2.58% | 4.74% | 1.71% |
| 자동차 제조사 | varma | 11.82% | 3.67% | 1.81% |
| 자동차 제조사 | chronos | 1.86% | 3.20% | 1.07% |
| 자동차 제조사 | ridge | 2.69% | 6.78% | 1.47% |
| 자동차 제조사 | last_close | 2.26% | 2.70% | 1.09% |
| 은행 | xgboost | 3.56% | 2.27% | 1.66% |
| 은행 | lightgbm | 3.13% | 1.89% | 1.60% |
| 은행 | varma | 4.21% | 12.66% | 1.85% |
| 은행 | chronos | 3.68% | 4.60% | 1.78% |
| 은행 | ridge | 4.99% | 1.91% | 1.66% |
| 은행 | last_close | 4.06% | 2.84% | 1.46% |
| 전자 | xgboost | 3.67% | 5.16% | 1.40% |
| 전자 | lightgbm | 3.58% | 1.09% | 1.38% |
| 전자 | varma | 5.13% | 21.04% | 1.81% |
| 전자 | chronos | 3.11% | 3.09% | 1.36% |
| 전자 | ridge | 7.11% | 5.62% | 1.72% |
| 전자 | last_close | 3.04% | 1.56% | 1.30% |
| 통신 | xgboost | 5.23% | 1.44% | 1.28% |
| 통신 | lightgbm | 5.96% | 1.47% | 1.47% |
| 통신 | varma | 13.19% | 14.50% | 1.41% |
| 통신 | chronos | 5.43% | 3.09% | 1.08% |
| 통신 | ridge | 7.14% | 1.65% | 1.13% |
| 통신 | last_close | 3.44% | 2.83% | 0.88% |
| 종합상사 | xgboost | 3.08% | 4.58% | 1.41% |
| 종합상사 | lightgbm | 2.78% | 4.40% | 1.48% |
| 종합상사 | varma | 9.75% | 1.05% | 2.36% |
| 종합상사 | chronos | 3.14% | 3.45% | 1.27% |
| 종합상사 | ridge | 2.72% | 7.36% | 1.69% |
| 종합상사 | last_close | 2.46% | 4.63% | 1.32% |
### 직접 16단계 비교(5개 업종, 2개 홀드아웃; 2026-10-09까지)

| 모델 | 재귀 가격 MAPE ↓ | 직접 가격 MAPE ↓ | 직접 로그 수익률 MAPE ↓ | 마지막 종가 MAPE ↓ |
| --- | ---: | ---: | ---: | ---: |
| xgboost | 4.06% | 3.46% | 4.59% | 2.98% |
| lightgbm | 3.16% | 3.75% | 4.49% | 2.98% |
| ridge | 4.80% | 4.31% | 4.01% | 2.98% |
<!-- FRONTEND_STOCK_EVALUATION:END -->

## 주식 결과 — 별도 엔진 벤치마크

<!-- STOCK_MULTIVARIATE:START -->
| 업종 | 모델 | 장기 단변량 MAPE ↓ | 장기 다변량 MAPE ↓ | 최근 단변량 MAPE ↓ | 최근 다변량 MAPE ↓ |
| --- | --- | ---: | ---: | ---: | ---: |
| 자동차 제조사 | ridge | 1.48% | 1.52% | 1.07% | 1.13% |
| 자동차 제조사 | xgboost | 1.67% | 1.64% | 1.41% | 1.34% |
| 자동차 제조사 | lightgbm | 1.60% | 1.59% | 1.33% | 1.34% |
| 은행 | ridge | 1.63% | 1.66% | 1.47% | 1.52% |
| 은행 | xgboost | 1.77% | 1.80% | 1.66% | 1.61% |
| 은행 | lightgbm | 1.76% | 1.77% | 1.49% | 1.55% |
| 전자 | ridge | 1.69% | 1.70% | 1.27% | 1.35% |
| 전자 | xgboost | 1.83% | 1.91% | 1.45% | 1.50% |
| 전자 | lightgbm | 1.79% | 1.80% | 1.34% | 1.41% |
| 통신 | ridge | 0.81% | 0.82% | 0.90% | 0.87% |
| 통신 | xgboost | 0.85% | 0.87% | 1.04% | 1.01% |
| 통신 | lightgbm | 0.83% | 0.85% | 0.97% | 0.91% |
| 종합상사 | ridge | 1.63% | 1.63% | 1.39% | 1.41% |
| 종합상사 | xgboost | 1.77% | 1.69% | 1.50% | 1.53% |
| 종합상사 | lightgbm | 1.69% | 1.66% | 1.34% | 1.43% |
<!-- STOCK_MULTIVARIATE:END -->


---

## AirPassengers 벤치마크

공정한 16단계 평가 프로토콜과 논문 비교 규칙은 [`BENCHMARKS.md`](./BENCHMARKS.md)를 참고하세요.

저장소에는 고전적인 월별 시계열 데이터인 AirPassengers와 모델 동작을 검사하는 벤치마크 명령이 포함됩니다.

Docker Compose로 벤치마크를 실행합니다:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark
```

JSON 출력:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm xgboost --json'
```

계절성 나이브 기준 모델:

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm seasonal-naive --json'
```


### 16단계 홀드아웃 벤치마크

- 학습: AirPassengers의 처음 128개 관측값
- 홀드아웃: 그다음 16개 관측값
- 예측하는 동안 홀드아웃의 실제 대상값을 다시 입력하지 않음
- 공통 점 예측 지표: MAE, RMSE, MAPE, sMAPE, MASE

다음 명령으로 벤치마크를 재현합니다:

```bash
docker compose -f docker-compose.test.yml run --rm \
  air_passengers_fair_benchmark \
  sh -lc '
    npm --prefix frontend/app ci &&
    node scripts/benchmark-air-passengers-fair.mjs --markdown
  '
```

LightGBM만 사용한 AirPassengers 평가:

```bash
docker compose -f docker-compose.test.yml run --rm \
  lightgbm_air_passengers_benchmark
```

같은 128/16 프로토콜에 `--algorithm lightgbm`을 사용하므로 다른 AirPassengers 결과 행과 직접 비교할 수 있습니다.

AirPassengers는 단변량인 반면 이 저장소의 실험적 VARMA 구현에는 숫자 시계열이 두 개 이상 필요하므로 VARMA는 N/A로 표시합니다. 다변량 및 논문 비교 프로토콜은 [`BENCHMARKS.md`](./BENCHMARKS.md)를 참고하세요.

# 라이선스
- Apache License 2.0
