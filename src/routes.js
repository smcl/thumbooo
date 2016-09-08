var ImageIO = javax.imageio.ImageIO;
var MultipartConfigElement = javax.servlet.MultipartConfigElement;
var ByteArray = Java.type("byte[]");
var BufferedImage = java.awt.image.BufferedImage;

/* 
   minor hack, ImageIO.write() can't seem to handle the ToolkitImage returned
   by getScaledInstance() so create new BufferedImage
*/
function toBufferedImage(img)
{
    var bufferedImage = new BufferedImage(img.getWidth(null), img.getHeight(null), BufferedImage.TYPE_INT_ARGB);

    var gfx = bufferedImage.createGraphics();
    gfx.drawImage(img, 0, 0, null);
    gfx.dispose();

    return bufferedImage;
}

Spark.setPort(8080);
Spark.staticFileLocation("/static");

Spark.post("/thumb", function(req, res) {

    var multipartConfigElement = new MultipartConfigElement("/tmp");

    req.raw().setAttribute("org.eclipse.jetty.multipartConfig", multipartConfigElement);

    var file = req.raw().getPart("file");
    var inStream = file.getInputStream();
    var outStream = res.raw().getOutputStream();
    
    var orig = ImageIO.read(inStream);

    var width = orig.getWidth();
    var height = orig.getHeight();
    
    if (width > 100 && height > 100) {
	if (width > height) {
	    height = (100 / width) * height;
	    width = 100;
	} else {
	    width = (100 / height) * width;
	    height = 100;
	}
    }

    var thumb = orig.getScaledInstance(width, height, java.awt.image.BufferedImage.SCALE_SMOOTH);

    ImageIO.write(toBufferedImage(thumb), "png", outStream);
    
    res.raw().setContentType("application/octet-stream");
    res.raw().setHeader("Content-Disposition","attachment; filename=thumb-"+file.getName());
    
    return res.raw();
});

