import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebuiAppComponent } from '../app/webui.component';

beforeEachProviders(() => [WebuiAppComponent]);

describe('App: Webui', () => {
  it('should create the app',
      inject([WebuiAppComponent], (app: WebuiAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'webui works!\'',
      inject([WebuiAppComponent], (app: WebuiAppComponent) => {
    expect(app.title).toEqual('webui works!');
  }));
});
