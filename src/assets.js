// Resolve a public/ asset path against Vite's base ('./') so it works both in
// dev and in the static dist/ build dropped on any host.
export const asset = (p) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

export const IMG = {
  egat: asset('images/about/EGAT.jpg'),
  t5AphiwatCentralTerminal: asset('images/about/T5_aphiwat_central_terminal.jpg'),
  mmth: asset('images/about/MMTH.jpg'),
  toa: asset('images/about/TOA.jpg'),
  huaykwang: asset('images/about/huaykwang.jpg'),
  panasonic: asset('images/about/panasonic.jpg'),
  somapaFifa: asset('images/about/somapa_fifa.jpg'),
  smtMachine: asset('images/about/SMT_Machine_01.jpg'),
  qcProcess: asset('images/about/QC_Process_01.jpg'),
  tisiCert: asset('images/about/TISI_certificate_1955-2551.jpg'),
  emergencyHero: asset('images/about/cover_hero.png'),
  emergencyEicDashboard: asset('images/about/cover_hero.jpg'),
  ledSign: asset('images/led/led_sign.png'),
  fallDetection: asset('images/elderly-care/radar-fall-how.png'),
  trafficHero: asset('images/smart_traffic/slide01-hero.png'),
  smartlightScreen1: asset('images/smartlight/Screen1.webp'),
  smartPolePhoto: asset('images/smartlight/installation/IMG_5052.jpeg'),

  // CodeCube project photos (real screens, replace old slide placeholders)
  exatExpresswayMap: asset('images/about/15_expressway_iot.jpg'),
  ojaBigdataDashboard: asset(
    'images/about/codecube/project_oja_bigdata_dashboard.jpg',
  ),
  catTelecom: asset('images/about/codecube/CAT.jpg'),
  tescoLotusMobileApp: asset('images/about/codecube/tesco_lotus.jpg'),

  codecubeLogo: asset('images/about/logos/codecube_logo.png'),
  gismoLion: asset('images/about/logos/gismo_lion.png'),

  // SmartPole software platform (หน้าจอจริงจากทีม dev — เบลอข้อมูล sensitive แล้ว)
  spMap: asset('images/smartpole/map-command-center.png'),
  spBudget: asset('images/smartpole/energy-budget.png'),
  spQuality: asset('images/smartpole/quality-telemetry.png'),
  spQualityRange: asset('images/smartpole/quality-range.png'),
  spSun: asset('images/smartpole/sun-events.png'),
  spDevices: asset('images/smartpole/device-inventory.png'),
  spNotify: asset('images/smartpole/notifications.png'),
  spRoles: asset('images/smartpole/role-management.png'),

  solarStyle: asset('images/solar/solar-street-light-style.png'),
}

// Reference-customer logo wall (Software / CodeCube side) — order is display
// order, most-recognizable names first.
export const CLIENT_LOGOS = [
  {
    name: 'การทางพิเศษแห่งประเทศไทย (EXAT)',
    src: asset('images/about/logos/client_exat.png'),
  },
  { name: 'GISTDA', src: asset('images/about/logos/client_gistda.png') },
  {
    name: 'NT (โทรคมนาคมแห่งชาติ)',
    src: asset('images/about/logos/client_nt_national_telecom.png'),
  },
  {
    name: 'CAT Telecom',
    src: asset('images/about/logos/client_cat_telecom.png'),
  },
  {
    name: 'การประปานครหลวง (MWA)',
    src: asset('images/about/logos/client_mwa.png'),
  },
  { name: 'dtac', src: asset('images/about/logos/client_dtac.png') },
  { name: 'MCOT', src: asset('images/about/logos/client_mcot.png') },
  {
    name: 'กรมอนามัย',
    src: asset('images/about/logos/client_dept_of_health.png'),
  },
  {
    name: 'กรมคุมประพฤติ',
    src: asset('images/about/logos/client_dept_of_probation.png'),
  },
  { name: 'OJA', src: asset('images/about/logos/client_oja.png') },
  { name: 'OIC / CPB', src: asset('images/about/logos/client_oic_cpb.png') },
  {
    name: 'Tesco Lotus',
    src: asset('images/about/logos/client_tesco_lotus.png'),
  },
  {
    name: 'MK Restaurants',
    src: asset('images/about/logos/client_mk_restaurants.png'),
  },
  { name: 'Yayoi', src: asset('images/about/logos/client_yayoi.png') },
  {
    name: 'True Digital Park',
    src: asset('images/about/logos/client_true_digital_park.png'),
  },
  {
    name: 'Index Creative Village',
    src: asset('images/about/logos/client_index_creative_village.png'),
  },
  {
    name: 'Daily News',
    src: asset('images/about/logos/client_daily_news.png'),
  },
  {
    name: 'FN (หนอมรอย)',
    src: asset('images/about/logos/client_fn_nomaroi.png'),
  },
  {
    name: '555 Paper Plus',
    src: asset('images/about/logos/client_555_paperplus.png'),
  },
  {
    name: 'Family Amusement',
    src: asset('images/about/logos/client_family_amusement.png'),
  },
  {
    name: 'Fun Planet',
    src: asset('images/about/logos/client_fun_planet.png'),
  },
  { name: 'Fun Festa', src: asset('images/about/logos/client_fun_festa.png') },
  { name: 'Cute Shop', src: asset('images/about/logos/client_cute_shop.png') },
]

// Reference-customer logo wall (Hardware / Gismo lighting side) — order is
// display order, most-recognizable names first.
export const GISMO_LOGOS = [
  {
    name: 'EGAT (การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย)',
    src: asset('images/about/logos/gismo/client_egat.png'),
  },
  {
    name: 'PEA (การไฟฟ้าส่วนภูมิภาค)',
    src: asset('images/about/logos/gismo/client_pea.png'),
  },
  {
    name: 'กรมทางหลวง',
    src: asset('images/about/logos/gismo/client_dept_highways.png'),
  },
  { name: 'PTT', src: asset('images/about/logos/gismo/client_ptt.png') },
  { name: 'SCG', src: asset('images/about/logos/gismo/client_scg.png') },
  { name: 'Toyota', src: asset('images/about/logos/gismo/client_toyota.png') },
  { name: 'Honda', src: asset('images/about/logos/gismo/client_honda.png') },
  {
    name: 'Mitsubishi Motors',
    src: asset('images/about/logos/gismo/client_mitsubishi_motors.png'),
  },
  {
    name: 'Panasonic',
    src: asset('images/about/logos/gismo/client_panasonic.png'),
  },
  { name: 'Kubota', src: asset('images/about/logos/gismo/client_kubota.png') },
  {
    name: 'Sumitomo Rubber',
    src: asset('images/about/logos/gismo/client_sumitomo_rubber.png'),
  },
  {
    name: 'Bangkok Glass',
    src: asset('images/about/logos/gismo/client_bangkok_glass.png'),
  },
  { name: 'Esso', src: asset('images/about/logos/gismo/client_esso.png') },
  { name: 'Kao', src: asset('images/about/logos/gismo/client_kao.png') },
  {
    name: 'PepsiCo',
    src: asset('images/about/logos/gismo/client_pepsico.png'),
  },
  {
    name: 'Fujikura',
    src: asset('images/about/logos/gismo/client_fujikura.png'),
  },
  { name: 'Hana', src: asset('images/about/logos/gismo/client_hana.png') },
  { name: 'NHK', src: asset('images/about/logos/gismo/client_nhk.png') },
  {
    name: 'Kantana',
    src: asset('images/about/logos/gismo/client_kantana.png'),
  },
  { name: 'CCH', src: asset('images/about/logos/gismo/client_cch.png') },
  { name: 'PDI', src: asset('images/about/logos/gismo/client_pdi.png') },
]

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
