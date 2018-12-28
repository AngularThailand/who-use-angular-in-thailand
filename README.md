# Who use Angular in Thailand
The list of companies who use Angular in Thailand

[![CircleCI](https://circleci.com/gh/AngularThailand/who-use-angular-in-thailand/tree/master.svg?style=svg)](https://circleci.com/gh/AngularThailand/who-use-angular-in-thailand/tree/master)

https://AngularThailand.github.io/who-use-angular-in-thailand

## Add your company
In order to add a company to this repo, you have to submit pull request so as to edit the src/assets/data/companies.json file.

JSON object must follow the format below.

- name: Company's name (required)
- description: Company's description (required)
- logo: Company logo's URL (required)

Upload your company logo to assets/companies folder
You have to optimize company images before upload.
PNG: https://tinypng.com
JPG: https://tinyjpg.com/
SVG: https://jakearchibald.github.io/svgomg
GIF: https://ezgif.com/optimize

- companyUrl: Company's URL (required) (with http/https)
- productUrls: Company products's URL using Angular ecosystem (optional) (with http/https)
- technologies: Technologies to build your product related to Angular: rxjs, angular, angularjs, typescript, ionic, nest, ngrx, nativescript, electron, firebase, tensorflow, python, java, gcp, android, ios, nx (required at least one)

For instance:

```
    {
      "name": "Example Company",
      "description": "Example Company Description",
      "logo": "assets/companies/example.png",
      "companyUrl": "http://example.com",
      "productUrls": ["http://example.com", "http://example.com"],
      "technologies": ["angularjs", "angular","ionic", "nestjs", "ngrx"]
    }
```

## Inspired by
https://github.com/ng-japan/who-use-angular-in-japan

https://github.com/tomastrajan/angular-ngrx-material-starter
