export interface Product {
  id: string;
  title: string;
  image: string;
  price: {
    main: string;
    deal: string;
  };
  review: {
    people: string;
    stars: string;
  };
}
