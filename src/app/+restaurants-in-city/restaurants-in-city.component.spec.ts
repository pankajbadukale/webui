import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RestaurantsInCityComponent } from './restaurants-in-city.component';

describe('Component: RestaurantsInCity', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RestaurantsInCityComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([RestaurantsInCityComponent],
      (component: RestaurantsInCityComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(RestaurantsInCityComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(RestaurantsInCityComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-restaurants-in-city></app-restaurants-in-city>
  `,
  directives: [RestaurantsInCityComponent]
})
class RestaurantsInCityComponentTestController {
}

