# thumbooo
Demonstration of Nashorn/Java using nasven - REST service to create thumbnails (rhymes with "dumbo")

## Running

To start the server:
```
$ jjs -scripting nasven.js -- src
```

To get a thumbnail using cURL:
```
$ ls screenshot.png thumb
ls: cannot access 'thumb': No such file or directory
screenshot.png
$ curl -LO --form "file=@screenshot.png" http://localhost:8080/thumb
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                   Dload  Upload   Total   Spent    Left  Speed
				   100  625k    0  3893  100  621k   7515  1199k --:--:-- --:--:-- --:--:-- 1202k
$ ls thumb
thumb
$ mv thumb thumb.png
```

Original image:

![Original image](/img/screenshot.png?raw=true)

Thumbnail image:
![Thumbnail image](/img/thumb.png?raw=true)
