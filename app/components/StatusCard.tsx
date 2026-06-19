'use client'

import { useRef, useState } from 'react'
import type { RPGResult } from '../data/quiz'
import { STAT_COLORS, STAT_LABELS, STAT_ORDER } from '../data/quiz'

interface StatusCardProps {
  result: RPGResult
  onRetry: () => void
}

function StatBar({ statKey, value }: { statKey: string; value: number }) {
  const color = STAT_COLORS[statKey as keyof typeof STAT_COLORS] ?? '#ffffff'
  const label = STAT_LABELS[statKey as keyof typeof STAT_LABELS] ?? statKey
  const pct = Math.round((value / 20) * 100)

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span style={{ fontSize: '13px', color: '#ffffff' }}>
          {label}
        </span>
        <span style={{ fontSize: '13px', color }}>{value}</span>
      </div>
      <div className="stat-bar rounded-sm">
        <div
          className="stat-bar-fill rounded-sm"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  )
}

export default function StatusCard({ result, onRetry }: StatusCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    if (!cardRef.current || saving) return
    setSaving(true)
    try {
      const { toPng } = await import('html-to-image')
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        backgroundColor: '#0a0a1a',
      })
      const link = document.createElement('a')
      link.download = `liferpg_${Date.now()}.png`
      link.href = dataUrl
      link.click()
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (e) {
      console.error(e)
      alert('保存に失敗しました。ブラウザのスクリーンショット機能をご利用ください。')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      {/* 共有ボタン群（カード外） */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-3 rounded text-xs transition-all duration-200"
          style={{
            background: saving
              ? 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)'
              : 'linear-gradient(180deg, #2a1a3a 0%, #1a0a2a 100%)',
            border: `2px solid ${saving ? '#3a3a3a' : '#a29bfe'}`,
            color: saving ? '#3a3a3a' : '#a29bfe',
            fontFamily: '"Press Start 2P", monospace',
            cursor: saving ? 'not-allowed' : 'pointer',
            boxShadow: saving ? 'none' : '0 0 12px rgba(162, 155, 254, 0.3)',
          }}
        >
          {saving ? '🔄 保存中...' : saved ? '✅ 保存完了！' : '📷 画像で保存'}
        </button>

        <button
          onClick={() => {
            const text = `【人生RPG ステータス診断】\n私の二つ名：「${result.title}」\n職業：${result.jobClass}（Lv.${result.level}）\nちから:${result.stats.STR} かしこさ:${result.stats.INT} たいりょく:${result.stats.VIT} すばやさ:${result.stats.AGI} うんのよさ:${result.stats.LUK} みりょく:${result.stats.CHA}\n#人生RPG #ステータス診断\n\n▶ 無料で診断 → https://liferpg-stats.vercel.app\n作者：@MadTeaParty20`
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
            window.open(url, '_blank')
          }}
          className="px-5 py-3 rounded text-xs transition-all duration-200"
          style={{
            background: 'linear-gradient(180deg, #0a1a2a 0%, #050f1a 100%)',
            border: '2px solid #40c4ff',
            color: '#40c4ff',
            fontFamily: '"Press Start 2P", monospace',
            cursor: 'pointer',
            boxShadow: '0 0 12px rgba(64, 196, 255, 0.3)',
          }}
        >
          🐦 Xでシェア
        </button>

        <button
          onClick={onRetry}
          className="px-5 py-3 rounded text-xs transition-all duration-200"
          style={{
            background: 'linear-gradient(180deg, #1a0a0a 0%, #0a0505 100%)',
            border: '2px solid #ff5252',
            color: '#ff5252',
            fontFamily: '"Press Start 2P", monospace',
            cursor: 'pointer',
          }}
        >
          🔁 もう一度
        </button>
      </div>

      {/* 013への導線 */}
      <div className="text-center mb-4">
        <a
          href="https://sbti-31.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: '#74b9ff',
            textDecoration: 'none',
            lineHeight: '2',
          }}
        >
          ▷ もう1つ：毒舌性格診断（31問）
        </a>
      </div>

      {/* ステータスカード本体（画像保存対象） */}
      <div id="share-card" ref={cardRef} className="rpg-window rounded-lg overflow-hidden">
        {/* 背景画像オーバーレイ */}
        <div
          className="relative"
          style={{
            backgroundImage: 'url(/bg-rpg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* ダーク＋スキャンラインオーバーレイ */}
          <div
            className="scanlines"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10, 10, 26, 0.82)',
              zIndex: 0,
            }}
          />

          <div className="relative z-10 p-6">
            {/* タイトル行 */}
            <div
              className="text-center mb-4 pb-3"
              style={{ borderBottom: '1px solid #2a3a2a' }}
            >
              <p
                className="text-center mb-4 pb-3 tracking-widest"
                style={{ borderBottom: '1px solid #2a3a2a', fontSize: '12px', color: '#ffffff' }}
              >
                ◆◆◆ 人生RPG ステータス診断 ◆◆◆
              </p>
              <p className="text-center" style={{ fontSize: '12px', color: '#ffd700' }}>
                2026 年 6 月 診断
              </p>
            </div>

            {/* 二つ名 */}
            <div className="text-center mb-5">
              <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '8px' }}>
                ─── 二つ名 ───
              </p>
              <h1
                className="text-rpg-gold leading-loose"
                style={{ fontSize: '10px', textShadow: '0 0 12px rgba(255, 215, 0, 0.6)' }}
              >
                「{result.title}」
              </h1>
            </div>

            {/* レベルと職業 */}
            <div
              className="flex justify-center items-center gap-6 mb-5 pb-4"
              style={{ borderBottom: '1px solid #2a3a2a' }}
            >
              <div className="text-center">
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '4px' }}>
                  職業
                </p>
                <p className="text-rpg-text" style={{ fontSize: '9px' }}>
                  {result.jobClass}
                </p>
              </div>
              <div
                className="w-px self-stretch"
                style={{ background: '#2a3a2a' }}
              />
              <div className="text-center">
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '4px' }}>
                  LEVEL
                </p>
                <p
                  style={{
                    fontSize: '22px',
                    color: '#ffd700',
                    fontFamily: '"Press Start 2P", monospace',
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
                  }}
                >
                  {result.level}
                </p>
              </div>
            </div>

            {/* ステータスバー */}
            <div className="mb-5">
              <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '12px', textAlign: 'center' }}>
                ─── STATS ───
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {STAT_ORDER.map((key) => (
                  <StatBar key={key} statKey={key} value={result.stats[key]} />
                ))}
              </div>
            </div>

            {/* 装備・弱点 */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 pt-4"
              style={{ borderTop: '1px solid #2a3a2a' }}
            >
              <div
                className="rounded p-3"
                style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid #2a4a2a' }}
              >
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '8px' }}>
                  ⚔ 装備
                </p>
                <p className="text-rpg-text leading-loose" style={{ fontSize: '13px', lineHeight: '2' }}>
                  {result.equipment}
                </p>
              </div>
              <div
                className="rounded p-3"
                style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid #4a1a1a' }}
              >
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '8px' }}>
                  ☠ 弱点
                </p>
                <p
                  className="leading-loose"
                  style={{ fontSize: '13px', lineHeight: '2', color: '#ff5252' }}
                >
                  {result.weakness}
                </p>
              </div>
            </div>

            {/* コメント（辛口） */}
            <div
              className="rounded p-4"
              style={{
                background: 'rgba(255, 215, 0, 0.05)',
                border: '1px solid #c8a850',
              }}
            >
              <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '8px' }}>
                💬 賢者の一言
              </p>
              <p
                className="text-rpg-text leading-loose"
                style={{ fontSize: '13px', lineHeight: '2.2' }}
              >
                {result.comment}
              </p>
            </div>

            {/* フッター */}
            <p
              className="text-center mt-4 text-rpg-dim"
              style={{ fontSize: '6px' }}
            >
              #人生RPG #ステータス診断 #LifeRPG
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
