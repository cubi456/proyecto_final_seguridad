import base64
from PIL import Image
import zxing
import os
import io
from utils.logs import log

class DniService:
    def leerQrDni(self,dni_base64):
        log("Se inicia la lectura de QR de DNI.")
        self.__createTemporalImage(dni_base64)
        reader = zxing.BarCodeReader()
        barcode =  reader.decode('temp/temp.png')
        self.__removeFile()
        if(barcode.parsed):
            list = barcode.parsed.split("@")
            log("Se pudo leer con exito el QR del DNI de la PERSONA con DOCUMENTO "+list[4])
            return list
        else:
            raise Exception("No fue posible leer la imagen del DNI.")
    
    def __removeFile(self):
        if os.path.exists("temp/temp.png"):
            os.remove("temp/temp.png")
        else:
            print("The file does not exist")
    
    def __createTemporalImage(self,dni_base64):
        image_data = base64.b64decode(dni_base64)
        image = Image.open(io.BytesIO(image_data))
        image.save('temp/temp.png', 'PNG')