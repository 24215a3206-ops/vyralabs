import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0066FF',
          borderRadius: '22.5%',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70 20L120 70L70 120L20 70Z"
            stroke="white"
            strokeWidth="12"
            strokeLinejoin="miter"
            fill="none"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
