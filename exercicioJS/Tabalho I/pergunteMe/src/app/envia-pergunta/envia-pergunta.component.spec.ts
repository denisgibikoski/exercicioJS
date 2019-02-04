import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaPerguntaComponent } from './envia-pergunta.component';

describe('EnviaPerguntaComponent', () => {
  let component: EnviaPerguntaComponent;
  let fixture: ComponentFixture<EnviaPerguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviaPerguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviaPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
