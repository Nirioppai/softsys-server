import authRoutes from './routers';
import authService from './service';
import authController from './controller';
import { registerSchema, validateRegister, validateLogin } from './schema';

export { authRoutes, registerSchema, validateRegister, validateLogin, authService, authController };
