# thumbooo
Demonstration of Nashorn/Java using nasven - REST service to create thumbnails (rhymes with "dumbo")

## Running

To start the server:
```
$ jjs -scripting nasven.js -- src
```

To get a thumbnail from a file `screenshot.png` using cURL:
```
$ curl -L -o thumb.png --form "file=@screenshot.png" http://localhost:8080/thumb
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  106k    0   929  100  105k   2386   271k --:--:-- --:--:-- --:--:--  270k
```

Original image:

![Original image](/img/screenshot.png?raw=true)

Thumbnail image:

![Thumbnail image](/img/thumb.png?raw=true)
