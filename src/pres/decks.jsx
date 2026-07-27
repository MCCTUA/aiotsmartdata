import AiCamera from './ai-camera/PitchDeck.jsx'
import ElderlyCare from './elderly-care/Story.jsx'
import SmartLightTraffic from './smart-light-traffic/index.jsx'
import SmartPole from './SmartPole.jsx'
import LedDisplay from './LedDisplay.jsx'
import SmartEnergy from './SmartEnergy.jsx'

// id (matches appendix card ids + #/pres/:id route) → deck metadata + component.
// fullBleed: true = component brings its own fixed-size scale-to-fit canvas /
// self-managed max-width (real ported pages) — skip PresViewer's 1000px column.
export const DECKS = {
  'ap-aicam': { title: 'พรีเซนต์ · AI Camera', src: 'smartdata.webdemona.com', Deck: AiCamera, fullBleed: true },
  'ap-elder': { title: 'พรีเซนต์ · Elderly Care', src: 'smartdata.webdemona.com', Deck: ElderlyCare, fullBleed: true },
  'ap-smartlight': { title: 'พรีเซนต์ · Smart Light + Traffic', src: 'smartdata.webdemona.com', Deck: SmartLightTraffic, fullBleed: true },
  'ap-pole': { title: 'พรีเซนต์ · Smart Pole', src: 'smartdata.webdemona.com', Deck: SmartPole },
  'ap-led': { title: 'พรีเซนต์ · งานจอ LED', src: 'งานจอ LED ของเรา', Deck: LedDisplay },
  'ap-energy': { title: 'พรีเซนต์ · Smart Energy (Phase 2)', src: 'roadmap', Deck: SmartEnergy },
}
