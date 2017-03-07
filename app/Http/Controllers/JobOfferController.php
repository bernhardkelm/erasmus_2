<?php

namespace App\Http\Controllers;

use App\Http\Requests\JobOfferRequest;
use App\JobOffer;
use App\Services\UserService;
use Illuminate\Http\Request;

class JobOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(UserService $service, $userId)
    {
        $jobOffers = $service->indexJobOffers($userId);
        return response()->json($jobOffers, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.job_offers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JobOfferRequest $request, UserService $service)
    {
        $jobOffer = $service->storeJobOffer($request->getJobOffer());
        return response()->json($jobOffer, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(UserService $service, $id)
    {
        $jobOffer = $service->getJobOffer($id);
        if (!$jobOffer) abort(404);
        return view('dashboard.job_offers.show', [
            'jobOffer' => $jobOffer
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(UserService $service, Request $request, $id)
    {
        $jobOffer = $service->getJobOffer($id);
        if (!$jobOffer) abort(404);
        if (!$request->user()->can('update', $jobOffer)) abort(403);
        return view('dashboard.job_offers.edit', [
            'jobOffer' => $jobOffer
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(JobOfferRequest $request, UserService $service, $id)
    {
        $jobOffer = $service->getJobOffer($id);
        if (!$jobOffer) abort(404);
        if (!$request->user()->can('update', $jobOffer)) abort(403);
        $jobOffer = $service->updateJobOffer($jobOffer, $request->all());
        return response()->json($jobOffer, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, UserService $service, $id)
    {
        $jobOffer = $service->getJobOffer($id);
        if (!$jobOffer) abort(404);
        if (!$request->user()->can('delete', $jobOffer)) abort(403);
        $service->destroyJobOffer($jobOffer);
        return response()->json("{}", 200);
    }
}
