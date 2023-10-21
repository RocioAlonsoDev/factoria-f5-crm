import CardStatsAtom from "./CardStatsAtom";

export default function RequirementsStatusStats({ counts }) {
    return (
      <div className="flex flex-wrap">
        <CardStatsAtom
          statSubtitle="Completos"
          statTitle={counts.completos}
          
          statIconImage='' // Reemplaza con el ícono deseado
        />
        <CardStatsAtom
          statSubtitle="No Acabados"
          statTitle={counts.noAcabados}
          
          statIconImage='' // Reemplaza con el ícono deseado
        />
        <CardStatsAtom
          statSubtitle="Sin Comenzar"
          statTitle={counts.sinComenzar}
          
          statIconImage='' // Reemplaza con el ícono deseado
        />
        <CardStatsAtom
          statSubtitle="Faltan Enlaces"
          statTitle={counts.faltanEnlaces}
          
          statIconImage='' // Reemplaza con el ícono deseado
        />
      </div>
    );
  }