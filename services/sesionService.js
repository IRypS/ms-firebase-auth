import { checkSession, closeSession } from '../utils/sessionManagement.js';


export const checkSesionService = async ( req, res ) => {

    const { idToken } = req.body;


    try {

        const user = await checkSession(idToken);

        if (user == 400) {
            return res.status(400).json({ message: "No existe una sesión activa", error: null });
        }
      
        return res.json({ uid: user.uid, email: user.email, displayName: user.name });

    } catch( error ) {
        return res.status(500).json({ message: "Error en el servidor", error: error });
    }

}



export const closeSessionService = async ( req, res ) => {

    const { uid, idToken } = req.body;

    try {

        const result = await closeSession(uid, idToken);

        if (result == 500) {
            return res.status(500).json({ message: "Error al cerrar la sesión" });
        }

        if (result == 401) {
            return res.status(401).json({ message: "El token no es valido" });
        }

        if (result == 403) {
            return res.status(403).json({ message: "No tiene permiso para cerrar esta sesión" });
        }

        return res.json({ message: "Sesión cerrada con éxito" });

        
    } catch (error) {
        return res.status(500).json( { message: "Error en el servidor" } )
    }

}