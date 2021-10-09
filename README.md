# HOTEL TEMPLATER SERVER

This project is integrated with this client [CLIENT HOTEL TEMPLATER](https://github.com/AitorSantaeugenia/Project3_IH_client).

## TODO

- Booking for rooms
- Booking for services (restaurant tickets)
- Dashboard to another client
- Admin and guest users
- Show/hide components and pages
- Download client from a package / rar / or something to integrate with backend
- Refractor all code
- Organize code

#### ROUTES API WIP

| HTTP verb | URL                        | Request body | Action                        |
| --------- | -------------------------- | ------------ | ----------------------------- |
| GET       | `/api/projects`            | (empty)      | Returns all the projects      |
| POST      | `/api/projects`            | JSON         | Adds a new project            |
| GET       | `/api/projects/:projectId` | (empty)      | Returns the specified project |
| PUT       | `/api/projects/:projectId` | JSON         | Edits the specified project   |
| DELETE    | `/api/projects/:projectId` | (empty)      | Deletes the specified project |

#### MODELS API WIP