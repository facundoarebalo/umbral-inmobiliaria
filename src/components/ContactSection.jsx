import { useState } from 'react';

export default function SeccionContacto() {
  const [formularioEnviado, establecerFormularioEnviado] = useState(false);

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    establecerFormularioEnviado(true);
  };

  return <section className="contact-section section-wrap mx-auto" id="contacto" aria-labelledby="contact-title">
    <div className="contact-heading"><p className="eyebrow"><span /> Estamos para ayudarte</p><h2 id="contact-title">El próximo paso<br /><em>lo damos juntos.</em></h2><p>Contanos qué estás buscando y nos ponemos en contacto.</p><div className="contact-details"><span>Atención personalizada</span><span>Lunes a viernes · 9 a 18 h</span></div></div>
    <form className="contact-form" onSubmit={enviarFormulario}>
      <label>Tu nombre<input name="nombre" type="text" placeholder="¿Cómo te llamás?" required /></label><label>Tu email<input name="correo" type="email" placeholder="nombre@ejemplo.com" required /></label>
      <label>¿Qué te interesa?<select name="interes"><option>Comprar una propiedad</option><option>Alquilar una propiedad</option><option>Vender mi propiedad</option><option>Otro motivo</option></select></label>
      <label>Tu mensaje<textarea name="mensaje" rows="3" placeholder="Contanos un poco más" /></label><button className="submit-button transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-umbral-accent" type="submit">Enviar consulta <span aria-hidden="true">↗</span></button>
      <p className={`form-note${formularioEnviado ? ' is-success' : ''}`} aria-live="polite">{formularioEnviado ? '¡Gracias! Esta demo no envía datos; conectá el formulario al contacto de la inmobiliaria.' : 'Formulario de demostración: no envía datos.'}</p>
    </form>
  </section>;
}
