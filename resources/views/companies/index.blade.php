@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="users">
      <h2>Company Overview</h2>

      <div class="users__filter">
        <form action="{{ route('companies.index') }}" method="GET">
          <div class="row">
            <div class="column is-3">
              <select name="country" id="country" class="select">
                <option selected>Select a Country</option>
                @foreach($countries as $country)
                  <option value="{{ $country->id }}"
                          {{ Request::input('country') && Request::input('country') == $country->id ? 'selected' : '' }}
                    >{{ $country->name }}
                  </option>
                @endforeach
              </select>
            </div>
            <div class="column is-4">
              <input type="checkbox" id="requests" name="requests" {{ Request::input('requests') ? 'checked' : '' }}>
              <label for="requests">Only display companies with job offers.</label>
            </div>
            <div class="column is -2">
              <input type="submit" class="button is-outline" value="Filter">
            </div>
          </div>
        </form>
      </div>

      @unless (count($companies))
        <p>Unfortunately, no companies matching your criteria were found.<p>
      @endunless

      <div class="row is-multiline">
        @foreach($companies as $company)
          <div class="column is-4">
            <div class="users__card has-depth">
              <div class="card__left">
                <div class="card__image">
                  @if($company->picture)
                    <img class="img" src="{{ $company->picture }}">
                  @else
                    <img class="img" src="{{ asset('images/default_logo.png') }}">
                  @endif
                </div>

                <h3>{{ $company->name }}</h3>
                <a href="#" class="button is-primary">
                    <span class="icon">
                        <i class="mdi mdi-email"></i>
                    </span>
                    <span>Message</span>
                </a>
              </div>

              <div class="card__right">
                <div class="card__section">
                  <h4>Country</h4>
                  <span>{{ $company->country->name or 'Not disclosed' }}</span>
                </div>
                <div class="clearfix"></div>
                <div class="button-group">
                  <a href="{{ route('companies.show', ['id' => $company->id]) }}" class="button is-outline">
                      <span class="icon">
                          <i class="mdi mdi-account"></i>
                      </span>
                      <span>Profile</span>
                  </a>
                  <a href="{{ route('companies.show', ['id' => $company->id, 'tab' => 'offers']) }}" class="button is-outline">
                      <span class="icon">
                          <i class="mdi mdi-book-open mdi-flip"></i>
                      </span>
                      <span>Job Offers</span>
                  </a>
                </div>
              </div>
            </div><!-- users__card -->
          </div><!-- column -->
        @endforeach
      </div><!-- row -->

      @if(count($companies))
        {{ $companies->links() }}
      @endif

    </div><!-- users -->
  </div> <!-- container -->
@endsection
