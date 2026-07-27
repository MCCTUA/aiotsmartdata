import React from 'react'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section className="hero" id="hero" data-label="ปก">
      <div className="glow" />
      <div className="wrap">
        <span className="badge">ผู้เชี่ยวชาญ AIOT Software + Lighting Hardware</span>
        <h1>
          Smart Living &amp; Smart City <br />
          <span className="hl">พัฒนาด้วยข้อมูล</span>
        </h1>
        <p className="sub">
          เราไม่ได้ขาย “อุปกรณ์” ที่ติดครั้งเดียวจบ — เราสร้าง “แพลตฟอร์ม” ที่ทำให้ทุกสิ่งที่คุณติดตั้ง
          กลายเป็นข้อมูลที่ต่อยอดเป็นงานชิ้นต่อไปได้
        </p>
        <div className="cta">
          <button className="btn btn-p" onClick={() => go('edge')}>
            จุดเด่นของเรา ↓
          </button>
          <button className="btn btn-g" onClick={() => go('demo')}>
            ไปที่ Demo Smart Light
          </button>
        </div>
        <div className="chips">
          <div className="chip">
            <div className="n">Hardware + Software</div>
            <div className="t">One Stop Solution</div>
          </div>
          <div className="chip">
            <div className="n latin">16+ / 20+</div>
            <div className="t">ประสบการณ์ เป็นที่ยอมรับขององค์กรชั้นนำ</div>
          </div>
          <div className="chip">
            <div className="n latin">2553</div>
            <div className="t">โรงงานโคม LED ของเราเดินเครื่อง</div>
          </div>
        </div>
      </div>
    </section>
  )
}
