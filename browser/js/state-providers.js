'use strict';

// edit the all-albums controller so that it does not use the $rootScope event emitting.

juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/all-albums.template.html',
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state('artistsList', {
    url: '/artists',
    templateUrl: '/all-artists.template.html',
    controller: 'ArtistsCtrl'
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    templateUrl: '/album.template.html',
    controller: 'AlbumCtrl'
  });
});

// We can also specify a controller in the state definition with controller: 'TheControllerName'. Take the ng-controller=... out of the template and define the controller: in the state definition.
