# Erasmus Project

## Installation

- Clone, ideally into a Homestead machine. Otherwise, make sure you have all the [Laravel dependencies](https://laravel.com/docs/5.4) installed. For installing Homestead, check out the [official guide](https://laravel.com/docs/5.4/homestead).

  -    If using Homestead, make sure you include the following in your `Homestead.yaml`:

       ```yaml
       ....
       sites:
         - map: webbing.dev
         	# Change the following to match your folder structure
         	to: /home/vagrant/Code/erasmus/public
         
       databases:
         - webbing
       ```
  -    If not using Homestead, create a MySQL database called `webbing`.

- Run `npm install` (Requires Node & NPM installed)

- Run `composer install` (Requires Composer installed)

- `mv .env.example .env`

- Run `php artisan key:generate`

- Run `php artisan migrate --seed`