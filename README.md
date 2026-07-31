# Your academic website (multi-page)

Your site now has 7 pages: Home, About, Research, Publications, CV, Outreach,
and Contact — linked together by the sidebar navigation, all sharing the same
design.

## File structure

```
index.html          Home
about.html           About
research.html        Research
publications.html    Publications
cv.html               CV
outreach.html        Outreach & Service
contact.html          Contact
assets/
  styles.css         Design — you shouldn't need to touch this
  data.js            ALL YOUR CONTENT — this is the only file you edit
  site.js            Rendering logic — you shouldn't need to touch this
```

## 1. Edit your content

Everything you'd want to update — your bio, news, publications, CV entries,
research description, talks, service roles, contact info — lives in
**`assets/data.js`**. Every page reads from this one file, so changing your
email address (for example) updates it everywhere at once, instead of having
to edit 7 separate files.

Open `assets/data.js` in a text editor and change the values inside the
`DATA = { ... }` block. Adding a new publication or CV entry is just copying
one of the existing `{ ... }` entries in the relevant list and editing it.

Preview by double-clicking any `.html` file — it opens directly in your
browser. Because the pages link to `assets/`, keep the whole folder together
(don't move `index.html` out on its own).

## 2. Put it on GitHub Pages (free hosting)

1. Create a free account at github.com if you don't have one.
2. Create a **new repository** named exactly `your-username.github.io`.
3. Upload the **entire folder's contents** — all the `.html` files AND the
   `assets` folder — keeping the same structure. On GitHub's web uploader,
   drag the whole folder in, or use "Add file" → "Upload files" and include
   everything.
4. Your site is live at `https://your-username.github.io` within a minute or two.

## 3. Making updates later

Edit `assets/data.js`, save, and re-upload just that one file to the same
GitHub repository (GitHub will ask to replace the old version — say yes).
The whole site updates within a minute.

## Optional: a custom domain

If you'd like `yourname.com` instead of `your-username.github.io`, buy a
domain from any registrar and point it at GitHub Pages — see GitHub's docs
on "Managing a custom domain for your GitHub Pages site."
