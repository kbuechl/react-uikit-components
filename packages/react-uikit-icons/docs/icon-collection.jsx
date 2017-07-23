import React from 'react';

const iconCollection = (prop) => (
  <div>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-adjust"></i> adjust</li>
      <li><i className="uk-icon-anchor"></i> anchor</li>
      <li><i className="uk-icon-archive"></i> archive</li>
      <li><i className="uk-icon-area-chart"></i> area-chart</li>
      <li><i className="uk-icon-arrows"></i> arrows</li>
      <li><i className="uk-icon-arrows-h"></i> arrows-h</li>
      <li><i className="uk-icon-arrows-v"></i> arrows-v</li>
      <li><i className="uk-icon-asterisk"></i> asterisk</li>
      <li><i className="uk-icon-at"></i> at</li>
      <li><i className="uk-icon-automobile"></i> automobile <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-balance-scale"></i> balance-scale</li>
      <li><i className="uk-icon-ban"></i> ban</li>
      <li><i className="uk-icon-bank"></i> bank <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-bar-chart"></i> bar-chart</li>
      <li><i className="uk-icon-bar-chart-o"></i> bar-chart-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-barcode"></i> barcode</li>
      <li><i className="uk-icon-bars"></i> bars</li>
      <li><i className="uk-icon-battery-empty"></i> battery-empty <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-battery-0"></i> battery-0</li>
      <li><i className="uk-icon-battery-quarter"></i> battery-quarter <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-battery-1"></i> battery-1</li>
      <li><i className="uk-icon-battery-half"></i> battery-half <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-battery-2"></i> battery-2</li>
      <li className="uk-text-truncate"><i className="uk-icon-battery-three-quarters"></i> battery-three-quarters <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-battery-3"></i> battery-3</li>
      <li><i className="uk-icon-battery-full"></i> battery-full <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-battery-4"></i> battery-4</li>
      <li><i className="uk-icon-bed"></i> bed</li>
      <li><i className="uk-icon-beer"></i> beer</li>
      <li><i className="uk-icon-bell"></i> bell</li>
      <li><i className="uk-icon-bell-o"></i> bell-o</li>
      <li><i className="uk-icon-bell-slash"></i> bell-slash</li>
      <li><i className="uk-icon-bell-slash-o"></i> bell-slash-o</li>
      <li><i className="uk-icon-bicycle"></i> bicycle</li>
      <li><i className="uk-icon-binoculars"></i> binoculars</li>
      <li><i className="uk-icon-birthday-cake"></i> birthday-cake</li>
      <li><i className="uk-icon-bluetooth"></i> bluetooth</li>
      <li><i className="uk-icon-bluetooth-b"></i> bluetooth-b</li>
      <li><i className="uk-icon-bolt"></i> bolt</li>
      <li><i className="uk-icon-bomb"></i> bomb</li>
      <li><i className="uk-icon-book"></i> book</li>
      <li><i className="uk-icon-bookmark"></i> bookmark</li>
      <li><i className="uk-icon-bookmark-o"></i> bookmark-o</li>
      <li><i className="uk-icon-briefcase"></i> briefcase</li>
      <li><i className="uk-icon-bug"></i> bug</li>
      <li><i className="uk-icon-building"></i> building</li>
      <li><i className="uk-icon-building-o"></i> building-o</li>
      <li><i className="uk-icon-bullhorn"></i> bullhorn</li>
      <li><i className="uk-icon-bullseye"></i> bullseye</li>
      <li><i className="uk-icon-bus"></i> bus</li>
      <li><i className="uk-icon-cab"></i> cab <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-calculator"></i> calculator</li>
      <li><i className="uk-icon-calendar"></i> calendar</li>
      <li><i className="uk-icon-calendar-check-o"></i> calendar-check-o</li>
      <li><i className="uk-icon-calendar-minus-o"></i> calendar-minus-o</li>
      <li><i className="uk-icon-calendar-o"></i> calendar-o</li>
      <li><i className="uk-icon-calendar-plus-o"></i> calendar-plus-o</li>
      <li><i className="uk-icon-calendar-times-o"></i> calendar-times-o</li>
      <li><i className="uk-icon-camera"></i> camera</li>
      <li><i className="uk-icon-camera-retro"></i> camera-retro</li>
      <li><i className="uk-icon-car"></i> car</li>
      <li><i className="uk-icon-caret-square-o-down"></i> caret-square-o-down</li>
      <li><i className="uk-icon-caret-square-o-left"></i> caret-square-o-left</li>
      <li><i className="uk-icon-caret-square-o-right"></i> caret-square-o-right</li>
      <li><i className="uk-icon-caret-square-o-up"></i> caret-square-o-up</li>
      <li><i className="uk-icon-cart-arrow-down"></i> cart-arrow-down</li>
      <li><i className="uk-icon-cart-plus"></i> cart-plus</li>
      <li><i className="uk-icon-cc"></i> cc</li>
      <li><i className="uk-icon-certificate"></i> certificate</li>
      <li><i className="uk-icon-check"></i> check</li>
      <li><i className="uk-icon-check-circle"></i> check-circle</li>
      <li><i className="uk-icon-check-circle-o"></i> check-circle-o</li>
      <li><i className="uk-icon-check-square"></i> check-square</li>
      <li><i className="uk-icon-check-square-o"></i> check-square-o</li>
      <li><i className="uk-icon-child"></i> child</li>
      <li><i className="uk-icon-circle"></i> circle</li>
      <li><i className="uk-icon-circle-o"></i> circle-o</li>
      <li><i className="uk-icon-circle-o-notch"></i> circle-o-notch</li>
      <li><i className="uk-icon-circle-thin"></i> circle-thin</li>
      <li><i className="uk-icon-clock-o"></i> clock-o</li>
      <li><i className="uk-icon-clone"></i> clone</li>
      <li><i className="uk-icon-close"></i> close <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-cloud"></i> cloud</li>
      <li><i className="uk-icon-cloud-download"></i> cloud-download</li>
      <li><i className="uk-icon-cloud-upload"></i> cloud-upload</li>
      <li><i className="uk-icon-code"></i> code</li>
      <li><i className="uk-icon-code-fork"></i> code-fork</li>
      <li><i className="uk-icon-coffee"></i> coffee</li>
      <li><i className="uk-icon-cog"></i> cog</li>
      <li><i className="uk-icon-cogs"></i> cogs</li>
      <li><i className="uk-icon-comment"></i> comment</li>
      <li><i className="uk-icon-comment-o"></i> comment-o</li>
      <li><i className="uk-icon-commenting"></i> commenting</li>
      <li><i className="uk-icon-commenting-o"></i> commenting-o</li>
      <li><i className="uk-icon-comments"></i> comments</li>
      <li><i className="uk-icon-comments-o"></i> comments-o</li>
      <li><i className="uk-icon-compass"></i> compass</li>
      <li><i className="uk-icon-copyright"></i> copyright</li>
      <li><i className="uk-icon-creative-commons"></i> creative-commons</li>
      <li><i className="uk-icon-credit-card"></i> credit-card</li>
      <li><i className="uk-icon-credit-card-alt"></i> credit-card-alt</li>
      <li><i className="uk-icon-crop"></i> crop</li>
      <li><i className="uk-icon-crosshairs"></i> crosshairs</li>
      <li><i className="uk-icon-cube"></i> cube</li>
      <li><i className="uk-icon-cubes"></i> cubes</li>
      <li><i className="uk-icon-cutlery"></i> cutlery</li>
      <li><i className="uk-icon-dashboard"></i> dashboard <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-database"></i> database</li>
      <li><i className="uk-icon-desktop"></i> desktop</li>
      <li><i className="uk-icon-diamond"></i> diamond</li>
      <li><i className="uk-icon-dot-circle-o"></i> dot-circle-o</li>
      <li><i className="uk-icon-download"></i> download</li>
      <li><i className="uk-icon-edit"></i> edit <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-ellipsis-h"></i> ellipsis-h</li>
      <li><i className="uk-icon-ellipsis-v"></i> ellipsis-v</li>
      <li><i className="uk-icon-envelope"></i> envelope</li>
      <li><i className="uk-icon-envelope-o"></i> envelope-o</li>
      <li><i className="uk-icon-envelope-square"></i> envelope-square</li>
      <li><i className="uk-icon-eraser"></i> eraser</li>
      <li><i className="uk-icon-exchange"></i> exchange</li>
      <li><i className="uk-icon-exclamation"></i> exclamation</li>
      <li><i className="uk-icon-exclamation-circle"></i> exclamation-circle</li>
      <li><i className="uk-icon-exclamation-triangle"></i> exclamation-triangle</li>
      <li><i className="uk-icon-external-link"></i> external-link</li>
      <li><i className="uk-icon-external-link-square"></i> external-link-square</li>
      <li><i className="uk-icon-eye"></i> eye</li>
      <li><i className="uk-icon-eye-slash"></i> eye-slash</li>
      <li><i className="uk-icon-eyedropper"></i> eyedropper</li>
      <li><i className="uk-icon-fax"></i> fax</li>
      <li><i className="uk-icon-female"></i> female</li>
      <li><i className="uk-icon-fighter-jet"></i> fighter-jet</li>
      <li><i className="uk-icon-file-archive-o"></i> file-archive-o</li>
      <li><i className="uk-icon-file-audio-o"></i> file-audio-o</li>
      <li><i className="uk-icon-file-code-o"></i> file-code-o</li>
      <li><i className="uk-icon-file-excel-o"></i> file-excel-o</li>
      <li><i className="uk-icon-file-image-o"></i> file-image-o</li>
      <li><i className="uk-icon-file-movie-o"></i> file-movie-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-pdf-o"></i> file-pdf-o</li>
      <li><i className="uk-icon-file-photo-o"></i> file-photo-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-picture-o"></i> file-picture-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-powerpoint-o"></i> file-powerpoint-o</li>
      <li><i className="uk-icon-file-sound-o"></i> file-sound-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-video-o"></i> file-video-o</li>
      <li><i className="uk-icon-file-word-o"></i> file-word-o</li>
      <li><i className="uk-icon-file-zip-o"></i> file-zip-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-film"></i> film</li>
      <li><i className="uk-icon-filter"></i> filter</li>
      <li><i className="uk-icon-fire"></i> fire</li>
      <li><i className="uk-icon-fire-extinguisher"></i> fire-extinguisher</li>
      <li><i className="uk-icon-flag"></i> flag</li>
      <li><i className="uk-icon-flag-checkered"></i> flag-checkered</li>
      <li><i className="uk-icon-flag-o"></i> flag-o</li>
      <li><i className="uk-icon-flash"></i> flash <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-flask"></i> flask</li>
      <li><i className="uk-icon-folder"></i> folder</li>
      <li><i className="uk-icon-folder-o"></i> folder-o</li>
      <li><i className="uk-icon-folder-open"></i> folder-open</li>
      <li><i className="uk-icon-folder-open-o"></i> folder-open-o</li>
      <li><i className="uk-icon-frown-o"></i> frown-o</li>
      <li><i className="uk-icon-futbol-o"></i> futbol-o</li>
      <li><i className="uk-icon-gamepad"></i> gamepad</li>
      <li><i className="uk-icon-gavel"></i> gavel</li>
      <li><i className="uk-icon-gear"></i> gear <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-gears"></i> gears <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-genderless"></i> genderless <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-gift"></i> gift</li>
      <li><i className="uk-icon-glass"></i> glass</li>
      <li><i className="uk-icon-globe"></i> globe</li>
      <li><i className="uk-icon-graduation-cap"></i> graduation-cap</li>
      <li><i className="uk-icon-group"></i> group <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hand-lizard-o"></i> hand-lizard-o</li>
      <li><i className="uk-icon-hand-stop-o"></i> hand-stop-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hand-paper-o"></i> hand-paper-o</li>
      <li><i className="uk-icon-hand-peace-o"></i> hand-peace-o</li>
      <li><i className="uk-icon-hand-pointer-o"></i> hand-pointer-o</li>
      <li><i className="uk-icon-hand-grab-o"></i> hand-grab-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hand-rock-o"></i> hand-rock-o</li>
      <li><i className="uk-icon-hand-scissors-o"></i> hand-scissors-o</li>
      <li><i className="uk-icon-hand-spock-o"></i> hand-spock-o</li>
      <li><i className="uk-icon-hdd-o"></i> hdd-o</li>
      <li><i className="uk-icon-hashtag"></i> hashtag</li>
      <li><i className="uk-icon-headphones"></i> headphones</li>
      <li><i className="uk-icon-heart"></i> heart</li>
      <li><i className="uk-icon-heart-o"></i> heart-o</li>
      <li><i className="uk-icon-heartbeat"></i> heartbeat</li>
      <li><i className="uk-icon-history"></i> history</li>
      <li><i className="uk-icon-home"></i> home</li>
      <li><i className="uk-icon-hotel"></i> hotel <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hourglass"></i> hourglass</li>
      <li><i className="uk-icon-hourglass-o"></i> hourglass-o</li>
      <li><i className="uk-icon-hourglass-1"></i> hourglass-1 <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hourglass-start"></i> hourglass-start</li>
      <li><i className="uk-icon-hourglass-2"></i> hourglass-2 <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hourglass-half"></i> hourglass-half</li>
      <li><i className="uk-icon-hourglass-3"></i> hourglass-3 <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hourglass-end"></i> hourglass-end</li>
      <li><i className="uk-icon-i-cursor"></i> i-cursor</li>
      <li><i className="uk-icon-image"></i> image <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-inbox"></i> inbox</li>
      <li><i className="uk-icon-industry"></i> industry</li>
      <li><i className="uk-icon-info"></i> info</li>
      <li><i className="uk-icon-info-circle"></i> info-circle</li>
      <li><i className="uk-icon-institution"></i> institution <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-key"></i> key</li>
      <li><i className="uk-icon-keyboard-o"></i> keyboard-o</li>
      <li><i className="uk-icon-language"></i> language</li>
      <li><i className="uk-icon-laptop"></i> laptop</li>
      <li><i className="uk-icon-leaf"></i> leaf</li>
      <li><i className="uk-icon-legal"></i> legal <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-lemon-o"></i> lemon-o</li>
      <li><i className="uk-icon-level-down"></i> level-down</li>
      <li><i className="uk-icon-level-up"></i> level-up</li>
      <li><i className="uk-icon-life-bouy"></i> life-bouy <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-life-buoy"></i> life-buoy <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-life-ring"></i> life-ring</li>
      <li><i className="uk-icon-life-saver"></i> life-saver <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-lightbulb-o"></i> lightbulb-o</li>
      <li><i className="uk-icon-line-chart"></i> line-chart</li>
      <li><i className="uk-icon-location-arrow"></i> location-arrow</li>
      <li><i className="uk-icon-lock"></i> lock</li>
      <li><i className="uk-icon-magic"></i> magic</li>
      <li><i className="uk-icon-magnet"></i> magnet</li>
      <li><i className="uk-icon-mail-forward"></i> mail-forward <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-mail-reply"></i> mail-reply <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-mail-reply-all"></i> mail-reply-all <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-male"></i> male</li>
      <li><i className="uk-icon-map"></i> map</li>
      <li><i className="uk-icon-map-marker"></i> map-marker</li>
      <li><i className="uk-icon-map-o"></i> map-o</li>
      <li><i className="uk-icon-map-pin"></i> map-pin</li>
      <li><i className="uk-icon-map-signs"></i> map-signs</li>
      <li><i className="uk-icon-meh-o"></i> meh-o</li>
      <li><i className="uk-icon-microphone"></i> microphone</li>
      <li><i className="uk-icon-microphone-slash"></i> microphone-slash</li>
      <li><i className="uk-icon-minus"></i> minus</li>
      <li><i className="uk-icon-minus-circle"></i> minus-circle</li>
      <li><i className="uk-icon-minus-square"></i> minus-square</li>
      <li><i className="uk-icon-minus-square-o"></i> minus-square-o</li>
      <li><i className="uk-icon-mobile"></i> mobile</li>
      <li><i className="uk-icon-mobile-phone"></i> mobile-phone <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-money"></i> money</li>
      <li><i className="uk-icon-moon-o"></i> moon-o</li>
      <li><i className="uk-icon-mortar-board"></i> mortar-board <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-motorcycle"></i> motorcycle</li>
      <li><i className="uk-icon-mouse-pointer"></i> mouse-pointer</li>
      <li><i className="uk-icon-music"></i> music</li>
      <li><i className="uk-icon-navicon"></i> navicon <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-newspaper-o"></i> newspaper-o</li>
      <li><i className="uk-icon-object-group"></i> object-group</li>
      <li><i className="uk-icon-object-ungroup"></i> object-ungroup</li>
      <li><i className="uk-icon-paint-brush"></i> paint-brush</li>
      <li><i className="uk-icon-paper-plane"></i> paper-plane</li>
      <li><i className="uk-icon-paper-plane-o"></i> paper-plane-o</li>
      <li><i className="uk-icon-paw"></i> paw</li>
      <li><i className="uk-icon-pencil"></i> pencil</li>
      <li><i className="uk-icon-pencil-square"></i> pencil-square</li>
      <li><i className="uk-icon-pencil-square-o"></i> pencil-square-o</li>
      <li><i className="uk-icon-percent"></i> percent</li>
      <li><i className="uk-icon-phone"></i> phone</li>
      <li><i className="uk-icon-phone-square"></i> phone-square</li>
      <li><i className="uk-icon-photo"></i> photo <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-picture-o"></i> picture-o</li>
      <li><i className="uk-icon-pie-chart"></i> pie-chart</li>
      <li><i className="uk-icon-plane"></i> plane</li>
      <li><i className="uk-icon-plug"></i> plug</li>
      <li><i className="uk-icon-plus"></i> plus</li>
      <li><i className="uk-icon-plus-circle"></i> plus-circle</li>
      <li><i className="uk-icon-plus-square"></i> plus-square</li>
      <li><i className="uk-icon-plus-square-o"></i> plus-square-o</li>
      <li><i className="uk-icon-power-off"></i> power-off</li>
      <li><i className="uk-icon-print"></i> print</li>
      <li><i className="uk-icon-puzzle-piece"></i> puzzle-piece</li>
      <li><i className="uk-icon-qrcode"></i> qrcode</li>
      <li><i className="uk-icon-question"></i> question</li>
      <li><i className="uk-icon-question-circle"></i> question-circle</li>
      <li><i className="uk-icon-quote-left"></i> quote-left</li>
      <li><i className="uk-icon-quote-right"></i> quote-right</li>
      <li><i className="uk-icon-random"></i> random</li>
      <li><i className="uk-icon-recycle"></i> recycle</li>
      <li><i className="uk-icon-refresh"></i> refresh</li>
      <li><i className="uk-icon-registered"></i> registered</li>
      <li><i className="uk-icon-remove"></i> remove <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-reorder"></i> reorder <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-reply"></i> reply</li>
      <li><i className="uk-icon-reply-all"></i> reply-all</li>
      <li><i className="uk-icon-retweet"></i> retweet</li>
      <li><i className="uk-icon-road"></i> road</li>
      <li><i className="uk-icon-rocket"></i> rocket</li>
      <li><i className="uk-icon-rss"></i> rss</li>
      <li><i className="uk-icon-rss-square"></i> rss-square</li>
      <li><i className="uk-icon-search"></i> search</li>
      <li><i className="uk-icon-search-minus"></i> search-minus</li>
      <li><i className="uk-icon-search-plus"></i> search-plus</li>
      <li><i className="uk-icon-send"></i> send <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-send-o"></i> send-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-server"></i> server</li>
      <li><i className="uk-icon-share"></i> share</li>
      <li><i className="uk-icon-share-alt"></i> share-alt</li>
      <li><i className="uk-icon-share-alt-square"></i> share-alt-square</li>
      <li><i className="uk-icon-share-square"></i> share-square</li>
      <li><i className="uk-icon-share-square-o"></i> share-square-o</li>
      <li><i className="uk-icon-shield"></i> shield</li>
      <li><i className="uk-icon-ship"></i> ship</li>
      <li><i className="uk-icon-shopping-bag"></i> shopping-bag</li>
      <li><i className="uk-icon-shopping-basket"></i> shopping-basket</li>
      <li><i className="uk-icon-shopping-cart"></i> shopping-cart</li>
      <li><i className="uk-icon-sign-in"></i> sign-in</li>
      <li><i className="uk-icon-sign-out"></i> sign-out</li>
      <li><i className="uk-icon-signal"></i> signal</li>
      <li><i className="uk-icon-sitemap"></i> sitemap</li>
      <li><i className="uk-icon-sliders"></i> sliders</li>
      <li><i className="uk-icon-smile-o"></i> smile-o</li>
      <li><i className="uk-icon-soccer-ball-o"></i> soccer-ball-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-sort"></i> sort</li>
      <li><i className="uk-icon-sort-alpha-asc"></i> sort-alpha-asc</li>
      <li><i className="uk-icon-sort-alpha-desc"></i> sort-alpha-desc</li>
      <li><i className="uk-icon-sort-amount-asc"></i> sort-amount-asc</li>
      <li><i className="uk-icon-sort-amount-desc"></i> sort-amount-desc</li>
      <li><i className="uk-icon-sort-asc"></i> sort-asc</li>
      <li><i className="uk-icon-sort-desc"></i> sort-desc</li>
      <li><i className="uk-icon-sort-down"></i> sort-down <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-sort-numeric-asc"></i> sort-numeric-asc</li>
      <li><i className="uk-icon-sort-numeric-desc"></i> sort-numeric-desc</li>
      <li><i className="uk-icon-sort-up"></i> sort-up <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-space-shuttle"></i> space-shuttle</li>
      <li><i className="uk-icon-spinner"></i> spinner</li>
      <li><i className="uk-icon-spoon"></i> spoon</li>
      <li><i className="uk-icon-square"></i> square</li>
      <li><i className="uk-icon-square-o"></i> square-o</li>
      <li><i className="uk-icon-star"></i> star</li>
      <li><i className="uk-icon-star-half"></i> star-half</li>
      <li><i className="uk-icon-star-half-empty"></i> star-half-empty <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-star-half-full"></i> star-half-full <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-star-half-o"></i> star-half-o</li>
      <li><i className="uk-icon-star-o"></i> star-o</li>
      <li><i className="uk-icon-sticky-note"></i> sticky-note</li>
      <li><i className="uk-icon-sticky-note-o"></i> sticky-note-o</li>
      <li><i className="uk-icon-street-view"></i> street-view</li>
      <li><i className="uk-icon-suitcase"></i> suitcase</li>
      <li><i className="uk-icon-sun-o"></i> sun-o</li>
      <li><i className="uk-icon-support"></i> support <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-tablet"></i> tablet</li>
      <li><i className="uk-icon-tachometer"></i> tachometer</li>
      <li><i className="uk-icon-tag"></i> tag</li>
      <li><i className="uk-icon-tags"></i> tags</li>
      <li><i className="uk-icon-tasks"></i> tasks</li>
      <li><i className="uk-icon-taxi"></i> taxi</li>
      <li><i className="uk-icon-television"></i> television</li>
      <li><i className="uk-icon-terminal"></i> terminal</li>
      <li><i className="uk-icon-thumb-tack"></i> thumb-tack</li>
      <li><i className="uk-icon-thumbs-down"></i> thumbs-down</li>
      <li><i className="uk-icon-thumbs-o-down"></i> thumbs-o-down</li>
      <li><i className="uk-icon-thumbs-o-up"></i> thumbs-o-up</li>
      <li><i className="uk-icon-thumbs-up"></i> thumbs-up</li>
      <li><i className="uk-icon-ticket"></i> ticket</li>
      <li><i className="uk-icon-times"></i> times</li>
      <li><i className="uk-icon-times-circle"></i> times-circle</li>
      <li><i className="uk-icon-times-circle-o"></i> times-circle-o</li>
      <li><i className="uk-icon-tint"></i> tint</li>
      <li><i className="uk-icon-toggle-down"></i> toggle-down <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-toggle-left"></i> toggle-left <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-toggle-off"></i> toggle-off</li>
      <li><i className="uk-icon-toggle-on"></i> toggle-on</li>
      <li><i className="uk-icon-toggle-right"></i> toggle-right <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-toggle-up"></i> toggle-up <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-trademark"></i> trademark</li>
      <li><i className="uk-icon-trash"></i> trash</li>
      <li><i className="uk-icon-trash-o"></i> trash-o</li>
      <li><i className="uk-icon-tree"></i> tree</li>
      <li><i className="uk-icon-trophy"></i> trophy</li>
      <li><i className="uk-icon-truck"></i> truck</li>
      <li><i className="uk-icon-tty"></i> tty</li>
      <li><i className="uk-icon-tv"></i> tv <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-umbrella"></i> umbrella</li>
      <li><i className="uk-icon-university"></i> university</li>
      <li><i className="uk-icon-unlock"></i> unlock</li>
      <li><i className="uk-icon-unlock-alt"></i> unlock-alt</li>
      <li><i className="uk-icon-unsorted"></i> unsorted <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-upload"></i> upload</li>
      <li><i className="uk-icon-usb"></i> usb</li>
      <li><i className="uk-icon-user"></i> user</li>
      <li><i className="uk-icon-user-plus"></i> user-plus</li>
      <li><i className="uk-icon-user-secret"></i> user-secret</li>
      <li><i className="uk-icon-user-times"></i> user-times</li>
      <li><i className="uk-icon-users"></i> users</li>
      <li><i className="uk-icon-video-camera"></i> video-camera</li>
      <li><i className="uk-icon-volume-down"></i> volume-down</li>
      <li><i className="uk-icon-volume-off"></i> volume-off</li>
      <li><i className="uk-icon-volume-up"></i> volume-up</li>
      <li><i className="uk-icon-warning"></i> warning <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-wheelchair"></i> wheelchair</li>
      <li><i className="uk-icon-wifi"></i> wifi</li>
      <li><i className="uk-icon-wrench"></i> wrench</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Transportation Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-ambulance"></i> ambulance</li>
      <li><i className="uk-icon-automobile"></i> automobile <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-bicycle"></i> bicycle</li>
      <li><i className="uk-icon-bus"></i> bus</li>
      <li><i className="uk-icon-cab"></i> cab <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-car"></i> car</li>
      <li><i className="uk-icon-fighter-jet"></i> fighter-jet</li>
      <li><i className="uk-icon-motorcycle"></i> motorcycle</li>
      <li><i className="uk-icon-plane"></i> plane</li>
      <li><i className="uk-icon-rocket"></i> rocket</li>
      <li><i className="uk-icon-ship"></i> ship</li>
      <li><i className="uk-icon-space-shuttle"></i> space-shuttle</li>
      <li><i className="uk-icon-subway"></i> subway</li>
      <li><i className="uk-icon-taxi"></i> taxi</li>
      <li><i className="uk-icon-train"></i> train</li>
      <li><i className="uk-icon-truck"></i> truck</li>
      <li><i className="uk-icon-wheelchair"></i> wheelchair</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Hand Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-hand-lizard-o"></i> hand-lizard-o</li>
      <li><i className="uk-icon-hand-stop-o"></i> hand-stop-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hand-paper-o"></i> hand-paper-o</li>
      <li><i className="uk-icon-hand-peace-o"></i> hand-peace-o</li>
      <li><i className="uk-icon-hand-pointer-o"></i> hand-pointer-o</li>
      <li><i className="uk-icon-hand-grab-o"></i> hand-grab-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-hand-rock-o"></i> hand-rock-o</li>
      <li><i className="uk-icon-hand-scissors-o"></i> hand-scissors-o</li>
      <li><i className="uk-icon-hand-spock-o"></i> hand-spock-o</li>
      <li><i className="uk-icon-thumb-tack"></i> thumb-tack</li>
      <li><i className="uk-icon-thumbs-down"></i> thumbs-down</li>
      <li><i className="uk-icon-thumbs-o-down"></i> thumbs-o-down</li>
      <li><i className="uk-icon-thumbs-o-up"></i> thumbs-o-up</li>
      <li><i className="uk-icon-thumbs-up"></i> thumbs-up</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Gender Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-genderless"></i> genderless <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-mars"></i> mars</li>
      <li><i className="uk-icon-mars-double"></i> mars-double</li>
      <li><i className="uk-icon-mars-stroke"></i> mars-stroke</li>
      <li><i className="uk-icon-mars-stroke-h"></i> mars-stroke-h</li>
      <li><i className="uk-icon-mars-stroke-v"></i> mars-stroke-v</li>
      <li><i className="uk-icon-mercury"></i> mercury</li>
      <li><i className="uk-icon-neuter"></i> neuter</li>
      <li><i className="uk-icon-transgender"></i> transgender</li>
      <li><i className="uk-icon-transgender-alt"></i> transgender-alt</li>
      <li><i className="uk-icon-venus"></i> venus</li>
      <li><i className="uk-icon-venus-double"></i> venus-double</li>
      <li><i className="uk-icon-venus-mars"></i> venus-mars</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>File Type Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-file"></i> file</li>
      <li><i className="uk-icon-file-archive-o"></i> file-archive-o</li>
      <li><i className="uk-icon-file-audio-o"></i> file-audio-o</li>
      <li><i className="uk-icon-file-code-o"></i> file-code-o</li>
      <li><i className="uk-icon-file-excel-o"></i> file-excel-o</li>
      <li><i className="uk-icon-file-image-o"></i> file-image-o</li>
      <li><i className="uk-icon-file-movie-o"></i> file-movie-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-o"></i> file-o</li>
      <li><i className="uk-icon-file-pdf-o"></i> file-pdf-o</li>
      <li><i className="uk-icon-file-photo-o"></i> file-photo-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-picture-o"></i> file-picture-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-powerpoint-o"></i> file-powerpoint-o</li>
      <li><i className="uk-icon-file-sound-o"></i> file-sound-o <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-file-text"></i> file-text</li>
      <li><i className="uk-icon-file-text-o"></i> file-text-o</li>
      <li><i className="uk-icon-file-video-o"></i> file-video-o</li>
      <li><i className="uk-icon-file-word-o"></i> file-word-o</li>
      <li><i className="uk-icon-file-zip-o"></i> file-zip-o <span className="uk-text-muted">(alias)</span></li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Spinner Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-circle-o-notch"></i> circle-o-notch</li>
      <li><i className="uk-icon-cog"></i> cog</li>
      <li><i className="uk-icon-gear"></i> gear <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-refresh"></i> refresh</li>
      <li><i className="uk-icon-spinner"></i> spinner</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Form Control Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-check-square"></i> check-square</li>
      <li><i className="uk-icon-check-square-o"></i> check-square-o</li>
      <li><i className="uk-icon-circle"></i> circle</li>
      <li><i className="uk-icon-circle-o"></i> circle-o</li>
      <li><i className="uk-icon-dot-circle-o"></i> dot-circle-o</li>
      <li><i className="uk-icon-minus-square"></i> minus-square</li>
      <li><i className="uk-icon-minus-square-o"></i> minus-square-o</li>
      <li><i className="uk-icon-plus-square"></i> plus-square</li>
      <li><i className="uk-icon-plus-square-o"></i> plus-square-o</li>
      <li><i className="uk-icon-square"></i> square</li>
      <li><i className="uk-icon-square-o"></i> square-o</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Payment Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-cc-amex"></i> cc-amex</li>
      <li><i className="uk-icon-cc-diners-club"></i> cc-diners-club</li>
      <li><i className="uk-icon-cc-discover"></i> cc-discover</li>
      <li><i className="uk-icon-cc-jcb"></i> cc-jcb</li>
      <li><i className="uk-icon-cc-mastercard"></i> cc-mastercard</li>
      <li><i className="uk-icon-cc-paypal"></i> cc-paypal</li>
      <li><i className="uk-icon-cc-stripe"></i> cc-stripe</li>
      <li><i className="uk-icon-cc-visa"></i> cc-visa</li>
      <li><i className="uk-icon-credit-card"></i> credit-card</li>
      <li><i className="uk-icon-google-wallet"></i> google-wallet</li>
      <li><i className="uk-icon-paypal"></i> paypal</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Currency Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-bitcoin"></i> bitcoin <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-btc"></i> btc</li>
      <li><i className="uk-icon-cny"></i> cny <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-dollar"></i> dollar <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-eur"></i> eur</li>
      <li><i className="uk-icon-euro"></i> euro <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-gbp"></i> gbp</li>
      <li><i className="uk-icon-ils"></i> ils</li>
      <li><i className="uk-icon-inr"></i> inr</li>
      <li><i className="uk-icon-jpy"></i> jpy</li>
      <li><i className="uk-icon-krw"></i> krw</li>
      <li><i className="uk-icon-money"></i> money</li>
      <li><i className="uk-icon-rmb"></i> rmb <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-rouble"></i> rouble <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-rub"></i> rub</li>
      <li><i className="uk-icon-ruble"></i> ruble <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-rupee"></i> rupee <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-shekel"></i> shekel <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-sheqel"></i> sheqel <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-try"></i> try</li>
      <li><i className="uk-icon-turkish-lira"></i> turkish-lira <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-usd"></i> usd</li>
      <li><i className="uk-icon-won"></i> won <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-yen"></i> yen <span className="uk-text-muted">(alias)</span></li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Text Editor Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-align-center"></i> align-center</li>
      <li><i className="uk-icon-align-justify"></i> align-justify</li>
      <li><i className="uk-icon-align-left"></i> align-left</li>
      <li><i className="uk-icon-align-right"></i> align-right</li>
      <li><i className="uk-icon-bold"></i> bold</li>
      <li><i className="uk-icon-chain"></i> chain <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-chain-broken"></i> chain-broken</li>
      <li><i className="uk-icon-clipboard"></i> clipboard</li>
      <li><i className="uk-icon-columns"></i> columns</li>
      <li><i className="uk-icon-copy"></i> copy <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-cut"></i> cut <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-dedent"></i> dedent <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-eraser"></i> eraser</li>
      <li><i className="uk-icon-file"></i> file</li>
      <li><i className="uk-icon-file-o"></i> file-o</li>
      <li><i className="uk-icon-file-text"></i> file-text</li>
      <li><i className="uk-icon-file-text-o"></i> file-text-o</li>
      <li><i className="uk-icon-files-o"></i> files-o</li>
      <li><i className="uk-icon-floppy-o"></i> floppy-o</li>
      <li><i className="uk-icon-font"></i> font</li>
      <li><i className="uk-icon-header"></i> header</li>
      <li><i className="uk-icon-indent"></i> indent</li>
      <li><i className="uk-icon-italic"></i> italic</li>
      <li><i className="uk-icon-link"></i> link</li>
      <li><i className="uk-icon-list"></i> list</li>
      <li><i className="uk-icon-list-alt"></i> list-alt</li>
      <li><i className="uk-icon-list-ol"></i> list-ol</li>
      <li><i className="uk-icon-list-ul"></i> list-ul</li>
      <li><i className="uk-icon-outdent"></i> outdent</li>
      <li><i className="uk-icon-paperclip"></i> paperclip</li>
      <li><i className="uk-icon-paragraph"></i> paragraph</li>
      <li><i className="uk-icon-paste"></i> paste <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-repeat"></i> repeat</li>
      <li><i className="uk-icon-rotate-left"></i> rotate-left <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-rotate-right"></i> rotate-right <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-save"></i> save <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-scissors"></i> scissors</li>
      <li><i className="uk-icon-strikethrough"></i> strikethrough</li>
      <li><i className="uk-icon-subscript"></i> subscript</li>
      <li><i className="uk-icon-superscript"></i> superscript</li>
      <li><i className="uk-icon-table"></i> table</li>
      <li><i className="uk-icon-text-height"></i> text-height</li>
      <li><i className="uk-icon-text-width"></i> text-width</li>
      <li><i className="uk-icon-th"></i> th</li>
      <li><i className="uk-icon-th-large"></i> th-large</li>
      <li><i className="uk-icon-th-list"></i> th-list</li>
      <li><i className="uk-icon-underline"></i> underline</li>
      <li><i className="uk-icon-undo"></i> undo</li>
      <li><i className="uk-icon-unlink"></i> unlink <span className="uk-text-muted">(alias)</span></li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Directional Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-angle-double-down"></i> angle-double-down</li>
      <li><i className="uk-icon-angle-double-left"></i> angle-double-left</li>
      <li><i className="uk-icon-angle-double-right"></i> angle-double-right</li>
      <li><i className="uk-icon-angle-double-up"></i> angle-double-up</li>
      <li><i className="uk-icon-angle-down"></i> angle-down</li>
      <li><i className="uk-icon-angle-left"></i> angle-left</li>
      <li><i className="uk-icon-angle-right"></i> angle-right</li>
      <li><i className="uk-icon-angle-up"></i> angle-up</li>
      <li><i className="uk-icon-arrow-circle-down"></i> arrow-circle-down</li>
      <li><i className="uk-icon-arrow-circle-left"></i> arrow-circle-left</li>
      <li><i className="uk-icon-arrow-circle-o-down"></i> arrow-circle-o-down</li>
      <li><i className="uk-icon-arrow-circle-o-left"></i> arrow-circle-o-left</li>
      <li><i className="uk-icon-arrow-circle-o-right"></i> arrow-circle-o-right</li>
      <li><i className="uk-icon-arrow-circle-o-up"></i> arrow-circle-o-up</li>
      <li><i className="uk-icon-arrow-circle-right"></i> arrow-circle-right</li>
      <li><i className="uk-icon-arrow-circle-up"></i> arrow-circle-up</li>
      <li><i className="uk-icon-arrow-down"></i> arrow-down</li>
      <li><i className="uk-icon-arrow-left"></i> arrow-left</li>
      <li><i className="uk-icon-arrow-right"></i> arrow-right</li>
      <li><i className="uk-icon-arrow-up"></i> arrow-up</li>
      <li><i className="uk-icon-arrows"></i> arrows</li>
      <li><i className="uk-icon-arrows-alt"></i> arrows-alt</li>
      <li><i className="uk-icon-arrows-h"></i> arrows-h</li>
      <li><i className="uk-icon-arrows-v"></i> arrows-v</li>
      <li><i className="uk-icon-caret-down"></i> caret-down</li>
      <li><i className="uk-icon-caret-left"></i> caret-left</li>
      <li><i className="uk-icon-caret-right"></i> caret-right</li>
      <li><i className="uk-icon-caret-square-o-down"></i> caret-square-o-down</li>
      <li><i className="uk-icon-caret-square-o-left"></i> caret-square-o-left</li>
      <li><i className="uk-icon-caret-square-o-right"></i> caret-square-o-right</li>
      <li><i className="uk-icon-caret-square-o-up"></i> caret-square-o-up</li>
      <li><i className="uk-icon-caret-up"></i> caret-up</li>
      <li><i className="uk-icon-chevron-circle-down"></i> chevron-circle-down</li>
      <li><i className="uk-icon-chevron-circle-left"></i> chevron-circle-left</li>
      <li><i className="uk-icon-chevron-circle-right"></i> chevron-circle-right</li>
      <li><i className="uk-icon-chevron-circle-up"></i> chevron-circle-up</li>
      <li><i className="uk-icon-chevron-down"></i> chevron-down</li>
      <li><i className="uk-icon-chevron-left"></i> chevron-left</li>
      <li><i className="uk-icon-chevron-right"></i> chevron-right</li>
      <li><i className="uk-icon-chevron-up"></i> chevron-up</li>
      <li><i className="uk-icon-hand-o-down"></i> hand-o-down</li>
      <li><i className="uk-icon-hand-o-left"></i> hand-o-left</li>
      <li><i className="uk-icon-hand-o-right"></i> hand-o-right</li>
      <li><i className="uk-icon-hand-o-up"></i> hand-o-up</li>
      <li><i className="uk-icon-long-arrow-down"></i> long-arrow-down</li>
      <li><i className="uk-icon-long-arrow-left"></i> long-arrow-left</li>
      <li><i className="uk-icon-long-arrow-right"></i> long-arrow-right</li>
      <li><i className="uk-icon-long-arrow-up"></i> long-arrow-up</li>
      <li><i className="uk-icon-toggle-down"></i> toggle-down <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-toggle-left"></i> toggle-left <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-toggle-right"></i> toggle-right <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-toggle-up"></i> toggle-up <span className="uk-text-muted">(alias)</span></li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Video Player Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-arrows-alt"></i> arrows-alt</li>
      <li><i className="uk-icon-backward"></i> backward</li>
      <li><i className="uk-icon-compress"></i> compress</li>
      <li><i className="uk-icon-eject"></i> eject</li>
      <li><i className="uk-icon-expand"></i> expand</li>
      <li><i className="uk-icon-fast-backward"></i> fast-backward</li>
      <li><i className="uk-icon-fast-forward"></i> fast-forward</li>
      <li><i className="uk-icon-forward"></i> forward</li>
      <li><i className="uk-icon-pause"></i> pause</li>
      <li><i className="uk-icon-pause-circle"></i> pause-circle</li>
      <li><i className="uk-icon-pause-circle-o"></i> pause-circle-o</li>
      <li><i className="uk-icon-play"></i> play</li>
      <li><i className="uk-icon-play-circle"></i> play-circle</li>
      <li><i className="uk-icon-play-circle-o"></i> play-circle-o</li>
      <li><i className="uk-icon-step-backward"></i> step-backward</li>
      <li><i className="uk-icon-step-forward"></i> step-forward</li>
      <li><i className="uk-icon-stop"></i> stop</li>
      <li><i className="uk-icon-stop-circle"></i> stop-circle</li>
      <li><i className="uk-icon-stop-circle-o"></i> stop-circle-o</li>
      <li><i className="uk-icon-youtube-play"></i> youtube-play</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Brand Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-500px"></i> 500px</li>
      <li><i className="uk-icon-adn"></i> adn</li>
      <li><i className="uk-icon-amazon"></i> amazon</li>
      <li><i className="uk-icon-android"></i> android</li>
      <li><i className="uk-icon-angellist"></i> angellist</li>
      <li><i className="uk-icon-apple"></i> apple</li>
      <li><i className="uk-icon-behance"></i> behance</li>
      <li><i className="uk-icon-behance-square"></i> behance-square</li>
      <li><i className="uk-icon-bitbucket"></i> bitbucket</li>
      <li><i className="uk-icon-bitbucket-square"></i> bitbucket-square</li>
      <li><i className="uk-icon-bitcoin"></i> bitcoin <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-black-tie"></i> black-tie</li>
      <li><i className="uk-icon-bluetooth"></i> bluetooth</li>
      <li><i className="uk-icon-bluetooth-b"></i> bluetooth-b</li>
      <li><i className="uk-icon-btc"></i> btc</li>
      <li><i className="uk-icon-buysellads"></i> buysellads</li>
      <li><i className="uk-icon-cc-amex"></i> cc-amex</li>
      <li><i className="uk-icon-cc-diners-club"></i> cc-diners-club</li>
      <li><i className="uk-icon-cc-discover"></i> cc-discover</li>
      <li><i className="uk-icon-cc-jcb"></i> cc-jcb</li>
      <li><i className="uk-icon-cc-mastercard"></i> cc-mastercard</li>
      <li><i className="uk-icon-cc-paypal"></i> cc-paypal</li>
      <li><i className="uk-icon-cc-stripe"></i> cc-stripe</li>
      <li><i className="uk-icon-cc-visa"></i> cc-visa</li>
      <li><i className="uk-icon-chrome"></i> chrome</li>
      <li><i className="uk-icon-codepen"></i> codepen</li>
      <li><i className="uk-icon-codiepie"></i> codiepie</li>
      <li><i className="uk-icon-connectdevelop"></i> connectdevelop</li>
      <li><i className="uk-icon-contao"></i> contao</li>
      <li><i className="uk-icon-css3"></i> css3</li>
      <li><i className="uk-icon-dashcube"></i> dashcube</li>
      <li><i className="uk-icon-delicious"></i> delicious</li>
      <li><i className="uk-icon-deviantart"></i> deviantart</li>
      <li><i className="uk-icon-digg"></i> digg</li>
      <li><i className="uk-icon-dribbble"></i> dribbble</li>
      <li><i className="uk-icon-dropbox"></i> dropbox</li>
      <li><i className="uk-icon-drupal"></i> drupal</li>
      <li><i className="uk-icon-edge"></i> edge</li>
      <li><i className="uk-icon-empire"></i> empire</li>
      <li><i className="uk-icon-expeditedssl"></i> expeditedssl</li>
      <li><i className="uk-icon-facebook"></i> facebook</li>
      <li><i className="uk-icon-facebook-f"></i> facebook-f <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-facebook-official"></i> facebook-official</li>
      <li><i className="uk-icon-facebook-square"></i> facebook-square</li>
      <li><i className="uk-icon-firefox"></i> firefox</li>
      <li><i className="uk-icon-flickr"></i> flickr</li>
      <li><i className="uk-icon-fonticons"></i> fonticons</li>
      <li><i className="uk-icon-fort-awesome"></i> fort-awesome</li>
      <li><i className="uk-icon-forumbee"></i> forumbee</li>
      <li><i className="uk-icon-foursquare"></i> foursquare</li>
      <li><i className="uk-icon-ge"></i> ge <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-get-pocket"></i> get-pocket</li>
      <li><i className="uk-icon-gg"></i> gg</li>
      <li><i className="uk-icon-gg-circle"></i> gg-circle</li>
      <li><i className="uk-icon-git"></i> git</li>
      <li><i className="uk-icon-git-square"></i> git-square</li>
      <li><i className="uk-icon-github"></i> github</li>
      <li><i className="uk-icon-github-alt"></i> github-alt</li>
      <li><i className="uk-icon-github-square"></i> github-square</li>
      <li><i className="uk-icon-gittip"></i> gittip <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-google"></i> google</li>
      <li><i className="uk-icon-google-plus"></i> google-plus</li>
      <li><i className="uk-icon-google-plus-square"></i> google-plus-square</li>
      <li><i className="uk-icon-google-wallet"></i> google-wallet</li>
      <li><i className="uk-icon-gratipay"></i> gratipay</li>
      <li><i className="uk-icon-hacker-news"></i> hacker-news</li>
      <li><i className="uk-icon-houzz"></i> houzz</li>
      <li><i className="uk-icon-html5"></i> html5</li>
      <li><i className="uk-icon-instagram"></i> instagram</li>
      <li><i className="uk-icon-internet-explorer"></i> internet-explorer</li>
      <li><i className="uk-icon-ioxhost"></i> ioxhost</li>
      <li><i className="uk-icon-joomla"></i> joomla</li>
      <li><i className="uk-icon-jsfiddle"></i> jsfiddle</li>
      <li><i className="uk-icon-lastfm"></i> lastfm</li>
      <li><i className="uk-icon-lastfm-square"></i> lastfm-square</li>
      <li><i className="uk-icon-leanpub"></i> leanpub</li>
      <li><i className="uk-icon-linkedin"></i> linkedin</li>
      <li><i className="uk-icon-linkedin-square"></i> linkedin-square</li>
      <li><i className="uk-icon-linux"></i> linux</li>
      <li><i className="uk-icon-maxcdn"></i> maxcdn</li>
      <li><i className="uk-icon-meanpath"></i> meanpath</li>
      <li><i className="uk-icon-medium-logo"></i> medium-logo</li>
      <li><i className="uk-icon-mixcloud"></i> mixcloud</li>
      <li><i className="uk-icon-modx"></i> modx</li>
      <li><i className="uk-icon-odnoklassniki"></i> odnoklassniki</li>
      <li><i className="uk-icon-odnoklassniki-square"></i> odnoklassniki-square</li>
      <li><i className="uk-icon-opencart"></i> opencart</li>
      <li><i className="uk-icon-openid"></i> openid</li>
      <li><i className="uk-icon-opera"></i> opera</li>
      <li><i className="uk-icon-optin-monster"></i> optin-monster</li>
      <li><i className="uk-icon-pagelines"></i> pagelines</li>
      <li><i className="uk-icon-paypal"></i> paypal</li>
      <li><i className="uk-icon-pied-piper"></i> pied-piper</li>
      <li><i className="uk-icon-pied-piper-alt"></i> pied-piper-alt</li>
      <li><i className="uk-icon-pinterest"></i> pinterest</li>
      <li><i className="uk-icon-pinterest-p"></i> pinterest-p</li>
      <li><i className="uk-icon-pinterest-square"></i> pinterest-square</li>
      <li><i className="uk-icon-product-hunt"></i> product-hunt</li>
      <li><i className="uk-icon-qq"></i> qq</li>
      <li><i className="uk-icon-ra"></i> ra <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-rebel"></i> rebel</li>
      <li><i className="uk-icon-reddit"></i> reddit</li>
      <li><i className="uk-icon-reddit-alien"></i> reddit-alien</li>
      <li><i className="uk-icon-reddit-square"></i> reddit-square</li>
      <li><i className="uk-icon-renren"></i> renren</li>
      <li><i className="uk-icon-safari"></i> safari</li>
      <li><i className="uk-icon-scribd"></i> scribd</li>
      <li><i className="uk-icon-sellsy"></i> sellsy</li>
      <li><i className="uk-icon-share-alt"></i> share-alt</li>
      <li><i className="uk-icon-share-alt-square"></i> share-alt-square</li>
      <li><i className="uk-icon-shirtsinbulk"></i> shirtsinbulk</li>
      <li><i className="uk-icon-simplybuilt"></i> simplybuilt</li>
      <li><i className="uk-icon-skyatlas"></i> skyatlas</li>
      <li><i className="uk-icon-skype"></i> skype</li>
      <li><i className="uk-icon-slack"></i> slack</li>
      <li><i className="uk-icon-slideshare"></i> slideshare</li>
      <li><i className="uk-icon-soundcloud"></i> soundcloud</li>
      <li><i className="uk-icon-spotify"></i> spotify</li>
      <li><i className="uk-icon-stack-exchange"></i> stack-exchange</li>
      <li><i className="uk-icon-stack-overflow"></i> stack-overflow</li>
      <li><i className="uk-icon-steam"></i> steam</li>
      <li><i className="uk-icon-steam-square"></i> steam-square</li>
      <li><i className="uk-icon-stumbleupon"></i> stumbleupon</li>
      <li><i className="uk-icon-stumbleupon-circle"></i> stumbleupon-circle</li>
      <li><i className="uk-icon-tencent-weibo"></i> tencent-weibo</li>
      <li><i className="uk-icon-trello"></i> trello</li>
      <li><i className="uk-icon-tripadvisor"></i> tripadvisor</li>
      <li><i className="uk-icon-tumblr"></i> tumblr</li>
      <li><i className="uk-icon-tumblr-square"></i> tumblr-square</li>
      <li><i className="uk-icon-twitch"></i> twitch</li>
      <li><i className="uk-icon-twitter"></i> twitter</li>
      <li><i className="uk-icon-twitter-square"></i> twitter-square</li>
      <li><i className="uk-icon-usb"></i> usb</li>
      <li><i className="uk-icon-viacoin"></i> viacoin</li>
      <li><i className="uk-icon-vimeo"></i> vimeo</li>
      <li><i className="uk-icon-vimeo-square"></i> vimeo-square</li>
      <li><i className="uk-icon-vine"></i> vine</li>
      <li><i className="uk-icon-vk"></i> vk</li>
      <li><i className="uk-icon-wechat"></i> wechat <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-weibo"></i> weibo</li>
      <li><i className="uk-icon-weixin"></i> weixin</li>
      <li><i className="uk-icon-whatsapp"></i> whatsapp</li>
      <li><i className="uk-icon-wikipedia-w"></i> wikipedia-w</li>
      <li><i className="uk-icon-windows"></i> windows</li>
      <li><i className="uk-icon-wordpress"></i> wordpress</li>
      <li><i className="uk-icon-xing"></i> xing</li>
      <li><i className="uk-icon-xing-square"></i> xing-square</li>
      <li><i className="uk-icon-y-combinator"></i> y-combinator</li>
      <li><i className="uk-icon-y-combinator-square"></i> y-combinator-square</li>
      <li><i className="uk-icon-yahoo"></i> yahoo</li>
      <li><i className="uk-icon-yc"></i> yc <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-yc-square"></i> yc-square <span className="uk-text-muted">(alias)</span></li>
      <li><i className="uk-icon-yelp"></i> yelp</li>
      <li><i className="uk-icon-youtube"></i> youtube</li>
      <li><i className="uk-icon-youtube-play"></i> youtube-play</li>
      <li><i className="uk-icon-youtube-square"></i> youtube-square</li>
    </ul>
    <hr className="uk-article-divider" />

    <h3>Medical Icons</h3>
    <ul className="uk-grid uk-grid-width-1-2 uk-grid-width-medium-1-4 tm-icons">
      <li><i className="uk-icon-ambulance"></i> ambulance</li>
      <li><i className="uk-icon-h-square"></i> h-square</li>
      <li><i className="uk-icon-hospital-o"></i> hospital-o</li>
      <li><i className="uk-icon-medkit"></i> medkit</li>
      <li><i className="uk-icon-plus-square"></i> plus-square</li>
      <li><i className="uk-icon-stethoscope"></i> stethoscope</li>
      <li><i className="uk-icon-user-md"></i> user-md</li>
      <li><i className="uk-icon-wheelchair"></i> wheelchair</li>
    </ul>
  </div>
);

export default iconCollection;
