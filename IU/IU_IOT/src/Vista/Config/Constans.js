
import { Dimensions } from 'react-native';

const config = {
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height - 45,
};
const strings = {
    PASS: "Password",
    USER: "User Name",
    TITLE_BUTTON: "Login",
    EMAIL_ERROR: 'Ci invalid!',
    PASSWORD_ERROR: 'Password invalid!',
    EMPTY_TITLE: 'Review Email/Password values',
    EMPTY_VALUES: 'Empty values detected',
    PASSWORD: 'Password',
    REGISTER_FROM: 'Register',
    TITLE_BUTTON_ENVIAR: "Enviar",
    NOMBRE_IGLESIA: "Nombre de la Iglesia",
    CI: "CI",
    NOMBRE: "Nombre",
    APELLIDOP: "Apellido Paterno",
    APELLIDOM: "Apellido Materno",

    LUGAR: "Lugar",
    NUMREGCIV: "Numero de Registro Civil",
    PROFESION: "Profesión",
    DIRECCION: "Dirección",
    IGLESIA: "Iglesia",
    GENERO: "Genero",
    CONTACTO: "Contacto",
    EMAIL: "Email",
    TELEFONO: "Telefono",
    CELULAR: "Celular",
    FECHA_NAC: "Fecha de Nacimiento",
    FECHA_CON: "Fecha de Conversion",
    FECHA_BAU: "Fecha de Bautizo",
    FECHA_TRANS: "Fecha de Transferencia",
    FEHCA_PRE: "Fecha de Presentacion",
    NOMP: "Nombre del Padre",
    NOMM: "Nombre de la Madre",
    CARGO: "Cargo",

    REGBAU: "Registo por Bautizo",
    REGSOL: "Modificar Informacion",
    REGTRANSFERENCIA: "Registro por Transferencia",
    REGUS: "Registro de Usuarios",
    REGTRANS: "Registro de Membresias Transferidas",
    REG_NI: "Registro de Niños",

    NETX: 'Next',
    PREV: 'Prev',
    TITULOHOME: 'Bienvenido',
    CONTENIDOHOME: 'Esta es la Aplicacion Movil de Iglesias UCE',
    TITULO1: 'Bienvenido',
    TITULO2: 'UCE',
    TITULO3: 'App Web',
    CONTENIDO1: 'Esta es la Aplicacion Movil de Iglesias UCE',
    CONTENIDO2: 'Mas de 1000 iglesias forman parte de nosotros',
    CONTENIDO3: 'Tambien puedes ingresar desde tu navegador en ISP.UCE.xyz',
}
export default {
    CONFIG: config,
    STRING: strings,
}

