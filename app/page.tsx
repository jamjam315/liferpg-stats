'use client'

import { useState } from 'react'
import QuizSection from './components/QuizSection'
import StatusCard from './components/StatusCard'
import { buildResult, type RPGResult } from './data/quiz'

type Phase = 'title' | 'quiz' | 'result'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('title')
  const [result, setResult] = useState<RPGResult | null>(null)

  function handleStart() {
    setPhase('quiz')
  }

  function handleComplete(answers: number[]) {
    const r = buildResult(answers)
    setResult(r)
    setPhase('result')
  }

  function handleRetry() {
    setResult(null)
    setPhase('title')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start">
      {/* 最上部のデコレーションライン */}
      <div
        className="w-full h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #c8a850, transparent)' }}
      />

      {phase === 'title' && <TitleScreen onStart={handleStart} />}
      {phase === 'quiz' && <QuizSection onComplete={handleComplete} />}
      {phase === 'result' && result && (
        <StatusCard result={result} onRetry={handleRetry} />
      )}

      {/* フッター */}
      <footer
        className="w-full text-center py-4 mt-auto"
        style={{ borderTop: '1px solid #1a2a1a' }}
      >
        <p className="text-rpg-dim" style={{ fontSize: '7px' }}>
          © 2026 人生RPG診断 — Powered by JavaScript &amp; 辛口AI
        </p>
      </footer>
    </main>
  )
}

function TitleScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center animate-fadeIn">
      {/* メインタイトル */}
      <div className="text-center mb-10">
        <div
          className="rpg-window rounded-lg p-8 mb-6"
          style={{ maxWidth: '480px', margin: '0 auto 24px' }}
        >
          <p
            className="text-rpg-dim mb-4 tracking-widest"
            style={{ fontSize: '7px' }}
          >
            ◆◆◆ PRESENTED BY MAD TEA PARTY ◆◆◆
          </p>
          <h1
            className="text-rpg-gold mb-4 leading-loose"
            style={{
              fontSize: '16px',
              textShadow: '0 0 20px rgba(255, 215, 0, 0.7)',
              lineHeight: '2.5',
            }}
          >
            人生RPG
            <br />
            ステータス診断
          </h1>
          <p
            className="text-rpg-text"
            style={{ fontSize: '8px', lineHeight: '2' }}
          >
            あなたの日常をRPGに換算したら
            <br />
            一体何者になれるのか―
          </p>
        </div>

        {/* 特徴リスト */}
        <div
          className="rpg-window rounded p-5 text-left mb-8"
          style={{ fontSize: '8px', lineHeight: '2.5' }}
        >
          <p className="text-rpg-dim mb-3 text-center" style={{ fontSize: '7px' }}>
            — この診断でわかること —
          </p>
          <ul className="space-y-2">
            {[
              '⚔️  STR/INT/VIT/AGI/運/魅力 の6ステータス',
              '👑  あなただけの「二つ名」と「職業クラス」',
              '🗡️  装備名（ネタ成分多め）',
              '☠️  弱点（正直ベース）',
              '💬  賢者の辛口コメント',
            ].map((item, i) => (
              <li key={i} className="text-rpg-text">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 注意書き */}
        <p className="text-rpg-dim mb-8" style={{ fontSize: '7px', lineHeight: '2' }}>
          全8問 / ログイン不要 / 無料 / 日本語
        </p>

        {/* スタートボタン */}
        <button
          onClick={onStart}
          className="px-10 py-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(180deg, #1a3a1a 0%, #0a2a0a 100%)',
            border: '3px solid #00e676',
            color: '#00e676',
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '12px',
            cursor: 'pointer',
            boxShadow: '0 0 24px rgba(0, 230, 118, 0.5)',
            letterSpacing: '2px',
          }}
        >
          ▶ 診断スタート
        </button>
      </div>

      {/* 免責 */}
      <p
        className="text-center text-rpg-dim"
        style={{ fontSize: '6px', lineHeight: '2', maxWidth: '320px' }}
      >
        ※ 本診断は娯楽目的です。結果に科学的根拠はありません。
        <br />
        深刻に受け止めず、軽い笑いとシェアにご活用ください。
      </p>
    </div>
  )
}
