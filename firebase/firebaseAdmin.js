import admin from 'firebase-admin';
import credentials from '../serviceAccountKey.json' assert {type: 'json'};

admin.initializeApp({
    credential: admin.credential.cert( credentials )
});

export const getAuth = admin.auth();