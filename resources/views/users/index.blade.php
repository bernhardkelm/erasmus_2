@extends('layouts.app')

@section('content')
  <div class="container">
    <div class="users">
      <h2>User Overview</h2>

      <div class="users__filter">
        <form action="{{ route('users.index') }}" method="GET">
          <div class="row">
            <div class="column is-3">
              <select name="country" id="country">
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
              <label for="requests">Only display users with job requests</label>
            </div>
            <div class="column is -2">
              <input type="submit" class="button is-outline" value="Filter">
            </div>
          </div>
        </form>
      </div>

      @unless (count($users))
        <p>Unfortunately, no users matching your criteria were found.<p>
      @endunless

      <div class="row is-multiline">
        @foreach($users as $user)
          <div class="column is-4">
            <div class="users__card has-depth">
              <div class="card__left">
                <div class="card__image">
                  @if($user->picture)
                    <img class="img" src="{{ $user->picture}}">
                  @else
                    <img class="img" src="{{ asset('images/default_avatar.jpg') }}">
                  @endif
                </div>

                <h3>{{ $user->name }}</h3>
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
                  <span>{{ $user->country->name or 'Not disclosed' }}</span>
                </div>
                <div class="clearfix"></div>
                <div class="card__section">
                  <h4>Major</h4>
                  <span>{{ $user->major or 'Not disclosed' }}</span>
                </div>
                <div class="clearfix"></div>
                <div class="card__section">
                  <h4>Languages</h4>
                  <span>{{ $user->languages or 'Not disclosed' }}</span>
                </div>
                <div class="clearfix"></div>
                <div class="button-group">
                  <a href="{{ route('users.show', ['id' => $user->id]) }}" class="button is-outline">
                      <span class="icon">
                          <i class="mdi mdi-account"></i>
                      </span>
                      <span>Profile</span>
                  </a>
                  <a href="{{ route('users.show', ['id' => $user->id, 'tab' => 'requests']) }}" class="button is-outline">
                      <span class="icon">
                          <i class="mdi mdi-book-open"></i>
                      </span>
                      <span>Job Requests</span>
                  </a>
                </div>
              </div>
            </div><!-- users__card -->
          </div><!-- column -->
        @endforeach
      </div><!-- row -->

      @if(count($users))
        {{ $users->links() }}
      @endif

    </div><!-- users -->
  </div> <!-- container -->
@endsection
