import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styles: ``
})
export class FormGroupComponent {

  @Input()
  label = ''
}
