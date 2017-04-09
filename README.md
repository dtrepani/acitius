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
- [ ] Filter no-no words (usernames, pet names, shop names, gallery names)
- [ ] New recaptcha on registration page
- [ ] Limit features on side accounts (accounts flagged with having an owner): no flash games, no tournament, no rp rewarded in regimens, no battle ap, no rewards in exterminations, no quests, no bidding on own auction, no OA ratings, limited pet creation
- [ ] "A news queue system to schedule announcements"
- [ ] "Hide problem threads from public view, without having to lock & move them to the archive forum, or having to delete them entirely."
- [ ] "Share your collection with others or view another player's collections."

### Layout
- [ ] Accessible delete/sticky/lock/move options within thread as well as outside of

## Documentation
Notes for the future devs who may or may not be familiar with certain tools. The definitions used here are heavily simplified.

### General
- Icons: [FontAwesome](http://fontawesome.io/icons/) is used for all icons. Any time something calls for an icon (such as the files in `/data/`), it uses some variant of `fa-*`. See link for available icons.
- Javascript: Our Javascript is written using the ES6/ECMA2015 standard and compiled to be compatible with older browsers using Webpack and [Babel](https://babeljs.io/). 

### [Webpack](https://webpack.js.org/configuration/) - `/webpack.config.js`
Compiles our modular JS and CSS from `/src/` together into `/dist/`. This will take care of making all CSS and JS compatible with older browsers.

**NOTE**: Changes *must* be made to `/src/`. Changes made to `/dist/` will be overwritten next time the app is compiled.

- Production build: Use `npm run build` to compile for the production version of the app. This will minify the code, whereas the development version does not.
- Testing: Use `npm run dev-build` to compile or `npm run dev-server` to create a development server for testing (vs testing on live). The dev server will automatically recompile the app and refresh your browser when you save a file. Keep an eye on your console though. It will let you know when there were errors in your code and it could not recompile.

### [Bootstrap](https://v4-alpha.getbootstrap.com/getting-started/introduction/) - `/src/`
Add classes to HTML (which is in our JSX components) that creates responsible, pre-styled elements. Note that we're using the v4 alpha.

### [SCSS (CSS)](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) - `/src/scss/`
Adds variables and functions to CSS. The difference between SASS and SCSS is syntax. We're using SCSS.

- Adding files: Remember to import any new files into app.scss

### [React (Javascript)](https://facebook.github.io/react/docs/introducing-jsx.html) - `/src/js/` - [Debug Tool](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)
Easily bind variables and behavior between layout and backend, with help from Redux to extend behavior.

- Components vs containers: Components are visual items while containers add behavior to said components
- Adding pages: Pages should be added to their own folder under `/src/js/routes/` and their top-level component added to `/src/js/routes/index.jsx/` under the relevant URL.


### [Redux (Javascript)](http://redux.js.org/)- `/src/js/` - [Debug Tool](https://github.com/zalmoxisus/redux-devtools-extension) - [Guide](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree)

