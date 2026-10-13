export default function BuscadorPropiedades({ filtros, busquedaRealizada, mensajeResultados, alCambiarFiltro, alBuscar }) {
  return <section className="search-section" aria-label="Buscar propiedades">
    <form className="search-panel" onSubmit={(evento) => { evento.preventDefault(); alBuscar(); }}>
      <label className="search-field"><span>Operación</span><select name="operacion" aria-label="Filtrar por operación" value={filtros.operacion} onChange={alCambiarFiltro}><option value="">Comprar o alquilar</option><option value="venta">Comprar</option><option value="alquiler">Alquilar</option></select></label>
      <label className="search-field"><span>Tipo de propiedad</span><select name="tipo" aria-label="Filtrar por tipo de propiedad" value={filtros.tipo} onChange={alCambiarFiltro}><option value="">Todos los tipos</option><option value="casa">Casa</option><option value="departamento">Departamento</option><option value="ph">PH</option></select></label>
      <label className="search-field search-field-location"><span>Ubicación</span><input name="ubicacion" type="search" placeholder="Barrio o localidad" autoComplete="off" value={filtros.ubicacion} onChange={alCambiarFiltro} /></label>
      <button className="search-button transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-umbral-accent" type="submit"><span aria-hidden="true">⌕</span> Buscar</button>
    </form>
    <p className="search-feedback" aria-live="polite">{busquedaRealizada ? mensajeResultados : ''}</p>
  </section>;
}
