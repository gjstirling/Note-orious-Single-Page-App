# Note-orious App 

This is a single page web app built using pure Javascript. See a demo [here](https://www.loom.com/share/501f3116c9a44281ba08582195653968).

<img alt="Homepage" src="images/Homepage.png" width="500" height="500">

## Installation instructions 

If required:
```
brew update 
brew install node
brew upgrade node
```

Create a new server:
```
cd Notebook-Single-Page-App
npm install --global http-server
```

To run server:
```
http-server ./
```

Visit page: 
```
open http://127.0.0.1:8080
```


---

## Running the tests

Open ```specRunner.html``` in your browser. 
Follow the on screen instructions.  

---


## User Stories 
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
As a programmer

I can create a new note
So I can record something I need to remember
As a programmer

I can see the full text of an individual note on its own page
So I can see all the information in the note

As a programmer
I can use shortcodes like `:fire:` that get converted into emojis like 🔥
So I can record notes with fun little pictures
```
