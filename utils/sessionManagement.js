import { getAuth } from '../firebase/firebaseAdmin.js';


export async function checkSession( token ) {

    try {

        const decodedToken = await getAuth.verifyIdToken(token);
        return decodedToken;

    } catch( error ) {
        console.log( "Token inválido" )
        return 400;
    }
    
};


export async function closeSession( uid, idToken ) {

    try {

        const result = await checkSession(idToken);

        if (result == 400) {
            console.log( "Token invalido" );
            return 401;
        }

        if ( result.uid != uid ) {
            console.log( "No coinciden los tokens" );
            return 403;
        }


        await getAuth.revokeRefreshTokens(uid);
        console.log('Tokens revocados correctamente.');
        return 200;

    } catch( error ) {

        console.error('Error al revocar los tokens:', error);
        return 500;

    }

}

export async function getUserByUid( uid ) {
    return await getAuth.getUser(uid);
}