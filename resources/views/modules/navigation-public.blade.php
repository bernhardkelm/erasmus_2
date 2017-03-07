<nav class="navigation">
  <div class="container">
    <ul class="navigation__left">
      <li><a href="/">PluggedIN</a></li>
      <li><a href="{{ route('information') }}">Information</a></li>
    </ul>

    <ul class="navigation__right">
      @if (Auth::guest())
        <li><a href="{{ route('login') }}">Login</a></li>
        <li class="no-separator"><a href="{{ route('register') }}">Register</a></li>
      @else
        <li class="no-separator">
          <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
            Logout
          </a>
          <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            {{ csrf_field() }}
          </form>
        </li>
      @endif
    </ul>
  </div>
</nav>
<div class="clearfix navcf"></div>