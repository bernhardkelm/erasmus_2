<nav class="navigation">
  <div class="container">
    <ul class="navigation__left">
      <li><a href="/">PluggedIN</a></li>
      <li><a href="{{ route('information') }}">Information</a></li>
      <li><a href="{{ route('users.index') }}">Users</a></li>
      <li><a href="{{ route('companies.index') }}">Companies</a></li>
      <li><a href="#">Forums</a></li>
    </ul>

    <ul class="navigation__right">
      @if($unreadMessages > 0)
        <li class="no-separator"><a href="#"><i class="mdi mdi-email-open"></i></a></li>
        <li class="no-separator"><span class="label is-primary">{{ $unreadMessages }}</span></li>
      @else
        <li class="no-separator"><a href="#"><i class="mdi mdi-email"></i></a></li>
      @endif
      @if(Auth::user()->picture)
        <img src="{{ Auth::user()->picture }}" />
      @endif
      <li><a href="{{ route('dashboard') }}">Dashboard</a></li>
      <li><a href="{{ route('users.show', ['id' => Auth::id()]) }}">Profile</a></li>
      <li class="no-separator">
        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
          Logout
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
          {{ csrf_field() }}
        </form>
      </li>
    </ul>
  </div>
</nav>
<div class="clearfix navcf"></div>