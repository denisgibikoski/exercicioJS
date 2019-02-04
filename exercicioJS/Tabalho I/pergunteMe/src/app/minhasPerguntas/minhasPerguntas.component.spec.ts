import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPerguntasComponent } from './minhasPerguntas.component';

describe('MinhasPerguntasComponent', () => {
  let component: MinhasPerguntasComponent;
  let fixture: ComponentFixture<MinhasPerguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasPerguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
