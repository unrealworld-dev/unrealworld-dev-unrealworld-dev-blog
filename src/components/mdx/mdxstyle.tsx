import React from 'react';

interface NoteBlockProps {
  children: React.ReactNode;
}

export const NoteBlock: React.FC<NoteBlockProps> = ({ children }) => {
  return (
    <div style={{ borderLeft: '4px solid #5c6ac4', paddingLeft: '1rem', backgroundColor: '#f5f7ff', marginBottom: '1rem' }}>
      <strong>NOTE:</strong>
      <p>{children}</p>
    </div>
  );
};