# Lazy Icon Loading
Fast icon font loader that speeds up inital rendering for sites that use CSS Font Based icons (outside the viewport). 

Lazy loads icons font set when the first icon is in the visible viewport. Uses the interacton observer to determine when the first icon is in the viewport and session storage for repeat visitors.

## usage
requires the following config  
src: the location of the icon font css file  
selector: the CSS selector that triggers the observer  
rootMargin: the margin before trigger (150px 0px for example)

```html
<script defer src="/path/to/layicon.min.js"></script>
```

```javascript
window.addEventListener('load', () => {
    LazyIcon().observe({
        'src': '/include/scss/fontawesome/font-awesome.min.css',
        'selector': '.fa',
        'rootMargin': '150px 0px'
    });
});
```

## homepage and example
[MarketingTracer](https://www.marketingtracer.com/seo/icon-font-lazy-loading)    
