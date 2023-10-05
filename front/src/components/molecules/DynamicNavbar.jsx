import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarAtom from '../atoms/NavbarAtom'; 

function App() {
  const menuOptionsHome = [
    { label: 'Inicio', to: '/' },
    { label: 'Jornadas de Selección', to: '/jornadas_seleccion' },
    { label: 'Puertas abiertas', to: '/puertas_abiertas' },
    
  ];

  const menuSelectionDay = [
    { label: 'Atrás', to: '/' },
    { label: 'Jornadas de puertas abiertas', to: '/puertas_abiertas' },
    // Otras opciones de menú específicas para la página "Acerca de"
  ];

  return (
    <Router>
      <Navbar menuOptions={menuOptionsHome} />
      {/* El resto de tu contenido y rutas */}
      <Switch>
        <Route path="/" exact>
          {/* Contenido de la página de inicio */}
        </Route>
        <Route path="/about">
          {/* Contenido de la página "Acerca de" */}
        </Route>
        <Route path="/contact">
          {/* Contenido de la página "Contacto" */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
