import axios from 'axios';
import { checkSession } from '../utils/sessionManagement.js';


export const loginService = async (req, res) => {
  
  const { email, password } = req.body;
  
    const API_KEY = "AIzaSyBtPEygFp0aWka8XFUAaAzjBv_yoPCYjq0";
    
    try {

        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            email,
            password,
            returnSecureToken: true
          }
        );
    
        const { idToken, refreshToken } = response.data;

        checkSession( idToken ).then( async user => {
            return res.json( { uid: user.uid, email: user.email, displayName: user.name, idToken, refreshToken } );
        });
    
      } catch (error) {

        console.log(error);

        if ( error.code == "ERR_BAD_REQUEST" ) {
            return res.status(400).json( 
                { message: "Usuario/Contraseña incorrectos", error: { code: "Invalid email or password", message: "ERR_BAD_REQUEST" } }
            )
        }

        return res.status(500).json( { message: "error", error: { code: "Error authenticate user", message: "UNKNOW_ERROR" } } )
      }

}