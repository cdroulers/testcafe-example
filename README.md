This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## tl; dr

1. Install all dependencies (`npm install`)
2. Start the development server (`npm start`)
3. Run the tests (`npm test chrome:headless tests/e2e/ex/cases`)


## COMMANDS

### Run basic TestCafé for demo on multiple browsers

npm test chrome,ie,edge tests/e2e/ex/sample -- --speed 0.9

### Run basic TestCafé for demo with AJAX

npm test chrome tests/e2e/ex/cases -- --speed 0.9

### Run basic TestCafé with error

npm test chrome tests/e2e/ex/sample-error -- --screenshots-on-fails --screenshots "./tests/screenshots"

### Run TestCafé on host, with remote devices:

npm test remote:1 tests/e2e/ex/sample -- --speed 0.75 --hostname "192.168.7.189" --qr-code

