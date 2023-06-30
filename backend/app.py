from flask import Flask, jsonify
from flask_jwt_extended import JWTManager
from utils.connection import SingletonSQLAlchemy

app = Flask(__name__)

app.config ['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:segu2023@localhost/seguridad'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config["JWT_SECRET_KEY"] = "rTEZZlKH9GY5aYQmDRMetb0uhS16yiKWll8POc4wrgtQyPvirSs8YbZDSwT32di"
jwt = JWTManager(app)

db = SingletonSQLAlchemy(app)
