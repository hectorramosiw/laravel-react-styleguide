<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::inertia('/', 'index', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::get('/gallery', function () {
    return Inertia::render('gallery');
})->name('gallery');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

// Style Guide Routes
Route::prefix('/style-guide')->group(function () {
    Route::get('/', function () {
        return Inertia::render('style-guide/index');
    })->name('style-guide.index');

    Route::get('/carousel', function () {
        return Inertia::render('style-guide/carousel');
    })->name('style-guide.carousel');

    Route::get('/link', function () {
        return Inertia::render('style-guide/link');
    })->name('style-guide.link');

    Route::get('/button', function () {
        return Inertia::render('style-guide/button');
    })->name('style-guide.button');

    Route::get('/accordion', function () {
        return Inertia::render('style-guide/accordion');
    })->name('style-guide.accordion');
});
