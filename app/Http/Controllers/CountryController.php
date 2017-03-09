<?php

namespace App\Http\Controllers;

use App\Services\CountryService;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index(CountryService $service)
    {
        return response()->json($service->index(), 200);
    }

}
