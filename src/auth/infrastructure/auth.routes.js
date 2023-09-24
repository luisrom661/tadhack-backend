import { Router } from 'express';
import { check } from 'express-validator';

import { validateFields } from '../../middlewares/index.js';
import { login, googleSignIn } from './auth.controller.js';

const router = Router();

router.post(
	'/login',
	[
		check('email', 'El correo es obligatorio.').isEmail(),
		check('password', 'la contraseña es obligatoria.').not().isEmpty(),
		validateFields,
	],
	login,
);

router.post(
	'/google',
	[
		check('id_token', 'El ID Token es necesario.').not().isEmpty(),
		validateFields,
	],
	googleSignIn,
);

export const authRoutes = router;