import { getAuth } from '../firebase/firebaseAdmin.js'


export const signInService = async (req, res) => {

    const { email, password, displayName } = req.body;

    await getAuth.createUser({
        email: email,
        password: password,
        displayName: displayName,
        emailVerified: false,
        disabled: false
    })
    .then( (userRecord) => {
        console.log('Successfully created new user:', userRecord.uid);
        // return res.json( userRecord.uid );
        return res.json( userRecord );
    })
    .catch((error) => {

        if ( error.errorInfo.code == "auth/email-already-exists" ) {
            return res.status( 409 ).json( { message: "El email ya existe", error } )
        }

        console.log( error.errorInfo.code )
        console.log( error.errorInfo.message )

        return res.status( 500 ).json( { message: "Error creando el usuario", error } );
    });

    // .createUser({
    //     email: 'user@example.com',
    //     emailVerified: false,
    //     phoneNumber: '+11234567890',
    //     password: 'secretPassword',
    //     displayName: 'John Doe',
    //     photoURL: 'http://www.example.com/12345678/photo.png',
    //     disabled: false,
    //   })

    // res.json( "userResponse" );

}