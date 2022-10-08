# 📬 Submission Guide

> Travelled recently? Have pictures to share? You're in the right place!

## 🖇️ Forking the repository

**1.** Go to [CeSIUMpeloMundo](https://github.com/cesium/CeSIUMpeloMundo)

**2.** In the top right corner, click on **Fork**

## 🔗 Cloning the forked repository to your machine

**1.** Go to _your fork_ and click **Code**

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

**1.** Move to the `public/photos` directory

**2.** Create a folder and name it your GitHub username(s). You'll save your pictures here

**3.** Move to the `data` directory and open the `places.ts` file on your favorite editor

**4.** Add a new object to the array containing:

- `author` - your first and last name(s)
- `username` - your GitHub username(s)
- `type` - pin type (**`EPinType.<pin-type>`**)
- `city` & `country` - city and country where the image was taken
- `coordinates` - you can use [**this website**](https://www.gps-coordinates.net/my-location)
- `date` - date of when the image was taken (year-month-day format)
- `photo` - path to your image file

**Understanding Pin Types:**

- `EPinType.Sticker` - You left a CeSIUM sticker somewhere
- `EPinType.Merch` - You showed off your style with the CeSIUM merch
- `EPinType.Picture` - You want to share a picture of your trip with the CeSIUM family
- `EPinType.Missing` - You revisited a pin and the sticker is now missing

**Check out this example:**

```typescript
{
  author: 'Filipe Felício',
  username: 'feliciofilipe',
  type: EPinType.Merch,
  city: 'Barcelona',
  country: 'Spain',
  coordinates: [41.39437640777792, 2.1750122226070197],
  date: '2022-03-21',
  photo: '/photos/feliciofilipe/barcelona.jpg'
}
```

**Multiple authors? Check this one:**

```typescript
{
  author: ['Filipe Felício', 'Matilde Bravo', 'Mariana Rodrigues'],
  username: ['feliciofilipe', 'matildeopbravo', 'marianarodrigues'],
  type: EPinType.Picture,
  city: 'Rijeka',
  country: 'Croatia',
  coordinates: [45.33264760505596, 14.455986441966521],
  date: '2022-07-04',
  photo: '/photos/feliciofilipe,matildeopbravo/rijeka.jpg'
}
```

> **Warning**  
> When placing a **sticker**, we appeal to everyone's common sense and civility. Don't vandalize.

> **Note**  
> You can get a local preview of your changes by running the project on your machine, follow the [Contributing Guide](CONTRIBUTING.md) to know more.

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

> **Note**  
> Don't forget to assign a contributor or the **cesium/pelomundo** group for review.

## 🎉 You're done!

If everything checks out, your submission will be reviewed and approved shortly.

Visit the [CeSIUM Pelo Mundo](https://pelomundo.cesium.di.uminho.pt/) website and check out your pin!
