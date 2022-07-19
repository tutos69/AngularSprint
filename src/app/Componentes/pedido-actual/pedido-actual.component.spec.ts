import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoActualComponent } from './pedido-actual.component';

describe('PedidoActualComponent', () => {
  let component: PedidoActualComponent;
  let fixture: ComponentFixture<PedidoActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoActualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
