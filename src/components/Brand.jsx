export default function Marca({ pie = false }) {
  return <a className={`brand${pie ? ' brand-footer' : ''} inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-umbral-accent`} href="#inicio" aria-label={pie ? 'Volver al inicio' : 'Umbral Inmobiliaria, inicio'}>
    <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 42 42" fill="none"><path d="M7 34V18.5L21 7l14 11.5V34M15 34V23h12v11M4 35.5h34" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
    <span className="brand-copy"><strong>umbral</strong><small>inmobiliaria</small></span>
  </a>;
}
