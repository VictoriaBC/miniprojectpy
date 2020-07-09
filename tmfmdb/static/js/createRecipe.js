$(document).ready(function() {
    // This code enables CK editor on the website, but also fetches the config.js file
    // Also makes sure it don't throw errors when opening other pages
    let recipeLoad = document.getElementById("recipe-form");
    if(recipeLoad) {
        CKEDITOR.replace( 'recipe_ingredients', {
            uiColor: '#6499ed',
            customConfig: '/../static/js/config.js'
        });

        CKEDITOR.replace( 'recipe', {
            uiColor: '#6499ed',
            customConfig: '/../static/js/config.js'
        });


        // This JS is for making sure that recipe creation go well, and provide the client with sufficient feedback
        // All the variables required to handle the operation
        ($("#submitForm").click(function (e) {
            let recipeUrl = $("#imageUrl").val();
            let portions = $("#recipe_portions").val();
            let recipeName = $("#recipe_name").val();
            let description = $("#recipe_description").val();
            const urlLabel = document.getElementById('urlLabel');
            const recipeNameLabel = document.getElementById('recipeNameLabel');
            const descriptionLabel = document.getElementById('descriptionLabel');
            const portionLabel = document.getElementById('portionLabel');


                // This one is to make sure the URL string is correct
            const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

                // Checks if the URL is invalid
            if(!!pattern.test(recipeUrl) !== true) {
                urlLabel.innerText = "Please add a valid URL";
                urlLabel.style.color = "red";
                e.preventDefault();

                // If the URL is valid, it provides valid URL
            }if(!!pattern.test(recipeUrl) === true) {
                urlLabel.innerText = "URL Valid";
                urlLabel.style.color = "green";

                // Check if there is text and not just spaces, and if it's shorter then 3 characters
            }if(recipeName.trim().length === 0 || recipeName.trim().length < 3) {
                recipeNameLabel.innerText = "Recipe name empty or too short";
                recipeNameLabel.style.color = "red";
                e.preventDefault();

                // Check if the recipe name is long enough
            }if(recipeName.trim().length >= 3) {
                recipeNameLabel.innerText = "Recipe Name Correct";
                recipeNameLabel.style.color = "green";

                // Check if description is just spaces or less then 5
            }if(description.trim().length === 0 || description.trim().length < 5) {
                descriptionLabel.innerText = "Description too short";
                descriptionLabel.style.color = "red";
                e.preventDefault();

                // If it's longer then 5 characters
            }if(description.trim().length > 5) {
                descriptionLabel.innerText = "Description Correct";
                descriptionLabel.style.color = "green";

                // If the portions are not a number or just empty space
            }if(isNaN(portions) === true || portions.trim().length === 0) {
                portionLabel.innerText = "Please use numbers only";
                portionLabel.style.color = "red";
                e.preventDefault();

                // If NaN is false, it passes
            }if(isNaN(portions) === false && portions.trim().length >= 1) {
                portionLabel.innerText = "Number Correct";
                portionLabel.style.color = "green";

            }

        }));
}});