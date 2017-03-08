@extends('layouts.app')

@section('content')
<div class="dashboard" id="app">
  <div class="dashboard__nav">
    <div class="nav__head">
      <div class="nav__image">
        @if ($user->picture)
          <img class="img" src="{{ $user->picture }}">
        @else 
          <img class="img" src="{{ asset('images/default_avatar.jpg') }}">
        @endif
      </div>
      <h2 id="profile_name">{{ $user->name }}</h2>
	  </div>
    <div class="nav__body">
      <ul class="nav__options">
        <li><router-link class="elem" to="/dashboard/inbox"><i class="mdi mdi-email red"></i>Inbox</router-link></li>
        @if ($user->isUser())
        <li><router-link class="elem" to="/dashboard/profile"><i class="mdi mdi-lead-pencil blue"></i>Edit Profile</router-link></li>
        <li><router-link class="elem" to="/dashboard/jobrequests"><i class="mdi mdi-book-open purple"></i>Job Requests</router-link></li>
        @else
        <li><router-link class="elem" to="/dashboard/company"><i class="mdi mdi-domain green"></i>Edit Company</router-link></li>
        <li><router-link class="elem" to="/dashboard/joboffers"><i class="mdi mdi-book-open pink mdi-flip"></i>Job Offers</router-link></li>
        @endif
        @if ($user->isAdmin())
        <li><router-link class="elem" to="/dashboard/admin"><i class="mdi mdi-settings green"></i>Admin Section</router-link></li>
        @endif
      </ul>
    </div>
	</div>
  <main class="dashboard__content">
    <div>
      <transition 
        name="fade" 
        enter-active-class="animated fadeIn" 
        leave-active-class="animated fadeOut" 
        mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </main>
</div>
@endsection

@section('scripts')
  @parent
  <script src="/js/index.js"></script>
  <script src="/js/dashboard.js"></script>
@endsection
