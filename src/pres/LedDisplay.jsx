import React from 'react'
import { PSlide, Dup, Foot } from './deckUI.jsx'
import { IMG } from '../assets.js'

const SPEC_CHIPS = [
  ['ขนาดจอ', '~1.5 × 0.5 ม.'],
  ['ความละเอียด', '384 × 128 พิกเซล'],
  ['pixel pitch', 'P3.91 (3.91 มม.)'],
  ['ชนิด', 'full-color outdoor'],
]

const BOQ = [
  ['ป้ายแสดงผล LED', 'full-color outdoor P3.91 · 1.5×0.5 ม. · 384×128 px · ปรับสว่างอัตโนมัติ'],
  ['ตู้ควบคุม', 'ชุดควบคุมป้าย + สั่งการอุปกรณ์ในโซน'],
  ['Edge AI Computer', 'ประมวลผล AI เรียลไทม์ที่หน้างาน (edge)'],
  ['Network System', 'อุปกรณ์เครือข่าย (Switch/Router) + เชื่อมต่อระหว่างจุด'],
  ['MDB', 'ตู้จ่ายไฟหลัก + เบรกเกอร์/กันไฟรั่ว'],
]

// Distance-to-legibility diagram — ported from the Lampang bridge job (real
// install math: read distance ≈ character height × ~150), recolored to
// smartdata blue/amber instead of the Thai-identity green/gold.
function DistanceStrip() {
  return (
    <svg viewBox="0 0 620 120" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="ระยะติดตั้งป้าย LED">
      <rect x="0" y="66" width="560" height="14" fill="#8a8f98" />
      <circle cx="60" cy="73" r="7" fill="var(--blue)" />
      <text x="60" y="54" fontSize="12" fill="var(--blue)" textAnchor="middle" fontWeight="700">จุดวัดสูง</text>
      <rect x="252" y="40" width="56" height="26" rx="3" fill="#0a3d8f" />
      <text x="280" y="58" fontSize="11" fill="#cfe0ff" textAnchor="middle" fontFamily="monospace">3.3m</text>
      <text x="280" y="98" fontSize="12" fill="var(--amber)" textAnchor="middle" fontWeight="700">ป้าย LED</text>
      <rect x="470" y="62" width="44" height="18" rx="4" fill="#7C93A6" />
      <text x="492" y="75" fontSize="10" fill="#fff" textAnchor="middle">คนขับ</text>
      <text x="540" y="75" fontSize="11.5" fill="#7A745F">→ คอสะพาน</text>
      <line x1="60" y1="108" x2="280" y2="108" stroke="#555" strokeWidth="1" />
      <text x="170" y="105" fontSize="10.5" fill="#555" textAnchor="middle">ระยะให้ประมวลผลเสร็จ</text>
      <line x1="280" y1="108" x2="492" y2="108" stroke="#555" strokeWidth="1" />
      <text x="386" y="105" fontSize="10.5" fill="var(--amber)" textAnchor="middle">อ่านชัด ~30–50 ม.</text>
    </svg>
  )
}

export default function LedDisplay() {
  return (
    <>
      <Dup>
        🔁 งานจอ LED ของเรา — พอร์ตจากงานสะพานรัษฎาภิเศก จ.ลำปาง (สเปก/BOQ จริงจากหน้างาน)
      </Dup>
      <PSlide
        kicker="LED Display · 01"
        title="ป้ายจอ LED (VMS) — เตือนล่วงหน้า อ่านง่ายทุกเพศทุกวัย"
        media={{ kind: 'img', src: IMG.ledSign, cap: 'ป้ายจอ LED หน้างานจริง — สะพานรัษฎาภิเศก ลำปาง' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '10px 0 14px' }}>
          {SPEC_CHIPS.map(([k, v]) => (
            <span key={k} className="pill">
              {k}: <b className="latin">{v}</b>
            </span>
          ))}
        </div>
        <ul>
          <li>ปรับข้อความเรียลไทม์ (เช่น "รถสูงเกิน 3.3 ม. ห้ามเข้า")</li>
          <li>สว่างเห็นชัดกลางวัน–กลางคืน (ปรับความสว่างอัตโนมัติ)</li>
          <li>กินไฟต่ำ · ทนแดดฝน · เตือนล่วงหน้าลดการชนสะพาน</li>
        </ul>
      </PSlide>
      <PSlide
        kicker="LED Display · 02"
        title="ระยะติดตั้ง — ห่างจากจุดวัดความสูงเท่าไหร่ถึงพอดี"
      >
        <DistanceStrip />
        <ul>
          <li>
            อ่านชัด <strong>~30–50 ม.</strong> · ระยะอ่าน ≈ ความสูงตัวอักษร × ~150
          </li>
          <li>
            <strong>ทุกวัย</strong> (รวมผู้สูงอายุ): ตัวอักษรใหญ่ + คอนทราสต์สูง + สัญลักษณ์ชัด
          </li>
        </ul>
      </PSlide>
      <PSlide
        kicker="LED Display · 03"
        title="การใช้งาน"
        points={[
          'เตือนรถสูงเกินก่อนถึงสะพาน/อุโมงค์ · ปรับข้อความเรียลไทม์',
          'ข้อความจราจร · ประชาสัมพันธ์ · แจ้งเหตุฉุกเฉิน',
          'สั่งงานจากส่วนกลาง / ทริกเกอร์อัตโนมัติจากเซนเซอร์ · จัดคิวข้อความ + ตารางเวลาได้',
          'เชื่อมกับระบบเซนเซอร์/ระบบเฝ้าระวัง — full-color หรือ 3-color ตามงบ',
        ]}
      />
      <PSlide kicker="LED Display · 04" title="BOQ ชุดป้าย LED (งานสะพานรัษฎาภิเศก)">
        <div className="grid g2" style={{ marginTop: 0 }}>
          {BOQ.map(([t, d]) => (
            <div className="card" key={t}>
              <h3 style={{ fontSize: 15 }}>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <Foot>อ้างอิงจาก BOQ งานสะพานรัษฎาภิเศก จ.ลำปาง · ขนาด/สเปกงานอื่นยืนยันตามหน้างานจริง</Foot>
      </PSlide>
    </>
  )
}
