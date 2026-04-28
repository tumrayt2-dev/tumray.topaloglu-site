import { ImageResponse } from 'next/og'

export const alt = 'Tumray Topaloğlu — Mobile Game & Web Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a0f08 60%, #2a160a 100%)',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '96px',
              height: '96px',
              borderRadius: '22px',
              background: '#FF6A00',
              fontSize: '52px',
              fontWeight: 700,
              letterSpacing: '-2px',
            }}
          >
            TT
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '22px',
              color: '#a3a3a3',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            <span>Garaj Bilişim</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 600,
              letterSpacing: '-2px',
              lineHeight: 1.05,
            }}
          >
            Tumray Topaloğlu
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#d4d4d4',
              letterSpacing: '-1px',
            }}
          >
            Mobile Game & Web Developer
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '22px',
            color: '#a3a3a3',
          }}
        >
          <span>tumraytopaloglu.com</span>
          <span>Trakyaoto · Ember Wings · Taboo Rush · Emojice</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
