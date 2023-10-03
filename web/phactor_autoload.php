<?php

/**
 * @file
 */

use Drupal\Console\Bootstrap\DrupalKernel;
use Drupal\Console\Core\Utils\DrupalFinder;
use Symfony\Component\HttpFoundation\Request;

$autoload = require_once __DIR__ . '/autoload.php';

$root = getcwd();

$drupalFinder = new DrupalFinder();
if (!$drupalFinder->locateRoot($root)) {
  die('DrupalConsole must be executed within a Drupal Site.');
}

chdir($drupalFinder->getDrupalRoot());

$drupalKernel = DrupalKernel::createFromRequest(
  Request::createFromGlobals(),
  $autoload,
  'dev',
  TRUE,
  $drupalFinder->getDrupalRoot()
);
$drupalKernel->boot();
chdir($root);

return $autoload;
