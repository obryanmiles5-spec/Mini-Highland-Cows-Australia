import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#1C3B2B',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
          <path d="M8 9C4.5 7.5 2 9 2 11.5c0 1.5 1.5 2 2.5 1" />
          <path d="M16 9c3.5-1.5 6 0 6 2.5 0 1.5-1.5 2-2.5 1" />
          <path d="M8 9c1-2 3-3 4-3s3 1 4 3c1 1.5 1.5 3 1.5 5 0 3-2 5-5 5s-5-2-5-5c0-2 .5-3.5 1.5-5z" />
          <path d="M12 6c-1 2-2 3-3 4" />
          <path d="M12 6v4.5" />
          <path d="M12 6c1 2 2 3 3 4" />
          <ellipse cx="12" cy="16" rx="2.5" ry="1.5" />
          <circle cx="11" cy="16" r="0.5" fill="currentColor" />
          <circle cx="13" cy="16" r="0.5" fill="currentColor" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
