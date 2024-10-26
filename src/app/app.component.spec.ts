import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'incubyte' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('incubyte');
  });

  it('it should return sum of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('+', 1, 2);
    expect(result).toBe(3);
  })

  it('it should return sum of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('+', -1, 2);
    expect(result).toBe(1);
  })

  it('it should return sum of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('+', -100, 2);
    expect(result).toBe(-98);
  })

  it('it should return sum of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('+', -100, -12);
    expect(result).toBe(-112);
  })

    it('it should return subtraction of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('-', 100, -50);
    expect(result).toBe(50);
  })

    it('it should return subtraction of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('-', -10, 40);
    expect(result).toBe(-50);
  })

    it('it should return multiplication of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('*', -1, -2);
    expect(result).toBe(-2);
  })

    it('it should return multiplication of the numbers provided', () => {
    const app = new AppComponent();
    const result = app.operate('*', -100, 0);
    expect(result).toBe(0);
  })
});
