from utils.connection import SingletonSQLAlchemy
from sqlalchemy.dialects.mysql import LONGTEXT

db = SingletonSQLAlchemy.get_instance().db

class Persona(db.Model):
    dni = db.Column(db.Integer,primary_key = True)
    nro_tramite = db.Column(db.String(11))
    sexo = db.Column(db.String(1))
    nacionalidad = db.Column(db.String(25))
    fecha_nacimiento = db.Column(db.Date())
    calle = db.Column(db.String(50))
    calle_nro = db.Column(db.Integer)
    barrio = db.Column(db.String(50))
    piso = db.Column(db.Integer)
    departamento = db.Column(db.String(5))
    ciudad = db.Column(db.String(50))
    provincia = db.Column(db.String(50))
    persona_foto = db.Column(LONGTEXT)
    
    def __init__(self, dni, nro_tramite, sexo, nacionalidad, fecha_nacimiento, calle, calle_nro, barrio, piso, departamento, ciudad, provincia, persona_foto):
        self.dni = dni
        self.nro_tramite = nro_tramite
        self.sexo = sexo
        self.nacionalidad = nacionalidad
        self.fecha_nacimiento = fecha_nacimiento
        self.calle = calle
        self.calle_nro = calle_nro
        self.barrio = barrio
        self.piso = piso
        self.departamento = departamento
        self.ciudad = ciudad
        self.provincia = provincia
        self.persona_foto = persona_foto
        
    @property
    def serialize(self):
       return {
            'dni':self.dni,
            'sexo':self.sexo,
            'nacionalidad':self.nacionalidad,
            'fecha_nacimiento':self.fecha_nacimiento.strftime("%m/%d/%Y"),
            'calle':self.calle,
            'calle_nro':self.calle_nro,
            'barrio':self.barrio,
            'piso':self.piso,
            'departamento':self.departamento,
            'ciudad':self.ciudad,
            'provincia':self.provincia
       }