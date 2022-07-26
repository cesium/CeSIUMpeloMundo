<h1>How to submit your photos to CeSIUM Pelo Mundo: </h1>

<h2>If you travelled recently and have pictures to share, this guide is for you!</h2>


First, you must clone this repo to your computer.
Use ```git clone``` and copy the SSH key in the directory of your choice, just like this:



```git clone git@github.com:cesium/CeSIUMpeloMundo.git```



Now the repo should be cloned and you can start adding your photos.

In the folder ```public```, you'll find another one called ```photos```. Here, you must create another folder with your name or GitHub username. You'll save your photos here. (:



And now, onto adding them to the map! In the ```data``` folder, particularly the ```places.json``` file, add your name, the city and country you visited, the coordinates where you took your pic, the date, and the digital location to the image file. Don't forget to disclose the type, as well: "sticker", if you left a CeSIUM sticker, or only "picture" if not.
You can check the example below:

```
  {
    "author": "Luis Araújo",
    "type": "sticker",
    "city": "Madrid",
    "country": "Spain",
    "coordinates": [40.4213, -3.7011],
    "date": "2021-07-06",
    "photo": "/photos/laraujo7/madrid.jpg"
  }
```

After you're done, use the following commands:

```
git add .
git commit -m "message"
git push
```

And you're done! We'll revise your submission and if everything is correct, visit [CeSIUM Pelo Mundo](https://pelomundo.cesium.di.uminho.pt/) and check out the pin you created! 
