import { useState } from 'react';
import Marca from './Brand.jsx';

const navegacion = [['Propiedades', '#propiedades'], ['Nosotros', '#nosotros'], ['Contacto', '#contacto']];

export default function Encabezado() {
  const [menuAbierto, establecerMenuAbierto] = useState(false);
  const cerrarMenu = () => establecerMenuAbierto(false);

  return <header className="site-header">
    <Marca />
    <button className="menu-toggle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-umbral-accent" type="button" aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuAbierto} aria-controls="main-nav" onClick={() => establecerMenuAbierto((estaAbierto) => !estaAbierto)}><span /><span /></button>
    <nav className={`main-nav${menuAbierto ? ' is-open' : ''}`} id="main-nav" aria-label="Navegación principal">
      {navegacion.map(([etiqueta, destino]) => <a key={destino} href={destino} onClick={cerrarMenu}>{etiqueta}</a>)}
      <a className="nav-cta" href="#contacto" onClick={cerrarMenu}>Quiero vender</a>
    </nav>
  </header>;
}
