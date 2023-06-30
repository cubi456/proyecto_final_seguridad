
from app import app
from utils.connection import SingletonSQLAlchemy
from controllers.solicitud_controller import solicitudController
 
if __name__ == '__main__':
    app.register_blueprint(solicitudController)
    app.run(debug=True)

with app.app_context():
    SingletonSQLAlchemy.get_instance().db.create_all()