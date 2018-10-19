# Who use Angular in Thailand
The list of companies who use Angular in Thailand

[![CircleCI](https://circleci.com/gh/perjerz3434/who-use-angular-in-thailand/tree/master.svg?style=svg)](https://circleci.com/gh/perjerz3434/who-use-angular-in-thailand/tree/master)

https://perjerz3434.github.io/who-use-angular-in-thailand

## Add your company
In order to add a company to this repo, you have to submit pull request so as to edit the src/assets/data/companies.json file.

JSON object must follow the format below.

- name: Company's name (required)
- description: Company's description (required)
- logo: Company logo's URL (optional)
- companyUrl: Company's URL (required)
- productUrl: Company products's URL using Angular ecosystem (optional)
- technologies: Technologies related to Angular: rxjs, angular, angularjs, typescript, ionic, nest, ngrx, nativescript, electron (required at least one)

For instance:

```
    {
      "name": "Example Company",
      "description": "Example Company Description",
      "logo": "assets/images/angular.svg",
      "companyUrl": "www.example.com",
      "productUrl": ["www.example.com", "www.example.com"],
      "technologies": ["angularjs", "angular","ionic", "nestjs", "ngrx"]
    }
```

## Inspired By
https://github.com/ng-japan/who-use-angular-in-japan

https://github.com/tomastrajan/angular-ngrx-material-starter
