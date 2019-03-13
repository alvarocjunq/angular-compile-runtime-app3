import { Component, OnInit } from '@angular/core';
import { LauncherService } from 'poc-arquitetura';
import { HomeCreditoService } from './home-credito.service';

@Component({
  selector: 'tf-home-credito',
  templateUrl: './home-credito.component.html',
  styleUrls: ['./home-credito.component.scss']
})
export class HomeCreditoComponent implements OnInit {

  data: any;

  constructor(private launcherService: LauncherService, private homeService: HomeCreditoService) { }

  ngOnInit() {
  }

  onClickPoupanca() {
    this.launcherService.call({
      location: 'assets/poc-poupanca.umd.js',
      moduleName: 'PocPoupancaModule',
      selector: 'tf-poc-poupanca',
      tabName: 'Poupança',
      canBeReopened: false,
      data: this.data
    });
  }

  onClickCalc() {
    this.homeService.openCalc().subscribe();
  }

}
