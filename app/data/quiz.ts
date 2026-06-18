// ===== 型定義 =====
export type StatKey = 'STR' | 'INT' | 'VIT' | 'AGI' | 'LUK' | 'CHA'

export interface Stats {
  STR: number
  INT: number
  VIT: number
  AGI: number
  LUK: number
  CHA: number
}

export interface QuizOption {
  label: string
  scores: Partial<Stats>
}

export interface QuizQuestion {
  id: number
  text: string
  emoji: string
  options: QuizOption[]
}

export interface RPGResult {
  stats: Stats
  title: string        // 二つ名
  equipment: string   // 装備名
  weakness: string    // 弱点
  comment: string     // 一言コメント
  jobClass: string    // 職業クラス
  level: number
}

// ===== 8問の質問 =====
export const questions: QuizQuestion[] = [
  {
    id: 1,
    text: '普段の仕事・活動は？',
    emoji: '⚔️',
    options: [
      {
        label: 'デスクワーク中心（PCとにらめっこ）',
        scores: { INT: 4, VIT: -1 },
      },
      {
        label: '体を使う仕事（立ち仕事・肉体労働）',
        scores: { STR: 4, VIT: 3 },
      },
      {
        label: '人と接する仕事（接客・営業・教育）',
        scores: { CHA: 4, AGI: 2 },
      },
      {
        label: '現在無職・就活中・自由人',
        scores: { LUK: 3, INT: 1, VIT: -1 },
      },
    ],
  },
  {
    id: 2,
    text: '休日の趣味はどれに近い？',
    emoji: '🎮',
    options: [
      {
        label: 'ゲーム・アニメ・動画を永遠に見る',
        scores: { INT: 3, LUK: 1, STR: -2 },
      },
      {
        label: 'スポーツ・筋トレ・アウトドア',
        scores: { STR: 4, VIT: 3, AGI: 3 },
      },
      {
        label: '料理・手芸・DIY・クリエイティブ系',
        scores: { CHA: 3, VIT: 2, INT: 1 },
      },
      {
        label: '読書・資格勉強・自己啓発',
        scores: { INT: 4, CHA: 2, AGI: 1 },
      },
    ],
  },
  {
    id: 3,
    text: '平均睡眠時間は？',
    emoji: '🌙',
    options: [
      {
        label: '3〜5時間（俺が眠るなんてもったいない）',
        scores: { INT: 2, VIT: -4, AGI: -1 },
      },
      {
        label: '6〜7時間（標準的）',
        scores: { VIT: 2, AGI: 2, INT: 1 },
      },
      {
        label: '8〜9時間（健康優先派）',
        scores: { VIT: 4, STR: 2, LUK: 1 },
      },
      {
        label: '10時間以上（二度寝が趣味）',
        scores: { VIT: 1, AGI: -3, LUK: 2, INT: -1 },
      },
    ],
  },
  {
    id: 4,
    text: 'スマホ・SNSを使う時間は1日どのくらい？',
    emoji: '📱',
    options: [
      {
        label: '1時間未満（デジタルデトックス民）',
        scores: { INT: 3, VIT: 2, LUK: 1 },
      },
      {
        label: '1〜3時間（ほどほど派）',
        scores: { CHA: 2, AGI: 2, INT: 1 },
      },
      {
        label: '3〜6時間（かなりズブズブ）',
        scores: { CHA: 2, INT: -1, VIT: -2 },
      },
      {
        label: '6時間以上（スマホが臓器の一部）',
        scores: { CHA: 3, LUK: -3, INT: -2, VIT: -3 },
      },
    ],
  },
  {
    id: 5,
    text: '運動の頻度は？',
    emoji: '🏃',
    options: [
      {
        label: 'ほぼ毎日（週5〜7日）',
        scores: { STR: 5, VIT: 4, AGI: 4 },
      },
      {
        label: '週2〜3回（健康意識あり）',
        scores: { STR: 3, VIT: 3, AGI: 2 },
      },
      {
        label: '月に数回（気が向いたら）',
        scores: { STR: 0, VIT: 0, AGI: 0 },
      },
      {
        label: 'ほぼしない（移動は全部乗り物）',
        scores: { STR: -3, VIT: -2, AGI: -2, INT: 1 },
      },
    ],
  },
  {
    id: 6,
    text: '食事のスタイルは？',
    emoji: '🍜',
    options: [
      {
        label: '自炊メイン・栄養バランス重視',
        scores: { VIT: 4, STR: 2, INT: 1 },
      },
      {
        label: 'コンビニ・外食が多い（楽が一番）',
        scores: { VIT: -1, AGI: 2, LUK: 1 },
      },
      {
        label: 'グルメ重視・外食を楽しむ',
        scores: { CHA: 3, VIT: 1, LUK: 1 },
      },
      {
        label: '食事を忘れる・超不規則',
        scores: { VIT: -3, STR: -1, INT: 2, LUK: 1 },
      },
    ],
  },
  {
    id: 7,
    text: 'ストレスを感じる頻度は？',
    emoji: '😤',
    options: [
      {
        label: 'ほぼ感じない（心が鋼鉄）',
        scores: { VIT: 4, LUK: 2, STR: 1 },
      },
      {
        label: '適度に感じるが自分でコントロールできる',
        scores: { INT: 3, CHA: 2, VIT: 1 },
      },
      {
        label: '結構感じる（でも何とかやってる）',
        scores: { INT: 2, VIT: -2, CHA: -1 },
      },
      {
        label: '常にストレスMAX（限界突破寸前）',
        scores: { VIT: -4, STR: -2, INT: 3, LUK: -1 },
      },
    ],
  },
  {
    id: 8,
    text: 'お金の使い方は？',
    emoji: '💰',
    options: [
      {
        label: '倹約家（コツコツ積み立て派）',
        scores: { LUK: 4, INT: 2, VIT: 1 },
      },
      {
        label: 'バランス型（使うときは使う）',
        scores: { CHA: 3, AGI: 2, LUK: 1 },
      },
      {
        label: '衝動買いが多い（欲しいものは今すぐ）',
        scores: { CHA: 2, LUK: -3, STR: 1, AGI: 1 },
      },
      {
        label: '貯金？何それ？（常に金欠）',
        scores: { LUK: -4, VIT: -1, CHA: 2, INT: 1 },
      },
    ],
  },
]

// ===== スコア計算 =====
export function calculateStats(answers: number[]): Stats {
  const stats: Stats = { STR: 5, INT: 5, VIT: 5, AGI: 5, LUK: 5, CHA: 5 }

  answers.forEach((answerIdx, qIdx) => {
    const option = questions[qIdx]?.options[answerIdx]
    if (!option) return
    ;(Object.keys(option.scores) as StatKey[]).forEach((key) => {
      stats[key] = Math.max(1, Math.min(20, stats[key] + (option.scores[key] ?? 0)))
    })
  })

  return stats
}

// ===== レベル計算 =====
export function calculateLevel(stats: Stats): number {
  const total = Object.values(stats).reduce((a, b) => a + b, 0)
  return Math.max(1, Math.min(99, Math.floor(total / 6)))
}

// ===== 二つ名・職業クラス・装備・弱点・コメント =====
interface TitlePattern {
  condition: (s: Stats) => boolean
  title: string
  jobClass: string
  equipment: string
  weakness: string
  comment: string
}

const titlePatterns: TitlePattern[] = [
  // === 全滅系 ===
  {
    condition: (s) => Object.values(s).every((v) => v <= 6),
    title: '全ステータス壊滅中の要救助モブキャラ',
    jobClass: '村人A',
    equipment: 'ボロボロの装備（未鑑定）',
    weakness: '全属性',
    comment: 'あなたは今が人生の底値です。あとは上がるだけ…たぶん。',
  },
  // === 全部平均系 ===
  {
    condition: (s) => Object.values(s).every((v) => v >= 7 && v <= 12),
    title: 'どこにでもいる無個性な村人A改',
    jobClass: '平均戦士',
    equipment: '量産型の剣（一般流通品）',
    weakness: '個性',
    comment: 'バランス型は悪くない。ただ記憶には残らない。',
  },
  // === 超知力 ===
  {
    condition: (s) => s.INT >= 17,
    title: '深夜のMP切れ引きこもり賢者',
    jobClass: '魔法使い（睡眠不足型）',
    equipment: '読み終えた本の山（呪具扱い）',
    weakness: '日光・人間関係・運動',
    comment: '頭だけは超一流。あとは普通以下なのが惜しい。',
  },
  {
    condition: (s) => s.INT >= 14 && s.VIT <= 7,
    title: '頭は動くが体が死んでいる図書館型魔法使い',
    jobClass: '知識型魔法使い',
    equipment: '度が進んだ眼鏡（+3知力）',
    weakness: '階段・長距離移動・炎天下',
    comment: 'スペックは高いのに体が足を引っ張っている。ストレッチくらいしよう。',
  },
  // === 超体力 ===
  {
    condition: (s) => s.STR >= 17,
    title: '筋肉が脳に接続された純粋暴力型戦士',
    jobClass: '戦士（筋肉特化型）',
    equipment: 'プロテイン缶（両手持ち）',
    weakness: 'デスク仕事・細かい作業・思考全般',
    comment: '体は資本。あとは脳みそにも少し投資してみよう。',
  },
  {
    condition: (s) => s.STR >= 14 && s.INT <= 7,
    title: '考えるより先に走る筋肉型脳筋勇者',
    jobClass: '勇者（無計画突撃型）',
    equipment: '重すぎて他人には装備できない剣',
    weakness: '戦略・計画・書類仕事',
    comment: 'とにかく動く姿勢は正しい。でも方向が間違ってることも多い。',
  },
  // === 超HP/回復力 ===
  {
    condition: (s) => s.VIT >= 17,
    title: '何度やられても起き上がるゾンビ戦士',
    jobClass: 'パラディン（不死身型）',
    equipment: '自動回復のお守り（効果：ちょっとだけ）',
    weakness: '急激な変化・新しい環境',
    comment: 'しぶとさは一流。でもそれが「変化しない」理由になっていないか確認しよう。',
  },
  // === 超素早さ ===
  {
    condition: (s) => s.AGI >= 17,
    title: '誰より先に走って誰より先に疲れる斥候',
    jobClass: 'レンジャー（早死に型）',
    equipment: '軽すぎて壊れやすい装備',
    weakness: '持久戦・根気のいる作業',
    comment: 'フットワークは超軽い。でも続けることが苦手でしょ？',
  },
  {
    condition: (s) => s.AGI >= 14 && s.VIT <= 7,
    title: 'フットワーク軽め中身薄めの風使い',
    jobClass: '吟遊詩人（流浪型）',
    equipment: '使い捨てのブーメラン',
    weakness: '定住・コミットメント・貯金',
    comment: '動きは速い。でも人生に腰を落ち着かせる時期も来るよ。',
  },
  // === 超運 ===
  {
    condition: (s) => s.LUK >= 17,
    title: '何もしてないのになぜか生き延びる呪われた主人公',
    jobClass: '主人公（チート運補正型）',
    equipment: '拾い物のレア装備（理由不明）',
    weakness: '努力・継続・計画性',
    comment: '運だけで今まで生きてきた。そろそろ実力もつけよう。',
  },
  {
    condition: (s) => s.LUK <= 4,
    title: '当たりくじは全部他人が引く不運の賢者',
    jobClass: '呪われし者（不運特化型）',
    equipment: '呪いの指輪（外せない）',
    weakness: 'ガチャ・くじ・ランダムイベント全般',
    comment: '不運は本物。でも準備と実力で運を補える部分はある。',
  },
  // === 超魅力 ===
  {
    condition: (s) => s.CHA >= 17,
    title: '外見だけは伝説級の中身空洞パーティーリーダー',
    jobClass: '魔王（カリスマ型）',
    equipment: '口だけ装備フルセット（見た目は最高）',
    weakness: '中身・継続力・一人作業',
    comment: '人を引き付ける力は本物。中身が追いついてきたら最強になれる。',
  },
  {
    condition: (s) => s.CHA >= 14 && s.LUK <= 6,
    title: 'モテるのに不運が追いかける悲劇の王子/王女',
    jobClass: '貴族（呪いつき）',
    equipment: '見た目は豪華な錆びた鎧',
    weakness: '財布・タイミング・運命',
    comment: '人間関係は得意なのに、なぜか肝心な場面で不運が炸裂する。',
  },
  // === STR高 INT低 ===
  {
    condition: (s) => s.STR >= 12 && s.INT <= 6,
    title: '考える前に体が動く無思考型戦士',
    jobClass: '狂戦士（脳筋特化型）',
    equipment: 'とにかく重い武器（片手で振る）',
    weakness: '説明書・マニュアル・戦略立案',
    comment: '行動力は本物。でも「なぜ戦うのか」を一度考えてみよう。',
  },
  // === INT高 LUK低 ===
  {
    condition: (s) => s.INT >= 13 && s.LUK <= 5,
    title: '頭で全部わかってるのに運が裏切る天才型',
    jobClass: '魔法使い（呪われし知識人）',
    equipment: '理論上最強の魔法書（現実には使えない）',
    weakness: '直感・運・ギャンブル全般',
    comment: '分析力は超一流。でも「わかってる」と「できてる」は別の話。',
  },
  // === 運高 全他低 ===
  {
    condition: (s) => s.LUK >= 14 && Object.entries(s).filter(([k]) => k !== 'LUK').every(([, v]) => v <= 8),
    title: '無能だがなぜか生き延びる幸運のモブ主人公',
    jobClass: '主人公（無能運頼り型）',
    equipment: '偶然拾ったチート装備（使い方不明）',
    weakness: 'ほぼ全て（運以外）',
    comment: '運だけで人生を乗り切っている典型例。そのツキがいつ尽きるか考えよう。',
  },
  // === CHA高 VIT低 ===
  {
    condition: (s) => s.CHA >= 13 && s.VIT <= 6,
    title: '華やかな外見で隠れた体力ゼロの偽勇者',
    jobClass: '吟遊詩人（体力ゼロ型）',
    equipment: 'インスタ映えする装備（重くて使えない）',
    weakness: '体力仕事・朝起きること・継続全般',
    comment: '印象はいいのに、実務で体力切れを起こすタイプ。もう少し動こう。',
  },
  // === AGI高 STR低 ===
  {
    condition: (s) => s.AGI >= 13 && s.STR <= 6,
    title: '速さだけが取り柄のガラス細工の斥候',
    jobClass: '忍者（ガラス体質型）',
    equipment: '軽量すぎて攻撃力ゼロの装備',
    weakness: '攻撃全般・力仕事・根性',
    comment: '逃げ足は超一流。でも前に進む力も少しは必要だよ。',
  },
  // === VIT高 AGI低 ===
  {
    condition: (s) => s.VIT >= 13 && s.AGI <= 6,
    title: '攻撃は全部食らうが死なない鈍足パラディン',
    jobClass: 'パラディン（鈍足型）',
    equipment: '重すぎて動けない全身鎧',
    weakness: '行動の早さ・機転・即断即決',
    comment: 'しぶとさは本物。でもそのペースだと世界に置いていかれる。',
  },
  // === STR高 VIT高 INT低 ===
  {
    condition: (s) => s.STR >= 12 && s.VIT >= 12 && s.INT <= 7,
    title: '肉体だけ最強の石頭勇者',
    jobClass: 'バーサーカー（石頭型）',
    equipment: '岩（そのまま投げる）',
    weakness: '複雑な状況判断・人間関係・言葉選び',
    comment: '体は正直に育てている。頭も少し鍛えると人生が10倍楽になる。',
  },
  // === INT高 CHA高 ===
  {
    condition: (s) => s.INT >= 12 && s.CHA >= 12 && s.VIT >= 10,
    title: '口も頭も動くが体だけが心配な知恵者',
    jobClass: '賢者（文武両道志望型）',
    equipment: '魔法の本と話術の盾',
    weakness: '体力・規則正しい生活・早起き',
    comment: '知性と人望を兼ね備えている。あとは体を大事にしよう。',
  },
  // === 全部高い ===
  {
    condition: (s) => Object.values(s).every((v) => v >= 13),
    title: '全ステータス高水準の理想的チート人間',
    jobClass: '勇者（完成形）',
    equipment: '自分自身（それが最強の武器）',
    weakness: '過信・油断・「もう大丈夫」という慢心',
    comment: 'ほぼ非の打ちどころがない。あとは「慢心」だけが敵だ。',
  },
]

// デフォルト（どのパターンにも当てはまらない場合）
const defaultPattern: TitlePattern = {
  condition: () => true,
  title: '迷える中級者の彷徨う旅人',
  jobClass: '旅人（方向性不明）',
  equipment: '冒険の書（まだ1ページ目）',
  weakness: '決断力・自己分析・定住',
  comment: 'まだ方向性が定まっていない。でも旅の途中だということは、まだ諦めていない証拠だ。',
}

export function getTitle(stats: Stats): TitlePattern {
  const sorted = [...titlePatterns].find((p) => p.condition(stats))
  return sorted ?? defaultPattern
}

export function buildResult(answers: number[]): RPGResult {
  const stats = calculateStats(answers)
  const level = calculateLevel(stats)
  const pattern = getTitle(stats)

  return {
    stats,
    level,
    title: pattern.title,
    jobClass: pattern.jobClass,
    equipment: pattern.equipment,
    weakness: pattern.weakness,
    comment: pattern.comment,
  }
}

// ステータス名の表示用マッピング
export const STAT_LABELS: Record<StatKey, string> = {
  STR: 'ちから',
  INT: 'かしこさ',
  VIT: 'たいりょく',
  AGI: 'すばやさ',
  LUK: 'うんのよさ',
  CHA: 'みりょく',
}

export const STAT_COLORS: Record<StatKey, string> = {
  STR: '#ff6b6b',
  INT: '#74b9ff',
  VIT: '#55efc4',
  AGI: '#fdcb6e',
  LUK: '#fd79a8',
  CHA: '#a29bfe',
}

export const STAT_ORDER: StatKey[] = ['STR', 'INT', 'VIT', 'AGI', 'LUK', 'CHA']
