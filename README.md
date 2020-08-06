# Lazy Icon Loading
Fast icon font loader that speeds up inital rendering for sites that use CSS Font Based icons (outside the viewport). 

Lazy loads icons font set when the first icon is in the visible viewport. Uses the interacton observer to determine when the first icon is in the viewport and session storage for repeat visitors.

## usage
requires config

src: the location of the icon font css file

selector: the CSS selector that triggers the observer

```javascript
LazyIcon().observe({ 'src': '/include/scss/fontawesome/font-awesome.min.css', 'selector': '.fa' })
```

## homepage
[MarketingTracer](https://www.marketingtracer.com)
[CoreWebVitals](https://corewebvitals.io)
