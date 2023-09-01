import { WorksEntity } from './books';

export type BookingState = {
  loading: boolean,
  carts: WorksEntity[]
};
