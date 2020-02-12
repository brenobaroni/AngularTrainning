import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './comboBox.component.html',
  styleUrls: ['./comboBox.component.css']
})

export class ComboBoxComponent implements OnInit {

  @Input() list: string[];

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
