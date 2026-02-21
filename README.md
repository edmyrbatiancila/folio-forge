# FolioForge 🔥

**FolioForge** is a dynamic developer portfolio CMS built with Laravel, React, InertiaJS, and TailwindCSS.

It allows developers to manage and update their portfolio through a secure admin dashboard instead of editing code manually.

The goal of FolioForge is to make portfolio updates fast, simple, and user-friendly using a modern UI.

---

# 🚀 Project Overview

Updating a developer portfolio usually requires:

- Editing source code
- Re-deploying the website
- Updating multiple files

FolioForge solves this problem by providing a web-based admin dashboard where developers can update their portfolio easily.

Instead of hard-coding portfolio content, users can:

- Add projects
- Manage skills
- Update information

All changes are reflected instantly on the portfolio website.

---

# ✨ Features (Version 1)

## 🔐 Authentication

- Secure login system
- Admin-only dashboard
- Protected routes

---

## 📁 Projects Management

Admin can:

- Add new projects
- Edit projects
- Delete projects
- View all projects

Each project includes:

- Title
- Description
- Image
- GitHub link
- Live demo link

---

## 🧠 Skills Management

Admin can:

- Add skills
- Edit skills
- Delete skills
- View skills list

Each skill includes:

- Skill name
- Category

Example categories:

- Languages
- Frameworks
- Tools
- Platforms

---

## 🌐 Public Portfolio

Visitors can:

- View portfolio
- See projects
- See skills

No login required.

---

# 🛠️ Tech Stack

## Backend

- Laravel

## Frontend

- ReactJS
- TypeScript
- InertiaJS
- TailwindCSS

---

# 📂 Project Structure

- app/
- resources/js/
- routes/
- database/

## Important Folders

### Backend

- app/Models
- app/Http/Controllers
- app/Services

### Frontend

- resources/js/Pages
- resources/js/Components
- resources/js/Layouts

---

# ⚙️ Installation

## 1. Clone Repository

- git clone https://github.com/your-username/folio-forge.git
- cd folio-forge

---

## 2. Install Dependencies

### PHP Dependencies

- composer install

### Node Dependencies

- npm install

---

## 3. Environment Setup

Copy environment file:

- cp .env.example .env

Generate key:

- php artisan key:generate

---

## 4. Configure Database

Edit `.env` file:

- DB_DATABASE=folioforge
- DB_USERNAME=root
- DB_PASSWORD=

---

## 5. Run Migrations

- php artisan migrate

---

## 6. Run Server

### Start Laravel

- php artisan serve

### Start Vite

- npm run dev

---

# 🔑 Default Usage

## Register Admin Account

Go to:

- http://127.0.0.1:8000/register

Create your admin account.

---

## Access Dashboard

Go to:

- http://127.0.0.1:8000/dashboard

---

## Portfolio Page

Go to:

- http://127.0.0.1:8000/


---

# 📸 Example Workflow

## Add Project

1. Login to dashboard
2. Go to Projects
3. Click "Add Project"
4. Fill information
5. Save

Project will appear on portfolio page.

---

## Add Skill

1. Login to dashboard
2. Go to Skills
3. Add skill name
4. Add category
5. Save

Skill will appear on portfolio page.

---

# 🎯 Project Goals

FolioForge aims to:

- Simplify portfolio updates
- Remove need for hard-coded content
- Provide clean admin interface
- Improve developer productivity

---

# 🔮 Future Features

Planned improvements:

- Contact form management
- Dynamic skill categories
- Portfolio themes
- Dark mode
- Analytics
- Multi-user support
- Resume generator

---

# 🧪 Development Status

Current Version:

- v1 - Minimum Viable Product

Includes:

- Authentication
- Projects CRUD
- Skills CRUD
- Public portfolio page

---

# 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork repository

2. Create branch

    - git checkout -b feature-name

3. Commit changes

    - git commit -m "Add feature"

4. Push

    - git push origin feature-name


5. Create Pull Request

---

# 📜 License

This project is open-source and available under the MIT License.

---

# 👨‍💻 Author

Created as a Full-Stack Developer project.

---

# 💡 Why FolioForge?

Many developer portfolios are static and difficult to maintain.

FolioForge provides:

- Easy updates
- Clean UI
- Secure dashboard
- Modern tech stack

---

# ⭐ Support

If you like this project:

Star the repository ⭐

---

# 📌 Notes

This project is built as a learning project and a real-world portfolio system.

It demonstrates:

- Laravel architecture
- React integration
- InertiaJS usage
- CRUD operations
- Authentication
- CMS design
