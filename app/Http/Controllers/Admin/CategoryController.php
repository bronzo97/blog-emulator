<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function posts($id)
    {
        $category = Category::findOrFail($id);

        return $category->posts;
    }
}
