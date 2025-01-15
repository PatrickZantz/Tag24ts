import { createProduct, addProductToService } from './product';
import { createOrder, addOrderToService } from './order';

// Example function calls
createProduct('Example Product', 99.99);
addProductToService('Example Service', 'Example Product');
createOrder(['Product1', 'Product2']);
addOrderToService('Example Service', 'Order123');
