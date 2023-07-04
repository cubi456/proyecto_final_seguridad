from model.solicitud import Solicitud
from utils.connection import SingletonSQLAlchemy
from sqlalchemy import select
from utils.logs import log

class SolicitudMapper:
    def InsertSolicitud(self,solicitud):
        log("Se va a realizar un INSERT en la tabla SOLICITUD")
        SingletonSQLAlchemy.get_instance().db.session.add(solicitud)
        SingletonSQLAlchemy.get_instance().db.session.commit()
        log("Se va a realizo con exito el INSERT de la solicitud "+ str(solicitud.id))
        
    def RecuperarSolicitud(self,solicitud_id) -> Solicitud:
        log("Se procede a recuperar la solicitud con id "+str(solicitud_id))
        stmt = select(Solicitud).where(Solicitud.id == solicitud_id)
        toReturn = SingletonSQLAlchemy.get_instance().db.session.query(Solicitud).from_statement(stmt).one()
        log("Se recupera con exito la solicitud con id "+str(solicitud_id))
        return toReturn
    
    def ActualizarEstadoSolicitud(self,solicitud:Solicitud):
        log("Se procede a actualizar el ESTADO de la solicitud "+str(solicitud.id)+" a PROCESADO")
        solicitud.estado = "PROCESADO"
        SingletonSQLAlchemy.get_instance().db.session.commit()
        log("Se pudo actualizar con exito el ESTADO de la solicitud "+str(solicitud.id))
    