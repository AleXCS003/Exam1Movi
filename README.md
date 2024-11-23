# Proyecto generado con ionic

Esta es una aplicación desarrollada con **Ionic-Angular** que utiliza datos de varias API para mostrar libros con imágenes al azar de robots o perros, con funcionalidad adicional para guardar los datos en **Firebase**.
-Desarrollador:Alex Cardenas   
## 🚀 Funcionalidades del Proyecto

### Parte 1: Mostrar elementos
- La aplicación muestra **10 elementos**, cada uno compuesto por:
  - El título de un libro obtenido del endpoint propuesto en la gia :  
    `https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10`.
  - Una imagen al azar de un robot (endpoint: `https://robohash.org/"aqui-un-string"`) o un perro (endpoint: `https://dog.ceo/api/breed/a:enpinscher/images/random`).

### Parte 2: Guardar en Firebase
- Cada elemento tiene un botón que permite guardar en **Firebase**:
  - El nombre del libro.
  - La URL de la imagen (robot o perro).
      ![image](https://github.com/user-attachments/assets/88b6643f-1b38-476a-876e-ac8459173efa)

### El nombre de libro y la url del perrito o la url del robot en Firebase 
![image](https://github.com/user-attachments/assets/6b9711c1-7235-4993-b713-46bef7dfddd6)
-
-Aplicacion en la web
![image](https://github.com/user-attachments/assets/8d05722d-b5e1-4ab9-99ce-0530c8da3808)
 
### Parte 3: Creación de APK
- El proyecto incluye la creación de un archivo APK para dispositivos Android.
- Personalización del ícono y el **splash screen** con una imagen o foto específica.

---
![image](https://github.com/user-attachments/assets/77776d4d-010c-43ec-82d1-4fb5d5161bf3)


## ⚙️ Configuración del Proyecto

### Requisitos Previos
1. Node.js (v14 o superior) y npm instalados.
2. Ionic CLI instalado:
   ```bash
   npm install -g @ionic/cli
