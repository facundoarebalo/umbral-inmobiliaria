import TarjetaPropiedad from './PropertyCard.jsx';

export default function SeccionPropiedades({ propiedades, alLimpiarFiltros }) {
  return <section className="properties section-wrap mx-auto" id="propiedades" aria-labelledby="properties-title">
    <div className="section-topline"><p className="eyebrow"><span /> Selección umbral</p><span className="section-count">01 — 04</span></div>
    <div className="section-heading"><div><h2 id="properties-title">Propiedades que<br /><em>merecen una visita.</em></h2></div><p>Una selección cuidada para ayudarte a imaginar tu vida en un nuevo espacio.</p></div>
    <div className="property-grid grid grid-cols-1 gap-x-6 gap-y-8 min-[581px]:grid-cols-2 min-[581px]:gap-y-11">{propiedades.map((propiedad) => <TarjetaPropiedad key={propiedad.identificador} propiedad={propiedad} />)}</div>
    {propiedades.length === 0 && <div className="empty-state"><p>No encontramos propiedades con esos filtros.</p><button className="text-link" type="button" onClick={alLimpiarFiltros}>Limpiar búsqueda <span aria-hidden="true">↗</span></button></div>}
    <div className="properties-foot"><span>Propiedades y valores ilustrativos</span><a href="#contacto" className="text-link">¿No encontrás lo que buscás? <span aria-hidden="true">↗</span></a></div>
  </section>;
}
