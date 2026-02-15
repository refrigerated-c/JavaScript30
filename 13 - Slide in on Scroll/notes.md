window.scrollY - returns the number of pixels that the document is currently scrolled
How much you have already scrolled down?

window.innerHeight =  returns a number which represents the height of the browser window's content area in pixels.
Height of your screen means How much page you SEE at once(visible area)?

//In Total
When screen bottom reaches middle of image → trigger animation”

slideImage.offsetTop =  at how much scroll we can see the top of image in pixel
slideImage.height = height of Image
//Combine them, we got imageBottom = where image finishes on page

isHalfShown = Has the screen reached the image enough to start showing it?
slideInAt = position of half image
sliderImage.offsetTop = position where image starts

slideInAt = 900
offsetTop = 1000
900 > 1000 = false
more scroll;
slideInAt = 1200
offsetTop = 1000
1200> 1000 = true


isNotScrolledPast - to check wheteher scrolled to far(false) that image not visible , so to stip animation or if Scroll that image is still Visible (true)
