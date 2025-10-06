# CS 260 Notes

[Simon Startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Markdown Documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [**Class Notes**](class-notes.md)

## Production Notes

### AWS

My IP address is: 44.205.238.241

My domain name is: [behalten.click](https://behalten.click)

### Caddy

Caddy allows HTTPS connections! I honestly don't remember what else this deliverable entailed.

### HTML

Built the basic structure for the site, leaving placeholders for most of the functionality. I kind of want to change my radio option lists to buttons, I think they don't look amazing, but I don't know for sure yet, so I'll leave it.

### CSS

I've been using a combination of bootstrap and css to do the syling. TBH, not really sure what I'm doing. But, it's going.

Still to do:
- colors and styling (resize logo image??)
- main content organization for every page
- fix the stupid favicon
- all of the stuff that's actually listed in the README
- window sizing flexability

### React Part 1: Routing

Was cool. Would be super fun to also add an 'about' section that links through the Behalten logo. Just a thought. Not sure I want to do that all and also the formatting right now, though.

### React Part 2: Reactivity

(This looks exciting)

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```