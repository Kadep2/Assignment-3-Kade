/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 35;
let num_of_days = 0;

let calculated_cost = document.getElementById('calculated-cost');

let clear_button = document.getElementById("clear-button");

let half_day = document.getElementById("half");
let full_day = document.getElementById("full");

let day_buttons = [document.getElementById("monday"), document.getElementById("tuesday"), document.getElementById("wednesday"),document.getElementById("thursday"),document.getElementById("friday")];
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function add_listener(i){
    day_buttons[i].addEventListener('click', function(){
        apply_clicked(day_buttons[i]);});
}
for(let i = 0; i < day_buttons.length; ++i)
{
    add_listener(i);
}

function apply_clicked(button){
    if(!button.classList.contains('clicked'))
    {
        button.classList.add('clicked');
        num_of_days += 1;
        calculate();
    }
}






/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear_button.addEventListener('click', function(){
    clear();
});

function clear(){
    for(let i = 0; i < day_buttons.length; ++i){
        if(day_buttons[i].classList.contains('clicked'))
        {
            day_buttons[i].classList.remove('clicked');
            num_of_days -= 1;
        }
    }
    calculate();
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_day.addEventListener('click', function(){
    half_day_active();
});

function half_day_active()
{
    cost_per_day = 20;
    half_day.classList.add('clicked');
    full_day.classList.remove('clicked');
    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_day.addEventListener('click', function(){
    full_day_active();
});

function full_day_active()
{
    cost_per_day = 35;
    half_day.classList.remove('clicked');
    full_day.classList.add('clicked');
    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate(){
    calculated_cost.innerHTML = cost_per_day * num_of_days;
}