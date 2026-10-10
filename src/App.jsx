import { useMemo, useState } from 'react';
import './styles.css';

const properties = [
  { id: '014', operation: 'venta', type: 'casa', location: 'Yerba Buena · Tucumán', name: 'Casa de patio y galería', beds: 3, baths: 2, area: 180, price: 'USD 185.000', image: 'photo-1600585154340-be6161a56a0c', alt: 'Casa contemporánea con jardín y fachada clara' },
  { id: '022', operation: 'venta', type: 'departamento', location: 'Barrio Norte · San Miguel de Tucumán', name: 'Departamento con luz', beds: 2, baths: 1, area: 84, price: 'USD 129.000', image: 'photo-1600607687939-ce8a6c25118c', alt: 'Interior luminoso de un departamento moderno' },
  { id: '031', operation: 'alquiler', type: 'casa', location: 'Tafí Viejo · Tucumán', name: 'Casa entre árboles', beds: 3, baths: 2, area: 210, price: 'USD 1.100', image: 'photo-1600566753086-00f18fb6b3ea', alt: 'Living amplio conectado con un jardín' },
  { id: '037', operation: 'venta', type: 'ph', location: 'Lomas de Tafí · Tafí Viejo', name: 'PH renovado con terraza', beds: 2, baths: 1, area: 96, price: 'USD 98.000', image: 'photo-1600607687920-4e2a09cf159d', alt: 'Espacio interior renovado con materiales naturales' },
];

const normalizeText = (value) => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function Brand({ footer = false }) {
  return <a className={`brand${footer ? ' brand-footer' : ''}`} href="#inicio" aria-label={footer ? 'Volver al inicio' : 'Umbral Inmobiliaria, inicio'}>
    <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 42 42" fill="none"><path d="M7 34V18.5L21 7l14 11.5V34M15 34V23h12v11M4 35.5h34" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
    <span className="brand-copy"><strong>umbral</strong><small>inmobiliaria</small></span>
  </a>;
}

function PropertyCard({ property }) {
  const { id, operation, type, location, name, beds, baths, area, price, image, alt } = property;
  return <article className="property-card">
    <a className="property-photo" href="#contacto" aria-label={`Consultar por ${name}`}>
      <img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=1100&q=82`} alt={alt} loading="lazy" />
      <span className={`property-tag${operation === 'alquiler' ? ' property-tag-rent' : ''}`}>{operation === 'venta' ? 'En venta' : 'En alquiler'}</span>
      <span className="property-number">U. {id}</span>
    </a>
    <div className="property-info">
      <div className="property-title-row"><div><p className="property-location">{location}</p><h3>{name}</h3></div><span className="property-type">{type === 'ph' ? 'PH' : type[0].toUpperCase() + type.slice(1)}</span></div>
      <div className="property-meta"><span>{beds} dormitorios</span><span>{baths} {baths === 1 ? 'baño' : 'baños'}</span><span>{area} m²</span></div>
      <div className="property-bottom"><strong>{price}{operation === 'alquiler' && <small> / mes</small>}</strong><a href="#contacto" className="arrow-link" aria-label={`Consultar por ${name}`}>↗</a></div>
    </div>
  </article>;
}

function App() {
  const [filters, setFilters] = useState({ operation: '', type: '', location: '' });
  const [searched, setSearched] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const filteredProperties = useMemo(() => properties.filter((property) =>
    (!filters.operation || property.operation === filters.operation)
      && (!filters.type || property.type === filters.type)
      && (!filters.location || normalizeText(property.location).includes(normalizeText(filters.location.trim())))), [filters]);
  const feedback = filteredProperties.length === properties.length
    ? 'Mostrando todas las propiedades de muestra.'
    : `${filteredProperties.length} ${filteredProperties.length === 1 ? 'propiedad encontrada.' : 'propiedades encontradas.'}`;

  const updateFilter = (event) => {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
    setSearched(true);
  };
  const clearFilters = () => {
    setFilters({ operation: '', type: '', location: '' });
    setSearched(false);
  };

  return <>
    <header className="site-header">
      <Brand />
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} id="main-nav" aria-label="Navegación principal">
        {[['Propiedades', '#propiedades'], ['Nosotros', '#nosotros'], ['Contacto', '#contacto']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Quiero vender</a>
      </nav>
    </header>
    <main>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <img className="hero-image" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=88" alt="" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow eyebrow-light"><span /> Encontrá tu próximo lugar</p><h1 id="hero-title">Un lugar para cada<br /><em>forma de vivir.</em></h1><p className="hero-intro">Te acompañamos a encontrar, comprar o alquilar con información clara y atención cercana.</p><a className="text-link text-link-light" href="#propiedades">Explorar propiedades <span aria-hidden="true">↘</span></a></div>
        <div className="hero-index"><span>01</span> Hogares seleccionados</div>
      </section>
      <section className="search-section" aria-label="Buscar propiedades">
        <form className="search-panel" onSubmit={(event) => { event.preventDefault(); setSearched(true); }}>
          <label className="search-field"><span>Operación</span><select name="operation" aria-label="Filtrar por operación" value={filters.operation} onChange={updateFilter}><option value="">Comprar o alquilar</option><option value="venta">Comprar</option><option value="alquiler">Alquilar</option></select></label>
          <label className="search-field"><span>Tipo de propiedad</span><select name="type" aria-label="Filtrar por tipo de propiedad" value={filters.type} onChange={updateFilter}><option value="">Todos los tipos</option><option value="casa">Casa</option><option value="departamento">Departamento</option><option value="ph">PH</option></select></label>
          <label className="search-field search-field-location"><span>Ubicación</span><input name="location" type="search" placeholder="Barrio o localidad" autoComplete="off" value={filters.location} onChange={updateFilter} /></label>
          <button className="search-button" type="submit"><span aria-hidden="true">⌕</span> Buscar</button>
        </form>
        <p className="search-feedback" aria-live="polite">{searched ? feedback : ''}</p>
      </section>
      <section className="properties section-wrap" id="propiedades" aria-labelledby="properties-title">
        <div className="section-topline"><p className="eyebrow"><span /> Selección umbral</p><span className="section-count">01 — 04</span></div>
        <div className="section-heading"><div><h2 id="properties-title">Propiedades que<br /><em>merecen una visita.</em></h2></div><p>Una selección cuidada para ayudarte a imaginar tu vida en un nuevo espacio.</p></div>
        <div className="property-grid">{filteredProperties.map((property) => <PropertyCard key={property.id} property={property} />)}</div>
        {filteredProperties.length === 0 && <div className="empty-state"><p>No encontramos propiedades con esos filtros.</p><button className="text-link" type="button" onClick={clearFilters}>Limpiar búsqueda <span aria-hidden="true">↗</span></button></div>}
        <div className="properties-foot"><span>Propiedades y valores ilustrativos</span><a href="#contacto" className="text-link">¿No encontrás lo que buscás? <span aria-hidden="true">↗</span></a></div>
      </section>
      <section className="about-band" id="nosotros" aria-labelledby="about-title">
        <div className="about-image"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=82" alt="Espacio cálido y sereno en un hogar" loading="lazy" /><span>Espacios para vivirlos</span></div>
        <div className="about-copy"><p className="eyebrow eyebrow-light"><span /> Sobre umbral</p><h2 id="about-title">La búsqueda también<br />puede sentirse <em>bien.</em></h2><p>Creemos que elegir una propiedad merece tiempo, escucha y buenos datos. Por eso acompañamos cada paso con una mirada personal y transparente.</p><a className="text-link text-link-light" href="#contacto">Conocé cómo trabajamos <span aria-hidden="true">↗</span></a><div className="about-points"><span><b>01</b> Escuchamos</span><span><b>02</b> Seleccionamos</span><span><b>03</b> Te acompañamos</span></div></div>
      </section>
      <section className="contact-section section-wrap" id="contacto" aria-labelledby="contact-title">
        <div className="contact-heading"><p className="eyebrow"><span /> Estamos para ayudarte</p><h2 id="contact-title">El próximo paso<br /><em>lo damos juntos.</em></h2><p>Contanos qué estás buscando y nos ponemos en contacto.</p><div className="contact-details"><span>Atención personalizada</span><span>Lunes a viernes · 9 a 18 h</span></div></div>
        <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}>
          <label>Tu nombre<input name="name" type="text" placeholder="¿Cómo te llamás?" required /></label><label>Tu email<input name="email" type="email" placeholder="nombre@ejemplo.com" required /></label>
          <label>¿Qué te interesa?<select name="interest"><option>Comprar una propiedad</option><option>Alquilar una propiedad</option><option>Vender mi propiedad</option><option>Otro motivo</option></select></label>
          <label>Tu mensaje<textarea name="message" rows="3" placeholder="Contanos un poco más" /></label><button className="submit-button" type="submit">Enviar consulta <span aria-hidden="true">↗</span></button>
          <p className={`form-note${formSent ? ' is-success' : ''}`} aria-live="polite">{formSent ? '¡Gracias! Esta demo no envía datos; conectá el formulario al contacto de la inmobiliaria.' : 'Formulario de demostración: no envía datos.'}</p>
        </form>
      </section>
    </main>
    <footer className="site-footer"><Brand footer /><p>Encontrar un lugar es encontrar una posibilidad.</p><span className="footer-legal">Propiedades ficticias</span></footer>
  </>;
}

export default App;
