const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }

};

guests.BRUTUS = {
    title: "Senator",                                   //Step 1
    region: "Rome",                                 // Add BRUTUS to the directory. He's a Senator 
    dietaryPreference: "Vegan",                     // from "Rome" who perfers vegan food....
    pastGifts: ["Silver Dagger", "Marble Bust"]
}

guests.CICERO.pastGifts.push("Golden Lyre")   // Step 2 Update Cicero's past gifts to include a "Golden Lyre"
  
const ANTONYregion = guests.ANTONY.region   // Step 3 retrieve the region of "ANTONY"

delete guests.CICERO    //  Steo 4 Due tom unforseen political events, "CICERO" needs to be discreetly removed fromt the 
                        // the guest list 

const generalProfile = guests.ANTONY   // Step 5 Assign Antony's Profle to a new variable named "generalProfile"
generalProfile.region = "Egypt"        // then using the new variable, change the region to Egypt.

// Question 1 After executing Step 5, what will the region ANTONY in the original guests object?

// The correct answer is Egypt. Antony's region after making the change in step 5 it is now Egypt.
