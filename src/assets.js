// Resolve a public/ asset path against Vite's base ('./') so it works both in
// dev and in the static dist/ build dropped on any host.
export const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

export const VID = {
  centralworld: asset('videos/centralworld_height.mp4'),
  centralworldPoster: asset('videos/centralworld_poster.jpg'),
  lpr: asset('videos/lpr-demo.mp4'),
  lprPoster: asset('videos/lpr-poster.jpg'),
  overheight: asset('videos/overheight_main.mp4'),
  overheightPoster: asset('videos/overheight_poster.jpg'),
  overheightScene: asset('videos/overheight_scene.mp4'),
  dashboard: asset('videos/0518.mp4'),
  dashboardPoster: asset('videos/0518_poster.jpg'),
  overheightDemo: asset('videos/overheight_demo.mp4'),
  overheightDemoPoster: asset('videos/overheight_demo_poster.jpg'),
}
