 Welcome in our Fluid Clamp website. 

 Its goal is to make the design responsivness a bit easier for developpers. 
 It's always annoying how we have to change the value of an element (either its width, height, gap, text's size) so that it looks clean on all screen sizes .
 
 How it works:
 
 - The values on which the calculation is based is expressed only in pixel  
 
 - You first pick the maximum and the minimum screen size for your web app.  To be more specific, above the maximum (you chose) on which the look of the website won't change and same for under the minimum
 
 - You then pick the element'size corresponding to the maximum and then the minimum screen size 
 
 - Click on the clamp button, the clamp value will be given to you, copy it, give it to the element and its size will adjust across the screen sizes you chose



It uses the rem(with 16px as the baseline by  default)  and goes  through 3  steps

Step 1: calculates the  difference between the max and the min pixels of the  element(text,  button, ...). The result is called, object_diff

Step 2: calculates the difference between the max  and  min of screen sizes ( by  default, 1400px - 320px, just personal preferences,you can change them directly in the input or choose your default preferences in the settings). The result is called  screen_diff

Step 3: calculates the ratio:  object_diff/screen_diff*100 (the result is in vw). The result will  be called ratio

Last step: gives the static rem value that we'll  add to the ratio. The formula is : 16px-(ratio*min_screen_size/100) , the result will be divided by 16 to get the value in rem, and it'll be called, fixed_base

The end result  will look  like this, clamp(min_px, fixed_base + ratio, max_px)
min_px, max_px and fixed_base in rem and ratio in vw