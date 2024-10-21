import { signal } from '@angular/core';
import { Routes } from '@angular/router';
import { Signal1Ejemplo1Component } from './components/signal1-ejemplo1/signal1-ejemplo1.component';
import { SignalEjemplo2Component } from './components/signal-ejemplo2/signal-ejemplo2.component';

export const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: 'signal1-ejemplo1',

    },

    {
        path:'signal1-ejemplo1',
        component: Signal1Ejemplo1Component
    },

    {
        path:'signal-ejemplo2',
        component: SignalEjemplo2Component
    }

];
