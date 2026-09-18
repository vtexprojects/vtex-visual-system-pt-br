import React from 'react';
const items = {
  native:   { bg: '#FFC4DD', border: '1.5px solid #F719631A', label: 'VTEX native (OOTB)' },
  custom:   { bg: '#F6F7F9', border: '1px solid #14203233', label: 'Custom app / VTEX IO' },
  external: { bg: '#5B6E84', border: 'none', label: 'Non-VTEX / external' },
  middleware: { bg: '#2C4872', border: 'none', label: 'Middleware / integration' },
};
export function DiagramLegend({ kinds = ['native', 'custom', 'external', 'middleware'], style }) {
  return (
    <div style={{ display: 'flex', gap: 20, marginTop: 16, fontSize: 12, color: '#5B6E84', alignItems: 'center', flexWrap: 'wrap', fontFamily: 'var(--font-brand)', ...style }}>
      {kinds.map((k) => (
        <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 14, height: 14, borderRadius: 3, background: items[k].bg, border: items[k].border }}></span>
          {items[k].label}
        </span>
      ))}
    </div>
  );
}
