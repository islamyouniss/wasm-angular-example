# rustng

This project was meant to be implementation for wasm using rust and angular

first of we will create angular workspace using following command:

``ng new rustng --create-application=false``

then create angular library in this workspace 

``ng generate library rustyng``
 
and generate angular application

``ng generate application rustyng``

install wasm rust package 

``cargo install wasm-pack``

create rust library in the angular library directory ``src/lib``

``cargo new --lib example-rust-lib --vcs none``

to build ``wasm`` use this command in rust lib directory:

``wasm-pack build --target web``

to load the wasm to your project you need to add this snippet to ``angular.json``
````    "example-app": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "**/*.wasm",
                "input": "projects/rusty-wasm/src/lib/rusty-lib/pkg"
              }
````
