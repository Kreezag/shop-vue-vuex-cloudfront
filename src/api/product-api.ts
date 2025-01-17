import axios from 'axios';

import { API_PATHS } from '@/constants/api-paths';
import { Product } from '@/models/product';

const fetchProducts = async (): Promise<Product[]> => {
	return axios
		.get(`${API_PATHS.product}/products`)
		.then(({ data }) => {
			return data.products;
		})
		.catch(e => {
			console.error(e);
			// << !!! mocks if any error !!!
			return [];
		});
};

const fetchProductById = async (id: string) => {
	console.info(`GET fetchProductById: ${id}`);

	return axios.get(`${API_PATHS.product}/products/${id}`).then(res => res.data);
};

const deleteProductById = (id: string) => {
	console.info(`DELETE deleteProductById: ${id}`);

	return axios.delete(`${API_PATHS.product}/products/${id}`);
};

const saveProduct = (productToSave: Product) => {
	console.info(`PUT saveProduct: ${JSON.stringify(productToSave)}`);

	return axios.put(`${API_PATHS.product}/products`, productToSave);
};

export const productApi = {
	fetchAvailableProducts: fetchProducts,
	deleteProductById,
	fetchProducts,
	fetchProductById,
	saveProduct,
};
