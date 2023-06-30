from datetime import date
import datetime
from flask import jsonify

from flask_jwt_extended import create_access_token
from .rostro_service import RostroService
from .dni_service import DniService
from mappers.solicitud_mapper import SolicitudMapper
from model.solicitud import Solicitud

class SolicitudService:
    
    __solicitudMapper = SolicitudMapper()
    __dniService = DniService()
    __rostroService = RostroService()
    
    def postDni(self,request):
        request_data = request.get_json()
        image_base64 = request_data.get('dni')
        datos_dni = self.__dniService.leerQrDni(image_base64)
        solicitud = Solicitud(datos_dni[4],datos_dni[0],date.today(),'PENDIENTE')
        self.__solicitudMapper.InsertSolicitud(solicitud)	
        token = create_access_token(identity=solicitud.id,expires_delta=datetime.timedelta(minutes=10))
        return jsonify({'token':token}), 200
    
    def postSelfie(self,request,solicitud_id):
        # Obtener los datos JSON del cuerpo de la solicitud
        request_data = request.get_json()
        # Obtener el valor de la clave 'image' del JSON
        image_base64 = request_data.get('image')
        solicitud =  self.__solicitudMapper.RecuperarSolicitud(solicitud_id)
        persona = self.__rostroService.compararRostros(image_base64,solicitud)
        self.__solicitudMapper.ActualizarEstadoSolicitud(solicitud)
        return jsonify(persona.serialize), 200

        