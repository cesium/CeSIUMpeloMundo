---
When adding a new marker, you must do 2 things:
- Add an image to show alongside the marker. This image must be stored under `public/photos`, in a folder named after your GitHub username
- Edit the `places.ts` file under `data`, adding an entry with the following shape:
```ts
{
    author: '...', // First and Last name of the people involved
    username: '...', // username or usernames of the people involved
    type: ..., // type of the marker, see below
    city: '...', // the city where the image was taken
    country: '...', // the country where the image was taken
    coordinates: [..., ...], // The coordinates of the marker (ideally, but not necessarily, exact)
    date: '...', // The date when the image was taken, in the formate YYYY-MM-DD
    streetview?: '...', // Optional link to Google Map Street View
    photo: '...' // The actual image taken, stored under "public/photos"
}
```

Available pin types are:
- Sticker
- Merch
- Picture
- Missing
  
> Note: Missing should be used when updating a marker

More information is available in this repository's [HOWTO](https://github.com/cesium/CeSIUMpeloMundo/blob/main/HOWTO.md)
---

> More information is present in this repository's [HOWTO](https://github.com/cesium/CeSIUMpeloMundo/blob/main/HOWTO.md). This is just so the maintainers have the information immediately available

##  **Date**:

<!-- Pleas write this date in the format  (YYYY-MM-DD)
 -->

...

##  **Location**:

<!-- Write the location and coordinates. Additionally add a Google Maps link (this should not and will not be present in the code)
 -->

...

##  **People present**: ...

<!-- All the people that were present should be listed in this section. Optionally, if those people belong to an organization/association, write the name of said organization/association
 -->
...

##  **Image**: ...

<!-- Add the image taken in this section -->

