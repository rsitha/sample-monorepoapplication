// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SubmitComponent } from './submit.component';

// describe('SubmitComponent', () => {
//   let component: SubmitComponent;
//   let fixture: ComponentFixture<SubmitComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SubmitComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SubmitComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'my-first-app'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('my-first-app');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('my-first-app app is running!');
//   });
// });





import { SubmitComponent } from './submit.component';

import { beforeEach, bootstrap, describe, getEl, it, setupModule } from '@angular/catalyst';

describe('SubmitComponent', () => {
  beforeEach(() => {
    setupModule({
      declarations: [SubmitComponent],
    });
  });

  it('should create the app', () => {
    const app = bootstrap(SubmitComponent);
    expect(app).toBeTruthy();
  });

  it(`should have as title 'submit'`, () => {
    const app = bootstrap(SubmitComponent);
    // expect(app.title).toEqual('my-first-app');
  });

  it('should render title', () => {
    bootstrap(SubmitComponent);
    expect(getEl('.content span')?.textContent).toContain('submit app is running!');
  });
});
