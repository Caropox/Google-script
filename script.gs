var NAME = "My favourite images";
var deck = SlidesApp.create(NAME); //SlidesApp.getActivePresentation();

function addImageSlide(link, index) {
  var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  var image = slide.insertImage(link);
  var imgWidth = image.getWidth();
  var imgHeight = image.getHeight();
  var pageWidth = deck.getPageWidth();
  var pageHeight = deck.getPageHeight();
  var newX = pageWidth/2. - imgWidth/2.; //center
  var newY = pageHeight/2. - imgHeight/2.;
  image.setLeft(newX).setTop(newY);
}

function main() {
  var images = [
    "http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    "http://www.google.com/services/images/phone-animation-results_2x.png",
    "http://www.google.com/services/images/section-work-card-img_2x.jpg",
    "http://gsuite.google.com/img/icons/product-lockup.png",
    "http://gsuite.google.com/img/home-hero_2x.jpg",
  ];
  var [title, subtitle] = deck.getSlides()[0].getPageElements();
  title.asShape().getText().setText(NAME);
  subtitle.asShape().getText().setText("Google Apps Script\nSlides Services demo");
  images.forEach(addImageSlide);
}