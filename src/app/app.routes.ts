import { Routes } from '@angular/router';
import { ACCESSIBILITY_STATEMENT, PRIVACY_POLICY, TERMS_OF_SERVICE } from './core/data/legal-content.data';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
    title: 'מור חזות | שמלות כלה צנועות',
  },
  {
    path: 'collection',
    loadComponent: () => import('./pages/collection/collection').then((m) => m.CollectionComponent),
    title: 'הקולקציה | מור חזות',
  },
  {
    path: 'villa',
    loadComponent: () => import('./pages/villa/villa').then((m) => m.VillaComponent),
    title: 'וילה ג׳ולייט | מור חזות',
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials/testimonials').then((m) => m.TestimonialsComponent),
    title: 'סיפורי כלות | מור חזות',
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then((m) => m.FaqComponent),
    title: 'שאלות נפוצות | מור חזות',
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/legal/legal-page').then((m) => m.LegalPageComponent),
    data: { content: PRIVACY_POLICY },
    title: 'מדיניות פרטיות | מור חזות',
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/legal/legal-page').then((m) => m.LegalPageComponent),
    data: { content: TERMS_OF_SERVICE },
    title: 'תקנון האתר | מור חזות',
  },
  {
    path: 'accessibility',
    loadComponent: () => import('./pages/legal/legal-page').then((m) => m.LegalPageComponent),
    data: { content: ACCESSIBILITY_STATEMENT },
    title: 'הצהרת נגישות | מור חזות',
  },
  { path: '**', redirectTo: '' },
];
