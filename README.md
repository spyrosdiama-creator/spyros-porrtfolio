# Add the Noi Quattro videos here

The three supplied Noi Quattro MOV files have been added to this folder as:

- `noi-quattro-01.MOV` - Film 01
- `noi-quattro-02.mov` - Film 02
- `noi-quattro-03.MOV` - Film 03

The portfolio now displays these clips in direct video players. Before publishing the site, convert each MOV to a compressed MP4 and update the `src` and `type` values in `index.html`. MP4 files are faster and work across the widest range of browsers.

```html
<video controls playsinline preload="metadata">
  <source src="./media/noi-quattro-01.mp4" type="video/mp4" />
</video>
```

Then add this to the end of `styles.css`:

```css
.reel-card video { display:block; width:100%; height:380px; object-fit:cover; background:#000; }
@media (max-width:760px) { .reel-card video { height:430px; } }
```

Repeat for clips 02 and 03, changing the filename in `src`.
