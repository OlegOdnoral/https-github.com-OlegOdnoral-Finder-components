import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() label = 'Default';
  @Input() disabled = false;

  @Output() click: EventEmitter<void> =  new EventEmitter();

  control = new FormControl();

  selected = 'option2';

  items = Array.from({ length: 10000 }).map((_, i) => ({
    id: i,
    label: `Item #${i}`
  })) as any;

  ngOnInit() {
    this.control.valueChanges.subscribe(data => console.log(data));
  }

  change($event: any) {
    console.log($event)
  }

  test(val: number) {
    console.log(val);
  }
}
