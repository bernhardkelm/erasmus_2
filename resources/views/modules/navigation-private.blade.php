<nav class="navigation">
  <div class="container">
    <ul class="navigation__left">
      <li><a href="/">PluggedIN</a></li>
      <li><a href="#">Information</a></li>
      <li><a href="#">Users</a></li>
      <li><a href="#">Companies</a></li>
      <li><a href="#">Forums</a></li>
    </ul>

    <ul class="navigation__right">
      @if($unreadMessages > 0)
        <li><a href="#"><i class="mdi mdi-email-open"></i></a></li>
        <li><span class="label is-primary">{{ $unreadMessages }}</span></li>
      @else
        <li><a href="#"><i class="mdi mdi-email"></i></a></li>
      @endif
      @if($user->picture)
        <img src="{{ $user->picture }}" />
      @endif
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Profile</a></li>
      <li>
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