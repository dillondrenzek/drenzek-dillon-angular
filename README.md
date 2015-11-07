# [drenzek-dillon](http://dillon.drenzek.com)
The professional portfolio of University of Colorado graduate, Dillon Drenzek. <br>
**Homepage**: http://dillon.drenzek.com

---------
## Version: `v4` <br>

### Version History
| Version Name      | Version Number    | Date          | Description |
|-------------------|-----------|---------------|---|
| Angular           | 4     |   Nov 6 15   | Reimplement new interface in Angular |

---------
## File Structure

    /drenzek-dillon-angular
      /css
      /js
        /controllers
        /filters
        /services
        /directives
      /templates
        /pages
          /projects
          /skills

---------

## App Components
Probably convertible to directives later on

    - Page
      - Page Columns (left, center, right, fixed, scroll)
    - Logo
    - Social Media Links
    - Nav Links
    - Sections
      - Title
      - Paragraph
      - List
      - Filter Control
    - Models
      - Skills (large, medium, small, table)
      - Projects (large, medium, small, table)

--------

## App Controllers

- Projects CRUD `controllers/`
  - ProjectListCtrl
  - ProjectCreateCtrl
  - ProjectShowCtrl
  - ProjectEditCtrl (Not Implemented)

- Skills CRUD `controllers/`
  - SkillListCtrl 
  - SkillCreateCtrl 
  - SkillShowCtrl (Not Implemented)
  - SkillEditCtrl (Not Implemented)

----

## Testing
Using Protractor.js