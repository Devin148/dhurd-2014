## [http://www.dhurd.com/](http://www.dhurd.com/)

Repo for the 2014 version of http://www.dhurd.com/.

In the past, dhurd.com has been updated on a yearly basis, so that's how I'm versioning it.


## Build

To build dhurd.com, run

    npm install

Once all requirements are installed, run

    grunt

which will default to watching for jhint and less.

The index file will look for `static/styles/*.css` files, so some form of `grunt` or `grunt less` is required to view changes.


## Misc.

dhurd.com uses [Adobe Typekit](https://typekit.com/). Typekit requires a list of domains one will host the site on.

In order to view correct fonts, be sure to access dhurd.com through localhost or http://www.dhurd.com only.


## Testing

More to come...