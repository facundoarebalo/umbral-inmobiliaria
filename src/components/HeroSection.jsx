export default function SeccionPrincipal() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <img className="hero-image" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=88" alt="" fetchPriority="high" />
    <div className="hero-shade" />
    <div className="hero-content"><p className="eyebrow eyebrow-light"><span /> Encontrá tu próximo lugar</p><h1 id="hero-title">Un lugar para cada<br /><em>forma de vivir.</em></h1><p className="hero-intro">Te acompañamos a encontrar, comprar o alquilar con información clara y atención cercana.</p><a className="text-link text-link-light transition-transform duration-200 hover:translate-x-1" href="#propiedades">Explorar propiedades <span aria-hidden="true">↘</span></a></div>
    <div className="hero-index"><span>01</span> Hogares seleccionados</div>
  </section>;
}
