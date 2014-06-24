allow-env
=============

A Meteor smart package enabling you to expose selected server environment variables to the client.

## Usage

### Server

Environment variables must be explicitly allowed to be exposed to the client. You can disallow previously allowed variables by setting a falsy value.

```javascript
allowEnv({
    SHOW_THIS: 1,
    HIDE_THIS: 0
})
```

### Client

```javascript
if (process.env.SHOW_THIS)
    doSomething();
```

## Example

Use Amazon S3 CollectionFS storage in production, and the local filesystem in development.

### Server

```javascript
allowEnv({
    NODE_ENV: 1
})
```

### Common

```javascript
var store;
var options = {};


if (process.env.NODE_ENV === "development") {

  if (Meteor.isServer) {
    options = {
      path: process.env.IMAGE_DIR
    }
  }

  store = new FS.Store.FileSystem("images", options);

} else {

  if (Meteor.isServer) {
    options = {
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: process.env.UPLOAD_BUCKET
    }
  }

  store = new FS.Store.S3("images", options);
}

images = new FS.Collection("images", {
  stores: [store]
});

```
