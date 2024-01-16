## 💭 Abstract
This project was a showcase of all of my abilities up to this point during my time at Turing. We were given little structure for how we developed it, but a very strict timeline and minimal expectations. I had to devise my own iterations on my project board as well as balance out my work time with my school time. Even still, I am very happy with the product. I would like to send this to anyone who wants to play pokemon because its meant to be a wonderful team builder. 

## 💻 Installation instructions
1. Open project on Github
2. Clone down the repo
3. cd into the repo and run npm install
4. Run npm start
5. give the app a few seconds to boot up. I have noticed that sometimes it does not perform as well on Chrome so if you dont see anything after few moments, click on a generation button. This will show you more specific pokemon to that genertation and in the background your loading will be done. 
6. Click on the various pokemon. You will see a card pop up with the pokemons information.
7. If you clikc the `Add to Team` button in the team viewer, you will add this pokemon to your team. You can also remove the pokemon with ease. 
8. After assembling a team of your desired pokemon, any number between 1 and 6, click the export button. 
9. Click the `Team` button to see your team. You will notice your team view window has not disappeared, thats because I wanted to make it so you could rework your team on the fly.
10. Enjoy!

## 🕹️ Deploy Link
https://m3-poke-lex.vercel.app/

## 📷 Preview of App
![pokelex](https://github.com/Jesuitman/m3-PokeLex/assets/139895703/92a8ca87-940e-463d-8fbe-8f935d595eb6)

## 🍎 Context
I was given a very short time frame to develop this App which gave me a good amount of experience in working with a strict sprint. I hit the ground running every day and struggled a lot with remembering self care, I am very thankful burnout did not set in, but I thin ktaht is primarily because I was having so much fun while making this App!. 

## 🧠 Contributors
Lex - https://github.com/Jesuitman

## 🖇️ Learning Goals
### Asynchronous JavaScript Proficiency: 
Gain expertise in asynchronous programming in JavaScript, focusing on handling asynchronous operations, promises, async/await, and API requests.

### Refactoring Techniques: 
Learn and apply best practices for refactoring code, emphasizing improved readability, maintainability, and performance without altering its external behavior.

### Router Implementation: 
Breaking apart my App because I had coded it in a way that wasn't productive for Routing was ehausting at first but felt very satisfying once i figured out what I was doing wrong.

### Error Handling: 
Learning new ways to error handle in Routing was a fun experience because I learned I've been mostly overthinking the entire process. I could make a much more simplified error handling mechanism in-app and not worry about anything else

### API Integration and Data Fetching: 
Gain hands-on experience in integrating APIs with React applications, focusing on fetching and managing real data from external sources, as well as interacting with Postman to create fixtures for data in testing

### Unstructured project expectations: 
With this project we were set loose to make an app of our own inspiration, with the only limiting factor being time. It was a unique position to be in to be my own project manager and only being able to rely on myself for coding instead of spliting up tasks. 

## 🎆 Wins && 🔥 Challenges#
### Wins:
My biggest hurdle was early on, where my generations werent loading correctly. Once I finally fixed it, it was a massive sigh of relief because with that, the user could finally make teams of all the pokemon they actually wanted. 

### Challenges: 
Fusing all of the pieces of knowledge I learned over the course of my time in this learning experience was an immense task. The hardest part was scaling back my initial plans so much because I wanted to do a lot more and just simply did not have the time. I will keep at this App though because I want this to be used by many, many users

## 📝 Observations  
Wow! I learned so much while writing this project! I had to do some refactors a couple times because of elements I had that just werent working the way I wanted. What is currently deployed has a lot of the features I want stripped out of the project but I am still very happy with the product. I enjoyed the experience working with the pokemon api, I became very familiar with its documentation. I am excited to keep working on the project as my time at turing draws to a close.

## 📊 Future Plans:
I would like to implement the following features
- Allow user to view and select mega evolutions
- Allow the user to select abilities
- Change the font to flip between the main font used for the generations on each generation button as well as the theme music
- Allow the user to select a held item for each of their pokemon
- A `generate team` button that will generate a team for the user based on a form. It would have options for generation locks as well as type locks. More options i nthis form based on user feedback
- Allow the user to story several teams as well as name them
- Give the user to wipe out the team they have selected when they export
- Hamburger menu for holding the team view, generate team form, and each generation button
- Hover states to replace the hardcoded pokemon card component so that it only appears when the user hovers over a pokemon, clicking it would then add it to the team
- An analyze team button that will tell you all of you teams weaknesses and strengths 
- Shiny dex 

## ✋ User Test Instructions 
1. Start the app on the deploy link
2. Observe the loading message and then click between the generations
3. Add a pokemon from each generation. 
4. Once you hit the cap of 6 pokemon, export your team
5. Click the team button to see your team. 
6. Remove between one and six pokemon and export again while on the same page
7. Navigate back to home by clicking the Pokelex header and refresh the page
8. Make a new team of pokemon strictly from the home page without clicking a generation
9. Repeat steps 4 through 7

## 👩‍💻 User Test Results/Observations

- User thinks the header bar should scroll with user to make it easier to navigate to team when exporting
- User wants to be able to remove pokemon purely from teams view and to not see the team display window. Says an X on the teammate card could be used to remove the pokemon from your team
- User wants ability to create more than one team with the ability name the teams as well
- User wants an on hover window each generation button that displays the generation number as well as the games associated with each generation
- User would like to see acquisition methods for each pokemon in each generation. This could be implemented in a `see-more` link for the pokemon?
- User also wants to see evolution methods for each pokemon
