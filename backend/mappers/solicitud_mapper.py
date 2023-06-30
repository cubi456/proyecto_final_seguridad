from model.solicitud import Solicitud
from utils.connection import SingletonSQLAlchemy
from sqlalchemy import select

class SolicitudMapper:
    def InsertSolicitud(self,solicitud):
        SingletonSQLAlchemy.get_instance().db.session.add(solicitud)
        SingletonSQLAlchemy.get_instance().db.session.commit()
        
    def RecuperarSolicitud(self,solicitud_id) -> Solicitud:
        stmt = select(Solicitud).where(Solicitud.id == solicitud_id)
        return SingletonSQLAlchemy.get_instance().db.session.query(Solicitud).from_statement(stmt).one()
    
    def ActualizarEstadoSolicitud(self,solicitud:Solicitud):
        solicitud.estado = "PROCESADO"
        SingletonSQLAlchemy.get_instance().db.session.commit()
    