install:
	npm install

lint:
	npx eslint .

link:
	npm link

unlink:
	npm unlink

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8