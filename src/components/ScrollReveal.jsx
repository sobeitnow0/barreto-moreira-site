import React from 'react';

/**
 * ScrollReveal wrapper component.
 * Garante que todo o conteúdo esteja sempre 100% visível imediatamente,
 * eliminando classes opacity-0 que causavam tela em branco no carregamento inicial.
 */
export function ScrollReveal({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
