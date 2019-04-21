A very simple demo of OAuth 2.0 using Node.js，to add GitHub login to your app and access GitHub API.

![](https://www.wangbase.com/blogimg/asset/201904/bg2019042103.jpg)

This demo is slightly modified from sohamkamani's [node-oauth-example](https://github.com/sohamkamani/node-oauth-example). More details in his [blog](https://www.sohamkamani.com/blog/javascript/2018-06-24-oauth-with-node-js/) (English) or my [blog](http://www.ruanyifeng.com/blog/2019/04/github-oauth.html) (Chinese).

## Step one: register the app

Register the app on Github : https://github.com/settings/applications/new .

![](https://www.wangbase.com/blogimg/asset/201904/bg2019042102.jpg)

- "Application name" field, enter any name you like.
- "Homepage URL" field, enter "http://localhost:8080/ ".
- "callback URL" field, enter "http://localhost:8080/oauth/redirect ".

Once register, you will get a client ID and a client secret.

## Step two: get the code

First, clone the repo.

```bash
$ git clone git@github.com:ruanyf/node-oauth-demo.git
$ cd node-oauth-demo
```

Second, modify the config.

- `index.js`: replace the values of the `clientID` and `clientSecret` variables.
- `public/index.html`: replace the values of the `client_id` variable.

Third, install the dependencies.

```bash
$ npm install
```

## Step three: run the server

Now, run the server.

```bash
$ node index.js
```

Visit http://localhost:8080 in your browser, and click the link to login GitHub.

