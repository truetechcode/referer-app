# A Referer App  🚀

## 👋 Intro

The Referer App was built with a Ruby on Rails Backend and a React Front End. It is a very simple Referer/Invite system, where an already registered user can refer another user via email.

### Dependecies

- Ruby V2.7.3
- Rails Gem v6.1.4
- React on Rails Gem v11.3.0
- Devise Gem
- Google Map
- React Router v6.0.2
- Material UI

## 🚀 Getting Started

#### 1. Clone and Install

```
# Clone the repo:
git clone https://github.com/truetechcode/kopa-locate-app.git

# Move to the appropriate directory:
cd kopa-locate-app

# Install dependencies:
bundle

yarn install

# Setup Database

bin/rails db:setup
bin/rails db:migrate

# Change `dev.env` to `.env`
# Add your mailing credentials to `.env`

# Setup Webpacker by running:
  bin/rails webpacker:install
```

#### 2.1 Run the _Referer_ App

You can do it by running the following command in terminal:

```
foreman start -f Procfile.dev-server
```

The local server will start at:
[http://localhost:3000](http://localhost:3000).

#### 2.2 Api routes

- Creat User Account
```
POST /api/users
{
      "user": {
        "email": "test@example.com",
        "password": "password"
    }
}
```

- Authenticate User
```
POST /api/login
{
      "api_user": {
        "email": "test@example.com",
        "password": "password"
    }
}
```

- Get Authenticate User
```
GET /api/user
```

Author: <a href="http://www.twitter.com/truetech_code">Terver Aosu</a>
