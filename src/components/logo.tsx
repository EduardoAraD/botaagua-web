import logoPng from '../assets/logo.png';

export function Logo() {
  return (
    // biome-ignore lint/performance/noImgElement: Using an image for the logo
    <img
      alt="Botaagua FC"
      src={logoPng}
      style={{ width: '120px', height: 'auto' }}
    />
  )
}