@extends('layouts.app')

@section('content')
    <h1>Users</h1>
    @foreach($companies as $company)
        <div class="usercard">
            <h5>{{ $company->name }}</h5>
            <p>{{ $company->location or '' }}</p>
            <p>{{ $company->description or '' }}</p>
        </div>
    @endforeach
    {{ $companies->links() }}
@endsection
