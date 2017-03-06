<?php

namespace App\Http\Controllers;

use App\Enumerators\UserType;
use App\Http\Requests\CompanyRequest;
use App\Services\CompanyService;
use App\Services\UserService;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CompanyService $service)
    {
        $companies = $service->index();
        return view('companies.index', [
            'companies' => $companies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if (!$request->user()->type === UserType::COMPANY) abort(403);
        return view('dashboard.company.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyRequest $request, CompanyService $service)
    {
        $service->store($request->getCompany());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CompanyService $service, $id)
    {
        $company = $service->get($id);
        if (!$company) abort(404);
        return view('companies.show', [
            'company' => $company
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(CompanyService $service, Request $request, $id)
    {
        $company = $service->get($id);
        if (!$company) abort(404);
        if (!$request->user()->can('update', $company)) abort(403);
        return view('companies.edit', [
            'company' => $company
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CompanyRequest $request, CompanyService $service, $id)
    {
        $company = $service->get($id);
        if (!$company) abort(404);
        if (!$request->user()->can('update', $company)) abort(403);
        $company = $service->update($company, $request);
        return response()->json($company, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, CompanyService $service, $id)
    {
        $company = $service->get($id);
        if (!$company) abort(404);
        if (!$request->user()->can('delete', $company)) abort(403);
        $service->destroy($company);
        return response()->json($company, 200);
    }

    public function addEmployee(Request $request, CompanyService $companyService, UserService $userService, $id)
    {
        $company = $companyService->get($id);
        if (!$company) abort(404);
        if (!$request->user()->can('update', $company)) abort(403);
        $user = $userService->find($request->get('email'));
        $companyService->addEmployee($company, $user);
        return response()->json(['alert' => 'Successfully added employee.'], 200);
    }

    public function removeEmployee(Request $request, CompanyService $companyService, $id)
    {
        $company = $companyService->get($id);
        if (!$company) abort(404);
        if (!$request->user()->can('update', $company)) abort(403);
        $companyService->removeEmployee($company, $request->get('user'));
        return response()->json(['alert' => 'Successfully removed employee.'], 200);
    }
}
