from utils.connection import SingletonSQLAlchemy

db = SingletonSQLAlchemy.get_instance().db

class Solicitud(db.Model):
    id = db.Column('solicitud_id',db.Integer,primary_key = True) 
    dni = db.Column(db.String(10))
    nro_tramite = db.Column(db.String(12))
    fecha_solicitud = db.Column(db.Date())
    estado = db.Column(db.String(30))
    
    def __init__(self, dni, nro_tramite, fecha_solicitud,estado):
        self.dni = dni
        self.nro_tramite = nro_tramite
        self.fecha_solicitud = fecha_solicitud
        self.estado = estado