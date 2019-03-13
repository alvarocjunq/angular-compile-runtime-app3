import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PocCreditoComponent } from './poc-credito.component';
import { HomeCreditoComponent } from './home-credito/home-credito.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';

const routes: Routes = [
  { path: 'home', children: [{ path: '', component: HomeCreditoComponent, outlet: 'tf-poc-credito' }] }
];

@NgModule({
  declarations: [PocCreditoComponent, HomeCreditoComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, PocCreditoComponent]
})
export class PocCreditoModule { }


