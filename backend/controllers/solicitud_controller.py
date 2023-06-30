
from flask import Blueprint,request
from flask_jwt_extended import get_jwt_identity, jwt_required

from services.solicitud_service import SolicitudService

solicitudController = Blueprint('solicitud',__name__)

solicitudService = SolicitudService()

@solicitudController.route('/dni', methods=['POST'])
def postDni():
    return solicitudService.postDni(request)

@solicitudController.route('/selfie', methods=['POST'])
@jwt_required()
def postSelfie():
    return solicitudService.postSelfie(request,get_jwt_identity())
