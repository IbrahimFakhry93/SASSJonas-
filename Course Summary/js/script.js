//* Normalize CSS in order to make a cross browser reset.
//* in order to make every browser render the page in the exact same way.

//* Now doing so is still valid, but I found that browsers are actually getting better and better

//* and more consistent in the way that they render a website.

//* And so that's no longer really necessary

//*==========================================================================

//& Title: Box-sizing: border-box:
//* box sizing border box, what this does is to change the box model
//* so that the borders and the paddings are no longer added to the total width or the total height
//* that we specify for a box.

//! Basic reset using universal selector:

//? * {
//?   margin: 0;
//?   padding: 0;
//?   box- sizing: border - box;
//? }

//& Title: Set Overall font properties for the entire webpage:

//* Set the overall font property for webpage in
//! body selector
//* Most of font properties are inherited
//* So use the power of inheritance in the body selector
//* to inherit all font properties to the child of the body.

// body{
//   font-family: 'Lato',sans-serif;
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 1.7;
// }

//* the height of this box (header) should be 95% of the viewport height.
// .header{
//   height: 95vh;
// }

//* ../: to go one folder up

//* background-image: cover

//* what cover does is that whatever the width of
//* the viewport, or the element, it'll always try to fit
//* the element inside of the box.

//* background-position: top;
//* make the top of the image stays the same whatever the size of viewport changes

//? Add Opaque Layer:
// background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(../img/hero.jpg);

//? Clip path:
//* We use clip path to apply wedge on the page
//* Specify a polygon in which the image, or the element, will still be visible.
//* We use the polygon function. So polygon. And in here we define a bunch of coordinates which define this polygon.

/* triangle clip path */
// clip-path: polygon(0 0, 100% 50%, 100% 50%, 0 100%);

//? logo-img

//* add first a DIV, and then inside that DIV is where I'm gonna put an image. Because the image is actually an inline element,

//* it's a better practice to first have a small container where this image is inside,

//* and then position that container to where we want the image and the container to be.

<div class="logo-box">
  <img src="./img/logo-white.png" alt="logo" class="logo" />
</div>;

//? h1
//* h1 is the single most important heading on the page, which is important for Google or for any other search engine
//* to figure out what our webpage is all about. And so it's important that we basically put the title of our webpage in there.

//? span
//* span element is perfect for this because remember that a span is simply to style some text different.

//? Center a div inside a parent div:

// .parent-div{
//   position: relative;
// }

// .child-div{
//   position: absolute;
//   top: 50%;  //* related to parent div
//   left: 50%; //* related to parent div
//   transform: translate(-50%, -50%);  //* related to child div itself
// }

//& Animate:

// in each moment of time of the animation.

// So we start with 0% which is before

// the animation actually starts.

// So this can also be called start.

// Then the finish is at 100%,

// which is when the animation finishes.

// But we can put other steps here in the middle.

// So for example, if we want something to happen

// at the moment where the animation is at 80%, for example,

// and we could do 50, we could do 36,

// we could do any percentage here that we want.

// But let's just start with 0%, so the initial state,

// and then 100%, which is the final state.

// So how do we want the element to look like

// before it starts to move in?

// First, we want it to be invisible.

// Right?

// So what we can do is opacity zero.

// So at the beginning of our animation,

// the opacity will be zero and at the end of course,

// we want it to be back to one.

// So opacity, one.

// So that's one of the properties that we're animating here.

// Now for the browser performance,

// it's best to only ever animate two different properties.

// One is opacity, which is the one that we're using here,

// and the other one is the transform property.

// That's what the browsers are optimized for,

// for these two properties.

//~ Example

// .heading-primary--sub {
//   display: block;
//   font-size: 2rem;
//   font-weight: 700;
//   letter-spacing: 1.75rem;
//   animation: moveInLeft 1s ease-in;
// }

// @keyframes moveInRight {

//   0% {
//     opacity: 0;
//     transform: translateX(-10rem);
//       /* we want the element to be invisible at the beginning of the animation by applying the two properties above  */
//   }

//   80% {
//     transform: translateX(1rem);
//   }

//   100% {
//     opacity: 1;
//     transform: translateX(0);
//   }
}

//*===============================================================================================================

//& Title: Backface-visibility CSS Property
//? Note: The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.
//* The back face of an element is a mirror image of its front face.
//* Though invisible in 2D, the back face can become visible when a transformation causes the element to be rotated in 3D space.
//* This property has no effect on 2D transforms, which have no perspective.
//* The backface-visibility property can be set to either visible or hidden.
//* When set to hidden, the back face of the element is not visible, effectively making the element invisible when turned away from the user.
//* This can be useful in creating certain visual effects, such as flipping cards or other 3D transformations.

//* However, some developers have reported that setting the backface-visibility property to hidden can help reduce shaking or flickering in certain animations

//*===============================================================================================================

//& Pseudo Elements:

//* Pseudo Elements is a special state of the selector

//*=========================================================================

//& Inheritance:

//* properties like the ones related to text, such as font-size,color,font-family, inherit the computed value of their parent elements.
//* margin and padding are not inherited.

//* Each and every CSS property must have a value. Even if neither we, the developer nor the browser do specify it.
//* In that case, there's no cascaded value

//* The value which is to be inherited is the (computed value) not the declared value.
//* there's a distinction between using percentages for fonts or for length or distance measurements.

//*================================================================================================================

//& Units
//* When we express a length measurement in percentages, like height, a padding, a margin, or something else,
//* the reference is always the parent element's width.

//* Both ems and rems are font-based, but the difference between them is that
//? ems use the parent or the current element as a reference while
//? rems use the (root) font size as the reference.

//* So em for (fonts), the reference is the parent.
//* em for (length), the reference is the current element.

//! Interview:
//! "Why should we actually size stuff with ems and rems if they are based on font-size? strange right?!

//* to  build more request responsive layouts because just by changing font sizes,
//* we will automatically change length since it depend on a font size and that gives us a lot of flexibility, and it's just a great technique.

//? example

//? html{

//~ font-size:10px;
//* We set the webpage font-size to 10px for easy calculations
//* as 1rem === 10px
//* set font-size to 62.5% which is (10px/16px)*100% = 62.5%
//* We did that to allow the user to change the font size of the webpage if he wants
//~ font-size: 62.5%;

//? }

//& vh and vw

//* vh and vw are relative units

//* vh and vw are based on a browser's view port

//* Basically one vh is just one percent of the view port

//* height and one vw is just one percent of the current view port width

//*the browser who's painting the page knows about the view port height and width

//* and so it does these calculations

//* when it's calculating the used values in pixels

//* and the same applies, of course, to vw.

//*================================================================================================================

//& Box-model: box-sizing:

//* The total width applied equals the specified width
//* any padding or border values will be included inside the specified width.

//*================================================================================================================

//& Stacking Contexts (z-index)

//! a common misconception is that (only the z index property) creates new stacking contexts,

//! but that's not the case.

//* An opacity value different from one,

//* a transform, a filter or other properties, will also create new stacking contexts.

//~ That's why sometimes, even with the z index set on a positioned element,
//* the stacking order doesn't work as expected.

//*================================================================================================================

//& CSS Architecture and BEM:

//* Independent components should not depend on their parent elements.

//* .block
//* .block__element
//* .block__element--modifier
//! the BEM selectors have low specifity because each selector is only one class.

//*================================================================================================================

//& Title: max-width

//* max-width means is that if we have enough available space,

//* then it will have the width that we specified

//! but if there is not enough width,

//* so basically if the viewport is smaller than width that we specified here,

//~ so in this case, if the viewport is smaller than 114 rem,

//* then it will simply fill 100% of the available space (the width of current viewport)

//*================================================================================================================

//& Title: calc method:

//! width: calc((100% - #{$gutter-horizontal}) / 2);
//* Don't forget the spaces before and after the ( - )


//*================================================================================================================

//& Title: Install Sass compiler and run it:

//~ npm init

//~ npm install node-sass --save-dev

//~ npm install live-server -g: to install live server globallay

//?  --save-dev: to install it as developer dependency in package json folder
//?  save: specify this package as normal dependency

//*  It means basically that Node SASS is a tool hat we use to develop our project.

//! package.json folder is used to reproduce node modules file when we deleted to share the project or move to another place 
//! by applying command: npm install 

//? "scripts": {
//?    "compile:sass":"node-sass sass/main.scss css/style.css -w" 
//? },

//*  "compile:sass":"node-sass sass/main.scss css/style.css -w"   ===  "compile:sass":"used package input file output compiled file -w"

//* -w: to keep watching for any modification in main sass file and compiled sass to css automatically


//* you should be in the directory that contains your package.json file when you run npm run compile:sass. 
//* This is because npm run scripts are defined in your package.json file, and npm needs to be able to find this file to know what scripts are available.

//? For example:
//* If your package.json file is located in the 04 Layout directory, then you should change your directory to 04 Layout before running the command:

//* cd "c:/1Programming/Advanced CSS and SASS/My Practice/04 Layout"
//* Please note that in Windows, you should use forward slashes / instead of backslashes \ when navigating directories in Git Bash.

//~ npm run compile:sass



//*===============================================================================================================

//& Title: IMPLEMENTING THE 7-1 CSS ARCHITECTURE WITH SASS


//? create base folder:
//* our basic project definitions. Like a project boiler plate.

//~ mkdir base

//~ mkdir folder1 folder2 folder3


//! includes:

//! 1) Base file
//* resets and styles for the HTML and body element selectors.
//* Note this file should be a partial so we can later import it into the main SASS file.
//* partial files starts with  undeersore _

//~ echo. > _base.scss

//* name of the partial file:  _base.scss
//* import partial file by writing in main.scss this: @import "base/base"; 

//? animations:
//? typography:
//? utilities:

//* to create multiple files in the current directory
//~ echo. > _utilities.scss  && echo. > _typography.scss && echo. > _utilities.scss
//~ or:
//~ type nul > _typography.scss && type nul > _utilities.scss


//! 2) abstracts:
//* In this folder includes code output any css suchs as variables, mixins, functions

//! 3) components:
//* components are our independent reusable building blocks that are held together by layout of the page

//! 4) Layout

//! 5) pages:
//* contains very specific style that applied to a specific page like the landing page
//* that usually had styles that only applied on it
//* _home.scss

//! 6) themes:

//! 7) vendor:
//* folder where you can put third party css which includes icon system, scss file of bootstrap, animation framework.





//*================================================================================================================


//& Title: Nesting in Sass:

//* li {

//*   display: inline-block;
//*   margin-left: 30px;
//*   &:first-child {  
//*     margin-left: 0;
//*   }

//* }


//? & used when the selector will be repeated inside its selector while nesting

//* li {

//* li:first-child {
    //*     margin-left: 0;
//* }

//*}

//? so replace li by & instead of write li again as above

//* 

//*================================================================================================================

//& Title: nesting application in hover:

/*
* .btn-main {

  &:link {
*    background-color: $color-secondary;
*    transition: all 0.4s;
*  }

  &:hover {
*    background-color: darken($color-secondary, 15%);
*  }
*}

*/

//*================================================================================================================


//& Title:Mixin in Sass:

//* mixin make a copy of repeated reusable declarations to be used in different unrelated selectors

//* to declare mixin:

//*  @mixin nameofmixin{}
//*  to call mixin: include@


//? Declare mixin examples:
/*

@mixin clearfix {
  &::after {
    content: "";
    clear: both;
    display: table;
  }
}

@mixin flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

 ~ mixin with argument

@mixin style-text-link($color) {
  text-decoration: none;
  text-transform: uppercase;
  color: $color;
}

*/

/*

nav {
 *  @include flex;
}

.navigation {
  
  li {
  
    a:link {
*    @include style-text-link($color-text-light);
    }
  }
}

.btn-main:link{
*     @include style-text-link($color-text-dark);
  
}*

*/

//*================================================================================================================

//& Title:functions in Sass:

/*

* @function divide($a, $s) {
*  @return $a/$s;
* }

* nav {
*  margin: divide(60, 2) * 1px;
*}

*/


//*================================================================================================================

//& Title:Extends in Sass:


//* you should only ever use extends  if the rules that we're extending

//* are inherently and thematically related.

//* That's the case with these buttons They are really related.


//! Difference between extend and mixin
//* mixin make a copy of repeated reusable declarations to be used in different unrelated selectors

//* but, extends a copy of repeated reusable declarations to be used in related selectors


/*

%btn-placeholder {
  @include style-text-link($color-text-dark);
  text-align: center;
  display: inline-block;
  padding: 10px;
  border-radius: 100px;
  width: $width-button;
}

.btn-main {

  &:link {
*    @extend %btn-placeholder;
    background-color: $color-secondary;
    transition: all 0.4s;
  }

  &:hover {
    background-color: darken($color-secondary, 15%);
  }
}

.btn-hot {
 
  &:link {
*    @extend %btn-placeholder;
    background-color: $color-tertiary;
    transition: all 0.4s;
  }

  &:hover {
    background-color: lighten($color-tertiary, 15%);
  }
}

*/


//* extend call like here:   @extend %btn-placeholder; copy the above selector (&:link === .btn-main:link) to the extend declaration 

//? extend declaration
/*
%btn-placeholder {
  @include style-text-link($color-text-dark);
  text-align: center;
  display: inline-block;
  padding: 10px;
  border-radius: 100px;
  width: $width-button;
}
*/


//*======================================================================================================