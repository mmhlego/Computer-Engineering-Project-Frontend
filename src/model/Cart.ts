export default interface Cart {
	id: string;
	customerId?: string;
	products: ProductAmounts[];
	status: CartStatus;
	description?: string;
	updateDate?: string;
}

export interface ProductAmounts {
	productId: string; // This is productPriceId
	amount: number;
}

export type CartStatus =
	| "Filling"
	| "Pending"
	| "Approved"
	| "Rejected"
	| "Sending"
	| "Received";
