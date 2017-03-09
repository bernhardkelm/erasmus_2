<?php

namespace App\Http\Controllers;

use App\Http\Requests\JobRequestRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

class JobRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(UserService $service, $userId)
    {
        $jobRequests = $service->indexJobRequests($userId);
        return response()->json($jobRequests, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('dashboard.job_requests.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(JobRequestRequest $request, UserService $service)
    {
        $jobRequest = $service->storeJobRequest($request->getJobRequest());
        return response()->json($jobRequest, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(UserService $service, $id)
    {
        $jobRequest = $service->getJobRequest($id);
        if (!$jobRequest) return response()->json(['error' => 'Job Request not found.']);
        return response()->json($jobRequest, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(UserService $service, Request $request, $id)
    {
        $jobRequest = $service->getJobRequest($id);
        if (!$jobRequest) abort(404);
        if (!$request->user()->can('update', $jobRequest)) abort(403);
        return view('dashboard.job_requests.edit', [
            'jobRequest' => $jobRequest
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(JobRequestRequest $request, UserService $service, $id)
    {
        $jobRequest = $service->getJobRequest($id);
        if (!$jobRequest) abort(404);
        if (!$request->user()->can('update', $jobRequest)) abort(403);
        $jobRequest = $service->updateJobRequest($jobRequest, $request->all());
        return response()->json($jobRequest, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, UserService $service, $id)
    {
        $jobRequest = $service->getJobRequest($id);
        if (!$jobRequest) abort(404);
        if (!$request->user()->can('delete', $jobRequest)) abort(403);
        $service->destroyJobRequest($jobRequest);
        return response()->json("{}", 200);
    }
}
