// src/components/ShadowDOMWrapper.tsx
import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

interface IShadowDOMWrapperProps {
  children: ReactNode;
}

function ShadowDOMWrapper({ children }: IShadowDOMWrapperProps): JSX.Element {
  const shadowHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadowHostRef.current) {
      const shadowHost = shadowHostRef.current;
      const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
      const container = document.createElement('div');
      shadowRoot.appendChild(container);

      // Adiciona estilos específicos ao Shadow DOM
      const style = document.createElement('style');
      style.textContent = `
        /* Seus estilos específicos do Shadow DOM */
        .my-component { color: red; }
      `;
      shadowRoot.appendChild(style);

      // Adiciona o conteúdo do componente ao Shadow DOM
      const childrenContainer = document.createElement('div');
      shadowRoot.appendChild(childrenContainer);

      // Cria a raiz e renderiza o React children dentro do Shadow DOM
      const root = ReactDOM.createRoot(childrenContainer);
      root.render(children);
    }
  }, [children]);

  return <div ref={shadowHostRef} />;
}

export default ShadowDOMWrapper;
