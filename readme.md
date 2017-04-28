# Acitius Overhaul


## Todo
My own personal todo list for things I'd otherwise forget

### Features
- [ ] Watch threads (get notifications when they update)

### Layout
- [ ] Events at top of page as dismissable bootstrap alert
- [ ] Add the go to top button!!!
- [ ] Hover delay to expand subnav
- [ ] User theme options: theme (light-dark, light, dark), no widget side pane, remove accordion effect/always expand all sub-nav (remember to remove the \> when enabled!)


## QOL Suggestions
Suggestions by staff members that will eventually be implemented.

### Bugfixes
- [ ] "Users [who purchased custom titles] can set their custom titles to the reward titles of collections they haven't completed. I set mine to "Such A Softie" without completing the plushie collection."

### Features
- [ ] Ability to emulate NPC accounts on staff accounts
- [ ] Remove comments from live chat
- [ ] Filter no-no words
- [ ] New recaptcha on registration page
- [ ] Limit features on side accounts (accounts flagged with having an owner): no flash games, no tournament, no rp rewarded in regimens, no battle ap, no rewards in exterminations, no quests, no bidding on own auction, no OA ratings, limited pet creation
- [ ] "A news queue system to schedule announcements"
- [ ] "Hide problem threads from public view, without having to lock & move them to the archive forum, or having to delete them entirely."
- [ ] "Share your collection with others or view another player's collections."

### Layout
- [ ] Accessible delete/sticky/lock/move options within thread as well as outside of

## Documentation
Notes for the future devs who may or may not be familiar with certain tools. The definitions used here are heavily simplified. Generally, the settings of each of the tools used will not need to be tweaked. Any tools that need special configurations will be described.

`/` will refer to the root directory of the project. All commands will assume you're in the root directory.


### Setup
Development setup on your machine. Once again, simplified. See [here](http://laravel-boilerplate.com/5.4/start.html) for further details. Those more familiar with git should use the development branch when applicable.

1. Download [Docker](https://www.docker.com/community-edition#/download) to run development server.
2. Download [Git](https://git-scm.com/) for source code management.
3. In terminal, choose directory to save: `git clone --recursive https://github.com/acitius/acitius.git`
4. `cd acitius`
5. `cp .envlaradock laradock/.env`
6. `cp .envapp acitius/.env`
7. `cd laradock`
8. `docker-compose up -d nginx mysql`
9. `docker exec workspace bash`
10. `composer install`
11. `npm install`
12. `php artisan key:generate`
13. `php artisan migrate`
14. `php artisan db:seed`
15. `exit`


### Commands
Commands to run in terminal in various situations. Assumes you're already in root directory.

**Get latest changes**
1. `git pull`

**Commit changes**
1. `git add -a`
2. `git commit -m "[Short description of changes.]"`
3. `ssh [user]@acitius.com`
4. Enter password
5. `cd` into git directory on server.
6. `git pull`
7. `cd acitius && npm run build`

**Run development server**
1. `cd laradock && docker-compose up -d nginx mysql`
2. `docker exec workspace bash`
3. `npm run server`
4. Go to [localhost:3000](http://localhost:3000/) in your browser.

**NPM commands**
- Run development server: `npm run server`
- Build project for production: `npm run build`
- Build project for development: `npm run build:dev`


### General
- Icons: [FontAwesome](http://fontawesome.io/icons/) is used for all icons.
- Javascript: Our Javascript is written using the ES6/ECMA2015 standard and compiled to be compatible with older browsers using Webpack and [Babel](https://babeljs.io/).


### [Laravel](https://laravel.com/docs/5.4)
PHP framework that makes pretty much everything PHP a bit easier. Created from [Laravel Boilerplate](http://laravel-boilerplate.com/) (which is documented) to make life even easier.


### [Docker](https://www.docker.com/) and [Laradock](http://laradock.io/) - `/laradock/.env`
A container to easily maintain development environments across machines. In our case, it supplies Nginx, MySQL, PHP, and the like without needing to do any setup on your own machine.

- *Local* Static IP: [10.0.75.1](http://10.0.75.1)

### [Webpack](https://webpack.js.org/configuration/) - `/acitius/webpack.config.js`
Compiles our modular JS and CSS from `/acitius/src/` together into `/acitius/public/`. This will take care of making all CSS and JS compatible with older browsers.


### [SCSS (CSS)](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) - `/acitius/resources/assets/sass/`
Adds variables and functions to CSS. The difference between SASS and SCSS is syntax. We're using SCSS.

- Adding files: Remember to import any new files into app.scss


