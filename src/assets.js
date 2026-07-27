// Resolve a public/ asset path against Vite's base ('./') so it works both in
// dev and in the static dist/ build dropped on any host.
export const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

export const IMG = {
  egat: asset('images/about/EGAT.jpg'),
  mmth: asset('images/about/MMTH.jpg'),
  toa: asset('images/about/TOA.jpg'),
  huaykwang: asset('images/about/huaykwang.jpg'),
  panasonic: asset('images/about/panasonic.jpg'),
  somapaFifa: asset('images/about/somapa_fifa.jpg'),
  smtMachine: asset('images/about/SMT_Machine_01.jpg'),
  qcProcess: asset('images/about/QC_Process_01.jpg'),
  tisiCert: asset('images/about/TISI_certificate_1955-2551.jpg'),
  expresswayIot: asset('images/about/15_expressway_iot.jpg'),
  justice: asset('images/about/09_justice.jpg'),
  emergencyHero: asset('images/about/cover_hero.png'),
  ledSign: asset('images/led/led_sign.png'),
  fallDetection: asset('images/elderly-care/radar-fall-how.png'),
  trafficHero: asset('images/smart_traffic/slide01-hero.png'),
  maptaphutEmergency: asset('images/about/13_maptaphut_emergency.jpg'),
  gistda: asset('images/about/11_gistda.jpg'),
  smartlightScreen1: asset('images/smartlight/Screen1.webp'),
  smartPolePhoto: asset('images/smartlight/installation/IMG_5052.jpeg'),
}

export const VID = {
  centralworld: asset('videos/centralworld_height.mp4'),
  centralworldPoster: asset('videos/centralworld_poster.jpg'),
  lpr: asset('videos/lpr-demo.mp4'),
  lprPoster: asset('videos/lpr-poster.jpg'),
  overheight: asset('videos/overheight_main.mp4'),
  overheightPoster: asset('videos/overheight_poster.jpg'),
  overheightScene: asset('videos/overheight_scene.mp4'),
  overheightScenePoster: asset('videos/overheight_scene_poster.jpg'),
  dashboard: asset('videos/0518.mp4'),
  dashboardPoster: asset('videos/0518_poster.jpg'),
  overheightDemo: asset('videos/overheight_demo.mp4'),
  overheightDemoPoster: asset('videos/overheight_demo_poster.jpg'),
  smtPcba: asset('videos/SMT_LED_PCBA_01.mp4'),
  smtPcbaPoster: asset('videos/SMT_LED_PCBA_01_poster.jpg'),
}
