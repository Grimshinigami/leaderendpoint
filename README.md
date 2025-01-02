# Locer

### Government Representative Finder for your Area

Locer can help you find the MLA's, MP's, Municipal Councilor for your state, constituency, ward respectively.

### Instruction to Run

Copy the Repository.

Open Terminal and get into directory.

Run npm i

Run npm start

Server Running on PORT: 8000 at address http://localhost:8000 (this will be referred to as server further)

### Data Available

Currently all MP data is available further data is being added

### Routes Available

(Limited functionality as of now more will be added)

server/api/v1/healtcheck - Check if server is working

server/api/v1/mlas/insert/insertalldocuments - Insert MLA records

server/api/v1/mlas/search - Search MLA records by state or name

server/api/v1/mps/insertalldocuments - Insert MP records

server/api/v1/mps/search - Search MP records by constituency or name

server/api/v1/mcps/insertalldocuments - Insert Municipal Councilor records

server/api/v1/mcps/search - Search Municipal Councilor by Ward or name

server/api/v1/userSuggested/insertalldocuments - Insert User Suggestted Contact Details for a particular MLA or MP or Municipal Councilor

server/api/v1/userSuggested/search - Search for a specific particular MLA or MP or Municipal Councilor by Id