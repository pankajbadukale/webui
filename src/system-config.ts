/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'angular2-google-maps': 'vendor/angular2-google-maps'
};

/** User packages configuration. */
const packages: any = {
  'angular2-google-maps':       { defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/util',

  'app/hotel',
  'app/hotel/shared',
  'app/hotel/shared/hotel-details',
  'app/hotel/shared/hotel-details/shared',
  'app/hotel/shared/hotel-details/shared/faq',
  'app/hotel/shared/hotel-details/shared/feedback',
  'app/hotel/shared/hotel-details/shared/menu',
  'app/hotel/shared/hotel-details/shared/overview',
  'app/hotel/shared/hotel-details/shared/photo',
  'app/hotel/shared/hotel-details/shared/review',
  'app/hotel/shared/hotel-list/',
  'app/hotel/shared/search-hotel/',

  'app/gmap',
  'app/gmap/shared/',
  'app/gmap/shared/google-map',
  'app/gmap/shared/google-map-controller',

  'app/layout',
  'app/layout/shared',
  'app/layout/shared/header',
  'app/layout/shared/footer'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
