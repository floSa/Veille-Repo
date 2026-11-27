# blueimp/jQuery-File-Upload

> jQuery file upload widget: drag and drop, progress bars, chunked upload and resume.

## The problem
Uploading large files from a browser with progress, validation and preview.

## What it actually does
jQuery plugin that handles multiple selection, drag and drop, cancel, resume, chunking, client-side image resizing and audio, video and image previews. Compatible with any server that accepts a standard upload form. Falls back to iframes for old browsers.

## How it is wired
```mermaid
flowchart TD
  A["jquery.fileupload.js"] --> B["jQuery UI widget factory"]
  A --> C["Iframe Transport"]
  A --> D["Load Image"]
  A --> E["Canvas to Blob"]
  A --> F["Serveur d'upload"]
```

## Trying it
```sh
npm install blueimp-file-upload
```
```js
$('#fileupload').fileupload();
```

## Cost and gotchas
Free. Requires jQuery 1.7+ and a secured server side: the README refers to the VULNERABILITIES and SECURITY documents.

## What it is not
Not a server component, nor a modern jQuery-free solution. Archived repo.

## Alternatives
No alternative named in the README.

## For you
Ignore: jQuery dependency and archived repo, outside your data and AI work.
