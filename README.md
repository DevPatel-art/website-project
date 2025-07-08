# Tech Gadgets UI Library — Headless CMS Integration

##  Project Overview

This project is a responsive React web application project that displays a collection of tech gadgets fetched from a headless CMS (Strapi). 
The site depicts a card grid layout with clean, responsive design and a pagination system that shows 5 gadgets per page.

All gadget detail includes names, prices, descriptions, and images which are fully managed in Strapi’s Content Manager, making it easy to update or expand the content without changing any front-end code.

---

## Tech Stack

- Front-end: React (Vite)
- Backend: Strapi (Headless CMS)
- API: Strapi API with `populate` for images
- Styling: CSS Grid, Flexbox, pagination, hover shadow, etc
- Development Tools: Postman (for API testing), VS Code, GitHub


# Key Features

 product cards for:
  - Phones
  - Laptops
  - Tablets
  - Smartwatches
  - Headphones
  - Smart Speakers  
  - VR Set

All content comes from Strapi:
  - we can add or edit products anytime.
  - we can manage images in the Media Library.
  - we can publish/unpublish any image

Responsive Card Grid
  - 3 and 2 cards per row on desktop
  - Smooth hover animations and shadows

Pagination
  - Shows 5 cards per page.
  - Next/Previous buttons.
  - Shows total pages.

Simple navigation bar:
  - Switch between Home, About, Services pages.

Clean project structure:
 Project consists of src folder which containsnavbar, content, app, etc javascript files which is easy to navigate and it also contain component folder strictly for tech cards


# Project Setup

1. Clone this Repo
2. run strapi in cmd by running command npm run dev
3. run main website project in cmd by running command npm run dev
4. view the website from the local host link
5. view all the tech gadgets and move between pages
6. Before running the website dont forget to install all the dependencies

# Testing 
  You can test the content by using the get command in postman to view all the content which is fetched from strapi 


