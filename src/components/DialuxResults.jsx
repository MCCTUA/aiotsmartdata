import React from 'react'

// DIALux (EN 13201:2015) pole-spacing comparison — wider spacing = fewer
// poles/km = lower cost per km, as long as Eav still clears the standard.
const ROWS = [
  { id: 'street1', label: 'Street 1', spacing: '22 ม.', power: '40.1 W', flux: '5,600 lm', eav: '15.0 lx', emin: '7.5 lx', uo: '0.50', perKm: '~46', status: 'pass', statusLabel: 'ผ่านมาตรฐาน' },
  { id: 'street4', label: 'Street 4', spacing: '27 ม.', power: '50.0 W', flux: '7,000 lm', eav: '15.3 lx', emin: '6.7 lx', uo: '0.43', perKm: '~37', status: 'pass', statusLabel: 'ผ่านมาตรฐาน' },
  { id: 'street3', label: 'Street 3', spacing: '33 ม.', power: '60.0 W', flux: '8,400 lm', eav: '15.0 lx', emin: '5.1 lx', uo: '0.34', perKm: '~30', status: 'pass', statusLabel: 'ผ่านมาตรฐาน' },
  { id: 'street5', label: 'Street 5', spacing: '25 ม.', power: '60.0 W', flux: '8,400 lm', eav: '19.8 lx', emin: '9.2 lx', uo: '0.46', perKm: '~40', status: 'over', statusLabel: '≈20 lx (เกินมาตรฐาน)' },
]

export default function DialuxResults() {
  return (
    <div style={{ marginTop: 36 }}>
      <h3 style={{ fontSize: 18, fontWeight: 700 }}>ผลคำนวณแสง (DIALux · EN 13201:2015)</h3>
      <p className="solarctx" style={{ marginTop: 10 }}>
        ถนน 5 ม. · เสา 6 ม. · โคม SA-2A01-060 · MF 0.80 — ระยะห่างมาก = จำนวนเสา/กม. น้อย = ต้นทุนต่อ กม. ต่ำกว่า
      </p>

      <div className="dialux-wrap">
        <table className="dialux-table">
          <thead>
            <tr>
              <th>ทางเลือก</th>
              <th className="num">ระยะห่างเสา</th>
              <th className="num">กำลังไฟ</th>
              <th className="num">ฟลักซ์</th>
              <th className="num">Eav</th>
              <th className="num">Emin</th>
              <th className="num">Uo</th>
              <th className="num">เสา/กม.</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.id} className={r.status === 'over' ? 'over' : undefined}>
                <td>{r.label}</td>
                <td className="num latin">{r.spacing}</td>
                <td className="num latin">{r.power}</td>
                <td className="num latin">{r.flux}</td>
                <td className="num latin">{r.eav}</td>
                <td className="num latin">{r.emin}</td>
                <td className="num latin">{r.uo}</td>
                <td className="num latin">{r.perKm}</td>
                <td>
                  <span className={`dialux-status ${r.status}`}>{r.statusLabel}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="solarnotes">
        <li>
          มาตรฐาน EN 13201 คลาสนี้ต้องการ Eav 15–22.5 lx → ตัว ~15 lx (Street 1/3/4) ผ่านแล้ว · Street 5 (~20 lx)
          คือสว่างเกินความจำเป็น (แผง/แบตใหญ่ขึ้น)
        </li>
        <li>ตัวเลขเป็นค่าประมาณเพื่อเปรียบเทียบ · จำนวนเสา/กม. = 1000 ÷ ระยะห่าง (ใช้ประมาณต้นทุนต่อ กม.)</li>
      </ul>
    </div>
  )
}
