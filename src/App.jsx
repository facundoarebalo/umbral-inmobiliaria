import SeccionNosotros from './components/AboutSection.jsx';
import SeccionContacto from './components/ContactSection.jsx';
import PieDePagina from './components/Footer.jsx';
import Encabezado from './components/Header.jsx';
import SeccionPrincipal from './components/HeroSection.jsx';
import SeccionPropiedades from './components/PropertiesSection.jsx';
import BuscadorPropiedades from './components/PropertySearch.jsx';
import { useFiltrosPropiedades } from './hooks/usePropertyFilters.js';

export default function Aplicacion() {
  const { filtros, propiedadesFiltradas, busquedaRealizada, mensajeResultados, actualizarFiltro, limpiarFiltros, marcarBusqueda } = useFiltrosPropiedades();

  return <>
    <Encabezado />
    <main>
      <SeccionPrincipal />
      <BuscadorPropiedades filtros={filtros} busquedaRealizada={busquedaRealizada} mensajeResultados={mensajeResultados} alCambiarFiltro={actualizarFiltro} alBuscar={marcarBusqueda} />
      <SeccionPropiedades propiedades={propiedadesFiltradas} alLimpiarFiltros={limpiarFiltros} />
      <SeccionNosotros />
      <SeccionContacto />
    </main>
    <PieDePagina />
  </>;
}
