# BMI-Calculator

A simple BMI (Body Mass Index) calculator in vanilla JS.

# Features

  ✔Calculate BMI by weight (in kg) and height (in cm).
  
  ✔Interpret the calculated BMI.
  
  ✔Visualize the interpretation with a color-coded BMI scale.
  
  ✔Calculate the Body fat Percentage.
  
  ✔Save history of BMI and body fat Percentage results.


# Tech Stack: 

   HTML5 
   
   Animation CSS
   
   Javascript :  
      Concept Used :-  
            Event Handling:
        
                   The code attaches event listeners to the form's submit and reset events.
                   onFormSubmit: This function is executed when the form is submitted.
                   onFormReset: This function is executed when the form is reset.
        
DOM Manipulation:   
                
    The document.getElementById and document.querySelector methods are used to interact with HTML elements.
    The text content and classes of elements are dynamically updated based on user input.

Form Handling and Validation:

    User input for weight, height, age, and gender is retrieved from the form.
    Basic validation checks ensure that the weight, height, and age are valid numbers and greater than zero.

BMI Calculation:

    BMI is calculated using the formula: weight / (heightInMeters)^2.
    The result is interpreted using the interpretBMI function, which categorizes the BMI into "underweight", "healthy", "overweight", or "obese".

Body Fat Calculation:

    The body fat percentage is calculated differently for males and females using a standard formula.

History Management:

    A new list item is created with each BMI calculation, storing the BMI, body fat percentage, weight, height, age, and gender.
    A "Clear History" button clears the BMI history.




https://github.com/user-attachments/assets/cb88eac8-9c39-4387-9a87-bcdf6c8d1802




   
  
