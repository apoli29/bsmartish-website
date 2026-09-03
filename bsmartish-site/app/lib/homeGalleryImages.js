// Fotografias de projetos de renovação urbana já concluídos pela BSMARTISH.
// Usadas no carrossel da homepage (CarouselSection) e declaradas como `photo`
// da organização no schema markup (lib/schema.js).
// Não têm metadados individuais — nenhuma está associada a um imóvel do portefólio.

export const HOME_GALLERY_FILES = [
  'amh5svunor2lamgcbekb.webp',
  'qwoegxcqsa.webp',
  'ny9iigp3wuyi7a5otvbo.webp',
  'utyfcnb.webp',
  'vbysrw6jgohnpnfhp0yn.webp',
  'retogrkldbads.webp',
  'fhgertdcvv.webp',
  'ffqz1kq3bjh4xr9egm6y.webp',
  'rwtibvm.webp',
  'etywsf.webp',
  'qvptaroidm60lupaeoik.webp',
  'fsggrhervj.webp',
  'swdeohewhu.webp',
  'rewoitjgeba.webp',
  'hjewfpvbr.webp',
  'vdfnsjknw6.webp',
  'ytfvkjlh.webp',
  'asccnefg.webp',
  'sjnvwjerv.webp',
  'pj6vrlrakjglreckwuhn.webp',
  'cn1lc7yfim415qmsgoqh.webp',
  'ertvmsxzv.webp',
]

export const HOME_GALLERY_DIR = '/images/website.images/Home/sec.2'

export const HOME_GALLERY_SRCS = HOME_GALLERY_FILES.map(
  (f) => `${HOME_GALLERY_DIR}/${f}`
)
