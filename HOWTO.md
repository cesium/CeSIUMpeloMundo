# 📬 Submission Guide

> Travelled recently? Have pictures to share? You're in the right place!

## 🖇️ Forking the repository

**1.** Go to [CeSIUMpeloMundo](https://github.com/cesium/CeSIUMpeloMundo)

**2.** In the top right corner, click on **Fork**

## 🔗 Cloning the forked repository to your machine

**1.** Go to *your fork* and click **Code**

> **Note**  
> The link to your forked repository should be `https://github.com/<your-username>/CeSIUMpeloMundo`

**2.** Copy the given HTTPS link

**3.** On your terminal, run the following command:

```
git clone <https-link>
```
> **Note**  
> If you'd rather clone with SSH, copy the SSH key and run `git clone <ssh-key>`

**Now you have a copy of the repository you can work with.**

## ⛓️ Creating a branch

**1.** Move to your cloned repository directory with `cd CeSIUMpeloMundo`

**2.** Create a new branch with the following command:

```
git checkout -b <branch>
```

Where `<branch>` is the name of your branch.

> **Note**  
> The name of your branch should follow the CeSIUM guidelines: `<first-letter-of-your-first-name><first-letter-of-your-last-name> + '/' + <branch-name>`.
> For example: `af/readme`.

## 🗃️ Adding your pins

**1.** Move to the `CeSIUMpeloMundo/public/photos` directory

**2.** Create a folder and name it your GitHub username. You'll save your pictures here.

**3.** Move to the `CeSIUMpeloMundo/data` directory and open the `places.json` file on your favorite editor

**4.** Add a new object to the array containing:
   
   - `author` - your first and last name
   - `type` - pin type (**sticker** or **picture**)
   - `city` & `country` - city and country where the image was taken
   - `coordinates` - you can use [**this**](https://www.gps-coordinates.net/my-location) website
   - `date` - date of when the image was taken
   - `photo` - path to your image file

**Check out this example:**

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

> **Warning**  
> When placing a **sticker**, we appeal to everyone's common sense and civility. Don't vandalize.

## 🛫 Stage, commit and push your changes

**1.** Stage your changes:

```
git add .
```

**2.** Commit your changes:

```
git commit -m "<commit-description>"
```

**3.** Push your changes to your forked repository:

```
git push
```

## 🚀 Create a pull request

**1.** Go to your fork

**2.** Select the branch you created from the dropdown menu

**3.** Click on **Pull request**

**4.** Add a convenient title and description to your pull request

## 🎉 You're done!

If everything checks out, your submission will be reviewed and approved shortly.

Visit the [CeSIUM Pelo Mundo](https://pelomundo.cesium.di.uminho.pt/) website and check out your pin!
