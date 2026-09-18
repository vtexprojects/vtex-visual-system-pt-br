import React from 'react';
export function DiagramTitle({ subtitle, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24, fontFamily: 'var(--font-brand)', ...style }}>
      <span style={{ color: '#F71963', fontWeight: 500, fontSize: 28 }}>VTEX</span>
      <span style={{ color: '#5B6E84', fontWeight: 500, fontSize: 16, letterSpacing: '0.02em', textTransform: 'uppercase' }}>{subtitle}</span>
    </div>
  );
}
