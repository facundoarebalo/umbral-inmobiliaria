export default function TarjetaPropiedad({ propiedad }) {
  const { identificador, operacion, tipo, ubicacion, nombre, dormitorios, banos, superficie, precio, imagen, descripcionImagen } = propiedad;
  const tipoDePropiedad = tipo === 'ph' ? 'PH' : tipo[0].toUpperCase() + tipo.slice(1);

  return <article className="property-card transition-transform duration-300 hover:-translate-y-1">
    <a className="property-photo" href="#contacto" aria-label={`Consultar por ${nombre}`}>
      <img src={`https://images.unsplash.com/${imagen}?auto=format&fit=crop&w=1100&q=82`} alt={descripcionImagen} loading="lazy" />
      <span className={`property-tag${operacion === 'alquiler' ? ' property-tag-rent' : ''}`}>{operacion === 'venta' ? 'En venta' : 'En alquiler'}</span>
      <span className="property-number">U. {identificador}</span>
    </a>
    <div className="property-info">
      <div className="property-title-row"><div><p className="property-location">{ubicacion}</p><h3>{nombre}</h3></div><span className="property-type">{tipoDePropiedad}</span></div>
      <div className="property-meta"><span>{dormitorios} dormitorios</span><span>{banos} {banos === 1 ? 'baño' : 'baños'}</span><span>{superficie} m²</span></div>
      <div className="property-bottom"><strong>{precio}{operacion === 'alquiler' && <small> / mes</small>}</strong><a href="#contacto" className="arrow-link" aria-label={`Consultar por ${nombre}`}>↗</a></div>
    </div>
  </article>;
}
