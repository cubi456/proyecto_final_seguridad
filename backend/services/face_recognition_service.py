import face_recognition as fr
import io
from utils.logs import log

class FaceRecognitionService:
    def compareFaces(self,data1, data2):
        log("Inicia el proceso de deteccion de rostros")
        # Load the jpg files into numpy arrays
        image1 = self.__load_image(data1)
        image2 = self.__load_image(data2)
        log("Inicia el proceso de creacion de landmarks y encoding")
        # Get the face encodings for 1st face in each image file
        image1_encoding = self.__recuperar_encoding(image1)
        image2_encoding =  self.__recuperar_encoding(image2)
        log("Inicia el proceso de comparacion de encodings")
        try:
            # Compare faces and return True / False
            results = fr.compare_faces([image1_encoding], image2_encoding)    
            log("Finaliza el proceso de validacion de identidad")
            return results[0]    
        except:
            raise Exception("No se pudo verificar el rostro de la persona.") 
        
    def __load_image(self,data):
        try:
            return fr.load_image_file(io.BytesIO(data))
        except:
            raise Exception("No fue posible cargar la imagen del rostro")
    
    def __recuperar_encoding(self,image):
        try:
            encodings = fr.face_encodings(image)
        except:
            raise Exception("No fue posible procesar la imagen.") 
        if(len(encodings)>0):
            return encodings[0]
        else:
            raise Exception("No se pudo detectar ningun rostro.") 