# GEOG 458 Final Project: US Shooting Statistics

## Team Members

- Peter Kidane (Senior, Major in Geography: Data Science & Sales Certificate)
- Ratik Koka (Senior, Major in Geography Data Science; Minor in Informatics)
- Travis Le (Senior, Major in Geography: Data Science)
- Jun Nguyen (Senior, Major in Informatics & Geography: Data Science)
- Peter Zhou (Junior, Major in Geography: Data Science & Applied Physics)

## Project Idea

This group will be looking to examine the gun violence data across the United States of America. Gun violence has been a headline in the news as of lately with the outrageous amount of violent gun acts that have taken place this year. Our idea came from the recent and current news which is heavily focused on gun violence. The question surrounding that topic we are currently trying to answer is to understand how the trend of mass shootings looks like and the number of people that were impacted over the last few years. With that idea, we will be looking at data from deaths and mass shootings. We’ll also be looking at other attributes such as the years, which allows us to see the data and make further analysis while answering more questions.

When we ask why paying such attention specifically to mass murder, the answer falls may fall in the link that’s below. If you follow the link it’ll show you in the data that Mass Shootings are much less than “injuries” which makes sense. However, what’s wrong with that is the “less injuries” is overshadowing the fact that the rate of mass shootings is still too high.

## Project Significance

Gun violence is a threat to public health in the United States. Our government should treat this epidemic like they have with other public health crises, such as car crashes, tobacco use, or measles — by funding research that can help to develop evidence-based prevention solutions. Research seeks to increase understanding of how to help effectively reduce and prevent death and injury, which can be translated into effective interventions through policy or practice. Unfortunately, compared to other diseases, very little money is spent to research gun violence. Research funding is needed to understand the scope of gun violence in all its forms, from suicides and domestic violence to community gun violence and unintentional shootings to police-involved shootings, so that evidence-based solutions can be developed. More generally, funding is desperately needed to further research the root causes and potential solutions to the gun violence epidemic. While informative research and solutions already exist, federal and state funding would fill a critical need for the advancement of this area of public health research. Government-funded public health research has contributed to reducing motor vehicle fatalities, drownings, fires, and tobacco use. We can do the same with gun violence — but only if we have the resources.

A negative impact of our project could be that in the areas we reported with high gun violence, some people might not want to consider those areas for relocation or work that could potentially result in lower economic growth. However, it is not the result we are aiming for — it is the impact of the results. If attention is brought to the lawmakers or the police force where a redistribution of arm force or overall gentrification is going to revitalize the area to be “relocatable”, then these places are again back on the list and our “negative impact” would instead result in a positive outcome. On the other hand, areas where gun violence are common wouldn’t be a promising place where most job oppositions are located. In such a case, even if people are staying back from these specific danger sites, there wouldn’t be much of a loss in terms of opportunity. This is exactly why our target audiences can’t be straight to civilians since they don’t possess the power that allows them to make an actual change in the environment.

## Functions & Data Sources

### Primary Functions

- Navigation bar to allow users to view between the maps and statistics
- Users can change their view of the map through filters
  - Total number of shootings per state
  - Specific number of people injured/killed per event
- Timeline slider to show the events’ occurrences over time

Example Project: https://www.gunviolencearchive.org/

### Data Sources

- [Gun Violence Deaths 2022](https://www.gunviolencearchive.org/reports/number-of-gun-deaths)
- [Gun Violence Injuries 2022](https://www.gunviolencearchive.org/reports/number-of-gun-injuries)
- [Mass Shootings 2022](https://www.gunviolencearchive.org/reports/mass-shooting)

## Target Audience

- Law Makers
  - We target lawmakers so they would turn the “negative impact” of influencing people’s choice of choosing place of relocation into a positive result where areas are changed to be more relocatable by enforcing new policies.
- Police department
  - We target the police departments so that in the short term, they could properly redistribute their forces to aid people who are in need and focus on the areas where they are most needed.

## Multimedia

- [Gun Violence Archive - Number of Deaths in 2022](https://www.gunviolencearchive.org/query/14c00d51-0b8d-4dd6-a71e-0caa61f54155/map)

## Project Format

For the project format, we are planning to do option 1, which is the generic digital geographies project where we will be making an interactive web map. The map projection will be Web Mercator (4328) projection. The center will start at a latitude of 40 and a longitude of -100 with a starting zoom level of 11. The zoom levels we plan to have will have a minimum of 1 and a maximum of 15. We plan to use a simple monochromatic basemap like the “dark-v10” basemap from the MapBox API. For our thematic layers, we plan to make vector layers that use the heatmap visual strategy, with supporting data from The Gun Violence Archive (see Functions & Data Sources section) to show the total number of shootings per state and the specific number of people injured or killed for each event. For these layers, our data attributes will be the location of each incident and deaths/injuries. For the interactive functions, we want to use radio buttons to allow users to switch their view of the map between the total number of shootings per state and the specific number of people injured or killed for each event. We will also use an interactive timeline slider to show these maps based on different years so that our target audience can visually see the trend of gun violence in an area over time.
