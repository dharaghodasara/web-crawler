# web-crawler
A crawler is a program that starts with a url on the web (ex: http://google.com), fetches the web-page corresponding to that url, and parses all the links on that page into a repository of links. Next, it fetches the contents of any of the url from the repository just created, parses the links from this new content into the repository and continues this process for all links in the repository until stopped or after a given number of links are fetched.
### Install Dependencies

We have two dependencies in this project: request and cheerio

We have preconfigured `npm` so we can simply do:

```
npm install
```
### Run the Application
To crawl links from specific website, we can pass two command line argument. `URL` and `Number Of Links`

```
node index.js http://google.com 200
```

Now new file `links.txt` will be created in the same directory which contains all the fetched links.
