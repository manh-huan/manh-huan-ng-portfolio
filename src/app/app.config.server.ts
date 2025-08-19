import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
