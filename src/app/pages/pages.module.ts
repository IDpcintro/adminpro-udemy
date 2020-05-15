import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
//ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { SharedModules } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule ({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent,
        Graficas1Component,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        IncrementadorComponent,
        Graficas1Component,
        GraficoDonaComponent
    ],
    imports: [
        SharedModules,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})

export class PagesModules {

}



