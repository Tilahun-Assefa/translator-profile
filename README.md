# TranslatorProfile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploying to gh-pages

git checkout -b gh-pages
ng build --output-path docs --base-href /translator-profile/
git commit -m"build github pages to deploy"
## step by step procedure of this application development
## angular installation
ng version
npm uninstall -g @angular/cli
npm cache clean --force
ng new wmk-translation-service
## add bootstrap and ngx bootsrap for styling
ng add ngx-bootstrap
ng g c home --skip-tests
ng g c error-pages/not-found
## generate environment files and services
ng g environments
ng g s shared/services/environment-url --skip-tests
ng g s shared/services/translator-repository --skip-tests
## angular error handling
ng g c error-pages/internal-server --skip-tests
ng g s shared/services/error-handler --skip-tests
## angular lazy loading
ng g m translator --routing=true
ng g c translator/translator-list --skip-tests
