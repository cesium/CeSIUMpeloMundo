<h1>How to submit your photos to CeSIUM Pelo Mundo: </h1>

<h3>If you travelled recently and have pictures to share, this guide is for you!</h3>

<h2>Fork the repository</h2>

1. Go to [CeSIUM Pelo Mundo's repository](https://github.com/cesium/CeSIUMpeloMundo);

2. Click on <b>Fork</b>.

<h2>Clone the forked repository</h2>

1. Go to your fork and click <b>Code</b>;

2. You can either choose to clone the repo through <b>HTTPS</b> or <b>SSH</b>.

   - If you choose to do it through HTTPS, copy the link `https://github.com/cesium/CeSIUMpeloMundo.git`, open the terminal and in the directory of your choice, run the following command:

   ```
   git clone https://github.com/<your-github-username>/CeSIUMpeloMundo.git
   ```

   - If you'd rather clone with SSH, copy `git@github.com:cesium/CeSIUMpeloMundo.git`, open the terminal and in the chosen directory, run:

   ```
   git clone git@github.com:cesium/CeSIUMpeloMundo.git
   ```

Now you have a local copy of the repo.

<h2>Creating a branch</h2>

1. On your directory, run this command to create a new branch and switch to it:

```
git checkout -b <branch>
```

Where <branch> is the name of the branch.

2. The name of the branch should follow the CeSIUM convention: `'first letter of first name' + 'first letter of last name'/'name of branch'`. Something like this:

```
af/howto
```

The following command would look like this:

```
git checkout -b af/howto
```

<h2>Submitting your pins</h2>

1. Go to the folder `public`;

2. Open the folder `photos`;

3. Create another folder with your name or GitHub username. You'll save your photos here;

4.Go to the `data` folder and click on the `places.json` file;

5. Add:
   - your name;
   - the type of pin: "sticker", if you left a CeSIUM sticker, "image", if not;
   - the city and country you visited;
   - the coordinates of the picture;
   - the date;
   - the path to your image file.
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

<h2>Push changes</h2>

1. After writing in your pin in your branch, commit your changes:

```
git commit -m "message"
```

2. Push the changes to your git repository:

```
git push -u <remote> <your branch>
```

Here <remote> is the current branch's remote name (typically origin or main).

Following the example above, the command would look like this:

```
git push -u main af/howto
```

<h2>Create pull request</h2>

1. Go to your fork;

2. Pick the branch you wish to merge (the one you created);

3. Click on <b>Pull request</b>;

4. Add a title and description to your pull request.

And you're done! We'll revise your submission and if everything is correct, visit [CeSIUM Pelo Mundo](https://pelomundo.cesium.di.uminho.pt/) and check out the pin you created!
