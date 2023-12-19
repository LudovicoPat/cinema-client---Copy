import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.module';
import { provideHttpClient } from '@angular/common/http';
import { FilmsService } from './services/cinema.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), FilmsService]
};
