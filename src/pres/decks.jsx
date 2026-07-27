import AiCamera from './AiCamera.jsx'
import ElderlyCare from './ElderlyCare.jsx'
import SmartLightTraffic from './SmartLightTraffic.jsx'
import SmartPole from './SmartPole.jsx'
import LedDisplay from './LedDisplay.jsx'
import SmartEnergy from './SmartEnergy.jsx'

// id (matches appendix card ids + #/pres/:id route) → deck metadata + component.
export const DECKS = {
  'ap-aicam': { title: 'พรีเซนต์ · AI Camera', src: 'smartdata.webdemona.com', Deck: AiCamera },
  'ap-elder': { title: 'พรีเซนต์ · Elderly Care', src: 'smartdata.webdemona.com', Deck: ElderlyCare },
  'ap-smartlight': { title: 'พรีเซนต์ · Smart Light + Traffic', src: 'smartdata.webdemona.com', Deck: SmartLightTraffic },
  'ap-pole': { title: 'พรีเซนต์ · Smart Pole', src: 'smartdata.webdemona.com', Deck: SmartPole },
  'ap-led': { title: 'พรีเซนต์ · งานจอ LED', src: 'งานจอ LED ของเรา', Deck: LedDisplay },
  'ap-energy': { title: 'พรีเซนต์ · Smart Energy (Phase 2)', src: 'roadmap', Deck: SmartEnergy },
}
