export interface Product {
  id: string;
  title: string;
  image: string;
  price: {
    main: number;
    deal: number;
  };
  review: {
    people: number;
    stars: number;
  };
}
