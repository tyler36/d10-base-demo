setup-drupal:  ## Install dependencies, install Drupal, and compile the theme.
	@ddev composer install --prefer-dist --no-progress
	@ddev exec npm install
	$(MAKE) site-install
	${MAKE} build-theme

site-install: ## Install the Drupal site.
	@ddev drush sql-drop --yes
	@ddev drush si --yes --existing-config
	@ddev drush cr

build-theme: ## Build the theme.
	@ddev npm run build

composer-validate: ## Validate Drupal composer.json and composer.lock.
	@ddev composer validate

phpcs: ## Run phpcs analysis.
	@ddev exec ./vendor/bin/phpcs

phpcbf: ## Run phpcbf.
	@ddev exec ./vendor/bin/phpcbf

phpstan: ## Run PHPStan analysis.
	@ddev exec ./vendor/bin/phpstan

phpunit: ## Run the Drupal phpunit tests for custom code.
	@ddev exec ./vendor/bin/phpunit
