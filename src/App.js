import './App.css';
import {Biografia} from "./componentes/Biografia"

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Carros Famosos</h1>
        <Biografia 
        nombre="mustan"
        pais="estados unidos de america"
        cargo="MuscleCar"
        empresa="ford Compani"
        biografia ="Ford Mustang es un vehículo histórico, un vehículo que se ha logrado mantener vigente en 57 años de vida e historia, tanto así que lleva seis años consecutivos colocándose como el auto deportivo más vendido en el mundo. Para conmemorar todos sus logros y el más reciente lanzamiento del nuevo Mustang Mach 1, Ford nos regala 10 datos importantes acerca del Pony Car por excelencia."
        imagen="mustang"
        />

        <Biografia 
        nombre="Maverick"
        pais="E.U. Brasil"
        cargo="MuscleCar"
        empresa="ford Compani"
        biografia ="A finales de los años 60, aún antes de la crisis del petróleo de la década siguiente, Ford de los Estados Unidos buscaba un coche compacto, barato y económico -por lo menos para los patrones del país- que pudiese hacer frente a la creciente demanda de coches europeos y japoneses. El modelo compacto que la firma tenía hasta entonces, el Falcon, no era tan compacto como se requería y ya estaba obsoleto. Aún más después de que la propia fábrica lanzó el moderno y muy exitoso Mustang en 1964. "
        imagen="maverick"
        />
        
        <Biografia 
        nombre="Chevrolet"
        pais="E.U."
        cargo="MuscleCar"
        empresa="Chevrolet Compani"
        biografia ="El Chevrolet Corvette es un automóvil deportivo producido por el fabricante estadounidense Chevrolet, división de General Motors (GM), desde 1953. Es fabricado actualmente en la planta de Bowling Green (Kentucky), donde también se encuentra el Museo Nacional del Corvette. Anteriormente era fabricado en Flint (Míchigan) y San Luis (Misuri). Fue el primer deportivo construido por la firma. "
        imagen="corvette"
        />

        <Biografia 
        nombre="W.V. sedan"
        pais="Alemania"
        cargo="sedan"
        empresa="W.V."
        biografia ="El Vocho tuvo una concepción muy especial, ya que su nacimiento estuvo enmarcado por guerras. Para conocer un poco sobre la historia de este peculiar auto es imposible no remitirse a la época previa a la Segunda Guerra Mundial y con ello a uno de los personajes enigmáticos en la historia de la humanidad: Adolfo Hitler"
        imagen="vocho"
        />

      </div>
    </div>
  );
}

export default App;
