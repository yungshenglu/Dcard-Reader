# Dcard Reader

![](./assets/img/Demo.png)

You can access it [here]()! :rocket:

This repository is my first practice to implement a simple post reader for [Dcard](https://www.dcard.tw) using React Hook and TypeScript. For now, you can view the list of the lastest poppular posts, also you can see the content of each post.

> HINT: If you have any questions, please feel free to ask me.

---

## Description

### Excecution

1. To run our production, you need to clone our project first
   ```bash
   $ git clone https://github.com/yungshenglu/Dcard-Reader/
   ```
2. After cloning, change the your current directory into the repository and setup the project
   ```bash
   $ cd Dacrd-Reader/ & yarn install
   ```
   - The command yarn install will install some necessary packages for this project
   - It will take few second for running above command
3. Compiles and hot-reloads for development
   ```bash
   $ yarn start
   ```
   - It will take few second for running above command
   - You won't get any error messages if running successful
4. Congratulation! you can open your browser to `http://localhost:9528` and see our Dcard-Reader

### Deploy on GitHub Page

1. To deploy our production, make sure your current directory is the root of this repository and run the following command
   ```bash
   $ yarn build
   ```
   - It will take few second for ruuning above command
   - You will get a new folder `build/` after building successful
   - You don't need to push `build/` on your GitHub because `build/` has already been ignored by git via `.gitignore`
2. Before deploying, make sure you have already created your repository on GitHub
3. Change the directory into `build/` and create a new branch for deploying on your GitHub Pages
   ```bash
   $ cd build/
   # You need to initialize git due to build/ is ignored as default
   $ git init
   $ git add .
   $ git commit -m "Deploy on GitHub Pages"
   # Deploy to your GitHub repository on branch "gh-pages"
   $ git push -f https://github.com/yungshenglu/Dcard-Reader.git master:gh-pages
   $ cd ..
   ```
4. After deploying, you can find it on your GitHub with branch `gh-pages`
5. Open setting page of your repository and move to the section `GitHub Pages`
6. Select `Source` of your GitHub Pages to `gh-pages branch`
7. Congratulation! you can open your browser to the link of your GitHub Pages

---

## Contributor

> NOTICE: You can follow the contributing process [CONTRIBUTING.md](CONTRIBUTING.md) to join me. I am very welcome for any issue!

- [David Lu](https://github.com/yungshenglu)

---

## License

[WTFPL](LICENSE)
