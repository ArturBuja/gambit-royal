export interface IProduct {
  id: Readonly<string>;
  name: Readonly<string>;
  description: Readonly<string>;
  image: Readonly<string>;
  promotion: Readonly<boolean>;
  rating: Readonly<string>;
  active: Readonly<boolean>;
}
