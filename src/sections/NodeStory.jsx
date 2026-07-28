import React from 'react'
import { Section, SectionHeader, FadeUp } from '../components/ui.jsx'

const PROBS = [
  ['ข้อมูลไม่ได้เก็บในไทย', ' — -ขัดกับข้อกำหนดของหน่วยงานรัฐ'],
  ['ปรับแก้ตามงานไม่ได้', ' — ฟีเจอร์ถูกล็อก ทำตามสเปคลูกค้าไม่ได้'],
  ['สั่งงาน node ตรง ๆ ไม่ได้', ' — ต้องผ่านระบบของเจ้าของ ควบคุมเองไม่ได้'],
  ['มี error / bug', ' — ที่เราแก้เองไม่ได้ ต้องรอเจ้าของ'],
  ['สั่งจำนวนน้อยราคาแพง', ' — MOQ สูง ต้นทุนไม่คุ้ม'],
  ['และอื่น ๆ', ' — ที่ทำให้เราคุมคุณภาพและอนาคตไม่ได้'],
]

const STANCES = [
  ['ขายส่ง (Wholesale)', 'โมเดลที่เหมาะกับพันธมิตร/ตัวแทน'],
  ['White Label', 'ติดแบรนด์คุณได้ คุณเป็นเจ้าของหน้าตา'],
  ['Flexible', 'ได้ทั้ง LTE และ LoRa ในตัวเดียว'],
  ['AC & Solar', 'ใช้ได้ทั้งไฟบ้านและโซลาร์'],
]

export default function NodeStory() {
  return (
    <Section id="node" label="เราพัฒนา Node เอง">
      <SectionHeader
        kicker="เราออกแบบและพัฒนาเอง"
        title="ทำไมเราถึงพัฒนา Node เอง"
        lead="การใช้โมดูลสำเร็จจากต่างประเทศ เจอปัญหาการไม่เข้ากับกับระบบในไทย และปัญหาที่แก้เองไม่ได้เต็มไปหมด"
      />

      <FadeUp className="probs">
        {PROBS.map(([b, rest]) => (
          <div className="prob" key={b}>
            <b>{b}</b>
            {rest}
          </div>
        ))}
      </FadeUp>

      <FadeUp className="callout" style={{ marginTop: 30 }}>
        <div className="big">
          เราจึงตัดสินใจ <span className="hl">ทำเอง</span> — ค่อย ๆ พัฒนา “ให้ครบคลุมความต้องการของลูกค้าและการใช้งานจริง”
          และคุมต้นทุนได้
        </div>
      </FadeUp>

      <FadeUp className="tl">
        <div className="tl-row">
          <div className="tl-dot">
            <span className="d" />
            <span className="ver latin">v1 · LTE</span>
          </div>
          <div className="tl-body">
            <h3>เริ่มจากใส่ซิม สื่อสารผ่านมือถือ</h3>
            <p>สามารสื่อสารสั่งงานได้ · แลกกับค่าซิมรายเดือนทุกต้น + เร็วแต่เปลืองพลังงาน</p>
          </div>
        </div>
        <div className="tl-row">
          <div className="tl-dot">
            <span className="d" />
            <span className="ver latin">v2 · LoRa</span>
          </div>
          <div className="tl-body">
            <h3>ย้ายมา LoRa ระยะไกล กินไฟต่ำ</h3>
            <p>ไม่มีค่าซิมรายต้น เหมาะวางทั้งเมือง · ต้องมี gateway</p>
          </div>
        </div>
        <div className="tl-row">
          <div className="tl-dot">
            <span className="d" />
            <span className="ver latin">v3 · Universal</span>
          </div>
          <div className="tl-body">
            <h3>LTE + LoRa ในตัวเดียว — มีทางสำรองเสมอ</h3>
            <p>สลับอัตโนมัติตามพื้นที่ ไม่มีจุดบอด</p>
          </div>
        </div>
        <div className="tl-row">
          <div className="tl-dot">
            <span className="d" style={{ background: 'var(--green)', boxShadow: '0 0 0 2px var(--green)' }} />
            <span className="ver latin" style={{ color: 'var(--green)' }}>
              AC → Solar
            </span>
          </div>
          <div className="tl-body">
            <h3>ตอนนี้: ต่อยอดจาก AC ไปโหมด Solar</h3>
            <p>
              เรามีประสบการณ์ทำ <strong>MPPT</strong> (ชาร์จโซลาร์) มาก่อน + แบตเตอรี่{' '}
              <strong>LiFePO4</strong> จาก supplier เดียวกับที่ป้อนให้แบรนด์ไฟชั้นนำ{' '}
              <strong>Lekise</strong> — <strong>แก้ pain เรื่องแบตเสียเร็วได้แล้ว</strong>
            </p>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="grouphead">
        <span className="gh">จุดยืนของ Node เรา</span>
        <span className="gl" />
      </FadeUp>
      <FadeUp className="stances">
        {STANCES.map(([t, d]) => (
          <div className="stance" key={t}>
            <div className="t">{t}</div>
            <div className="d">{d}</div>
          </div>
        ))}
      </FadeUp>
    </Section>
  )
}
