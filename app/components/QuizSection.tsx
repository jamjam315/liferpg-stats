'use client'

import { useState } from 'react'
import { questions } from '../data/quiz'

interface QuizSectionProps {
  onComplete: (answers: number[]) => void
}

export default function QuizSection({ onComplete }: QuizSectionProps) {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const total = questions.length
  const question = questions[currentQ]

  function handleSelect(idx: number) {
    if (isTransitioning) return
    setSelected(idx)
  }

  function handleNext() {
    if (selected === null || isTransitioning) return
    setIsTransitioning(true)

    const newAnswers = [...answers, selected]

    setTimeout(() => {
      if (currentQ + 1 >= total) {
        onComplete(newAnswers)
      } else {
        setCurrentQ((q) => q + 1)
        setAnswers(newAnswers)
        setSelected(null)
        setIsTransitioning(false)
      }
    }, 300)
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      {/* ヘッダー：タイトル */}
      <div className="text-center mb-8">
        <p className="text-rpg-gold text-xs mb-2 tracking-widest">— 人生RPG ステータス診断 —</p>
        <p className="text-rpg-dim text-xs">正直に答えるほど精度が上がります</p>
      </div>

      {/* 進捗バー */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-rpg-dim text-xs">進捗</span>
          <span className="text-rpg-gold text-xs">
            {currentQ + 1} / {total}
          </span>
        </div>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 transition-all duration-300 ${
                i < currentQ
                  ? 'bg-rpg-border'
                  : i === currentQ
                  ? 'bg-rpg-gold'
                  : 'bg-gray-800'
              }`}
              style={{ border: '1px solid #2a3a2a' }}
            />
          ))}
        </div>
      </div>

      {/* 質問ウィンドウ */}
      <div
        className={`rpg-window rounded p-6 mb-6 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* 質問番号バッジ */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="px-2 py-1 rounded"
            style={{
              background: '#1a2a0a',
              border: '1px solid #c8a850',
              color: '#ffd700',
              fontFamily: 'sans-serif',
              fontSize: '13px',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
            }}
          >
            Q{currentQ + 1}
          </span>
          <span className="text-lg">{question.emoji}</span>
        </div>

        <h2
          className="text-rpg-text mb-6 leading-loose"
          style={{ fontSize: '11px', lineHeight: '2' }}
        >
          {question.text}
        </h2>

        {/* 選択肢 */}
        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              className={`option-btn rounded ${selected === idx ? 'selected' : ''}`}
              onClick={() => handleSelect(idx)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* 次へボタン */}
      <div className="text-center">
        <button
          onClick={handleNext}
          disabled={selected === null || isTransitioning}
          className="px-8 py-3 rounded transition-all duration-200"
          style={{
            background:
              selected !== null
                ? 'linear-gradient(180deg, #1a3a1a 0%, #0a2a0a 100%)'
                : 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
            border: `2px solid ${selected !== null ? '#00e676' : '#2a3a2a'}`,
            color: selected !== null ? '#00e676' : '#3a4a3a',
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '10px',
            cursor: selected !== null ? 'pointer' : 'not-allowed',
            boxShadow: selected !== null ? '0 0 12px rgba(0, 230, 118, 0.3)' : 'none',
          }}
        >
          {currentQ + 1 >= total ? '▶ 結果を見る！' : '▶ 次の質問へ'}
        </button>
      </div>
    </div>
  )
}
