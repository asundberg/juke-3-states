'use strict';

// -- edit the all-albums controller so that it does not use the $rootScope event emitting.

juke.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});

juke.config(function ($stateProvider, $urlRouterProvider) {
  var artist = function (ArtistFactory, $stateParams) {
    return ArtistFactory.fetchById($stateParams.artistId);
  };
  var artists = function (ArtistFactory) {
    return ArtistFactory.fetchAll();
  };
  var albums = function (AlbumFactory) {
    return AlbumFactory.fetchAll();
  };
  var album = function (AlbumFactory, $stateParams) {
    return AlbumFactory.fetchById($stateParams.albumId);
  };

  $urlRouterProvider.when('', '/albums');
  $urlRouterProvider.when('/artists/:artistId', '/artists/:artistId/albums');

  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/views/all-albums.template.html',
    resolve: {
      albums: albums
    },
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    templateUrl: '/views/album.template.html',
    resolve: {
      album: album
    },
    controller: 'AlbumCtrl'
  });

  $stateProvider.state('artistsList', {
    url: '/artists',
    templateUrl: '/views/all-artists.template.html',
    resolve: {
      artists: artists
    },
    controller: 'ArtistsCtrl'
  });

  $stateProvider.state('artist', {
    url: '/artists/:artistId',
    templateUrl: '/views/artist.template.html',
    resolve: {
      artist: artist
    },
    controller: 'ArtistCtrl'
  });

  $stateProvider.state('artist.albums', {
    // Because this is a child state, we only need to use the url that follows after the parent state url.
    url: '/albums',
    templateUrl: '/views/all-albums.template.html',
    controller: 'ArtistCtrl'
  });

  $stateProvider.state('artist.songs', {
    url: '/songs',
    templateUrl: '/views/songs.template.html',
    controller: 'ArtistCtrl'
  });

});

// -- We can also specify a controller in the state definition with controller: 'TheControllerName'. Take the ng-controller=... out of the template and define the controller: in the state definition.
