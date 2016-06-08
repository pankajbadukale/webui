import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WebuiService } from './webui.service';

describe('Webui Service', () => {
  beforeEachProviders(() => [WebuiService]);

  it('should ...',
      inject([WebuiService], (service: WebuiService) => {
    expect(service).toBeTruthy();
  }));
});
