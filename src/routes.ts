import { Router } from 'express'
import { AuthenticateClientController } from './modules/account/authenticateUser/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { ensureAuthenticatedClient } from './middlewares/ensureAuthenticatedClient';
import { FindAllWithoutEndDateController } from './modules/deliveries/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { ensureAuthenticatedDeliveryman } from './middlewares/ensureAuthenticatedDeliveryman';
import { UpdateDeliverymanController } from './modules/deliveries/updateDeliveryman/useCases/UpdateDeliverymanController';
import { FindAllDeliveriesController } from './modules/clients/deliveries/FindAllDeliveriesController';
import { FindAllDeliverymanController } from './modules/deliveryman/useCases/findAlldeliveries/FindAllDeliverymanController';
import { UpdateEndDateController } from './modules/deliveries/updateDeliveryman/updateEndDate/UpdateEndDateController';

const routes = Router();



const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const findAllWithoutEndDateController = new FindAllWithoutEndDateController();

const updateDeliverymanController = new UpdateDeliverymanController();

const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliverymanController = new FindAllDeliverymanController();

const updateEndDateController = new UpdateEndDateController();

routes.post('/client/', createClientController.handle);
routes.post('/client/login', authenticateClientController.handle);
routes.get('/client/deliveries', ensureAuthenticatedClient, findAllDeliveriesController.handle)

routes.post('/deliveryman', createDeliverymanController.handle);
routes.post('/deliveryman/login', authenticateDeliverymanController.handle);
routes.get('/deliveryman/deliveries', ensureAuthenticatedDeliveryman, findAllDeliverymanController.handle);


routes.post ('/delivery',ensureAuthenticatedClient, createDeliveryController.handle)
routes.get('/delivery/available', ensureAuthenticatedDeliveryman, findAllWithoutEndDateController.handle)
routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticatedDeliveryman, updateDeliverymanController.handle)
routes.put('/delivery/updateEndDate/:id', ensureAuthenticatedDeliveryman, updateEndDateController.handle)



export { routes }