# **📊 El contexto en el que es útil este sistema**

Uno de los productos más importantes de la contabilidad son los **estados contables**.

Los estados contables son cruciales porque:

- **Proporcionan claridad:** Muestran la situación financiera de la empresa.
- **Facilitan decisiones:** Ayudan a tomar decisiones informadas.
- **Aseguran cumplimiento:** Cumplen con normativas legales.
- **Apoyan la planificación:** Permiten hacer presupuestos y proyecciones.
- **Identifican riesgos:** Detectan problemas financieros a tiempo.

---

# **📊 La importancia de los ratios financieros**

Los **ratios financieros** derivados de los estados contables son indicadores clave que ayudan a evaluar la salud y desempeño financiero de una empresa. Para este simulador se consideraron los siguientes indicadores:

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

## **Cómo está estructurado el proyecto**

El proyecto está estructurado en un archivo JavaScript que permite calcular y mostrar varios ratios financieros mediante un menú interactivo. A continuación, se describe la estructura del proyecto:

### 1. **Variables Globales**
- **reporte:** Un array para almacenar los resultados de los cálculos de ratios.
- **nombreEmpresa:** Una variable para guardar el nombre de la empresa.

### 2. **Menú Principal (`mostrarRatios`)**
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

### 3. **Funciones Secundarias**
- **`guardarDatos(resultado)`**: Permite al usuario guardar los resultados de los cálculos en el array `reporte`.
- **`generarReporte()`**: Genera y muestra un reporte con todos los resultados guardados.
- **`definirNombreEmpresa()`**: Permite al usuario definir o actualizar el nombre de la empresa.
- **`limpiarRegistros()`**: Limpia el reporte y resetea el nombre de la empresa.
- **`mostrarGlosario(tipo)`**: Muestra definiciones y explicaciones sobre los tipos de ratios seleccionados (liquidez, solvencia, rentabilidad).

### 4. **Funciones de Cálculo**
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

## **Descripción del Código**

Este código JavaScript es una aplicación interactiva para calcular diferentes tipos de ratios financieros. A continuación, se detalla su funcionamiento:

### **Variables Globales**
- **`reporte`**: Array que almacena los resultados de los cálculos realizados.
- **`nombreEmpresa`**: String que guarda el nombre de la empresa para incluirlo en el reporte.

### **Función Principal: `mostrarRatios()`**
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

### **Funciones Secundarias**
- **`guardarDatos(resultado)`**: Solicita al usuario si desea guardar el resultado del cálculo. Si elige "Sí", añade el resultado al array `reporte`. Si elige "No", no guarda el resultado.
- **`generarReporte()`**: Muestra un reporte de los resultados guardados y el nombre de la empresa. Si no hay resultados, muestra un mensaje de advertencia.
- **`definirNombreEmpresa()`**: Permite al usuario ingresar el nombre de la empresa y lo guarda en `nombreEmpresa`.
- **`limpiarRegistros()`**: Limpia el array `reporte` y resetea `nombreEmpresa`.
- **`mostrarGlosario(tipo)`**: Muestra un glosario breve sobre el tipo de ratios seleccionado (liquidez, solvencia, rentabilidad).

### **Funciones de Cálculo de Ratios**
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

## **Estructuras de Control**

- **`switch`:** Utilizado para manejar la selección de opciones del menú principal y submenús.
- **`if`:** Validaciones de entradas numéricas y valores mayores a cero cuando corresponda.
- **`while (true)`**: Utilizado en `guardarDatos` para solicitar al usuario si desea guardar el resultado hasta que proporcione una respuesta válida.

---

Este código está diseñado para interactuar con el usuario a través de mensajes de alerta y solicitudes de entrada



