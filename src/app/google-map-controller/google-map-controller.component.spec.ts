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
import { GoogleMapControllerComponent } from './google-map-controller.component';

describe('Component: GoogleMapController', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GoogleMapControllerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([GoogleMapControllerComponent],
      (component: GoogleMapControllerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(GoogleMapControllerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(GoogleMapControllerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-google-map-controller></app-google-map-controller>
  `,
  directives: [GoogleMapControllerComponent]
})
class GoogleMapControllerComponentTestController {
}

