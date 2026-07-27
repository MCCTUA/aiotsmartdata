import React, { useState } from 'react'

// 3-tier solar street light comparison for one fixed job spec (ถนน 5 ม. ·
// เสา 6 ม. · โคม 40W @ 22 ม.). Click a card to highlight it and show its
// battery/panel/trade-off in the summary box below — this is what a
// customer actually compares before picking a tier.
const OPTIONS = [
  {
    id: 'a',
    name: 'A · สว่างสบาย',
    sub: 'Comfort',
    badge: null,
    dusk: 'เต็ม ~15 lx',
    midnight: '70% (~10.5 lx)',
    backup: '3 คืน',
    dod: '80% · อายุยาว',
    battery: '~1,540 Wh (12.8V ~120Ah)',
    panel: '~140 W',
    price: '฿฿฿',
    priceLabel: 'สูงสุด',
    fit: 'ถนนคนใช้ดึก/เน้นสว่าง',
    tradeoff: 'ราคาสูงสุดในสามแบบ แลกกับความสว่างสบายต่อเนื่องตลอดคืน',
  },
  {
    id: 'b',
    name: 'B · มาตรฐาน P2',
    sub: 'Standard',
    badge: 'แนะนำ',
    dusk: 'เต็ม ~15 lx',
    midnight: '67→45% (10→7 lx)',
    backup: '3 คืน',
    dod: '80% · อายุยาว',
    battery: '~1,320 Wh (12.8V ~105Ah)',
    panel: '~120 W',
    price: '฿฿',
    priceLabel: 'กลาง',
    fit: 'ทั่วไป คุมงบ+ได้มาตรฐาน',
    tradeoff: 'จุดสมดุลระหว่างมาตรฐาน EN 13201 กับงบประมาณ เหมาะกับถนนส่วนใหญ่',
  },
  {
    id: 'c',
    name: 'C · ประหยัดสุด',
    sub: 'แบบจีน',
    badge: null,
    dusk: 'เต็มช่วงสั้น ~15 lx',
    midnight: '15–20% + PIR เซนเซอร์ (~3–5 lx สว่างเมื่อมีคน)',
    backup: '2 คืน',
    dod: '90% · สั้นกว่า',
    battery: '~300 Wh (12.8V ~24Ah)',
    panel: '~100 W',
    price: '฿',
    priceLabel: 'ถูกสุด',
    fit: 'งบจำกัดมาก ถนนคนน้อยมาก',
    tradeoff: 'กลางดึกมืดกว่า พึ่ง PIR + รีดแบตลึก อายุแบตสั้นกว่า — แต่ของเราแบตเกรดดี (Lekise) และ "แยกส่วน" เปลี่ยนเฉพาะจุดที่เสียได้',
  },
]

const ROWS = [
  ['หัวค่ำ/เช้ามืด', 'dusk'],
  ['กลางดึก (22:00–04:00)', 'midnight'],
  ['สำรองไฟ', 'backup'],
  ['DoD / อายุแบต', 'dod'],
  ['แบต LiFePO4', 'battery'],
  ['แผงโซลาร์', 'panel'],
  ['ราคาเปรียบเทียบ', 'price'],
  ['เหมาะกับ', 'fit'],
]

const HIGHLIGHT_KEYS = new Set(['battery', 'panel'])

export default function SolarOptions() {
  const [selected, setSelected] = useState('b')
  const picked = OPTIONS.find((o) => o.id === selected)

  return (
    <div style={{ marginTop: 36 }}>
      <p className="solarctx">
        <strong>บริบท:</strong> ถนน 5 ม. · เสา 6 ม. · โคม 40W @ 22 ม. · เต็มกำลัง ~15 lx (ผ่าน EN 13201) · ใช้
        dimming ช่วงกลางดึกเพื่อลดขนาดแผง/แบต = ลดราคา
      </p>

      <div className="solaropts">
        {OPTIONS.map((o) => (
          <div
            key={o.id}
            className={`solaropt${o.badge ? ' recommended' : ''}${selected === o.id ? ' selected' : ''}`}
            onClick={() => setSelected(o.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelected(o.id)}
          >
            {o.badge && <div className="solaropt-badge">{o.badge}</div>}
            <div className="solaropt-head">
              <div className="solaropt-title">{o.name}</div>
              <div className="solaropt-sub">{o.sub}</div>
            </div>
            <div className="solaropt-rows">
              {ROWS.map(([label, key]) => (
                <div className="row" key={key}>
                  <span className="rk">{label}</span>
                  <span className={`rv${HIGHLIGHT_KEYS.has(key) ? ' hl' : ''}${key === 'price' ? ' price' : ''}`}>
                    {key === 'price' ? (
                      <>
                        {o.price} <small>({o.priceLabel})</small>
                      </>
                    ) : (
                      o[key]
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="solarsummary">
        <div className="t">: {picked.name}</div>
        <div className="d">
          แบต {picked.battery} / แผง {picked.panel} — ข้อแลก: {picked.tradeoff}
        </div>
      </div>
    </div>
  )
}
