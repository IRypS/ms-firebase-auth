import { Router } from 'express';
import { checkSesionService, closeSessionService } from '../services/sesionService.js'
import { signInService } from '../services/signIn.js';
import { loginService } from '../services/login.js';

const router = Router();

router.post('/signin', signInService);
router.post('/login', loginService);
router.post('/checkSession', checkSesionService );
router.post('/closeSession', closeSessionService );

export default router;