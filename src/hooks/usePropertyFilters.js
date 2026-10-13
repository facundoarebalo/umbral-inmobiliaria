import { useMemo, useState } from 'react';
import { propiedades } from '../data/properties.js';

const normalizarTexto = (texto) => texto.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const filtrosIniciales = { operacion: '', tipo: '', ubicacion: '' };

export function useFiltrosPropiedades() {
  const [filtros, establecerFiltros] = useState(filtrosIniciales);
  const [busquedaRealizada, establecerBusquedaRealizada] = useState(false);

  const propiedadesFiltradas = useMemo(() => propiedades.filter((propiedad) =>
    (!filtros.operacion || propiedad.operacion === filtros.operacion)
      && (!filtros.tipo || propiedad.tipo === filtros.tipo)
      && (!filtros.ubicacion || normalizarTexto(propiedad.ubicacion).includes(normalizarTexto(filtros.ubicacion.trim())))), [filtros]);

  const actualizarFiltro = (evento) => {
    const { name: campo, value: valor } = evento.target;
    establecerFiltros((actuales) => ({ ...actuales, [campo]: valor }));
    establecerBusquedaRealizada(true);
  };

  const limpiarFiltros = () => {
    establecerFiltros(filtrosIniciales);
    establecerBusquedaRealizada(false);
  };

  const marcarBusqueda = () => establecerBusquedaRealizada(true);
  const mensajeResultados = propiedadesFiltradas.length === propiedades.length
    ? 'Mostrando todas las propiedades de muestra.'
    : `${propiedadesFiltradas.length} ${propiedadesFiltradas.length === 1 ? 'propiedad encontrada.' : 'propiedades encontradas.'}`;

  return { filtros, propiedadesFiltradas, busquedaRealizada, mensajeResultados, actualizarFiltro, limpiarFiltros, marcarBusqueda };
}
