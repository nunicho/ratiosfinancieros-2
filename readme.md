# **👨‍🎓 ALUMNO**
MAURICIO JAVIER ALONSO

# **🏫 Curso**
JAVASCRIPT  de Coderhouse

# **📚 Comisión**
64795


# **📊 El contexto en el que es útil este sistema**

Para poder entender el conexto en el que es útil el presente simulador, es necesario hacer una breve referencia a uno de los productos más importantes de la contabilidad: los **estados contables**.

Los estados contables son informes de importancia mayúscula porque:

- **Proporcionan claridad:** Muestran la situación financiera de la empresa.
- **Facilitan decisiones:** Ayudan a tomar decisiones informadas.
- **Aseguran cumplimiento:** Cumplen con normativas legales.
- **Apoyan la planificación:** Permiten hacer presupuestos y proyecciones.
- **Identifican riesgos:** Detectan problemas financieros a tiempo.

---

# **📑 La importancia de los ratios financieros**
Una de las tantas herramientas disponibles para el análisis de los estados contables son los **ratios financieros** 

Los **ratios financieros** derivados de los estados contables son indicadores clave que ayudan a evaluar la salud y desempeño financiero de una empresa. 

Los ratios son diversos y variados. Para este simulador se consideraron los siguientes indicadores:

### **Ratios de Liquidez:**
- **Ratio de Liquidez Corriente:** Evalúa la capacidad de la empresa para cubrir sus deudas a corto plazo usando activos corrientes.
- **Ratio de Liquidez Ácida:** Similar al Ratio de Liquidez Corriente, pero excluye las existencias para una evaluación más estricta.
- **Ratio de Disponibilidad de Tesorería:** Mide la capacidad de cubrir pasivos corrientes con inversiones a corto plazo y tesorería.
- **Ratio Días de Tesorería:** Calcula el número de días que la tesorería y las inversiones pueden cubrir los gastos operativos.

### **Ratios de Solvencia y Endeudamiento:**
- **Ratio de Solvencia:** Mide la proporción de activos totales en relación con el pasivo exigible, evaluando la capacidad de la empresa para cumplir con sus deudas a largo plazo.
- **Ratio de Endeudamiento:** Evalúa la proporción de deuda en relación con los recursos propios de la empresa.

### **Ratios de Rentabilidad:**
- **Ratio de Rentabilidad Económica de Activos (ROA):** Mide la eficiencia de la empresa en generar beneficios a partir de sus activos totales.
- **Ratio de Rentabilidad Financiera (ROE):** Evalúa la rentabilidad sobre el capital propio invertido.
- **Ratio de Rentabilidad Sobre el Capital Invertido (ROCE):** Mide la rentabilidad generada sobre el capital invertido en la empresa.

> Referencia teórica más amplia:  
> [https://www.escueladenegociosydireccion.com/revista/business/ratios-financieros-principales-tipos-como-aplicarlos/](https://www.escueladenegociosydireccion.com/revista/business/ratios-financieros-principales-tipos-como-aplicarlos/)

---

## ** Ejemplos de cálculos **

- **Liquidez corriente:** Activo corriente 5000 / Pasivo corriente 1750 => Ratio 2.86
- **Liquidez ácida:** (Activo corriente 7000 - Existencias 550)/ Pasivo corriente 1750 => Ratio 2.54
- **Ratio de disponibilidad de tesorería:** (Inversiones financieras a corto plazo 3000 + Tesorería 1500)/ Pasivo corriente 400 => Ratio  11.25
- **Liquidez días de tesorería:** (Inversiones financieras a corto plazo 3000 + Tesorería 1500)/ Gastos operativos 50000 => Ratio 32,85
- **Ratio de solvencia:** activo total 70000 / Pasivo exigible total 55000 => 1.27
- **Ratio de endeudamiento:** Pasivo exigible total 55000 / recursos propios 15000 =>3.67
- **Ratio ROA:** Benerificios antes de impuestos 30000 / activo total 70000 => 42.86%
- **Ratio ROE:** Benerificios neto después de intereses e impuestos 20000 / recursos propios 15000 => 133.33%
- **Ratio ROCE:** Beneficio de la explotación neto de impuestos 25000 / capital invertido 15000 => 166.67%

## 📝 **Cómo está estructurado el proyecto** 

El proyecto está estructurado en un archivo JavaScript, cuyo código q permite calcular y mostrar varios ratios financieros mediante un menú interactivo. El código de javascript se ejecuta al abrir en el navegador un archivo html.

A continuación, se describe la estructura del proyecto.


### 1. **Menú Principal (`mostrarRatios`)**
El menú principal es una función interactiva que ofrece al usuario las siguientes opciones:

- **Ratios de Liquidez Corriente:**  
  El usuario puede seleccionar entre varios ratios relacionados con la liquidez:  
  - Ratio de Liquidez Corriente
  - Ratio de Liquidez Ácida
  - Ratio de Disponibilidad de Tesorería
  - Ratio de Días de Tesorería  
  También incluye un glosario de términos y la opción de volver al menú principal.

- **Ratios de Solvencia y Endeudamiento:**  
  Aquí, el usuario puede calcular el **Ratio de Solvencia** y el **Ratio de Endeudamiento**, además de acceder a un glosario y volver al menú principal.

- **Ratios de Rentabilidad:**  
  Permite calcular el **Ratio de Rentabilidad Económica de Activos (ROA)**, el **Ratio de Rentabilidad Financiera (ROE)**, y el **Ratio de Rentabilidad Sobre el Capital Invertido (ROCE)**. También ofrece un glosario y la opción de volver al menú principal.

- **Reporte:**  
  Permite generar un reporte con los resultados almacenados, definir el nombre de la empresa, limpiar los registros y volver al menú principal.

- **Salir:**  
  Opción para salir del programa.


### 2. **Funciones de Cálculo**
Cada tipo de ratio tiene una función dedicada para su cálculo:

- **Ratios de Liquidez:**
  - `calcularLiquidezCorriente()`
  - `calcularLiquidezAcida()`
  - `calcularDisponibilidadTesoreria()`
  - `calcularDiasTesoreria()`
  
- **Ratios de Solvencia y Endeudamiento:**
  - `calcularSolvencia()`
  - `calcularEndeudamiento()`

- **Ratios de Rentabilidad:**
  - `calcularROA()`
  - `calcularROE()`
  - `calcularROCE()`

---

### 3. **Variables Globales**
- **`reporte`**: Array que almacena los resultados de los cálculos realizados.
- **`nombreEmpresa`**: String que guarda el nombre de la empresa para incluirlo en el reporte.

### 4. **Función Principal: `mostrarRatios()`**
Esta función muestra un menú principal para que el usuario elija el tipo de ratio que desea calcular. Utiliza una estructura `switch` para manejar diferentes casos:

- **`case "1"`:** Calcula ratios de liquidez.
  - Dentro de este caso, hay otro `switch` para seleccionar el tipo específico de ratio de liquidez.
  
- **`case "2"`:** Calcula ratios de solvencia y endeudamiento.
  - Aquí otro `switch` permite elegir el ratio específico.
  
- **`case "3"`:** Calcula ratios de rentabilidad.
  - Un `switch` interno permite seleccionar entre diferentes ratios de rentabilidad.
  
- **`case "4"`:** Maneja opciones relacionadas con el reporte.
  - Otro `switch` permite generar un reporte, definir el nombre de la empresa, limpiar registros o volver al menú principal.
  
- **`case "5"`:** Sale de la aplicación.

- **`default`**: Muestra un mensaje de error si la opción seleccionada no es válida.

Cada caso en el `switch` principal puede llevar a una llamada recursiva a `mostrarRatios()` para permitir múltiples cálculos sin salir del menú.

### 5. **Funciones Secundarias**
- **`guardarDatos(resultado)`**: Solicita al usuario si desea guardar el resultado del cálculo. Si elige "Sí", añade el resultado al array `reporte`. Si elige "No", no guarda el resultado.
- **`generarReporte()`**: Muestra un reporte de los resultados guardados y el nombre de la empresa. Si no hay resultados, muestra un mensaje de advertencia.
- **`definirNombreEmpresa()`**: Permite al usuario ingresar el nombre de la empresa y lo guarda en `nombreEmpresa`.
- **`limpiarRegistros()`**: Limpia el array `reporte` y resetea `nombreEmpresa`.
- **`mostrarGlosario(tipo)`**: Muestra un glosario breve sobre el tipo de ratios seleccionado (liquidez, solvencia, rentabilidad).

### 6. **Funciones de Cálculo de Ratios**
Estas funciones realizan cálculos financieros basados en las entradas proporcionadas por el usuario:

- **Ratios de Liquidez:**
  - `calcularLiquidezCorriente()`
  - `calcularLiquidezAcida()`
  - `calcularDisponibilidadTesoreria()`
  - `calcularDiasTesoreria()`

- **Ratios de Solvencia:**
  - `calcularSolvencia()`
  - `calcularEndeudamiento()`

- **Ratios de Rentabilidad:**
  - `calcularROA()`
  - `calcularROE()`
  - `calcularROCE()`

---

### 7. **Otras mecánicas Javascript utilizadas**

- **`switch`:** Utilizado para manejar la selección de opciones del menú principal y submenús.
- **`if`:** Validaciones de entradas numéricas y valores mayores a cero cuando corresponda.
- **`while (true)`**: Utilizado en `guardarDatos` para solicitar al usuario si desea guardar el resultado hasta que proporcione una respuesta válida.

### 8. **El archivo html**
ste archivo HTML define la estructura de una página sencilla que permite al usuario calcular ratios financieros. El <head> contiene metadatos esenciales como el autor, la descripción del proyecto (relacionado con la entrega de un curso de JavaScript en Coderhouse), y palabras clave que facilitan la indexación en motores de búsqueda. También incluye un enlace a una hoja de estilos externa (styles.css) para aplicar el diseño visual de la página, y especifica el título de la página como "Ratios Financieros".

En el <body>, se presenta un encabezado <h1> con el título "Ratios Financieros", seguido de un botón interactivo (<button>) que ejecuta la función mostrarRatios() cuando el usuario hace clic, lo que inicia el proceso de cálculo de los ratios financieros. El archivo JavaScript necesario para realizar estos cálculos está enlazado al final del cuerpo mediante la etiqueta <script>, que apunta al archivo ratios.js.

---



