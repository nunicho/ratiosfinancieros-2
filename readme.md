# **👨‍🎓 ALUMNO**
MAURICIO JAVIER ALONSO

# **🏫 Curso**
JAVASCRIPT  de Coderhouse

2° ENTREGABLE

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


## 📝 **Cómo está estructurado el proyecto** 

El proyecto está estructurado en un cinco archivos html (index, empresa, balances, ratios y reporte), en seis archivos de javascript (index, empresa, balances, calculoRatios, manejoRatios, reporte) y en un archivo css (consolidado).


### 1. **index.html e index.js**
En este archivo el usuario puede iniciar la navegación en la aplicación. También está prevista la limpieza de registros del localStorage.  

El javascript toma los elementos del DOM para asignarles la propiedad de navegación y también cuenta con código preparado para limpiar los registros almacenados en localStorage.

También está agregada una modal donde el usuario puede visualizar un breve instructivo sobre cómo debe de usar la app. 

### 2. **empresa.html y empresa.js**

El archivo html cuenta con un formulario donde el titular puede ingresar los datos relevantes de la empresa: nombre, actividad, ubicación. 
El archivo js maneja el contenido que se vierte en el formulario y lo almacena en el localStorage, en la clave "empresa"

### 3. **balances.html y balances.js**

El archivo balances.html cuenta con dos formularios donde el titular puede ingresar los datos relevantes del estado de situación patrimonial y del estado de resultados.
El archivo balances.js maneja el contenido que se vierte de los formularios y los almacena en el localStorage, en las claves "form-patrimonio" y "form-resultados".

### 4. **ratios.html , calculoRatios.js y manejoRatios.js**

El archivo ratios.html cuenta con la base para que los archivos js agreguen su contenido mediante manejo del DOM. 
El archivo calculoRatios.js realiza los cálculos de los ratios según los datos almacenados en localStorage, cargados en "form-patrimonio" y "form-resultados".
El archivo manejoRatios.js asigna contenido dinámico a cada ratio. Si el usuario aportó los valores necesarios para el cálculo del ratio, el mecanismo JS asignará un button que permite agregar dicho ratio al localStorage "reporte-ratios". 
Si dicho ratio se agregó a "reporte-ratios", entonces el button cambiará su funcionalidad y ahora servirá para remover dicho ratio del "reporte-ratios". 
Si, en cambio, no fueron ingresados los valores necesarios para calcular el ratio, en lugar de los buttons aparecerá el texto "Faltan Datos".

### 5. **reporte.html y reporte.js**

El archivo reporte.html cuenta con la base para que los archivos js agreguen su contenido mediante manejo del DOM.
El archivo reporte.js agrega al DOM los ratios almacenados en el localStorage "reporte-ratios". También agrega al DOM los datos de la empresa almacenados en "empresa". Y, finalmente, agrega la fecha actual.


# **🔄 Cambios realizados en relación a la entrega anterior**

En la entrega anterior, los datos se manejaban a través de un mecanismo switch. Y el manejo del HTML, mediante uso del DOM, estaba pobremente desarrollado.
En esta entrega se refactoriza el manejo de javascript, se elimina el switch y se desglosa el código javascript en varios scripts. Se hace un manejo más extenso del DOM y se incorpora localStorage para el almacenamiento de los datos ingresados por el titular.

---



