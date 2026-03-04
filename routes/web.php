<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'index', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

// Style Guide Routes
Route::prefix('/style-guide')->group(function () {
    Route::get('/style-guide.index', function () {
        return Inertia::render('StyleGuide/Overview');
    })->name('style-guide.index');
    Route::get('/style-guide.link', function () {
        return Inertia::render('StyleGuide/Link');
    })->name('style-guide.link');
    Route::get('/style-guide.button', function () {
        return Inertia::render('StyleGuide/Button');
    })->name('style-guide.button');
    Route::get('/style-guide.accordion', function () {
        return Inertia::render('StyleGuide/Cards');
    })->name('style-guide.accordion');
});
