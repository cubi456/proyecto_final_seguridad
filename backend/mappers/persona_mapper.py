
from model.persona import Persona
from utils.connection import SingletonSQLAlchemy
from sqlalchemy import select
from utils.logs import log

class PersonaMapper:
    def getPersona(self,dni,nro_tramite) -> Persona: 
            log("Se procede a recuperar a la PERSONA con DNI "+str(dni)+" y NUMERO DE TRAMITE "+str(nro_tramite))
            stmt = select(Persona).where(Persona.dni == dni and Persona.nro_tramite == nro_tramite)
            persona = SingletonSQLAlchemy.get_instance().db.session.query(Persona).from_statement(stmt).one()
            log("Se recupera con exito a la PERSONA con DNI "+str(dni)+" y NUMERO DE TRAMITE "+str(nro_tramite))
            return persona