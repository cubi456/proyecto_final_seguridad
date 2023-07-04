import base64
from model.solicitud import Solicitud
from mappers.persona_mapper import PersonaMapper
from .face_recognition_service import FaceRecognitionService

class RostroService:
    
    __personaMapper = PersonaMapper()
    __faceRecognitionService = FaceRecognitionService()
     
    def compararRostros(self,rostro_base64,solicitud:Solicitud):
        persona = self.__personaMapper.getPersona(solicitud.dni,solicitud.nro_tramite)
        # Convertir la imagen de base64 a formato PNG
        image_data = base64.b64decode(rostro_base64)
        image2_data = base64.b64decode(persona.persona_foto)
        if(self.__faceRecognitionService.compareFaces(image_data,image2_data)):
            return persona
        else:
            raise Exception("No coincide el rostro de la persona con DNI "+str(solicitud.dni)+" con el recibido en la solicitud.")