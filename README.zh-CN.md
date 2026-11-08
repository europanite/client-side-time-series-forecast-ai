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



## 40秒演示

[![▶ 观看40秒演示](https://img.youtube.com/vi/AUFat22QJHE/hqdefault.jpg)](https://youtu.be/AUFat22QJHE)

## 在线体验

[▶ 打开浏览器端预测应用](https://europanite.github.io/client-side-time-series-forecast-ai/)

这是一款完全在浏览器中运行的客户端时间序列预测AI工具。无需付费，所有计算都在本地浏览器内完成，使用安全放心。

支持选择[XGBoost](https://xgboost.readthedocs.io/en/stable/)、XGBoost Bagging ×2、[LightGBM](https://lightgbm.readthedocs.io/)、LightGBM Bagging ×2、实验性VARMA类模型、[Chronos-2](https://github.com/amazon-science/chronos-forecasting)、[TimesFM 2.5](https://github.com/google-research/timesfm)和Ridge回归。

---

## 概述

本工具可在Web浏览器内完成多变量时间序列预测。无需安装、注册或付费，打开网页即可使用。它可以帮助小型企业预测次日订单量。

- 在浏览器中加载CSV/XLSX时间序列数据集
- 选择任意数值列作为预测目标
- 在XGBoost、XGBoost Bagging ×2、LightGBM、LightGBM Bagging ×2、实验性VARMA类模型、预训练的Chronos-2和TimesFM 2.5以及Ridge回归之间选择
- 在浏览器中本地训练所选模型
- 预测后续16个数据点并添加到图表中

所有操作都在**浏览器内部**完成。不使用后端API，数据也不会离开你的设备。

---

## 演示

1. 打开GitHub Pages演示：  
   https://europanite.github.io/client-side-time-series-forecast-ai/

2. 上传示例文件，例如[`data/sample_data.csv`](./data/sample_data.csv)（股票价格）或[`data/sample_data.xlsx`](./data/sample_data.xlsx)（合成多变量样本）。
3. 应用将：
   - 检测**日期时间列**
   - 列出可用的数值列
4. 选择一个数值列作为**预测目标**。
5. 选择**预测模型**。`XGBoost`为默认选项；`XGBoost Bagging ×2`取两个Bootstrap XGBoost回归器的平均预测；`LightGBM`是另一种本地训练的GBDT；`LightGBM Bagging ×2`平均两个Bootstrap LightGBM回归器的结果；`VARMA experimental`是轻量级多变量基线；`Chronos-2 pretrained`是零样本基础模型；`TimesFM 2.5`是可选的零样本ONNX模型；`Ridge`是本地训练的线性基线。
6. 使用XGBoost、XGBoost Bagging ×2、LightGBM、LightGBM Bagging ×2、VARMA或Ridge时，先点击**Train**。Chronos-2和TimesFM 2.5已经预训练，无需本地训练。然后点击**Forecast +16**预测接下来的16个数据点。
7. 查看图表，对比观测序列与预测曲线。

---

# 🚀 快速开始

## npm

### 1. 前提条件
- Node.js

### 2. 构建服务：

```bash
cd frontend/app
npm ci
npm run dev
```

### 3. 测试：

```bash
npm test -- --ci --runInBand --coverage --verbose
npx tsc --noEmit
npm run build
```

## Docker Compose

### 1. 前提条件
- [Docker Compose](https://docs.docker.com/compose/)

### 2. 构建服务：

```bash
docker compose up --build
```

### 3. 测试：

```bash
docker compose \
-f docker-compose.test.yml up \
--build --exit-code-from \
frontend_test
```

---

## 数据结构

<pre>
datetime,item_a,item_b,item_c,...
2025-01-01 00:00:00+09:00,10,20,31,...
2025-01-02 00:00:00+09:00,12,19,31,...
2025-01-03 00:00:00+09:00,14,18,33,...
 ...
</pre>

### 要求：

##### 一个日期时间列
列标题须包含“date”或“time”（不区分大小写）。
该列用作时间轴，但不会直接转换为数值特征。

##### 一个或多个数值列
这些列用于预测目标和/或外生特征。
应用支持六种在本地拟合的预测模式：

- **XGBoost**：选择一个数值列作为目标，其他数值列作为补充信号。
- **XGBoost Bagging ×2**：使用相同监督特征的两组独立Bootstrap样本训练两个XGBoost模型，再对输出取平均。直接16步模式拟合32个Boosting模型。
- **LightGBM Bagging ×2**：采用与XGBoost Bagging ×2相同的Bootstrap采样方法训练两个LightGBM模型，再平均预测结果。直接16步模式拟合32个Boosting模型。
- **LightGBM**：使用与XGBoost相同的目标和构造的多变量特征，但拟合LightGBM回归器。
- **VARMA experimental**：联合建模全部数值列，并输出所选目标列的预测结果。
- **Ridge**：在本地拟合正则化线性回归，使用与XGBoost、LightGBM相同的构造特征和递归预测路径。

---

<!-- ALL_MODEL_EVALUATION:START -->
### 全部八种模型——浏览器内相同条件的留出集评估（截至2026-10-30）

每个行业使用过去256个交易日的收盘价预测相同的后续16个交易日。MAPE越低越好。五种监督学习模型采用**Direct price**（浏览器默认设置），VARMA采用联合递归预测；Chronos-2和TimesFM 2.5仅使用所选目标序列。所有模型都在Chromium中运行，没有在Node中重新实现。

| 模型 | 汽车制造商 MAPE ↓ | 银行 MAPE ↓ | 电子 MAPE ↓ | 电信 MAPE ↓ | 综合商社 MAPE ↓ | 平均 MAPE ↓ | 平均 sMAPE ↓ |
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

协议：`real-browser-recent-16step-all-eight-v1`；输入SHA256：`bd5150223ed5…`；源码SHA256：`e2e34fbc83b1…`。
分数基于历史评估快照，并非对实时预测的审计结果。
[评估方法与复现步骤](docs/ALL_MODEL_EVALUATION.md)。完整MAE/RMSE、预测值及耗时：[`reports/stocks/all-models.json`](reports/stocks/all-models.json)。
<!-- ALL_MODEL_EVALUATION:END -->

## 预测方法

项目提供八种预测算法，它们采用有意不同的假设：

| 模型 | 学习方式 | 是否使用多个输入序列？ | 是否本地训练？ | 预测方式 |
| --- | --- | --- | --- | --- |
| XGBoost | 基于构造的时间序列特征进行梯度提升决策树回归 | 是 | 是 | 递归预测或直接16个预测期 |
| XGBoost Bagging ×2 | 对两个独立Bootstrap训练的XGBoost回归器取预测均值 | 是 | 是（每个预测期2个） | 递归预测或直接16个预测期 |
| LightGBM | 基于直方图的梯度提升决策树回归，使用与XGBoost相同的特征 | 是 | 是 | 递归预测或直接16个预测期 |
| LightGBM Bagging ×2 | 对两个独立Bootstrap训练的LightGBM回归器取预测均值 | 是 | 是（每个预测期2个） | 递归预测或直接16个预测期 |
| VARMA experimental | 带Ridge正则化和残差修正的线性多输出自回归 | 是，联合建模 | 是 | 联合递归多输出预测 |
| Chronos-2-small INT8 ONNX | 基于分块的预训练时间序列基础模型 | 当前界面仅使用所选目标 | 否 | 直接概率多步预测 |
| TimesFM 2.5 ONNX | 预训练时间序列基础模型（可选大文件下载） | 仅所选目标 | 否 | 直接概率多步预测 |
| Ridge (linear baseline) | 对与树模型共享的构造特征执行L2正则化线性回归 | 是 | 是 | 递归预测或直接16个预测期 |

这八种模型并不是同一算法的八个实现。XGBoost、LightGBM及其Bagging变体将时间序列转换为相同的表格监督学习问题。VARMA联合建模多个序列的滞后向量；Ridge基于相同监督特征提供线性参照；Chronos-2和TimesFM 2.5使用预训练神经预测模型，不会在上传数据上拟合新参数。

对于XGBoost、XGBoost Bagging ×2、LightGBM、LightGBM Bagging ×2和Ridge，**默认策略是直接预测16步**。每个未来步单独拟合，避免人为构造其他序列的未来输入。要切换为递归预测，请打开**Settings → Advanced forecasting → Forecast strategy**。递归策略使用一个模型迭代预测全部16步。VARMA采用多序列联合自回归；Chronos-2和TimesFM 2.5使用预训练模型直接预测。监督学习模型的预测不应用固定季节性混合。参见[预测策略](docs/FORECAST_STRATEGIES.md)。

### 模型选择

#### XGBoost

`XGBoost`是默认的本地训练模型。XGBoost是一种梯度提升决策树算法：依次添加多棵决策树，每棵新树都减少此前集成模型的残余误差。时间序列不会直接传入XGBoost；项目先将每个时间步转换为特征向量，再训练XGBoost回归器。

浏览器实现使用：

- 目标序列和外生序列最多`MAX_LAG = 3`阶滞后
- 一阶差分
- `ROLLING_WINDOW = 7`的移动平均
- 数值序列间的差值、比值和乘积交互特征
- 时间索引
- 周期为24和168的傅里叶特征
- 深度4、学习率0.1、子采样0.8、200次提升迭代的`gbtree`

在**recursive**模式下，模型每次预测一步，并将预测结果作为下一步的历史值；其他未知序列的未来值使用启发式方法延续。在**direct**模式下，16个独立拟合的预测期模型使用最后实际观测到的特征，无需虚构其他序列的未来值。预测结果不采用固定的季节性混合。

**优点**

- 捕捉序列间的非线性关系和交互作用
- 适合项目手工设计的多变量特征
- 在浏览器中本地训练，速度相对较快
- 无需下载大型预训练模型

**局限性**

- 预测质量取决于特征工程方案
- 递归预测在较远的步骤可能累积误差
- 傅里叶周期和季节性延续属于应用层假设，并非自动学到的日历结构

如果需要一个能够利用多个数值列之间关系、轻量且可在本地训练的非线性模型，可以选用XGBoost。

#### LightGBM

`LightGBM`是另一种本地训练的梯度提升决策树模型。浏览器使用LightGBM的WebAssembly构建`@wlearn/lightgbm`，并有意复用XGBoost的`buildFeatures()`输出和16步预测策略（递归或直接）。

LightGBM默认采用回归、学习率0.1、31个叶节点、最大深度4、子采样0.8和200轮提升。不做固定季节性混合，直接使用模型原始预测。

如果希望保持特征流水线和应用级预测协议不变，同时比较基于直方图的GBDT替代方案，可以选择LightGBM。

#### VARMA实验版

`VARMA experimental`是在浏览器中原生运行的轻量级多变量基线。尽管名称如此，本实现**并非完整的统计学最大似然VARMA估计器**。它更接近带有少量残差修正和可选季节性稳定机制的正则化VAR模型。

实现步骤：

1. 选择最多8个数值序列并进行标准化；
2. 将前7个多变量向量拼接成滞后特征向量；
3. 使用多输出Ridge回归同时拟合全部输出序列（`ridge = 1e-2`）；
4. 根据近期残差估计小幅修正（`maLag = 1`）；
5. 可选择将自回归输出与季节性滞后向量混合（`seasonalLag = 7`，默认`seasonalBlend = 0`）；
6. 将预测向量递归反馈给下一预测步。

由于每一步都会预测完整数值向量，VARMA会同时推进所有建模序列，而不只是所选目标。

**优点**

- 简单，计算开销低
- 联合建模多个数值序列
- 可作为与XGBoost和Chronos-2比较的有用线性/经典方法基线
- 完全使用TypeScript运行，无需额外下载模型

**局限性**

- 至少需要两个数值序列和超过7行有效数据
- 假设滞后关系主要是线性的
- 残差修正和可选季节性混合是启发式方法，不是完整的移动平均估计过程
- 不应将其称为统计VARMA的参考实现

当多个序列共同变化时，`VARMA experimental`主要适合作为透明、易理解的多变量基线。

#### 预训练Chronos-2

`Chronos-2 pretrained`与上述本地拟合模型有根本区别。Chronos-2是基于分块的预训练时间序列基础模型，直接输出多步**分位数预测**。本仓库通过ONNX Runtime Web运行`Chronos-2-small INT8` ONNX模型，因此模型下载后推理在本地完成。

当前浏览器集成方式：

- **不会**在上传的数据集上训练；
- 仅使用所选目标序列作为Chronos上下文；
- 目标序列至少需要16个数值观测点；
- 最多保留5,760个上下文观测点；
- 将输入分成每块16点，首块不足时在左侧用`NaN`填充；
- 运行ONNX图内部的672步输出（`42 × 16`），向界面展示前16步；
- 读取模型分位数输出，展示中位数（`p50`）预测以及`p10`和`p90`不确定性边界。

Chronos-2本身支持更丰富的多变量及结合协变量的预测，但**当前UI尚未利用这些能力**。因此，现阶段的实现应理解为多变量应用中的预训练单变量目标预测器。

**优点**

- 零样本预测：无需针对每个数据集拟合模型
- 直接预测整个未来区间，而非递归拟合一步模型
- 通过预测分位数提供概率信息
- 能将大规模预训练中学到的模式迁移到新序列

**局限性**

- 首次使用前需要下载模型
- 浏览器使用INT8 ONNX导出版本，结果不一定与官方全精度检查点完全相同
- 当前UI调用Chronos-2时忽略其他数值列
- 浏览器内存和WASM执行对模型大小、上下文长度有实际限制

在此前记录的AirPassengers 128/16留出集基准测试中，`Chronos-2-small INT8 ONNX`在可比较模型中取得最低的MAE、RMSE、MAPE、sMAPE和MASE。具体数值与评估流程见下文。**这些是早期应用版本的历史结果，必须重新运行评估后，才能与修订后的特征和预测策略进行比较。**

### 16步预测

应用默认预测16步，是因为集成的Chronos-2 ONNX模型使用16点分块；为了便于比较，XGBoost、LightGBM和VARMA的API也采用相同的预测区间。

各算法生成这16点的方式不同：

- **XGBoost、LightGBM和Ridge**既可以用一个拟合好的一步模型递归预测，也可以用16个针对不同预测期的模型直接预测。
- **VARMA experimental**递归预测完整的多变量向量，因此所有输入序列同步推进。
- **Chronos-2**执行直接的概率多步推理，从预训练模型输出中返回未来前16个位置。

对于XGBoost、LightGBM和Ridge，直接策略是**默认选项**。递归策略位于Settings的高级选项中。在Settings中，还可将直接预测目标从默认的原始值改为严格正值序列的累积对数收益率。直接预测避免反复构造未来输入，但最多需要拟合16个模型。不同策略必须在相同的样本外时间窗口中比较，任何一种都不能保证精度更高。

---

## 特征工程（XGBoost / LightGBM）

本节手工设计的特征适用于XGBoost和LightGBM两条流水线。VARMA直接使用标准化的滞后向量，而Chronos-2直接处理所选目标序列，不使用这些特征。

树提升模型将输入视为一个较小的多变量时间序列：

- 一个*日期时间列*（标题包含`date`或`time`，不区分大小写）。
- 多个数值列（例如`item_a`、`item_b`、`item_c`等）。
- 从数值列中选择一个作为**预测目标**。

内部特征构造器为每个时间步`t`生成**丰富的特征向量**，并为`t + 1`生成**未来特征向量**。所有特征都由JavaScript/TypeScript**纯客户端计算**。

### 用于特征构造的序列

- `datetimeKey`  
  - 自动检测标题中包含`"date"`或`"time"`的列。
  - 仅用于确定时间轴，不直接作为数值特征。
- `targetKey`  
  - 用户选择用于预测的数值列。
- `featureKeys`  
  - 所有其他数值列（不包括日期时间列和目标列）。
  - 作为**外生序列**处理。

内部使用`seriesMap: Record<string, number[]>`保存各序列对应的数值数组。

### 单序列特征（外生序列）

对于每个外生序列`x(t)`（`featureKeys`中的每个键）及每个时间步`t`，计算：

1. **同期数值**
   - `x(t)`（时间索引`t`处的数值）。

2. **滞后特征（历史）**
   - 最多到`MAX_LAG = 3`：
     - `x(t - 1)`
     - `x(t - 2)`
     - `x(t - 3)`
   - 使模型能够学习每个序列的短期时间动态。

3. **一阶差分**
   - `x(t) - x(t - 1)`
   - 捕捉局部变化（趋势/斜率），而不只是绝对水平。

4. **移动平均（局部均值）**
   - 使用`ROLLING_WINDOW = 7`个时间步的窗口：
     - `mean(x[t - 6 ... t])`（序列开头处缩短窗口）
   - 表示局部趋势或基准水平，同时平滑短期噪声。

> 如果序列短于窗口，代码会自动缩小窗口，以使用截至`t`可用的所有历史点。

### 目标序列历史

对于**目标序列**`y(t)`自身，**不会**将当前值`y(t)`作为特征（因为它是该步的标签），但会使用历史信息：

1. **目标滞后值**
   - `y(t - 1)`
   - `y(t - 2)`
   - `y(t - 3)`

2. **目标差分**
   - `y(t) - y(t - 1)`

3. **目标移动平均**
   - 使用上述相同的移动窗口：
     - `mean(y[t - 6 ... t])`

这样模型就能学习“下一个值取决于最近几个值及其局部趋势”等时间序列预测中的常见模式。

### 跨序列交互

为捕捉**不同序列之间的关系**，我们为包括目标在内的每**一对数值序列**构建交互特征：

- 设`v_i(t)`和`v_j(t)`为两个序列在时间`t`的同期数值。
- 对每个满足`i < j`的有序对`(i, j)`计算：

1. **差值（Spread）**
   - `v_i(t) - v_j(t)`
   - 表示序列之间相对水平的差异。

2. **比值**
   - `v_i(t) / v_j(t)`
   - 为避免除以零，必要时在分母中加入很小的epsilon：
     - `denom = |v_j| < 1e-9 ? sign(v_j) * 1e-9 : v_j`
   - 表示相对尺度与比例关系。

3. **乘积**
   - `v_i(t) * v_j(t)`
   - 表示两个序列同时处于较高或较低水平时的“交互效应”。

这些跨序列特征向提升模型显式提供**多序列结构**，而不是只依赖各序列的独立数值。

### 时间索引与傅里叶特征

我们还将时间本身编码为数值特征：

1. **时间索引**
   - 整数索引`t = 0, 1, 2, ...`（行索引）。
   - 使提升模型能够简单地学习整体趋势。

2. **傅里叶特征**（周期模式）
   - 两种周期（单位为“行数”）：
     - 周期24（例如小时数据中的24小时）
     - 周期168（例如7天×24小时）
   - 对每个周期`P`计算：
     - `sin(2πt / P)`
     - `cos(2πt / P)`
   - 这是一种将季节性/周期性编码为树模型也可利用的特征的常用方法。

每个时间步`t`最终使用的特征向量如下：

```text
[ exogenous features (current, lags, diff, rolling mean for each series),
  target-series history (lags, diff, rolling mean),
  cross-series interactions (spread, ratio, product),
  time index, sin/cos(2πt/24), sin/cos(2πt/168) ]
```

### 未来时间步特征向量（lastFeatureRow）
同样的特征构造逻辑也用于生成t + 1（提前一步预测）的特征向量：
- 概念上，下一个时间索引为t_next = n，其中n是已观测行数。
- 对于t_next时各序列的“当前”值，复用最后一个观测值（索引n - 1）。
- 滞后值和移动平均由已观测数据最后MAX_LAG / ROLLING_WINDOW步计算。
- 时间编码使用t_next作为索引。
- 从而得到单个特征向量lastFeatureRow，表示基于截至最后观测值的全部历史信息的下一时间步。

因此，buildFeatures函数返回：
```text
{
  X: number[][];        // feature matrix for all observed steps
  y: number[];          // target series values for those steps
  lastFeatureRow: number[]; // feature vector representing t + 1
}
```

---

<!-- FRONTEND_STOCK_EVALUATION:START -->
## 股票结果——浏览器基准测试（截至2026-10-09）

| 行业 | 模型 | 之前16步 MAPE ↓ | 最近16步 MAPE ↓ | 滚动1步 MAPE ↓ |
| --- | --- | ---: | ---: | ---: |
| 汽车制造商 | xgboost | 7.55% | 4.08% | 1.55% |
| 汽车制造商 | lightgbm | 2.58% | 4.74% | 1.71% |
| 汽车制造商 | varma | 11.82% | 3.67% | 1.81% |
| 汽车制造商 | chronos | 1.86% | 3.20% | 1.07% |
| 汽车制造商 | ridge | 2.69% | 6.78% | 1.47% |
| 汽车制造商 | last_close | 2.26% | 2.70% | 1.09% |
| 银行 | xgboost | 3.56% | 2.27% | 1.66% |
| 银行 | lightgbm | 3.13% | 1.89% | 1.60% |
| 银行 | varma | 4.21% | 12.66% | 1.85% |
| 银行 | chronos | 3.68% | 4.60% | 1.78% |
| 银行 | ridge | 4.99% | 1.91% | 1.66% |
| 银行 | last_close | 4.06% | 2.84% | 1.46% |
| 电子 | xgboost | 3.67% | 5.16% | 1.40% |
| 电子 | lightgbm | 3.58% | 1.09% | 1.38% |
| 电子 | varma | 5.13% | 21.04% | 1.81% |
| 电子 | chronos | 3.11% | 3.09% | 1.36% |
| 电子 | ridge | 7.11% | 5.62% | 1.72% |
| 电子 | last_close | 3.04% | 1.56% | 1.30% |
| 电信 | xgboost | 5.23% | 1.44% | 1.28% |
| 电信 | lightgbm | 5.96% | 1.47% | 1.47% |
| 电信 | varma | 13.19% | 14.50% | 1.41% |
| 电信 | chronos | 5.43% | 3.09% | 1.08% |
| 电信 | ridge | 7.14% | 1.65% | 1.13% |
| 电信 | last_close | 3.44% | 2.83% | 0.88% |
| 综合商社 | xgboost | 3.08% | 4.58% | 1.41% |
| 综合商社 | lightgbm | 2.78% | 4.40% | 1.48% |
| 综合商社 | varma | 9.75% | 1.05% | 2.36% |
| 综合商社 | chronos | 3.14% | 3.45% | 1.27% |
| 综合商社 | ridge | 2.72% | 7.36% | 1.69% |
| 综合商社 | last_close | 2.46% | 4.63% | 1.32% |
### 直接16步比较（5个行业、2个留出集；截至2026-10-09）

| 模型 | 递归价格 MAPE ↓ | 直接价格 MAPE ↓ | 直接对数收益率 MAPE ↓ | 最后收盘价 MAPE ↓ |
| --- | ---: | ---: | ---: | ---: |
| xgboost | 4.06% | 3.46% | 4.59% | 2.98% |
| lightgbm | 3.16% | 3.75% | 4.49% | 2.98% |
| ridge | 4.80% | 4.31% | 4.01% | 2.98% |
<!-- FRONTEND_STOCK_EVALUATION:END -->

## 股票结果——独立引擎基准测试

<!-- STOCK_MULTIVARIATE:START -->
| 行业 | 模型 | 长期单变量 MAPE ↓ | 长期多变量 MAPE ↓ | 近期单变量 MAPE ↓ | 近期多变量 MAPE ↓ |
| --- | --- | ---: | ---: | ---: | ---: |
| 汽车制造商 | ridge | 1.48% | 1.52% | 1.07% | 1.13% |
| 汽车制造商 | xgboost | 1.67% | 1.64% | 1.41% | 1.34% |
| 汽车制造商 | lightgbm | 1.60% | 1.59% | 1.33% | 1.34% |
| 银行 | ridge | 1.63% | 1.66% | 1.47% | 1.52% |
| 银行 | xgboost | 1.77% | 1.80% | 1.66% | 1.61% |
| 银行 | lightgbm | 1.76% | 1.77% | 1.49% | 1.55% |
| 电子 | ridge | 1.69% | 1.70% | 1.27% | 1.35% |
| 电子 | xgboost | 1.83% | 1.91% | 1.45% | 1.50% |
| 电子 | lightgbm | 1.79% | 1.80% | 1.34% | 1.41% |
| 电信 | ridge | 0.81% | 0.82% | 0.90% | 0.87% |
| 电信 | xgboost | 0.85% | 0.87% | 1.04% | 1.01% |
| 电信 | lightgbm | 0.83% | 0.85% | 0.97% | 0.91% |
| 综合商社 | ridge | 1.63% | 1.63% | 1.39% | 1.41% |
| 综合商社 | xgboost | 1.77% | 1.69% | 1.50% | 1.53% |
| 综合商社 | lightgbm | 1.69% | 1.66% | 1.34% | 1.43% |
<!-- STOCK_MULTIVARIATE:END -->


---

## AirPassengers基准测试

有关公平的16步测试协议以及与论文比较的规则，请参阅[`BENCHMARKS.md`](./BENCHMARKS.md)。

仓库包含AirPassengers数据集和用于检验模型在经典月度时间序列上的表现的基准测试命令。

使用Docker Compose运行基准测试：

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark
```

JSON输出：

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm xgboost --json'
```

季节性朴素预测基线：

```bash
docker compose -f docker-compose.test.yml run --rm air_passengers_fair_benchmark \
  sh -lc 'npm --prefix frontend/app ci && node scripts/benchmark-air-passengers-fair.mjs --algorithm seasonal-naive --json'
```


### 16步留出集基准测试

- 训练：AirPassengers前128个观测点
- 留出集：接下来的16个观测点
- 预测过程中不反馈留出集真实目标值
- 通用点预测指标：MAE、RMSE、MAPE、sMAPE和MASE

使用以下命令复现基准测试：

```bash
docker compose -f docker-compose.test.yml run --rm \
  air_passengers_fair_benchmark \
  sh -lc '
    npm --prefix frontend/app ci &&
    node scripts/benchmark-air-passengers-fair.mjs --markdown
  '
```

仅使用LightGBM评估AirPassengers：

```bash
docker compose -f docker-compose.test.yml run --rm \
  lightgbm_air_passengers_benchmark
```

该命令使用`--algorithm lightgbm`运行同样的128/16协议，因此结果可以直接与其他AirPassengers结果行比较。

VARMA标为N/A，因为AirPassengers是单变量数据，而本仓库的实验性VARMA实现至少需要两个数值序列。有关多变量和论文对比协议，请参阅[`BENCHMARKS.md`](./BENCHMARKS.md)。

# 许可证
- Apache License 2.0
