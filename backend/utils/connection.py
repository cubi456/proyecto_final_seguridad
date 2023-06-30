from flask_sqlalchemy import SQLAlchemy

class SingletonSQLAlchemy:
    __instance = None

    @staticmethod
    def get_instance(app=None):
        """Obtiene una instancia única de SQLAlchemy"""
        if SingletonSQLAlchemy.__instance is None:
            SingletonSQLAlchemy(app)
        return SingletonSQLAlchemy.__instance

    def __init__(self, app=None):
        """Constructor privado que se llama una vez para crear la instancia"""
        if SingletonSQLAlchemy.__instance is not None:
            raise Exception("Esta clase es un Singleton. Usa el método get_instance() para obtener una instancia.")
        else:
            if app is not None:
                self.db = SQLAlchemy(app)
            else:
                self.db = SQLAlchemy()
            SingletonSQLAlchemy.__instance = self