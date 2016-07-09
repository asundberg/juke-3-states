'use strict';

// -- edit the all-albums controller so that it does not use the $rootScope event emitting.

juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/views/all-albums.template.html',
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    templateUrl: '/views/album.template.html',
    controller: 'AlbumCtrl'
  });

  $stateProvider.state('artistsList', {
    url: '/artists',
    templateUrl: '/views/all-artists.template.html',
    controller: 'ArtistsCtrl'
  });

  $stateProvider.state('artist', {
    url: '/artists/:artistId',
    templateUrl: '/views/artist.template.html',
    controller: 'ArtistCtrl'
  });

  $stateProvider.state('albumsByArtist', {
    url: '/artists/:artistId/albums',
    templateUrl: '/views/all-albums.template.html',
    controller: 'ArtistCtrl'
  });

  $stateProvider.state('songsByArtist', {
    url: '/artists/:artistId/songs',
    templateUrl: '/views/songs.template.html',
    controller: 'ArtistCtrl'
  });

});

// -- We can also specify a controller in the state definition with controller: 'TheControllerName'. Take the ng-controller=... out of the template and define the controller: in the state definition.
