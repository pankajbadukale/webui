import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HotelBusService } from './hotel-bus.service';

describe('HotelBus Service', () => {
  beforeEachProviders(() => [HotelBusService]);

  it('should ...',
      inject([HotelBusService], (service: HotelBusService) => {
    expect(service).toBeTruthy();
  }));
});
