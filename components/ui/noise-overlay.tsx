interface NoiseOverlayProps {
  opacity?: number
  zIndex?: number
  noiseImage?: string
}

export const NoiseOverlay = ({
  opacity = 0.1,
  zIndex = 20,
  noiseImage = 'https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png'
}: NoiseOverlayProps) => (
  <div
    className={`absolute -inset-1/2 size-[200%] animate-noise`}
    style={{ opacity, zIndex }}
  >
    <div
      style={{
        background: `url("${noiseImage}") repeat 0 0`,
        inset: '-200%',
        width: '400%',
        height: '400%',
        position: 'absolute',
        willChange: 'transform'
      }}
    />
  </div>
)
