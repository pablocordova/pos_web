export class Product {
	constructor(
		public id: string,
		public name: string,
		public amount: number,
		public category: string,
		public costPrice: number,
		public salePrice: number
	) { }
}