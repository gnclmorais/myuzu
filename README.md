# Myūzu
A deployable inspiration board.


## Run
```bash
$> npm install
$> npm start
```


## Walkthrough
1. Load cache
2. Get X number of items from cache
3. Render a card module for each item

### Questions
- When to trigger Masonry?


## Architecture
- Images are daily/weekly updated into a `cache.json` file


## What I’ve learned
### Vue.js
- Components look for parent data using `props` added to its tag.
- Data can be easily passed to an array of components using `v-for='card in cards'`.


## Image Mosaic libraries
- http://masonry.desandro.com/
- http://salvattore.com/
- http://savvior.org/
- http://html5andblog.github.io/brick-by-brick/


## Resources
- http://makerlog.org/posts/express-and-browserify
