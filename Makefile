dev:
	bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000

build:
	bundle exec jekyll build --destination _site

clean:
	rm -rf _site
