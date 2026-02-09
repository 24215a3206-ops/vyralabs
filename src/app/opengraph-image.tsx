import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vyra Labs — Elite Digital Product Studio'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                {/* Background gradient */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '40%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #0066FF 0%, #0052CC 100%)',
                        opacity: 0.05,
                        borderRadius: '0 0 0 100%',
                    }}
                />

                {/* Logo */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '12px',
                            background: '#0066FF',
                            marginRight: '20px',
                        }}
                    />
                    <div
                        style={{
                            fontSize: '32px',
                            fontWeight: 600,
                            color: '#0A0A0A',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Vyra Labs
                    </div>
                </div>

                {/* Main heading */}
                <div
                    style={{
                        fontSize: '72px',
                        fontWeight: 700,
                        color: '#0A0A0A',
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        maxWidth: '800px',
                        letterSpacing: '-0.03em',
                    }}
                >
                    Where vision meets velocity.
                </div>

                {/* Subheading */}
                <div
                    style={{
                        fontSize: '32px',
                        color: '#404040',
                        lineHeight: 1.5,
                        maxWidth: '700px',
                    }}
                >
                    Elite digital products built with founder-level clarity, world-class design, and bulletproof engineering.
                </div>

                {/* Bottom tag */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '60px',
                        left: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '20px',
                        color: '#808080',
                    }}
                >
                    <div
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#0066FF',
                            marginRight: '12px',
                        }}
                    />
                    vyralabs.systems
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
