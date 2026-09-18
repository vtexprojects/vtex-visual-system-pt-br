import React from 'react';
export function NoteBox({ children, style }) {
  return (
    <div style={{ border: '1.5px solid #F71963', borderRadius: 8, padding: '10px 16px', marginTop: 24, fontSize: 13, color: '#5B6E84', lineHeight: 1.5, fontFamily: 'var(--font-brand)', ...style }}>
      <b style={{ color: '#F71963' }}>Note: </b>{children}
    </div>
  );
}
