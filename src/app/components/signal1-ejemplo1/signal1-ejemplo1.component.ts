import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signal1-ejemplo1',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal1-ejemplo1.component.html',
  styleUrl: './signal1-ejemplo1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signal1Ejemplo1Component {
  contador = signal<number>(0);

  contador2 = 0;

  incrementarContador(){
    this.contador.update(conta => conta + 1)
    this.contador2 = this.contador2 + 1
  }

  decrementarContador(){
    this.contador.update(conta => conta -1 )
    this.contador2 = this.contador2 - 1
  }

}
