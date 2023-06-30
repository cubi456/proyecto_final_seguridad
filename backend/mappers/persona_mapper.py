
from model.persona import Persona
from utils.connection import SingletonSQLAlchemy
from sqlalchemy import select

class PersonaMapper:
    def getPersona(self,dni,nro_tramite) -> Persona: 
            stmt = select(Persona).where(Persona.dni == dni and Persona.nro_tramite == nro_tramite)
            return SingletonSQLAlchemy.get_instance().db.session.query(Persona).from_statement(stmt).one()