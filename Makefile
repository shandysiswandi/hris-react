.PHONY: run
run:
	@npm run dev

.PHONY: docker
docker:
	@docker build -t hris-web-dev .
	@docker run --rm -it -p 3000:80 hris-web-dev
