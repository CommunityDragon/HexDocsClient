# Contributing to HexDocs-client

### Tech stack

The frontend itself is a React single page application that communicates with a GraphQL based backend that serves both the menu items and the documents. We use SASS for styling the main application and styled for styling the individual components.
On the JS side of things, we use Yarn to manage our dependencies and we use webpack as our bundler.

### Licensing

The web frontend is licensed under the GNU General Public License (version 3). This license allows us to keep the code open for people who are just genuinely curious on how the site works or even help us make it better while discouraging people who are only interested in taking the code and profiting from it.

*Disclaimer: The repository may contain intellectual property owned by Riot Games. We are allowed to use them as per their [Legal Jibber Jabber](https://www.riotgames.com/en/legal) but those are not covered by the GNU GPL license*

### Folder structure

We keep each individual "feature" of the site isolated from one another. That includes both the components themselves and the styling that goes with them. You're expected to do the same on the component level.
If you're altering the overall style of the website, you should use either `main.sass` or `App.sass`

Each feature should have it's own folder with an `index.js` file that exports the component itself, a folder named `graphql `with one script for each exported GraphQL query and a folder named `components` with all the component files themselves. We use styled for per-component styling and all the style files are in a separate folder inside components called `styled` that has the styling information for each of the components. We expect you to maintain this structure.

Any additional fonts you'd like to add must be added to the `App.sass` file rather than the per-component styled file.

### Local testing

Given that the backend itself isn't open source, you're more than welcome to use the production backend for testing purposes as well. For now you have to change the origin used by the GraphQL client from `communitydragon` to `pepega` (inside joke, wontfix) in order to change the CORS headers to localhost:3000 for testing and then change it back before submitting the PR. 

We use yarn to manage our dependencies so in order to fetch all of them, you have to type `yarn`
After fetching all the dependencies, you can use `yarn start` to start up a local development server for testing and `yarn build` to create a production ready build.

If you'd like to change the home page, you have to edit `README.md` first and then run `yarn run readme` to parse the markdown into the static HTML file we use.

### Submitting the PR

First of all, thank you for contributing to the project! When you submit the PR, we might have some questions or suggestions for you before we decide to merge it in so please check back regularly so you can answer them. 

Another thing to keep in mind is right now, we're aiming to be a relatively simple to use knowledgebase so our focus is providing that, so if your feature doesn't have a place in this vision, we reserve the right to reject the PR. If you think your idea might not fit this vision and you'd like to be sure, feel free to come and chat with us on discord or open up an enhancement proposal here on the issue tracker and we'll be sure to get back to you.

### Contact us

There are 3 Discord servers you can find us on for a quick chat, we'd recommend using the last one for development purposes as it's more focused on that, but if you'd like to have a virtual coffee with us, we'd recommend joining the Celerity discord:

- [Riot Games 3rd party developer community](https://discord.gg/riotgamesdevrel)
- [Celerity discord](https://discord.gg/a89DaHs)
- [CommunityDragon discord](https://discord.gg/W8yzgTg)

If you have questions related to the backend side of things, look for `DatThomaSs#4364`, if you have questions related to the frontend side of things, look for `Ray.#8080`