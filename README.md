# Arya NK - Personal Blog

A personal blog built with Jekyll, featuring posts on Data Science, Software Engineering, and DevOps.

## Prerequisites

- Ruby 3.2.6 (use rbenv or Homebrew `ruby@3.2`)
- Bundler (`2.4.19`)

## Setup

1. **Install Ruby 3.2.6**
   ```bash
   # using rbenv
   rbenv install 3.2.6
   rbenv local 3.2.6

   # or with Homebrew
   brew install ruby@3.2
   export PATH="$(brew --prefix ruby@3.2)/bin:$PATH"
   ```

2. **Install Bundler & dependencies**
   ```bash
   gem install bundler -v 2.4.19
   bundle install
   ```

## Local Development

Run the site locally:

```bash
make dev
```

Visit: http://localhost:4000

## Project Structure

```
├── _posts/          # Blog posts
├── _includes/       # Reusable HTML components
├── _layouts/        # Page templates
├── _sass/           # SCSS stylesheets
├── assets/
│   ├── css/         # Compiled CSS
│   ├── js/          # JavaScript files
│   └── img/         # Images
├── _config.yml      # Site configuration
└── Gemfile          # Ruby dependencies
```

## Creating a New Post

Create a new file in `_posts/` with the format:

```
YYYY-MM-DD-post-title.md
```

Add front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
excerpt: "Brief description"
tags: [Tag1, Tag2]
feature: /assets/img/featureImages/image.jpg
comments: true
---
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch.

## License

Content is licensed under [CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/).
