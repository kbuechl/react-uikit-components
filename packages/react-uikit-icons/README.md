# React Uikit Icons



## Usage

    npm install react-uikit-icons --save;

    // ES6
    import Icons from 'react-uikit-icons';

    // ES5
    var Icons = require('react-uikit-icons');



## Example

<span>The Icon component uses the fantastic [Font Awesome](https://fortawesome.github.io/Font-Awesome/) icon font, a project by Dave Gandy, which provides more than 300 symbols and glyphs for web-related actions</span>

<table class="uk-table">

<thead>

<tr>

<th>example</th>

<th>description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='cog'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='user'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='home'` prop</span></td>

</tr>

</tbody>

</table>

### Code

    <Icons icon='cog' />
    <Icons icon='user' />
    <Icons icon='home' />

## Icons Link

<span>Icons can be used as anchors by adding the `link` prop. The properties from the `link` prop will be passed to the anchor.</span>

<table class="uk-table">

<thead>

<tr>

<th>example</th>

<th>description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='cog'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='user'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='home'` prop</span></td>

</tr>

</tbody>

</table>



### Code

    <Icons link={{ href: '#' }} icon='facebook-official' size='small' margin='right'/>
    <Icons link={{ href: '#' }} icon='twitter-square' size='small' margin='right'/>
    <Icons link={{ href: '#' }} icon='github-square ' size='small'/>

## Button icon

<span>To display an Icon as a button add a `type: 'button'` property to the `link` prop.</span>

<table class="uk-table">

<thead>

<tr>

<th>example</th>

<th>description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='cog'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='user'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `icon='home'` prop</span></td>

</tr>

</tbody>

</table>



### Code

    <Icons link={{ href: '#', type: 'button' }} icon='facebook' size='small' margin='right'/>
    <Icons link={{ href: '#', type: 'button' }} icon='twitter' size='small' margin='right'/>
    <Icons link={{ href: '#', type: 'button' }} icon='github ' size='small'/>

## Icon sizes

<span>Icons can be displayed in larger sizes by using the `size='*'` prop.</span>

<table class="uk-table">

<thead>

<tr>

<th>example</th>

<th>description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1"></td>

<td>Default size</td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `size='small'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `size='medium'` prop</span></td>

</tr>

<tr>

<td colspan="1"></td>

<td><span>Uses the `size='large'` prop</span></td>

</tr>

</tbody>

</table>

### Code

    <Icons icon='home' />
    <Icons icon='home' size='small'/>
    <Icons icon='home' size='medium'/>
    <Icons icon='home' size='large'/>

## Spinning Icon

<span>Add the `spin` class to create animated spinning icons.</span>


### Code

    <Icons spin icon='spinner' margin='right'/>
    <Icons spin icon='refresh' margin='right'/>

## Justify Icon

<span>To add a fixed width to the icon and center it, add the `justify` prop. This is useful when using different icons in a list.</span>


### Code

    <List line>
      <ListItem><Icons justify icon='flash' /> Justified icon</ListItem>
      <ListItem><Icons justify icon='folder' /> Justified icon</ListItem>
      <ListItem><Icons justify icon='plug' /> Justified icon</ListItem>
      <ListItem><Icons justify icon='lock' /> Justified icon</ListItem>
    </List>

## Icon mapping



*   adjust
*   anchor
*   archive
*   area-chart
*   arrows
*   arrows-h
*   arrows-v
*   asterisk
*   at
*   automobile <span class="uk-text-muted">(alias)</span>
*   balance-scale
*   ban
*   bank <span class="uk-text-muted">(alias)</span>
*   bar-chart
*   bar-chart-o <span class="uk-text-muted">(alias)</span>
*   barcode
*   bars
*   battery-empty <span class="uk-text-muted">(alias)</span>
*   battery-0
*   battery-quarter <span class="uk-text-muted">(alias)</span>
*   battery-1
*   battery-half <span class="uk-text-muted">(alias)</span>
*   battery-2
*   battery-three-quarters <span class="uk-text-muted">(alias)</span>
*   battery-3
*   battery-full <span class="uk-text-muted">(alias)</span>
*   battery-4
*   bed
*   beer
*   bell
*   bell-o
*   bell-slash
*   bell-slash-o
*   bicycle
*   binoculars
*   birthday-cake
*   bluetooth
*   bluetooth-b
*   bolt
*   bomb
*   book
*   bookmark
*   bookmark-o
*   briefcase
*   bug
*   building
*   building-o
*   bullhorn
*   bullseye
*   bus
*   cab <span class="uk-text-muted">(alias)</span>
*   calculator
*   calendar
*   calendar-check-o
*   calendar-minus-o
*   calendar-o
*   calendar-plus-o
*   calendar-times-o
*   camera
*   camera-retro
*   car
*   caret-square-o-down
*   caret-square-o-left
*   caret-square-o-right
*   caret-square-o-up
*   cart-arrow-down
*   cart-plus
*   cc
*   certificate
*   check
*   check-circle
*   check-circle-o
*   check-square
*   check-square-o
*   child
*   circle
*   circle-o
*   circle-o-notch
*   circle-thin
*   clock-o
*   clone
*   close <span class="uk-text-muted">(alias)</span>
*   cloud
*   cloud-download
*   cloud-upload
*   code
*   code-fork
*   coffee
*   cog
*   cogs
*   comment
*   comment-o
*   commenting
*   commenting-o
*   comments
*   comments-o
*   compass
*   copyright
*   creative-commons
*   credit-card
*   credit-card-alt
*   crop
*   crosshairs
*   cube
*   cubes
*   cutlery
*   dashboard <span class="uk-text-muted">(alias)</span>
*   database
*   desktop
*   diamond
*   dot-circle-o
*   download
*   edit <span class="uk-text-muted">(alias)</span>
*   ellipsis-h
*   ellipsis-v
*   envelope
*   envelope-o
*   envelope-square
*   eraser
*   exchange
*   exclamation
*   exclamation-circle
*   exclamation-triangle
*   external-link
*   external-link-square
*   eye
*   eye-slash
*   eyedropper
*   fax
*   female
*   fighter-jet
*   file-archive-o
*   file-audio-o
*   file-code-o
*   file-excel-o
*   file-image-o
*   file-movie-o <span class="uk-text-muted">(alias)</span>
*   file-pdf-o
*   file-photo-o <span class="uk-text-muted">(alias)</span>
*   file-picture-o <span class="uk-text-muted">(alias)</span>
*   file-powerpoint-o
*   file-sound-o <span class="uk-text-muted">(alias)</span>
*   file-video-o
*   file-word-o
*   file-zip-o <span class="uk-text-muted">(alias)</span>
*   film
*   filter
*   fire
*   fire-extinguisher
*   flag
*   flag-checkered
*   flag-o
*   flash <span class="uk-text-muted">(alias)</span>
*   flask
*   folder
*   folder-o
*   folder-open
*   folder-open-o
*   frown-o
*   futbol-o
*   gamepad
*   gavel
*   gear <span class="uk-text-muted">(alias)</span>
*   gears <span class="uk-text-muted">(alias)</span>
*   genderless <span class="uk-text-muted">(alias)</span>
*   gift
*   glass
*   globe
*   graduation-cap
*   group <span class="uk-text-muted">(alias)</span>
*   hand-lizard-o
*   hand-stop-o <span class="uk-text-muted">(alias)</span>
*   hand-paper-o
*   hand-peace-o
*   hand-pointer-o
*   hand-grab-o <span class="uk-text-muted">(alias)</span>
*   hand-rock-o
*   hand-scissors-o
*   hand-spock-o
*   hdd-o
*   hashtag
*   headphones
*   heart
*   heart-o
*   heartbeat
*   history
*   home
*   hotel <span class="uk-text-muted">(alias)</span>
*   hourglass
*   hourglass-o
*   hourglass-1 <span class="uk-text-muted">(alias)</span>
*   hourglass-start
*   hourglass-2 <span class="uk-text-muted">(alias)</span>
*   hourglass-half
*   hourglass-3 <span class="uk-text-muted">(alias)</span>
*   hourglass-end
*   i-cursor
*   image <span class="uk-text-muted">(alias)</span>
*   inbox
*   industry
*   info
*   info-circle
*   institution <span class="uk-text-muted">(alias)</span>
*   key
*   keyboard-o
*   language
*   laptop
*   leaf
*   legal <span class="uk-text-muted">(alias)</span>
*   lemon-o
*   level-down
*   level-up
*   life-bouy <span class="uk-text-muted">(alias)</span>
*   life-buoy <span class="uk-text-muted">(alias)</span>
*   life-ring
*   life-saver <span class="uk-text-muted">(alias)</span>
*   lightbulb-o
*   line-chart
*   location-arrow
*   lock
*   magic
*   magnet
*   mail-forward <span class="uk-text-muted">(alias)</span>
*   mail-reply <span class="uk-text-muted">(alias)</span>
*   mail-reply-all <span class="uk-text-muted">(alias)</span>
*   male
*   map
*   map-marker
*   map-o
*   map-pin
*   map-signs
*   meh-o
*   microphone
*   microphone-slash
*   minus
*   minus-circle
*   minus-square
*   minus-square-o
*   mobile
*   mobile-phone <span class="uk-text-muted">(alias)</span>
*   money
*   moon-o
*   mortar-board <span class="uk-text-muted">(alias)</span>
*   motorcycle
*   mouse-pointer
*   music
*   navicon <span class="uk-text-muted">(alias)</span>
*   newspaper-o
*   object-group
*   object-ungroup
*   paint-brush
*   paper-plane
*   paper-plane-o
*   paw
*   pencil
*   pencil-square
*   pencil-square-o
*   percent
*   phone
*   phone-square
*   photo <span class="uk-text-muted">(alias)</span>
*   picture-o
*   pie-chart
*   plane
*   plug
*   plus
*   plus-circle
*   plus-square
*   plus-square-o
*   power-off
*   print
*   puzzle-piece
*   qrcode
*   question
*   question-circle
*   quote-left
*   quote-right
*   random
*   recycle
*   refresh
*   registered
*   remove <span class="uk-text-muted">(alias)</span>
*   reorder <span class="uk-text-muted">(alias)</span>
*   reply
*   reply-all
*   retweet
*   road
*   rocket
*   rss
*   rss-square
*   search
*   search-minus
*   search-plus
*   send <span class="uk-text-muted">(alias)</span>
*   send-o <span class="uk-text-muted">(alias)</span>
*   server
*   share
*   share-alt
*   share-alt-square
*   share-square
*   share-square-o
*   shield
*   ship
*   shopping-bag
*   shopping-basket
*   shopping-cart
*   sign-in
*   sign-out
*   signal
*   sitemap
*   sliders
*   smile-o
*   soccer-ball-o <span class="uk-text-muted">(alias)</span>
*   sort
*   sort-alpha-asc
*   sort-alpha-desc
*   sort-amount-asc
*   sort-amount-desc
*   sort-asc
*   sort-desc
*   sort-down <span class="uk-text-muted">(alias)</span>
*   sort-numeric-asc
*   sort-numeric-desc
*   sort-up <span class="uk-text-muted">(alias)</span>
*   space-shuttle
*   spinner
*   spoon
*   square
*   square-o
*   star
*   star-half
*   star-half-empty <span class="uk-text-muted">(alias)</span>
*   star-half-full <span class="uk-text-muted">(alias)</span>
*   star-half-o
*   star-o
*   sticky-note
*   sticky-note-o
*   street-view
*   suitcase
*   sun-o
*   support <span class="uk-text-muted">(alias)</span>
*   tablet
*   tachometer
*   tag
*   tags
*   tasks
*   taxi
*   television
*   terminal
*   thumb-tack
*   thumbs-down
*   thumbs-o-down
*   thumbs-o-up
*   thumbs-up
*   ticket
*   times
*   times-circle
*   times-circle-o
*   tint
*   toggle-down <span class="uk-text-muted">(alias)</span>
*   toggle-left <span class="uk-text-muted">(alias)</span>
*   toggle-off
*   toggle-on
*   toggle-right <span class="uk-text-muted">(alias)</span>
*   toggle-up <span class="uk-text-muted">(alias)</span>
*   trademark
*   trash
*   trash-o
*   tree
*   trophy
*   truck
*   tty
*   tv <span class="uk-text-muted">(alias)</span>
*   umbrella
*   university
*   unlock
*   unlock-alt
*   unsorted <span class="uk-text-muted">(alias)</span>
*   upload
*   usb
*   user
*   user-plus
*   user-secret
*   user-times
*   users
*   video-camera
*   volume-down
*   volume-off
*   volume-up
*   warning <span class="uk-text-muted">(alias)</span>
*   wheelchair
*   wifi
*   wrench

* * *

### Transportation Icons

*   ambulance
*   automobile <span class="uk-text-muted">(alias)</span>
*   bicycle
*   bus
*   cab <span class="uk-text-muted">(alias)</span>
*   car
*   fighter-jet
*   motorcycle
*   plane
*   rocket
*   ship
*   space-shuttle
*   subway
*   taxi
*   train
*   truck
*   wheelchair

* * *

### Hand Icons

*   hand-lizard-o
*   hand-stop-o <span class="uk-text-muted">(alias)</span>
*   hand-paper-o
*   hand-peace-o
*   hand-pointer-o
*   hand-grab-o <span class="uk-text-muted">(alias)</span>
*   hand-rock-o
*   hand-scissors-o
*   hand-spock-o
*   thumb-tack
*   thumbs-down
*   thumbs-o-down
*   thumbs-o-up
*   thumbs-up

* * *

### Gender Icons

*   genderless <span class="uk-text-muted">(alias)</span>
*   mars
*   mars-double
*   mars-stroke
*   mars-stroke-h
*   mars-stroke-v
*   mercury
*   neuter
*   transgender
*   transgender-alt
*   venus
*   venus-double
*   venus-mars

* * *

### File Type Icons

*   file
*   file-archive-o
*   file-audio-o
*   file-code-o
*   file-excel-o
*   file-image-o
*   file-movie-o <span class="uk-text-muted">(alias)</span>
*   file-o
*   file-pdf-o
*   file-photo-o <span class="uk-text-muted">(alias)</span>
*   file-picture-o <span class="uk-text-muted">(alias)</span>
*   file-powerpoint-o
*   file-sound-o <span class="uk-text-muted">(alias)</span>
*   file-text
*   file-text-o
*   file-video-o
*   file-word-o
*   file-zip-o <span class="uk-text-muted">(alias)</span>

* * *

### Spinner Icons

*   circle-o-notch
*   cog
*   gear <span class="uk-text-muted">(alias)</span>
*   refresh
*   spinner

* * *

### Form Control Icons

*   check-square
*   check-square-o
*   circle
*   circle-o
*   dot-circle-o
*   minus-square
*   minus-square-o
*   plus-square
*   plus-square-o
*   square
*   square-o

* * *

### Payment Icons

*   cc-amex
*   cc-diners-club
*   cc-discover
*   cc-jcb
*   cc-mastercard
*   cc-paypal
*   cc-stripe
*   cc-visa
*   credit-card
*   google-wallet
*   paypal

* * *

### Currency Icons

*   bitcoin <span class="uk-text-muted">(alias)</span>
*   btc
*   cny <span class="uk-text-muted">(alias)</span>
*   dollar <span class="uk-text-muted">(alias)</span>
*   eur
*   euro <span class="uk-text-muted">(alias)</span>
*   gbp
*   ils
*   inr
*   jpy
*   krw
*   money
*   rmb <span class="uk-text-muted">(alias)</span>
*   rouble <span class="uk-text-muted">(alias)</span>
*   rub
*   ruble <span class="uk-text-muted">(alias)</span>
*   rupee <span class="uk-text-muted">(alias)</span>
*   shekel <span class="uk-text-muted">(alias)</span>
*   sheqel <span class="uk-text-muted">(alias)</span>
*   try
*   turkish-lira <span class="uk-text-muted">(alias)</span>
*   usd
*   won <span class="uk-text-muted">(alias)</span>
*   yen <span class="uk-text-muted">(alias)</span>

* * *

### Text Editor Icons

*   align-center
*   align-justify
*   align-left
*   align-right
*   bold
*   chain <span class="uk-text-muted">(alias)</span>
*   chain-broken
*   clipboard
*   columns
*   copy <span class="uk-text-muted">(alias)</span>
*   cut <span class="uk-text-muted">(alias)</span>
*   dedent <span class="uk-text-muted">(alias)</span>
*   eraser
*   file
*   file-o
*   file-text
*   file-text-o
*   files-o
*   floppy-o
*   font
*   header
*   indent
*   italic
*   link
*   list
*   list-alt
*   list-ol
*   list-ul
*   outdent
*   paperclip
*   paragraph
*   paste <span class="uk-text-muted">(alias)</span>
*   repeat
*   rotate-left <span class="uk-text-muted">(alias)</span>
*   rotate-right <span class="uk-text-muted">(alias)</span>
*   save <span class="uk-text-muted">(alias)</span>
*   scissors
*   strikethrough
*   subscript
*   superscript
*   table
*   text-height
*   text-width
*   th
*   th-large
*   th-list
*   underline
*   undo
*   unlink <span class="uk-text-muted">(alias)</span>

* * *

### Directional Icons

*   angle-double-down
*   angle-double-left
*   angle-double-right
*   angle-double-up
*   angle-down
*   angle-left
*   angle-right
*   angle-up
*   arrow-circle-down
*   arrow-circle-left
*   arrow-circle-o-down
*   arrow-circle-o-left
*   arrow-circle-o-right
*   arrow-circle-o-up
*   arrow-circle-right
*   arrow-circle-up
*   arrow-down
*   arrow-left
*   arrow-right
*   arrow-up
*   arrows
*   arrows-alt
*   arrows-h
*   arrows-v
*   caret-down
*   caret-left
*   caret-right
*   caret-square-o-down
*   caret-square-o-left
*   caret-square-o-right
*   caret-square-o-up
*   caret-up
*   chevron-circle-down
*   chevron-circle-left
*   chevron-circle-right
*   chevron-circle-up
*   chevron-down
*   chevron-left
*   chevron-right
*   chevron-up
*   hand-o-down
*   hand-o-left
*   hand-o-right
*   hand-o-up
*   long-arrow-down
*   long-arrow-left
*   long-arrow-right
*   long-arrow-up
*   toggle-down <span class="uk-text-muted">(alias)</span>
*   toggle-left <span class="uk-text-muted">(alias)</span>
*   toggle-right <span class="uk-text-muted">(alias)</span>
*   toggle-up <span class="uk-text-muted">(alias)</span>

* * *

### Video Player Icons

*   arrows-alt
*   backward
*   compress
*   eject
*   expand
*   fast-backward
*   fast-forward
*   forward
*   pause
*   pause-circle
*   pause-circle-o
*   play
*   play-circle
*   play-circle-o
*   step-backward
*   step-forward
*   stop
*   stop-circle
*   stop-circle-o
*   youtube-play

* * *

### Brand Icons

*   500px
*   adn
*   amazon
*   android
*   angellist
*   apple
*   behance
*   behance-square
*   bitbucket
*   bitbucket-square
*   bitcoin <span class="uk-text-muted">(alias)</span>
*   black-tie
*   bluetooth
*   bluetooth-b
*   btc
*   buysellads
*   cc-amex
*   cc-diners-club
*   cc-discover
*   cc-jcb
*   cc-mastercard
*   cc-paypal
*   cc-stripe
*   cc-visa
*   chrome
*   codepen
*   codiepie
*   connectdevelop
*   contao
*   css3
*   dashcube
*   delicious
*   deviantart
*   digg
*   dribbble
*   dropbox
*   drupal
*   edge
*   empire
*   expeditedssl
*   facebook
*   facebook-f <span class="uk-text-muted">(alias)</span>
*   facebook-official
*   facebook-square
*   firefox
*   flickr
*   fonticons
*   fort-awesome
*   forumbee
*   foursquare
*   ge <span class="uk-text-muted">(alias)</span>
*   get-pocket
*   gg
*   gg-circle
*   git
*   git-square
*   github
*   github-alt
*   github-square
*   gittip <span class="uk-text-muted">(alias)</span>
*   google
*   google-plus
*   google-plus-square
*   google-wallet
*   gratipay
*   hacker-news
*   houzz
*   html5
*   instagram
*   internet-explorer
*   ioxhost
*   joomla
*   jsfiddle
*   lastfm
*   lastfm-square
*   leanpub
*   linkedin
*   linkedin-square
*   linux
*   maxcdn
*   meanpath
*   medium-logo
*   mixcloud
*   modx
*   odnoklassniki
*   odnoklassniki-square
*   opencart
*   openid
*   opera
*   optin-monster
*   pagelines
*   paypal
*   pied-piper
*   pied-piper-alt
*   pinterest
*   pinterest-p
*   pinterest-square
*   product-hunt
*   qq
*   ra <span class="uk-text-muted">(alias)</span>
*   rebel
*   reddit
*   reddit-alien
*   reddit-square
*   renren
*   safari
*   scribd
*   sellsy
*   share-alt
*   share-alt-square
*   shirtsinbulk
*   simplybuilt
*   skyatlas
*   skype
*   slack
*   slideshare
*   soundcloud
*   spotify
*   stack-exchange
*   stack-overflow
*   steam
*   steam-square
*   stumbleupon
*   stumbleupon-circle
*   tencent-weibo
*   trello
*   tripadvisor
*   tumblr
*   tumblr-square
*   twitch
*   twitter
*   twitter-square
*   usb
*   viacoin
*   vimeo
*   vimeo-square
*   vine
*   vk
*   wechat <span class="uk-text-muted">(alias)</span>
*   weibo
*   weixin
*   whatsapp
*   wikipedia-w
*   windows
*   wordpress
*   xing
*   xing-square
*   y-combinator
*   y-combinator-square
*   yahoo
*   yc <span class="uk-text-muted">(alias)</span>
*   yc-square <span class="uk-text-muted">(alias)</span>
*   yelp
*   youtube
*   youtube-play
*   youtube-square

* * *

### Medical Icons

*   ambulance
*   h-square
*   hospital-o
*   medkit
*   plus-square
*   stethoscope
*   user-md
*   wheelchair

## Icons Props



<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">icon</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">link</td>

<td>object { href}</td>

</tr>

<tr>

<td colspan="1">justify</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">spin</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">size</td>

<td>bool</td>

</tr>

</tbody>

</table>

## Tests

`npm run test` to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.  

## Build
`npm run build` to build files from distribution.  
`npm run build:watch` watches src directory and builds files on changes.  

## Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.  

## License
MIT